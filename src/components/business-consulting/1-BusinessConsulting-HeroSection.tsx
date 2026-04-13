"use client";

import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";

export default function BusinessConsultingHero() {
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
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-lg">
          
          <p className="text-[hsl(var(--green-dark))] text-[12px] tracking-[0.2em] font-semibold mb-6 uppercase">
            Business Consulting & Growth Services
          </p>

          <h1 className="text-[44px] md:text-[56px] leading-[1.1] font-semibold text-foreground">
            <span className="italic text-[hsl(var(--green-dark))]">
              Strategic Consulting That
            </span>
            <br />
            Turns Ideas into Scalable Growth.
          </h1>

          <p className="mt-6 text-black text-[16px] leading-7 max-w-md">
            We help startups and SMEs build strong foundations, streamline operations, and develop sustainable growth strategies that align with long-term objectives.
          </p>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 
                         bg-[#1e4d32] text-white 
                         text-[15px] font-medium px-7 py-3.5 rounded-[10px]
                         transition-all duration-300
                         hover:bg-[#f59e0b] 
                         hover:-translate-y-[2px] 
                         hover:scale-[1.03]
                         hover:shadow-md"
            >
              <span>Accelerate Your Business Growth Today</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* RIGHT → FORM */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
            
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
                           focus:outline-none focus:border-[#1e4d32]"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                className="border border-gray-200 px-4 py-2.5 rounded-lg 
                           focus:outline-none focus:border-[#1e4d32]"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="border border-gray-200 px-4 py-2.5 rounded-lg 
                           focus:outline-none focus:border-[#1e4d32]"
              />

              <textarea
                name="message"
                placeholder="Tell us about your requirement..."
                rows={3}
                onChange={handleChange}
                className="border border-gray-200 px-4 py-2.5 rounded-lg 
                           focus:outline-none focus:border-[#1e4d32]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#1e4d32] text-white 
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