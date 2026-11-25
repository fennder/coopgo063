import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Handshake, ChevronRight, Tag, MapPin, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { activePartners, hasPartners } from '../data/partnersData';
import { SeoHead } from '../components/SeoHead';
import { CTA } from '../components/CTA';

export function PartnersPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(activePartners.map((p) => p.category)));
    return ['Todos', ...unique];
  }, []);

  const filteredPartners = useMemo(() => {
    if (selectedCategory === 'Todos') return activePartners;
    return activePartners.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div>
      <SeoHead
        title="Parceiros e Convênios | Coop63"
        description="Conheça os parceiros e convênios oficiais da Coop63 com vantagens exclusivas para motoristas cooperados e passageiros."
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
            <span>Rede de Parceiros Coop63</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Parceiros e <span className="text-brand-green">Convênios</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Benefícios reais e parcerias estratégicas para valorizar os motoristas cooperados e fortalecer a economia local do Tocantins.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {!hasPartners ? (
            <div className="bg-white rounded-3xl p-10 md:p-14 border border-gray-200 shadow-sm text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-brand-green/15 text-brand-green flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-3">
                Rede de Parceiros em Construção
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Em breve divulgaremos aqui as primeiras empresas parceiras com condições especiais para cooperados e passageiros da Coop63. Sua empresa quer fazer parte?
              </p>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-brand-navy font-black px-7 py-3.5 rounded-full transition-transform hover:scale-105 shadow-md"
              >
                <span>Quero ser Parceiro Coop63</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <>
              {categories.length > 2 && (
                <div className="flex flex-wrap justify-center gap-2.5 mb-12">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                        selectedCategory === cat
                          ? 'bg-brand-navy text-white shadow-md'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-green'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPartners.map((partner) => (
                  <div
                    key={partner.id}
                    className="bg-white rounded-3xl p-7 border border-gray-200 hover:border-brand-green shadow-sm hover:shadow-xl transition-all flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-5">
                      {partner.logo ? (
                        <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-200 p-2 flex items-center justify-center shrink-0 overflow-hidden">
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
                        <h2 className="text-xl font-extrabold text-brand-navy leading-snug">
                          {partner.name}
                        </h2>
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
                      <div className="flex flex-wrap gap-2.5 pt-4 border-t border-gray-100">
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
            </>
          )}
        </div>
      </section>

      <CTA />
    </div>
  );
}
