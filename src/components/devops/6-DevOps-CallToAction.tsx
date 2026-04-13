import Link from "next/link";

export default function DevOpsCTA() {
  return (
    <section className="px-6 md:px-16 py-28 bg-[#f4f7f3] text-center">
      <div className="max-w-3xl mx-auto">

        {/* 🌿 Heading */}
        <h2 className="text-4xl md:text-5xl leading-tight tracking-tight 
                       font-[Playfair_Display] italic text-[#18392b]">
          Start your DevOps journey.
          <span className="block mt-3 not-italic font-semibold text-[#2c6e49] font-sans">
            Build faster, smarter, and more reliable systems.
          </span>
        </h2>

        {/* 📄 Description */}
        <p className="mt-6 text-[#3f5f4f] text-lg leading-relaxed font-sans">
          
          <br /><br />
          Supporting multi-cloud & hybrid ecosystems with scalable architecture, 
          high availability, and performance-first design.
        </p>

        {/* 🚀 CTA BUTTON */}
        <Link href="/contact">
          <button
            className="mt-10 px-10 py-4 rounded-lg font-medium tracking-wide 
                       bg-[#1a4a2e] text-white
                       transition-all duration-300 font-sans
                       hover:bg-[#f59e0b] 
                       hover:scale-[1.05]
                       hover:shadow-md"
          >
            Get Free Consultation →
          </button>
        </Link>

      </div>
    </section>
  );
}