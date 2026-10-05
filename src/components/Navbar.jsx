import React, { useState, useEffect } from "react";
import { Phone, Calendar, Menu, X, ArrowUpRight, ShieldCheck, MessageCircle } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "PPF", href: "#ppf" },
    { label: "Ceramic 10H", href: "#ceramic" },
    { label: "Before / After", href: "#before-after" },
    { label: "Why Us", href: "#why-us" },
    { label: "Process", href: "#process" },
    { label: "Studio", href: "#studio" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Quick Info Bar */}
      <div className="bg-[#050507] border-b border-white/5 py-1.5 px-4 text-xs font-mono text-zinc-400 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-[#ff1a2b] animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a2b] -ml-2.5" />
              Jaipur's Premier Automotive Detailing Studio
            </span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">Dust-Free Bays • Certified TPU Installers • 10H Ceramic</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff1a2b]" />
              <span>{STUDIO_INFO.phone}</span>
            </a>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">Mon - Sun: 9:30 AM – 8:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090c]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3"
            : "bg-gradient-to-b from-[#09090c]/90 to-transparent py-4 md:py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Automotive Red Silhouette Emblem */}
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-[#ff1a2b]/60 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff1a2b]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg viewBox="0 0 40 40" className="w-7 h-7 text-[#ff1a2b]" fill="none">
                <path
                  d="M4 24 C8 15, 17 11, 24 11 C31 11, 36 16, 37 21"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8 27 C13 20, 19 17, 24 17 C29 17, 33 21, 34 25"
                  stroke="#ffffff"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
                <circle cx="13" cy="27" r="2.5" fill="currentColor" />
                <circle cx="29" cy="27" r="2.5" fill="currentColor" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-wider text-lg md:text-xl text-white font-['Outfit'] group-hover:text-[#ff1a2b] transition-colors">
                  DETAILING
                </span>
                <span className="font-black tracking-wider text-lg md:text-xl text-[#ff1a2b] font-['Outfit']">
                  REBELS
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-zinc-400">
                  JAIPUR • STUDIO
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff1a2b] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20Detailing%20Rebels%20Jaipur,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-md bg-zinc-900/80 border border-white/10 hover:border-emerald-500/50 hover:bg-zinc-800 text-xs font-mono text-zinc-300 hover:text-emerald-400 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold font-mono tracking-wider uppercase text-white bg-gradient-to-r from-[#ff1a2b] to-[#c70f1e] hover:from-[#ff3344] hover:to-[#e11d28] shadow-lg shadow-red-950/40 hover:shadow-red-600/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Your Detailing</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:inline-flex hidden items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold font-mono uppercase bg-[#ff1a2b] text-white"
            >
              <Calendar className="w-3 h-3" />
              <span>Book</span>
            </button>

            <a
              href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-[#ff1a2b] hover:bg-zinc-800 transition-colors"
              aria-label="Call Studio"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#0c0c10] border-b border-white/10 px-5 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-md bg-zinc-900/60 border border-white/5 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-bold font-mono tracking-wider uppercase text-white bg-gradient-to-r from-[#ff1a2b] to-[#c70f1e] shadow-lg shadow-red-950/40"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Detailing</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-200"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ff1a2b]" />
                  <span>Call Studio</span>
                </a>
                <a
                  href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=Hello%20Detailing%20Rebels%20Jaipur,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
