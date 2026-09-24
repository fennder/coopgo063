import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, ChevronRight } from 'lucide-react';
import { CTA } from '../components/CTA';
import { newsArticles } from '../data/newsData';

export function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Todos', 'Comunicado', 'Motoristas', 'Passageiros', 'Coop63'];

  const filteredNews = useMemo(() => {
    return newsArticles.filter((item) => {
      const matchesCategory =
        selectedCategory === 'Todos' || item.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200 py-3.5">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-green transition-colors">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-navy font-semibold">Notícias e Comunicados</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-brand-navy py-16 lg:py-20 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Notícias e <span className="text-brand-green">Comunicados</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Acompanhe as últimas novidades, ações cooperativas, parcerias e informativos da Coop63.
          </p>
        </div>
      </section>

      {/* Main Listing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${
                      isActive
                        ? 'bg-brand-green text-white shadow-sm'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-brand-green hover:text-brand-green'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="relative w-full md:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por notícia..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 bg-white text-sm outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-2.5" />
            </div>
          </div>

          {filteredNews.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 p-8">
              <p className="text-gray-500 text-lg mb-4">Nenhuma notícia encontrada para os critérios selecionados.</p>
              <button
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSearchQuery('');
                }}
                className="text-brand-green font-bold hover:underline"
              >
                Limpar filtros e ver todas
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col group"
                >
                  <Link to={`/noticias/${item.id}`} className="relative h-48 overflow-hidden block">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {item.category}
                    </div>
                  </Link>

                  <div className="p-6 flex flex-col flex-grow">
                    <Link to={`/noticias/${item.id}`} className="block">
                      <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-green transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-6 text-sm flex-grow line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                    <div className="flex items-center justify-between text-sm mt-auto pt-4 border-t border-gray-50">
                      <span className="text-gray-400 text-xs flex items-center gap-1.5 font-medium">
                        {item.date}
                      </span>
                      <Link
                        to={`/noticias/${item.id}`}
                        className="text-brand-navy font-bold hover:text-brand-green transition-colors inline-flex items-center gap-1 text-sm"
                      >
                        Ler mais <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
    </div>
  );
}
