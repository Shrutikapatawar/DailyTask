import Link from "next/link";

export default function BusinessConsultingCTA() {
  return (
    <section className="px-6 md:px-16 py-28 bg-[hsl(var(--green-bg))] text-center border-none">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-semibold text-[hsl(var(--green-dark))] leading-tight tracking-tight font-serif italic">
          Build a stronger, scalable business with strategies designed for real growth.
        </h2>

        <p className="mt-6 text-[hsl(var(--green-dark))]/70 text-lg leading-relaxed">
          Contact us today to start your next phase with confidence.
        </p>

        <Link href="/contact">
          <button
            className="mt-10 
                       bg-[hsl(var(--green-btn))] 
                       text-white 
                       px-10 py-4 rounded-lg font-medium tracking-wide 
                       transition duration-300 border-none cursor-pointer
                       hover:bg-[#f59e0b] 
                       hover:scale-[1.05]
                       hover:shadow-md"
          >
            Schedule a Business Growth Consultation →
          </button>
        </Link>

      </div>
    </section>
  );
}