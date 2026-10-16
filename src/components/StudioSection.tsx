import React, { useState, useEffect } from 'react';
import { siteData, translations } from '../data/siteData';
import { Lightbox } from './Lightbox';

interface StudioSectionProps {
  lang: 'pt' | 'en';
  hasThirdPartyConsent: boolean;
  onAcceptThirdPartyCookies: () => void;
}

export const StudioSection: React.FC<StudioSectionProps> = ({
  lang,
  hasThirdPartyConsent,
  onAcceptThirdPartyCookies,
}) => {
  const t = translations[lang].studio;
  const studioPhotos = siteData.images.studio;
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto carousel rotation with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % studioPhotos.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, studioPhotos.length]);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + studioPhotos.length) % studioPhotos.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % studioPhotos.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="studio" className="py-24 bg-[#E4E2DC] text-[#2F2F31] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 justify-center mb-3">
            <span className="w-6 h-[1px] bg-[#C6A25A]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#8E7035]">
              Atendimento Exclusivo • London
            </span>
            <span className="w-6 h-[1px] bg-[#C6A25A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2F2F31] mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E70] font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Studio Photo Carousel (3 Photos) */}
        <div
          className="relative max-w-4xl mx-auto mb-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative border-2 border-[#C6A25A] bg-[#2F2F31] shadow-xl overflow-hidden aspect-[16/9] sm:aspect-[21/9]">
            {studioPhotos.map((photoUrl, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className={`absolute inset-0 cursor-pointer transition-opacity duration-700 ease-in-out ${
                  activeSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={photoUrl}
                  alt={`Studio Thalyta Pires photo ${idx + 1}`}
                  className="w-full h-full object-cover object-center"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  width="900"
                  height="400"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end justify-between p-4 sm:p-6 text-[#F6F1E8]">
                  <span className="text-xs font-semibold tracking-widest uppercase bg-[#2F2F31]/80 px-3 py-1 border border-[#C6A25A]">
                    {lang === 'pt' ? 'Studio & Ambiente' : 'Studio & Workspace'}
                  </span>
                  <span className="text-xs text-[#E8D5A2] flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    {lang === 'pt' ? 'Clique para ampliar' : 'Click to enlarge'}
                  </span>
                </div>
              </div>
            ))}

            {/* Left/Right Carousel Controls */}
            <button
              onClick={handlePrevSlide}
              type="button"
              aria-label="Previous studio slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-[#2F2F31]/80 hover:bg-[#C6A25A] text-[#F6F1E8] hover:text-[#2F2F31] border border-[#C6A25A] transition-colors z-20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNextSlide}
              type="button"
              aria-label="Next studio slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-[#2F2F31]/80 hover:bg-[#C6A25A] text-[#F6F1E8] hover:text-[#2F2F31] border border-[#C6A25A] transition-colors z-20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {studioPhotos.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveSlide(i)}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 transition-colors border border-[#C6A25A] ${
                  activeSlide === i ? 'bg-[#C6A25A]' : 'bg-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 6 Benefits Cards (2x3 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {t.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F6F1E8] border border-[#C6A25A]/50 hover:border-[#C6A25A] p-6 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="w-8 h-8 border border-[#C6A25A] flex items-center justify-center text-[#8E7035] font-serif text-sm font-bold mb-4 bg-[#F6F1E8]">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-xl text-[#2F2F31] font-normal mb-2">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6E6E70] font-light leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Security & Privacy Notice (Gold Card with Lock Icon) */}
        <div className="bg-[#C6A25A]/15 border-2 border-[#C6A25A] p-5 sm:p-6 mb-12 flex items-start gap-4">
          <div className="p-2 bg-[#C6A25A] text-[#2F2F31] shrink-0">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div>
            <span className="text-xs font-bold tracking-wider uppercase text-[#8E7035] block mb-1">
              {lang === 'pt' ? 'Segurança & Privacidade' : 'Privacy & Security Notice'}
            </span>
            <p className="text-xs sm:text-sm text-[#2F2F31] font-medium leading-relaxed">
              {t.securityNotice}
            </p>
          </div>
        </div>

        {/* London Regions Served Chips */}
        <div className="mb-8">
          <span className="text-xs font-bold tracking-wider uppercase text-[#6E6E70] block mb-3 text-center sm:text-left">
            {t.coverageTitle}
          </span>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            {siteData.regions.map((region, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 border border-[#C6A25A]/70 bg-[#F6F1E8] text-[#2F2F31] text-xs font-semibold tracking-wide uppercase shadow-2xs"
              >
                📍 {region}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Google Map with Translucent Decorative Gold Zone Overlay */}
        <div className="relative border-2 border-[#C6A25A] bg-[#2F2F31] overflow-hidden mb-12 shadow-md">
          {hasThirdPartyConsent ? (
            <div className="relative w-full h-[360px] sm:h-[420px]">
              <iframe
                src={siteData.maps.embedUrl}
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-90"
                loading="lazy"
                title="London Coverage Map"
              />
              {/* Translucent Golden Coverage Overlay to symbolize service area */}
              <div
                className="absolute inset-0 bg-[#C6A25A]/10 pointer-events-none flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-2 border-dashed border-[#C6A25A] bg-[#C6A25A]/15 backdrop-blur-[0.5px] pointer-events-none flex items-center justify-center">
                  <span className="px-3 py-1 bg-[#2F2F31] text-[#E8D5A2] text-xs font-bold tracking-widest uppercase border border-[#C6A25A] shadow-md">
                    Área Atendida • London
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full min-h-[300px] p-8 bg-[#2F2F31] flex flex-col items-center justify-center text-center">
              <svg className="w-10 h-10 text-[#C6A25A] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="square" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-sm text-[#E4E2DC] mb-5 max-w-sm font-light">
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

        {/* Section CTA */}
        <div className="text-center">
          <a
            href={siteData.links.fresha}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-shimmer inline-block px-10 py-4 bg-[#C6A25A] text-[#2F2F31] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#E8D5A2] transition-colors shadow-md"
          >
            {t.cta}
          </a>
        </div>
      </div>

      {/* Lightbox for Studio Photos */}
      <Lightbox
        isOpen={lightboxOpen}
        images={studioPhotos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev === 0 ? studioPhotos.length - 1 : prev - 1))}
        onNext={() => setLightboxIndex((prev) => (prev === studioPhotos.length - 1 ? 0 : prev + 1))}
        title={lang === 'pt' ? 'Studio Thalyta Pires' : 'Thalyta Pires Studio'}
      />
    </section>
  );
};
