import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, UserPlus } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden border-t border-white/10">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
          Juntos, somos <span className="text-brand-green">mais fortes.</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Conte com a Coop63 para fortalecer a mobilidade e construir novas oportunidades.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contato" 
            className="flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Fale Conosco</span>
          </Link>
          <Link 
            to="/motoristas" 
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 backdrop-blur-sm"
          >
            <UserPlus className="w-5 h-5" />
            <span>Quero ser cooperado</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
