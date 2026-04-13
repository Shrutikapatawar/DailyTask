const SectionDivider: React.FC = () => {
  const items = [
    "AI & Automation",
    "Agentic Systems",
    "Generative AI",
    "AI App Development",
    "Conversational AI",
    "AI Analytics",
    "HR Intelligence",
    "AI Integration",
    "LLM Engineering",
    "Intelligent Automation",
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

export default SectionDivider;
