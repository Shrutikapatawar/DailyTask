export default function LegalHero({ title, subtitle, chips }: { title: string; subtitle: string; chips: string[] }) {
  return (
    <div className="bg-gradient-to-br from-[#41642f] to-[#597d45] rounded-2xl p-10 mb-8 text-white shadow-md">
      <div className="inline-block text-[11px] uppercase tracking-wider bg-white/15 px-2 py-1 rounded-full mb-3">
        Legal Document
      </div>
      <h1 className="text-[34px] leading-[1.15] font-semibold mb-2" style={{ fontFamily: "'Lora', serif" }}>
        {title}
      </h1>
      <p className="text-white/90">{subtitle}</p>
      <div className="mt-4 flex gap-2 flex-wrap">
        {chips.map((chip, i) => (
          <span key={i} className="border border-white/40 bg-white/12 px-3 py-1.5 rounded-full text-[12px]">
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
