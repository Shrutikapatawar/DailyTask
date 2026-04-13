"use client";

import Link from "next/link";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.5 3h-2.6v7A10 10 0 0022 12z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h3l-7 8 8 12h-6l-5-7-6 7H2l8-9L2 2h6l4 6 6-6z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/samriddhi-anveshana/posts/?feedView=all",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M4.98 3.5C4.98 4.9 3.87 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.2 2.3-2.5 4.7-2.5 5 0 5.9 3.3 5.9 7.6V24h-5V15.3c0-2.1 0-4.8-2.9-4.8s-3.3 2.3-3.3 4.6V24h-5V8z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/samridhhianveshana/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 
        0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 
        110 10 5 5 0 010-10zm6.5-.9a1.1 1.1 0 
        11-2.2 0 1.1 1.1 0 012.2 0z" />
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d2005] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">
            <span className="text-white">Samriddhi</span>{" "}
            <span className="text-[#b5cea3]">Anveshana</span>
          </h2>

          <p className="text-sm mt-1 text-gray-400">
            Management Consulting · Hyderabad
          </p>
        </div>

        {/* CENTER - SOCIAL */}
        <div className="flex items-center gap-4">
          {socialLinks.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center 
                         rounded-full border border-[#546b47]
                         text-gray-300 transition-all duration-300
                         hover:border-[#b5cea3] hover:text-[#b5cea3] hover:scale-110"
            >
              {item.icon}
            </Link>
          ))}
        </div>

        {/* RIGHT */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>© 2026 Samriddhi Anveshana</p>
          <p className="text-[#b5cea3]">samriddhianveshana.in</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
