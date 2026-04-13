import LegalHero from "./LegalHero";
import { SectionTitle, SubsectionTitle } from "./LegalComponents";

function CookieCategory({ title, badge, children }: { title: string; badge?: string; children: React.ReactNode }) {
  return (
    <div className="border border-[#c3c8ba] rounded-xl bg-white overflow-hidden mb-4">
      <div className="flex items-center justify-between gap-3 p-4 bg-[#f3f6ef] border-b border-[#c3c8ba] font-bold">
        <span>{title}</span>
        {badge && <span className="text-[11px] rounded-full border border-[#a3c18f] text-[#244118] px-2 py-0.5 bg-[#e9f4e2] whitespace-nowrap">{badge}</span>}
      </div>
      {children}
    </div>
  );
}

function CookieTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#f3f6ef]">
            {headers.map((h, i) => <th key={i} className="text-left p-3 border-b border-[#c3c8ba]">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#c3c8ba] last:border-0">
              {row.map((cell, j) => <td key={j} className="p-3">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CookiePolicy() {
  return (
    <article>
      <LegalHero
        title="Cookie Policy"
        subtitle="How we use cookies and similar tracking technologies on our website"
        chips={["📅 Effective: 27 March 2026", "🍪 ePrivacy Directive Compliant"]}
      />

      <SectionTitle id="what-are-cookies">1. What Are Cookies?</SectionTitle>
      <p>Cookies are small text files placed on your device when you visit a website. They help websites function properly, remember preferences, and provide analytical data to website owners. Some cookies are essential for the site to work; others are optional and used for analytics or marketing.</p>

      <SectionTitle id="cookies-we-use">2. Cookies We Use</SectionTitle>
      <p>Use the categories below to understand cookie usage. Strictly necessary cookies cannot be disabled as they are essential for the site to function.</p>

      <CookieCategory title="🔒 Strictly Necessary" badge="Always On">
        <CookieTable
          headers={["Cookie", "Purpose", "Duration"]}
          rows={[
            ["_session", "Maintains your session as you navigate pages", "Session"],
            ["XSRF-TOKEN", "Protects against cross-site request forgery attacks", "Session"],
            ["cookie_consent", "Stores your cookie preference choices", "1 year"],
          ]}
        />
      </CookieCategory>

      <CookieCategory title="📊 Analytics Cookies">
        <CookieTable
          headers={["Cookie", "Purpose", "Duration"]}
          rows={[
            ["_ga", "Google Analytics, distinguishes users, measures traffic", "2 years"],
            ["_gid", "Identifies user sessions for analytics", "24 hours"],
            ["_gat", "Throttles Google Analytics request rate", "1 minute"],
          ]}
        />
      </CookieCategory>

      <CookieCategory title="⚙️ Functional Cookies">
        <CookieTable
          headers={["Cookie", "Purpose", "Duration"]}
          rows={[["lang_pref", "Remembers your language and display preferences", "1 year"]]}
        />
      </CookieCategory>

      <CookieCategory title="📣 Marketing Cookies (Optional)">
        <CookieTable
          headers={["Cookie", "Purpose", "Duration"]}
          rows={[
            ["_fbp", "Facebook Pixel, ad tracking (only if ads are active)", "3 months"],
            ["_gcl_au", "Google Ads, conversion tracking", "3 months"],
          ]}
        />
      </CookieCategory>

      <SectionTitle id="browser-controls">3. Browser Cookie Controls</SectionTitle>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse rounded-xl overflow-hidden border border-[#c3c8ba] text-sm">
          <thead>
            <tr className="bg-[#f3f6ef]">
              <th className="text-left p-3 border-b border-[#c3c8ba]">Browser</th>
              <th className="text-left p-3 border-b border-[#c3c8ba]">Where to Manage Cookies</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-[#c3c8ba]"><strong>Google Chrome</strong></td><td className="p-3 border-b border-[#c3c8ba]">Settings → Privacy and Security → Cookies and other site data</td></tr>
            <tr><td className="p-3 border-b border-[#c3c8ba]"><strong>Mozilla Firefox</strong></td><td className="p-3 border-b border-[#c3c8ba]">Options → Privacy and Security → Cookies and Site Data</td></tr>
            <tr><td className="p-3 border-b border-[#c3c8ba]"><strong>Safari</strong></td><td className="p-3 border-b border-[#c3c8ba]">Preferences → Privacy → Manage Website Data</td></tr>
            <tr><td className="p-3"><strong>Microsoft Edge</strong></td><td className="p-3">Settings → Cookies and Site Permissions</td></tr>
          </tbody>
        </table>
      </div>

      <SectionTitle id="third-party">4. Third-Party Cookies</SectionTitle>
      <ul className="list-disc ml-6 my-2">
        <li>Google Analytics: website usage analytics (anonymised)</li>
        <li>Google Fonts: font loading (no personal data stored)</li>
        <li>LinkedIn Insight Tag: B2B ad tracking to relevant professionals (when ads are active)</li>
      </ul>

      <SectionTitle id="do-not-track">5. Do Not Track</SectionTitle>
      <p>Some browsers have a &quot;Do Not Track&quot; (DNT) feature. We currently do not alter our data collection practices based on DNT signals, but we honour your cookie consent preferences set through our banner.</p>

      <SectionTitle id="contact-cookies">6. Contact</SectionTitle>
      <p>For cookie-related queries: <a href="mailto:privacy@samriddhianveshana.in" className="text-[#41642f] hover:underline">privacy@samriddhianveshana.in</a> · Grievance Officer: Praveen Raj</p>
    </article>
  );
}
