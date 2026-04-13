import { NextResponse } from 'next/server';
import crypto from 'crypto';

function base64UrlEncode(input: string | Buffer) {
  const base64 = typeof input === 'string' ? Buffer.from(input).toString('base64') : input.toString('base64');
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function createJWT(clientEmail: string, privateKey: string) {
  const header = base64UrlEncode(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const now = Math.floor(Date.now() / 1000);
  const claimSet = base64UrlEncode(
    JSON.stringify({
      iss: clientEmail,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now,
    })
  );

  const unsignedJWT = `${header}.${claimSet}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsignedJWT);
  signer.end();

  const signature = signer.sign(privateKey, 'base64');
  return `${unsignedJWT}.${base64UrlEncode(signature)}`;
}

async function getSheetsToken() {
  const serviceAccountJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!serviceAccountJson) {
    throw new Error('Missing GOOGLE_SERVICE_ACCOUNT_KEY environment variable.');
  }

  let serviceAccount;
  try {
    serviceAccount = JSON.parse(serviceAccountJson);
  } catch (err) {
    throw new Error('Invalid GOOGLE_SERVICE_ACCOUNT_KEY JSON.');
  }

  const { client_email, private_key } = serviceAccount;
  if (!client_email || !private_key) {
    throw new Error('SERVICE ACCOUNT JSON must contain client_email and private_key.');
  }

  const jwt = createJWT(client_email, private_key);
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  if (!tokenResponse.ok) {
    const text = await tokenResponse.text();
    throw new Error(`Token fetch failed: ${tokenResponse.status} ${text}`);
  }

  const tokenData = await tokenResponse.json();
  if (!tokenData.access_token) {
    throw new Error('No access_token returned from Google OAuth2.');
  }

  return tokenData.access_token;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, mobile, services, message, hasAcceptedPolicy } = body;

  if (!name || !email || !mobile || !services || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  if (!hasAcceptedPolicy) {
    return NextResponse.json({ error: 'Policy acceptance required.' }, { status: 400 });
  }

  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const sheetRange = process.env.GOOGLE_SHEETS_RANGE || 'Sheet1!A:F';

  if (!spreadsheetId) {
    return NextResponse.json({ error: 'Missing GOOGLE_SHEETS_SPREADSHEET_ID environment variable.' }, { status: 500 });
  }

  try {
    const accessToken = await getSheetsToken();

    const values = [[
      new Date().toISOString(),
      String(name),
      String(email),
      String(mobile),
      Array.isArray(services) ? services.join(', ') : String(services),
      String(message),
      String(hasAcceptedPolicy),
    ]];

    const appendResponse = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(sheetRange)}:append?valueInputOption=USER_ENTERED`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ values }),
      }
    );

    if (!appendResponse.ok) {
      const text = await appendResponse.text();
      throw new Error(`Sheets append failed: ${appendResponse.status} ${text}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Google Sheets integration error:', error);
    return NextResponse.json({ error: (error as Error).message || 'Unknown error' }, { status: 500 });
  }
}
