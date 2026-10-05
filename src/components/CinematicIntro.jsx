import React, { useState, useEffect } from "react";

export default function CinematicIntro({ onComplete }) {
  const [stage, setStage] = useState(0); // 0: black, 1: line, 2: text, 3: sweep, 4: exit

  useEffect(() => {
    // Stage 1: Red laser line begins
    const t1 = setTimeout(() => setStage(1), 150);
    // Stage 2: Logo and subtitle reveal
    const t2 = setTimeout(() => setStage(2), 600);
    // Stage 3: Light sweep / flash transition
    const t3 = setTimeout(() => setStage(3), 1400);
    // Stage 4: Fade out and complete
    const t4 = setTimeout(() => {
      setStage(4);
      setTimeout(() => {
        onComplete();
      }, 500);
    }, 2100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#050507] flex flex-col items-center justify-center transition-all duration-700 ease-out select-none ${
        stage === 4 ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Background subtle noise/glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,26,43,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Center Branding Area */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Automotive Silhouette Icon */}
        <div
          className={`w-14 h-14 rounded-xl bg-zinc-950 border border-white/10 flex items-center justify-center mb-6 shadow-2xl transition-all duration-700 ${
            stage >= 2 ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <svg viewBox="0 0 40 40" className="w-9 h-9 text-[#ff1a2b]" fill="none">
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

        {/* Thin Expanding Red Laser Line */}
        <div className="relative w-64 sm:w-80 h-0.5 mb-6 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-transparent via-[#ff1a2b] to-transparent shadow-[0_0_15px_#ff1a2b] transition-all duration-700 ease-out mx-auto ${
              stage >= 1 ? "w-full opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>

        {/* Main Logo Reveal */}
        <div
          className={`transition-all duration-700 transform ${
            stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative inline-block overflow-hidden pb-1">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-wider uppercase font-['Outfit'] flex items-center gap-3">
              <span className="text-white">DETAILING</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1a2b] via-[#ff4d5a] to-[#d60012] text-glow">
                REBELS
              </span>
            </h1>

            {/* Light sweep beam */}
            {stage === 3 && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent -skew-x-12 animate-[sweep_0.6s_ease-in-out_forwards] pointer-events-none" />
            )}
          </div>

          {/* Subtitle */}
          <p
            className={`text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-zinc-400 mt-2 transition-all duration-500 delay-150 ${
              stage >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            JAIPUR • PREMIUM AUTOMOTIVE DETAILING
          </p>
        </div>

        {/* Lower expanding red accent line */}
        <div className="relative w-48 sm:w-64 h-0.5 mt-6 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-transparent via-[#ff1a2b] to-transparent shadow-[0_0_12px_#ff1a2b] transition-all duration-700 ease-out mx-auto ${
              stage >= 2 ? "w-full opacity-70" : "w-0 opacity-0"
            }`}
          />
        </div>
      </div>

      {/* Skip Button (Bottom Right) */}
      <button
        onClick={onComplete}
        className="absolute bottom-6 right-6 px-3 py-1.5 rounded-full bg-zinc-900/60 hover:bg-zinc-800 text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-white border border-white/5 transition-colors cursor-pointer"
      >
        Skip Intro ⇥
      </button>
    </div>
  );
}
