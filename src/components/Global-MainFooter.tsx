import Link from 'next/link';

const Footer = () => {
  const linkClass =
    "text-[14.5px] text-[hsl(var(--text-footer))] no-underline font-normal tracking-[0.005em] transition-colors duration-200 hover:text-accent";

  return (
    <footer
      className="bg-[hsl(var(--green-bg))]"
      style={{ borderTop: "1px solid hsl(var(--border-footer))" }}
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] gap-10 lg:gap-16 px-4 sm:px-10 pt-10 sm:pt-16 pb-10 sm:pb-14 items-start">
        {/* Brand & Social */}
        <div className="max-w-[380px] sm:col-span-2 lg:col-span-1">
          <Link href="/" className="relative inline-block mb-6 w-[220px] sm:w-[300px] h-[72px] sm:h-[96px] overflow-hidden">
            <img
              src="/logof.png"
              alt="Samriddhi Anveshana"
              className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-auto max-w-none"
              style={{ filter: "url(#remove-white-footer)" }}
            />
          </Link>
          <p className="text-[14.5px] leading-[1.75] text-[hsl(var(--text-footer))] font-light mb-8">
            A trusted partner delivering scalable solutions across technology, operations, and business services.
          </p>

          {/* Social */}
          <div>
            <h4 className="text-[15px] font-semibold text-foreground mb-5 tracking-[0.01em]">
              Follow Us
            </h4>
            {/* Using flex-row gap-5 for a clean horizontal line of icons */}
            <ul className="list-none flex flex-row gap-5">
              {[
                {
                  name: "Facebook",
                  href: "https://www.facebook.com/samriddhianveshana/",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  name: "Youtube",
                  href: "https://www.youtube.com/@samriddhianveshana",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/samridhhianveshana/",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                      <path d="M2.003 4L9.333 14L2 20h2.5l5.833-8.333L15 20h7L14.167 9.333L21.5 4h-2.5l-5.5 7.833L9 4H2.003zm3.5 1.5h2.5l10.5 13h-2.5l-10.5-13z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <li key={item.name} title={item.name} className="group">
                  <a
                    href={item.href}
                    className={`flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:border-accent hover:text-accent hover:bg-black/5 transition-all ${linkClass || ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-current opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </span>
                    {/* If you want the text names back, uncomment the line below and change 'flex-row gap-5' above to 'flex-col gap-3.5' */}
                    {/* <span className="ml-2">{item.name}</span> */}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[15px] font-semibold text-foreground mb-5 tracking-[0.01em]">
            Company
          </h4>
          <ul className="list-none flex flex-col gap-3.5">
            {[{ label: "Home", href: "/" },
            { label: "About us", href: "/about" },
            { label: "Careers", href: "/" }
            ]

              .map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              )
              )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[15px] font-semibold text-foreground mb-5 tracking-[0.01em]">
            Contact
          </h4>
          <ul className="list-none flex flex-col gap-3.5">
            {[{ label: "Contact Form", href: "/contact" },
            { label: "FAQ", href: "/" },
            { label: "Privacy Policy", href: "/legal/privacy" },
            { label: "Terms of Use", href: "/legal/terms" }
            ]
              .map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              )
              )}
          </ul>
        </div>


      </div>

      <div
        className="mx-auto max-w-[1280px] px-4 sm:px-10 py-6 text-center"
        style={{ borderTop: "1px solid hsl(var(--border-footer))" }}
      >
        <p className="text-[13.5px] text-muted-foreground font-normal tracking-[0.02em]">
          © Samriddhi Anveshana. All Rights Reserved 2026
        </p>
      </div>
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
        <filter id="remove-white-footer" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    -10 -10 -10 0 28"
          />
        </filter>
      </svg>
    </footer>
  );
};

export default Footer;