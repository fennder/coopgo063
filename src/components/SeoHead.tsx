import { useEffect } from 'react';

const PRODUCTION_ORIGIN = 'https://coop63.coop.br';
const DEFAULT_OG_IMAGE = '/og-image.jpg';

export interface SeoHeadProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  publishedTime?: string;
  articleCategory?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attrName}="${attrValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function resolveAbsoluteUrl(value: string): string {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }
  const normalized = value.startsWith('/') ? value : `/${value}`;
  return `${PRODUCTION_ORIGIN}${normalized}`;
}

export function SeoHead({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  publishedTime,
  articleCategory,
  jsonLd,
}: SeoHeadProps) {
  useEffect(() => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const canonicalUrl = `${PRODUCTION_ORIGIN}${cleanPath === '/' ? '/' : cleanPath}`;
    const resolvedImage = resolveAbsoluteUrl(image || DEFAULT_OG_IMAGE);

    document.title = title;

    setMetaTag('name', 'description', description);
    setMetaTag(
      'name',
      'robots',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    let canonicalEl = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    // OpenGraph
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', resolvedImage);
    if (type === 'article' && publishedTime) {
      setMetaTag('property', 'article:published_time', publishedTime);
    }
    if (type === 'article' && articleCategory) {
      setMetaTag('property', 'article:section', articleCategory);
    }

    // Twitter
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', resolvedImage);

    // Dynamic route-level JSON-LD
    const existingScript = document.getElementById('dynamic-route-jsonld');
    if (jsonLd) {
      const script = existingScript || document.createElement('script');
      script.id = 'dynamic-route-jsonld';
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': Array.isArray(jsonLd) ? jsonLd : [jsonLd],
      });
      if (!existingScript) {
        document.head.appendChild(script);
      }
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [title, description, path, image, type, noindex, publishedTime, articleCategory, jsonLd]);

  return null;
}
