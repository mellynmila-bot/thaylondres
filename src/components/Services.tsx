import React, { useState } from 'react';
import { siteData, translations, ServiceItem } from '../data/siteData';

interface ServicesProps {
  lang: 'pt' | 'en';
}

export const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = translations[lang].services;
  const [activeFilter, setActiveFilter] = useState<'all' | 'makeup' | 'hair' | 'course'>('all');

  const filteredItems = t.items.filter((item: ServiceItem) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <section id="servicos" className="py-24 bg-[#2F2F31] text-[#F6F1E8] relative overflow-hidden">
      {/* Subtle background golden ambient glow */}
      <div
        className="absolute top-1/2 right-10 w-96 h-96 bg-[#C6A25A]/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 justify-center mb-3">
            <span className="w-6 h-[1px] bg-[#C6A25A]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A25A]">
              Menu de Serviços • Price List
            </span>
            <span className="w-6 h-[1px] bg-[#C6A25A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F6F1E8] mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#E4E2DC] font-light leading-relaxed">
            {t.subtitle}
          </p>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {(['all', 'makeup', 'hair', 'course'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                type="button"
                className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors border ${
                  activeFilter === cat
                    ? 'bg-[#C6A25A] text-[#2F2F31] border-[#C6A25A]'
                    : 'bg-transparent text-[#E4E2DC] border-[#4A4A4D] hover:border-[#C6A25A]'
                }`}
              >
                {t.categories[cat]}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (cards with square corners and gold borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((service: ServiceItem) => {
            const isCourse = service.isCourse;
            const bookHref = isCourse ? siteData.links.whatsappCourses : siteData.links.fresha;
            const btnLabel = isCourse ? t.ctaCourse : t.ctaBook;

            return (
              <div
                key={service.id}
                className="bg-[#2F2F31] border border-[#C6A25A]/50 hover:border-[#C6A25A] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative group"
              >
                {/* Subtle top-right golden accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C6A25A] pointer-events-none" />

                <div>
                  {/* Category kicker & Duration */}
                  <div className="flex items-center justify-between text-xs text-[#E8D5A2] mb-3 pb-2 border-b border-[#4A4A4D]/60">
                    <span className="uppercase tracking-widest font-semibold text-[11px]">
                      {service.category === 'makeup'
                        ? (lang === 'pt' ? 'Maquiagem' : 'Makeup')
                        : service.category === 'hair'
                        ? (lang === 'pt' ? 'Penteado & Cabelo' : 'Hair Styling')
                        : (lang === 'pt' ? 'Curso VIP 1:1' : 'VIP 1:1 Course')}
                    </span>
                    <div className="flex items-center gap-1.5 text-[#E4E2DC]">
                      <svg className="w-3.5 h-3.5 text-[#C6A25A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                        <path strokeWidth="1.5" d="M12 6v6l4 2" />
                      </svg>
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Service Title & Price */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F6F1E8] font-normal leading-snug">
                      {service.name}
                    </h3>
                    <div className="text-right shrink-0">
                      <span className="font-serif text-xl sm:text-2xl font-bold text-[#C6A25A] tabular-nums block">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#E4E2DC] font-light leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Inclusions List */}
                  <div className="mb-6 pt-3 border-t border-[#4A4A4D]/40">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#E8D5A2] block mb-2.5">
                      {t.includesLabel}
                    </span>
                    <ul className="space-y-2">
                      {service.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#E4E2DC] leading-snug">
                          <span className="text-[#C6A25A] text-xs shrink-0 select-none">✦</span>
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-2">
                  <a
                    href={bookHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-gold-shimmer w-full text-center py-3 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors block ${
                      isCourse
                        ? 'bg-[#E8D5A2] text-[#2F2F31] hover:bg-[#C6A25A]'
                        : 'bg-[#C6A25A] text-[#2F2F31] hover:bg-[#E8D5A2]'
                    }`}
                  >
                    {btnLabel}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Highlight Card (Mobile services at home) */}
        <div className="bg-[#2F2F31] border-2 border-[#C6A25A] p-6 sm:p-8 mb-12 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-[#C6A25A] text-sm">✦</span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E8D5A2]">
                  {t.infoCard.badge}
                </span>
              </div>
              <h4 className="font-serif text-2xl text-[#F6F1E8] mb-2 font-normal">
                {t.infoCard.title}
              </h4>
              <p className="text-sm text-[#E4E2DC] font-light leading-relaxed">
                {t.infoCard.text}
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <a
                href={siteData.links.fresha}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-shimmer px-6 py-3.5 bg-[#C6A25A] text-[#2F2F31] font-bold text-xs tracking-widest uppercase hover:bg-[#E8D5A2] transition-colors whitespace-nowrap"
              >
                {t.sectionCta}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section CTA */}
        <div className="text-center pt-4">
          <a
            href={siteData.links.fresha}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-shimmer inline-block px-10 py-4 bg-[#C6A25A] text-[#2F2F31] font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#E8D5A2] transition-colors shadow-lg"
          >
            {t.sectionCta}
          </a>
        </div>
      </div>
    </section>
  );
};
