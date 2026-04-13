import Header from "@/components/Global-MainHeader";
import Footer from "@/components/Global-MainFooter";
import Link from "next/link";
export default function ApplicationDevelopmentPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      
     <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <section id="overview" className="bg-[#f0f5ec] px-6 md:px-20 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="bg-white border border-[#c8dac0] rounded-lg text-[#1a4a2e] text-[11px] px-5 py-2 inline-block mb-6 uppercase tracking-[0.2em] font-semibold">
              Application Development Services
            </div>
            <h1 className="text-[48px] md:text-[62px] leading-[1.1] text-[#1a3a28] tracking-tight font-[family-name:var(--font-display)]">
              Scalable Solutions That <br />
              <span className="italic text-[#2d6a45]">Transform Ideas into Products.</span>
            </h1>
            <p className="mt-6 text-[16px] leading-7 text-[#3a5a46] opacity-90">
              Scalable, high-performance development solutions that transform ideas into powerful digital products. We partner with businesses to build applications that are scalable, secure, and performance-driven.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-[#1e4d32] hover:bg-[#2d6a45] text-white text-lg px-10 py-4 font-medium rounded-lg transition-all hover:-translate-y-[1px]">
                Get Free Consultation
              </Link>
            </div>
          </div>
          
          <div id="contact" className="bg-white p-8 rounded-2xl shadow-xl border border-[#c8dac0]">
            <h2 className="text-2xl font-bold text-[#1a4a2e] mb-2">Let&apos;s Create Together</h2>
            <p className="text-sm text-[#7a9080] mb-6">Start your development journey with us today.</p>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Full Name" required className="border border-[#c8dac0] px-4 py-3 rounded-lg focus:outline-none focus:border-[#2d6a45]" />
              <input type="email" placeholder="Business Email" required className="border border-[#c8dac0] px-4 py-3 rounded-lg focus:outline-none focus:border-[#2d6a45]" />
              <button type="submit" className="bg-[#1a4a2e] text-white py-4 rounded-lg font-semibold hover:bg-[#2d6a45] transition">
                Request Free Consultation
              </button>
            </form>
          </div>
        </section>

        {/* Marquee Section */}
        <div className="bg-[#1a4a2e] py-4 overflow-hidden border-y border-white/10 flex">
          <div className="flex gap-12 whitespace-nowrap text-[12px] tracking-widest text-white/80 font-medium uppercase animate-marquee">
            <span>Web Development &bull; Mobile Apps &bull; Enterprise Solutions &bull; Cloud &bull; API Integration &bull; UI/UX &bull; Full Stack &bull; DevOps &bull; Microservices &bull; Optimization &bull; </span>
            <span>Web Development &bull; Mobile Apps &bull; Enterprise Solutions &bull; Cloud &bull; API Integration &bull; UI/UX &bull; Full Stack &bull; DevOps &bull; Microservices &bull; Optimization &bull; </span>
          </div>
        </div>

        {/* Services Section */}
        <section id="services" className="px-6 md:px-16 py-24 bg-white">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl text-[#1a4a2e] mb-6 font-[family-name:var(--font-display)]">Six capabilities, one development engine</h2>
            <p className="text-[#3a5a46] text-lg leading-relaxed">
              We don&apos;t believe in one-size-fits-all solutions. Every business has unique technical needs and growth goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '💻', title: 'Web Application Development', desc: 'Responsive and scalable web applications designed for performance and seamless user experience.' },
              { icon: '📱', title: 'Mobile Application Development', desc: 'High-quality Android and iOS applications with strong performance and usability.' },
              { icon: '🏢', title: 'Enterprise Application Development', desc: 'Enterprise-grade systems that streamline operations and improve efficiency.' },
              { icon: '☁️', title: 'Cloud & DevOps Development', desc: 'Cloud-native applications with automated deployment and scalable infrastructure.' },
              { icon: '🔌', title: 'API Development & Integration', desc: 'Secure and efficient APIs that enable seamless communication between systems.' },
              { icon: '🧪', title: 'Testing & Quality Assurance', desc: 'Reliability, performance, and security through comprehensive testing strategies.' },
            ].map((srv, i) => (
              <div key={i} className="p-8 rounded-2xl border border-[#c8dac0] hover:border-[#2d6a45] hover:shadow-xl transition duration-300 group cursor-pointer">
                <div className="text-3xl mb-4">{srv.icon}</div>
                <h3 className="font-bold text-xl text-[#1a4a2e] mb-4">{srv.title}</h3>
                <p className="text-sm text-[#7a9080] leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Section */}
        <section className="relative px-6 md:px-16 py-24 bg-[#1a4a2e] text-white overflow-hidden text-center">
          <div className="absolute w-[400px] h-[400px] bg-[#2d6a45] opacity-20 rounded-full blur-3xl animate-blob top-[-50px] left-[-50px]"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl italic mb-6 font-[family-name:var(--font-display)]">&quot;Our team handles the complete lifecycle—accelerating innovation and keeping you competitive.&quot;</h2>
            <p className="text-[#c3c8ba] uppercase tracking-widest text-sm mb-8">Industries Served</p>
            <div className="flex flex-wrap justify-center gap-4 text-white/80">
              {['E-commerce', 'Healthcare', 'Education', 'SaaS', 'Finance', 'Real Estate', 'Startups', 'IT Services'].map((ind) => (
                 <span key={ind} className="bg-white/10 px-4 py-2 rounded-full">{ind}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Call To Action Section */}
        <section className="px-6 md:px-16 py-28 bg-[#f0f5ec] text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1a4a2e] leading-tight tracking-tight font-[family-name:var(--font-display)]">
              Let&apos;s create something impactful together.
            </h2>
            <p className="mt-6 text-[#3a5a46] text-lg leading-relaxed">
              Combining technical expertise, agile methodologies, and user-centric design. Accelerate your business goals today.
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
