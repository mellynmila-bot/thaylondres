import React, { useState } from 'react';
import { siteData, translations } from '../data/siteData';
import { Lightbox } from './Lightbox';

interface GalleryProps {
  lang: 'pt' | 'en';
}

export const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  const t = translations[lang].gallery;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? siteData.images.gallery.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === siteData.images.gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="galeria" className="py-24 bg-[#F6F1E8] text-[#2F2F31] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 justify-center mb-3">
            <span className="w-6 h-[1px] bg-[#C6A25A]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#8E7035]">
              Portfolio Editorial
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

        {/* Gallery Grid (3 cols desktop, 2 cols mobile) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {siteData.images.gallery.map((imgUrl, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer aspect-square bg-[#2F2F31] overflow-hidden border border-[#C6A25A] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={imgUrl}
                alt={t.alts[index] || `Maquiagem artística por Thalyta Pires ${index + 1}`}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                loading={index < 4 ? 'eager' : 'lazy'}
                decoding="async"
                width="500"
                height="500"
              />

              {/* Hover Dark Scrim & Golden Frame Accent */}
              <div className="absolute inset-0 bg-[#2F2F31]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                <div className="w-full h-full border border-[#E8D5A2] flex items-center justify-center">
                  <span className="p-2.5 bg-[#F6F1E8] text-[#2F2F31] shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-4 h-4 text-[#8E7035]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="square" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#C6A25A]" />
              <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#C6A25A]" />
            </div>
          ))}
        </div>

        {/* Action Button */}
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

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={siteData.images.gallery}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
        title={t.title}
      />
    </section>
  );
};
