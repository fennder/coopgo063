import React from 'react';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'João Silva',
      role: 'Motorista Cooperado',
      content: 'Fazer parte da Coop63 mudou minha realidade. A comissão é justa, o suporte é excelente e sinto que meu trabalho é realmente valorizado.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 2,
      name: 'Maria Oliveira',
      role: 'Passageira Frequente',
      content: 'Me sinto muito mais segura usando o aplicativo da cooperativa. Os motoristas são atenciosos e o atendimento é sempre rápido.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 3,
      name: 'Carlos Mendes',
      role: 'Motorista Cooperado',
      content: 'A união faz a força. Com a Coop63, temos voz e conseguimos lutar por melhorias reais para a nossa categoria.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-navy/5 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4">
            O que dizem sobre nós
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Histórias de quem faz a mobilidade acontecer com a Coop63.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-green/20" />
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-brand-green"
                />
                <div>
                  <h4 className="font-bold text-brand-navy">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
