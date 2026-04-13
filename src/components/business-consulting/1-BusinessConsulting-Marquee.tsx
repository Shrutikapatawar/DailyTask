const BusinessConsultingMarquee: React.FC = () => {
  const items = [
    "Business Strategy",
    "Startup Advisory",
    "Market Entry",
    "Operational Efficiency",
    "Revenue Growth",
    "Feasibility Analysis",
    "Go-to-Market",
    "Customer Acquisition",
    "Process Optimization",
    "Competitive Analysis",
    "KPI Tracking",
    "Strategic Roadmapping",
    "Digital Transformation",
  ];

  return (
    <div className="w-full bg-[hsl(var(--green-btn))] overflow-hidden py-3">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-6 text-sm text-white/80 flex items-center gap-4"
          >
            <span className="w-2 h-2 bg-white/60 rounded-full"></span>
            <span className="tracking-wide">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BusinessConsultingMarquee;
