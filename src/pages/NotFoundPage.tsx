import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Navigation, Phone, Users, Car } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 bg-gray-50">
      <div className="max-w-xl w-full text-center bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
        <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
          <Navigation className="w-10 h-10 rotate-45" />
        </div>
        
        <span className="text-brand-green font-black text-6xl block mb-2">404</span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-brand-navy mb-4">
          Rota não encontrada
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Parece que você pegou um desvio! A página que você está procurando não existe ou mudou de endereço.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-hover text-brand-navy px-6 py-3 rounded-full font-extrabold transition-transform hover:scale-105 shadow-md"
          >
            <Home className="w-5 h-5" />
            <span>Voltar ao Início</span>
          </Link>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-md"
          >
            <Phone className="w-5 h-5" />
            <span>Fale Conosco</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-gray-100">
          <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3">Rotas Principais</p>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <Link to="/passageiros" className="px-3 py-1.5 bg-gray-100 hover:bg-brand-green/10 hover:text-brand-green text-gray-700 rounded-lg transition-colors font-medium">
              Passageiros
            </Link>
            <Link to="/motoristas" className="px-3 py-1.5 bg-gray-100 hover:bg-brand-green/10 hover:text-brand-green text-gray-700 rounded-lg transition-colors font-medium">
              Motoristas
            </Link>
            <Link to="/sobre" className="px-3 py-1.5 bg-gray-100 hover:bg-brand-green/10 hover:text-brand-green text-gray-700 rounded-lg transition-colors font-medium">
              A Coop63
            </Link>
            <Link to="/noticias" className="px-3 py-1.5 bg-gray-100 hover:bg-brand-green/10 hover:text-brand-green text-gray-700 rounded-lg transition-colors font-medium">
              Notícias
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
