import React, { useState, useEffect } from 'react';
import { siteData } from '../data/siteData';

interface FloatingBookingButtonProps {
  lang: 'pt' | 'en';
}

export const FloatingBookingButton: React.FC<FloatingBookingButtonProps> = ({ lang }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Visible once scrolled past the hero section (~500px)
      setVisible(window.scrollY > 450);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={siteData.links.fresha}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on Fresha (opens in a new tab)"
      className="btn-gold-shimmer fixed bottom-6 right-6 z-40 bg-[#C6A25A] text-[#2F2F31] border border-[#E8D5A2] px-5 py-3.5 shadow-2xl flex items-center gap-2.5 font-sans font-bold text-xs sm:text-sm tracking-[0.18em] uppercase hover:bg-[#E8D5A2] transition-all hover:scale-105"
    >
      <svg className="w-4 h-4 text-[#2F2F31]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="0" strokeWidth="1.5" />
        <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.5" strokeLinecap="square" />
        <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.5" strokeLinecap="square" />
        <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.5" />
      </svg>
      <span>{lang === 'pt' ? 'Agendar' : 'Book'}</span>
    </a>
  );
};
