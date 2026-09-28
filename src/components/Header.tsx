import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
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

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Passageiros', href: '/passageiros' },
    { label: 'Motoristas', href: '/motoristas' },
    { label: 'A Coop63', href: '/sobre' },
    { label: 'Notícias', href: '/noticias' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center ${
        isScrolled ? 'bg-white shadow-md h-16 lg:h-20' : 'bg-white/95 backdrop-blur-sm h-[72px] lg:h-[88px]'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
        <Link to="/" className="z-50 h-full flex items-center py-2" aria-label="Ir para a página inicial">
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
            className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-brand-navy px-5 py-2.5 rounded-full font-extrabold transition-transform hover:scale-105 shadow-sm"
          >
            <MessageCircle className="w-5 h-5 text-brand-navy" />
            <span>Fale Conosco</span>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 text-brand-navy p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-300 lg:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col items-center gap-6 mb-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  end={link.href === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-2xl font-bold transition-colors ${
                      isActive ? 'text-brand-green' : 'text-brand-navy hover:text-brand-green'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-brand-navy px-8 py-4 rounded-full font-extrabold transition-transform hover:scale-105 shadow-md text-lg"
          >
            <MessageCircle className="w-6 h-6 text-brand-navy" />
            <span>Fale Conosco</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
