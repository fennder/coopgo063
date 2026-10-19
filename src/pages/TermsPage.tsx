import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, FileText, ShieldCheck, Scale, CheckCircle2, Phone, AlertCircle } from 'lucide-react';

export function TermsPage() {
  const [activeSection, setActiveSection] = useState('1');

  const sections = [
    { id: '1', title: '1. Identificação e Objeto' },
    { id: '2', title: '2. Definições Principais' },
    { id: '3', title: '3. Elegibilidade e Cadastro' },
    { id: '4', title: '4. Do Modelo Cooperativo' },
    { id: '5', title: '5. Direitos e Deveres dos Passageiros' },
    { id: '6', title: '6. Direitos e Deveres dos Motoristas' },
    { id: '7', title: '7. Tarifas, Pagamentos e Transparência' },
    { id: '8', title: '8. Segurança e Cancelamento' },
    { id: '9', title: '9. Propriedade Intelectual' },
    { id: '10', title: '10. Foro e Legislação Aplicável' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-gray-100 border-b border-gray-200 py-3.5">
        <div className="container mx-auto px-4 md:px-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-green transition-colors">Início</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-navy font-semibold">Termos de Uso</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-brand-navy pt-16 pb-14 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green text-xs font-black uppercase tracking-wider mb-4">
              <Scale className="w-3.5 h-3.5 text-brand-green" />
              <span>Regulamento Oficial</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black mb-4">
              Termos e Condições de <span className="text-brand-green">Uso</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Estes Termos regulam o acesso e a utilização dos serviços e plataformas digitais operadas pela <strong>COOPGO63</strong> no Estado do Tocantins.
            </p>
            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 flex flex-wrap gap-y-2 gap-x-6">
              <span><strong>Razão Social:</strong> COOPGO63 COOPERATIVA DE TRANSPORTE PRIVADO DE PASSAGEIROS DO ESTADO DO TOCANTINS</span>
              <span><strong>CNPJ:</strong> 68.699.797/0001-09</span>
              <span><strong>Última atualização:</strong> Outubro de 2026</span>
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
              <FileText className="w-4 h-4 text-brand-green" />
              <span>Índice dos Termos</span>
            </h3>
            <nav className="space-y-1 text-sm">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#secao-${sec.id}`}
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
                <Phone className="w-3.5 h-3.5 text-brand-green" />
                <span>Dúvidas Jurídicas?</span>
              </div>
              <p className="mb-3">Entre em contato pelo WhatsApp oficial:</p>
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
            <section id="secao-1" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">1.</span> Identificação e Objeto
              </h2>
              <p className="mb-3">
                A <strong>COOPGO63 COOPERATIVA DE TRANSPORTE PRIVADO DE PASSAGEIROS DO ESTADO DO TOCANTINS</strong>, inscrita no CNPJ sob o nº <strong>68.699.797/0001-09</strong>, doravante denominada simplesmente <strong>Coop63</strong>, é uma sociedade cooperativa devidamente constituída e regulamentada nos termos da Lei Federal nº 5.764/1971 e da Lei Federal nº 12.587/2012 (Política Nacional de Mobilidade Urbana).
              </p>
              <p>
                O presente instrumento estabelece as regras e diretrizes aplicáveis a qualquer pessoa física ou jurídica que acesse ou utilize a plataforma tecnológica da Coop63, seja na condição de passageiro, seja na condição de motorista cooperado.
              </p>
            </section>

            {/* Section 2 */}
            <section id="secao-2" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">2.</span> Definições Principais
              </h2>
              <ul className="space-y-2 list-disc pl-5 text-sm">
                <li><strong>Plataforma Coop63:</strong> O conjunto de softwares, aplicativos móveis (Android e iOS), sites e sistemas operacionais pertencentes e geridos pela cooperativa.</li>
                <li><strong>Passageiro:</strong> Pessoa física cadastrada que solicita viagens de mobilidade urbana através dos canais da Coop63.</li>
                <li><strong>Motorista Cooperado:</strong> Profissional autônomo devidamente associado à cooperativa, proprietário ou possuidor legal de veículo automotor cadastrado, que presta serviços de transporte individual privado.</li>
                <li><strong>Corrida:</strong> Trajeto realizado pelo motorista cooperado atendendo à solicitação prévia do passageiro.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="secao-3" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">3.</span> Elegibilidade e Cadastro
              </h2>
              <p className="mb-3">
                Para utilizar os serviços, o usuário deve possuir plena capacidade civil (maior de 18 anos ou emancipado legalmente) e fornecer dados verídicos, completos e atualizados no momento do cadastro.
              </p>
              <p>
                A Coop63 reserva-se o direito de recusar cadastros, suspender ou cancelar contas que apresentem irregularidades cadastrais, indícios de fraude ou violação reiterada das normas de boa convivência e segurança.
              </p>
            </section>

            {/* Section 4 */}
            <section id="secao-4" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">4.</span> Do Modelo Cooperativo
              </h2>
              <p className="mb-3">
                Diferentemente de plataformas comerciais tradicionais exploratórias, a Coop63 rege-se pelos princípios mundiais do <strong>Cooperativismo</strong>:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs">
                  <strong className="text-brand-navy block mb-1">Adesão Voluntária e Livre:</strong>
                  Portas abertas para todos os profissionais aptos e dispostos a assumir as responsabilidades sociais.
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs">
                  <strong className="text-brand-navy block mb-1">Gestão Democrática:</strong>
                  Cada cooperado tem direito a voz e voto nas deliberações e assembleias gerais da cooperativa.
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs">
                  <strong className="text-brand-navy block mb-1">Participação Econômica Justa:</strong>
                  Taxas transparentes destinadas exclusivamente à manutenção e aprimoramento dos serviços da cooperativa.
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-xs">
                  <strong className="text-brand-navy block mb-1">Interesse pela Comunidade:</strong>
                  Geração de valor local no Estado do Tocantins, com tarifas justas para a população.
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="secao-5" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">5.</span> Direitos e Deveres dos Passageiros
              </h2>
              <p className="mb-2"><strong>Deveres do Passageiro:</strong></p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm mb-4">
                <li>Manter postura respeitosa e cordial para com o motorista cooperado.</li>
                <li>Utilizar o cinto de segurança durante todo o trajeto, conforme exigido pelo Código de Trânsito Brasileiro (CTB).</li>
                <li>Efetuar o pagamento pontual do valor estipulado para a corrida através dos meios aceitos.</li>
                <li>Não transportar substâncias ilícitas, armas ou objetos que comprometam a segurança da viagem.</li>
                <li>Zelar pelo estado e conservação do veículo do cooperado.</li>
              </ul>
              <p className="mb-2"><strong>Direitos do Passageiro:</strong></p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Receber atendimento de motoristas previamente verificados, com veículos limpos e regularizados.</li>
                <li>Transparência total do valor estimado e da rota antes de confirmar a solicitação.</li>
                <li>Acesso aos canais de suporte e ouvidoria da cooperativa para esclarecimentos ou resolução de ocorrências.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="secao-6" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">6.</span> Direitos e Deveres dos Motoristas Cooperados
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Portar CNH com observação de Exercício de Atividade Remunerada (EAR) em plena validade.</li>
                <li>Manter o veículo com documentação rigorosamente em dia, seguro obrigatório e revisões mecânicas periódicas comprovadas.</li>
                <li>Conduzir o veículo com zelo, prudência e respeito estrito às leis de trânsito vigentes.</li>
                <li>Não realizar cobranças extras não previstas no cálculo oficial da plataforma.</li>
                <li>Gozar de todos os benefícios estatutários da cooperativa, incluindo divisão de sobras e representatividade legal.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="secao-7" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">7.</span> Tarifas, Pagamentos e Transparência
              </h2>
              <p className="mb-3">
                As tarifas das viagens são compostas por uma tarifa-base, tempo estimado e distância percorrida, garantindo remuneração justa para o motorista e economia para o passageiro.
              </p>
              <p>
                Os pagamentos podem ser efetuados via Pix, cartões de crédito/débito e dinheiro, conforme disponibilizado no aplicativo. Não é admitida a retenção indevida de valores ou cobrança fora dos parâmetros homologados.
              </p>
            </section>

            {/* Section 8 */}
            <section id="secao-8" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">8.</span> Segurança e Cancelamentos
              </h2>
              <p className="mb-3">
                A segurança é prioridade máxima da Coop63. Todas as corridas são monitoradas via geolocalização. O passageiro ou o motorista poderão cancelar a corrida antes do embarque, sujeitando-se às políticas razoáveis de cancelamento caso o motorista já tenha percorrido trajeto significativo até o ponto de coleta.
              </p>
              <p>
                Qualquer conduta de assédio, violência, preconceito ou descumprimento legal resultará em banimento imediato e comunicação às autoridades policiais competentes.
              </p>
            </section>

            {/* Section 9 */}
            <section id="secao-9" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">9.</span> Propriedade Intelectual
              </h2>
              <p>
                A marca, logotipo, identidade visual, software e o domínio <strong>coop63.coop.br</strong> são patrimônio exclusivo da <strong>COOPGO63</strong>. É terminantemente proibida a reprodução, cópia, distribuição ou engenharia reversa sem autorização expressa e escrita da diretoria da cooperativa.
              </p>
            </section>

            {/* Section 10 */}
            <section id="secao-10" className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-black text-brand-navy mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
                <span className="text-brand-green">10.</span> Foro e Legislação Aplicável
              </h2>
              <p className="mb-3">
                Estes Termos são regidos pelas leis da República Federativa do Brasil.
              </p>
              <p>
                Fica eleito o Foro da Comarca de <strong>Palmas, Estado do Tocantins</strong>, com renúncia expressa a qualquer outro, por mais privilegiado que seja, para dirimir quaisquer litígios ou controvérsias decorrentes deste contrato.
              </p>
            </section>

            {/* Footer Notice */}
            <div className="p-5 rounded-2xl bg-brand-green/10 border border-brand-green/30 flex items-start gap-3 text-xs text-brand-navy">
              <ShieldCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
              <div>
                <strong>Dúvidas sobre os Termos de Uso?</strong>
                <p className="mt-0.5 text-gray-600">
                  Nossa diretoria e equipe jurídica estão à disposição através do canal oficial de atendimento pelo WhatsApp <strong>(63) 98498-4085</strong> ou pelo e-mail <strong>contato@coop63.com.br</strong>.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
