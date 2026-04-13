import type { Metadata } from "next";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import Providers from "@/components/Global-Providers";
import Header from "@/components/Global-MainHeader";
import GoogleTranslator from "@/components/GoogleTranslator";
export const metadata: Metadata = {
  title: "Samriddhi Anveshana",
  description:
    "Samriddhi Anveshana - Your partner for every service.",
  icons: {
    icon: "/Tree.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />

          {/* exact header height */}
          <main className="pt-16 sm:pt-[88px]">
            {children}
          </main>

          <Toaster />
          <Sonner />
          <GoogleTranslator />
        </Providers>
      </body>
    </html>
  );
}