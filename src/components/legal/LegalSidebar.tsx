"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface AnchorItem {
  id: string;
  label: string;
}

interface SidebarProps {
  activeSection?: string;
}

const NAV_DOCS = [
  { id: "privacy", label: "Privacy Policy" },
  { id: "cookies", label: "Cookie Policy" },
  { id: "terms", label: "Terms of Use" },
  { id: "disclaimer", label: "Disclaimer" },
];

const PAGE_ANCHORS: Record<string, AnchorItem[]> = {
  "/legal/privacy": [
    { id: "who-we-are", label: "Who We Are" },
    { id: "what-we-collect", label: "What We Collect" },
    { id: "why-we-collect", label: "Why We Collect" },
    { id: "data-retention", label: "Data Retention" },
    { id: "data-sharing", label: "Data Sharing" },
    { id: "your-rights", label: "Your Rights" },
    { id: "security", label: "Security" },
    { id: "grievance", label: "Grievance Officer" },
  ],

  "/legal/terms": [
    { id: "acceptance", label: "Acceptance" },
    { id: "about-us", label: "About Us" },
    { id: "permitted-use", label: "Permitted Use" },
    { id: "ip", label: "Intellectual Property" },
    { id: "engagements", label: "Client Engagements" },
    { id: "liability", label: "Liability" },
    { id: "governing-law", label: "Governing Law" },
    { id: "contact-terms", label: "Contact" },
  ],

  "/legal/cookies": [
    { id: "what-are-cookies", label: "What Are Cookies" },
    { id: "cookies-we-use", label: "Cookies We Use" },
    { id: "browser-controls", label: "Browser Controls" },
    { id: "third-party", label: "Third-Party" },
    { id: "do-not-track", label: "Do Not Track" },
    { id: "contact-cookies", label: "Contact" },
  ],

  "/legal/disclaimer": [
    { id: "general-info", label: "General Information" },
    { id: "industry-specific", label: "Industry Disclaimers" },
    { id: "case-studies", label: "Case Studies" },
    { id: "third-party-links", label: "Third-Party Links" },
    { id: "penalties", label: "Penalty Reference" },
    { id: "governing-disc", label: "Governing Law" },
    { id: "contact-disc", label: "Contact" },
  ],
};

export default function LegalSidebar({
  activeSection,
}: SidebarProps) {
  const pathname = usePathname();

  const anchors =
    PAGE_ANCHORS[pathname] ??
    PAGE_ANCHORS["/legal/privacy"];

  const scrollTo = (id: string) => {
  const el = document.getElementById(id);

  if (el) {
    const headerOffset = 100; // adjust for fixed header height
    const elementPosition =
      el.getBoundingClientRect().top + window.scrollY;

    const offsetPosition =
      elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

  return (
    <aside className="w-full rounded-2xl border border-[#d9e3d2] bg-[#f8faf4] p-5 sticky top-28">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800">
          On This Page
        </h3>
      </div>

      <div className="space-y-2">
        {anchors.map((anchor) => (
          <button
            key={anchor.id}
            onClick={() => scrollTo(anchor.id)}
            className={`block w-full text-left text-sm px-3 py-2 rounded-lg transition ${
              activeSection === anchor.id
                ? "bg-[#41642f] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {anchor.label}
          </button>
        ))}
      </div>

      <div className="my-5 border-t border-gray-200" />

      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-800">
          Documents
        </h3>
      </div>

      <div className="space-y-2">
        {NAV_DOCS.map((doc) => (
          <Link
            key={doc.id}
            href={`/legal/${doc.id}`}
            className={`block text-sm px-3 py-2 rounded-lg transition ${
              pathname === `/legal/${doc.id}`
                ? "bg-[#41642f] text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {doc.label}
          </Link>
        ))}
      </div>
    </aside>
  );
}