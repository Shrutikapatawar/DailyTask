"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "@/components/Global-MainHeader";
import CookieBanner from "@/components/legal/CookieBanner";
import ScrollToTop from "@/components/legal/ScrollToTop";
import Disclaimer from "@/components/legal/Disclaimer";

export default function DisclaimerPage() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `underline transition ${
      pathname === path
        ? "text-[#183c2f] font-semibold"
        : "hover:text-[#b89b5e]"
    }`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen bg-[#f8faf4]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <Header />

      <div className="max-w-[860px] mx-auto px-6 py-8 pb-28">
        <main className="min-w-0 w-full">
          {/* Top Legal Navigation */}
          <div className="flex flex-wrap gap-5 justify-end mb-6 text-sm">
            <Link href="/legal/privacy" className={linkClass("/legal/privacy")}>
              Privacy Policy
            </Link>
            <Link href="/legal/cookies" className={linkClass("/legal/cookies")}>
              Cookie Policy
            </Link>
            <Link href="/legal/terms" className={linkClass("/legal/terms")}>
              Terms of Use
            </Link>
            <Link
              href="/legal/disclaimer"
              className={linkClass("/legal/disclaimer")}
            >
              Disclaimer
            </Link>
          </div>

          <Disclaimer />
        </main>
      </div>

      <CookieBanner />
      <ScrollToTop />
    </div>
  );
}