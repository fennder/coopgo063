import React from 'react';
import { Contact } from '../components/Contact';

export function ContactPage() {
  return (
    <div>
      <section className="bg-brand-navy pt-20 pb-10">
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
      
      {/* Map Section (Placeholder) */}
      <section className="bg-gray-50 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-full h-[400px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
              <p className="font-medium text-lg flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Mapa Interativo - Endereço da Sede
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
