import React from 'react';
import { siteData, translations } from '../data/siteData';

interface InstagramSectionProps {
  lang: 'pt' | 'en';
  hasThirdPartyConsent: boolean;
  onAcceptThirdPartyCookies: () => void;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({
  lang,
  hasThirdPartyConsent,
  onAcceptThirdPartyCookies,
}) => {
  const t = translations[lang].instagram;

  return (
    <section id="instagram" className="py-24 bg-[#2F2F31] text-[#F6F1E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 justify-center mb-3">
            <span className="w-6 h-[1px] bg-[#C6A25A]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A25A]">
              Social & Backstage
            </span>
            <span className="w-6 h-[1px] bg-[#C6A25A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F6F1E8] mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#E4E2DC] font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Instagram Profile Header Card */}
        <div className="max-w-xl mx-auto mb-10 bg-[#2F2F31] border border-[#C6A25A] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="relative w-16 h-16 shrink-0 border-2 border-[#C6A25A] p-0.5 bg-[#2F2F31]">
              <img
                src={siteData.images.heroAndFavicon}
                alt="@thalytapiresbeauty avatar"
                className="w-full h-full object-cover"
                width="64"
                height="64"
                loading="lazy"
              />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold text-[#F6F1E8] block leading-tight">
                {siteData.profile.handle}
              </span>
              <span className="text-xs text-[#E8D5A2] font-medium tracking-wide block mt-0.5">
                {t.role}
              </span>
            </div>
          </div>

          <a
            href={siteData.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-shimmer px-5 py-2.5 bg-[#C6A25A] text-[#2F2F31] font-bold text-xs tracking-widest uppercase hover:bg-[#E8D5A2] transition-colors whitespace-nowrap shrink-0"
          >
            {t.ctaFollow}
          </a>
        </div>

        {/* Highlights Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-10">
          {t.highlights.map((highlight, idx) => (
            <a
              key={idx}
              href={siteData.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#C6A25A]/60 hover:border-[#C6A25A] bg-[#2F2F31] text-[#E4E2DC] hover:text-[#E8D5A2] text-xs font-medium tracking-wider uppercase transition-colors"
            >
              ✦ {highlight}
            </a>
          ))}
        </div>

        {/* Centered Reel Embed Container (Max-width ~400px, square gold frame, no custom preview) */}
        <div className="max-w-[420px] mx-auto mb-12">
          <div className="relative border-2 border-[#C6A25A] p-1 bg-[#2F2F31] shadow-2xl">
            {hasThirdPartyConsent ? (
              <div className="w-full overflow-hidden bg-black flex justify-center items-center min-h-[480px]">
                <iframe
                  src={siteData.links.reelEmbed}
                  className="w-full h-[520px] border-0"
                  allowFullScreen
                  scrolling="no"
                  loading="lazy"
                  title="Thalyta Pires Beauty - Instagram Reel"
                />
              </div>
            ) : (
              /* Neutral PECR Consent Fallback Box (No image or cover per PRD) */
              <div className="w-full min-h-[380px] bg-[#2F2F31] p-8 flex flex-col items-center justify-center text-center">
                <svg className="w-10 h-10 text-[#C6A25A] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-sm text-[#E4E2DC] mb-6 max-w-xs font-light">
                  {t.cookieBlocked}
                </p>
                <button
                  onClick={onAcceptThirdPartyCookies}
                  type="button"
                  className="btn-gold-shimmer px-6 py-3 bg-[#C6A25A] text-[#2F2F31] font-bold text-xs tracking-widest uppercase hover:bg-[#E8D5A2] transition-colors"
                >
                  {t.cookieBtn}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteData.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 border border-[#C6A25A] text-[#F6F1E8] hover:bg-[#C6A25A]/10 font-bold text-xs tracking-widest uppercase transition-colors text-center"
          >
            Seguir @thalytapiresbeauty
          </a>
          <a
            href={siteData.links.fresha}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-shimmer w-full sm:w-auto px-8 py-3.5 bg-[#C6A25A] text-[#2F2F31] font-bold text-xs tracking-widest uppercase hover:bg-[#E8D5A2] transition-colors text-center shadow-md"
          >
            {t.ctaFresha}
          </a>
        </div>
      </div>
    </section>
  );
};
