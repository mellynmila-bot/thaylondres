import React, { useState } from 'react';
import { siteData, translations } from '../data/siteData';
import { Lightbox } from './Lightbox';

interface CourseProps {
  lang: 'pt' | 'en';
}

export const Course: React.FC<CourseProps> = ({ lang }) => {
  const t = translations[lang].course;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const photos = siteData.images.course;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="curso" className="py-24 bg-[#EAE2D3] text-[#2F2F31] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 justify-center mb-3">
            <span className="w-6 h-[1px] bg-[#C6A25A]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#8E7035]">
              {t.eyebrow}
            </span>
            <span className="w-6 h-[1px] bg-[#C6A25A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#2F2F31] mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6E6E70] font-light leading-relaxed mb-6">
            {t.subtitle}
          </p>

          {/* Badges strip: 3h30 · £180 · 1:1 VIP */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 p-2 sm:px-6 sm:py-2.5 bg-[#F6F1E8] border border-[#C6A25A] shadow-xs">
            {t.badges.map((b, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#2F2F31]">
                <span className="text-[#8E7035]">✦</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Description */}
        <div className="max-w-3xl mx-auto text-center mb-16 text-sm sm:text-base text-[#4A4A4D] font-light leading-relaxed">
          <p className="mb-4">{t.body}</p>
          <p className="font-normal text-[#2F2F31]">{t.conclusion}</p>
        </div>

        {/* 2 Proposals Cards Side by Side with Photos & Lightbox */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Card 1: Day Makeup */}
          <div className="bg-[#F6F1E8] border border-[#C6A25A] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Photo */}
              <div
                onClick={() => openLightbox(0)}
                className="relative aspect-[4/3] bg-[#2F2F31] overflow-hidden cursor-pointer group"
              >
                <img
                  src={photos[0]}
                  alt="Maquiagem para o dia - Curso de Automaquiagem"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  decoding="async"
                  width="600"
                  height="450"
                />
                <div className="absolute inset-0 bg-[#2F2F31]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1 bg-[#F6F1E8] text-xs font-semibold tracking-wider text-[#2F2F31]">
                    {lang === 'pt' ? 'Ampliar foto' : 'View full photo'}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl text-[#2F2F31] font-normal mb-3">
                  {t.proposals[0].title}
                </h3>
                <p className="text-sm text-[#6E6E70] font-light leading-relaxed">
                  {t.proposals[0].desc}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 sm:px-8 sm:pb-8">
              <div className="pt-4 border-t border-[#C6A25A]/20 flex items-center justify-between text-xs text-[#8E7035]">
                <span>{lang === 'pt' ? 'Praticidade & Frescor' : 'Effortless & Radiant'}</span>
                <span>✦</span>
              </div>
            </div>
          </div>

          {/* Card 2: Night Glamour */}
          <div className="bg-[#F6F1E8] border border-[#C6A25A] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Photo */}
              <div
                onClick={() => openLightbox(1)}
                className="relative aspect-[4/3] bg-[#2F2F31] overflow-hidden cursor-pointer group"
              >
                <img
                  src={photos[1]}
                  alt="Maquiagem para a noite - Curso de Automaquiagem"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  decoding="async"
                  width="600"
                  height="450"
                />
                <div className="absolute inset-0 bg-[#2F2F31]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1 bg-[#F6F1E8] text-xs font-semibold tracking-wider text-[#2F2F31]">
                    {lang === 'pt' ? 'Ampliar foto' : 'View full photo'}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="p-6 sm:p-8">
                <h3 className="font-serif text-2xl text-[#2F2F31] font-normal mb-3">
                  {t.proposals[1].title}
                </h3>
                <p className="text-sm text-[#6E6E70] font-light leading-relaxed">
                  {t.proposals[1].desc}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 sm:px-8 sm:pb-8">
              <div className="pt-4 border-t border-[#C6A25A]/20 flex items-center justify-between text-xs text-[#8E7035]">
                <span>{lang === 'pt' ? 'Sofisticação & Glamour' : 'Bespoke & Striking'}</span>
                <span>✦</span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA (WhatsApp Courses link: https://wa.me/message/5T7KWRUIJBEJK1) */}
        <div className="text-center">
          <a
            href={siteData.links.whatsappCourses}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-shimmer inline-flex items-center gap-3 px-10 py-4 bg-[#C6A25A] text-[#2F2F31] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#E8D5A2] transition-colors shadow-lg"
          >
            {/* WhatsApp Icon */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 17.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.39 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42 1.56 1.55 2.41 3.62 2.41 5.82 0 4.54-3.7 8.25-8.24 8.25zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.71 4.3 3.8 2.53 1.08 2.53.72 2.98.68.46-.05 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
            </svg>
            <span>{t.cta}</span>
          </a>
        </div>
      </div>

      {/* Lightbox for Course photos */}
      <Lightbox
        isOpen={lightboxOpen}
        images={photos}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))}
        onNext={() => setLightboxIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1))}
        title={t.title}
      />
    </section>
  );
};
