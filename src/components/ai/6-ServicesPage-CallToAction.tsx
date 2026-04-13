"use client";
import Link from "next/link";
import { useState } from "react";
import ContactModal from "./8-ServicesPage-Contact";

const CTASection: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="bg-[hsl(var(--green-dark))] text-white py-28 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-xs tracking-widest text-[hsl(var(--green-btn))]/80 mb-4">
            START A CONVERSATION
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Start something intelligent.
            <br />
            <span className="italic text-white/80 text-2xl md:text-3xl font-normal leading-relaxed">
              Let's build the systems that power your next phase of growth.
            </span>
          </h1>

          <p className="mt-6 text-sm text-gray-300 leading-relaxed max-w-xl mx-auto">
            Whether you're exploring AI for the first time or scaling an existing intelligent 
            infrastructure, our team is ready to understand your vision and engineer the right 
            solution — it starts with one conversation.
            Book a Free Discovery Call
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-block 
                         bg-white/10 
                         border border-white/30
                         px-6 py-3 rounded-md text-white font-medium 
                         transition-all duration-300 
                         hover:bg-[#f59e0b] 
                         hover:text-white 
                         hover:scale-[1.05] 
                         hover:shadow-lg"
            >
              Schedule a consultation
            </Link>
          </div>

        </div>
      </section>

      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default CTASection;