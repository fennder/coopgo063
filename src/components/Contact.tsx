import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subjectLabels: Record<string, string> = {
      duvida: 'Dúvida Geral',
      motorista: 'Quero ser Motorista',
      passageiro: 'Sou Passageiro',
      reclamacao: 'Reclamação',
    };

    const subjectText = subjectLabels[formData.subject] || formData.subject || 'Contato Geral';

    const text =
      `*Olá, Coop63! Mensagem enviada pelo site:*\n\n` +
      `👤 *Nome:* ${formData.name.trim() || 'Não informado'}\n` +
      `📧 *E-mail:* ${formData.email.trim() || 'Não informado'}\n` +
      `📱 *Telefone/WhatsApp:* ${formData.phone.trim() || 'Não informado'}\n` +
      `📋 *Assunto:* ${subjectText}\n\n` +
      `💬 *Mensagem:*\n${formData.message.trim() || 'Gostaria de mais informações sobre a cooperativa.'}`;

    const whatsappUrl = `https://wa.me/5563984984085?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  };

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
              <div className="flex-1">
                <h4 className="font-bold text-brand-navy text-lg mb-1">WhatsApp</h4>
                <p className="text-gray-600 text-sm mb-2 font-medium">(63) 98498-4085</p>
                <a
                  href="https://wa.me/5563984984085?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Coop63!"
                  className="inline-flex items-center gap-1.5 text-brand-green hover:text-brand-green-hover font-bold text-sm transition-colors"
                >
                  <span>Chamar no WhatsApp</span>
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="bg-brand-green/10 p-3 rounded-full text-brand-green shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-navy text-lg mb-1">Telefone</h4>
                <p className="text-gray-600 text-sm">(63) 98498-4085</p>
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
                <p className="text-gray-600 text-sm">Endereço Oficial da Sede,<br/>Cidade - UF</p>
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
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy">Envie uma mensagem</h3>
                  <p className="text-sm text-gray-500 mt-0.5">Sua mensagem será enviada diretamente para o nosso WhatsApp oficial.</p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-brand-green/15 text-brand-navy font-bold text-xs rounded-full border border-brand-green/30">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
                  <span>WhatsApp Oficial</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu.email@exemplo.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Seu Telefone / WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(63) 90000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Assunto</label>
                    <select 
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
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
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como podemos ajudar você hoje?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full flex items-center justify-center gap-3 bg-brand-green hover:bg-brand-green-hover text-brand-navy px-8 py-4 rounded-xl font-black text-lg transition-transform active:scale-95 shadow-lg"
                >
                  <MessageCircle className="w-6 h-6 fill-brand-navy" />
                  <span>{isSubmitting ? 'Abrindo WhatsApp...' : 'Enviar para o WhatsApp'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
