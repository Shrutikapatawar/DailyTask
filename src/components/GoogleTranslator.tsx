/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║               GOOGLE TRANSLATOR — PORTABLE COMPONENT            ║
 * ║                                                                  ║
 * ║  Drop this file into any Next.js project and add to your layout:║
 * ║                                                                  ║
 * ║  import GoogleTranslator from "@/components/GoogleTranslator"   ║
 * ║  <GoogleTranslator />                                            ║
 * ║                                                                  ║
 * ║  REQUIREMENTS:                                                   ║
 * ║  - Next.js (App Router or Pages Router)                         ║
 * ║  - "use client" directive support                               ║
 * ║  - No extra npm packages needed                                  ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

"use client";

import { useEffect, useState, useRef, useCallback } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

// ─── Configuration ────────────────────────────────────────────────────────────
// Add or remove languages here. `code` must be a valid Google Translate language code.
const LANGUAGES = [
  { code: "en", name: "English",    native: "English" },
  { code: "hi", name: "Hindi",      native: "हिन्दी" },
  { code: "bn", name: "Bengali",    native: "বাংলা" },
  { code: "te", name: "Telugu",     native: "తెలుగు" },
  { code: "mr", name: "Marathi",    native: "मराठी" },
  { code: "ta", name: "Tamil",      native: "தமிழ்" },
  { code: "gu", name: "Gujarati",   native: "ગુજરાતી" },
  { code: "kn", name: "Kannada",    native: "ಕನ್ನಡ" },
  { code: "pa", name: "Punjabi",    native: "ਪੰਜਾਬੀ" },
  { code: "ml", name: "Malayalam",  native: "മലയാളം" },
];

// Comma-separated list of the codes above (must match LANGUAGES array)
const INCLUDED_LANGUAGE_CODES = LANGUAGES.map((l) => l.code).join(",");

// ─── Component ────────────────────────────────────────────────────────────────
export default function GoogleTranslator() {
  const [isOpen, setIsOpen]         = useState(false);
  const [selected, setSelected]     = useState("en");
  const [initialized, setInitialized] = useState(false);
  const panelRef                    = useRef<HTMLDivElement>(null);

  // ── 1. Inject Google Translate script once ─────────────────────────────────
  useEffect(() => {
    // Expose the callback Google Translate calls after it loads
    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: INCLUDED_LANGUAGE_CODES,
            autoDisplay: false,
          },
          "gt-hidden-element"
        );
        setInitialized(true);
      } catch {
        // Script not ready yet — Google will retry automatically
      }
    };

    if (!document.getElementById("gt-script")) {
      const script      = document.createElement("script");
      script.id         = "gt-script";
      script.src        = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async      = true;
      document.body.appendChild(script);
    }
  }, []);

  // ── 2. Suppress all default Google Translate UI (top bar, tooltips, etc.) ──
  useEffect(() => {
    const suppress = () => {
      // Hide the floating Google bar that shifts the page
      const bar = document.querySelector<HTMLElement>(".goog-te-banner-frame");
      if (bar) bar.style.display = "none";
      document.body.style.top = "0px";

      // Hide powered-by tooltip
      const tt = document.getElementById("goog-gt-tt");
      if (tt) tt.remove();
    };

    const timer = setInterval(suppress, 300);
    suppress(); // run immediately too

    return () => clearInterval(timer);
  }, []);

  // ── 3. Click-outside to close ──────────────────────────────────────────────
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // ── 4. Language switcher ───────────────────────────────────────────────────
  const changeLanguage = useCallback((code: string) => {
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = code;
      select.dispatchEvent(new Event("change"));
    }
    setSelected(code);
    setIsOpen(false);
  }, []);

  const selectedLang = LANGUAGES.find((l) => l.code === selected) ?? LANGUAGES[0];

  // ─────────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Global CSS overrides (inline so no external stylesheet needed) ── */}
      <style>{`
        .goog-te-banner-frame,
        .goog-te-banner-frame.skiptranslate { display: none !important; }

        body > .skiptranslate { display: none !important; }
        body { top: 0px !important; }

        #goog-gt-tt,
        .goog-tooltip,
        .goog-tooltip:hover,
        .VIpgJd-Zvi9ab-aZ2wz-HNc1u-df91Cu,
        .VIpgJd-ZVi9od-aZ2wz-OvJnkd { display: none !important; }

        /* Hide the default Google widget itself */
        #gt-hidden-element { display: none !important; }

        /* Prevent the font override Google applies site-wide */
        font { top: auto !important; }
      `}</style>

      {/* ── Hidden Google Translate mount point ── */}
      <div id="gt-hidden-element" aria-hidden="true" />

      {/* ── Floating widget ── */}
      <div
  ref={panelRef}
  className="notranslate"
  translate="no"
  style={{
    position: "fixed",
    bottom: "24px",
    right: "24px",
    zIndex: 9999,
    fontFamily: "system-ui, -apple-system, sans-serif",
  }}
>
        {/* Trigger button */}
        <button
          onClick={() => setIsOpen((o) => !o)}
          aria-label="Change language"
          aria-expanded={isOpen}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 20px",
            borderRadius: "100px",
            border: "1px solid rgba(0,0,0,0.08)",
            background: isOpen ? "#1a3c34" : "rgba(255,255,255,0.92)",
            color: isOpen ? "#fff" : "#1a3c34",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.02em",
            transition: "all 0.2s ease",
          }}
        >
          {/* Globe SVG (no icon library needed) */}
          <svg
            width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span>{selectedLang.native}</span>
        </button>

        {/* Language picker panel */}
        {isOpen && (
          <div
            style={{
              position: "absolute",
              bottom: "calc(100% + 12px)",
              right: 0,
              width: "260px",
              background: "#fff",
              borderRadius: "20px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.16)",
              border: "1px solid rgba(0,0,0,0.06)",
              overflow: "hidden",
              animation: "gt-fade-up 0.2s ease",
            }}
            role="dialog"
            aria-label="Select language"
          >
            {/* Header */}
            <div
              style={{
                padding: "16px 20px 12px",
                background: "#1a3c34",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "15px" }}>
                Select Language
              </span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "none",
                  borderRadius: "50%",
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#fff",
                }}
              >
                ✕
              </button>
            </div>

            {/* Language list */}
            <div style={{ maxHeight: "380px", overflowY: "auto", padding: "8px" }}>
              {LANGUAGES.map((lang) => {
                const isActive = lang.code === selected;
                return (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      padding: "11px 14px",
                      border: "none",
                      borderRadius: "12px",
                      background: isActive ? "rgba(26,60,52,0.07)" : "transparent",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.background = "#f4f4f4";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                   <div>
  <div
    style={{
      fontWeight: 600,
      fontSize: "13.5px",
      color: isActive ? "#1a3c34" : "#333",
    }}
  >
    {lang.native}
  </div>

  <div
    style={{
      fontSize: "12px",
      color: "#888",
      marginTop: "1px",
    }}
  >
    {lang.name}
  </div>
</div>
                    {isActive && (
                      <span style={{
                        width: "8px", height: "8px",
                        borderRadius: "50%",
                        background: "#1a3c34",
                        flexShrink: 0,
                      }} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div style={{
              padding: "10px 16px",
              borderTop: "1px solid #f0f0f0",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", animation: "gt-pulse 2s infinite" }} />
              <span style={{ fontSize: "11px", color: "#aaa", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Powered by Google Translate
              </span>
            </div>
          </div>
        )}

        {/* Keyframe animations */}
        <style>{`
          @keyframes gt-fade-up {
            from { opacity: 0; transform: translateY(10px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes gt-pulse {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.4; }
          }
        `}</style>
      </div>
    </>
  );
}
