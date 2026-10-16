import React, { useState } from 'react';
import { translations } from '../data/siteData';

interface CookieBannerProps {
  lang: 'pt' | 'en';
  showBanner: boolean;
  isSettingsOpen: boolean;
  hasThirdPartyConsent: boolean;
  onAcceptAll: () => void;
  onRejectNonEssential: () => void;
  onSaveCustomSettings: (thirdPartyConsent: boolean) => void;
  onCloseSettings: () => void;
  onOpenSettings: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  lang,
  showBanner,
  isSettingsOpen,
  hasThirdPartyConsent,
  onAcceptAll,
  onRejectNonEssential,
  onSaveCustomSettings,
  onCloseSettings,
  onOpenSettings,
}) => {
  const t = translations[lang].cookie;
  const [tempConsent, setTempConsent] = useState(hasThirdPartyConsent);

  return (
    <>
      {/* Discreet Bottom Cookie Banner */}
      {showBanner && !isSettingsOpen && (
        <aside
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#2F2F31]/95 backdrop-blur-md border-t-2 border-[#C6A25A] text-[#F6F1E8] shadow-2xl animate-in slide-in-from-bottom duration-300"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left max-w-3xl">
              <span className="font-serif text-sm font-bold text-[#E8D5A2] uppercase tracking-wider block mb-1">
                {t.title}
              </span>
              <p className="text-xs sm:text-[13px] text-[#E4E2DC] font-light leading-snug">
                {t.text}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 shrink-0">
              <button
                onClick={onAcceptAll}
                type="button"
                className="btn-gold-shimmer px-4 py-2 bg-[#C6A25A] text-[#2F2F31] font-bold text-xs uppercase tracking-wider hover:bg-[#E8D5A2] transition-colors whitespace-nowrap"
              >
                {t.acceptAll}
              </button>

              <button
                onClick={onRejectNonEssential}
                type="button"
                className="px-4 py-2 border border-[#4A4A4D] hover:border-[#C6A25A] bg-[#2F2F31] text-[#E4E2DC] text-xs font-semibold uppercase tracking-wider transition-colors whitespace-nowrap"
              >
                {t.rejectNonEssential}
              </button>

              <button
                onClick={onOpenSettings}
                type="button"
                className="px-3 py-2 text-xs text-[#E8D5A2] hover:text-white uppercase tracking-wider underline underline-offset-2 whitespace-nowrap"
              >
                {t.settings}
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-settings-title"
          className="fixed inset-0 z-50 bg-[#2F2F31]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div className="w-full max-w-lg bg-[#F6F1E8] border-2 border-[#C6A25A] p-6 sm:p-8 text-[#2F2F31] shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#C6A25A]/30">
              <h3 id="cookie-settings-title" className="font-serif text-2xl font-bold text-[#2F2F31]">
                {lang === 'pt' ? 'Preferências de Cookies' : 'Cookie Preferences'}
              </h3>
              <button
                onClick={onCloseSettings}
                type="button"
                className="p-1 hover:text-[#C6A25A]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4 mb-6 text-xs sm:text-sm text-[#4A4A4D]">
              {/* Category 1: Strictly Necessary */}
              <div className="p-3 bg-[#EAE2D3] border border-[#C6A25A]/20 flex items-start justify-between gap-3">
                <div>
                  <span className="font-bold text-[#2F2F31] block">
                    {lang === 'pt' ? 'Cookies Estritamente Necessários' : 'Strictly Necessary Cookies'}
                  </span>
                  <span className="text-xs text-[#6E6E70]">
                    {lang === 'pt'
                      ? 'Essenciais para o funcionamento seguro e idioma do site.'
                      : 'Essential for site operation, language preferences, and security.'}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#8E7035] uppercase bg-white/70 px-2 py-1">
                  {lang === 'pt' ? 'Sempre ativos' : 'Always Active'}
                </span>
              </div>

              {/* Category 2: Third-Party Embeds */}
              <div className="p-3 bg-[#EAE2D3] border border-[#C6A25A]/20 flex items-start justify-between gap-3">
                <div>
                  <span className="font-bold text-[#2F2F31] block">
                    {lang === 'pt' ? 'Embeds de Terceiros (Instagram & Maps)' : 'Third-Party Embeds (Instagram & Maps)'}
                  </span>
                  <span className="text-xs text-[#6E6E70]">
                    {lang === 'pt'
                      ? 'Permite a reprodução do vídeo do Instagram e o mapa interativo de Londres.'
                      : 'Allows loading the interactive Instagram Reel and London coverage map.'}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={tempConsent}
                  onChange={(e) => setTempConsent(e.target.checked)}
                  className="w-5 h-5 accent-[#C6A25A] cursor-pointer mt-1"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#C6A25A]/30">
              <button
                onClick={onCloseSettings}
                type="button"
                className="px-4 py-2 border border-[#C6A25A] text-xs font-bold uppercase tracking-wider text-[#2F2F31]"
              >
                {lang === 'pt' ? 'Cancelar' : 'Cancel'}
              </button>
              <button
                onClick={() => onSaveCustomSettings(tempConsent)}
                type="button"
                className="btn-gold-shimmer px-5 py-2 bg-[#C6A25A] text-[#2F2F31] text-xs font-bold uppercase tracking-wider hover:bg-[#E8D5A2]"
              >
                {lang === 'pt' ? 'Salvar preferências' : 'Save Preferences'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
