import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, HeartHandshake, ShieldCheck, ChevronRight, Target, Eye } from 'lucide-react';
import { CTA } from '../components/CTA';

export function AboutPage() {
  const values = [
    {
      icon: Handshake,
      title: 'Cooperação',
      desc: 'Trabalho conjunto e união de esforços para gerar benefícios mútuos e fortalecer o desenvolvimento de todos os cooperados e usuários.',
    },
    {
      icon: HeartHandshake,
      title: 'Ética e Respeito',
      desc: 'Transparência, integridade nas relações e compromisso com a valorização contínua de motoristas, passageiros e da comunidade.',
    },
    {
      icon: ShieldCheck,
      title: 'Excelência e Segurança',
      desc: 'Alto padrão de qualidade em cada corrida, tecnologia de ponta e cuidado integral com o bem-estar e a tranquilidade de todos.',
    },
  ];

  return (
    <div>
      {/* Breadcrumb Header */}
      <div className="bg-gray-100 border-b border-gray-200 py-3.5">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-green transition-colors">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-navy font-semibold">Sobre a Coop63</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-brand-navy py-20 lg:py-28 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Nossa <span className="text-brand-green">História</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Mais do que um aplicativo, somos um movimento pela valorização da mobilidade urbana no nosso estado.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative group w-full max-w-sm">
                <div className="absolute -inset-2 bg-gradient-to-tr from-brand-green/30 to-brand-navy rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition" />
                <div className="relative w-full rounded-3xl p-6 bg-black border border-brand-green/30 shadow-xl flex items-center justify-center">
                  <img
                    src="/logo-official.svg"
                    alt="Logo Oficial Coop63"
                    className="w-full h-auto object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-2/3 text-lg text-gray-600 space-y-6 leading-relaxed">
              <p>
                A <strong>Coop63</strong> nasceu da necessidade de criar um ambiente mais justo, seguro e rentável para os motoristas de aplicativo, sem esquecer da excelência no atendimento aos passageiros. Observando as altas taxas cobradas por plataformas tradicionais e o distanciamento no suporte ao motorista, um grupo de profissionais se reuniu com um objetivo claro: fazer diferente.
              </p>
              <p>
                Somos uma cooperativa. Isso significa que não temos "donos" no modelo tradicional, mas sim cooperados. O sucesso do negócio é distribuído de forma justa entre todos que contribuem diariamente para manter a cidade em movimento.
              </p>
              <p>
                Nossa atuação visa conectar pessoas com tecnologia de ponta, fomentando o desenvolvimento local e garantindo que os recursos circulem na nossa região, fortalecendo a comunidade tocantinense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-emerald-50/50 via-gray-50 to-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-emerald-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-green hidden md:block" />
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 group-hover:bg-brand-green group-hover:text-brand-navy transition-colors duration-300">
              <Target className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <div className="text-center md:text-left flex-1">
              <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-2">Propósito Fundamental</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Missão</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                Unir e fortalecer motoristas por meio do cooperativismo, promovendo melhores oportunidades que contribuam para o desenvolvimento econômico dos cooperados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visão */}
      <section className="py-16 lg:py-20 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm flex flex-col md:flex-row items-center gap-8 group hover:bg-white/[0.08] transition-colors">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/10 text-brand-green flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-brand-green group-hover:text-brand-navy transition-colors duration-300">
              <Eye className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <div className="text-center md:text-left flex-1">
              <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-2">Rumo ao Futuro</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Visão</h2>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-semibold">
                Ser referência em cooperativismo e mobilidade no Tocantins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Nossos Valores</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Pilares fundamentais que norteiam cada decisão, serviço e relacionamento na Coop63.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((val, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center border border-gray-100 flex flex-col items-center group hover:-translate-y-1"
              >
                <div className="bg-brand-green/10 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 text-brand-green group-hover:bg-brand-green group-hover:text-brand-navy transition-colors duration-300">
                  <val.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{val.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
