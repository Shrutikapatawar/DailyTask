import { Clock, TrendingUp, Users, Shield } from "lucide-react";

const features = [
  { icon: Clock, title: "24x7", subtitle: "Operational Support" },
  { icon: TrendingUp, title: "KPI-Driven", subtitle: "Performance Model" },
  { icon: Users, title: "Scalable", subtitle: "Team Structure" },
  { icon: Shield, title: "Quality", subtitle: "Assurance & Monitoring" },
];

export default function BusinessSupportFeatures() {
  return (
    <section id="features" className="relative px-6 md:px-16 py-24 bg-white overflow-hidden">
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl text-[#1a4a2e] mb-8 font-serif italic">
            Key Features
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[#f0f5ec] p-6 rounded-lg border border-[#c8dac0]"
              >
                <feature.icon className="w-6 h-6 text-[#2d6a45] mb-2" />
                <p className="font-bold text-[#1a4a2e]">
                  {feature.title}
                </p>
                <p className="text-sm text-[#3a5a46]">
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#1a4a2e] p-12 rounded-3xl text-white shadow-xl">
          <p className="uppercase tracking-widest text-xs opacity-70 mb-4">
            Our Positioning
          </p>
          <h3 className="text-3xl italic mb-6 font-serif">
            &ldquo;We manage operations, not just tasks — ensuring performance, efficiency, and measurable business outcomes.&rdquo;
          </h3>
          <hr className="opacity-20 mb-6" />
          <p className="text-sm leading-relaxed opacity-90">
            By integrating standardized workflows and data-driven insights, we help enterprises achieve consistent service delivery and scalable performance.
          </p>
        </div>
      </div>
    </section>
  );
}
