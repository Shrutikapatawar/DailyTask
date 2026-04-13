import Link from "next/link";
import LegalHero from "./LegalHero";
import { Callout, SectionTitle } from "./LegalComponents";

function DisclaimerBlock({ type, title, children }: { type: string; title: string; children: React.ReactNode }) {
  return (
    <div className="border border-[#c3c8ba] bg-white rounded-xl p-4 mb-4">
      <div className="text-[11px] uppercase tracking-wider font-bold text-[#73796d] mb-1">{type}</div>
      <div className="font-bold mb-1">{title}</div>
      <div className="text-sm text-[#43493e]">{children}</div>
    </div>
  );
}

export default function Disclaimer() {
  return (
    <article>
      <LegalHero
        title="Disclaimer"
        subtitle="Important notices regarding information published on this website"
        chips={["📅 Effective: 27 March 2026", "⚖️ Jurisdiction: India"]}
      />

      <Callout variant="warn">
        <div className="font-bold mb-1">⚠️ Important — Read Before Relying on This Website</div>
        <div>Please read these notices carefully before relying on any content for business, financial, legal, or medical decisions.</div>
      </Callout>

      <SectionTitle id="general-info">1. General Information Only</SectionTitle>
      <p>All content on samriddhianveshana.in is provided for <strong>general informational and marketing purposes only</strong>. It does not constitute professional advice of any kind. While we strive for accuracy, we make no warranties regarding completeness, accuracy, or suitability of any information published on this website.</p>

      <SectionTitle id="industry-specific">2. Industry-Specific Disclaimers</SectionTitle>
      
      <DisclaimerBlock type="Finance and Fintech" title="Not Financial Advice">
        Samriddhi Anveshana provides technology services to the finance and banking sectors. Content describing fintech solutions or financial software is illustrative only. Nothing on this website constitutes financial advice, investment advice, tax advice, or any regulated financial service. We are a technology company, not a registered financial advisor. Always consult a qualified financial professional.
      </DisclaimerBlock>

      <DisclaimerBlock type="Healthcare Technology" title="Not Medical Advice">
        We provide technology and software development services to healthcare organisations. Nothing here constitutes medical advice, clinical guidance, or a substitute for professional medical judgment. Our solutions are tools to support, not replace, qualified medical professionals.
      </DisclaimerBlock>

      <DisclaimerBlock type="Legal and Compliance" title="Not Legal Advice">
        Our Accounting, Audit and Compliance service line provides technology and process support. We are not a law firm and do not provide legal advice. Nothing creates an attorney-client relationship. Always consult a qualified legal professional or chartered accountant for compliance requirements.
      </DisclaimerBlock>

      <DisclaimerBlock type="AI and Automation" title="AI Outputs Require Human Oversight">
        AI-generated outputs may contain errors, biases, or inaccuracies. All AI implementations should be reviewed, validated, and supervised by qualified human professionals before use in any critical business, financial, medical, or legal context.
      </DisclaimerBlock>

      <SectionTitle id="case-studies">3. Case Studies and Results</SectionTitle>
      <p>Case studies and results on this website represent past performance under specific circumstances. They are <strong>not guarantees of future results</strong>. Client names and identifying details are anonymised unless explicit written consent has been obtained.</p>

      <SectionTitle id="third-party-links">4. Third-Party Links</SectionTitle>
      <p>This website may reference third-party tools, platforms, statistics, or industry reports. We do not endorse or take responsibility for third-party content. References are for informational purposes only.</p>

      <SectionTitle id="penalties">5. Global Compliance Penalty Reference</SectionTitle>
      <div className="overflow-x-auto my-4">
        <table className="w-full border-collapse rounded-xl overflow-hidden border border-[#c3c8ba] text-sm">
          <thead>
            <tr className="bg-[#f3f6ef]">
              <th className="text-left p-3 border-b border-[#c3c8ba]">Law</th>
              <th className="text-left p-3 border-b border-[#c3c8ba]">Maximum Fine</th>
              <th className="text-left p-3 border-b border-[#c3c8ba]">Notable Case</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border-b border-[#c3c8ba]">GDPR</td><td className="p-3 border-b border-[#c3c8ba]">EUR 20M or 4% of global turnover</td><td className="p-3 border-b border-[#c3c8ba]">Meta fined EUR 1.2B by Ireland DPC (2023)</td></tr>
            <tr><td className="p-3 border-b border-[#c3c8ba]">CCPA</td><td className="p-3 border-b border-[#c3c8ba]">USD 7,500 per intentional violation</td><td className="p-3 border-b border-[#c3c8ba]">Sephora settled USD 1.2M with California AG</td></tr>
            <tr><td className="p-3 border-b border-[#c3c8ba]">ADA</td><td className="p-3 border-b border-[#c3c8ba]">USD 75K first violation</td><td className="p-3 border-b border-[#c3c8ba]">Domino&apos;s sued over inaccessible website</td></tr>
            <tr><td className="p-3 border-b border-[#c3c8ba]">COPPA</td><td className="p-3 border-b border-[#c3c8ba]">USD 51,744 per child violated</td><td className="p-3 border-b border-[#c3c8ba]">YouTube fined USD 170M for child data</td></tr>
            <tr><td className="p-3">PCI-DSS</td><td className="p-3">USD 5K–USD 100K per month</td><td className="p-3">British Airways fined after 2018 breach</td></tr>
          </tbody>
        </table>
      </div>

      <SectionTitle id="governing-disc">6. Governing Law</SectionTitle>
      <p>This Disclaimer is governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in <strong>Hyderabad, Telangana, India</strong>.</p>

      <SectionTitle id="contact-disc">7. Contact</SectionTitle>
      <div className="flex gap-4 items-start p-4 border border-[#c3c8ba] bg-white rounded-xl my-4">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#41642f] to-[#597d45] text-white flex items-center justify-center font-bold text-sm shrink-0">
          SA
        </div>
        <div>
          <div><strong>Samriddhi Anveshana</strong></div>
          <div className="text-sm text-[#43493e]">For all legal queries and notices</div>
          <div className="text-sm"><a href="mailto:info@samriddhianveshana.in" className="text-[#41642f] hover:underline">📧 info@samriddhianveshana.in</a></div>
          <div className="text-sm"><a href="https://samriddhianveshana.in/" target="_blank" rel="noopener noreferrer" className="text-[#41642f] hover:underline">🌐 https://samriddhianveshana.in/</a></div>
        </div>
      </div>
    </article>
  );
}
