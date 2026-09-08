import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Entre em <span className="text-brand-green">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para ouvir você. Tire dúvidas, envie sugestões ou faça parte da nossa cooperativa.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-brand-green/10 p-3 rounded-full text-brand-green shrink-0">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy text-lg mb-1">WhatsApp</h4>
                <p className="text-gray-600 text-sm mb-2">(00) 00000-0000</p>
                <a href="#" className="text-brand-green font-semibold text-sm hover:underline">Chamar no WhatsApp</a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-brand-green/10 p-3 rounded-full text-brand-green shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy text-lg mb-1">Telefone</h4>
                <p className="text-gray-600 text-sm">(00) 0000-0000</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-brand-green/10 p-3 rounded-full text-brand-green shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy text-lg mb-1">E-mail</h4>
                <p className="text-gray-600 text-sm">contato@coop63.com.br</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-brand-green/10 p-3 rounded-full text-brand-green shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy text-lg mb-1">Endereço</h4>
                <p className="text-gray-600 text-sm">Endereço Oficial da Sede,<br/>Número - Bairro<br/>Cidade - UF, CEP</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-brand-green/10 p-3 rounded-full text-brand-green shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy text-lg mb-1">Horário de Atendimento</h4>
                <p className="text-gray-600 text-sm">Segunda a Sexta: 08h às 18h<br/>Sábado: 08h às 12h</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-navy mb-8">Envie uma mensagem</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="seu.email@exemplo.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Telefone / WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Assunto</label>
                    <select 
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors bg-white"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="duvida">Dúvida Geral</option>
                      <option value="motorista">Quero ser Motorista</option>
                      <option value="passageiro">Sou Passageiro</option>
                      <option value="reclamacao">Reclamação</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensagem</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    placeholder="Como podemos ajudar?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-md"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
