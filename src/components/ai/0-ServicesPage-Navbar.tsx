"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-[#f5f1ea] shadow-sm sticky top-0 z-[999] w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="cursor-pointer">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            <span className="text-black">Samriddhi</span>{" "}
            <span className="text-[#546b47]">Anveshana</span>
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-gray-700 items-center">
          <li className="hover:text-[#546b47] cursor-pointer">About</li>
          <li className="text-[#546b47] font-semibold">Services</li>
          <li className="hover:text-[#546b47] cursor-pointer">Insights</li>
          <li className="hover:text-[#546b47] cursor-pointer">Team</li>
          <li className="hover:text-[#546b47] cursor-pointer">Contact</li>
        </ul>

        {/* DESKTOP BUTTON */}
        <div className="hidden md:block">
          <button className="bg-[#546b47] text-white px-5 py-2 rounded-md hover:bg-[#43563a] transition">
            Engage Us
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#f5f1ea] px-4 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 text-gray-700">
            <li className="hover:text-[#546b47] cursor-pointer">About</li>
            <li className="text-[#546b47] font-semibold">Services</li>
            <li className="hover:text-[#546b47] cursor-pointer">Insights</li>
            <li className="hover:text-[#546b47] cursor-pointer">Team</li>
            <li className="hover:text-[#546b47] cursor-pointer">Contact</li>
          </ul>

          <div className="pt-4">
            <button className="w-full bg-[#546b47] text-white px-5 py-2 rounded-md hover:bg-[#43563a] transition">
              Engage Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
