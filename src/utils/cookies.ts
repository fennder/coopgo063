/**
 * Utilitário de Gerenciamento de Cookies
 * Em estrita conformidade com a documentação MDN Web Docs:
 * https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Guides/Cookies
 */

export interface CookieOptions {
  /** Tempo de vida em segundos (Max-Age) */
  maxAge?: number;
  /** Data de expiração explícita */
  expires?: Date;
  /** Caminho de escopo do cookie (padrão: '/') */
  path?: string;
  /** Domínio de escopo */
  domain?: string;
  /** Atributo Secure para transmissão apenas via HTTPS */
  secure?: boolean;
  /** Controle SameSite para proteção contra ataques CSRF (padrão: 'Lax') */
  sameSite?: 'Lax' | 'Strict' | 'None';
}

export interface CookieConsentSettings {
  /** Essenciais para funcionamento e segurança da plataforma (sempre true) */
  necessary: boolean;
  /** Preferências de interface e escolhas do usuário (ex: plataforma mobile) */
  preferences: boolean;
  /** Análise e estatísticas agregadas de navegação */
  analytics: boolean;
  /** Data do registro do consentimento em formato ISO */
  timestamp: string;
}

export const COOKIE_CONSENT_KEY = 'coop63_cookie_consent';
export const COOKIE_PLATFORM_KEY = 'coop63_app_platform';

/**
 * Obtém o valor de um cookie pelo seu nome.
 */
export function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  const cookieString = document.cookie;
  if (!cookieString) return null;

  const cookies = cookieString.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      try {
        return decodeURIComponent(cookie.substring(name.length + 1));
      } catch {
        return cookie.substring(name.length + 1);
      }
    }
  }
  return null;
}

/**
 * Define ou atualiza um cookie com diretivas de segurança modernas do MDN:
 * - Path=/
 * - SameSite=Lax (mitigação de CSRF)
 * - Secure (ativado em conexões HTTPS)
 * - Max-Age em segundos
 */
export function setCookie(name: string, value: string, options: CookieOptions = {}): void {
  if (typeof document === 'undefined') return;

  const {
    maxAge = 60 * 60 * 24 * 365, // 1 ano por padrão
    path = '/',
    domain,
    sameSite = 'Lax',
    secure = typeof window !== 'undefined' && window.location.protocol === 'https:',
  } = options;

  let cookieString = `${name}=${encodeURIComponent(value)}`;

  if (maxAge !== undefined) {
    cookieString += `; Max-Age=${maxAge}`;
  }

  if (options.expires) {
    cookieString += `; Expires=${options.expires.toUTCString()}`;
  }

  if (path) {
    cookieString += `; Path=${path}`;
  }

  if (domain) {
    cookieString += `; Domain=${domain}`;
  }

  if (sameSite) {
    cookieString += `; SameSite=${sameSite}`;
  }

  if (secure) {
    cookieString += `; Secure`;
  }

  document.cookie = cookieString;
}

/**
 * Remove um cookie definindo seu Max-Age para 0 ou data passada.
 */
export function deleteCookie(name: string, path: string = '/'): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=; Path=${path}; Max-Age=0; SameSite=Lax`;
}

/**
 * Verifica se um cookie existe.
 */
export function hasCookie(name: string): boolean {
  return getCookie(name) !== null;
}

/**
 * Retorna todos os cookies ativos em um objeto chave-valor.
 */
export function getAllCookies(): Record<string, string> {
  if (typeof document === 'undefined' || !document.cookie) return {};

  const cookies: Record<string, string> = {};
  document.cookie.split(';').forEach((cookie) => {
    const [key, ...val] = cookie.trim().split('=');
    if (key) {
      try {
        cookies[key] = decodeURIComponent(val.join('='));
      } catch {
        cookies[key] = val.join('=');
      }
    }
  });
  return cookies;
}

/**
 * Recupera as preferências de consentimento armazenadas no cookie.
 */
export function getStoredConsent(): CookieConsentSettings | null {
  const raw = getCookie(COOKIE_CONSENT_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as CookieConsentSettings;
  } catch {
    return null;
  }
}

/**
 * Salva as preferências de consentimento em conformidade com o MDN e LGPD.
 */
export function saveConsent(settings: Omit<CookieConsentSettings, 'timestamp'>): void {
  const payload: CookieConsentSettings = {
    ...settings,
    necessary: true, // Sempre obrigatório
    timestamp: new Date().toISOString(),
  };

  setCookie(COOKIE_CONSENT_KEY, JSON.stringify(payload), {
    maxAge: 60 * 60 * 24 * 365, // Válido por 1 ano
    path: '/',
    sameSite: 'Lax',
  });
}
