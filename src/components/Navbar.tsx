import React, { useState, useEffect } from 'react';
import { siteData, translations } from '../data/siteData';

interface NavbarProps {
  lang: 'pt' | 'en';
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.services, href: '#servicos' },
    { label: t.gallery, href: '#galeria' },
    { label: t.about, href: '#sobre' },
    { label: t.course, href: '#curso' },
    { label: t.instagram, href: '#instagram' },
    { label: t.reviews, href: '#avaliacoes' },
    { label: t.studio, href: '#studio' },
    { label: t.faq, href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6F1E8]/95 backdrop-blur-md border-b border-[#C6A25A]/40 shadow-sm py-3'
          : 'bg-[#F6F1E8]/80 backdrop-blur-sm border-b border-[#C6A25A]/15 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 md:gap-8">
        {/* Brand Zone */}
        <a href="#" className="flex flex-col group shrink-0">
          <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#2F2F31] group-hover:text-[#C6A25A] transition-colors leading-none">
            Thalyta Pires
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#6E6E70] mt-0.5 sm:mt-1 font-sans">
            Beauty · Makeup & Hair
          </span>
        </a>

        {/* Desktop Nav Links - Strictly hidden on mobile */}
        <nav className="hidden xl:flex items-center gap-6 text-[13px] font-medium tracking-wider uppercase text-[#2F2F31]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#C6A25A] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C6A25A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions Zone: Language pill + Agendar CTA + Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Highlighted Language Toggle Button (Always visible on mobile next to hamburger) */}
          <button
            onClick={onToggleLang}
            type="button"
            aria-label="Switch language"
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 border border-[#C6A25A] bg-[#F6F1E8] hover:bg-[#EAE2D3] text-[#2F2F31] text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-colors shadow-xs"
          >
            <span className="text-xs sm:text-sm">{t.langFlag}</span>
            <span className="hidden sm:inline font-sans">{t.langToggle}</span>
            <span className="sm:hidden font-sans font-bold">{lang === 'pt' ? 'EN' : 'PT'}</span>
          </button>

          {/* Primary CTA Book Now (Fresha) */}
          <a
            href={siteData.links.fresha}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-shimmer px-2.5 sm:px-5 py-1.5 sm:py-2 bg-[#C6A25A] text-[#2F2F31] font-semibold text-[11px] sm:text-sm tracking-wider sm:tracking-widest uppercase hover:bg-[#E8D5A2] transition-colors shadow-xs whitespace-nowrap"
          >
            {t.bookNow}
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="xl:hidden p-1.5 sm:p-2 text-[#2F2F31] hover:text-[#C6A25A] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F6F1E8] border-b border-[#C6A25A] px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-widest uppercase text-[#2F2F31] hover:text-[#C6A25A] py-1 border-b border-[#C6A25A]/15 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={siteData.links.fresha}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-gold-shimmer w-full text-center py-3 bg-[#C6A25A] text-[#2F2F31] font-bold text-sm tracking-widest uppercase hover:bg-[#E8D5A2] transition-colors"
              >
                {t.bookNow} (Fresha)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
