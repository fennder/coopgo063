import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Contact } from '../components/Contact';

export function ContactPage() {
  return (
    <div>
      {/* Breadcrumb Header */}
      <div className="bg-gray-100 border-b border-gray-200 py-3.5">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-green transition-colors">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-navy font-semibold">Contato e Suporte</span>
          </nav>
        </div>
      </div>

      <section className="bg-brand-navy pt-20 pb-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Fale com a <span className="text-brand-green">Nossa Equipe</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para atender você com agilidade. Preencha o formulário ou use nossos canais diretos de atendimento.
          </p>
        </div>
      </section>

      <Contact />
      
      {/* Map Section */}
      <section className="bg-gray-50 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-full h-[420px] rounded-2xl overflow-hidden border border-gray-200 relative bg-gray-100">
              <iframe
                title="Mapa Google Maps - Coop63 Palmas TO"
                src="https://maps.google.com/maps?q=Palmas%2C%20TO%2C%20Brasil&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
