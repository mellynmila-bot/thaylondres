import React, { useEffect, useCallback } from 'react';
import { legalData } from '../data/legalData';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'cookies' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !type) return null;

  const doc = legalData[type];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 bg-[#2F2F31]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#F6F1E8] border-2 border-[#C6A25A] shadow-2xl flex flex-col text-[#2F2F31]">
        {/* Header */}
        <div className="p-6 border-b border-[#C6A25A]/30 flex items-center justify-between bg-[#EAE2D3]">
          <div>
            <h2 id="legal-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#2F2F31]">
              {doc.title}
            </h2>
            <span className="text-xs text-[#8E7035] uppercase tracking-wider block mt-1">
              Last updated: {doc.lastUpdated} • England & Wales
            </span>
          </div>

          <button
            onClick={onClose}
            type="button"
            aria-label="Close legal modal"
            className="p-2 border border-[#C6A25A] hover:bg-[#C6A25A] text-[#2F2F31] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#4A4A4D] font-light leading-relaxed">
          {doc.sections.map((section, idx) => (
            <div key={idx} className="pb-4 border-b border-[#C6A25A]/15 last:border-b-0">
              <h3 className="font-serif text-lg font-bold text-[#2F2F31] mb-2">
                {section.heading}
              </h3>
              {Array.isArray(section.content) ? (
                <div className="space-y-1.5">
                  {section.content.map((line, lIdx) => (
                    <p key={lIdx} className="leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="leading-relaxed">{section.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#C6A25A]/30 bg-[#EAE2D3] flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-6 py-2.5 bg-[#C6A25A] text-[#2F2F31] font-bold text-xs uppercase tracking-widest hover:bg-[#E8D5A2] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
