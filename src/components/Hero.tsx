import React from 'react';
import { siteData, translations } from '../data/siteData';

interface HeroProps {
  lang: 'pt' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F6F1E8]">
      {/* Subtle Golden Radial Glow in the background */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C6A25A]/10 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Photo Column: Appears FIRST on mobile (order-1), on right on desktop (order-2) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 mb-2 lg:mb-0">
            <div className="relative w-full max-w-[320px] sm:max-w-md lg:max-w-none pt-2 pb-3 px-3 sm:px-6">
              {/* Back Offset Gold Frame for Depth - safely contained */}
              <div
                className="absolute top-0 right-1 sm:top-2 sm:right-2 w-[calc(100%-8px)] h-[calc(100%-8px)] border border-[#C6A25A] pointer-events-none translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3"
                aria-hidden="true"
              />

              {/* Image Container with Inner Gold Border */}
              <div className="relative border-2 border-[#C6A25A] bg-[#2F2F31] shadow-2xl overflow-hidden aspect-[4/5] group">
                <img
                  src={siteData.images.heroAndFavicon}
                  alt="Thalyta Pires - Makeup Artist & Hair Stylist London"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  width="600"
                  height="750"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle Light Beam Overlay on Hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-[#C6A25A]/20 via-transparent to-transparent opacity-60 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Corner Golden Accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#E8D5A2] pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#E8D5A2] pointer-events-none" />

                {/* Floating Prestige Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 sm:max-w-xs bg-[#2F2F31]/90 backdrop-blur-md border border-[#C6A25A] p-2.5 sm:p-3 text-[#F6F1E8]">
                  <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1">
                    <span className="text-[#C6A25A] text-xs">✦</span>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8D5A2]">
                      Thalyta Pires Beauty
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-[#E4E2DC] leading-tight">
                    {lang === 'pt' ? 'Atendimento VIP a domicílio em Londres' : 'VIP Mobile Makeup & Hair across London'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column: Appears SECOND on mobile (order-2), on left on desktop (order-1) */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-3 sm:mb-4">
              <span className="w-5 sm:w-6 h-[1px] bg-[#C6A25A]" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-[#8E7035]">
                {t.eyebrow}
              </span>
              <span className="w-5 sm:w-6 h-[1px] bg-[#C6A25A] lg:hidden" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl xl:text-6xl text-[#2F2F31] font-normal leading-[1.14] mb-4 sm:mb-6">
              <span className="italic font-normal gold-gradient-text block sm:inline">
                {t.titleHighlight}
              </span>
              <span>{t.titleRest}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-[#6E6E70] leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 font-light">
              {t.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10">
              <a
                href={siteData.links.fresha}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-shimmer px-6 sm:px-7 py-3.5 sm:py-4 bg-[#C6A25A] text-[#2F2F31] font-bold text-xs sm:text-sm tracking-[0.18em] uppercase hover:bg-[#E8D5A2] transition-colors text-center shadow-md"
              >
                {t.ctaPrimary}
              </a>
              <a
                href="#servicos"
                className="px-6 sm:px-7 py-3.5 sm:py-4 border border-[#C6A25A] text-[#2F2F31] hover:bg-[#C6A25A]/10 font-bold text-xs sm:text-sm tracking-[0.18em] uppercase transition-colors text-center"
              >
                {t.ctaSecondary}
              </a>
            </div>

            {/* 3 Square Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-[#C6A25A]/25 text-left">
              {/* Card 1 */}
              <div className="p-3.5 sm:p-4 bg-[#F6F1E8] border border-[#C6A25A]/40 hover:border-[#C6A25A] transition-colors">
                <div className="flex items-center gap-2 text-[#8E7035] mb-1">
                  <svg className="w-4 h-4 shrink-0 text-[#C6A25A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#2F2F31]">
                    {t.cards[0].title}
                  </span>
                </div>
                <p className="text-xs text-[#6E6E70] leading-snug">
                  {t.cards[0].desc}
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-3.5 sm:p-4 bg-[#F6F1E8] border border-[#C6A25A]/40 hover:border-[#C6A25A] transition-colors">
                <div className="flex items-center gap-2 text-[#8E7035] mb-1">
                  <svg className="w-4 h-4 shrink-0 text-[#C6A25A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#2F2F31]">
                    {t.cards[1].title}
                  </span>
                </div>
                <p className="text-xs text-[#6E6E70] leading-snug">
                  {t.cards[1].desc}
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-3.5 sm:p-4 bg-[#F6F1E8] border border-[#C6A25A]/40 hover:border-[#C6A25A] transition-colors">
                <div className="flex items-center gap-2 text-[#8E7035] mb-1">
                  <svg className="w-4 h-4 shrink-0 text-[#C6A25A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#2F2F31]">
                    {t.cards[2].title}
                  </span>
                </div>
                <p className="text-xs text-[#6E6E70] leading-snug">
                  {t.cards[2].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
