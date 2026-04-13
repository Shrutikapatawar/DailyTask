import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-[hsl(var(--green-btn))] text-primary-foreground py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-10 text-center flex flex-col items-center">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] max-w-[900px] mb-10 tracking-tight"
          style={{ fontFamily: "var(--font-display, serif)" }}
        >
          Ready to plant the seeds of your next major business initiative?
        </h2>

        <p className="text-[17px] sm:text-lg text-primary-foreground/80 font-light leading-relaxed max-w-[700px] mb-12">
          Partner with our team to implement reliable, scalable solutions designed to support your operations, enhance efficiency, and enable sustainable growth.
        </p>

        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 px-10 py-4 mb-8 bg-white text-[hsl(var(--green-dark))] text-[16px] font-semibold rounded-full hover:bg-[hsl(var(--green-bg))] hover:text-[#f59e0b] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Talk to Our Experts
          <span className="w-8 h-8 rounded-full bg-[hsl(var(--green-bg))] flex items-center justify-center group-hover:bg-[hsl(var(--green-dark))] transition-colors">
            <ArrowUpRight className="w-4 h-4 text-[hsl(var(--green-dark))] group-hover:text-[#f59e0b] transition-colors" />
          </span>
        </Link>

        <div className="w-16 h-px bg-primary-foreground/20 mb-8" />

        <p className="text-[14.5px] text-primary-foreground/70 font-light max-w-[500px]">
          Our team is prepared to understand your needs and deliver structured solutions tailored to your business goals.
        </p>
      </div>
    </section>
  );
}
