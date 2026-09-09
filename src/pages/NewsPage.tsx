import React from 'react';
import newsAppImg from '../assets/images/news_app_coop63_1788912399020.jpg';
import { ArrowRight, Search } from 'lucide-react';
import { CTA } from '../components/CTA';

export function NewsPage() {
  const allNewsItems = [
    {
      id: 1,
      image: newsAppImg,
      category: 'Comunicado',
      title: 'Novos pontos de embarque e desembarque',
      summary: 'Confira os novos pontos de apoio para mais comodidade nas suas viagens. Mapeamos os locais mais estratégicos da cidade.',
      date: '15 de abril de 2026',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Motoristas',
      title: 'Campanha: Motorista Valorizado',
      summary: 'A Coop63 valoriza quem move a nossa cidade! Participe da campanha deste mês e concorra a prêmios incríveis.',
      date: '10 de abril de 2026',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Passageiros',
      title: 'Dicas de segurança para suas viagens',
      summary: 'Confira nossas recomendações para uma viagem ainda mais segura, desde a solicitação até a chegada ao seu destino final.',
      date: '05 de abril de 2026',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Coop63',
      title: 'Assembleia Geral Ordinária',
      summary: 'Participe da nossa assembleia e ajude a construir um futuro melhor para a cooperativa e todos os seus associados.',
      date: '28 de março de 2026',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Motoristas',
      title: 'Parceria com Postos de Combustível',
      summary: 'Fechamos uma nova parceria com a Rede X de postos, oferecendo descontos exclusivos no litro da gasolina para nossos motoristas cooperados.',
      date: '20 de março de 2026',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Passageiros',
      title: 'Novo recurso de agendamento de viagens',
      summary: 'Agora você pode agendar suas viagens com até 48 horas de antecedência através da nova atualização do nosso aplicativo.',
      date: '15 de março de 2026',
    }
  ];

  return (
    <div>
      <section className="bg-brand-navy py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Notícias e <span className="text-brand-green">Comunicados</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Acompanhe as últimas novidades, ações e informativos da Coop63.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Filters/Search */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {['Todos', 'Comunicado', 'Motoristas', 'Passageiros', 'Coop63'].map((tag) => (
                <button key={tag} className="px-4 py-2 rounded-full border border-gray-200 bg-white hover:bg-brand-green hover:text-white hover:border-brand-green transition-colors text-sm font-medium whitespace-nowrap">
                  {tag}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <input 
                type="text" 
                placeholder="Buscar notícias..." 
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 outline-none focus:border-brand-green"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-3" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNewsItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-sm flex-grow">
                    {item.summary}
                  </p>
                  <div className="flex items-center justify-between text-sm mt-auto pt-4 border-t border-gray-50">
                    <span className="text-gray-400 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {item.date}
                    </span>
                    <button className="text-brand-navy font-bold hover:text-brand-green transition-colors inline-flex items-center gap-1">
                      Ler mais <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-white border border-gray-200 text-brand-navy font-bold rounded-full hover:bg-gray-50 transition-colors shadow-sm">
              Carregar mais notícias
            </button>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
