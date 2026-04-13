import { Settings, BarChart3, Headphones } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Operations Management",
    items: [
      "End-to-end operations handling",
      "Process setup & optimization",
      "Workflow management & automation",
      "Resource planning & coordination",
      "SLA & TAT management",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance & KPI",
    items: [
      "CSAT & MSAT tracking",
      "AHT optimization",
      "Real-time reporting & dashboards",
      "Continuous improvement strategies",
      "Performance monitoring",
    ],
  },
  {
    icon: Headphones,
    title: "Customer Support",
    items: [
      "Inbound & Outbound Tele-calling",
      "Query resolution & complaint handling",
      "Multichannel: Voice, Email, Chat",
      "Social media response handling",
      "Retention & upselling",
    ],
  },
];

export default function BusinessSupportServices() {
  return (
    <section id="services" className="px-6 md:px-16 py-24 bg-white">
      <div className="max-w-3xl mb-16">
        <h2 className="text-4xl text-[#1a4a2e] mb-6 font-serif italic">
          Comprehensive Business Support We Deliver
        </h2>
        <p className="text-[#3a5a46] leading-relaxed">
          Our approach combines deep operational expertise with KPI-driven performance management, leveraging measurable indicators like CSAT, MSAT, and AHT.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-8 rounded-2xl bg-[#f0f5ec] border border-[#c8dac0] hover:border-[#2d6a45] transition-all group"
          >
            <service.icon className="w-8 h-8 text-[#2d6a45] mb-4" />
            <h3 className="font-bold text-xl text-[#1a4a2e] mb-4">
              {service.title}
            </h3>
            <ul className="text-sm space-y-3 text-[#3a5a46]">
              {service.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
