import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, ExternalLink, MessageCircle, MapPin, Tag, ArrowRight } from 'lucide-react';
import { activePartners, hasPartners } from '../data/partnersData';

export function Partners() {
  if (!hasPartners) {
    return null;
  }

  return (
    <section id="parceiros" className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/15 text-brand-navy text-xs font-black uppercase tracking-wider mb-4">
            <Handshake className="w-4 h-4 text-brand-green" />
            <span>Rede de Convênios</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Nossos <span className="text-brand-green">Parceiros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empresas e serviços credenciados que oferecem condições especiais e fortalecem o ecossistema da Coop63.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activePartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-gray-50 rounded-3xl p-7 border border-gray-200 hover:border-brand-green shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                {partner.logo ? (
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 p-2 flex items-center justify-center shrink-0 overflow-hidden">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-brand-navy text-brand-green flex items-center justify-center font-black text-2xl shrink-0">
                    {partner.name.charAt(0).toUpperCase()}
                  </div>
                )}

                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-brand-green bg-brand-navy px-2.5 py-0.5 rounded-full mb-1.5">
                    <Tag className="w-3 h-3" />
                    <span>{partner.category}</span>
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-navy leading-snug">
                    {partner.name}
                  </h3>
                </div>
              </div>

              {partner.benefit && (
                <div className="mb-4 px-4 py-2.5 rounded-xl bg-brand-green/15 border border-brand-green/30 text-brand-navy text-xs sm:text-sm font-bold">
                  {partner.benefit}
                </div>
              )}

              <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                {partner.description}
              </p>

              {partner.address && (
                <p className="text-xs text-gray-500 flex items-start gap-1.5 mb-4">
                  <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                  <span>{partner.address}</span>
                </p>
              )}

              {(partner.whatsapp || partner.website) && (
                <div className="flex flex-wrap gap-2.5 pt-4 border-t border-gray-200">
                  {partner.whatsapp && (
                    <a
                      href={`https://wa.me/${partner.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-brand-green hover:bg-brand-green-hover text-brand-navy font-extrabold text-xs px-4 py-2.5 rounded-xl transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  )}
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
                    >
                      <span>Visitar site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/parceiros"
            className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white px-7 py-3.5 rounded-full font-bold text-sm transition-colors shadow-md"
          >
            <span>Ver todos os parceiros e convênios</span>
            <ArrowRight className="w-4 h-4 text-brand-green" />
          </Link>
        </div>
      </div>
    </section>
  );
}
