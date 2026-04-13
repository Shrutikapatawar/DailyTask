export default function DevOpsQuote() {
  return (
    <section className="relative px-6 md:px-16 py-28 bg-gradient-to-br from-[#0f2f1f] via-[#133c2a] to-[#0b2217] text-white overflow-hidden text-center">

      {/* 🌿 soft glow blobs */}
      <div className="absolute w-[420px] h-[420px] bg-[#3fa36c] opacity-20 rounded-full blur-3xl top-[-80px] left-[-80px]" />
      <div className="absolute w-[300px] h-[300px] bg-[#6ee7b7] opacity-10 rounded-full blur-3xl bottom-[-60px] right-[-60px]" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* ✨ Quote */}
        <h2 className="text-3xl md:text-5xl italic mb-8 font-[Playfair_Display] leading-tight text-white/95">
          “Build resilient systems with modern DevOps practices. 
          From startups to enterprises, we design solutions that scale with you.”
        </h2>

        {/* 🌿 Tagline */}
        <p className="text-[#86efac] uppercase tracking-[0.3em] text-xs mb-10">
          Performance • Reliability • Scalability
        </p>

        {/* 📄 Description */}
        <p className="text-white/70 leading-relaxed text-lg font-light">
          With a strong focus on reliability and performance, we empower teams to 
          deliver high-quality applications faster while reducing operational overhead. 
          From crafting seamless CI/CD pipelines to automating infrastructure with IaC 
          and implementing robust monitoring, we ensure your systems run smoothly, 
          securely, and efficiently — always ready to scale.
        </p>

      </div>
    </section>
  );
}
