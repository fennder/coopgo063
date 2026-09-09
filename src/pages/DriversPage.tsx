import React from 'react';
import { DollarSign, ShieldAlert, BookOpen, Users, Award, HeadphonesIcon } from 'lucide-react';
import { CTA } from '../components/CTA';

export function DriversPage() {
  const benefits = [
    { icon: DollarSign, title: 'Maior Rentabilidade', desc: 'Comissões justas e transparentes para você ganhar mais por corrida.' },
    { icon: ShieldAlert, title: 'Segurança em Primeiro Lugar', desc: 'Monitoramento 24h e botão de pânico integrado ao app.' },
    { icon: BookOpen, title: 'Treinamentos Contínuos', desc: 'Cursos e palestras para aprimorar seu atendimento e segurança.' },
    { icon: Users, title: 'Força da Cooperativa', desc: 'Faça parte de uma comunidade que luta pelos seus direitos.' },
    { icon: Award, title: 'Clube de Benefícios', desc: 'Descontos em postos, oficinas, farmácias e muito mais.' },
    { icon: HeadphonesIcon, title: 'Suporte Humanizado', desc: 'Atendimento presencial e online sempre que você precisar.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-navy py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Valorizamos quem <span className="text-brand-green">Move a Cidade</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Junte-se à Coop63 e descubra as vantagens de ser um motorista cooperado. Mais lucros, mais segurança e mais respeito.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Vantagens de ser Cooperado</h2>
            <p className="text-gray-600 text-lg">Tudo o que você precisa para rodar com tranquilidade e faturar mais.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((feat, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-brand-navy/10 w-14 h-14 flex items-center justify-center rounded-xl mb-6 text-brand-navy">
                  <feat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{feat.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
