"use client";

import { TrendingUp, Target, Heart, Settings, BarChart3, Globe } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Revenue & Business Growth",
    description: "Focusing on measurable expansion and predictable scaling models.",
    focus: [
      "New Business Acquisition Strategy",
      "ARPU Optimization",
      "Quarter-on-Quarter (QoQ) Planning",
      "Sales Target Achievement Strategy",
    ],
  },
  {
    icon: Target,
    title: "Lead Gen & Conversion",
    description: "Optimizing lead funnels to translate efforts into tangible acquisition.",
    focus: [
      "Monthly Lead Generation Strategy",
      "SQL/MQL Framework Optimization",
      "Sales Cycle Time Reduction",
      "Funnel Performance Enhancement",
    ],
  },
  {
    icon: Heart,
    title: "Client Success & Retention",
    description: "Strengthening relationships for recurring revenue and satisfaction.",
    focus: [
      "Churn Reduction Strategies",
      "Repeat Business Growth Planning",
      "CSAT/MSAT Monitoring",
      "Client Experience Optimization",
    ],
  },
  {
    icon: Settings,
    title: "Strategy & Performance",
    description: "Ensuring business strategies translate into measurable results.",
    focus: [
      "Project Success Rate Optimization",
      "TAT Management",
      "ROI / ROAS Monitoring",
      "Strategic Implementation Governance",
    ],
  },
  {
    icon: BarChart3,
    title: "Operational Efficiency",
    description: "Streamlining workflows to enhance productivity and reduce cost.",
    focus: [
      "Operational Cost Optimization",
      "Resource Utilization Improvement",
      "Turnaround Time (TAT) reduction",
      "Process Efficiency Enhancement",
    ],
  },
  {
    icon: Globe,
    title: "Digital Growth Consulting",
    description: "Aligning digital initiatives with performance indicators.",
    focus: [
      "Website Traffic Growth Strategy",
      "Conversion Rate Optimization",
      "Cost per Lead (CPL) Reduction",
      "Social Media Engagement",
    ],
  },
];

export default function BusinessConsultingServices() {
  return (
    <section
      id="services"
      className="py-20 sm:py-24 bg-[hsl(var(--green-bg))]/50"
    >
      <div className="container mx-auto px-4 sm:px-10">

        {/* HEADER */}
        <div className="max-w-[800px] mb-12">
          <h2
            className="text-[36px] sm:text-[44px] text-foreground font-normal leading-[1.1] mb-6 tracking-[-0.015em]"
            style={{ fontFamily: "var(--font-display, serif)" }}
          >
            Strategic Consulting <br className="hidden sm:block" />
            <span className="text-[hsl(var(--green-dark))] italic">
              Designed to Drive Business Growth
            </span>
          </h2>

          <div className="w-14 h-1 bg-[hsl(var(--green-dark))] opacity-20 mb-6 rounded-full" />

          <p className="text-[15.5px] text-muted-foreground font-light leading-[1.6]">
            We provide end-to-end support across key business functions to improve efficiency, reduce risk, and enhance profitability.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-card hover:bg-[hsl(var(--green-dark))] 
                         border border-border/60 hover:border-[hsl(var(--green-dark))] 
                         rounded-xl p-5 
                         shadow-sm hover:shadow-md 
                         transition-all duration-300 hover:-translate-y-1 
                         group flex flex-col h-full"
            >
              {/* ICON → YELLOW */}
              <div className="mb-4 text-[hsl(var(--green-dark))] group-hover:text-[#f59e0b] transition-colors duration-300">
                <service.icon className="w-6 h-6" strokeWidth={1.75} />
              </div>

              {/* TITLE */}
              <h3 className="text-[15px] font-semibold text-foreground group-hover:!text-white mb-2 transition-colors duration-300">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[13.5px] text-muted-foreground group-hover:!text-white/90 leading-relaxed mb-3 transition-colors duration-300">
                {service.description}
              </p>

              {/* FOCUS LIST */}
              <ul className="text-[12.5px] space-y-1.5 text-muted-foreground group-hover:!text-white/90 mt-auto transition-colors duration-300">
                
                {/* NO YELLOW HERE */}
                <li className="uppercase text-[10px] tracking-wider text-[hsl(var(--green-dark))] group-hover:!text-white font-semibold">
                  Key Focus
                </li>

                {service.focus.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    {/* DOT → WHITE (NOT YELLOW) */}
                    <span className="mt-[5px] w-1 h-1 bg-[hsl(var(--green-dark))] group-hover:!bg-white rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}