import Link from 'next/link';

export default function BusinessSupportCTA() {
  return (
    <section className="px-6 md:px-16 py-28 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#1a4a2e] leading-tight tracking-tight font-serif italic">
          Ensure your business operations run without interruption.
        </h2>
        <p className="mt-6 text-[#3a5a46] text-lg leading-relaxed">
          Partner with a team that delivers reliable 24×7 support, structured workflows, and measurable performance outcomes.
        </p>
        <Link href="/contact">
          <button className="mt-10 bg-[#1a4a2e] text-white px-10 py-4 rounded-lg font-medium tracking-wide hover:bg-[#2d6a45] transition duration-300 shadow-lg border-none cursor-pointer">
          Start Your Support Journey →
         </button>
        </Link>
      </div>
    </section>
  );
}
