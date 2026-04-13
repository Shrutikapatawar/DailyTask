import Image from 'next/image';
import { Layers, Workflow, Maximize, Cpu, Target, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: Layers,
    title: "Integrated Multi-Domain Expertise",
    desc: "Access technology, operations, and business services from a single trusted partner, reducing complexity and improving coordination across functions."
  },
  {
    icon: Workflow,
    title: "Structured & Process-Driven Approach",
    desc: "Every service follows clearly defined workflows, ensuring consistency, transparency, and reliable outcomes across projects and operations."
  },
  {
    icon: Maximize,
    title: "Scalable & Flexible Solutions",
    desc: "Our solutions are designed to grow alongside your business, adapting to changing requirements without disrupting operations."
  },
  {
    icon: Cpu,
    title: "Technology-Focused Execution",
    desc: "We leverage modern tools, automation, and best practices to improve efficiency, reduce manual effort, and enhance service reliability."
  },
  {
    icon: Target,
    title: "Business-Oriented Problem Solving",
    desc: "We focus on delivering practical solutions that directly support operational goals, performance improvement, and long-term sustainability."
  },
  {
    icon: ShieldCheck,
    title: "Reliable Ongoing Support",
    desc: "Our team remains committed beyond implementation, providing consistent support to ensure stability and continuous improvement."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-10">
        
        {/* Top Header & Image Area */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center mb-24">
          <div className="w-full lg:w-[45%]">
            <h2 className="text-[40px] sm:text-[48px] leading-[1.05] text-foreground font-normal mb-8 tracking-[-0.015em]" style={{ fontFamily: "var(--font-display, serif)" }}>
              Why Choose <br className="hidden sm:block" />
              <span className="text-[hsl(var(--green-dark))] italic">
                Samriddhi Anveshana
              </span>
            </h2>
            <div className="w-16 h-1 bg-[hsl(var(--green-dark))] opacity-20 mb-8 rounded-full" />
            <p className="text-[17px] text-muted-foreground font-light leading-[1.7] max-w-[500px]">
              Delivering dependable solutions through structured processes, technical expertise, and business-focused execution. We pride ourselves on being a partner you can trust to scale your vision.
            </p>
          </div>
          <div className="w-full lg:w-[55%]">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl shadow-[hsl(var(--green-bg))]/50">
              <Image 
                src="/why_choose_us.png" 
                alt="Samriddhi Anveshana Team" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 border border-primary/10 rounded-2xl" />
            </div>
          </div>
        </div>

        {/* 6 Grid Icons Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-14">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex gap-5">
              <div className="w-14 h-14 rounded-xl bg-[hsl(var(--green-bg))] text-[hsl(var(--green-dark))] flex shrink-0 items-center justify-center shadow-sm">
                <reason.icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-foreground mb-3 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-[15px] text-muted-foreground font-light leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
