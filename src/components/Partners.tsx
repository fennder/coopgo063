import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Handshake } from 'lucide-react';
import { activePartners, hasPartners } from '../data/partnersData';
import { trackEvent } from '../utils/analytics';

export function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = activePartners.length;

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (total <= 1 || isPaused) return;
    const interval = window.setInterval(handleNext, 4500);
    return () => window.clearInterval(interval);
  }, [total, isPaused, handleNext]);

  if (!hasPartners) {
    return null;
  }

  return (
    <section
      id="parceiros"
      className="py-20 bg-white border-t border-gray-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/15 text-brand-navy text-xs font-black uppercase tracking-wider mb-4">
            <Handshake className="w-4 h-4 text-brand-green" />
            <span>Parcerias</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy">
            Nossos <span className="text-brand-green">Parceiros</span>
          </h2>
        </div>

        {/* Carrossel de Parceiros */}
        <div className="relative max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={handlePrev}
              disabled={total <= 1}
              aria-label="Parceiro anterior"
              className={`p-2.5 sm:p-3 rounded-full border transition-all shrink-0 ${
                total > 1
                  ? 'bg-white border-gray-200 text-brand-navy hover:border-brand-green hover:bg-brand-green/10 shadow-sm cursor-pointer'
                  : 'bg-gray-50 border-gray-100 text-gray-300 cursor-default'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="w-full overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {activePartners.map((partner) => (
                  <div
                    key={partner.id}
                    className="w-full shrink-0 flex items-center justify-center px-2 py-2"
                  >
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={partner.name}
                      onClick={() =>
                        trackEvent('partner_click', {
                          partner_name: partner.name,
                          placement: 'home_carousel',
                        })
                      }
                      className="group w-full max-w-md h-36 sm:h-40 rounded-3xl bg-white border border-gray-200 hover:border-brand-green shadow-sm hover:shadow-xl transition-all flex items-center justify-center p-6 sm:p-8"
                    >
                      <img
                        src={partner.image}
                        alt={partner.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-20 sm:max-h-24 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={total <= 1}
              aria-label="Próximo parceiro"
              className={`p-2.5 sm:p-3 rounded-full border transition-all shrink-0 ${
                total > 1
                  ? 'bg-white border-gray-200 text-brand-navy hover:border-brand-green hover:bg-brand-green/10 shadow-sm cursor-pointer'
                  : 'bg-gray-50 border-gray-100 text-gray-300 cursor-default'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicadores do Carrossel */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {activePartners.map((partner, idx) => (
              <button
                key={partner.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para ${partner.name}`}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === idx
                    ? 'w-7 bg-brand-green'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
