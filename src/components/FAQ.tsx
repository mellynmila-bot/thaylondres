import React, { useState } from 'react';
import { siteData, translations, FAQItem } from '../data/siteData';

interface FAQProps {
  lang: 'pt' | 'en';
}

export const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const t = translations[lang].faq;
  const [openId, setOpenId] = useState<number | null>(1); // Open the first by default

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-[#F6F1E8] text-[#2F2F31] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 justify-center mb-3">
            <span className="w-6 h-[1px] bg-[#C6A25A]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#8E7035]">
              Dúvidas Frequentes
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

        {/* 10 Accordion Items (Square corners, gold borders) */}
        <div className="space-y-3.5 mb-14">
          {t.items.map((item: FAQItem) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border border-[#C6A25A]/50 bg-[#F6F1E8] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-[#EAE2D3]/40 transition-colors cursor-pointer select-none"
                >
                  <span className="font-serif text-base sm:text-lg font-normal text-[#2F2F31] leading-snug">
                    <span className="text-[#8E7035] text-xs font-mono mr-2.5">
                      {item.id < 10 ? `0${item.id}` : item.id}.
                    </span>
                    {item.question}
                  </span>
                  <span className="w-7 h-7 shrink-0 border border-[#C6A25A] flex items-center justify-center text-[#8E7035] text-sm">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#4A4A4D] font-light leading-relaxed border-t border-[#C6A25A]/20">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Final CTA Button */}
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
