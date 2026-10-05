import React from "react";
import { Star, MessageSquare, ExternalLink, CheckCircle } from "lucide-react";
import { REVIEWS, STUDIO_INFO } from "../data/content";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-[#09090c] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-[#ff1a2b]/30 text-xs font-mono text-[#ff4d5a] uppercase tracking-widest mb-3">
              <Star className="w-3.5 h-3.5 fill-[#ff1a2b] text-[#ff1a2b]" />
              Client Experiences
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase font-['Outfit']">
              CUSTOMER TESTIMONIALS
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base font-light">
              Hear directly from automotive enthusiasts and verified car owners across Jaipur.
            </p>
          </div>

          <a
            href={STUDIO_INFO.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-[#ff1a2b]/50 text-xs font-mono text-zinc-200 hover:text-white transition-colors"
          >
            <span>Read on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#ff1a2b]" />
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all hover:bg-zinc-900/90"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#ff1a2b] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#ff1a2b]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white font-['Outfit']">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Verified
                  </span>
                </div>
                <div className="text-xs font-mono text-zinc-400 mt-0.5">
                  {rev.car}
                </div>
                <div className="text-[10px] font-mono text-[#ff4d5a] mt-1">
                  Service: {rev.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feedback invitation box */}
        <div className="mt-12 p-5 rounded-xl bg-zinc-950/70 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-semibold text-white">Have you experienced Detailing Rebels?</h4>
            <p className="text-xs text-zinc-400 font-light">Your genuine feedback helps us uphold the highest standard of automotive detailing in Jaipur.</p>
          </div>
          <a
            href={STUDIO_INFO.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-xs font-mono text-white transition-colors shrink-0"
          >
            Leave a Studio Review
          </a>
        </div>
      </div>
    </section>
  );
}
