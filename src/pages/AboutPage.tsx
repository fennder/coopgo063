import React from 'react';
import { Users, TrendingUp, Handshake, Target } from 'lucide-react';
import { CTA } from '../components/CTA';

export function AboutPage() {
  const values = [
    { icon: Handshake, title: 'União', desc: 'Acreditamos no poder do coletivo para alcançar melhores condições para todos.' },
    { icon: Target, title: 'Transparência', desc: 'Ações e decisões claras, com prestação de contas aos associados.' },
    { icon: Users, title: 'Respeito', desc: 'Valorização humana de cada motorista e passageiro que utiliza nossos serviços.' },
    { icon: TrendingUp, title: 'Inovação', desc: 'Busca constante por melhorias tecnológicas para otimizar as viagens.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-navy py-20 lg:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
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
          <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6 leading-relaxed">
            <p>
              A <strong>Coop63</strong> nasceu da necessidade de criar um ambiente mais justo, seguro e rentável para os motoristas de aplicativo, sem esquecer da excelência no atendimento aos passageiros. Observando as altas taxas cobradas por plataformas tradicionais e o distanciamento no suporte ao motorista, um grupo de profissionais se reuniu com um objetivo claro: fazer diferente.
            </p>
            <p>
              Somos uma cooperativa. Isso significa que não temos "donos" no modelo tradicional, mas sim cooperados. O sucesso do negócio é distribuído de forma justa entre todos que contribuem diariamente para manter a cidade em movimento.
            </p>
            <p>
              Nossa missão é oferecer uma tecnologia de ponta que conecte pessoas, fomentando o desenvolvimento local e garantindo que os recursos circulem na nossa região, fortalecendo a economia e a comunidade.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-brand-navy mb-4">Nossos Valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center border border-gray-100">
                <div className="bg-brand-green/10 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto text-brand-green">
                  <val.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{val.title}</h3>
                <p className="text-gray-500 text-sm">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
