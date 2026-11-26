import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, ChevronRight } from 'lucide-react';
import { activePartners, hasPartners } from '../data/partnersData';
import { SeoHead } from '../components/SeoHead';
import { CTA } from '../components/CTA';
import { trackEvent } from '../utils/analytics';

export function PartnersPage() {
  return (
    <div>
      <SeoHead
        title="Parceiros | Coop63"
        description="Conheça os parceiros institucionais da Coop63."
        path="/parceiros"
        noindex={!hasPartners}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-green transition-colors">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-navy font-semibold">Parceiros</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-brand-navy py-16 lg:py-24 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green text-xs font-black uppercase tracking-wider mb-5">
            <Handshake className="w-4 h-4" />
            <span>Parcerias Coop63</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nossos <span className="text-brand-green">Parceiros</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {activePartners.map((partner) => (
              <a
                key={partner.id}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.name}
                onClick={() =>
                  trackEvent('partner_click', {
                    partner_name: partner.name,
                    placement: 'partners_page',
                  })
                }
                className="group w-full max-w-sm h-44 rounded-3xl bg-white border border-gray-200 hover:border-brand-green shadow-sm hover:shadow-xl transition-all flex items-center justify-center p-8"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-24 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
