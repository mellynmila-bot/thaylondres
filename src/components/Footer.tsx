import React from 'react';
import { siteData } from '../data/siteData';

interface FooterProps {
  onOpenLegal: (type: 'privacy' | 'cookies' | 'terms') => void;
  onOpenCookieSettings: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenCookieSettings }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#4A4A4D] border-t-2 border-[#C6A25A] text-[#F6F1E8]/75 py-14 text-[12px] sm:text-[13px] leading-relaxed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Line 1: Logo Text + Social Icons + Discrete Book Button */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <span className="font-serif text-lg font-bold tracking-wider text-[#F6F1E8] uppercase">
            Thalyta Pires Beauty
          </span>

          <div className="flex items-center gap-3">
            {/* Instagram Icon */}
            <a
              href={siteData.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Thalyta on Instagram"
              className="p-2 border border-[#C6A25A]/60 hover:border-[#C6A25A] text-[#F6F1E8] hover:text-[#C6A25A] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5" />
                <path strokeWidth="1.5" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </a>

            {/* WhatsApp Icon */}
            <a
              href={siteData.links.whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Thalyta on WhatsApp"
              className="p-2 border border-[#C6A25A]/60 hover:border-[#C6A25A] text-[#F6F1E8] hover:text-[#C6A25A] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 17.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.39 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42 1.56 1.55 2.41 3.62 2.41 5.82 0 4.54-3.7 8.25-8.24 8.25zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.71 4.3 3.8 2.53 1.08 2.53.72 2.98.68.46-.05 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
              </svg>
            </a>
          </div>

          <a
            href={siteData.links.fresha}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 border border-[#C6A25A] bg-[#C6A25A] text-[#2F2F31] font-bold text-xs uppercase tracking-widest hover:bg-[#E8D5A2] transition-colors"
          >
            Book
          </a>
        </div>

        {/* Line 2: Business Info (Continuous text, English) */}
        <div className="max-w-3xl text-[#E4E2DC]/80 mb-6 font-light">
          <span>{siteData.profile.name}</span>
          <span className="mx-2 text-[#C6A25A]">|</span>
          <span>{siteData.profile.businessType}</span>
          <span className="mx-2 text-[#C6A25A]">|</span>
          <span>{siteData.profile.locationNotice}</span>
          <span className="mx-2 text-[#C6A25A]">|</span>
          <a
            href={`mailto:${siteData.profile.email}`}
            className="hover:text-[#C6A25A] transition-colors underline underline-offset-2"
          >
            {siteData.profile.email}
          </a>
        </div>

        {/* Line 3: Legal Links separated by gold dots */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs mb-8">
          <button
            onClick={() => onOpenLegal('privacy')}
            type="button"
            className="hover:text-[#C6A25A] transition-colors uppercase tracking-wider"
          >
            Privacy Policy
          </button>
          <span className="text-[#C6A25A] select-none" aria-hidden="true">·</span>
          <button
            onClick={() => onOpenLegal('cookies')}
            type="button"
            className="hover:text-[#C6A25A] transition-colors uppercase tracking-wider"
          >
            Cookie Policy
          </button>
          <span className="text-[#C6A25A] select-none" aria-hidden="true">·</span>
          <button
            onClick={() => onOpenLegal('terms')}
            type="button"
            className="hover:text-[#C6A25A] transition-colors uppercase tracking-wider"
          >
            Terms & Conditions
          </button>
          <span className="text-[#C6A25A] select-none" aria-hidden="true">·</span>
          <button
            onClick={onOpenCookieSettings}
            type="button"
            className="hover:text-[#C6A25A] transition-colors uppercase tracking-wider underline underline-offset-2"
          >
            Cookie Settings
          </button>
        </div>

        {/* Line 4: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl pt-6 border-t border-[#6E6E70]/30 gap-4 text-xs text-[#E4E2DC]/60">
          <span>
            © 2026 Thalyta Pires Beauty. All rights reserved.
          </span>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-[#E4E2DC] hover:text-[#C6A25A] transition-colors group cursor-pointer"
          >
            <span className="uppercase tracking-wider">Back to top</span>
            <svg
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="square" strokeWidth="1.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
