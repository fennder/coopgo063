import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cookie, Settings, Check, X, Info } from 'lucide-react';
import { getStoredConsent, saveConsent, CookieConsentSettings } from '../utils/cookies';

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState({
    preferences: true,
    analytics: true,
  });

  useEffect(() => {
    // Verifica se o usuário já registrou consentimento
    const stored = getStoredConsent();
    if (!stored) {
      // Exibe após breve intervalo para transição suave
      const timer = setTimeout(() => setIsVisible(true), 600);
      return () => clearTimeout(timer);
    } else {
      setPreferences({
        preferences: stored.preferences,
        analytics: stored.analytics,
      });
    }

    // Listener global para reabrir o modal a partir do rodapé
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
    window.addEventListener('coop63_open_cookie_modal', handleOpenModal);
    return () => window.removeEventListener('coop63_open_cookie_modal', handleOpenModal);
  }, []);

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, preferences: true, analytics: true });
    setIsVisible(false);
    setIsModalOpen(false);
  };

  const handleAcceptNecessary = () => {
    saveConsent({ necessary: true, preferences: false, analytics: false });
    setIsVisible(false);
    setIsModalOpen(false);
  };

  const handleSaveCustom = () => {
    saveConsent({
      necessary: true,
      preferences: preferences.preferences,
      analytics: preferences.analytics,
    });
    setIsVisible(false);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Banner Principal Fixo na Base */}
      {isVisible && !isModalOpen && (
        <div
          role="region"
          aria-label="Consentimento de Cookies"
          className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-brand-navy/95 backdrop-blur-md border-t-2 border-brand-green shadow-2xl text-white transition-all transform animate-in fade-in slide-in-from-bottom duration-300"
        >
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Texto Explicativo */}
            <div className="flex items-start gap-3.5 text-left flex-1">
              <div className="p-2.5 rounded-xl bg-brand-green/20 text-brand-green shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-brand-green" />
              </div>
              <div className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                <p className="font-bold text-white mb-1">
                  Valorizamos sua privacidade e transparência
                </p>
                <p>
                  Utilizamos cookies e tecnologias semelhantes (conforme diretrizes do{' '}
                  <span className="text-brand-green font-semibold">MDN Web Docs</span> e da{' '}
                  <strong>LGPD</strong>) para garantir a segurança da navegação, lembrar suas preferências de aplicativo e aperfeiçoar nossos serviços de mobilidade. Conheça nossa{' '}
                  <Link to="/privacidade" className="text-brand-green underline hover:text-white transition-colors">
                    Política de Privacidade
                  </Link>.
                </p>
              </div>
            </div>

            {/* Ações */}
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0 justify-end">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-white/20 hover:bg-white/10 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Settings className="w-3.5 h-3.5 text-gray-300" />
                <span>Personalizar</span>
              </button>
              <button
                type="button"
                onClick={handleAcceptNecessary}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors"
              >
                Apenas Necessários
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-brand-navy font-black text-xs transition-transform active:scale-95 shadow-md"
              >
                Aceitar Todos
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Modal de Personalização Detalhada de Cookies */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 text-gray-800 relative max-h-[90vh] overflow-y-auto"
          >
            {/* Fechar */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Fechar configurações de cookies"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabeçalho */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-brand-green/15 text-brand-navy rounded-2xl">
                <Cookie className="w-6 h-6 text-brand-green" />
              </div>
              <div>
                <h3 id="cookie-modal-title" className="text-xl font-bold text-brand-navy">
                  Preferências de Cookies
                </h3>
                <p className="text-xs text-gray-500">
                  Gerencie quais categorias de cookies deseja autorizar em seu dispositivo.
                </p>
              </div>
            </div>

            {/* Lista de Categorias de Cookies */}
            <div className="space-y-4 mb-8">
              
              {/* 1. Necessários */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                    <span className="font-bold text-brand-navy text-sm">Cookies Necessários</span>
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase bg-gray-200 px-2 py-0.5 rounded-full">
                    Sempre Ativos
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Essenciais para o funcionamento básico, segurança e integridade do site (ex: controle de sessão, proteção contra requisições forjadas CSRF via diretiva <code className="text-brand-navy bg-white px-1 rounded">SameSite=Lax</code>).
                </p>
              </div>

              {/* 2. Preferências */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-brand-navy text-sm">Cookies de Preferências</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.preferences}
                      onChange={(e) => setPreferences({ ...preferences, preferences: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-green"></div>
                  </label>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Permitem que o site memorize suas escolhas (como a plataforma selecionada para baixar o aplicativo — Android ou iOS) para que você não precise escolher novamente em visitas futuras.
                </p>
              </div>

              {/* 3. Analíticos */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-brand-navy text-sm">Cookies Analíticos</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-green"></div>
                  </label>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Coletam informações estatísticas agregadas e anônimas sobre quais páginas são mais acessadas, ajudando a cooperativa a melhorar continuamente a usabilidade e a infraestrutura.
                </p>
              </div>

            </div>

            {/* Botões do Modal */}
            <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4 border-t border-gray-100">
              <button
                type="button"
                onClick={handleAcceptNecessary}
                className="px-4 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold text-xs transition-colors"
              >
                Rejeitar Opcionais
              </button>
              <button
                type="button"
                onClick={handleSaveCustom}
                className="px-5 py-2.5 rounded-xl bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-xs transition-colors shadow-sm"
              >
                Salvar Minhas Escolhas
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-5 py-2.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-brand-navy font-black text-xs transition-transform active:scale-95 shadow-md"
              >
                Aceitar Todos
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Botão Flutuante Discreto para Reabrir Preferências de Cookies */}
      {!isVisible && (
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          aria-label="Abrir configurações de cookies"
          title="Configurações de Cookies"
          className="fixed bottom-4 left-4 z-40 p-2.5 rounded-full bg-brand-navy/90 hover:bg-brand-navy text-brand-green border border-brand-green/30 shadow-lg hover:scale-110 transition-all group"
        >
          <Cookie className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </>
  );
}
