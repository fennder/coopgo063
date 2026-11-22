import { getStoredConsent } from './cookies';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

const GA_SCRIPT_ID = 'coop63-ga4-script';
const GA_ID_PATTERN = /^G-[A-Z0-9]+$/i;

const rawMeasurementId = (import.meta.env.VITE_GA_MEASUREMENT_ID ?? '').trim();
export const GA_MEASUREMENT_ID = GA_ID_PATTERN.test(rawMeasurementId) ? rawMeasurementId : '';

let isConfigured = false;
let lastTrackedPath: string | null = null;

export function isAnalyticsConfigured(): boolean {
  return Boolean(GA_MEASUREMENT_ID);
}

function ensureGtagStub(): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }
}

function setDefaultConsent(): void {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  ensureGtagStub();

  window.gtag?.('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  });
}

function loadGtagScript(): void {
  if (typeof document === 'undefined' || !GA_MEASUREMENT_ID) return;
  if (document.getElementById(GA_SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = GA_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(script);
}

function configureGa4(): void {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || isConfigured) return;

  ensureGtagStub();
  loadGtagScript();

  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  window.gtag?.('js', new Date());
  window.gtag?.('config', GA_MEASUREMENT_ID, {
    send_page_view: false,
    anonymize_ip: true,
    cookie_flags: 'SameSite=Lax;Secure',
  });

  isConfigured = true;
}

/**
 * Atualiza o estado de consentimento no Google Consent Mode v2 (LGPD).
 * Carrega o gtag.js apenas quando o usuário autoriza cookies analíticos.
 */
export function syncAnalyticsConsent(analyticsGranted: boolean): void {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;

  ensureGtagStub();

  if (analyticsGranted) {
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
    window.gtag?.('consent', 'update', {
      analytics_storage: 'granted',
    });
    configureGa4();
  } else {
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
    window.gtag?.('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }
}

/**
 * Inicializa o Google Analytics 4 em conformidade com o CookieConsentBanner.
 */
export function initAnalytics(): void {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;

  setDefaultConsent();

  const storedConsent = getStoredConsent();
  if (storedConsent?.analytics) {
    syncAnalyticsConsent(true);
  } else {
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  }
}

/**
 * Registra visualizações de página em navegação SPA.
 */
export function trackPageView(path: string, title?: string): void {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;

  const storedConsent = getStoredConsent();
  if (!storedConsent?.analytics) return;

  if (!isConfigured) {
    syncAnalyticsConsent(true);
  }

  if (lastTrackedPath === path) return;
  lastTrackedPath = path;

  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
}

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

/**
 * Envia eventos customizados para o GA4 respeitando o consentimento LGPD.
 */
export function trackEvent(eventName: string, params: AnalyticsEventParams = {}): void {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;

  const storedConsent = getStoredConsent();
  if (!storedConsent?.analytics) return;

  if (!isConfigured) {
    syncAnalyticsConsent(true);
  }

  const sanitizedParams: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined) {
      sanitizedParams[key] = value;
    }
  }

  window.gtag?.('event', eventName, sanitizedParams);
}

export function resetLastTrackedPath(): void {
  lastTrackedPath = null;
}
