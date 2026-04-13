import Link from "next/link";
import Header from "@/components/Global-MainHeader";
import Footer from "@/components/Global-MainFooter";

export default function AccountingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section id="overview" className="bg-[#f0f5ec] px-6 md:px-20 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="bg-white border border-[#c8dac0] rounded-lg text-[#1a4a2e] text-[11px] px-5 py-2 inline-block mb-6 uppercase tracking-[0.2em] font-semibold">
              Integrated Accounting, Audit & Compliance Solutions
            </div>
            <h1 className="text-[48px] md:text-[62px] leading-[1.1] text-[#1a3a28] tracking-tight font-[family-name:var(--font-display)]">
              Accurate Books. <br />
              Zero Compliance Gaps. <br />
              <span className="italic text-[#2d6a45]">Clear Financial Control.</span>
            </h1>
            <p className="mt-6 text-[16px] leading-7 text-[#3a5a46] opacity-90">
              End-to-end accounting, audit, and GST compliance support for startups and growing businesses that want reliable numbers, timely filings, and better financial decisions. From daily bookkeeping to audit support, we ensure your business runs without reporting confusion.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-[#1e4d32] hover:bg-[#2d6a45] text-white text-lg px-10 py-4 font-medium rounded-lg transition-all hover:-translate-y-[1px]">
                Get Free Consultation
              </Link>
            </div>
          </div>
          
          <div id="contact" className="bg-white p-8 rounded-2xl shadow-xl border border-[#c8dac0]">
            <h2 className="text-2xl font-bold text-[#1a4a2e] mb-2">Get Free Consultation</h2>
            <p className="text-sm text-[#7a9080] mb-6">Response within 24 hours.</p>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Full Name" required className="border border-[#c8dac0] px-4 py-3 rounded-lg focus:outline-none focus:border-[#2d6a45]" />
              <input type="email" placeholder="Business Email" required className="border border-[#c8dac0] px-4 py-3 rounded-lg focus:outline-none focus:border-[#2d6a45]" />
              <textarea placeholder="Tell us about your compliance and accounting needs..." rows={4} className="border border-[#c8dac0] px-4 py-3 rounded-lg focus:outline-none focus:border-[#2d6a45]"></textarea>
              <button type="submit" className="bg-[#1a4a2e] text-white py-4 rounded-lg font-semibold hover:bg-[#2d6a45] transition">
                Submit Request
              </button>
            </form>
          </div>
        </section>

        {/* Marquee Section */}
        <div className="bg-[#1a4a2e] py-4 overflow-hidden border-y border-white/10 flex">
          <div className="flex gap-12 whitespace-nowrap text-[12px] tracking-widest text-white/80 font-medium uppercase animate-marquee">
            <span>Bookkeeping &bull; Financial Reporting &bull; GST & TDS Compliance &bull; Internal & Statutory Audit &bull; Payroll Processing &bull; ROC Filings &bull; Virtual CFO Support &bull; Risk Advisory &bull; </span>
            <span>Bookkeeping &bull; Financial Reporting &bull; GST & TDS Compliance &bull; Internal & Statutory Audit &bull; Payroll Processing &bull; ROC Filings &bull; Virtual CFO Support &bull; Risk Advisory &bull; </span>
          </div>
        </div>

        {/* Capabilities Section */}
        <section id="services" className="px-6 md:px-16 py-24 bg-white">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl text-[#1a4a2e] mb-6 font-[family-name:var(--font-display)]">Our Capabilities & Services</h2>
            <p className="text-[#3a5a46] text-lg leading-relaxed">
              We provide structured accounting, audit, and compliance solutions focused on one thing—keeping your financial operations clean, compliant, and under control. Our approach is practical and execution-driven.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '📒', title: 'Accounting & Bookkeeping', desc: 'We maintain accurate books, track all transactions, and keep your records organized for reporting and financial control.' },
              { icon: '🔍', title: 'Audit & Assurance', desc: 'Internal and statutory audits to identify gaps, improve controls, and strengthen confidence in your financial reporting.' },
              { icon: '📝', title: 'GST & TDS Compliance', desc: 'Registrations, returns, e-invoicing, TDS filings, and reconciliations managed with strict accuracy and timelines.' },
              { icon: '🏢', title: 'Compliance Management', desc: 'End-to-end regulatory compliance including ROC Annual Filings, Director KYC, and Company Law Compliance.' },
              { icon: '👥', title: 'Payroll & Employee Compliance', desc: 'Process payroll, manage statutory deductions, and ensure employee compliance with consistency and confidentiality.' },
              { icon: '💼', title: 'Virtual CFO Services', desc: 'MIS reports, cash flow tracking, budgeting, and insights to help you make better business decisions.' },
            ].map((srv, i) => (
              <div key={i} className="p-8 rounded-2xl border border-[#c8dac0] hover:border-[#2d6a45] hover:shadow-xl transition duration-300 group cursor-pointer bg-[#f0f5ec]/50">
                <div className="text-3xl mb-4">{srv.icon}</div>
                <h3 className="font-bold text-xl text-[#1a4a2e] mb-4">{srv.title}</h3>
                <p className="text-sm text-[#7a9080] leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who We Work With (Mapped to Tools & Tech layout) */}
        <section className="px-6 md:px-16 pb-24 bg-white">
          <div className="bg-[#f0f5ec] rounded-3xl p-10 md:p-16 border border-[#c8dac0]">
            <h2 className="text-3xl text-[#1a4a2e] mb-10 font-[family-name:var(--font-display)]">Who We Work With</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Growing Entities', type: 'Startups, SMEs' },
                { title: 'Corporate Structures', type: 'Private Limited Companies, LLPs' },
                { title: 'Service Sector', type: 'Professional Firms, Trading Businesses' },
                { title: 'Production', type: 'Manufacturing Units' },
              ].map((client, i) => (
                <div key={i}>
                  <p className="font-bold text-[#1a4a2e] mb-2">{client.title}</p>
                  <p className="text-sm text-[#3a5a46]">{client.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes / Why Choose Us (Dark) */}
        <section className="relative px-6 md:px-16 py-24 bg-[#1a4a2e] text-white overflow-hidden text-center">
          <div className="absolute w-[400px] h-[400px] bg-[#2d6a45] opacity-20 rounded-full blur-3xl animate-blob top-[-50px] left-[-50px]"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl italic mb-6 font-[family-name:var(--font-display)]">&quot;Clear and organized financial records. Fewer errors, fewer surprises.&quot;</h2>
            <p className="text-[#c3c8ba] uppercase tracking-widest text-sm mb-8">Why Businesses Choose Us</p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              {['Consistent & Accurate Records', 'Timely Statutory Compliance', 'Lower Risk of Penalties', 'Structured Reporting', 'Dedicated Support'].map((benefit) => (
                 <span key={benefit} className="bg-white/10 px-4 py-2 rounded-full text-sm">{benefit}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section className="px-6 md:px-16 py-28 bg-[#f0f5ec] text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1a4a2e] leading-tight tracking-tight font-[family-name:var(--font-display)]">
              Let&apos;s fix your accounting, compliance, and reporting—properly.
            </h2>
            <p className="mt-6 text-[#3a5a46] text-lg leading-relaxed">
              Stop chasing numbers. Start controlling them.
            </p>
            <Link href="/contact">
            <button className="mt-10 bg-[#1a4a2e] text-white px-10 py-4 rounded-lg font-medium tracking-wide hover:bg-[#2d6a45] transition duration-300 shadow-lg">
              Get Free Consultation
            </button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}