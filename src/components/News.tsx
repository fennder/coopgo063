import React from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, ArrowRight } from 'lucide-react';
import { newsArticles } from '../data/newsData';

export function News() {
  const newsItems = newsArticles.slice(0, 4);

  return (
    <section id="noticias" className="py-24 bg-brand-navy">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 mb-4">
              <Megaphone className="text-brand-green w-8 h-8" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Notícias e Comunicados</h2>
            </div>
            <p className="text-gray-400 text-lg">
              Fique por dentro das novidades, campanhas e informações da Coop63.
            </p>
          </div>
          <Link 
            to="/noticias" 
            className="hidden md:inline-flex items-center gap-2 border border-gray-600 hover:border-brand-green hover:text-brand-green text-white px-6 py-3 rounded-full transition-colors whitespace-nowrap font-medium"
          >
            <span>Ver todas as notícias</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:-translate-y-1 transition-transform duration-300 flex flex-col">
              <Link to={`/noticias/${item.id}`} className="relative h-48 overflow-hidden block">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.category}
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-grow">
                <Link to={`/noticias/${item.id}`} className="block">
                  <h3 className="text-xl font-bold text-brand-navy mb-3 line-clamp-2 group-hover:text-brand-green transition-colors">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow">
                  {item.summary}
                </p>
                <div className="flex items-center justify-between text-sm mt-auto pt-2 border-t border-gray-100">
                  <span className="text-gray-400 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.date}
                  </span>
                  <Link 
                    to={`/noticias/${item.id}`}
                    className="text-brand-navy font-bold hover:text-brand-green transition-colors inline-flex items-center gap-1"
                  >
                    Ler mais <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link 
            to="/noticias" 
            className="inline-flex items-center gap-2 border border-gray-600 hover:border-brand-green text-white px-8 py-3 rounded-full transition-colors w-full justify-center font-medium"
          >
            <span>Ver todas as notícias</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
