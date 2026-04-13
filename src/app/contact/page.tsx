'use client';
import Header from "@/components/Global-MainHeader";
import Footer from "@/components/Global-MainFooter";
import { useState } from 'react';
import { toast } from 'sonner';

const TreeLogo = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="15" r="11" fill="rgba(255,255,255,0.15)"/>
    <path d="M20 4 C14 4 10 8.5 10 13 C10 16 11.5 18.5 14 20 L13 30 L27 30 L26 20 C28.5 18.5 30 16 30 13 C30 8.5 26 4 20 4Z" fill="white" opacity="0.9"/>
    <path d="M20 10 L20 28" stroke="rgba(30,92,53,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M20 14 L16 11" stroke="rgba(30,92,53,0.4)" strokeWidth="1" strokeLinecap="round"/>
    <path d="M20 17 L24 14" stroke="rgba(30,92,53,0.4)" strokeWidth="1" strokeLinecap="round"/>
    <path d="M20 20 L15 17" stroke="rgba(30,92,53,0.4)" strokeWidth="1" strokeLinecap="round"/>
    <rect x="17" y="28" width="6" height="4" rx="1" fill="white" opacity="0.8"/>
  </svg>
);

const SERVICES_LIST = [
  "AI & Automation Solutions",
  "Application Development",
  "Business Consulting & Growth Services",
  "Business Support Services (24x7 BPO / Operations)",
  "DevOps",
  "Digital Marketing & Branding",
  "HR & Talent Management",
  "Testing & Quality Assurance",
  "Real Estate & Property Solutions",
  "Integrated Accounting, Audit & Compliance Solutions"
];

export default function ContactPage() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    mobile: string;
    services: string[];
    message: string;
    hasAcceptedPolicy: boolean;
  }>({
    name: '',
    email: '',
    mobile: '',
    services: [],
    message: '',
    hasAcceptedPolicy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Final Validation Checks before submission
    if (formData.mobile.length !== 10) {
      toast.error('Mobile number must be exactly 10 digits.');
      return;
    }
    if ((formData.email.match(/@/g) || []).length > 1) {
      toast.error('Email cannot contain multiple @ symbols.');
      return;
    }
    if (formData.services.length === 0) {
      toast.error('Please select at least one service.');
      return;
    }

    if (!formData.hasAcceptedPolicy) {
      toast.error('Please agree to the privacy policy and terms of use.');
      return;
    }

    setIsSubmitting(true);

    const submissionData = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      services: formData.services.join(', '),
      message: formData.message,
      hasAcceptedPolicy: formData.hasAcceptedPolicy,
    };

    console.log('Sending data to:', process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL);

    try {
      await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL!, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      toast.success('Inquiry sent successfully!');
      setFormData({ name: '', email: '', mobile: '', services: [], message: '', hasAcceptedPolicy: false });
    } catch (error) {
      console.error('System Error:', error);
      toast.error('Failed to send inquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // 1. Name Validation: Letters and spaces only
    if (name === 'name') {
      const lettersOnly = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData(prev => ({ ...prev, [name]: lettersOnly }));
      return;
    }

    // 2. Mobile Validation: Restrict letters/special chars, exactly 10 digits max
    if (name === 'mobile') {
      const numbersOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: numbersOnly }));
      return;
    }

    // 3. Email Validation: Must start with a letter, prevent multiple @
    // 3. Email Validation: Must start with a letter or number, prevent multiple @
    if (name === 'email') {
      let safeEmail = value;
      // Prevent starting with special characters (allow letters and numbers)
      if (safeEmail.length > 0 && !/^[a-zA-Z0-9]/.test(safeEmail[0])) {
        safeEmail = safeEmail.slice(1);
      }
      // Prevent multiple @ symbols entirely
      if (safeEmail.split('@').length > 2) {
        return; // Reject typing the second @
      }
      setFormData(prev => ({ ...prev, [name]: safeEmail }));
      return;
    }

    // 4. Message Limit Validation: Maximum 500 words
    if (name === 'message') {
      const words = value.trim().split(/\s+/);
      // Filter removes empty strings if the textarea is blank
      const wordCount = words.filter(word => word.length > 0).length;
      
      if (wordCount <= 500 || value === '') {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Multi-select Handler
  const handlePolicyCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, hasAcceptedPolicy: e.target.checked }));
  };

  const handleServiceSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    if (!selected) return;

    if (selected === "All the above") {
      setFormData(prev => ({ ...prev, services: [...SERVICES_LIST] }));
    } else {
      setFormData(prev => {
        if (!prev.services.includes(selected)) {
          return { ...prev, services: [...prev.services, selected] };
        }
        return prev;
      });
    }
  };

  // Remove Service Handler
  const removeService = (serviceToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.filter(s => s !== serviceToRemove)
    }));
  };

  // Compute Word Count for Display
  const currentWordCount = formData.message.trim() === '' 
    ? 0 
    : formData.message.trim().split(/\s+/).length;

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-body)]">
      <Header>
      </Header>

      <main className="bg-[#f6f4ef] text-[#183c2f]">
        <section className="max-w-[1100px] mx-auto px-5 pt-10 pb-10">
          <p className="text-xs tracking-[3px] text-[#b89b5e] mb-5">INQUIRY & DIALOGUE</p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6"></h1><h1 className="text-7xl font-semibold leading-tight mb-6">
            Connect with our <br /> Architects
          </h1>
          <p className="max-w-[520px] text-lg leading-relaxed text-[#4a5a52]">
            Whether you are envisioning a private sanctuary or a landmark monolith,
            our studio is dedicated to translating your aspirations into structural
            permanence. Let us begin the conversation.
          </p>
        </section>

<section className="max-w-[1100px] mx-auto px-5 mb-24 grid grid-cols-1 md:grid-cols-[0.8fr_1.4fr] gap-8 md:gap-16">          <div>
            <h2 className="text-2xl mb-8">Studio Access</h2>

            <div className="mb-8">
              <p className="text-xs tracking-[2px] text-[#b89b5e] mb-2.5">LOCATION</p>
              <p>
                705, Workafella Cyber Crown<br />
                HiTech City, Hyderabad <br />
                Telangana, India
              </p>
            </div>

            <div className="mb-8">
              <p className="text-xs tracking-[2px] text-[#b89b5e] mb-2.5">ELECTRONIC MAIL</p>
              <p>studio@samriddhianveshana.com</p>
            </div>

            <div className="mb-8">
              <p className="text-xs tracking-[2px] text-[#b89b5e] mb-2.5">DIRECT LINE</p>
              <p>+91 9676763107</p>
            </div>

            <div className="h-px bg-[#ddd] my-8" />

            <div>
  <p className="text-xs tracking-[2px] text-[#b89b5e] mb-2.5">
    SOCIAL PRESENCE
  </p>

  <ul className="list-none flex flex-row gap-5 items-center">
    {[
      {
        name: "Facebook",
        href: "https://www.facebook.com/samriddhianveshana/",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        ),
      },
      {
        name: "Youtube",
        href: "https://www.youtube.com/@samriddhianveshana",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
          </svg>
        ),
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/samridhhianveshana/",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        ),
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/samriddhianveshana/",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        ),
      },
      {
        name: "X",
        href: "https://x.com/samriddhianvesh",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.003 4L9.333 14L2 20h2.5l5.833-8.333L15 20h7L14.167 9.333L21.5 4h-2.5l-5.5 7.833L9 4H2.003z" />
          </svg>
        ),
      },
    ].map((social) => (
      <li key={social.name}>
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="text-[#1f4d35] hover:text-[#b89b5e] transition-colors"
        >
          {social.icon}
        </a>
      </li>
    ))}
  </ul>
</div>
</div>

          <div>
            <form onSubmit={handleSubmit} className="bg-[#ecebea] p-5 sm:p-8 md:p-10 rounded-xl">
              <div className="space-y-5">
                <section className="mb-5">
                  <label htmlFor="name" className="text-xs tracking-[2px] text-[#7a7a7a] block mb-2">FULL NAME</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-lg border-0 bg-[#f7f7f7] text-sm"
                  />
                </section>

                <section className="mb-5">
                  <label htmlFor="email" className="text-xs tracking-[2px] text-[#7a7a7a] block mb-2">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-lg border-0 bg-[#f7f7f7] text-sm"
                  />
                </section>

                <section className="mb-5">
                  <label htmlFor="mobile" className="text-xs tracking-[2px] text-[#7a7a7a] block mb-2">MOBILE NUMBER</label>
                  <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    placeholder="Mobile Number"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-lg border-0 bg-[#f7f7f7] text-sm"
                  />
                </section>

              </div>

              <section className="mt-6 mb-6">
                <label className="text-xs tracking-[2px] text-[#7a7a7a] block mb-2">SERVICES (SELECT MULTIPLE)</label>
                <select
                  name="servicesSelect"
                  value="" // Forces it to always act as a trigger, showing the placeholder
                  onChange={handleServiceSelect}
                  className="w-full px-4 py-3.5 rounded-lg border-0 bg-[#f7f7f7] text-sm mb-3"
                >
                  <option value="">Choose Your Preferred Services</option>
                  {SERVICES_LIST.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                  <option value="All the above">All the above</option>
                </select>

                {/* Display Selected Services as Tags */}
                <div className="flex flex-wrap gap-2">
                  {formData.services.map((service, idx) => (
                    <span 
                      key={idx} 
                      className="bg-[#183c2f] text-white text-xs px-3 py-1.5 rounded-md flex items-center gap-2"
                    >
                      {service}
                      <button 
                        type="button" 
                        onClick={() => removeService(service)}
                        className="hover:text-red-400 font-bold ml-1 transition-colors"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </section>

              <div className="mb-5">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs tracking-[2px] text-[#7a7a7a] block">DETAILED MESSAGE</label>
                  <span className="text-xs text-[#7a7a7a]">{currentWordCount}/500 words</span>
                </div>
                <textarea
                  name="message"
                  placeholder="How can we help you? *"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-28 px-4 py-3.5 rounded-lg border-0 bg-[#f7f7f7] text-sm resize-none font-[Georgia,serif]"
                />
              </div>

              <div className="mb-5">
                <label className="text-sm text-[#4a4a4a] flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={formData.hasAcceptedPolicy}
                    onChange={handlePolicyCheckbox}
                    className="mt-1 h-4 w-4"
                    required
                  />
                  <span>
                    I have read Samriddhi Anveshana’s <a href="/legal/privacy" className="text-[#0f3b2e] underline">Privacy Policy</a> and agree to the <a href="/legal/terms" className="text-[#0f3b2e] underline">terms of use</a>.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0f3b2e] text-white px-7 py-4 rounded-lg text-sm cursor-pointer hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? 'SENDING...' : 'SEND INQUIRY →'}
              </button>
            </form>
          </div>
        </section>

        <div className="max-w-[1100px] mx-auto px-5 mb-24">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d475.78747824267384!2d78.3776673!3d17.4453579!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93425bd57ac5%3A0xae50b5c9700f472d!2sWorkafella%20Cyber%20Crown%2C%20HiTech%20City%20-%20Coworking%20Space%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1774873343588!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <section className="max-w-[1100px] mx-auto px-5 mb-24">
          <h2 className="text-3xl text-center mb-10">Visit Our Enclaves</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">            <div className="h-64 sm:h-72 md:h-80 rounded-xl relative overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-[rgba(180,160,60,0.6)] z-10" />
              <div className="absolute bottom-5 left-5 right-5 z-20 bg-white/90 p-5 rounded-xl">
                <h3 className="mb-2.5 text-[#183c2f]">Design Studio</h3>
                <p className="text-sm text-[#555] mb-2.5">
                  A contemplative space where ideas evolve into architectural expression.
                </p>
                <span className="text-xs tracking-[1px] text-[#b89b5e] cursor-pointer">SCHEDULE A VISIT</span>
              </div>
            </div>

            <div className="h-80 rounded-xl bg-[#2d4c4a] flex items-end p-5">
              <div className="bg-[#f6f4ef] p-6 rounded-xl w-full">
                <h3 className="mb-2.5 text-[#183c2f]">Concept Workshop</h3>
                <p className="text-sm text-[#555] mb-2.5">
                  The tactile laboratory where materials are tested and prototypes are born.
                </p>
                <span className="text-xs tracking-[1px] text-[#b89b5e] cursor-pointer">SCHEDULE A VISIT</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer>
      </Footer>
    </div>
  );
}