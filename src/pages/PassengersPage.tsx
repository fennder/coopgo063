import React from 'react';
import passImgSrc from '../assets/images/passenger_coop63_1788912377837.jpg';
import { ShieldCheck, Clock, MapPin, CheckCircle2, Star, Smartphone } from 'lucide-react';
import { CTA } from '../components/CTA';

export function PassengersPage() {
  const features = [
    { icon: ShieldCheck, title: 'Viagens Seguras', desc: 'Motoristas rigorosamente selecionados e corridas monitoradas.' },
    { icon: Clock, title: 'Rapidez e Eficiência', desc: 'Sempre um motorista perto de você, a qualquer hora do dia.' },
    { icon: MapPin, title: 'Rotas Inteligentes', desc: 'Chegue ao seu destino mais rápido com o melhor trajeto.' },
    { icon: CheckCircle2, title: 'Preço Justo', desc: 'Valores transparentes, sem surpresas no fim da viagem.' },
    { icon: Star, title: 'Avaliações', desc: 'Sistema de notas para garantir a melhor experiência sempre.' },
    { icon: Smartphone, title: 'App Intuitivo', desc: 'Fácil de usar, desde a chamada até o pagamento.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-navy py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={passImgSrc} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Viaje com <span className="text-brand-green">Tranquilidade</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A Coop63 oferece a melhor experiência em mobilidade urbana para você chegar onde precisa com conforto, segurança e preço justo.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">Por que escolher a Coop63?</h2>
            <p className="text-gray-600 text-lg">Benefícios exclusivos para nossos passageiros.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-brand-green/10 w-14 h-14 flex items-center justify-center rounded-xl mb-6 text-brand-green">
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
