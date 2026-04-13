"use client";

import { useState, ChangeEvent, FormEvent } from "react";

const Hero: React.FC = () => {
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
    <section className="bg-[hsl(var(--green-bg))]/20 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-5xl md:text-6xl font-semibold text-[hsl(var(--green-dark))] leading-tight">
            <span className="italic text-[hsl(var(--green-dark))]">
              AI-powered momentum.
            </span>
            <br />
            Data-driven clarity
          </h1>

          <p className="mt-6 text-muted-foreground max-w-md">
            Intelligence that works. Automation that scales.
          </p>

          {/* PRIMARY BUTTON */}
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 
                       bg-[hsl(var(--green-btn))] text-primary-foreground 
                       text-[15px] font-medium px-7 py-3.5 rounded-[10px]
                       transition-all duration-300
                       hover:bg-[#f59e0b]
                       hover:shadow-md
                       hover:scale-[1.03]"
          >
            <span>Talk to our AI Expert</span>
            <span>→</span>
          </a>
        </div>

        {/* RIGHT SIDE - FORM */}
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

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="bg-[hsl(var(--green-btn))] text-primary-foreground 
                           text-[15px] font-medium px-7 py-3.5 rounded-[10px]
                           transition-all duration-300
                           hover:bg-[#f59e0b]
                           hover:shadow-md
                           hover:scale-[1.03]"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;