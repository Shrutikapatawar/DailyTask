"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { key: "privacy", label: "Privacy Policy", href: "/legal/privacy" },
  { key: "terms", label: "Terms of Use", href: "/legal/terms" },
  { key: "cookies", label: "Cookie Policy", href: "/legal/cookies" },
  { key: "disclaimer", label: "Disclaimer", href: "/legal/disclaimer" },
];

export default function LegalNav({ activeTab }: { activeTab: string }) {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#c3c8ba] shadow-sm h-16">
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 min-w-[220px]">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#41642f] to-[#597d45] flex items-center justify-center text-white font-bold text-sm">
            SA
          </div>
          <div>
            <div className="text-sm font-bold text-[#41642f] leading-tight">Samriddhi Anveshana</div>
            <div className="text-[10px] text-[#73796d] leading-tight">Technology & Business Services</div>
          </div>
        </Link>
        <div className="flex-1" />
        <div className="flex gap-1 flex-wrap justify-end">
          {tabs.map((tab) => (
            <Link
              key={tab.key}
              href={tab.href}
              className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-colors ${
                pathname === tab.href
                  ? "bg-[#d0ebbe] text-[#072100] border-[#98b685] font-semibold"
                  : "border-transparent text-[#43493e] hover:border-[#c3c8ba] hover:bg-[#f7f9f4]"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
