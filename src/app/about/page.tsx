"use client";

import { useEffect } from "react";
import Header from "@/components/Global-MainHeader";
import Footer from "@/components/Global-MainFooter";

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <link
                href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Manrope:wght@300;400;600;800&display=swap"
                rel="stylesheet"
            />

            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                rel="stylesheet"
            />

            <style jsx>{`
                .material-symbols-outlined {
                    font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;
                    display: inline-block;
                    line-height: 1;
                }

                .emerald-gradient {
                    background: linear-gradient(135deg, #003229 0%, #004b3e 100%);
                }

                .glass-panel {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .glass-panel-light {
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(8px);
                    border: 1px solid rgba(0, 75, 62, 0.05);
                }

                .reveal-on-scroll {
                    opacity: 0;
                    transform: translateY(24px);
                    transition: all 0.85s cubic-bezier(0.22, 1, 0.36, 1);
                }

                .reveal-on-scroll.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                html {
                    scroll-behavior: smooth;
                }

                :global(body) {
                    background-color: var(--color-surface, #faf9f6);
                    color: var(--color-on-surface, #1a1c1a);
                    font-family: inherit;
                }
            `}</style>

            <main className="font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed">
                {/* ═══ 01 — HERO ═════════════════════════════════════════════════════════ */}
                <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 emerald-gradient"></div>
                        {/* Geometric background pattern */}
                        <svg
                            className="absolute inset-0 w-full h-full opacity-[0.04]"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <pattern
                                    id="grid"
                                    width="80"
                                    height="80"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path
                                        d="M 80 0 L 0 0 0 80"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="0.5"
                                    />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                        {/* Decorative circles */}
                        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full border border-white/5"></div>
                        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full border border-white/5"></div>
                        <div className="absolute bottom-1/4 left-1/5 w-72 h-72 rounded-full border border-secondary-fixed/10"></div>
                    </div>

                    <div className="relative z-10 max-w-6xl px-6 text-center">
                        <div className="inline-block mb-8">
                            <span className="font-label text-secondary-fixed uppercase tracking-[0.5rem] text-[10px] font-black py-2 px-5 glass-panel border-white/20">
                                The Ambition to Serve. The Drive to Deliver.
                            </span>
                        </div>
                        <h1 className="font-headline text-5xl md:text-8xl text-white leading-[1.0] tracking-tight mb-8 flex flex-col gap-3">
                            <span className="font-light italic opacity-90">One Partner.</span>
                            <span className="font-bold uppercase tracking-tighter">
                                Every Service.
                            </span>
                            <span className="font-light italic opacity-90">
                                Zero Compromise.
                            </span>
                        </h1>
                        <div className="w-16 h-[2px] bg-secondary-fixed mx-auto mb-10"></div>
                        <p className="font-body text-white/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-14">
                            A fast-scaling services company operating 24/7 across IT, AI,
                            Development, Digital Marketing, HR, Compliance, Cybersecurity, and
                            BPO — serving India and the world.
                        </p>
                        <div className="flex justify-center gap-6 flex-wrap">
                            <a
                                href="#chronicles"
                                className="inline-flex items-center gap-3 font-label text-white font-black uppercase text-xs tracking-widest group"
                            >
                                <span>Our Story</span>
                                <span className="w-12 h-[1px] bg-secondary-fixed group-hover:w-20 transition-all duration-500"></span>
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center gap-3 font-label text-secondary-fixed font-black uppercase text-xs tracking-widest group"
                            >
                                <span>Our Services</span>
                                <span className="w-12 h-[1px] bg-secondary-fixed/40 group-hover:w-20 transition-all duration-500"></span>
                            </a>
                        </div>
                    </div>
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                        <span className="material-symbols-outlined text-white/30 text-4xl animate-bounce">
                            expand_more
                        </span>
                    </div>
                </section>

                {/* ═══ 02 — CHRONICLES ═══════════════════════════════════════════════════ */}
                <section
                    id="chronicles"
                    className="py-32 px-6 md:px-24 bg-surface overflow-hidden reveal-on-scroll"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-6 relative">
                                <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary-fixed/20 rounded-full blur-3xl z-0"></div>
                                <div className="relative z-10 space-y-10">
                                    <div>
                                        <span className="font-label text-black uppercase tracking-[0.3rem] text-[10px] font-black mb-4 block">
                                            02 — Chronicles
                                        </span>
                                        <h2 className="font-headline text-5xl md:text-7xl text-primary leading-[0.9] tracking-tighter mb-8">
                                            A Legacy <br />
                                            <span className="font-light italic">Carved</span> in
                                            Vision.
                                        </h2>
                                    </div>
                                    <div className="space-y-6 max-w-lg">
                                        <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                                            Samriddhi Anveshana was established in{" "}
                                            <span className="text-primary font-bold">
                                                December 2025
                                            </span>{" "}
                                            with a clear mandate — to build a service company that
                                            businesses across India and beyond could rely on without
                                            compromise. Our name, rooted in Sanskrit for{" "}
                                            <span className="text-primary font-bold">
                                                &apos;Prosperous Quest,&apos;
                                            </span>{" "}
                                            reflects our founding belief that every client engagement
                                            is an opportunity to create something meaningful and
                                            lasting.
                                        </p>
                                        <p className="font-body text-lg text-on-surface-variant leading-relaxed opacity-80">
                                            From day one, we built not just a company but a team —
                                            dedicated professionals spanning Testing, Development, AI,
                                            DevOps, Cybersecurity, HR, Compliance, and BPO, all
                                            operating under one roof, around the clock. We are not
                                            waiting to become something — we already are.
                                        </p>
                                    </div>
                                    <div className="pt-4">
                                        <a
                                            className="inline-flex items-center gap-4 font-label text-primary font-black uppercase text-xs tracking-widest group"
                                            href="#"
                                        >
                                            <span>Our Story Continues</span>
                                            <span className="w-16 h-[2px] bg-secondary group-hover:w-24 transition-all duration-500"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Stats panel */}
                            <div className="lg:col-span-6 grid grid-cols-2 gap-6 relative">
                                <div className="col-span-2 p-12 bg-primary rounded-sm relative overflow-hidden group">
                                    <div className="absolute -right-10 -bottom-10 opacity-5">
                                        <span className="material-symbols-outlined text-[200px] text-white">
                                            hub
                                        </span>
                                    </div>
                                    <p className="font-label text-secondary-fixed text-[10px] uppercase tracking-[0.3rem] font-black mb-3">
                                        Founded
                                    </p>
                                    <p className="font-headline text-6xl text-white font-bold mb-4">
                                        Dec 2025
                                    </p>
                                    <p className="text-on-primary-container text-sm leading-relaxed opacity-70">
                                        Built with a mandate — one partner, every service, no
                                        compromise.
                                    </p>
                                </div>
                                <div className="p-8 border border-primary/10 rounded-sm bg-surface-container-low flex flex-col gap-3">
                                    <span className="material-symbols-outlined text-secondary text-3xl">
                                        schedule
                                    </span>
                                    <p className="font-headline text-4xl text-primary font-bold">
                                        24/7
                                    </p>
                                    <p className="font-label text-[11px] text-on-surface-variant uppercase tracking-widest">
                                        Operations
                                    </p>
                                </div>
                                <div className="p-8 border border-primary/10 rounded-sm bg-surface-container-low flex flex-col gap-3">
                                    <span className="material-symbols-outlined text-secondary text-3xl">
                                        language
                                    </span>
                                    <p className="font-headline text-4xl text-primary font-bold">
                                        8+
                                    </p>
                                    <p className="font-label text-[11px] text-on-surface-variant uppercase tracking-widest">
                                        Domains
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ 03 — MISSION & VISION ════════════════════════════════════════════ */}
                <section className="bg-surface-container-low py-32 px-6 reveal-on-scroll">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16 text-center">
                            <span className="font-label text-black uppercase tracking-[0.3rem] text-[10px] font-black mb-4 block">
                                03 — Mission & Vision
                            </span>
                            <h2 className="font-headline text-5xl md:text-6xl text-primary tracking-tighter">
                                What We <span className="italic font-light">Stand For.</span>
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-0 border border-primary/10">
                            <div className="p-16 border-b md:border-b-0 md:border-r border-primary/10 bg-white group hover:bg-primary transition-colors duration-700">
                                <p className="font-label text-secondary uppercase tracking-[0.3rem] text-[10px] font-black mb-6 group-hover:text-secondary-fixed transition-colors">
                                    Mission
                                </p>
                                <h3 className="font-headline text-3xl text-primary group-hover:text-white mb-6 transition-colors">
                                    The Single Partner.
                                </h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary-container text-base leading-relaxed transition-colors">
                                    To be the single partner businesses trust for every service
                                    they need — delivering IT, AI, Digital Marketing, HR,
                                    Compliance, Cybersecurity, and BPO solutions under one roof,
                                    with unwavering reliability, 24 hours a day, across every
                                    market we serve.
                                </p>
                            </div>
                            <div className="p-16 bg-white group hover:bg-primary transition-colors duration-700">
                                <p className="font-label text-secondary uppercase tracking-[0.3rem] text-[10px] font-black mb-6 group-hover:text-secondary-fixed transition-colors">
                                    Vision
                                </p>
                                <h3 className="font-headline text-3xl text-primary group-hover:text-white mb-6 transition-colors">
                                    A Global Name.
                                </h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary-container text-base leading-relaxed transition-colors">
                                    To build a globally recognised services brand — known for
                                    handling everything, compromising on nothing.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ 04 — SERVICES OVERVIEW ═══════════════════════════════════════════ */}
                <section
                    id="services"
                    className="py-32 px-6 bg-surface reveal-on-scroll"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                            <div>
                                <span className="font-label text-black uppercase tracking-[0.3rem] text-[10px] font-black mb-4 block">
                                    04 — Services Overview
                                </span>
                                <h2 className="font-headline text-5xl md:text-6xl text-primary leading-[0.95] tracking-tighter">
                                    Everything You Need.
                                    <br />
                                    <span className="italic font-light">One Roof.</span>
                                </h2>
                            </div>
                            <p className="font-body text-on-surface-variant max-w-sm leading-relaxed text-base opacity-80">
                                Seven high-impact domains. One accountable partner. One
                                contract. Total accountability.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-primary/10">
                            {/* Row 1 */}
                            <div className="service-card p-10 border-b border-r border-primary/10 group hover:bg-primary transition-colors duration-500 cursor-default">
                                <div className="service-icon text-secondary text-4xl mb-6 group-hover:text-secondary-fixed">
                                    <span className="material-symbols-outlined text-4xl">dns</span>
                                </div>
                                <h3 className="font-headline text-xl text-primary group-hover:text-white mb-3 transition-colors">
                                    IT Services
                                </h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary-container text-sm leading-relaxed transition-colors opacity-80">
                                    Infrastructure management, cloud solutions, network engineering,
                                    and IT support built for always-on businesses.
                                </p>
                            </div>
                            <div className="service-card p-10 border-b border-r border-primary/10 group hover:bg-primary transition-colors duration-500 cursor-default">
                                <div className="service-icon text-secondary text-4xl mb-6 group-hover:text-secondary-fixed">
                                    <span className="material-symbols-outlined text-4xl">
                                        smart_toy
                                    </span>
                                </div>
                                <h3 className="font-headline text-xl text-primary group-hover:text-white mb-3 transition-colors">
                                    AI & Automation
                                </h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary-container text-sm leading-relaxed transition-colors opacity-80">
                                    Custom AI solutions, intelligent workflows, and automation
                                    frameworks that reduce cost and accelerate decisions.
                                </p>
                            </div>
                            <div className="service-card p-10 border-b border-r border-primary/10 group hover:bg-primary transition-colors duration-500 cursor-default">
                                <div className="service-icon text-secondary text-4xl mb-6 group-hover:text-secondary-fixed">
                                    <span className="material-symbols-outlined text-4xl">
                                        code
                                    </span>
                                </div>
                                <h3 className="font-headline text-xl text-primary group-hover:text-white mb-3 transition-colors">
                                    Development
                                </h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary-container text-sm leading-relaxed transition-colors opacity-80">
                                    Web, mobile, and enterprise application development — from
                                    architecture to deployment, built to scale.
                                </p>
                            </div>
                            <div className="service-card p-10 border-b border-primary/10 group hover:bg-primary transition-colors duration-500 cursor-default">
                                <div className="service-icon text-secondary text-4xl mb-6 group-hover:text-secondary-fixed">
                                    <span className="material-symbols-outlined text-4xl">
                                        campaign
                                    </span>
                                </div>
                                <h3 className="font-headline text-xl text-primary group-hover:text-white mb-3 transition-colors">
                                    Digital Marketing
                                </h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary-container text-sm leading-relaxed transition-colors opacity-80">
                                    Performance-led SEO, paid media, content strategy, and brand
                                    building that converts visibility into revenue.
                                </p>
                            </div>
                            {/* Row 2 */}
                            <div className="service-card p-10 border-r border-primary/10 group hover:bg-primary transition-colors duration-500 cursor-default">
                                <div className="service-icon text-secondary text-4xl mb-6 group-hover:text-secondary-fixed">
                                    <span className="material-symbols-outlined text-4xl">
                                        groups
                                    </span>
                                </div>
                                <h3 className="font-headline text-xl text-primary group-hover:text-white mb-3 transition-colors">
                                    HR Solutions
                                </h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary-container text-sm leading-relaxed transition-colors opacity-80">
                                    End-to-end human resource management — talent acquisition,
                                    payroll, compliance, and people operations.
                                </p>
                            </div>
                            <div className="service-card p-10 border-r border-primary/10 group hover:bg-primary transition-colors duration-500 cursor-default">
                                <div className="service-icon text-secondary text-4xl mb-6 group-hover:text-secondary-fixed">
                                    <span className="material-symbols-outlined text-4xl">
                                        gavel
                                    </span>
                                </div>
                                <h3 className="font-headline text-xl text-primary group-hover:text-white mb-3 transition-colors">
                                    Compliance
                                </h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary-container text-sm leading-relaxed transition-colors opacity-80">
                                    Regulatory advisory, audit support, and governance frameworks
                                    that keep businesses protected and audit-ready.
                                </p>
                            </div>
                            <div className="service-card p-10 border-r border-primary/10 group hover:bg-primary transition-colors duration-500 cursor-default">
                                <div className="service-icon text-secondary text-4xl mb-6 group-hover:text-secondary-fixed">
                                    <span className="material-symbols-outlined text-4xl">
                                        security
                                    </span>
                                </div>
                                <h3 className="font-headline text-xl text-primary group-hover:text-white mb-3 transition-colors">
                                    Cybersecurity
                                </h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary-container text-sm leading-relaxed transition-colors opacity-80">
                                    Threat monitoring, penetration testing, incident response, and
                                    security architecture for modern risk environments.
                                </p>
                            </div>
                            <div className="service-card p-10 group hover:bg-primary transition-colors duration-500 cursor-default">
                                <div className="service-icon text-secondary text-4xl mb-6 group-hover:text-secondary-fixed">
                                    <span className="material-symbols-outlined text-4xl">
                                        corporate_fare
                                    </span>
                                </div>
                                <h3 className="font-headline text-xl text-primary group-hover:text-white mb-3 transition-colors">
                                    BPO
                                </h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary-container text-sm leading-relaxed transition-colors opacity-80">
                                    Back-office operations, data processing, customer support, and
                                    business process management — around the clock.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ 05 — INDUSTRIES ═══════════════════════════════════════════════════ */}
                <section className="bg-primary py-32 px-6 reveal-on-scroll">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                            <div className="max-w-2xl">
                                <span className="font-label text-secondary-fixed uppercase tracking-[0.25rem] text-[10px] font-black mb-4 block">
                                    05 — Industries We Serve
                                </span>
                                <h2 className="font-headline text-4xl md:text-5xl text-white">
                                    Your Industry.
                                    <br />
                                    <span className="text-secondary-fixed italic">
                                        Our Expertise.
                                    </span>
                                </h2>
                            </div>
                            <p className="text-on-primary-container text-sm leading-relaxed max-w-xs opacity-70">
                                We serve businesses at every stage of growth across sectors
                                where reliability is not optional.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-0 border border-white/10">
                            <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/5 transition-colors duration-500">
                                <div className="text-secondary-fixed/20 text-7xl font-headline italic mb-6 principle-num group-hover:text-secondary-fixed/40">
                                    01
                                </div>
                                <h3 className="font-headline text-2xl text-white mb-4">
                                    Technology & SaaS
                                </h3>
                                <p className="text-on-primary-container text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                                    Banking & Financial Services · Healthcare & Life Sciences
                                </p>
                            </div>
                            <div className="p-10 border-b md:border-b-0 md:border-r border-white/10 group hover:bg-white/5 transition-colors duration-500">
                                <div className="text-secondary-fixed/20 text-7xl font-headline italic mb-6 principle-num group-hover:text-secondary-fixed/40">
                                    02
                                </div>
                                <h3 className="font-headline text-2xl text-white mb-4">
                                    Retail & E-Commerce
                                </h3>
                                <p className="text-on-primary-container text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                                    Manufacturing & Logistics · Startups & Scale-Ups
                                </p>
                            </div>
                            <div className="p-10 group hover:bg-white/5 transition-colors duration-500">
                                <div className="text-secondary-fixed/20 text-7xl font-headline italic mb-6 principle-num group-hover:text-secondary-fixed/40">
                                    03
                                </div>
                                <h3 className="font-headline text-2xl text-white mb-4">
                                    Education & EdTech
                                </h3>
                                <p className="text-on-primary-container text-sm leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                                    Legal & Professional Services · Media & Communications
                                </p>
                            </div>
                        </div>
                        <div className="mt-10 text-center">
                            <p className="text-on-primary-container text-sm italic opacity-50">
                                Don&apos;t see your sector? We work with any business that demands
                                service excellence — speak to our team.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ═══ 06 — CORE PRINCIPLES ═════════════════════════════════════════════ */}
                <section className="bg-surface-container-low py-32 px-6 reveal-on-scroll">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-20 text-center">
                            <span className="font-label text-black uppercase tracking-[0.3rem] text-[10px] font-black mb-4 block">
                                06 — Core Principles
                            </span>
                            <h2 className="font-headline text-5xl md:text-6xl text-primary tracking-tighter">
                                The invisible foundation
                                <br />
                                <span className="italic font-light">
                                    of our visible work.
                                </span>
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Each principle */}
                            <div className="principle-card p-10 bg-white border border-primary/5 group hover:border-secondary/30 transition-all duration-500">
                                <div className="principle-num text-primary/10 text-7xl font-headline italic mb-6 transition-all duration-500">
                                    01
                                </div>
                                <h3 className="font-headline text-2xl text-primary mb-4">
                                    Client First
                                </h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    Every decision we make starts with one question — does this
                                    serve our client&apos;s best interest? We don&apos;t just complete
                                    projects, we take ownership of outcomes.
                                </p>
                            </div>
                            <div className="principle-card p-10 bg-white border border-primary/5 group hover:border-secondary/30 transition-all duration-500">
                                <div className="principle-num text-primary/10 text-7xl font-headline italic mb-6 transition-all duration-500">
                                    02
                                </div>
                                <h3 className="font-headline text-2xl text-primary mb-4">
                                    Reliability
                                </h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    Our clients operate in a world that cannot afford delays or
                                    excuses. We show up, we deliver, and we do it consistently —
                                    24 hours a day, across every domain we serve.
                                </p>
                            </div>
                            <div className="principle-card p-10 bg-white border border-primary/5 group hover:border-secondary/30 transition-all duration-500">
                                <div className="principle-num text-primary/10 text-7xl font-headline italic mb-6 transition-all duration-500">
                                    03
                                </div>
                                <h3 className="font-headline text-2xl text-primary mb-4">
                                    Innovation
                                </h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    We bring smarter thinking to every engagement. Whether it is
                                    an AI solution, a compliance framework, or a marketing strategy
                                    — we constantly look for better ways to solve real problems.
                                </p>
                            </div>
                            <div className="principle-card p-10 bg-white border border-primary/5 group hover:border-secondary/30 transition-all duration-500">
                                <div className="principle-num text-primary/10 text-7xl font-headline italic mb-6 transition-all duration-500">
                                    04
                                </div>
                                <h3 className="font-headline text-2xl text-primary mb-4">
                                    Integrity
                                </h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    We communicate honestly, price fairly, and own our mistakes.
                                    Trust is not built in one project — it is built across every
                                    interaction, and we treat it accordingly.
                                </p>
                            </div>
                            <div className="principle-card p-10 bg-white border border-primary/5 group hover:border-secondary/30 transition-all duration-500">
                                <div className="principle-num text-primary/10 text-7xl font-headline italic mb-6 transition-all duration-500">
                                    05
                                </div>
                                <h3 className="font-headline text-2xl text-primary mb-4">
                                    Speed & Efficiency
                                </h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    In business, timing is everything. We are built to move fast
                                    without sacrificing quality — lean processes, sharp teams, and
                                    zero unnecessary delays.
                                </p>
                            </div>
                            <div className="principle-card p-10 bg-white border border-primary/5 group hover:border-secondary/30 transition-all duration-500">
                                <div className="principle-num text-primary/10 text-7xl font-headline italic mb-6 transition-all duration-500">
                                    06
                                </div>
                                <h3 className="font-headline text-2xl text-primary mb-4">
                                    People & Culture
                                </h3>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    Our greatest asset is our people. We invest in building a
                                    team that is skilled, motivated, and aligned — because a great
                                    team is the only way to consistently deliver great work.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ 07 — WHY CHOOSE US ════════════════════════════════════════════════ */}
                <section className="py-32 px-6 bg-white reveal-on-scroll">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-20 items-center mb-20">
                            <div>
                                <span className="font-label text-black uppercase tracking-[0.3rem] text-[10px] font-black mb-4 block">
                                    07 — Why Choose Us
                                </span>
                                <h2 className="font-headline text-5xl md:text-6xl text-primary leading-[1] tracking-tighter">
                                    The Samriddhi
                                    <br />
                                    <span className="italic font-normal">Advantage.</span>
                                </h2>
                            </div>
                            <div className="relative">
                                <p className="font-body text-on-surface-variant text-lg leading-relaxed border-l-4 border-secondary-fixed pl-8 italic">
                                    In a market crowded with specialists, we made a different
                                    choice — to become the one partner that handles everything.
                                    No handoffs. No gaps. No excuses.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-primary/10">
                            <div className="p-12 border-b border-r border-primary/10 group hover:bg-primary transition-colors duration-500">
                                <span className="material-symbols-outlined text-secondary group-hover:text-secondary-fixed text-3xl mb-6 block transition-colors">
                                    hub
                                </span>
                                <h3 className="font-headline text-2xl text-primary group-hover:text-white mb-4 transition-colors">
                                    Single-Partner Model
                                </h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary-container text-sm leading-relaxed transition-colors">
                                    IT, AI, Marketing, HR, Compliance, Cybersecurity, and BPO under
                                    one roof. One contract. One relationship. Total accountability.
                                </p>
                            </div>
                            <div className="p-12 border-b border-primary/10 group hover:bg-primary transition-colors duration-500">
                                <span className="material-symbols-outlined text-secondary group-hover:text-secondary-fixed text-3xl mb-6 block transition-colors">
                                    schedule
                                </span>
                                <h3 className="font-headline text-2xl text-primary group-hover:text-white mb-4 transition-colors">
                                    24 / 7 Operations
                                </h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary-container text-sm leading-relaxed transition-colors">
                                    Our teams run in shifts around the clock. Wherever you are and
                                    whenever you need us — there is always someone on.
                                </p>
                            </div>
                            <div className="p-12 border-r border-primary/10 group hover:bg-primary transition-colors duration-500">
                                <span className="material-symbols-outlined text-secondary group-hover:text-secondary-fixed text-3xl mb-6 block transition-colors">
                                    bolt
                                </span>
                                <h3 className="font-headline text-2xl text-primary group-hover:text-white mb-4 transition-colors">
                                    Startup Energy. Enterprise Execution.
                                </h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary-container text-sm leading-relaxed transition-colors">
                                    We move with the urgency of a startup and the rigour of an
                                    enterprise. You get both — speed and substance — on every
                                    engagement.
                                </p>
                            </div>
                            <div className="p-12 group hover:bg-primary transition-colors duration-500">
                                <span className="material-symbols-outlined text-secondary group-hover:text-secondary-fixed text-3xl mb-6 block transition-colors">
                                    device_hub
                                </span>
                                <h3 className="font-headline text-2xl text-primary group-hover:text-white mb-4 transition-colors">
                                    Cross-Domain Intelligence
                                </h3>
                                <p className="text-on-surface-variant group-hover:text-on-primary-container text-sm leading-relaxed transition-colors">
                                    Our teams across domains share context. An insight in
                                    compliance informs DevOps. Marketing aligns with HR. The result
                                    is integrated, not siloed.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ 08 — FOUNDER ══════════════════════════════════════════════════════ */}
                <section
                    id="founder"
                    className="py-32 px-6 bg-surface-container-low relative overflow-hidden reveal-on-scroll"
                >
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="mb-20 text-center">
                            <span className="font-label text-black uppercase tracking-[0.3rem] text-[10px] font-black mb-4 block">
                                08 — Mastermind Behind the Vision
                            </span>
                            <h2 className="font-headline text-5xl md:text-6xl text-primary tracking-tighter">
                                The Architect of <span className="italic font-light">Intent.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            {/* Main founder card */}
                            <div className="md:col-span-8 group relative overflow-hidden bg-white shadow-xl flex flex-col md:flex-row">
                                {/* Placeholder portrait */}
                                <div className="w-full md:w-2/5 bg-primary relative overflow-hidden min-h-[320px]">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-28 h-28 rounded-full border-2 border-secondary-fixed/40 flex items-center justify-center mx-auto mb-4">
                                                <span className="material-symbols-outlined text-secondary-fixed text-5xl">
                                                    person
                                                </span>
                                            </div>
                                            <p className="font-label text-secondary-fixed/60 text-[10px] uppercase tracking-widest">
                                                Kaushal Chintawar
                                            </p>
                                        </div>
                                    </div>
                                    {/* Decorative pattern */}
                                    <svg
                                        className="absolute inset-0 w-full h-full opacity-[0.03]"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs>
                                            <pattern
                                                id="dots2"
                                                width="20"
                                                height="20"
                                                patternUnits="userSpaceOnUse"
                                            >
                                                <circle cx="10" cy="10" r="1" fill="white" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="url(#dots2)" />
                                    </svg>
                                </div>
                                <div className="w-full md:w-3/5 p-12 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <p className="font-label text-secondary text-[10px] uppercase tracking-[0.3rem] font-black mb-3">
                                            Founder & CEO
                                        </p>
                                        <h4 className="font-headline text-4xl text-primary leading-tight">
                                            Kaushal
                                            <br />
                                            Chintawar
                                        </h4>
                                    </div>
                                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6 opacity-80">
                                        A Computer Science engineer and technology leader with nearly
                                        a decade of experience across network engineering, software QA,
                                        and cloud technologies — having risen from Software Engineer to
                                        Technical Lead at HCL Technologies and IP Infusion.
                                    </p>
                                    <p className="text-on-surface-variant text-sm leading-relaxed opacity-70 mb-8">
                                        Beyond building companies, Kaushal is a passionate options
                                        trader and a dedicated advocate for financial education —
                                        believing that informed individuals make stronger businesses
                                        and stronger communities.
                                    </p>
                                    <div className="flex gap-6 border-t border-primary/5 pt-8">
                                        <span className="material-symbols-outlined text-primary/40 hover:text-primary cursor-pointer transition-colors">
                                            share
                                        </span>
                                        <span className="material-symbols-outlined text-primary/40 hover:text-primary cursor-pointer transition-colors">
                                            alternate_email
                                        </span>
                                        <span className="material-symbols-outlined text-primary/40 hover:text-primary cursor-pointer transition-colors">
                                            work
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Quote card */}
                            <div className="md:col-span-4 bg-primary flex items-center p-12 relative overflow-hidden group">
                                <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-125 transition-transform duration-1000">
                                    <span className="material-symbols-outlined text-[220px] text-white">
                                        format_quote
                                    </span>
                                </div>
                                <div className="relative z-10">
                                    <p className="font-headline text-xl text-white italic leading-relaxed mb-8">
                                        &quot;I didn&apos;t build Samriddhi Anveshana to run a company — I
                                        built it to solve a problem. Businesses deserve one partner they
                                        can trust completely. That is what we are here to be.&quot;
                                    </p>
                                    <div className="w-12 h-px bg-secondary-fixed mb-4"></div>
                                    <p className="font-label text-secondary-fixed text-[10px] uppercase tracking-[0.2rem] font-black">
                                        Kaushal Chintawar, Founder & CEO
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ 09 — THE INNOVATION LAB ══════════════════════════════════════════ */}
                <section className="py-32 bg-white relative overflow-hidden reveal-on-scroll">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-20 items-center mb-24">
                            <div>
                                <span className="font-label text-black uppercase tracking-[0.3rem] text-[10px] font-black mb-4 block">
                                    09 — The Innovation Lab
                                </span>
                                <h2 className="font-headline text-5xl md:text-6xl text-primary leading-[1] tracking-tighter">
                                    Where ideas become
                                    <br />
                                    <span className="italic font-light">infrastructure.</span>
                                </h2>
                            </div>
                            <div className="relative">
                                <p className="font-body text-on-surface-variant text-lg leading-relaxed border-l-4 border-secondary-fixed pl-8 italic">
                                    &quot;The best ideas don&apos;t wait for office hours. Neither do
                                    we.&quot;
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            <div className="md:col-span-7 p-16 emerald-gradient relative overflow-hidden group">
                                <div className="absolute -right-12 -bottom-12 opacity-5 group-hover:scale-110 transition-transform duration-1000">
                                    <span className="material-symbols-outlined text-[300px] text-white">
                                        hub
                                    </span>
                                </div>
                                <p className="font-label text-secondary-fixed text-[10px] uppercase tracking-[0.3rem] font-black mb-6">
                                    Our Environment
                                </p>
                                <p className="font-body text-white/80 text-lg leading-relaxed mb-6 relative z-10">
                                    Our work begins not in a boardroom but in a collaborative space
                                    where engineers, strategists, marketers, and compliance experts
                                    converge under one roof. Samriddhi Anveshana operates as an open
                                    innovation environment — agile, cross-functional, and built for
                                    deep work around the clock.
                                </p>
                                <p className="font-body text-white/60 text-base leading-relaxed relative z-10">
                                    Every domain we serve runs through the same operational
                                    philosophy: move fast, think clearly, and deliver without
                                    compromise. Our teams work across shifts so that the moment one
                                    team rests, another picks up — ensuring our clients never
                                    experience a gap in service.
                                </p>
                            </div>
                            <div className="md:col-span-5 grid grid-rows-2 gap-6">
                                <div className="p-10 bg-surface-container-low border border-primary/5 flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
                                    <span className="material-symbols-outlined text-secondary group-hover:text-secondary-fixed text-3xl mb-4 transition-colors">
                                        swap_horiz
                                    </span>
                                    <div>
                                        <h3 className="font-headline text-xl text-primary group-hover:text-white mb-2 transition-colors">
                                            Cross-Shift Continuity
                                        </h3>
                                        <p className="text-on-surface-variant group-hover:text-on-primary-container text-sm leading-relaxed opacity-70 transition-colors">
                                            When one team rests, another picks up. Zero gaps. Zero
                                            waiting.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-10 bg-surface-container-low border border-primary/5 flex flex-col justify-between group hover:bg-primary transition-colors duration-500">
                                    <span className="material-symbols-outlined text-secondary group-hover:text-secondary-fixed text-3xl mb-4 transition-colors">
                                        workspaces
                                    </span>
                                    <div>
                                        <h3 className="font-headline text-xl text-primary group-hover:text-white mb-2 transition-colors">
                                            Open Collaboration
                                        </h3>
                                        <p className="text-on-surface-variant group-hover:text-on-primary-container text-sm leading-relaxed opacity-70 transition-colors">
                                            Agile, cross-functional teams sharing context across every
                                            domain, every day.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══ 10 — CAREERS ══════════════════════════════════════════════════════ */}
                <section
                    id="careers"
                    className="bg-primary py-32 px-6 reveal-on-scroll"
                >
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                            <div className="max-w-2xl">
                                <span className="font-label text-secondary-fixed uppercase tracking-[0.25rem] text-[10px] font-black mb-4 block">
                                    10 — Careers
                                </span>
                                <h2 className="font-headline text-5xl md:text-6xl text-white tracking-tighter">
                                    Build{" "}
                                    <span className="text-secondary-fixed italic font-light">
                                        With Us.
                                    </span>
                                </h2>
                            </div>
                            <p className="text-on-primary-container text-sm leading-relaxed max-w-sm opacity-70">
                                If you take ownership, move fast, and want to work across a
                                business that touches every corner of the services world — this
                                is your place.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-0 border border-white/10 mb-16">
                            <div className="p-12 border-b md:border-b-0 md:border-r border-white/10">
                                <h3 className="font-headline text-2xl text-white mb-8">
                                    Why Work Here?
                                </h3>
                                <div className="space-y-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-fixed mt-2 flex-shrink-0"></div>
                                        <p className="text-on-primary-container text-sm leading-relaxed opacity-80">
                                            Work across multiple domains — not siloed in one stack.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-fixed mt-2 flex-shrink-0"></div>
                                        <p className="text-on-primary-container text-sm leading-relaxed opacity-80">
                                            Own your outcomes from day one — we give real responsibility.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-fixed mt-2 flex-shrink-0"></div>
                                        <p className="text-on-primary-container text-sm leading-relaxed opacity-80">
                                            Operate in a 24/7 environment that mirrors real enterprise
                                            demands.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-fixed mt-2 flex-shrink-0"></div>
                                        <p className="text-on-primary-container text-sm leading-relaxed opacity-80">
                                            Be part of a founding team building something from the
                                            ground up.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-12">
                                <h3 className="font-headline text-2xl text-white mb-8">
                                    We Are Hiring Across
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    <span className="font-label text-[11px] uppercase tracking-wider text-secondary-fixed border border-secondary-fixed/30 px-4 py-2">
                                        Software Development
                                    </span>
                                    <span className="font-label text-[11px] uppercase tracking-wider text-secondary-fixed border border-secondary-fixed/30 px-4 py-2">
                                        QA & Testing
                                    </span>
                                    <span className="font-label text-[11px] uppercase tracking-wider text-secondary-fixed border border-secondary-fixed/30 px-4 py-2">
                                        AI & Machine Learning
                                    </span>
                                    <span className="font-label text-[11px] uppercase tracking-wider text-secondary-fixed border border-secondary-fixed/30 px-4 py-2">
                                        DevOps & Cloud
                                    </span>
                                    <span className="font-label text-[11px] uppercase tracking-wider text-secondary-fixed border border-secondary-fixed/30 px-4 py-2">
                                        Digital Marketing
                                    </span>
                                    <span className="font-label text-[11px] uppercase tracking-wider text-secondary-fixed border border-secondary-fixed/30 px-4 py-2">
                                        HR & Talent
                                    </span>
                                    <span className="font-label text-[11px] uppercase tracking-wider text-secondary-fixed border border-secondary-fixed/30 px-4 py-2">
                                        Cybersecurity
                                    </span>
                                    <span className="font-label text-[11px] uppercase tracking-wider text-secondary-fixed border border-secondary-fixed/30 px-4 py-2">
                                        Compliance
                                    </span>
                                    <span className="font-label text-[11px] uppercase tracking-wider text-secondary-fixed border border-secondary-fixed/30 px-4 py-2">
                                        BPO Operations
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-on-primary-container text-base opacity-60 mb-2">
                                Ready to build something that lasts?
                            </p>
                            <a
                                href="mailto:careers@samriddhianveshana.com"
                                className="font-headline text-xl text-secondary-fixed hover:text-white transition-colors"
                            >
                                careers@samriddhianveshana.com →
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

        </div>
    );
}