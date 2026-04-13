import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function AboutIntro() {
  return (
    <section className="py-20 sm:py-32 bg-[#faf9f6]">
      <div className="container mx-auto px-4 sm:px-10 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column - Image with Overlay */}
          <div className="relative pt-8 lg:pt-0 px-4 sm:px-8 lg:px-0 lg:pl-4">
            <div className="relative rounded-lg overflow-hidden h-[400px] sm:h-[550px] w-full max-w-[520px] shadow-sm">
              <Image
                src="/about_intro_team.png"
                alt="Samriddhi Anveshana Team"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>

            {/* Overlapping Quote Box */}
            <div className="absolute -bottom-10 right-0 sm:-bottom-12 sm:-right-4 lg:-right-8 z-10 w-[85%] max-w-[320px] bg-[hsl(var(--green-dark))] p-8 sm:p-10 pl-10 rounded-sm shadow-lg shrink-0">
              <p className="text-[20px] sm:text-[23px] text-white font-normal italic font-serif leading-[1.3] tracking-[0.02em]" style={{ fontFamily: "var(--font-display, serif)" }}>
                "Precision in every byte,<br />growth in every strategy."
              </p>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col justify-center mt-20 lg:mt-0 lg:pl-10">
            <h2 className="text-3xl sm:text-4xl text-foreground font-normal leading-[1.1] mb-6 tracking-tight uppercase" style={{ fontFamily: "var(--font-display, serif)" }}>
              The Premier <br />
              <span className="text-[hsl(var(--green-dark))] font-medium">IT Services Provider</span>
            </h2>

            {/* Green divider line */}
            <div className="w-16 h-0.5 bg-[#4d633f] mb-10"></div>

            <div className="space-y-6 text-[15.5px] text-[#4a534c] font-normal leading-[1.8] mb-14 max-w-[540px]">
              <p>
                At Samriddhi Anveshana, we believe technology should behave like an ecosystem—interconnected, resilient, and constantly evolving. We are not just a service provider; we are architects of your digital future.
              </p>
              <p>
                Our methodology combines "Organic Brutalism"—strong, reliable infrastructure with refined, user-centric experiences. We prune away the digital noise to leave only what helps your business thrive.
              </p>
            </div>

            <div>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 text-[15px] font-bold text-[hsl(var(--green-dark))] hover:text-[#f59e0b] transition-all leading-none tracking-wide"
              >
                <span className="underline underline-offset-4">Discover our philosophy</span>
                <ArrowRight className="w-4 h-4 text-[hsl(var(--green-dark))] group-hover:text-[#f59e0b] transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
