import React from 'react';
import { ShieldCheck, Users, TrendingUp, HeartHandshake } from 'lucide-react';

export function About() {
  const indicators = [
    { icon: ShieldCheck, title: 'Mais segurança', desc: 'Para passageiros e motoristas.' },
    { icon: Users, title: 'Força coletiva', desc: 'Juntos somos mais fortes.' },
    { icon: TrendingUp, title: 'Oportunidades', desc: 'Para um futuro melhor.' },
    { icon: HeartHandshake, title: 'Respeito', desc: 'A todos os associados e usuários.' },
  ];

  return (
    <section id="sobre" className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6">
              Sobre a <br className="hidden lg:block"/>
              <span className="text-brand-green">CoopGO063</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Somos uma cooperativa de motoristas de aplicativo criada para unir forças, gerar oportunidades e contribuir para uma mobilidade de qualidade para todos.
            </p>
            <a 
              href="#contato" 
              className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white px-8 py-4 rounded-full font-bold transition-colors shadow-md"
            >
              <span>Conheça a Coop</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {indicators.map((indicator, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100 flex flex-col items-center">
                  <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-6 text-brand-green">
                    <indicator.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{indicator.title}</h3>
                  <p className="text-gray-500 text-sm">{indicator.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
