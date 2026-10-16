import React from 'react';
import { translations } from '../data/siteData';

interface GoldenMarqueeProps {
  lang: 'pt' | 'en';
}

export const GoldenMarquee: React.FC<GoldenMarqueeProps> = ({ lang }) => {
  const words = translations[lang].marquee;
  // Repeat words so each track easily spans beyond screen width
  const items = [...words, ...words];

  return (
    <div className="relative z-20 w-full overflow-hidden bg-[#C6A25A] py-3.5 sm:py-4 shadow-xl border-y border-[#E8D5A2]">
      {/* Subtle diagonal shimmer effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      {/* Dual Track Infinite Loop - Completely seamless with zero jump or empty gap */}
      <div className="flex w-max select-none group">
        {/* Track 1 */}
        <div className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
          {items.map((word, idx) => (
            <div key={`track1-${idx}`} className="flex items-center mx-4 sm:mx-6 shrink-0">
              <span className="font-sans font-extrabold text-xs sm:text-sm tracking-[0.28em] uppercase text-[#2F2F31]">
                {word}
              </span>
              <span className="ml-4 sm:ml-6 text-xs text-[#2F2F31]/80 select-none" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </div>

        {/* Track 2 - Exact clone so loop is continuous */}
        <div className="flex shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]" aria-hidden="true">
          {items.map((word, idx) => (
            <div key={`track2-${idx}`} className="flex items-center mx-4 sm:mx-6 shrink-0">
              <span className="font-sans font-extrabold text-xs sm:text-sm tracking-[0.28em] uppercase text-[#2F2F31]">
                {word}
              </span>
              <span className="ml-4 sm:ml-6 text-xs text-[#2F2F31]/80 select-none" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
