import React from 'react';
import { User, Car } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-navy">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent" />
      
      {/* Curved Bottom Shape */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-white preserve-3d" preserveAspectRatio="none">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-30">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4">
            Mobilidade que <span className="text-brand-green">conecta.</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
            Motoristas e passageiros juntos.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            A CoopGO063 é uma cooperativa que fortalece a mobilidade urbana, oferecendo mais segurança, qualidade, informação e suporte para motoristas e passageiros de aplicativo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#passageiros" 
              className="flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg"
            >
              <User className="w-6 h-6" />
              <span>Sou Passageiro</span>
            </a>
            <a 
              href="#motoristas" 
              className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-brand-navy px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-lg"
            >
              <Car className="w-6 h-6" />
              <span>Sou Motorista</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
