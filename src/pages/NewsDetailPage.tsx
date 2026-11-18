import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { newsArticles } from '../data/newsData';
import { ArrowLeft, Calendar, Clock, Share2, Tag, ChevronRight, Check } from 'lucide-react';
import { CTA } from '../components/CTA';
import { SeoHead } from '../components/SeoHead';

export function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = React.useState(false);

  const article = newsArticles.find(
    (item) => item.slug === id || item.id === Number(id)
  );

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!article) {
    return (
      <div className="py-24 text-center container mx-auto px-4">
        <SeoHead
          title="Notícia não encontrada | Coop63"
          description="O artigo solicitado não está mais disponível ou foi arquivado no portal oficial da Coop63."
          path={`/noticias/${id || ''}`}
          noindex
        />
        <h2 className="text-3xl font-extrabold text-brand-navy mb-4">Notícia não encontrada</h2>
        <p className="text-gray-500 mb-8">O artigo solicitado pode ter sido arquivado ou removido.</p>
        <Link
          to="/noticias"
          className="inline-flex items-center gap-2 bg-brand-green text-brand-navy px-6 py-3 rounded-full font-extrabold shadow-md hover:bg-brand-green-hover transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para todas as notícias</span>
        </Link>
      </div>
    );
  }

  const related = newsArticles.filter((item) => item.id !== article.id).slice(0, 3);
  const articlePath = `/noticias/${article.slug}`;
  const articleAbsoluteUrl = `https://coop63.coop.br${articlePath}`;
  const articleImageUrl = /^https?:\/\//i.test(article.image)
    ? article.image
    : `https://coop63.coop.br${article.image.startsWith('/') ? article.image : `/${article.image}`}`;

  const articleJsonLd = [
    {
      '@type': 'NewsArticle',
      headline: article.title,
      description: article.summary,
      image: [articleImageUrl],
      datePublished: article.isoDate,
      dateModified: article.isoDate,
      articleSection: article.category,
      inLanguage: 'pt-BR',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': articleAbsoluteUrl,
      },
      author: {
        '@type': 'Organization',
        name: 'Comunicação Coop63',
        url: 'https://coop63.coop.br',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Coop63 Mobilidade Cooperativa',
        logo: {
          '@type': 'ImageObject',
          url: 'https://coop63.coop.br/assets/aistudio/unnamed_88fe9c17.webp',
        },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://coop63.coop.br/' },
        { '@type': 'ListItem', position: 2, name: 'Notícias', item: 'https://coop63.coop.br/noticias' },
        { '@type': 'ListItem', position: 3, name: article.title, item: articleAbsoluteUrl },
      ],
    },
  ];

  return (
    <div>
      <SeoHead
        title={`${article.title} | Coop63`}
        description={article.summary.slice(0, 160)}
        path={articlePath}
        image={article.image}
        type="article"
        publishedTime={article.isoDate}
        articleCategory={article.category}
        jsonLd={articleJsonLd}
      />
      {/* Breadcrumb Header */}
      <div className="bg-gray-100 border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-green transition-colors">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/noticias" className="hover:text-brand-green transition-colors">Notícias</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-navy font-semibold truncate max-w-xs sm:max-w-md">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-green font-semibold transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para Notícias</span>
            </Link>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-gray-200 hover:border-brand-green text-gray-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-brand-green" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copiado!' : 'Compartilhar'}</span>
            </button>
          </div>

          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Tag className="w-3 h-3" />
            <span>{article.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy leading-tight mb-6">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm mb-8 pb-6 border-b border-gray-100">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-green" />
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-green" />
              {article.readTime}
            </span>
            <span className="text-gray-400">Por Comunicação Coop63</span>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl mb-10 bg-brand-navy/95 flex items-center justify-center min-h-[320px] sm:min-h-[440px] max-h-[600px]">
            <div
              className="absolute inset-0 bg-cover bg-center filter blur-2xl opacity-40 scale-110 pointer-events-none"
              style={{ backgroundImage: `url(${article.image})` }}
              aria-hidden="true"
            />
            <img
              src={article.image}
              alt={article.title}
              fetchPriority="high"
              loading="eager"
              className="relative z-10 w-auto h-full max-h-[580px] max-w-full object-contain mx-auto py-2 sm:py-3 shadow-2xl rounded-2xl"
            />
          </div>

          {/* Body Paragraphs */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 text-lg">
            <p className="font-semibold text-xl text-gray-900 leading-snug">
              {article.summary}
            </p>
            {article.content.map((paragraph, idx) => {
              if (paragraph.startsWith('IMAGE:')) {
                const parts = paragraph.replace('IMAGE:', '').split('|');
                const src = parts[0]?.trim();
                const caption = parts[1]?.trim() || '';
                return (
                  <figure
                    key={idx}
                    className="not-prose my-8 rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-brand-navy/95 max-w-sm sm:max-w-md mx-auto"
                  >
                    <div className="flex items-center justify-center p-3 sm:p-5">
                      <img
                        src={src}
                        alt={caption || 'Imagem da matéria'}
                        loading="lazy"
                        decoding="async"
                        className="w-auto h-auto max-h-[480px] max-w-full object-contain mx-auto rounded-2xl shadow-lg"
                      />
                    </div>
                    {caption && (
                      <figcaption className="p-3.5 text-center text-xs sm:text-sm text-gray-200 bg-brand-navy border-t border-white/10 font-medium leading-relaxed">
                        {caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }
              if (paragraph.startsWith('### Posição da COOP63:')) {
                const headingText = paragraph.replace('### ', '');
                return (
                  <div
                    key={idx}
                    className="not-prose mt-12 mb-6 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-brand-navy via-brand-navy to-slate-900 border-l-4 border-brand-green text-white shadow-xl"
                  >
                    <span className="text-xs font-black tracking-widest text-brand-green uppercase block mb-1">
                      Modelo Cooperativo
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                      {headingText}
                    </h3>
                  </div>
                );
              }
              if (paragraph.startsWith('### ')) {
                const headingText = paragraph.replace('### ', '');
                return (
                  <h3 key={idx} className="not-prose text-2xl font-black text-brand-navy mt-10 mb-3 pb-2 border-b border-gray-100 flex items-center gap-2.5">
                    <span className="w-2.5 h-6 bg-brand-green rounded-full shrink-0"></span>
                    <span>{headingText}</span>
                  </h3>
                );
              }
              if (paragraph.startsWith('Contexto:')) {
                return (
                  <div
                    key={idx}
                    className="not-prose my-6 p-5 rounded-2xl bg-amber-500/10 border-l-4 border-amber-500 text-sm sm:text-base text-gray-800"
                  >
                    <p className="font-medium leading-relaxed">
                      <strong className="text-amber-900 font-bold uppercase tracking-wider text-xs block mb-1">
                        Contexto Informativo
                      </strong>
                      {paragraph.replace('Contexto:', '').trim()}
                    </p>
                  </div>
                );
              }
              if (paragraph.startsWith('NOTA:')) {
                return (
                  <div
                    key={idx}
                    className="not-prose my-6 p-5 rounded-2xl bg-slate-100 border-l-4 border-brand-navy text-sm sm:text-base text-gray-700"
                  >
                    <p className="leading-relaxed italic">
                      <strong className="not-italic text-brand-navy font-extrabold uppercase tracking-wider text-xs block mb-1">
                        Nota de Esclarecimento
                      </strong>
                      {paragraph.replace('NOTA:', '').trim()}
                    </p>
                  </div>
                );
              }
              if (paragraph.startsWith('CLIPPING:')) {
                const rows = paragraph
                  .replace('CLIPPING:', '')
                  .trim()
                  .split('\n')
                  .map((line) => line.split('|').map((s) => s.trim()))
                  .filter((parts) => parts.length === 3);

                return (
                  <div key={idx} className="not-prose my-8 overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
                    <div className="bg-brand-navy px-5 py-3.5 flex items-center justify-between">
                      <span className="text-xs font-black tracking-widest text-brand-green uppercase">
                        Clipping de Imprensa • 17/11/2026
                      </span>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {rows.map(([outlet, headline, highlight], rIdx) => (
                        <div key={rIdx} className="p-5 hover:bg-gray-50/80 transition-colors">
                          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-3 mb-1.5">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-black bg-brand-green/20 text-brand-navy shrink-0 w-fit">
                              {outlet}
                            </span>
                            <h4 className="font-bold text-brand-navy text-base italic leading-snug">
                              “{headline}”
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed sm:pl-1">
                            {highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
              if (paragraph.startsWith('TIMELINE:')) {
                const events = paragraph
                  .replace('TIMELINE:', '')
                  .trim()
                  .split('\n')
                  .map((line) => line.split('|').map((s) => s.trim()))
                  .filter((parts) => parts.length === 2);

                return (
                  <div key={idx} className="not-prose my-8 pl-4 sm:pl-6 border-l-2 border-brand-green/40 space-y-6">
                    {events.map(([milestone, desc], eIdx) => (
                      <div key={eIdx} className="relative pl-4 sm:pl-5">
                        <span className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-brand-green border-2 border-white shadow-sm ring-2 ring-brand-green/30" />
                        <span className="text-xs font-black uppercase tracking-wider text-brand-navy bg-brand-green/15 px-2.5 py-1 rounded-md inline-block mb-1.5">
                          {milestone}
                        </span>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                );
              }
              if (paragraph.startsWith('FONTES DA MATÉRIA:')) {
                const textWithoutPrefix = paragraph.replace('FONTES DA MATÉRIA:', '').trim();
                return (
                  <div
                    key={idx}
                    className="not-prose mt-12 p-6 sm:p-7 rounded-2xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-600 shadow-sm"
                  >
                    <div className="flex items-center gap-2 font-black text-brand-navy uppercase tracking-wider text-xs mb-3">
                      <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                      <span>Fontes e Fundamentos Oficiais da Matéria</span>
                    </div>
                    <div className="leading-relaxed whitespace-pre-line text-gray-700">
                      {textWithoutPrefix}
                    </div>
                  </div>
                );
              }
              if (paragraph.startsWith('A IMPORTÂNCIA DE ESTAR NA COOP63:')) {
                return (
                  <div
                    key={idx}
                    className="not-prose my-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-brand-navy via-brand-navy to-slate-900 border-l-4 border-brand-green text-white shadow-xl"
                  >
                    <span className="text-xs font-black tracking-widest text-brand-green uppercase block mb-1">
                      Diferencial Cooperativista
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                      {paragraph}
                    </h3>
                  </div>
                );
              }
              if (paragraph.includes('NA COOP63 NÃO HÁ PASSE:')) {
                return (
                  <div
                    key={idx}
                    className="not-prose my-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-brand-navy via-brand-navy to-slate-900 border-2 border-brand-green/50 shadow-2xl text-white relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="inline-flex items-center gap-2 bg-brand-green/20 text-brand-green px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4 border border-brand-green/30">
                      <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                      <span>Premissa da Cooperativa</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-white leading-tight mb-4">
                      NA COOP63 NÃO HÁ PASSE: <span className="text-brand-green">você só paga quando roda (15% por corrida).</span>
                    </h4>
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 text-sm sm:text-base text-gray-200 leading-relaxed font-medium">
                      <p className="mb-2 text-brand-green font-bold text-xs uppercase tracking-wider">A conta que liberta o motorista:</p>
                      <p className="text-gray-100">
                        <strong>600 motoristas</strong> × <strong>2 passes</strong> × <strong>R$ 46</strong> = <span className="text-brand-green font-black">R$ 55.200</span> por dia, <span className="text-brand-green font-black">R$ 1.656.000</span> por mês e cerca de <span className="text-brand-green font-black text-base sm:text-lg">R$ 20.180.000</span> por ano ficando em Palmas!
                      </p>
                    </div>
                  </div>
                );
              }
              if (paragraph.includes('📅 Data:')) {
                return (
                  <div
                    key={idx}
                    className="not-prose mt-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-brand-navy/5 to-brand-green/10 border border-brand-green/30 shadow-sm text-gray-800"
                  >
                    <h4 className="font-extrabold text-lg sm:text-xl text-brand-navy mb-4 flex items-center gap-2">
                      <span>Informações do Evento</span>
                    </h4>
                    <div className="space-y-2.5 text-base sm:text-lg">
                      <div className="flex items-center gap-2 font-medium text-gray-800">
                        <span className="text-xl">📅</span>
                        <span><strong>Data:</strong> 7 de novembro (sábado)</span>
                      </div>
                      <div className="flex items-center gap-2 font-medium text-gray-800">
                        <span className="text-xl">⏰</span>
                        <span><strong>Horário:</strong> das 9h às 12h</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 font-medium text-gray-800">
                        <span className="text-xl">📍</span>
                        <span><strong>Local:</strong> Auditório da DPE-TO</span>
                        <a
                          href="https://maps.app.goo.gl/DwZer5jK22cY6DWD7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-brand-navy bg-brand-green hover:bg-brand-green-hover text-xs font-bold px-3.5 py-1.5 rounded-full transition-colors ml-1 shadow-sm"
                        >
                          <span>Abrir no Google Maps</span>
                          <span className="text-xs">↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <p key={idx} className="whitespace-pre-line">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Action Box */}
          <div className="mt-12 p-8 rounded-2xl bg-brand-navy text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold mb-1">Quer fazer parte da nossa cooperativa?</h3>
              <p className="text-gray-300 text-sm">Cadastre-se como motorista ou baixe o app de passageiro.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link
                to="/motoristas"
                className="bg-brand-green hover:bg-brand-green-hover text-brand-navy px-5 py-2.5 rounded-full font-extrabold text-sm transition-colors shadow-md"
              >
                Motoristas
              </Link>
              <Link
                to="/passageiros"
                className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-colors border border-white/20"
              >
                Passageiros
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related News */}
      {related.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <h2 className="text-2xl font-bold text-brand-navy mb-8">Outras Notícias Recentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/noticias/${item.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col group"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-3 left-3 bg-brand-navy/90 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="font-bold text-brand-navy group-hover:text-brand-green transition-colors line-clamp-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-4 flex-grow">
                      {item.summary}
                    </p>
                    <span className="text-xs text-gray-400 font-medium">
                      {item.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </div>
  );
}
