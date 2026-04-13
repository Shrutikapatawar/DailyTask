"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Shield, DollarSign, Sparkles, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Zero-Downtime Deployments",
    description: "Blue-green and canary strategies for smooth, risk-free application updates.",
  },
  {
    icon: TrendingUp,
    title: "Elastic Auto-Scaling",
    description: "Dynamic resource allocation matching traffic spikes while minimizing costs.",
  },
  {
    icon: Shield,
    title: "Continuous Security",
    description: "Automated vulnerability scanning and compliance checks built into every pipeline.",
  },
  {
    icon: DollarSign,
    title: "Cloud Cost Optimization",
    description: "FinOps-driven rightsizing to maximize ROI on AWS, Azure, and Google Cloud.",
  },
  {
    icon: Sparkles,
    title: "Proactive Self-Healing",
    description: "Intelligent infrastructure that detects failures and recovers autonomously.",
  },
  {
    icon: RefreshCw,
    title: "Automated Disaster Recovery",
    description: "Routine automated backups and multi-region failovers to guarantee uptime.",
  },
];

// ✨ Animation (soft + premium)
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function DevOpsFeatures() {
  return (
    <section
      id="features"
      className="py-24 sm:py-28 bg-[hsl(var(--green-bg))]/50"
    >
      <div className="container mx-auto px-4 sm:px-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT CONTENT (UNCHANGED) */}
          <div className="lg:w-1/3">
            <h2
              className="text-[34px] sm:text-[40px] text-foreground leading-[1.1] mb-6 tracking-[-0.015em]"
              style={{ fontFamily: "var(--font-display, serif)" }}
            >
              Engineering{" "}
              <span className="text-[hsl(var(--green-dark))] italic">
                Excellence
              </span>
            </h2>

            <div className="w-14 h-1 bg-[hsl(var(--green-dark))] opacity-20 mb-6 rounded-full" />

            <p className="text-[16px] text-muted-foreground leading-[1.6] mb-8">
              Powering your delivery pipelines with enterprise-grade capabilities that ensure performance, scale, and uncompromising security across all environments.
            </p>

            <button className="bg-[hsl(var(--green-dark))] text-white px-7 py-3 rounded-lg text-sm font-medium shadow-sm">
              Explore Capabilities →
            </button>
          </div>

          {/* FEATURES GRID (ONLY THIS PART ANIMATED) */}
          <motion.div
            className="lg:w-2/3 grid sm:grid-cols-2 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-card border border-border/60 rounded-xl p-5 flex gap-4 items-start shadow-sm"
              >
                {/* Icon */}
                <div className="bg-[hsl(var(--green-bg))] p-3 rounded-lg text-[hsl(var(--green-dark))] shrink-0">
                  <feature.icon className="w-5 h-5" />
                </div>

                {/* Text */}
                <div>
                  <h4 className="text-[15px] font-semibold text-foreground mb-1.5">
                    {feature.title}
                  </h4>
                  <p className="text-[13.5px] text-muted-foreground leading-snug">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
