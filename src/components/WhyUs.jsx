import React from "react";
import { Check, ShieldCheck, Sparkles, Building2, Wrench, Users, ArrowRight } from "lucide-react";
import { TRUST_PILLARS } from "../data/content";

export default function WhyUs({ onOpenBooking }) {
  return (
    <section id="why-us" className="py-24 lg:py-32 bg-[#09090c] relative border-b border-white/10">
      {/* Background Subtle Hex Light Motif */}
      <div className="absolute top-0 right-0 w-1/3 h-full hex-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-[#ff1a2b]/30 text-xs font-mono text-[#ff4d5a] uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1a2b]" />
            Trust & Craftsmanship Standards
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase font-['Outfit'] leading-none">
            DETAILING DONE <br />
            <span className="text-[#ff1a2b]">DIFFERENTLY.</span>
          </h2>

          <p className="mt-5 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            We rejected the typical high-volume, low-quality car wash model. Instead, Detailing Rebels is built as a precision automotive studio dedicated to single-vehicle obsessive focus.
          </p>
        </div>

        {/* 5 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_PILLARS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-[#ff1a2b]/40 hover:bg-zinc-900/90 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black font-['Space_Grotesk'] text-zinc-700 group-hover:text-[#ff1a2b] transition-colors">
                    {item.num}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-[#ff1a2b] transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white font-['Outfit'] tracking-tight group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#ff4d5a] opacity-0 group-hover:opacity-100 transition-opacity">
                <span>The Rebels Standard</span>
                <Check className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}

          {/* 6th Card: Direct Studio Callout */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#1b0507] via-zinc-950 to-[#0e0405] border border-[#ff1a2b]/30 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff4d5a] font-bold">
                Jaipur Flagship Studio
              </span>
              <h3 className="text-2xl font-black text-white font-['Outfit'] mt-2">
                "Your Car. Our Obsession."
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                Experience the studio difference in person. Book a complimentary vehicle condition assessment and paint thickness audit.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={() => onOpenBooking()}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#ff1a2b] hover:bg-[#d61323] transition-colors shadow-lg shadow-red-950/40"
              >
                <span>Schedule Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
