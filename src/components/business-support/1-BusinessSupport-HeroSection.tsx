"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function BusinessSupportHero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-[#f0f5ec] px-6 md:px-20 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
      <div className="max-w-xl">
        <div className="bg-white border border-[#c8dac0] rounded-lg text-[#1a4a2e] text-[11px] px-5 py-2 inline-block mb-6 uppercase tracking-[0.2em] font-semibold">
          Business Support Services (24x7 BPO / Operations)
        </div>
        <h1 className="text-[48px] md:text-[62px] leading-[1.1] text-[#1a3a28] tracking-tight font-serif italic">
          Reliable 24×7 <br /> Support for{" "}
          <span className="text-[#2d6a45]">
            Enterprise Operations.
          </span>
        </h1>
        <p className="mt-6 text-[16px] leading-7 text-[#3a5a46] opacity-90">
          Maintain service quality, operational speed, and customer satisfaction at scale. From high-volume engagements to critical back-office workflows, we ensure accuracy and continuity across global time zones.
        </p>
        <div className="mt-8">
          <Link href="/contact" className="inline-block bg-[#1e4d32] text-white text-lg px-10 py-4 rounded-lg font-medium transition-all duration-200 hover:bg-[#2d6a45] hover:-translate-y-px">
            Start Your 24×7 Support Journey
          </Link>
        </div>
      </div>

      <div id="contact" className="bg-white p-8 rounded-2xl shadow-xl border border-[#c8dac0]">
        <h2 className="text-2xl font-bold text-[#1a4a2e] mb-2">
          Design Your Model
        </h2>
        <p className="text-sm text-[#7a9080] mb-6">
          Discuss a scalable support model tailored to your enterprise.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-[#c8dac0] px-4 py-3 rounded-lg"
          />
          <Input
            type="email"
            placeholder="Business Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border-[#c8dac0] px-4 py-3 rounded-lg"
          />
          <Textarea
            placeholder="Tell us about your operations requirement..."
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="border-[#c8dac0] px-4 py-3 rounded-lg"
          />
          <Button
            type="submit"
            className="bg-[#1a4a2e] text-white py-4 rounded-lg font-semibold hover:bg-[#2d6a45] transition w-full"
          >
            Submit Request
          </Button>
        </form>
      </div>
    </section>
  );
}
