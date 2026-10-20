import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy pt-20 pb-20 md:pb-28 border-t-4 border-brand-green">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block" aria-label="Página Inicial">
              <Logo size="lg" inverted={true} className="text-white bg-white/5 p-4 rounded-2xl inline-flex border border-white/10 hover:bg-white/10 transition-colors" />
            </Link>

            <div className="space-y-1 text-xs border-l-2 border-brand-green pl-3 py-1">
              <p className="text-gray-200 font-extrabold tracking-wide uppercase leading-snug">
                COOPGO63 COOPERATIVA DE TRANSPORTE PRIVADO DE PASSAGEIROS DO ESTADO DO TOCANTINS
              </p>
              <p className="text-brand-green font-bold text-xs tracking-wider">
                CNPJ: <span className="text-gray-300 font-semibold">68.699.797/0001-09</span>
              </p>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              A Coop63 é uma cooperativa dedicada a transformar a mobilidade urbana, unindo motoristas e passageiros em um ambiente de segurança, respeito e qualidade.
            </p>
            <div className="flex gap-4">
              <span 
                aria-label="Instagram da Coop63"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white"
              >
                <Instagram className="w-5 h-5" />
              </span>
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </span>
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Links Rápidos
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-green rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-brand-green transition-colors">Início</Link></li>
              <li><Link to="/passageiros" className="text-gray-400 hover:text-brand-green transition-colors">Para Passageiros</Link></li>
              <li><Link to="/motoristas" className="text-gray-400 hover:text-brand-green transition-colors">Para Motoristas</Link></li>
              <li><Link to="/sobre" className="text-gray-400 hover:text-brand-green transition-colors">Sobre a Coop63</Link></li>
              <li><Link to="/noticias" className="text-gray-400 hover:text-brand-green transition-colors">Notícias e Comunicados</Link></li>
              <li><Link to="/contato" className="text-gray-400 hover:text-brand-green transition-colors">Fale Conosco</Link></li>
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
                <span className="text-gray-400">(63) 98498-4085</span>
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

          {/* Horário de Funcionamento 24/7 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Horário de Funcionamento
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-green rounded-full"></span>
            </h4>
            
            <div className="bg-white/5 border border-brand-green/30 rounded-2xl p-4 mb-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-brand-green/10 rounded-xl text-brand-green shrink-0">
                  <Clock className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-bold block">Disponibilidade</span>
                  <span className="text-white font-extrabold text-base flex items-center gap-2">
                    Atendimento 24/7
                    <span className="text-[10px] bg-brand-green text-brand-navy px-2 py-0.5 rounded-full font-black">24 HORAS</span>
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Corridas e suporte cooperativo ativos todos os dias da semana, 24 horas por dia.
              </p>
            </div>

            <a 
              href="https://wa.me/5563984984085?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Coop63!"
              className="inline-flex items-center justify-center gap-2 w-full bg-brand-green hover:bg-brand-green-hover text-brand-navy px-6 py-3 rounded-xl font-extrabold transition-colors shadow-md"
            >
              Atendimento WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} Coop63 • CNPJ: 68.699.797/0001-09. Todos os direitos reservados.
          </p>
          <p className="text-brand-green font-medium text-sm text-center">
            Coop63 — Juntos por uma mobilidade melhor!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-sm">
            <Link to="/termos" className="text-gray-400 hover:text-brand-green font-medium transition-colors">Termos de Uso</Link>
            <span className="text-gray-700">•</span>
            <Link to="/privacidade" className="text-gray-400 hover:text-brand-green font-medium transition-colors">Privacidade</Link>
            <span className="text-gray-700">•</span>
            <span className="text-gray-400">
              Desenvolvido por{' '}
              <span className="text-brand-green font-medium">
                abrindoportas.tec.br
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
