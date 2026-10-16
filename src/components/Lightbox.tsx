import React, { useEffect, useCallback } from 'react';

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  title?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  title,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery lightbox"
      className="fixed inset-0 z-50 bg-[#2F2F31]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
    >
      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-[#F6F1E8] z-10 border-b border-[#C6A25A]/20 bg-[#2F2F31]/50 backdrop-blur-xs">
        <div className="flex items-center gap-3">
          <span className="font-serif text-sm tracking-widest uppercase text-[#C6A25A]">
            {title || 'Thalyta Pires Beauty'}
          </span>
          <span className="text-xs text-[#6E6E70]">·</span>
          <span className="text-xs font-mono tabular-nums text-[#E4E2DC]">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close lightbox"
          className="p-2 text-[#E4E2DC] hover:text-[#C6A25A] hover:bg-[#4A4A4D]/40 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Main Image in Gold Frame */}
      <div className="relative max-w-4xl max-h-[82vh] w-full flex items-center justify-center p-2">
        <div className="relative border-2 border-[#C6A25A] p-1 bg-[#2F2F31] shadow-2xl">
          <img
            src={images[currentIndex]}
            alt={`Beauty showcase ${currentIndex + 1}`}
            className="max-h-[75vh] w-auto max-w-full object-contain mx-auto select-none"
          />
        </div>
      </div>

      {/* Prev Navigation Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          type="button"
          aria-label="Previous image"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 bg-[#2F2F31]/80 hover:bg-[#C6A25A] text-[#F6F1E8] hover:text-[#2F2F31] border border-[#C6A25A] transition-colors z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next Navigation Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          type="button"
          aria-label="Next image"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 bg-[#2F2F31]/80 hover:bg-[#C6A25A] text-[#F6F1E8] hover:text-[#2F2F31] border border-[#C6A25A] transition-colors z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="square" strokeWidth="1.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
};
