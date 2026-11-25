import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, Calendar, Tag, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { newsArticles, NewsItem } from '../data/newsData';
import { getCookie, setCookie } from '../utils/cookies';
import { trackEvent } from '../utils/analytics';

const SEEN_COMUNICADOS_KEY = 'coop63_seen_comunicados';

function parseSeenIds(raw: string | null): number[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed.filter((id): id is number => typeof id === 'number' && Number.isFinite(id));
    }
  } catch {
    // Fallback para formato separado por vírgula
    return raw
      .split(',')
      .map((val) => Number(val.trim()))
      .filter((id) => Number.isFinite(id) && id > 0);
  }
  return [];
}

function getSeenComunicadoIds(): number[] {
  const seen = new Set<number>();

  try {
    const fromLocal = window.localStorage.getItem(SEEN_COMUNICADOS_KEY);
    parseSeenIds(fromLocal).forEach((id) => seen.add(id));
  } catch {
    // Ignora caso localStorage esteja bloqueado
  }

  try {
    const fromCookie = getCookie(SEEN_COMUNICADOS_KEY);
    parseSeenIds(fromCookie).forEach((id) => seen.add(id));
  } catch {
    // Ignora caso cookies estejam indisponíveis
  }

  return Array.from(seen);
}

function markComunicadoAsSeen(id: number): void {
  const existing = getSeenComunicadoIds();
  if (existing.includes(id)) return;

  const updated = [...existing, id];
  const serialized = JSON.stringify(updated);

  try {
    window.localStorage.setItem(SEEN_COMUNICADOS_KEY, serialized);
  } catch {
    // Ignora erro de quota/acesso
  }

  try {
    setCookie(SEEN_COMUNICADOS_KEY, serialized, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'Lax',
    });
  } catch {
    // Ignora caso cookies estejam bloqueados
  }
}

export function ComunicadoModal() {
  const [isOpen, setIsOpen] = useState(false);

  const latestComunicado: NewsItem | undefined = useMemo(() => {
    return newsArticles.find((article) => {
      const cats = article.categories ?? [article.category];
      return cats.includes('Comunicado');
    });
  }, []);

  const handleClose = useCallback(
    (action: 'close' | 'read_full' = 'close') => {
      if (latestComunicado) {
        markComunicadoAsSeen(latestComunicado.id);
        trackEvent('comunicado_modal_action', {
          action,
          comunicado_id: latestComunicado.id,
        });
      }
      setIsOpen(false);
    },
    [latestComunicado]
  );

  useEffect(() => {
    if (!latestComunicado) return;

    const seenIds = getSeenComunicadoIds();
    if (seenIds.includes(latestComunicado.id)) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 450);

    return () => window.clearTimeout(timer);
  }, [latestComunicado]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleClose]);

  if (!isOpen || !latestComunicado) {
    return null;
  }

  const categories = latestComunicado.categories ?? [latestComunicado.category];

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => handleClose('close')}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="comunicado-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Cabeçalho do Comunicado */}
        <div className="bg-brand-navy px-5 sm:px-7 py-4 sm:py-5 text-white flex items-start justify-between gap-4 border-b-2 border-brand-green shrink-0">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-2xl bg-brand-green/20 text-brand-green shrink-0 mt-0.5">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                <span className="inline-flex items-center gap-1 bg-brand-green text-brand-navy text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  Comunicado Oficial
                </span>
                {categories
                  .filter((cat) => cat !== 'Comunicado')
                  .map((cat) => (
                    <span
                      key={cat}
                      className="inline-flex items-center gap-1 bg-white/10 text-gray-200 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    >
                      <Tag className="w-2.5 h-2.5 text-brand-green" />
                      {cat}
                    </span>
                  ))}
              </div>
              <h2
                id="comunicado-modal-title"
                className="text-base sm:text-xl font-extrabold leading-snug text-white"
              >
                {latestComunicado.title}
              </h2>
              <p className="text-xs text-gray-300 mt-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-brand-green" />
                <span>{latestComunicado.date}</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleClose('close')}
            aria-label="Fechar comunicado"
            title="Fechar comunicado"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo com rolagem para leitura completa */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
          {latestComunicado.image && (
            <div className="relative rounded-2xl overflow-hidden bg-brand-navy/95 min-h-[200px] max-h-80 flex items-center justify-center shadow-md mb-2 p-2">
              <div
                className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-35 scale-110 pointer-events-none"
                style={{ backgroundImage: `url(${latestComunicado.image})` }}
                aria-hidden="true"
              />
              <img
                src={latestComunicado.image}
                alt={latestComunicado.title}
                className="relative z-10 w-auto h-auto max-h-72 max-w-full object-contain rounded-xl shadow-lg"
              />
            </div>
          )}

          {latestComunicado.content.map((paragraph, idx) => {
            if (paragraph.startsWith('IMAGE:')) {
              const parts = paragraph.replace('IMAGE:', '').split('|');
              const src = parts[0]?.trim();
              const caption = parts[1]?.trim() || '';
              return (
                <figure
                  key={idx}
                  className="my-4 rounded-2xl overflow-hidden border border-gray-200 bg-gray-50"
                >
                  <img
                    src={src}
                    alt={caption || 'Imagem do comunicado'}
                    className="w-full max-h-64 object-contain mx-auto bg-brand-navy/95 p-2"
                  />
                  {caption && (
                    <figcaption className="px-4 py-2 text-xs text-center text-gray-600 font-medium">
                      {caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-lg font-bold text-brand-navy pt-2">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }

            if (idx === 0 && paragraph === paragraph.toUpperCase()) {
              return (
                <p
                  key={idx}
                  className="text-base sm:text-lg font-black text-brand-navy bg-brand-green/15 border-l-4 border-brand-green px-4 py-2.5 rounded-r-xl"
                >
                  {paragraph}
                </p>
              );
            }

            if (idx === latestComunicado.content.length - 1 && paragraph.includes('COOP63')) {
              return (
                <p
                  key={idx}
                  className="font-extrabold text-brand-navy pt-2 border-t border-gray-100"
                >
                  {paragraph}
                </p>
              );
            }

            return (
              <p key={idx} className="whitespace-pre-line">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Rodapé com ações de leitura */}
        <div className="px-5 sm:px-7 py-4 bg-gray-50 border-t border-gray-200 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <Link
            to={`/noticias/${latestComunicado.slug}`}
            onClick={() => handleClose('read_full')}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 text-brand-navy font-bold text-xs sm:text-sm transition-colors"
          >
            <span>Abrir página da notícia</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={() => handleClose('close')}
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-brand-green hover:bg-brand-green-hover text-brand-navy font-black text-xs sm:text-sm transition-transform active:scale-95 shadow-md"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Li e fechar comunicado</span>
          </button>
        </div>
      </div>
    </div>
  );
}
