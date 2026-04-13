"use client";

import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";

export default function DevOpsHero() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent 🚀");
  };

  return (
    <section className="bg-[hsl(var(--green-bg))]/20 pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>

          <div className="bg-white/70 border border-[hsl(var(--green-dark))]/20 
                          rounded-lg text-[hsl(var(--green-dark))] text-[11px] 
                          px-5 py-2 inline-block mb-6 uppercase tracking-[0.2em] font-semibold">
            DevOps & Cloud Engineering
          </div>

          <h1 className="text-5xl md:text-6xl font-semibold text-[hsl(var(--green-dark))] leading-tight">
            <span className="italic text-[hsl(var(--green-dark))]">
              Accelerate delivery.
            </span>
            <br />
            Automate everything.
            <br />
            <span className="text-[hsl(var(--green-dark))]">
              Scale with confidence.
            </span>
          </h1>

          <p className="mt-6 text-[16px] leading-7 text-black max-w-md">
            We help organizations streamline their software delivery lifecycle through modern DevOps practices, cloud adoption, and automation. By bridging the gap between development and operations, we enable faster releases, improved reliability, and scalable infrastructure.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 
                       bg-[hsl(var(--green-btn))] text-primary-foreground 
                       text-[15px] font-medium px-7 py-3.5 rounded-[10px]
                       transition-all duration-300
                       hover:bg-[#f59e0b] 
                       hover:scale-[1.03]
                       hover:shadow-md"
          >
            <span>Get DevOps Consultation</span>
            <span>→</span>
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative">
          <div className="mt-8 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/40">
            
            <h3 className="text-xl font-bold text-[hsl(var(--green-dark))]">
              Get Free Consultation
            </h3>

            <p className="text-sm text-muted-foreground mb-4">
              Let’s understand your business and help you grow
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="border border-gray-200 px-4 py-2.5 rounded-lg 
                           focus:outline-none focus:border-[hsl(var(--green-dark))]"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                className="border border-gray-200 px-4 py-2.5 rounded-lg 
                           focus:outline-none focus:border-[hsl(var(--green-dark))]"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="border border-gray-200 px-4 py-2.5 rounded-lg 
                           focus:outline-none focus:border-[hsl(var(--green-dark))]"
              />

              <textarea
                name="message"
                placeholder="Tell us about your requirement..."
                rows={3}
                onChange={handleChange}
                className="border border-gray-200 px-4 py-2.5 rounded-lg 
                           focus:outline-none focus:border-[hsl(var(--green-dark))]"
              ></textarea>

              <button
                type="submit"
                className="bg-[hsl(var(--green-btn))] text-primary-foreground 
                           text-[15px] font-medium px-7 py-3.5 rounded-[10px]
                           transition-all duration-300
                           hover:bg-[#f59e0b] 
                           hover:scale-[1.03]
                           hover:shadow-md"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}