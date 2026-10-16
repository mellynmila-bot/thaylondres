import React, { useState } from 'react';
import { siteData, translations } from '../data/siteData';

interface AboutProps {
  lang: 'pt' | 'en';
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang].about;
  const [photoIndex, setPhotoIndex] = useState(0);
  const photos = siteData.images.about;

  const nextPhoto = () => {
    setPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section id="sobre" className="py-24 bg-[#E4E2DC] text-[#2F2F31] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: 4-Photo Slider with Double Gold Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Offset Gold Border Behind */}
              <div
                className="absolute top-3 left-3 w-full h-full border border-[#C6A25A] pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Photo Card */}
              <div className="relative border-2 border-[#C6A25A] bg-[#2F2F31] shadow-xl overflow-hidden aspect-[4/5] group">
                <img
                  key={photoIndex}
                  src={photos[photoIndex]}
                  alt={`Thalyta Pires portrait ${photoIndex + 1}`}
                  className="w-full h-full object-cover object-center animate-in fade-in duration-500"
                  width="500"
                  height="625"
                  loading="lazy"
                />

                {/* Left Arrow Button */}
                <button
                  onClick={prevPhoto}
                  type="button"
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-[#2F2F31]/80 hover:bg-[#C6A25A] text-[#F6F1E8] hover:text-[#2F2F31] border border-[#C6A25A] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={nextPhoto}
                  type="button"
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-[#2F2F31]/80 hover:bg-[#C6A25A] text-[#F6F1E8] hover:text-[#2F2F31] border border-[#C6A25A] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Slide indicator dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#2F2F31]/70 px-3 py-1.5 border border-[#C6A25A]/40">
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPhotoIndex(i)}
                      type="button"
                      aria-label={`Go to slide ${i + 1}`}
                      className={`w-2 h-2 transition-all ${
                        photoIndex === i ? 'bg-[#C6A25A] scale-125' : 'bg-[#E4E2DC]/50 hover:bg-[#E4E2DC]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Quote, Paragraphs, Stats, CTA (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C6A25A]" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#8E7035]">
                {lang === 'pt' ? 'Trajetória & Filosofia' : 'Artistry & Heritage'}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2F2F31] mb-2">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-[#6E6E70] font-light mb-8">
              {t.subtitle}
            </p>

            {/* Emotional Quote with Golden Quotation Marks & Allura Signature */}
            <div className="bg-[#F6F1E8] border-l-2 border-[#C6A25A] p-6 mb-8 shadow-xs">
              <p className="font-serif italic text-base sm:text-lg text-[#2F2F31] leading-relaxed mb-3">
                <span className="text-[#C6A25A] font-serif text-2xl font-bold mr-1">“</span>
                {t.quote.replace(/[“”]/g, '')}
                <span className="text-[#C6A25A] font-serif text-2xl font-bold ml-1">”</span>
              </p>
              <div className="text-right">
                <span className="font-allura text-2xl sm:text-3xl text-[#8E7035]">
                  {t.signature}
                </span>
              </div>
            </div>

            {/* Paragraph 1 & Paragraph 2 */}
            <div className="space-y-4 text-sm sm:text-base text-[#4A4A4D] font-light leading-relaxed mb-8">
              <p>{t.paragraph1}</p>
              <p>{t.paragraph2}</p>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 pt-4 border-t border-[#C6A25A]/30">
              {t.stats.map((stat, idx) => (
                <div key={idx} className="p-3 bg-[#F6F1E8] border border-[#C6A25A]/40 text-center">
                  <span className="font-serif text-lg font-bold text-[#8E7035] block leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-[11px] text-[#6E6E70] uppercase tracking-wider block mt-1 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <a
                href={siteData.links.fresha}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-shimmer inline-block px-8 py-4 bg-[#C6A25A] text-[#2F2F31] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#E8D5A2] transition-colors shadow-md text-center"
              >
                {t.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
