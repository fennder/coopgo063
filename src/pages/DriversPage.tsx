import React from 'react';
import { Link } from 'react-router-dom';
import drvImgSrc from '../assets/images/driver_coop63_1790541467022.jpg';
import { DollarSign, ShieldAlert, BookOpen, Users, Award, HeadphonesIcon, ChevronRight } from 'lucide-react';
import { CTA } from '../components/CTA';
import { AppDownload } from '../components/AppDownload';

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
      {/* Breadcrumb Header */}
      <div className="bg-gray-100 border-b border-gray-200 py-3.5">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-green transition-colors">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-navy font-semibold">Para Motoristas</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-brand-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={drvImgSrc} alt="Motorista Cooperado Coop63" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
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

      <AppDownload />
      <CTA />
    </div>
  );
}
