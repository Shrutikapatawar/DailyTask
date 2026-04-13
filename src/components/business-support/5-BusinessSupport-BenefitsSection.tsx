import { Check } from "lucide-react";

const benefits = [
  "Smooth & Efficient Operations",
  "Improved Satisfaction (CSAT/MSAT)",
  "Faster Turnaround Time",
  "Reduced Operational Costs",
  "Data-backed Decision Making",
];

export default function BusinessSupportBenefits() {
  return (
    <section className="relative px-6 md:px-16 py-24 bg-[#f0f5ec] overflow-hidden text-center">
      <h2 className="text-4xl text-[#1a4a2e] mb-12 font-serif italic">
        Business Benefits
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {benefits.map((benefit) => (
          <div
            key={benefit}
            className="flex items-center gap-4 p-6 rounded-xl bg-white border border-[#c8dac0] shadow-sm min-w-[300px]"
          >
            <Check className="w-5 h-5 text-[#f59e0b] shrink-0" />
            <span className="text-sm font-semibold text-[#1a3a28]">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
