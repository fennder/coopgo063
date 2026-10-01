import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  MessageCircle, 
  Home, 
  User, 
  Car, 
  Building2, 
  Newspaper, 
  PhoneCall, 
  ChevronRight, 
  Globe, 
  Download, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Logo } from './Logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when side drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key to close side navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Início', href: '/', icon: Home },
    { label: 'Passageiros', href: '/passageiros', icon: User },
    { label: 'Motoristas', href: '/motoristas', icon: Car },
    { label: 'A Coop63', href: '/sobre', icon: Building2 },
    { label: 'Notícias', href: '/noticias', icon: Newspaper, badge: 'Novidades' },
    { label: 'Contato', href: '/contato', icon: MessageCircle },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex items-center ${
          isScrolled ? 'bg-white shadow-md h-16 lg:h-20' : 'bg-white/95 backdrop-blur-sm h-[72px] lg:h-[88px]'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
          <Link to="/" className="z-30 h-full flex items-center py-2" aria-label="Ir para a página inicial">
            <Logo
              size="header"
              className="h-full flex items-center"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    className={({ isActive }) =>
                      `relative py-2 text-sm uppercase tracking-wide transition-colors ${
                        isActive ? 'text-brand-navy font-black' : 'text-brand-navy hover:text-brand-green font-medium'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-green rounded-full" />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/contato"
              className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-brand-navy px-5 py-2.5 rounded-full font-extrabold transition-transform hover:scale-105 shadow-sm text-sm"
            >
              <MessageCircle className="w-4 h-4 text-brand-navy" />
              <span>Fale Conosco</span>
            </Link>
          </nav>

          {/* Mobile Right Controls: Quick CTA + Hamburger */}
          <div className="flex lg:hidden items-center gap-2.5">
            <Link
              to="/passageiros"
              className="flex items-center gap-1.5 bg-brand-green text-brand-navy px-3.5 py-1.5 rounded-full font-black text-xs uppercase tracking-wider shadow-sm hover:bg-brand-green-hover active:scale-95 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 fill-brand-navy" />
              <span>Pedir App</span>
            </Link>

            <button
              className="relative p-2.5 rounded-xl bg-gray-100 text-brand-navy hover:bg-gray-200 active:scale-95 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-brand-green"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menu de navegação prioritário"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6 text-brand-navy" />
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Priority Side Navigation (Drawer) */}
      <div 
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Backdrop overlay */}
        <div 
          className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Side Drawer Panel */}
        <aside
          className={`fixed top-0 right-0 bottom-0 w-[88vw] max-w-[390px] bg-brand-navy text-white shadow-2xl flex flex-col transition-transform duration-300 ease-out transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Top Header */}
          <div className="p-5 flex items-center justify-between border-b border-white/10 bg-brand-navy-light/60">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-black/40 rounded-xl border border-white/10">
                <img
                  src="/logo-official.svg"
                  alt="Coop63"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-brand-green text-xs font-black">
                  <Globe className="w-3.5 h-3.5" />
                  <span>coop63.coop.br</span>
                </div>
                <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                  Menu Prioritário
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-gray-200 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-brand-green"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
            
            {/* PRIORITY SECTION 1: High Priority Profile Cards */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                  Prioridade • Selecione seu Perfil
                </span>
                <span className="text-[10px] font-bold text-brand-green uppercase tracking-widest bg-brand-green/10 px-2 py-0.5 rounded-full">
                  Destaque
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {/* Passageiro Priority Card */}
                <Link
                  to="/passageiros"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-brand-navy-light to-brand-navy-light/80 border border-brand-green/30 hover:border-brand-green shadow-lg transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green group-hover:scale-110 transition-transform">
                      <User className="w-6 h-6 text-brand-green" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-extrabold text-white text-base">Sou Passageiro</h4>
                        <span className="text-[10px] font-bold bg-brand-green text-brand-navy px-1.5 py-0.5 rounded">
                          Pedir
                        </span>
                      </div>
                      <p className="text-xs text-gray-300 mt-0.5">
                        Corridas com preço justo e segurança
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-brand-green group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Motorista Priority Card */}
                <Link
                  to="/motoristas"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-brand-navy-light to-brand-navy-light/80 border border-white/10 hover:border-brand-green/50 shadow-lg transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-extrabold text-white text-base">Sou Motorista</h4>
                        <span className="text-[10px] font-bold bg-white/20 text-gray-200 px-1.5 py-0.5 rounded">
                          Dirigir
                        </span>
                      </div>
                      <p className="text-xs text-gray-300 mt-0.5">
                        Menor taxa, mais lucro e cooperativismo
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-green group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* PRIORITY SECTION 2: General Navigation Links */}
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-gray-400 block mb-3">
                Navegação Principal
              </span>

              <nav className="space-y-1.5">
                {navLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={item.label}
                      to={item.href}
                      end={item.href === '/'}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3.5 py-3 rounded-xl transition-all ${
                          isActive
                            ? 'bg-brand-green/15 text-brand-green font-bold border-l-4 border-brand-green pl-3'
                            : 'text-gray-300 hover:text-white hover:bg-white/5 font-medium'
                        }`
                      }
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-current opacity-80" />
                        <span className="text-sm">{item.label}</span>
                      </div>

                      {item.badge && (
                        <span className="text-[10px] font-extrabold bg-brand-green text-brand-navy px-2 py-0.5 rounded-full uppercase tracking-wider">
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </nav>
            </div>

            {/* PRIORITY SECTION 3: Quick Direct Contact & Download */}
            <div className="pt-2 border-t border-white/10 space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-gray-400 block">
                Atendimento & Suporte
              </span>

              <Link
                to="/contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 w-full bg-brand-green hover:bg-brand-green-hover text-brand-navy py-3.5 px-4 rounded-xl font-black text-sm transition-all shadow-md active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 fill-brand-navy" />
                <span>Fale Conosco / Suporte</span>
              </Link>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href="#app-passageiro"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Download className="w-4 h-4 text-brand-green" />
                  <span className="font-semibold truncate">App Passageiro</span>
                </a>
                <a
                  href="#app-motorista"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Download className="w-4 h-4 text-brand-green" />
                  <span className="font-semibold truncate">App Motorista</span>
                </a>
              </div>
            </div>

          </div>

          {/* Drawer Bottom Footer */}
          <div className="p-4 border-t border-white/10 bg-brand-navy-light text-center">
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>Cooperativa Oficial Regulamentada</span>
            </div>
            <div className="text-[11px] text-gray-500 mt-1">
              © {new Date().getFullYear()} coop63.coop.br • Todos os direitos
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
