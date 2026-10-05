import React from "react";
import { Building2, Sparkles, Shield, Eye, Flame, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function StudioExperience({ onOpenBooking }) {
  const highlights = [
    {
      title: "Dust-Free Installation Cleanrooms",
      desc: "Isolated bays with micro-filtered positive air pressure keep airborne dust away during delicate TPU film laying and ceramic curing.",
    },
    {
      title: "6500K True-Color CRI Hexagonal Lights",
      desc: "Laboratory-grade lighting arrays reveal paint orange-peel, micro-scratches, and holograms invisible to regular daylight.",
    },
    {
      title: "Pneumatic & Low-Profile Scissor Lifts",
      desc: "Enables thorough 360-degree lower rocker panel, wheel-barrel, and chassis decontamination without ground clearance constraints.",
    },
    {
      title: "Executive Customer Lounge",
      desc: "Relax in our air-conditioned lounge with complimentary high-speed Wi-Fi and artisan coffee while monitoring your car's progress.",
    },
  ];

  return (
    <section id="studio" className="py-24 lg:py-32 bg-[#060608] relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-[#ff1a2b]/30 text-xs font-mono text-[#ff4d5a] uppercase tracking-widest mb-3">
            <Building2 className="w-3.5 h-3.5" />
            Jaipur Detailing Sanctuary
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-['Outfit'] leading-tight">
            MORE THAN A <br />
            <span className="text-[#ff1a2b]">CAR WASH.</span>
          </h2>

          <p className="mt-2 text-lg sm:text-xl font-medium text-zinc-300 italic font-['Space_Grotesk']">
            "Every detail matters."
          </p>

          <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            Engineered exclusively for vehicle connoisseurs. From climate-controlled dust-free bays to 6500K CRI hex inspection arrays, our Jaipur facility guarantees an automotive care standard unmatched in Rajasthan.
          </p>
        </div>

        {/* Dual Real Studio Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Main Facade Shot */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl group min-h-[380px] lg:min-h-[460px]">
            <img
              src="/images/studio-facade.jpg"
              alt="Detailing Rebels Detailing Studio Jaipur Exterior Facade"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Float Label */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff1a2b] font-bold">
                  FLAGSHIP STUDIO FACADE • JAIPUR
                </span>
                <p className="text-sm font-bold text-white font-['Outfit'] mt-0.5">
                  DETAILING REBELS STUDIO
                </p>
                <p className="text-xs text-zinc-400 font-mono">
                  "Drive Clean. Stay Blessed."
                </p>
              </div>

              <a
                href={STUDIO_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-200 hover:text-white hover:border-[#ff1a2b]/50 transition-colors shrink-0"
              >
                <MapPin className="w-3.5 h-3.5 text-[#ff1a2b]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Secondary Interior Bay Shot */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/15 bg-zinc-950 shadow-2xl group min-h-[380px] lg:min-h-[460px]">
            <img
              src="/images/studio-mercedes-bay.jpg"
              alt="Interior Detailing Bay with Hexagonal Lighting and Mercedes-Benz"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-white/10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff1a2b] font-bold">
                LIGHTING BAY
              </span>
              <p className="text-sm font-bold text-white font-['Outfit'] mt-0.5">
                Hexagonal High-CRI Canopy
              </p>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                "Your Car. Our Passion."
              </p>
            </div>
          </div>
        </div>

        {/* 4 Studio Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-zinc-900/60 border border-white/10 hover:border-[#ff1a2b]/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#ff1a2b]/10 border border-[#ff1a2b]/30 flex items-center justify-center text-[#ff1a2b] text-xs font-mono font-bold mb-4">
                0{i + 1}
              </div>
              <h4 className="text-base font-bold text-white font-['Outfit']">
                {h.title}
              </h4>
              <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Visit Action Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-zinc-950 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-[#ff1a2b]">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm font-['Outfit']">
                Plan a Visit to Our Jaipur Detailing Studio
              </h4>
              <p className="text-xs text-zinc-400 font-light">
                {STUDIO_INFO.hours} • Free walkthrough and paint inspection
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
              className="w-1/2 md:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-xs font-mono text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff1a2b]" />
              <span>Call Studio</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="w-1/2 md:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#ff1a2b] hover:bg-[#d61323] text-xs font-mono font-bold text-white uppercase transition-colors"
            >
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
