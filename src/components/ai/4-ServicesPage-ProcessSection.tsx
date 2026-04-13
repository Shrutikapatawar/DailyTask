"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "STEP 01",
    title: "Discovery",
    desc: "Deep immersion in your context, stakeholders, and the challenges that matter most. We listen before we advise.",
  },
  {
    step: "STEP 02",
    title: "Diagnosis",
    desc: "Structured analysis to identify root causes and opportunity spaces. Evidence and data drive every conclusion.",
  },
  {
    step: "STEP 03",
    title: "Design",
    desc: "Co-creating solutions that are ambitious yet practical — built with your team, not handed to them.",
  },
  {
    step: "STEP 04",
    title: "Deliver",
    desc: "Implementation support, progress tracking, and continuous iteration to ensure outcomes land on the ground.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-[hsl(var(--green-bg))]/20 py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT → HEADER + DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[hsl(var(--green-dark))] font-semibold mb-3 tracking-wide">
              — HOW WE WORK
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold text-[hsl(var(--green-dark))] leading-tight mb-6">
              A clear process, every{" "}
              <span className="italic text-[hsl(var(--green-dark))]">
                engagement
              </span>
            </h1>

            <p className="text-gray-600 text-base leading-relaxed max-w-md">
              At Samridhhi Anveshana, our AI team engineers intelligent solutions that redefine how 
              businesses operate, scale, and compete. We combine deep technical expertise with 
              domain-driven thinking to deploy automation, agentic systems, and AI-powered 
              applications tailored to your unique challenges.
              <br />
              From building generative AI products and conversational interfaces to delivering 
              predictive analytics, HR intelligence, and seamless AI integrations — we don't just 
              implement technology, we architect it with purpose.
              <br />
              Whether you're a startup exploring AI for the first time or an enterprise ready to scale 
              intelligent systems, Samridhhi Anveshana brings the technical depth and strategic 
              clarity to move you forward — faster, smarter, and with precision.
            </p>
          </motion.div>

          {/* RIGHT → CARDS */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {steps.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-2xl border border-[#e5ded3] bg-white 
                           transition-all duration-300 cursor-pointer
                           hover:bg-[#f59e0b] 
                           hover:border-[#f59e0b] 
                           hover:shadow-[0_8px_20px_rgba(245,158,11,0.4)]
                           hover:scale-[1.05]"
              >
                <div className="w-10 h-[2px] bg-[hsl(var(--green-btn))]/40 mb-6 
                                group-hover:bg-white transition"></div>

                <p className="text-xs tracking-widest text-gray-500 mb-3 
                              group-hover:text-white transition">
                  {item.step}
                </p>

                <h3 className="text-xl font-semibold text-[hsl(var(--green-dark))] mb-4 
                               group-hover:text-white transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed 
                              group-hover:text-white transition">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
