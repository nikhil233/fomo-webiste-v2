"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Early Access", href: "#waitlist" },
];

const demoLink = { label: "Live Demo", href: "/demo" };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
              fill="#2563EB"
              stroke="#2563EB"
              strokeWidth="0.5"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className={`font-bold text-[20px] tracking-tight transition-colors duration-300 ${
              scrolled ? "text-[#0F172A]" : "text-[#0A0A0A]"
            }`}
          >
            FomoWidget
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-[#374151] hover:text-[#111827]"
                  : "text-[#374151] hover:text-[#111827]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className={`text-[15px] font-medium transition-colors duration-200 ${
              scrolled ? "text-[#374151] hover:text-[#111827]" : "text-[#374151] hover:text-[#111827]"
            }`}
          >
            Login
          </a>
          <a
            href="#waitlist"
            className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold rounded-lg transition-colors duration-200"
          >
            Get a Free Demo
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            className={scrolled ? "text-[#0F172A]" : "text-[#0A0A0A]"}
          >
            {mobileOpen ? (
              <path
                d="M5 5l12 12M5 17L17 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h16M3 11h16M3 16h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-6 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] font-medium text-[#374151] hover:text-[#2563EB] py-2.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-gray-100 mt-2 pt-3 flex flex-col gap-2">
              <a href="#" className="text-[15px] font-medium text-[#374151] py-2">
                Login
              </a>
              <a
                href="#waitlist"
                onClick={() => setMobileOpen(false)}
                className="px-5 py-2.5 bg-[#2563EB] text-white text-sm font-semibold rounded-lg text-center"
              >
                Get a Free Demo
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
