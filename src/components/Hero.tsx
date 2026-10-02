import React from 'react';
import heroBg from '../assets/images/hero_coop63_branded.jpg';
import { Link } from 'react-router-dom';
import { User, Car, Globe } from 'lucide-react';
import { BannerCarAnimation } from './BannerCarAnimation';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20 pb-16 lg:pb-24 overflow-hidden bg-brand-navy">
      {/* Background Image & Overlay with 70% opacity, featuring coop63.coop.br exclusively */}
      <div 
        className="absolute inset-0 z-0 opacity-70 transition-opacity duration-700"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-navy/95 via-brand-navy/70 to-transparent" />
      
      {/* Animated White Coop63 Plotted Car traversing the entire banner */}
      <BannerCarAnimation />

      {/* Curved Bottom Shape */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-white preserve-3d" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-30">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            {/* Domain Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green text-sm font-extrabold mb-6 backdrop-blur-sm shadow-sm">
              <Globe className="w-4 h-4 text-brand-green" />
              <span>coop63.coop.br</span>
              <span className="text-white/40">•</span>
              <span className="text-gray-200 font-semibold text-xs uppercase tracking-wider">Oficial</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
              Mobilidade que <span className="text-brand-green">conecta.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
              Motoristas e passageiros juntos.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              A Coop63 é uma cooperativa que fortalece a mobilidade urbana, oferecendo mais segurança, qualidade, informação e suporte para motoristas e passageiros de aplicativo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/passageiros" 
                className="flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green-hover text-brand-navy px-8 py-4 rounded-full font-extrabold text-lg transition-transform hover:scale-105 shadow-lg"
              >
                <User className="w-6 h-6 text-brand-navy" />
                <span>Sou Passageiro</span>
              </Link>
              <Link 
                to="/motoristas" 
                className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-brand-navy px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg"
              >
                <Car className="w-6 h-6" />
                <span>Sou Motorista</span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center relative shrink-0">
            <div className="relative group w-full max-w-[460px]">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-green/30 via-brand-green/10 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-500" />
              <div className="relative rounded-3xl p-6 bg-black/90 backdrop-blur-md border border-brand-green/30 shadow-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/logo-official.svg"
                  alt="Coop63 - Cooperativa de Mobilidade"
                  className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="mt-5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-brand-green/30 text-white text-sm font-bold tracking-wide shadow-lg flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
              <span className="font-extrabold text-brand-green">coop63.coop.br</span>
              <span className="text-white/40">•</span>
              <span className="text-xs uppercase tracking-wider text-gray-300">Cooperativa Oficial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
