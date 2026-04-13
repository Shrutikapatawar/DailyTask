"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
  { label: "About us", href: "/about" },
  {
    label: "Our Services",
    href: "",
    dropdown: [
      { label: "AI & Automation Solutions", href: "/ai" },
      { label: "Application Development", href: "/application-dev" },
      { label: "Business Consulting & Growth Services", href: "/business-consulting" },
      { label: "Business Support Services (24x7 BPO / Operations)", href: "/business-support" },
      { label: "DevOps", href: "/devops" },
      { label: "Digital Marketing & Branding", href: "/Digital-Marketing" },
      { label: "HR & Talent Management", href: "/hr-services" },
      { label: "Testing & Quality Assurance", href: "/QA" },
      { label: "Real Estate & Property Solutions", href: "/RealEstateDevelopment" },
      { label: "Integrated Accounting, Audit & Compliance Solutions", href: "/Accounting&Compliance" },
    ],

  },
  {
    label: "Legal",
    href: "/legal/privacy",
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-background/95"
      }`}
      style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
    >
      <div className="mx-auto flex h-16 sm:h-[88px] max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-10">
        <Link
          href="/"
          className="relative flex items-center shrink-0 w-[200px] sm:w-[280px] h-[64px] sm:h-[88px] overflow-hidden"
        >
          <img
            src="/logo.png"
            alt="Samriddhi Anveshana"
            className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-auto max-w-none"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
  {navItems.map((item) =>
    item.dropdown ? (
      <div key={item.label} className="relative group">
        <Link
          href={item.href}
          className="flex items-center gap-1 text-[15px] hover:text-accent no-underline"
        >
          {item.label}
          <ChevronDown className="h-4 w-4" />
        </Link>

        {/* Changed min-w-[240px] to w-[500px] to give room for 2 columns */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[500px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          
          {/* Added grid, grid-cols-2, gap-2, and p-2 for the side-by-side layout */}
          <div className="rounded-lg bg-white/80 backdrop-blur-md shadow-lg border border-black/5 grid grid-cols-2 gap-2 p-2">
            
            {item.dropdown.map((subItem) => (
              <Link
                key={subItem.label}
                href={subItem.href}
                // Added rounded-md so the hover state fits nicely inside the padded container
                className="block px-4 py-3 text-[14px] hover:text-accent hover:bg-white/50 rounded-md transition-colors no-underline"
              >
                {subItem.label}
              </Link>
            ))}

          </div>
        </div>
      </div>
    ) : (
      <Link
        key={item.label}
        href={item.href}
        className="text-[15px] hover:text-accent no-underline"
      >
        {item.label}
      </Link>
    )
  )}
</nav>
<Link
  href="/contact"
  className="hidden md:block bg-[hsl(var(--green-btn))] text-primary-foreground text-[15px] font-medium px-7 py-3.5 rounded-[10px]"
>
  Connect with Us
</Link>

        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden p-2" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[280px] bg-background">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

            <nav className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <div key={item.label} className="flex flex-col gap-3">
                  <Link
                    href={item.href}
                    className="text-base hover:text-accent no-underline"
                  >
                    {item.label}
                  </Link>

                  {item.dropdown && (
                    <div className="flex flex-col gap-4 pl-4 border-l border-primary/20 ml-2 mt-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="text-[15px] hover:text-accent no-underline"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button className="bg-[hsl(var(--green-btn))] text-primary-foreground text-[15px] font-medium px-6 py-3 rounded-[10px] mt-2">
                Connect with Us
              </button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}