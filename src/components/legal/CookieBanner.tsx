"use client";

import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed left-5 right-5 bottom-14 bg-white border border-[#c3c8ba] rounded-xl shadow-md p-4 flex justify-between items-center gap-3 z-[350]">
      <div>
        <div className="font-bold">🍪 We use cookies</div>
        <div className="text-[13px] text-[#43493e]">We use cookies to improve your experience. See the Cookie Policy section for details.</div>
      </div>
      <div className="flex gap-2 shrink-0">
        <button
          onClick={() => setVisible(false)}
          className="border border-[#c3c8ba] rounded-full px-4 py-2 text-[12px] font-semibold bg-white text-[#43493e] hover:bg-[#f7f9f4]"
        >
          Reject All
        </button>
        <button
          onClick={() => setVisible(false)}
          className="border border-[#41642f] rounded-full px-4 py-2 text-[12px] font-semibold bg-[#41642f] text-white hover:bg-[#597d45]"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
