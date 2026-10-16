import React from 'react';
import { translations } from '../data/siteData';

interface GoldenMarqueeProps {
  lang: 'pt' | 'en';
}

export const GoldenMarquee: React.FC<GoldenMarqueeProps> = ({ lang }) => {
  const words = translations[lang].marquee;
  // Repeat words to create seamless infinite marquee loop
  const repeatedWords = [...words, ...words, ...words, ...words];

  return (
    <div className="relative z-20 w-full overflow-hidden bg-[#C6A25A] py-3.5 sm:py-4 shadow-xl border-y border-[#E8D5A2]">
      {/* Subtle diagonal shimmer effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60 pointer-events-none"
        aria-hidden="true"
      />

      <div className="flex animate-marquee whitespace-nowrap text-[#2F2F31] select-none">
        {repeatedWords.map((word, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6 shrink-0">
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
  );
};
