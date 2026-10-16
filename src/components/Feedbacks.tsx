import React from 'react';
import { siteData, translations, ReviewItem } from '../data/siteData';

interface FeedbacksProps {
  lang: 'pt' | 'en';
}

export const Feedbacks: React.FC<FeedbacksProps> = ({ lang }) => {
  const t = translations[lang].feedbacks;

  return (
    <section id="avaliacoes" className="py-24 bg-[#F6F1E8] text-[#2F2F31] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 justify-center mb-3">
            <span className="w-6 h-[1px] bg-[#C6A25A]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#8E7035]">
              Depoimentos • 5 Estrelas
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

        {/* Testimonials 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {t.items.map((review: ReviewItem) => (
            <div
              key={review.id}
              className="bg-[#F6F1E8] border border-[#C6A25A]/60 hover:border-[#C6A25A] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 relative group"
            >
              {/* Top Row: 5 Gold Stars & Decorative Quote Mark */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C6A25A]">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-sm">★</span>
                    ))}
                  </div>
                  <span className="font-serif text-3xl font-bold text-[#C6A25A]/30 leading-none">
                    ”
                  </span>
                </div>

                {/* Comment */}
                <p className="font-serif italic text-sm sm:text-base text-[#2F2F31] leading-relaxed mb-6 font-normal">
                  {review.comment}
                </p>
              </div>

              {/* Bottom: Name & Service info */}
              <div className="pt-4 border-t border-[#C6A25A]/20">
                <span className="font-sans font-bold text-xs sm:text-sm uppercase tracking-wider text-[#2F2F31] block">
                  {review.name}
                </span>
                <span className="text-xs text-[#8E7035] tracking-wide block mt-0.5">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button (Fresha) */}
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
    </section>
  );
};
