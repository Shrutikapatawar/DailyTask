"use client";

import { Briefcase, MapPin, Clock } from "lucide-react";

const jobs = [
  {
    title: "Frontend Developer",
    experience: "1-3 Years",
    location: "Remote / Hybrid",
    type: "Full-time",
    description:
      "Work on modern UI experiences using React, Next.js, and scalable design systems.",
  },
  {
    title: "Backend Developer",
    experience: "2-5 Years",
    location: "On-site",
    type: "Full-time",
    description:
      "Build robust APIs and scalable backend systems using Node.js and databases.",
  },
  {
    title: "UI/UX Designer",
    experience: "1-4 Years",
    location: "Remote",
    type: "Contract",
    description:
      "Design clean, intuitive user interfaces and improve user journeys across products.",
  },
  {
    title: "Digital Marketing Executive",
    experience: "0-2 Years",
    location: "Hybrid",
    type: "Full-time",
    description:
      "Drive growth through SEO, social media, and performance marketing campaigns.",
  },
];

export default function CareersPage() {
  return (
    <section className="py-20 sm:py-24 bg-[hsl(var(--green-bg))]/50">
      <div className="container mx-auto px-4 sm:px-10">

        {/* HEADER */}
        <div className="max-w-[800px] mb-12">
          <h2
            className="text-[36px] sm:text-[44px] text-foreground font-normal leading-[1.1] mb-6 tracking-[-0.015em]"
            style={{ fontFamily: "var(--font-display, serif)" }}
          >
            Join Our Team <br className="hidden sm:block" />
            <span className="text-[hsl(var(--green-dark))] italic">
              Build Something Meaningful
            </span>
          </h2>

          <div className="w-14 h-1 bg-[hsl(var(--green-dark))] opacity-20 mb-6 rounded-full" />

          <p className="text-[15.5px] text-muted-foreground font-light leading-[1.6]">
            We’re always looking for passionate people who want to grow, innovate,
            and make an impact. Explore our open roles and become part of our journey.
          </p>
        </div>

        {/* JOB CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-card hover:bg-[hsl(var(--green-dark))]
                         border border-border/60 hover:border-[hsl(var(--green-dark))]
                         rounded-xl p-5
                         shadow-sm hover:shadow-md
                         transition-all duration-300 hover:-translate-y-1
                         group flex flex-col h-full"
            >
              {/* ICON */}
              <div className="mb-4 text-[hsl(var(--green-dark))] group-hover:text-[#f59e0b] transition-colors duration-300">
                <Briefcase className="w-6 h-6" strokeWidth={1.75} />
              </div>

              {/* TITLE */}
              <h3 className="text-[16px] font-semibold text-foreground group-hover:!text-white mb-2 transition-colors duration-300">
                {job.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[13.5px] text-muted-foreground group-hover:!text-white/90 leading-relaxed mb-4 transition-colors duration-300">
                {job.description}
              </p>

              {/* DETAILS */}
              <div className="space-y-2 text-[12.5px] text-muted-foreground group-hover:!text-white/90 mt-auto transition-colors duration-300">

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{job.experience}</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>

                <div className="uppercase text-[10px] tracking-wider text-[hsl(var(--green-dark))] group-hover:!text-white font-semibold mt-2">
                  {job.type}
                </div>
              </div>

              {/* APPLY BUTTON */}
              <button className="mt-5 text-[13px] font-medium 
                                 text-[hsl(var(--green-dark))] 
                                 group-hover:text-white
                                 border border-[hsl(var(--green-dark))] 
                                 group-hover:border-white
                                 rounded-md py-2
                                 transition-all duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
