import { 
  Bot, Code2, Calculator, Briefcase, Building2, 
  GitMerge, Megaphone, CheckCircle2, Users, Headset 
} from 'lucide-react';

const services = [
  {
    title: "AI & Automation Solutions",
    desc: "Automate workflows and boost efficiency using intelligent, scalable automation solutions.",
    icon: Bot,
  },
  {
    title: "Application Development",
    desc: "Build secure, scalable applications tailored to evolving business requirements.",
    icon: Code2,
  },
  {
    title: "Integrated Accounting, Audit & Compliance Solutions",
    desc: "Ensure financial accuracy and compliance with structured accounting support.",
    icon: Calculator,
  },
  {
    title: "Business Consulting & Growth Services",
    desc: "Drive strategic growth through structured planning and performance improvement.",
    icon: Briefcase,
  },
  {
    title: "Real Estate & Property Solutions",
    desc: "Simplify property operations with professional advisory and documentation support.",
    icon: Building2,
  },
  {
    title: "DevOps",
    desc: "Accelerate deployments through automated pipelines and reliable system integration.",
    icon: GitMerge,
  },
  {
    title: "Digital Marketing & Branding",
    desc: "Enhance brand visibility through targeted campaigns and strategic digital engagement.",
    icon: Megaphone,
  },
  {
    title: "Testing & Quality Assurance",
    desc: "Ensure reliability through structured testing that improves performance and quality.",
    icon: CheckCircle2,
  },
  {
    title: "HR & Talent Management",
    desc: "Optimize workforce operations through recruitment, compliance, and lifecycle management.",
    icon: Users,
  },
  {
    title: "Business Support Services",
    desc: "Maintain operations efficiently with round-the-clock business support services. (24x7 BPO / Operations)",
    icon: Headset,
  }
];

export default function ServicesOverview() {
  return (
   <section
  id="services-overview"
  className="py-24 sm:py-32 bg-[hsl(var(--green-bg))]/50"
>
      <div className="container mx-auto px-4 sm:px-10">
        <div className="max-w-[800px] mb-16">
          <h2 className="text-[40px] sm:text-[48px] text-foreground font-normal leading-[1.05] mb-8 tracking-[-0.015em]" style={{ fontFamily: "var(--font-display, serif)" }}>
            Solutions That <br className="hidden sm:block" />
            <span className="text-[hsl(var(--green-dark))] italic">Power Your Business</span>
          </h2>
          <div className="w-16 h-1 bg-[hsl(var(--green-dark))] opacity-20 mb-8 rounded-full" />
          <p className="text-[17px] text-muted-foreground font-light leading-[1.6]">
            Our services are designed to nurture your business at every stage of its growth and operational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 gap-y-10">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="bg-card hover:bg-[hsl(var(--green-dark))] w-full border border-border/60 hover:border-[hsl(var(--green-dark))] rounded-2xl p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group flex flex-col h-full"
            >
              <div className="mb-6 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-x-1.5 group-hover:-rotate-12 text-[hsl(var(--green-dark))] group-hover:text-[#f59e0b]">
                <service.icon className="w-8 h-8" strokeWidth={1.75} />
              </div>
              <h3 className="text-[16.5px] font-semibold text-foreground group-hover:text-white mb-3 leading-snug transition-colors">
                {service.title}
              </h3>
              <p className="text-[14.5px] text-muted-foreground group-hover:text-white/90 font-light leading-relaxed mt-auto transition-colors">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
