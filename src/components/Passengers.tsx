import React from 'react';
import { User, CheckCircle2, ShieldCheck, Clock, Info } from 'lucide-react';

export function Passengers() {
  const benefits = [
    { icon: ShieldCheck, text: 'Motoristas cadastrados e verificados' },
    { icon: CheckCircle2, text: 'Suporte e atendimento da cooperativa' },
    { icon: Info, text: 'Informações claras' },
    { icon: Clock, text: 'Atendimento rápido e eficiente' },
  ];

  return (
    <section id="passageiros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1593950315186-76a92975b60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Passageira usando aplicativo" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center justify-center p-4 bg-brand-green/10 rounded-2xl mb-6">
              <User className="w-10 h-10 text-brand-green" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
              Para <span className="text-brand-green">Passageiros</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-medium">
              Mais segurança, praticidade e confiança em cada viagem.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="bg-brand-green/10 p-2 rounded-full text-brand-green shrink-0">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <span className="text-gray-700 font-medium text-lg">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#contato" 
              className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-md"
            >
              <span>Saiba mais</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
