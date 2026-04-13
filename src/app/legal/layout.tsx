"use client";

import CookieBanner from "@/components/legal/CookieBanner";
import ScrollToTop from "@/components/legal/ScrollToTop";
import LegalSidebar from "@/components/legal/LegalSidebar";
import Footer from "@/components/Global-MainFooter";

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="bg-[#f8faf4] min-h-screen pb-28"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 pt-2 flex gap-8">
        <aside className="w-[280px] hidden lg:block">
          <LegalSidebar />
        </aside>

        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
      <Footer />
      <CookieBanner />
      <ScrollToTop />
    </div>
  );
}