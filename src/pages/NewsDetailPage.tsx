import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { newsArticles } from '../data/newsData';
import { ArrowLeft, Calendar, Clock, Share2, Tag, ChevronRight, Check } from 'lucide-react';
import { CTA } from '../components/CTA';

export function NewsDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = React.useState(false);

  const article = newsArticles.find((item) => item.id === Number(id));

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
        <h2 className="text-3xl font-extrabold text-brand-navy mb-4">Notícia não encontrada</h2>
        <p className="text-gray-500 mb-8">O artigo solicitado pode ter sido arquivado ou removido.</p>
        <Link
          to="/noticias"
          className="inline-flex items-center gap-2 bg-brand-green text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-brand-green-hover transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para todas as notícias</span>
        </Link>
      </div>
    );
  }

  const related = newsArticles.filter((item) => item.id !== article.id).slice(0, 3);

  return (
    <div>
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
          <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-video mb-10 bg-gray-100">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Body Paragraphs */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 text-lg">
            <p className="font-semibold text-xl text-gray-900 leading-snug">
              {article.summary}
            </p>
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
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
                className="bg-brand-green hover:bg-brand-green-hover text-white px-5 py-2.5 rounded-full font-bold text-sm transition-colors shadow-md"
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
                  to={`/noticias/${item.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col group"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
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
