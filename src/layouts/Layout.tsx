import React, { useEffect } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CookieConsentBanner } from '../components/CookieConsentBanner';
import { ComunicadoModal } from '../components/ComunicadoModal';
import { CookieConsentSettings } from '../utils/cookies';
import { initAnalytics, resetLastTrackedPath, syncAnalyticsConsent, trackPageView } from '../utils/analytics';

export function Layout() {
  const { pathname, search } = useLocation();
  const currentPath = `${pathname}${search}`;

  useEffect(() => {
    initAnalytics();

    const handleConsentUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<CookieConsentSettings>;
      const granted = Boolean(customEvent.detail?.analytics);
      syncAnalyticsConsent(granted);

      if (granted) {
        resetLastTrackedPath();
        trackPageView(`${window.location.pathname}${window.location.search}`, document.title);
      }
    };

    window.addEventListener('coop63_cookie_consent_updated', handleConsentUpdate);
    return () => {
      window.removeEventListener('coop63_cookie_consent_updated', handleConsentUpdate);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Aguarda a atualização de <title> pelo SeoHead antes de enviar o page_view
    const timer = window.setTimeout(() => {
      trackPageView(currentPath, document.title);
    }, 50);

    return () => window.clearTimeout(timer);
  }, [currentPath]);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <Header />
      <main className="flex-grow pt-[72px] lg:pt-[88px]">
        <Outlet />
      </main>
      <Footer />
      <CookieConsentBanner />
      <ComunicadoModal />
      <ScrollRestoration />
    </div>
  );
}
