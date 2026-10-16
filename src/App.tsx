import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GoldenMarquee } from './components/GoldenMarquee';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Course } from './components/Course';
import { InstagramSection } from './components/InstagramSection';
import { Feedbacks } from './components/Feedbacks';
import { StudioSection } from './components/StudioSection';
import { BookingSection } from './components/BookingSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';
import { FloatingBookingButton } from './components/FloatingBookingButton';

export default function App() {
  // 1. Language State (PT default, persistent in localStorage with try/catch)
  const [lang, setLang] = useState<'pt' | 'en'>(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang === 'en' || urlLang === 'pt') return urlLang;
      const stored = localStorage.getItem('thalyta_lang');
      if (stored === 'en' || stored === 'pt') return stored;
    } catch {
      // Fallback
    }
    return 'pt';
  });

  // Keep <html lang>, <title> and meta description in sync with active language
  useEffect(() => {
    try {
      localStorage.setItem('thalyta_lang', lang);
    } catch {
      // Ignore localStorage error
    }

    if (lang === 'pt') {
      document.documentElement.lang = 'pt-BR';
      document.title = 'Thalyta Pires Beauty | Maquiadora Brasileira em Londres, Atendimento a Domicílio';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Maquiagem social, penteados e curso de automaquiagem em Londres, a domicílio. Reserve online com a Thalyta Pires.');
      }
    } else {
      document.documentElement.lang = 'en-GB';
      document.title = 'Thalyta Pires Beauty | Mobile Makeup Artist & Hair Stylist in London';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Social makeup, hairstyling and self-makeup lessons in London, with luxury finish, at your home. Book online with Thalyta Pires.');
      }
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  // 2. Cookie Consent State (PECR Compliance)
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [isCookieSettingsOpen, setIsCookieSettingsOpen] = useState(false);
  const [hasThirdPartyConsent, setHasThirdPartyConsent] = useState(false);

  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem('thalyta_cookie_consent');
      if (storedConsent === null) {
        setShowCookieBanner(true);
      } else {
        setHasThirdPartyConsent(storedConsent === 'all');
      }
    } catch {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptAllCookies = () => {
    try {
      localStorage.setItem('thalyta_cookie_consent', 'all');
    } catch {
      // ignore
    }
    setHasThirdPartyConsent(true);
    setShowCookieBanner(false);
    setIsCookieSettingsOpen(false);
  };

  const handleRejectNonEssentialCookies = () => {
    try {
      localStorage.setItem('thalyta_cookie_consent', 'necessary_only');
    } catch {
      // ignore
    }
    setHasThirdPartyConsent(false);
    setShowCookieBanner(false);
    setIsCookieSettingsOpen(false);
  };

  const handleSaveCustomSettings = (consent: boolean) => {
    try {
      localStorage.setItem('thalyta_cookie_consent', consent ? 'all' : 'necessary_only');
    } catch {
      // ignore
    }
    setHasThirdPartyConsent(consent);
    setShowCookieBanner(false);
    setIsCookieSettingsOpen(false);
  };

  // 3. Legal Modal State
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'cookies' | 'terms' | null>(null);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#F6F1E8] text-[#2F2F31] flex flex-col font-sans selection:bg-[#C6A25A]/25 selection:text-[#2F2F31]">
      {/* Fixed Navigation Bar */}
      <Navbar lang={lang} onToggleLang={toggleLanguage} />

      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* Section 1: Hero */}
        <Hero lang={lang} />

        {/* Section 2 Divider: Golden Marquee Ribbon */}
        <GoldenMarquee lang={lang} />

        {/* Section 2: Serviços (Cinza grafite) */}
        <Services lang={lang} />

        {/* Section 3: Galeria (Bege claro) */}
        <Gallery lang={lang} />

        {/* Section 4: Sobre (Cinza névoa) */}
        <About lang={lang} />

        {/* Section 5: Curso de Automaquiagem (Bege perolado) */}
        <Course lang={lang} />

        {/* Section 6: Instagram (Cinza grafite) */}
        <InstagramSection
          lang={lang}
          hasThirdPartyConsent={hasThirdPartyConsent}
          onAcceptThirdPartyCookies={handleAcceptAllCookies}
        />

        {/* Section 7: Feedbacks (Bege claro) */}
        <Feedbacks lang={lang} />

        {/* Section 8: Studio / Atendimento a domicílio (Cinza névoa) */}
        <StudioSection
          lang={lang}
          hasThirdPartyConsent={hasThirdPartyConsent}
          onAcceptThirdPartyCookies={handleAcceptAllCookies}
        />

        {/* Section 9: Agendamento (Cinza grafite) */}
        <BookingSection lang={lang} />

        {/* Section 10: FAQ (Bege claro) */}
        <FAQ lang={lang} />
      </main>

      {/* Section 11: Rodapé Legal (Cinza chumbo, em inglês) */}
      <Footer
        onOpenLegal={(type) => setActiveLegalModal(type)}
        onOpenCookieSettings={() => setIsCookieSettingsOpen(true)}
      />

      {/* Floating CTA (Fresha) bottom right */}
      <FloatingBookingButton lang={lang} />

      {/* Legal Document Modal (Privacy Policy, Cookie Policy, Terms) */}
      <LegalModal
        isOpen={activeLegalModal !== null}
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />

      {/* Cookie Consent Banner & Settings Modal */}
      <CookieBanner
        lang={lang}
        showBanner={showCookieBanner}
        isSettingsOpen={isCookieSettingsOpen}
        hasThirdPartyConsent={hasThirdPartyConsent}
        onAcceptAll={handleAcceptAllCookies}
        onRejectNonEssential={handleRejectNonEssentialCookies}
        onSaveCustomSettings={handleSaveCustomSettings}
        onCloseSettings={() => setIsCookieSettingsOpen(false)}
        onOpenSettings={() => setIsCookieSettingsOpen(true)}
      />
    </div>
  );
}
