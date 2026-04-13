import LegalHero from "./LegalHero";
import { Callout, Card, SectionTitle, SubsectionTitle, AddressGrid, TwoColumn } from "./LegalComponents";

export default function TermsOfUse() {
  return (
    <article>
      <LegalHero
        title="Terms of Use"
        subtitle="Governing your use of our website and engagement with our services"
        chips={["📅 Effective: 27 March 2026", "⚖️ Jurisdiction: Hyderabad, India"]}
      />

      <SectionTitle id="acceptance">1. Acceptance of Terms</SectionTitle>
      <p>By accessing or using <strong>samriddhianveshana.in</strong>, you agree to be bound by these Terms of Use. If you do not agree, please do not use our website. These terms apply to all visitors, prospective clients, and anyone who engages with Samriddhi Anveshana.</p>

      <SectionTitle id="about-us">2. About Samriddhi Anveshana</SectionTitle>
      <p>We are a multi-domain technology and business services company. Our service categories and industry domains:</p>
      
      <TwoColumn>
        <div>
          <SubsectionTitle>Service Categories</SubsectionTitle>
          <ul className="list-disc ml-6 my-2 text-sm">
            <li>AI and Automation Solutions</li>
            <li>Application Development</li>
            <li>Integrated Accounting, Audit and Compliance Solutions</li>
            <li>Business Consulting and Growth Services</li>
            <li>Real Estate and Property Solutions</li>
            <li>DevOps</li>
            <li>Digital Marketing and Branding</li>
            <li>Testing and Quality Assurance</li>
            <li>HR and Talent Management</li>
            <li>Business Support Services (24/7 BPO / Operations)</li>
          </ul>
        </div>
        <div>
          <SubsectionTitle>Industry Domains</SubsectionTitle>
          <ul className="list-disc ml-6 my-2 text-sm">
            <li>Healthcare</li>
            <li>Finance</li>
            <li>Banking</li>
            <li>E-Commerce</li>
            <li>Retail Stores</li>
            <li>Restaurants and Food</li>
            <li>Startups</li>
            <li>Education</li>
          </ul>
        </div>
      </TwoColumn>

      <SectionTitle id="permitted-use">3. Permitted and Prohibited Use</SectionTitle>
      <SubsectionTitle>Permitted Use</SubsectionTitle>
      <ul className="list-disc ml-6 my-2">
        <li>Browse information about our company and services</li>
        <li>Submit inquiries or project requirements via contact forms</li>
        <li>Download publicly available resources such as brochures</li>
        <li>Engage with us for potential business collaboration</li>
      </ul>
      
      <SubsectionTitle>Prohibited Use</SubsectionTitle>
      <ul className="list-disc ml-6 my-2">
        <li>Reproduce, copy, or redistribute any content without written permission</li>
        <li>Use our website for unlawful, fraudulent, or harmful purposes</li>
        <li>Attempt unauthorised access to our systems or data</li>
        <li>Upload or transmit malware, viruses, or malicious code</li>
        <li>Impersonate us or any of our team members</li>
        <li>Use automated tools to scrape or extract data from this website</li>
      </ul>

      <SectionTitle id="ip">4. Intellectual Property</SectionTitle>
      <p>All content on this website — text, graphics, logos, icons, images, code samples, case studies, and service descriptions — is the exclusive intellectual property of Samriddhi Anveshana, protected under Indian copyright law and international treaties.</p>
      
      <Callout variant="warn">
        <div className="font-bold mb-1">⚠️ Content Usage</div>
        <div>You may not use, copy, modify, or distribute any content without prior written consent. Contact <a href="mailto:info@samriddhianveshana.in" className="text-[#41642f] hover:underline">info@samriddhianveshana.in</a> for permissions.</div>
      </Callout>

      <SectionTitle id="engagements">5. Client Engagements</SectionTitle>
      <p>These Terms govern website use only. Actual service engagements are governed by separate signed Service Agreements or Statements of Work (SOWs).</p>
      <ul className="list-disc ml-6 my-2">
        <li>NDAs available upon request before sharing sensitive project details</li>
        <li>All client project data is treated with strict confidentiality</li>
        <li>Case studies are anonymised unless explicit client consent is given</li>
      </ul>

      <SectionTitle id="liability">6. Limitation of Liability</SectionTitle>
      <p>Samriddhi Anveshana shall not be liable for any indirect, incidental, consequential, or punitive damages arising from use of this website, including loss of data, profits, errors, inaccuracies, or harm from unauthorised system access. Our maximum liability shall not exceed the amount paid for services in the 3 months preceding any claim.</p>

      <SectionTitle id="governing-law">7. Governing Law</SectionTitle>
      <p>These Terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in <strong>Hyderabad, Telangana, India</strong>. Contact us at <a href="mailto:info@samriddhianveshana.in" className="text-[#41642f] hover:underline">info@samriddhianveshana.in</a> before initiating legal proceedings. We aim to resolve complaints within 7 business days.</p>

      <SectionTitle id="contact-terms">8. Contact</SectionTitle>
      <AddressGrid>
        <Card>
          <div className="text-[11px] uppercase font-bold tracking-wider text-[#73796d] mb-2">IT Operations</div>
          <div>705, Workafella Cyber Crown<br />HiTech City, Hyderabad, Telangana, India</div>
        </Card>
        <Card>
          <div className="text-[11px] uppercase font-bold tracking-wider text-[#73796d] mb-2">Email</div>
          <div><a href="mailto:info@samriddhianveshana.in" className="text-[#41642f] hover:underline">info@samriddhianveshana.in</a></div>
        </Card>
      </AddressGrid>
    </article>
  );
}
