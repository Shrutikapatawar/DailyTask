import Link from "next/link";
import Header from "@/components/Global-MainHeader";
import Footer from "@/components/Global-MainFooter";

export default function TestingAndQAPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section id="overview" className="bg-[#f0f5ec] px-6 md:px-20 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="bg-white border border-[#c8dac0] rounded-lg text-[#1a4a2e] text-[11px] px-5 py-2 inline-block mb-6 uppercase tracking-[0.2em] font-semibold">
              Testing & Quality Assurance
            </div>
            <h1 className="text-[48px] md:text-[62px] leading-[1.1] text-[#1a3a28] tracking-tight font-[family-name:var(--font-display)]">
              Ensuring Software <br />
              <span className="italic text-[#2d6a45]">Reliability & Precision.</span>
            </h1>
            <p className="mt-6 text-[16px] leading-7 text-[#3a5a46] opacity-90">
              We provide comprehensive Testing & Quality Assurance services to ensure your software performs reliably, securely, and efficiently. Our structured testing approach helps identify defects early, reduce risks, and deliver high-quality digital experiences.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-[#1e4d32] hover:bg-[#2d6a45] text-white text-lg px-10 py-4 font-medium rounded-lg transition-all hover:-translate-y-[1px]">
                Talk to Our QA Experts
              </Link>
            </div>
          </div>
          
          <div id="contact" className="bg-white p-8 rounded-2xl shadow-xl border border-[#c8dac0]">
            <h2 className="text-2xl font-bold text-[#1a4a2e] mb-2">Talk to Our QA Experts</h2>
            <p className="text-sm text-[#7a9080] mb-6">Discuss tailored testing solutions that meet your business needs.</p>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Full Name" required className="border border-[#c8dac0] px-4 py-3 rounded-lg focus:outline-none focus:border-[#2d6a45]" />
              <input type="email" placeholder="Business Email" required className="border border-[#c8dac0] px-4 py-3 rounded-lg focus:outline-none focus:border-[#2d6a45]" />
              <textarea placeholder="Tell us about your project requirements..." rows={4} className="border border-[#c8dac0] px-4 py-3 rounded-lg focus:outline-none focus:border-[#2d6a45]"></textarea>
              <button type="submit" className="bg-[#1a4a2e] text-white py-4 rounded-lg font-semibold hover:bg-[#2d6a45] transition">
                Submit Request
              </button>
            </form>
          </div>
        </section>

        {/* Marquee Section */}
        <div className="bg-[#1a4a2e] py-4 overflow-hidden border-y border-white/10 flex">
          <div className="flex gap-12 whitespace-nowrap text-[12px] tracking-widest text-white/80 font-medium uppercase animate-marquee">
            <span>Manual Testing &bull; Automation Testing &bull; Functional Testing &bull; Regression Testing &bull; Performance Testing &bull; API Testing &bull; CI/CD Integration &bull; Risk Reduction &bull; Reliable Releases &bull; Shift-Left Testing &bull; </span>
            <span>Manual Testing &bull; Automation Testing &bull; Functional Testing &bull; Regression Testing &bull; Performance Testing &bull; API Testing &bull; CI/CD Integration &bull; Risk Reduction &bull; Reliable Releases &bull; Shift-Left Testing &bull; </span>
          </div>
        </div>

        {/* Capabilities Section */}
        <section id="services" className="px-6 md:px-16 py-24 bg-white">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl text-[#1a4a2e] mb-6 font-[family-name:var(--font-display)]">Capabilities of the team</h2>
            <p className="text-[#3a5a46] text-lg leading-relaxed">
              We offer comprehensive testing services that validate every stage of your software lifecycle, from functionality and integration to performance and user readiness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '📋', title: 'Manual Testing', desc: 'Detailed manual testing to validate workflows, usability, and real-world scenarios.' },
              { icon: '⚙️', title: 'Automation Testing', desc: 'Frameworks that execute repetitive test cases efficiently, improving accuracy and speed.' },
              { icon: '📱', title: 'Mobile App Testing', desc: 'Testing across devices, OS, and screen sizes to ensure consistent functionality.' },
              { icon: '🔄', title: 'Regression Testing', desc: 'Re-testing existing functionalities to ensure new changes do not affect validated features.' },
              { icon: '🚀', title: 'Performance Testing', desc: 'Evaluating system responsiveness and stability under varying workloads.' },
              { icon: '🔌', title: 'API Testing', desc: 'Validating APIs to ensure accurate data exchange and reliable integrations.' },
              { icon: '🔒', title: 'Security Testing', desc: 'Identifying vulnerabilities and risks to protect applications from potential threats.' },
              { icon: '👥', title: 'UAT Support', desc: 'Assisting stakeholders to validate business requirements before deployment.' },
            ].map((srv, i) => (
              <div key={i} className="p-8 rounded-2xl border border-[#c8dac0] hover:border-[#2d6a45] hover:shadow-xl transition duration-300 group cursor-pointer bg-[#f0f5ec]/50">
                <div className="text-3xl mb-4">{srv.icon}</div>
                <h3 className="font-bold text-xl text-[#1a4a2e] mb-4">{srv.title}</h3>
                <p className="text-sm text-[#7a9080] leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools & Technologies Section */}
        <section className="px-6 md:px-16 pb-24 bg-white">
          <div className="bg-[#f0f5ec] rounded-3xl p-10 md:p-16 border border-[#c8dac0]">
            <h2 className="text-3xl text-[#1a4a2e] mb-10 font-[family-name:var(--font-display)]">Tools & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Test Automation', tools: 'Selenium, Playwright, Appium, TestNG' },
                { title: 'Performance', tools: 'Apache JMeter, LoadRunner' },
                { title: 'API Testing', tools: 'Postman, REST Assured' },
                { title: 'Security Testing', tools: 'OWASP ZAP, Burp Suite, SonarQube' },
              ].map((tech, i) => (
                <div key={i}>
                  <p className="font-bold text-[#1a4a2e] mb-2">{tech.title}</p>
                  <p className="text-sm text-[#3a5a46]">{tech.tools}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes Section (Dark) */}
        <section className="relative px-6 md:px-16 py-24 bg-[#1a4a2e] text-white overflow-hidden text-center">
          <div className="absolute w-[400px] h-[400px] bg-[#2d6a45] opacity-20 rounded-full blur-3xl animate-blob top-[-50px] left-[-50px]"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl italic mb-6 font-[family-name:var(--font-display)]">&quot;Identify defects early, reduce risks, and maintain consistent system performance.&quot;</h2>
            <p className="text-[#c3c8ba] uppercase tracking-widest text-sm mb-8">Measurable Outcomes</p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              {['Improved Software Reliability', 'Reduced Downtime Risks', 'Enhanced User Satisfaction', 'Greater Release Confidence', 'Stable & Scalable Solutions'].map((outcome) => (
                 <span key={outcome} className="bg-white/10 px-4 py-2 rounded-full text-sm">{outcome}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section className="px-6 md:px-16 py-28 bg-[#f0f5ec] text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1a4a2e] leading-tight tracking-tight font-[family-name:var(--font-display)]">
              Looking to improve software quality and reduce risks?
            </h2>
            <p className="mt-6 text-[#3a5a46] text-lg leading-relaxed">
              Get in touch with our team to discuss your project and explore tailored testing solutions that meet your business needs.
            </p>
            <Link href="/contact" className="inline-block mt-10 bg-[#1a4a2e] text-white px-10 py-4 rounded-lg font-medium tracking-wide hover:bg-[#2d6a45] transition duration-300 shadow-lg">
              Start Your Testing Journey
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}