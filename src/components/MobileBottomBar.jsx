import React from "react";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import { STUDIO_INFO } from "../data/content";

export default function MobileBottomBar({ onOpenBooking }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#0c0c10]/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 shadow-[0_-10px_25px_rgba(0,0,0,0.8)] pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))]">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        {/* Quick Call */}
        <a
          href={`tel:${STUDIO_INFO.phone.replace(/\s+/g, "")}`}
          className="flex items-center justify-center p-3 rounded-xl bg-zinc-900 border border-white/15 text-zinc-300 hover:text-white shrink-0 active:scale-95 transition-transform"
          aria-label="Call studio"
        >
          <Phone className="w-5 h-5 text-[#ff1a2b]" />
        </a>

        {/* Primary WhatsApp / Booking CTA */}
        <button
          onClick={() => onOpenBooking()}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold font-mono tracking-wider uppercase text-white bg-gradient-to-r from-[#ff1a2b] via-[#e61222] to-[#b80c18] shadow-lg shadow-red-950/60 active:scale-98 transition-transform"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp — Book Detailing</span>
        </button>
      </div>
    </div>
  );
}
