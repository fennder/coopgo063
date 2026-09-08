import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy pt-20 pb-8 border-t-4 border-brand-green">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Logo className="text-white bg-white/5 p-4 rounded-xl inline-flex" />
            <p className="text-gray-400 text-sm leading-relaxed">
              A Coop63 é uma cooperativa dedicada a transformar a mobilidade urbana, unindo motoristas e passageiros em um ambiente de segurança, respeito e qualidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-green transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Links Rápidos
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-green rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-brand-green transition-colors">Início</a></li>
              <li><a href="#passageiros" className="text-gray-400 hover:text-brand-green transition-colors">Para Passageiros</a></li>
              <li><a href="#motoristas" className="text-gray-400 hover:text-brand-green transition-colors">Para Motoristas</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-brand-green transition-colors">Sobre a Coop63</a></li>
              <li><a href="#noticias" className="text-gray-400 hover:text-brand-green transition-colors">Notícias e Comunicados</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Contato
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-green rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-400">(00) 00000-0000 <br/> (00) 0000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-green shrink-0" />
                <span className="text-gray-400">contato@coop63.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span className="text-gray-400">Endereço Oficial da Sede,<br/>Cidade - UF</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Action */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Fale Conosco
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-green rounded-full"></span>
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Precisa de ajuda rápida? Chame nossa equipe de suporte no WhatsApp.
            </p>
            <a 
              href="#contato"
              className="inline-flex items-center justify-center gap-2 w-full bg-brand-green hover:bg-brand-green-hover text-white px-6 py-3 rounded-xl font-bold transition-colors"
            >
              Atendimento WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Coop63. Todos os direitos reservados.
          </p>
          <p className="text-brand-green font-medium text-sm text-center">
            Coop63 — Juntos por uma mobilidade melhor!
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
