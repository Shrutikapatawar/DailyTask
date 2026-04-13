import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url('/hero_bg.png')`, backgroundPosition: 'right center' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-background via-background/90 to-background/30" />

      <div className="container relative z-10 mx-auto px-4 sm:px-10 py-16 sm:py-24">
        <div className="max-w-[750px]">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-[0.1em] text-white uppercase bg-[hsl(var(--green-logo-bg))] rounded-sm">
            Innovative IT Solutions
          </span>
          
          <h1 className="text-5xl sm:text-6xl md:text-[76px] text-foreground font-normal leading-[1.05] mb-8 tracking-[-0.02em]" style={{ fontFamily: "var(--font-display, serif)" }}>
            Empowering Your <br className="hidden sm:block" />
            Business Through <br />
            <span className="text-[hsl(var(--green-dark))] italic font-light underline decoration-[1px] underline-offset-[8px] decoration-[hsl(var(--green-mid))]/30">Innovative IT Solutions</span>
          </h1>
          
          <p className="text-[17px] text-muted-foreground font-light leading-[1.7] mb-10 max-w-[620px]">
            Samriddhi Anveshana delivers integrated technology, business, and operational solutions designed to simplify processes, strengthen performance, and support sustainable growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[hsl(var(--green-btn))] text-primary-foreground font-medium rounded-[10px] hover:bg-[hsl(var(--green-mid))] hover:text-[#f59e0b] hover:-translate-y-0.5 transition-all text-[15px] shadow-sm tracking-[0.01em]"
            >
              Get Started
            </Link>
            <Link 
              href="#services-overview"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[hsl(var(--green-bg))] text-[hsl(var(--green-dark))] font-medium rounded-[10px] hover:bg-white hover:text-[#f59e0b] hover:-translate-y-0.5 transition-all text-[15px] shadow-sm tracking-[0.01em]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}