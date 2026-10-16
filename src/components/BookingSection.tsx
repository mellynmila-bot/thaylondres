import React, { useState } from 'react';
import { siteData, translations } from '../data/siteData';

interface BookingSectionProps {
  lang: 'pt' | 'en';
}

export const BookingSection: React.FC<BookingSectionProps> = ({ lang }) => {
  const t = translations[lang].booking;
  const servicesList = translations[lang].services.items;

  // Mini-form state (no <form> tag, strictly controlled state)
  const [name, setName] = useState('');
  const [selectedService, setSelectedService] = useState(servicesList[0]?.name || 'Makeup with lashes');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [reference, setReference] = useState('');
  const [notes, setNotes] = useState('');
  const [sentNotice, setSentNotice] = useState(false);

  const handleSendToWhatsApp = () => {
    // Generate pre-formatted message
    let message = t.whatsappTemplate
      .replace('{nome}', name || (lang === 'pt' ? 'Não informado' : 'Not specified'))
      .replace('{serviço}', selectedService)
      .replace('{data}', date || (lang === 'pt' ? 'A definir' : 'To be determined'))
      .replace('{horário}', time || (lang === 'pt' ? 'Flexível' : 'Flexible'))
      .replace('{local}', location || (lang === 'pt' ? 'Londres' : 'London'))
      .replace('{referência}', reference || (lang === 'pt' ? 'Enviarei na conversa' : 'Will send in chat'))
      .replace('{obs}', notes || (lang === 'pt' ? 'Sem observações' : 'None'));

    const whatsappUrl = `${siteData.links.whatsappGeneral}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSentNotice(true);
  };

  return (
    <section id="agendamento" className="py-24 bg-[#2F2F31] text-[#F6F1E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 justify-center mb-3">
            <span className="w-6 h-[1px] bg-[#C6A25A]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A25A]">
              Agendamento & Reservas
            </span>
            <span className="w-6 h-[1px] bg-[#C6A25A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F6F1E8] mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-[#E4E2DC] font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Booking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Direct Fresha Online Booking (5 cols) */}
          <div className="lg:col-span-5 bg-[#F6F1E8] border-2 border-[#C6A25A] p-7 sm:p-9 text-[#2F2F31] shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[#C6A25A]">✦</span>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8E7035]">
                  Opção 1: Direto pelo Sistema
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#2F2F31] font-normal mb-4">
                {t.col1Title}
              </h3>

              <p className="text-sm text-[#6E6E70] font-light leading-relaxed mb-6">
                {t.col1Desc}
              </p>

              {/* Fresha perks */}
              <div className="space-y-3 mb-8 pt-4 border-t border-[#C6A25A]/30">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2F2F31]">
                  <span className="text-[#C6A25A] font-bold">✓</span>
                  <span>{lang === 'pt' ? 'Escolha data e horário em tempo real' : 'Real-time calendar & availability'}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2F2F31]">
                  <span className="text-[#C6A25A] font-bold">✓</span>
                  <span>{lang === 'pt' ? 'Confirmação instantânea segura' : 'Instant & secure booking confirmation'}</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2F2F31]">
                  <span className="text-[#C6A25A] font-bold">✓</span>
                  <span>{lang === 'pt' ? 'Lembretes automáticos por e-mail e SMS' : 'Automated SMS and email reminders'}</span>
                </div>
              </div>
            </div>

            <div>
              <a
                href={siteData.links.fresha}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-shimmer block w-full py-4 bg-[#C6A25A] text-[#2F2F31] font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#E8D5A2] transition-colors text-center shadow-md mb-4"
              >
                {t.col1Btn}
              </a>

              <p className="text-xs text-[#8E7035] text-center font-medium italic">
                {t.col1Note}
              </p>
            </div>
          </div>

          {/* Column 2: WhatsApp Availability Pre-Check Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F6F1E8] border border-[#C6A25A] p-7 sm:p-9 text-[#2F2F31] shadow-xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-[#C6A25A]">✦</span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#8E7035]">
                Opção 2: Consulta Prévia
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#2F2F31] font-normal mb-2">
              {t.col2Title}
            </h3>

            <p className="text-xs sm:text-sm text-[#6E6E70] font-light leading-relaxed mb-6">
              {t.col2Subtitle}
            </p>

            {/* Interactive Form Fields without <form> */}
            <div className="space-y-4">
              {/* Row 1: Name & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#2F2F31] mb-1.5">
                    {t.form.nameLabel} *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.form.namePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#C6A25A]/50 focus:border-[#C6A25A] focus:outline-none text-xs sm:text-sm text-[#2F2F31]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#2F2F31] mb-1.5">
                    {t.form.serviceLabel} *
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#C6A25A]/50 focus:border-[#C6A25A] focus:outline-none text-xs sm:text-sm text-[#2F2F31]"
                  >
                    {servicesList.map((srv) => (
                      <option key={srv.id} value={srv.name}>
                        {srv.name} ({srv.price})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: Date & Desired Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#2F2F31] mb-1.5">
                    {t.form.dateLabel}
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#C6A25A]/50 focus:border-[#C6A25A] focus:outline-none text-xs sm:text-sm text-[#2F2F31]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase text-[#2F2F31] mb-1.5">
                    {t.form.timeLabel}
                  </label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#C6A25A]/50 focus:border-[#C6A25A] focus:outline-none text-xs sm:text-sm text-[#2F2F31]"
                  />
                </div>
              </div>

              {/* Row 3: Location / Postcode */}
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-[#2F2F31] mb-1.5">
                  {t.form.locationLabel} *
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder={t.form.locationPlaceholder}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#C6A25A]/50 focus:border-[#C6A25A] focus:outline-none text-xs sm:text-sm text-[#2F2F31]"
                />
              </div>

              {/* Row 4: Reference Makeup */}
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-[#2F2F31] mb-1.5">
                  {t.form.refLabel}
                </label>
                <input
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  placeholder={t.form.refPlaceholder}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#C6A25A]/50 focus:border-[#C6A25A] focus:outline-none text-xs sm:text-sm text-[#2F2F31]"
                />
              </div>

              {/* Row 5: Notes */}
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase text-[#2F2F31] mb-1.5">
                  {t.form.notesLabel}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={t.form.notesPlaceholder}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#C6A25A]/50 focus:border-[#C6A25A] focus:outline-none text-xs sm:text-sm text-[#2F2F31]"
                />
              </div>

              {/* Photo Notice */}
              <p className="text-xs text-[#8E7035] bg-[#C6A25A]/10 p-2.5 border-l-2 border-[#C6A25A]">
                {t.form.photoNotice}
              </p>

              {/* Submit to WhatsApp Button */}
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="btn-gold-shimmer w-full py-4 bg-[#2F2F31] text-[#E8D5A2] hover:text-[#2F2F31] hover:bg-[#C6A25A] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 border border-[#C6A25A]"
              >
                <svg className="w-5 h-5 fill-current text-[#C6A25A] group-hover:text-[#2F2F31]" viewBox="0 0 24 24">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 17.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.39 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42 1.56 1.55 2.41 3.62 2.41 5.82 0 4.54-3.7 8.25-8.24 8.25zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.12.17 1.78 2.71 4.3 3.8 2.53 1.08 2.53.72 2.98.68.46-.05 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
                </svg>
                <span>{t.form.submitBtn}</span>
              </button>

              {sentNotice && (
                <p className="text-xs text-[#8E7035] text-center font-medium">
                  {lang === 'pt'
                    ? '✓ Conversa aberta! Lembre-se de anexar a foto de referência no WhatsApp.'
                    : '✓ Chat opened! Remember to attach your reference photo in WhatsApp.'}
                </p>
              )}

              {/* Warning Notice Box with Secondary Fresha & Direct Chat CTAs */}
              <div className="pt-4 border-t border-[#C6A25A]/30">
                <p className="text-xs text-[#8E7035] leading-relaxed mb-3">
                  <strong className="text-[#2F2F31]">{t.form.warningTitle} </strong>
                  {t.form.warningText}
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={siteData.links.fresha}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 py-2.5 px-4 bg-[#C6A25A] text-[#2F2F31] font-bold text-xs tracking-wider uppercase text-center hover:bg-[#E8D5A2] transition-colors"
                  >
                    Agendar no Fresha
                  </a>
                  <a
                    href={siteData.links.whatsappGeneral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 py-2.5 px-4 border border-[#C6A25A] text-[#2F2F31] font-bold text-xs tracking-wider uppercase text-center hover:bg-[#C6A25A]/10 transition-colors"
                  >
                    {t.form.directChatBtn}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
