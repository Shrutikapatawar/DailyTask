import Link from "next/link";
import LegalHero from "./LegalHero";
import { Callout, Card, SectionTitle, SubsectionTitle, AddressGrid, TwoColumn } from "./LegalComponents";

export default function PrivacyPolicy() {
  return (
    <article>
      <LegalHero
        title="Privacy Policy"
        subtitle="How Samriddhi Anveshana collects, uses, and protects your personal information"
        chips={["📅 Effective: 27 March 2026", "✅ GDPR · CCPA · DPDP Act 2023", "🌍 Global Coverage"]}
      />

      <Callout variant="info">
        <div className="font-bold mb-1">ℹ️ Applicable Laws</div>
        <div>India: DPDP Act 2023 and IT Act 2000 · EU/UK: GDPR / UK GDPR · USA: CCPA (California) · General international best practices</div>
      </Callout>

      <SectionTitle id="who-we-are">1. Who We Are</SectionTitle>
      <p><strong>Samriddhi Anveshana</strong> is a technology and business services company registered in Telangana, India. We serve clients globally across AI, Software Development, DevOps, Digital Marketing, Accounting and Compliance, HR, Real Estate, BPO, and Testing and QA in Healthcare, Finance, Banking, E-Commerce, Retail, Restaurants, Startups, and Education.</p>
      
      <AddressGrid>
        <Card>
          <div className="text-[11px] uppercase font-bold tracking-wider text-[#73796d] mb-2">IT Operations Office</div>
          <div>705, Workafella Cyber Crown<br />HiTech City, Hyderabad<br />Telangana, India</div>
        </Card>
        <Card>
          <div className="text-[11px] uppercase font-bold tracking-wider text-[#73796d] mb-2">Registered Office</div>
          <div>H.No: 1-5-75/73, Padmavathi Colony<br />Bhainsa, Mudhole, Adilabad - 504103<br />Telangana, India</div>
        </Card>
      </AddressGrid>
      
      <p>🌐 <a href="https://samriddhianveshana.in/" target="_blank" rel="noopener noreferrer" className="text-[#41642f] hover:underline">https://samriddhianveshana.in/</a> · 📧 privacy@samriddhianveshana.in</p>

      <SectionTitle id="what-we-collect">2. What Information We Collect</SectionTitle>
      <SubsectionTitle>2.1 Directly Provided</SubsectionTitle>
      <ul className="list-disc ml-6 my-2">
        <li>Name, job title, and company name</li>
        <li>Email address and phone number (via contact forms)</li>
        <li>Project requirements and business details shared in inquiries</li>
        <li>Documents or files voluntarily sent to us</li>
      </ul>
      
      <SubsectionTitle>2.2 Collected Automatically</SubsectionTitle>
      <ul className="list-disc ml-6 my-2">
        <li>IP address and approximate geographic location</li>
        <li>Browser type, device type, and operating system</li>
        <li>Pages visited, time spent, and navigation paths</li>
        <li>Referring URLs and search terms used to find us</li>
        <li>Cookie identifiers (see Cookie Policy for full details)</li>
      </ul>
      
      <SubsectionTitle>2.3 From Third Parties</SubsectionTitle>
      <ul className="list-disc ml-6 my-2">
        <li>LinkedIn or professional networks if you contact us via those platforms</li>
        <li>Analytics providers supplying aggregated, anonymised usage data</li>
      </ul>

      <SectionTitle id="why-we-collect">3. Why We Collect Your Information</SectionTitle>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse rounded-xl overflow-hidden border border-[#c3c8ba] text-sm">
          <thead>
            <tr className="bg-[#f3f6ef]">
              <th className="text-left p-3 border-b border-[#c3c8ba]">Purpose</th>
              <th className="text-left p-3 border-b border-[#c3c8ba]">Legal Basis (GDPR)</th>
              <th className="text-left p-3 border-b border-[#c3c8ba]">Applies To</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-[#c3c8ba]">Respond to your contact/inquiry</td><td className="p-3 border-b border-[#c3c8ba]">Legitimate Interest / Contract</td><td className="p-3 border-b border-[#c3c8ba]">All visitors</td></tr>
            <tr><td className="p-3 border-b border-[#c3c8ba]">Send project proposals and quotes</td><td className="p-3 border-b border-[#c3c8ba]">Contract / Consent</td><td className="p-3 border-b border-[#c3c8ba]">Prospective clients</td></tr>
            <tr><td className="p-3 border-b border-[#c3c8ba]">Provide agreed services to clients</td><td className="p-3 border-b border-[#c3c8ba]">Contract</td><td className="p-3 border-b border-[#c3c8ba]">Active clients</td></tr>
            <tr><td className="p-3 border-b border-[#c3c8ba]">Improve website performance</td><td className="p-3 border-b border-[#c3c8ba]">Legitimate Interest</td><td className="p-3 border-b border-[#c3c8ba]">All visitors</td></tr>
            <tr><td className="p-3 border-b border-[#c3c8ba]">Send marketing updates (newsletters)</td><td className="p-3 border-b border-[#c3c8ba]">Consent</td><td className="p-3 border-b border-[#c3c8ba]">Opted-in contacts</td></tr>
            <tr><td className="p-3 border-b border-[#c3c8ba]">Comply with legal obligations</td><td className="p-3 border-b border-[#c3c8ba]">Legal Obligation</td><td className="p-3 border-b border-[#c3c8ba]">As required by law</td></tr>
            <tr><td className="p-3">Analytics and website improvement</td><td className="p-3">Legitimate Interest / Consent</td><td className="p-3">All visitors</td></tr>
          </tbody>
        </table>
      </div>

      <SectionTitle id="data-retention">4. How Long We Keep Your Data</SectionTitle>
      <ul className="list-disc ml-6 my-2">
        <li>Contact form inquiries: 2 years from last interaction</li>
        <li>Client project data: 5 years after project completion</li>
        <li>Financial and accounting records: 7 years (Companies Act)</li>
        <li>Marketing email lists: until you unsubscribe</li>
        <li>Analytics data: typically 26 months (provider settings)</li>
        <li>Cookie consent records: 1 year</li>
      </ul>

      <SectionTitle id="data-sharing">5. Who We Share Your Data With</SectionTitle>
      <p>We do <strong>not sell</strong> your personal data. We may share it only with:</p>
      <ul className="list-disc ml-6 my-2">
        <li>Cloud hosting providers (servers where our website is hosted)</li>
        <li>Google Analytics: anonymised usage data only</li>
        <li>Email communication tools for responding to your inquiries</li>
        <li>Project management platforms used in delivering your project</li>
        <li>Legal or regulatory authorities when required by law</li>
      </ul>
      
      <Callout variant="ok">
        <div className="font-bold mb-1">✅ Data Processing Agreements</div>
        <div>All third-party processors are bound by Data Processing Agreements (DPAs) and must maintain equivalent data protection standards.</div>
      </Callout>

      <SectionTitle id="your-rights">6. Your Rights</SectionTitle>
      <SubsectionTitle>Under GDPR (EU / UK Visitors)</SubsectionTitle>
      <div className="grid grid-cols-3 gap-4 my-4">
        <Card><div className="text-xl mb-2">👁️</div><div className="font-bold">Right to Access</div><div className="text-sm text-[#43493e]">Request a copy of your personal data we hold</div></Card>
        <Card><div className="text-xl mb-2">✏️</div><div className="font-bold">Right to Rectification</div><div className="text-sm text-[#43493e]">Correct any inaccurate or incomplete data</div></Card>
        <Card><div className="text-xl mb-2">🗑️</div><div className="font-bold">Right to Erasure</div><div className="text-sm text-[#43493e]">Request deletion, the &quot;Right to Be Forgotten&quot;</div></Card>
        <Card><div className="text-xl mb-2">⏸️</div><div className="font-bold">Right to Restrict</div><div className="text-sm text-[#43493e]">Limit how we use your personal data</div></Card>
        <Card><div className="text-xl mb-2">📦</div><div className="font-bold">Right to Portability</div><div className="text-sm text-[#43493e]">Receive your data in a machine-readable format</div></Card>
        <Card><div className="text-xl mb-2">🚫</div><div className="font-bold">Right to Object</div><div className="text-sm text-[#43493e]">Object to processing based on legitimate interest</div></Card>
      </div>

      <SubsectionTitle>Under CCPA (California Visitors)</SubsectionTitle>
      <ul className="list-disc ml-6 my-2">
        <li>Right to Know what categories of data we collect</li>
        <li>Right to Delete personal information</li>
        <li>Right to Opt-Out of any sale of data (we do not sell data)</li>
        <li>Right to Non-Discrimination for exercising rights</li>
      </ul>

      <SubsectionTitle>Under DPDP Act 2023 (India)</SubsectionTitle>
      <ul className="list-disc ml-6 my-2">
        <li>Right to access information about your personal data</li>
        <li>Right to correction and erasure of inaccurate data</li>
        <li>Right to grievance redressal via our Grievance Officer</li>
        <li>Right to nominate a representative for data decisions</li>
      </ul>

      <SectionTitle id="security">7. Data Security</SectionTitle>
      <ul className="list-disc ml-6 my-2">
        <li>HTTPS encryption across our entire website</li>
        <li>Access controls limiting data to authorised personnel only</li>
        <li>Regular security assessments and vulnerability monitoring</li>
        <li>Secure email communication practices</li>
        <li>Employee data protection awareness training</li>
      </ul>
      
      <Callout variant="warn">
        <div className="font-bold mb-1">⚠️ Data Breach Notification</div>
        <div>In the event of a data breach, we will notify relevant authorities within 72 hours (GDPR) and 6 hours (CERT-In India), and affected individuals without undue delay.</div>
      </Callout>

      <SectionTitle id="grievance">8. Grievance Officer</SectionTitle>
      <p>Appointed in accordance with India&apos;s Digital Personal Data Protection Act 2023:</p>
      <div className="flex gap-4 items-start p-4 border border-[#c3c8ba] bg-white rounded-xl my-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#41642f] to-[#597d45] text-white flex items-center justify-center font-bold text-sm shrink-0">
          PR
        </div>
        <div>
          <div><strong>Praveen Raj</strong></div>
          <div className="text-sm text-[#43493e]">Grievance Officer - Samriddhi Anveshana</div>
          <div className="text-sm"><a href="mailto:grievance@samriddhianveshana.in" className="text-[#41642f] hover:underline">📧 grievance@samriddhianveshana.in</a></div>
          <div className="text-sm"><a href="mailto:privacy@samriddhianveshana.in" className="text-[#41642f] hover:underline">📧 privacy@samriddhianveshana.in (general)</a></div>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap my-4">
        <span className="bg-[#edf5e8] border border-[#c8dcc0] rounded-full px-4 py-2 text-[13px] font-semibold text-[#2a4520]">Acknowledgement within 48 hours</span>
        <span className="bg-[#edf5e8] border border-[#c8dcc0] rounded-full px-4 py-2 text-[13px] font-semibold text-[#2a4520]">Resolution within 30 days</span>
      </div>

      <SectionTitle id="contact">9. Contact Us</SectionTitle>
      <p>For privacy-related queries, data requests, or complaints: <a href="mailto:privacy@samriddhianveshana.in" className="text-[#41642f] hover:underline">privacy@samriddhianveshana.in</a> or directly to our Grievance Officer at <a href="mailto:grievance@samriddhianveshana.in" className="text-[#41642f] hover:underline">grievance@samriddhianveshana.in</a>.</p>
    </article>
  );
}
