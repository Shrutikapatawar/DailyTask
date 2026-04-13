const sectors = [
  "Agriculture & Food Systems",
  "Healthcare Industry",
  "Financial Inclusion",
  "Urban Development",
  "Education & Skilling",
  "Water & Sanitation",
  "Energy & Climate",
  "MSME & Livelihoods",
  "Compliance & Regulatory Services",
  "Governance Reform",
  "Digital Transformation",
  "CSR & Social Impact",
];

const SectorsSection: React.FC = () => {
  return (
    <section className="bg-[#f5f1ea] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 max-w-3xl">
          <p className="text-[#546b47] font-semibold mb-3 tracking-wide">
            — SECTORS WE SERVE
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-[#0d2005] leading-tight">
            Across multiple{" "}
            <span className="italic text-[#486231]">
              industries
            </span>{" "}
            &amp; domains
          </h1>
        </div>

        {/* GRID */}
        <div className="flex flex-wrap gap-4">
          {sectors.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 
                         px-5 py-3 rounded-full 
                         bg-white border border-[#e5ded3]
                         transition-all duration-300 cursor-default
                         hover:bg-[#f59e0b] 
                         hover:border-[#f59e0b] 
                         hover:shadow-lg 
                         hover:scale-[1.05]"
            >
              <span className="w-2 h-2 bg-[#546b47] rounded-full 
                               group-hover:bg-white transition"></span>

              <p className="text-sm text-gray-700 
                            group-hover:text-white transition">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SectorsSection;
