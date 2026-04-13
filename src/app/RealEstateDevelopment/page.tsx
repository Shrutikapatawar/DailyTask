"use client";

import Header from "@/components/Global-MainHeader";
import Footer from "@/components/Global-MainFooter";
import Industries from "@/components/marketing/5-MarketingPage-IndustriesServed";
import Link from "next/link";

import {
  Home,
  Building2,
  Briefcase,
  Layout,
  ClipboardList,
  FileText,
  Leaf,
  Users,
  PenTool,
  HardHat as Helmet,
} from "lucide-react";

export default function ConstructionPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      
      <Header />

      <main className="flex-1 flex flex-col">

        {/* HERO */}
        <section className="bg-[hsl(var(--green-bg))]/20 px-6 md:px-20 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-xl">
            <div className="bg-white border border-border rounded-lg text-[hsl(var(--green-dark))] text-[11px] px-5 py-2 inline-block mb-6 uppercase tracking-[0.2em] font-semibold">
              Construction & Real Estate Development
            </div>

            <h1 className="text-[42px] md:text-[58px] leading-[1.1] text-[hsl(var(--green-dark))] tracking-tight font-[family-name:var(--font-display)]">
              Building Spaces. <br />
              Creating Value. <br />
              <span className="italic text-[hsl(var(--green-btn))]">
                Shaping Futures.
              </span>
            </h1>

            <p className="mt-6 text-[15px] leading-7 text-muted-foreground">
              From foundation to finish, we deliver excellence you can trust.
            </p>

            <Link
              href="/contact"
              className="inline-flex mt-8 items-center gap-2 
                         bg-[hsl(var(--green-btn))] text-white 
                         px-7 py-3.5 rounded-lg font-medium 
                         transition-all duration-300 
                         hover:bg-[#facc15] hover:text-black 
                         hover:shadow-lg hover:-translate-y-[2px]"
            >
              Get Free Consultation →
            </Link>
          </div>

          {/* FORM */}
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-border">
            <h2 className="text-2xl font-bold text-[hsl(var(--green-dark))] mb-2">
              Start Your Project
            </h2>

            <p className="text-sm text-muted-foreground mb-6">
              Discuss your construction vision with us.
            </p>

            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Full Name" className="input" />
              <input type="email" placeholder="Email Address" className="input" />
              <textarea rows={4} placeholder="Tell us about your project..." className="input" />

              <button
                className="bg-[hsl(var(--green-btn))] text-white 
                           px-7 py-3.5 rounded-lg font-medium 
                           transition-all duration-300
                           hover:bg-[#facc15] hover:text-black 
                           hover:shadow-lg hover:-translate-y-[2px]"
              >
                Submit Request
              </button>
            </form>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="relative w-full bg-[hsl(var(--green-dark))] py-3 overflow-hidden border-y border-white/5">
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[hsl(var(--green-dark))] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[hsl(var(--green-dark))] to-transparent z-10"></div>

          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                {[
                  "Residential Projects",
                  "Commercial Construction",
                  "Real Estate Development",
                  "Turnkey Projects",
                  "Architecture",
                  "Interior Design",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 mx-5 text-[12px] tracking-[0.15em] text-white/60"
                  >
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full"></span>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section className="px-6 md:px-16 py-24 bg-[#f4f7f3]">
          <div className="max-w-3xl mb-14">
            <h2 className="text-[32px] md:text-[38px] text-[#142f24] mb-5 font-semibold">
              Our Capabilities & <span className="italic text-[#2f7a57]">Services</span>
            </h2>
            <p className="text-[#4a6b5a] text-[15px]">
              We provide complete construction and real estate solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              { title: "Residential Construction", desc: "High-quality homes.", icon: Home },
              { title: "Commercial Construction", desc: "Retail & office spaces.", icon: Building2 },
              { title: "Real Estate Advisory", desc: "Investment guidance.", icon: Briefcase },
              { title: "Architecture & Design", desc: "Modern designs.", icon: Layout },
              { title: "Project Management", desc: "End-to-end execution.", icon: ClipboardList },
              { title: "Renovation", desc: "Upgrade properties.", icon: PenTool },
              { title: "Infrastructure", desc: "Roads & utilities.", icon: Helmet },
              { title: "Compliance", desc: "Legal approvals.", icon: FileText },
              { title: "Sustainable", desc: "Eco-friendly builds.", icon: Leaf },
              { title: "Property Mgmt", desc: "Maintain assets.", icon: Users },
            ].map((srv, i) => {
              const Icon = srv.icon;
              return (
                <div key={i} className="bg-white hover:bg-[#1f5c3f] border border-[#d2e2d8] rounded-2xl p-6 transition group">
                  <div className="mb-5 text-[#1f5c3f] group-hover:text-[#facc15]">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-semibold group-hover:text-white">{srv.title}</h3>
                  <p className="text-sm text-[#6f8576] group-hover:text-white/90">{srv.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="px-6 md:px-16 py-20 bg-white">
  <div className="bg-[hsl(var(--green-bg))] rounded-3xl p-10 md:p-16 border border-border">

    <h2 className="text-[30px] text-[hsl(var(--green-dark))] mb-12 font-semibold">
      Why Choose Us
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        { title: "Transparency", desc: "In Project Delivery" },
        { title: "Quality", desc: "Assurance & Compliance" },
        { title: "Timely", desc: "Project Completion" },
        { title: "Sustainable", desc: "Built for the Future" },
      ].map((item, i) => (
        <div
          key={i}
          className="relative group p-4 rounded-xl transition-all duration-300 hover:bg-white/60"
        >
          {/* VERTICAL LINE (BACKGROUND EFFECT) */}
          <span
            className="absolute left-0 top-0 h-0 w-[3px] 
                       bg-[#facc15] 
                       transition-all duration-300 
                       group-hover:h-full"
          ></span>

          {/* CONTENT */}
          <p className="font-semibold text-[hsl(var(--green-dark))] mb-1 relative z-10">
            {item.title}
          </p>
          <p className="text-sm text-muted-foreground relative z-10">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

        {/* VISION */}
        <section className="relative px-6 md:px-16 py-24 bg-[hsl(var(--green-dark))] text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[28px] md:text-[38px] italic">
              “To create spaces that are functional, sustainable, and built for the future.”
            </h2>

            <p className="mt-8 text-white/60 uppercase tracking-widest text-xs">
              Sectors We Serve
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {["Residential", "Commercial", "Healthcare", "Hospitality"].map((s, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/10 hover:bg-[#facc15] hover:text-black transition">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <Industries />

        {/* CTA */}
        <section className="px-6 md:px-16 py-28 bg-[hsl(var(--green-bg))]/20 text-center">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[hsl(var(--green-dark))]">
            Let’s build something remarkable together.
          </h2>

          <Link href="/contact">
            <button className="mt-10 bg-[hsl(var(--green-btn))] text-white px-10 py-4 rounded-lg hover:bg-[#facc15] hover:text-black transition">
              Connect with Us
            </button>
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
}