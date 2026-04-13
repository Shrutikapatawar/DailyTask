"use client";

import { useState } from "react";
import { 
  Briefcase, MapPin, Clock, Users, Award, Leaf, ArrowRight, 
  Play, ChevronDown, Star 
} from "lucide-react";

const jobs = [
  { id: 1, title: "Frontend Developer", department: "Engineering", location: "Remote / Hybrid", experience: "1-3 Years", type: "Full-time" },
  { id: 2, title: "Backend Developer", department: "Engineering", location: "On-site", experience: "2-5 Years", type: "Full-time" },
  { id: 3, title: "UI/UX Designer", department: "Design", location: "Remote", experience: "1-4 Years", type: "Contract" },
  { id: 4, title: "AI/ML Engineer", department: "AI", location: "Hybrid", experience: "3-6 Years", type: "Full-time" },
  { id: 5, title: "Cybersecurity Analyst", department: "Security", location: "Remote", experience: "2-5 Years", type: "Full-time" },
];

const testimonials = [
  {
    name: "Kaushal Chintawar",
    role: "CEO",
    quote: "We believe in building not just products, but people. Growth, ownership, and purpose drive everything we do.",
    image: "/team/kaushal.jpg" // replace with actual image
  },
  {
    name: "Praveen Raj",
    role: "Grievance Officer - Samriddhi Anveshana",
    quote: "A strong team listens, supports, and evolves together. Every voice matters here.",
    image: "/team/praveen.jpg" // replace with actual image
  }
];


const processSteps = [
  { step: "01", title: "Application", desc: "Submit your details & resume" },
  { step: "02", title: "Screening", desc: "Quick call with talent team" },
  { step: "03", title: "Technical Round", desc: "Skills + problem-solving discussion" },
  { step: "04", title: "Culture Fit", desc: "Meet the team & leadership" },
  { step: "05", title: "Offer", desc: "Exciting opportunity awaits!" },
];

const faqs = [
  { q: "Do you offer remote or hybrid work?", a: "Yes, most roles are remote-friendly or hybrid depending on the team and role requirements." },
  { q: "What is the typical interview process?", a: "It usually takes 3–5 weeks and includes Application Screening, Technical Round, Culture Fit, and Offer." },
  { q: "Do you sponsor work visas?", a: "We evaluate sponsorship on a case-by-case basis for exceptional talent." },
  { q: "How do you support professional growth?", a: "We provide an annual learning budget, mentorship programs, conference support, and internal mobility opportunities." },
  { q: "What is the company culture like?", a: "Collaborative, growth-oriented, and people-first. We value ownership, creativity, and work-life balance." },
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [filters, setFilters] = useState({ department: "All", location: "All" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredJobs = jobs.filter(job => {
    const deptMatch = filters.department === "All" || job.department === filters.department;
    const locMatch = filters.location === "All" || job.location.toLowerCase().includes(filters.location.toLowerCase());
    return deptMatch && locMatch;
  });

  const handleApply = (job: any) => {
    setSelectedJob(job);
    setTimeout(() => {
      document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  };

  return (
    <section className="bg-[hsl(var(--green-bg))]/10 min-h-screen text-zinc-800">

      {/* 1. HERO SECTION */}
      <div className="bg-[hsl(var(--green-bg))]/20 py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-white px-8 py-3.5 rounded-3xl shadow-sm border border-white/60 mb-8">
            <Leaf className="w-6 h-6 text-[hsl(var(--green-dark))]" />
            <span className="uppercase tracking-widest text-sm font-medium text-[hsl(var(--green-dark))]">Come Grow With Us</span>
          </div>

          <h1 className="text-6xl sm:text-7xl leading-none tracking-tight mb-6 text-[hsl(var(--green-dark))]">
            Build Your Career<br />
            <span className="italic">Where Ideas Turn Real</span>
          </h1>

          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Join a team that values creativity, ownership, and meaningful impact.
          </p>

          <a 
            href="#open-positions" 
            className="inline-flex items-center gap-3 bg-[hsl(var(--green-btn))] text-primary-foreground 
                       text-[15px] font-medium px-10 py-4 rounded-[10px] hover:bg-[#f59e0b] 
                       hover:shadow-md hover:scale-[1.03] transition-all duration-300"
          >
            View Open Positions <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* 2. ABOUT WORKING HERE */}
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-semibold text-[hsl(var(--green-dark))] mb-8">About Working Here</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a fast-growing tech company building products that matter. Our mission is to create technology that empowers people and businesses in an AI-driven world.
            </p>
            <p className="text-xl text-muted-foreground leading-relaxed mt-6">
              Our vision is to be a place where talented people grow personally and professionally while solving meaningful challenges.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-xl p-12 rounded-2xl shadow-xl border border-white/40">
            <div className="space-y-8">
              <div className="flex gap-5">
                <Users className="w-10 h-10 text-[hsl(var(--green-dark))]" />
                <div>
                  <p className="font-medium text-lg">Collaborative & Supportive Culture</p>
                  <p className="text-sm text-muted-foreground">Open feedback and cross-functional teamwork</p>
                </div>
              </div>
              <div className="flex gap-5">
                <Award className="w-10 h-10 text-[hsl(var(--green-dark))]" />
                <div>
                  <p className="font-medium text-lg">Continuous Learning</p>
                  <p className="text-sm text-muted-foreground">Learning budget, mentorship & conferences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. WHY JOIN US */}
      <div className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-semibold text-center mb-16 text-[hsl(var(--green-dark))]">Why Join Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: "Rapid Growth", desc: "Real ownership from day one with fast learning opportunities" },
              { icon: Users, title: "People-First Culture", desc: "Flexible work, wellness support, and genuine care for your wellbeing" },
              { icon: Award, title: "Creative Freedom", desc: "Space to experiment and turn bold ideas into impactful products" },
            ].map((item, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-xl border border-white/40 p-10 rounded-2xl hover:shadow-xl transition">
                <item.icon className="w-12 h-12 text-[hsl(var(--green-dark))] mb-6" />
                <h3 className="text-2xl font-semibold mb-4 text-[hsl(var(--green-dark))]">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* 4. LIFE AT COMPANY - Videos */}
<div className="py-24 bg-[hsl(var(--green-bg))]/10">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-5xl font-semibold text-center mb-6 text-[hsl(var(--green-dark))]">
      Moments That Started It All ✨
    </h2>
    
    <p className="text-center text-xl text-muted-foreground mb-16">
      Our inauguration marked the beginning of something special.
    </p>

    <div className="flex justify-center">
      <div className="w-full md:w-[60%] aspect-video bg-zinc-900 rounded-2xl overflow-hidden relative group shadow-xl">
        
        <iframe
          className="w-full h-full"
          src="https://drive.google.com/file/d/1gKsXgv7FKYCMP9FOfVKbXSroMvKOyQlV/preview"
          allow="autoplay"
        ></iframe>

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition pointer-events-none">
          <Play className="w-16 h-16 text-white group-hover:scale-110 transition" />
        </div>

      </div>
    </div>

  </div>
</div>


      {/* 5+6. OPEN POSITIONS + FILTERS */}
      <div id="open-positions" className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div>
            <h2 className="text-5xl font-semibold text-[hsl(var(--green-dark))]">Open Positions</h2>
            <p className="text-xl text-muted-foreground mt-2">Find your next role</p>
          </div>

          <div className="flex gap-4 mt-8 md:mt-0">
            <select 
              onChange={(e) => setFilters({...filters, department: e.target.value})}
              className="px-6 py-3.5 rounded-[10px] border border-gray-200 bg-white focus:outline-none focus:border-[hsl(var(--green-dark))]"
            >
              <option value="All">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="AI">AI</option>
              <option value="Security">Security</option>
            </select>
            <select 
              onChange={(e) => setFilters({...filters, location: e.target.value})}
              className="px-6 py-3.5 rounded-[10px] border border-gray-200 bg-white focus:outline-none focus:border-[hsl(var(--green-dark))]"
            >
              <option value="All">All Locations</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.map((job) => (
            <div 
              key={job.id} 
              className="bg-white/80 backdrop-blur-xl border border-white/40 hover:border-[hsl(var(--green-dark))] 
                         rounded-2xl p-10 hover:shadow-xl transition-all group flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-8 text-[hsl(var(--green-dark))] group-hover:text-[#f59e0b] transition-colors">
                {job.title}
              </h3>
              
              <div className="space-y-5 text-muted-foreground mb-auto">
                <div className="flex items-center gap-4"><MapPin className="w-5 h-5" /> {job.location}</div>
                <div className="flex items-center gap-4"><Clock className="w-5 h-5" /> {job.experience}</div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/60">
                <div className="uppercase text-xs tracking-widest text-[hsl(var(--green-dark))] mb-4">{job.type}</div>
                <button 
                  onClick={() => handleApply(job)}
                  className="w-full py-4 bg-[hsl(var(--green-btn))] text-primary-foreground 
                             font-medium rounded-[10px] hover:bg-[#f59e0b] hover:shadow-md hover:scale-[1.02] transition-all"
                >
                  Apply Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 7. APPLICATION PROCESS */}
      <div className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-semibold text-center mb-16 text-[hsl(var(--green-dark))]">Our Application Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
               <div className="text-6xl font-light text-[#f59e0b] mb-4 
                bg-gradient-to-b from-yellow-400 to-yellow-600 
                bg-clip-text text-transparent drop-shadow-md">
  {step.step}
</div>


                <h4 className="font-medium text-xl mb-3">{step.title}</h4>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* 8. TESTIMONIALS */}
<div className="py-24 bg-[hsl(var(--green-bg))]/10">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-5xl font-semibold text-center mb-16 text-[hsl(var(--green-dark))]">
      Voices from Our Leadership
    </h2>

    <div className="grid md:grid-cols-2 gap-10 justify-center">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="bg-white/80 backdrop-blur-xl border border-white/40 p-10 rounded-2xl"
        >
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, k) => (
              <Star key={k} className="w-5 h-5 text-[#f59e0b] fill-current" />
            ))}
          </div>

          <p className="italic text-lg leading-relaxed mb-8 text-muted-foreground">
            “{t.quote}”
          </p>

          <div className="flex items-center gap-4">
            <img
              src={t.image}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* 9. APPLICATION FORM */}
      <div id="apply-form" className="max-w-3xl mx-auto px-6 py-24">
        <div className="bg-white/80 backdrop-blur-xl p-12 rounded-2xl shadow-xl border border-white/40">
          <h2 className="text-4xl font-semibold text-center mb-2 text-[hsl(var(--green-dark))]">Ready to Grow With Us?</h2>
          <p className="text-center text-muted-foreground mb-10">
            {selectedJob ? `Applying for: ${selectedJob.title}` : "Tell us about yourself"}
          </p>

          <form className="space-y-6">
            <input type="text" placeholder="Full Name" className="w-full border border-gray-200 px-6 py-3.5 rounded-[10px] focus:outline-none focus:border-[hsl(var(--green-dark))]" required />
            <input type="email" placeholder="Email Address" className="w-full border border-gray-200 px-6 py-3.5 rounded-[10px] focus:outline-none focus:border-[hsl(var(--green-dark))]" required />
            <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 px-6 py-3.5 rounded-[10px] focus:outline-none focus:border-[hsl(var(--green-dark))]" />
            
            <input value={selectedJob?.title || ""} readOnly className="w-full border border-gray-200 px-6 py-3.5 rounded-[10px] bg-white/50" placeholder="Selected Role" />
            
            <input type="url" placeholder="Resume / Portfolio Link" className="w-full border border-gray-200 px-6 py-3.5 rounded-[10px] focus:outline-none focus:border-[hsl(var(--green-dark))]" />
            
            <textarea placeholder="Why do you want to join us?" rows={5} className="w-full border border-gray-200 px-6 py-3.5 rounded-[10px] focus:outline-none focus:border-[hsl(var(--green-dark))] resize-y"></textarea>

            <button type="submit" className="w-full py-4 bg-[hsl(var(--green-btn))] text-primary-foreground 
                                           font-medium rounded-[10px] hover:bg-[#f59e0b] hover:shadow-md hover:scale-[1.02] transition-all">
              Submit Application
            </button>
          </form>
        </div>
      </div>

     {/* 10. FAQS - Aesthetic Accordion */}
<div className="max-w-4xl mx-auto px-6 py-24 bg-white">
  <h2 className="text-5xl font-semibold text-center mb-16 text-[hsl(var(--green-dark))]">
    Frequently Asked Questions
  </h2>
  
  <div className="space-y-6">
    {faqs.map((faq, index) => {
      const isOpen = openFaq === index;

      return (
        <div 
          key={index} 
          className={`rounded-2xl border backdrop-blur-xl transition-all duration-300 
          ${isOpen 
            ? "border-[hsl(var(--green-dark))] bg-white shadow-xl scale-[1.01]" 
            : "border-gray-200 bg-white/70 hover:shadow-md hover:scale-[1.005]"
          }`}
        >
          {/* QUESTION */}
          <button 
            onClick={() => setOpenFaq(isOpen ? null : index)}
            className="w-full flex items-center justify-between px-8 py-6 text-left"
          >
            <span className={`text-lg font-medium transition-colors duration-300 ${
              isOpen ? "text-[hsl(var(--green-dark))]" : "text-zinc-800"
            }`}>
              {faq.q}
            </span>

            <div className={`p-2 rounded-full transition-all duration-300 ${
              isOpen ? "bg-[hsl(var(--green-bg))]" : "bg-transparent"
            }`}>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-[hsl(var(--green-dark))]" : ""
                }`} 
              />
            </div>
          </button>

          {/* ANSWER */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-8 pb-6">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4"></div>

              <p className="text-muted-foreground leading-relaxed text-[15px] tracking-wide">
                {faq.a}
              </p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</div>


      {/* 11. FINAL CTA */}
      <div className="bg-[hsl(var(--green-dark))] text-white py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h3 className="text-5xl font-semibold mb-6">Didn’t find the perfect role?</h3>
          <p className="text-xl mb-10 opacity-90">Join our talent pool and we’ll reach out when the right opportunity appears.</p>
          <button className="px-12 py-5 bg-white text-[hsl(var(--green-dark))] rounded-[10px] text-lg font-medium hover:bg-[#f59e0b] hover:text-white transition-all">
            Join Our Talent Pool
          </button>
        </div>
      </div>
    </section>
  );
}

