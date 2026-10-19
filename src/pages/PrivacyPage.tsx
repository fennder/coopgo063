import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Lock, ShieldCheck, Eye, Database, Phone, CheckCircle2, UserCheck } from 'lucide-react';

export function PrivacyPage() {
  const [activeSection, setActiveSection] = useState('1');

  const sections = [
    { id: '1', title: '1. Compromisso com a LGPD' },
    { id: '2', title: '2. Dados que Coletamos' },
    { id: '3', title: '3. Finalidades do Uso dos Dados' },
    { id: '4', title: '4. Geolocalização e Trajetos' },
    { id: '5', title: '5. Compartilhamento de Informações' },
    { id: '6', title: '6. Segurança e Armazenamento' },
    { id: '7', title: '7. Seus Direitos (Titular de Dados)' },
    { id: '8', title: '8. Retenção e Descarte de Dados' },
    { id: '9', title: '9. Cookies e Tecnologias' },
    { id: '10', title: '10. Contato do Encarregado (DPO)' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-gray-100 border-b border-gray-200 py-3.5">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-green transition-colors">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-navy font-semibold">Política de Privacidade</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-brand-navy pt-16 pb-14 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green text-xs font-black uppercase tracking-wider mb-4">
              <Lock className="w-3.5 h-3.5 text-brand-green" />
              <span>Conformidade com a LGPD (Lei 13.709/2018)</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-4">
              Política de <span className="text-brand-green">Privacidade</span> e Proteção de Dados
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Transparência total sobre como tratamos, protegemos e respeitamos a sua privacidade e as suas informações na <strong>Coop63</strong>.
            </p>
            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 flex flex-wrap gap-y-2 gap-x-6">
              <span><strong>Controladora:</strong> COOPGO63 COOPERATIVA DE TRANSPORTE PRIVADO DE PASSAGEIROS DO ESTADO DO TOCANTINS</span>
              <span><strong>CNPJ:</strong> 68.699.797/0001-09</span>
              <span><strong>Vigência:</strong> Outubro de 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Quick Nav Sidebar */}
          <aside className="w-full lg:w-72 bg-white rounded-2xl p-5 border border-gray-200 shadow-sm sticky top-24 shrink-0">
            <h3 className="font-bold text-brand-navy text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <Eye className="w-4 h-4 text-brand-green" />
              <span>Navegação Rápida</span>
            </h3>
            <nav className="space-y-1 text-sm">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#privacidade-${sec.id}`}
                  onClick={() => setActiveSection(sec.id)}
                  className={`block px-3 py-2 rounded-lg transition-colors text-xs font-semibold ${
                    activeSection === sec.id
                      ? 'bg-brand-green/15 text-brand-navy font-bold border-l-4 border-brand-green'
                      : 'text-gray-600 hover:text-brand-navy hover:bg-gray-50'
                  }`}
                >
                  {sec.title}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-5 border-t border-gray-100 text-xs text-gray-500">
              <div className="flex items-center gap-2 mb-2 font-bold text-brand-navy">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                <span>Privacidade & DPO</span>
              </div>
              <p className="mb-3">Para solicitações sobre seus dados pessoais:</p>
              <a
                href="https://wa.me/5563984984085"
                className="inline-block w-full text-center bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-2 px-3 rounded-lg text-xs transition-colors"
              >
                (63) 98498-4085
              </a>
            </div>
          </aside>

          {/* Document Content */}
          <div className="flex-1 bg-white rounded-3xl p-6 md:p-12 border border-gray-200 shadow-sm space-y-10 text-gray-700 leading-relaxed">
            
            {/* Section 1 */}
            <section id="privacidade-1" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">1.</span> Compromisso com a LGPD
              </h2>
              <p className="mb-3">
                A <strong>COOPGO63 COOPERATIVA DE TRANSPORTE PRIVADO DE PASSAGEIROS DO ESTADO DO TOCANTINS</strong> (CNPJ <strong>68.699.797/0001-09</strong>), na qualidade de Controladora de Dados Pessoais, assume o compromisso inegociável de zelar pela segurança, confidencialidade e privacidade de todos os dados tratados em seus sistemas, pautando-se pelas diretrizes da Lei Geral de Proteção de Dados (Lei Federal nº 13.709/2018 - LGPD).
              </p>
              <p>
                Esta Política aplica-se a todos os passageiros, motoristas cooperados, visitantes do site <strong>coop63.coop.br</strong> e usuários dos nossos aplicativos.
              </p>
            </section>

            {/* Section 2 */}
            <section id="privacidade-2" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">2.</span> Dados que Coletamos
              </h2>
              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <h4 className="font-bold text-brand-navy mb-1.5 flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-brand-green" />
                    <span>Dados de Passageiros:</span>
                  </h4>
                  <p>Nome completo, número de telefone celular, endereço de e-mail, pontos de partida e destino solicitados e registros de viagens realizadas.</p>
                </div>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <h4 className="font-bold text-brand-navy mb-1.5 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-green" />
                    <span>Dados de Motoristas Cooperados:</span>
                  </h4>
                  <p>Nome completo, CPF, RG, CNH (com anotação EAR), foto de perfil, certidões de antecedentes criminais exigidas por lei, dados do veículo (modelo, ano, placa, CRLV), dados bancários/chave Pix para recebimento de repasses cooperativos.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="privacidade-3" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">3.</span> Finalidades do Uso dos Dados
              </h2>
              <p className="mb-3">
                Os dados pessoais coletados são utilizados estritamente para as seguintes bases legais e finalidades:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li><strong>Execução de Contrato:</strong> Viabilizar a chamada, conexão entre passageiro e motorista cooperado, cálculo da tarifa e finalização da corrida.</li>
                <li><strong>Segurança Coletiva:</strong> Autenticação de identidade de motoristas e passageiros, prevenção a fraudes e monitoramento de incidentes.</li>
                <li><strong>Cumprimento de Obrigação Legal:</strong> Emissão de comprovantes, atendimento às exigências tributárias e aos órgãos reguladores de trânsito e mobilidade.</li>
                <li><strong>Suporte e Atendimento:</strong> Comunicação com o usuário para solução de ocorrências e esclarecimento de dúvidas.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="privacidade-4" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">4.</span> Geolocalização e Trajetos
              </h2>
              <p className="mb-3">
                Para o funcionamento essencial do serviço de transporte privado individual, a plataforma coleta dados de <strong>geolocalização precisa (GPS)</strong>:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li><strong>Motoristas:</strong> Coleta contínua em primeiro e segundo plano enquanto o aplicativo estiver no modo "Disponível/Online", permitindo localizar o motorista mais próximo ao passageiro.</li>
                <li><strong>Passageiros:</strong> Coleta durante a utilização ativa do app e durante o trajeto da corrida em andamento.</li>
              </ul>
              <p className="mt-3">
                Os dados de trajeto são armazenados de forma criptografada para auditoria de segurança e segurança viária de ambas as partes.
              </p>
            </section>

            {/* Section 5 */}
            <section id="privacidade-5" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">5.</span> Compartilhamento Restrito de Informações
              </h2>
              <p className="mb-3">
                A Coop63 <strong>nunca comercializa, aluga ou vende dados pessoais</strong> a terceiros para fins publicitários.
              </p>
              <p className="mb-2">O compartilhamento ocorre unicamente em situações estritas:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li><strong>Entre Passageiro e Motorista:</strong> O motorista recebe o nome do passageiro e o endereço de embarque/desembarque. O passageiro recebe o nome, foto, modelo do veículo e placa do motorista cooperado.</li>
                <li><strong>Ordem Judicial ou Requisição Policial:</strong> Mediante determinação formal de autoridade judicial ou policial competente, nos termos do Marco Civil da Internet e da LGPD.</li>
                <li><strong>Processadoras de Pagamento:</strong> Apenas os dados estritamente necessários para liquidação financeira das transações via cartão ou Pix.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="privacidade-6" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">6.</span> Segurança e Armazenamento
              </h2>
              <p className="mb-3">
                Adotamos medidas técnicas, administrativas e organizacionais aptas a proteger os dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda, alteração ou difusão.
              </p>
              <p>
                Os dados trafegam exclusivamente por conexões criptografadas com protocolo SSL/TLS de ponta a ponta e ficam armazenados em servidores protegidos por firewalls e controles rigorosos de privilégios.
              </p>
            </section>

            {/* Section 7 */}
            <section id="privacidade-7" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">7.</span> Seus Direitos (Titular de Dados)
              </h2>
              <p className="mb-3">
                Conforme o Artigo 18 da LGPD, você possui os seguintes direitos garantidos pela Coop63:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs my-4">
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <strong className="text-brand-navy block mb-1">Confirmação e Acesso:</strong>
                  Saber se tratamos seus dados e quais dados constam em nosso sistema.
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <strong className="text-brand-navy block mb-1">Correção:</strong>
                  Solicitar a atualização de dados incompletos, inexatos ou desatualizados.
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <strong className="text-brand-navy block mb-1">Anonimização ou Eliminação:</strong>
                  Requerer a exclusão de dados desnecessários ou tratados em desconformidade com a lei.
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <strong className="text-brand-navy block mb-1">Revogação de Consentimento:</strong>
                  Retirar o consentimento a qualquer momento de forma facilitada e gratuita.
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="privacidade-8" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">8.</span> Retenção e Descarte de Dados
              </h2>
              <p>
                Os dados pessoais serão conservados enquanto durar a relação contratual com o usuário. Após o encerramento da conta, os dados serão eliminados ou anonimizados, ressalvada a guarda obrigatória pelo período legal estipulado pelo Código Civil Brasileiro e pelo Marco Civil da Internet para cumprimento de obrigações fiscais e regulatórias.
              </p>
            </section>

            {/* Section 9 */}
            <section id="privacidade-9" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">9.</span> Cookies e Tecnologias
              </h2>
              <p>
                O site <strong>coop63.coop.br</strong> utiliza apenas cookies essenciais para o funcionamento básico, memorização de preferências e proteção contra ataques cibernéticos. O usuário pode desativar os cookies nas configurações de seu navegador web a qualquer momento.
              </p>
            </section>

            {/* Section 10 */}
            <section id="privacidade-10" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">10.</span> Contato do Encarregado (DPO)
              </h2>
              <p className="mb-3">
                Para exercer qualquer um de seus direitos como titular de dados ou tirar dúvidas sobre esta Política de Privacidade, entre em contato diretamente com o nosso canal oficial de privacidade:
              </p>
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 text-xs">
                <p><strong>Encarregado de Proteção de Dados (DPO):</strong> Gestão de Privacidade Coop63</p>
                <p><strong>E-mail:</strong> <span className="text-brand-navy font-bold">contato@coop63.com.br</span></p>
                <p><strong>WhatsApp Oficial:</strong> <span className="text-brand-green font-extrabold">(63) 98498-4085</span></p>
                <p><strong>Sede:</strong> Palmas - TO, Brasil</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
