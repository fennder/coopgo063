import React from 'react';
import { Link } from 'react-router-dom';
import passImgSrc from '../assets/images/passageira_natural_1791509954174.jpg';
import { ShieldCheck, Clock, MapPin, CheckCircle2, Star, Smartphone, ChevronRight } from 'lucide-react';
import { CTA } from '../components/CTA';
import { AppDownload } from '../components/AppDownload';

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
      {/* Breadcrumb Header */}
      <div className="bg-gray-100 border-b border-gray-200 py-3.5">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-green transition-colors">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-navy font-semibold">Para Passageiros</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-brand-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src={passImgSrc} alt="Passageiros Coop63" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Viaje com <span className="text-brand-green">Tranquilidade</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A Coop63 oferece a melhor experiência em mobilidade urbana para você chegar onde precisa com conforto, segurança e preço justo.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=br.com.coop63.passenger.drivermachine&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-green hover:bg-brand-green-hover text-brand-navy px-8 py-4 rounded-full font-black text-base shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              <svg viewBox="0 0 512 512" fill="currentColor" className="w-5 h-5 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              <span>Baixar App Passageiro no Google Play</span>
            </a>
          </div>
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

      <AppDownload />
      <CTA />
    </div>
  );
}
