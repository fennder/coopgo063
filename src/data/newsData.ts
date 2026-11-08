import newsAppImg from '../assets/images/news_app_coop63_1788912399020.jpg';

export interface NewsItem {
  id: number;
  image: string;
  category: 'Comunicado' | 'Motoristas' | 'Passageiros' | 'Coop63';
  title: string;
  summary: string;
  content: string[];
  date: string;
  readTime: string;
}

export const newsArticles: NewsItem[] = [
   {
    id: 8,
    image: '/assets/aistudio/Presid_26eb7b3d.jpeg',
    category: 'Coop63',
    title: 'Coop63 Experience: Entrar é escolher a pílula vermelha no universo do transporte por aplicativo',
    summary: 'O Presidente Jullian expôs os custos reais das plataformas e mostrou o caminho para o motorista ser dono do próprio negócio na Coop63.',
    content: [
      'Entrar na Coop63 é o equivalente a fazer a emblemática escolha da pílula vermelha no clássico Matrix: despertar para a realidade, abrir os olhos para as amarras invisíveis do mercado e enxergar as coisas exatamente como elas funcionam. Durante o evento Coop63 Experience, essa analogia traduziu com precisão o momento decisivo vivido pelos motoristas de aplicativo que escolhem romper com a ilusão criada pelas grandes corporações multinacionais.',
      'Por anos, os motoristas foram seduzidos pelo discurso de que eram "seus próprios chefes", enquanto enfrentavam jornadas desumanas de 12 a 16 horas por dia, arcando sozinhos com gasolina cara, manutenção, pneus e desvalorização do veículo, ao mesmo tempo em que viam parcelas astronômicas do seu esforço diário serem confiscadas por algoritmos internacionais.',
      'No palco do Coop63 Experience, o Presidente Jullian foi direto ao ponto e colocou no telão a matemática crua que todo motorista precisa fazer antes de ligar a ignição todas as manhãs. Jullian desmistificou o modelo predatório dos chamados "passes por tempo" cobrados pelas plataformas convencionais:',
      'Pagar R$ 46,00 por um passe diário de 24 horas ou R$ 124,00 a cada 3 dias parece um valor pequeno na correria diária, mas a conta acumulada é alarmante: são R$ 1.380,00 drenados a cada 30 dias — e mais de R$ 16.790,00 por ano jogados fora apenas pelo suposto "privilégio" de poder trabalhar.',
      '"Quase 17 mil reais por ano arrancados do sustento da sua família, do colégio dos seus filhos e da segurança do seu futuro", enfatizou o Presidente Jullian sob aplausos calorosos. "Na Coop63, a lógica é o oposto: na Coop63 NÃO HÁ cobrança de passes predatórios. Aqui, o motorista não é um número descartável em uma planilha estrangeira. No cooperativismo, ele deixa a condição de explorado para se tornar DONO e sócio do próprio negócio."',
      'A decisão de tomar a "pílula vermelha" representa a verdadeira alforria econômica da categoria. No modelo cooperativista da Coop63, cada motorista é cooperado, tem direito a voz e voto nas assembleias gerais, participa ativamente das decisões de preços e rotas e tem direito à distribuição anual das sobras financeiras (lucros). Toda a riqueza gerada pelo transporte de passageiros permanece no Tocantins, fortalecendo a renda local e as famílias de Palmas.',
      'O encontro contou também com a expressiva participação de Carlos Eduardo Matos, representante do Sistema OCB/TO, que resgatou a história das cooperativas no mundo e no Brasil, provocando um debate maduro e instigando os profissionais à capacitação contínua, união e governança democrática.',
      'A energia contagiante do auditório da DPE-TO e a adesão maciça dos motoristas comprovaram que a verdade dos números não deixa dúvidas: o futuro da mobilidade pertence àqueles que escolheram despertar e construir a sua própria prosperidade.',
      '📅 Data: 7 de novembro (sábado)\n⏰ Horário: das 9h às 12h\n📍 Local: Auditório da DPE-TO (https://maps.app.goo.gl/DwZer5jK22cY6DWD7)'
    ],
    date: '7 de novembro de 2026',
    readTime: '5 min de leitura'
  },
   {
    id: 7,
    image: '/assets/aistudio/IMG_8576_1f8ca5f0.jpg',
    category: 'Coop63',
    title: 'Coop63 Experience: Inovação e Força Cooperativista',
    summary: 'O evento reuniu cooperados para debater o futuro da mobilidade, celebrar conquistas e fortalecer o cooperativismo.',
    content: [
      'O Coop63 Experience consagrou-se como um dos eventos mais marcantes da trajetória da nossa cooperativa. Em um ambiente de grande celebração e entusiasmo, reunimos motoristas cooperados, lideranças e parceiros em um auditório plenamente integrado pelo mesmo propósito.',
      'O grande destaque da programação foi a participação especial de Carlos Eduardo Matos, do Sistema OCB/TO. Em uma palestra dinâmica e enriquecedora, Carlos Eduardo resgatou a história e as origens do cooperativismo mundial e brasileiro, demonstrando como a união de pessoas transforma realidades econômicas e sociais.',
      'Com provocações construtivas e reflexões profundas, ele promoveu um intenso debate entre os presentes, instigando todos os cooperados à busca contínua pelo conhecimento, capacitação e aprofundamento nos princípios cooperativistas essenciais para a nossa atividade de transporte de passageiros.',
      'A troca de ideias evidenciou a força do modelo cooperativo: uma estrutura justa, democrática e transparente, onde os motoristas não são apenas prestadores de serviço, mas donos e protagonistas do próprio negócio.',
      'Além das discussões estratégicas e do aprendizado coletivo, o encontro celebrou os avanços tecnológicos do aplicativo da Coop63 e a expansão de parcerias com redes de benefícios que reduzem os custos do dia a dia dos nossos cooperados.',
      '📅 Data: 7 de novembro (sábado)\n⏰ Horário: das 9h às 12h\n📍 Local: Auditório da DPE-TO (https://maps.app.goo.gl/DwZer5jK22cY6DWD7)'
    ],
    date: '7 de novembro de 2026',
    readTime: '4 min de leitura'
  },
  /*{
    id: 6,
    image: newsAppImg,
    category: 'Comunicado',
    title: 'Novos pontos de embarque e desembarque mapeados na cidade',
    summary: 'Confira os novos pontos de apoio para mais comodidade nas suas viagens. Mapeamos os locais mais estratégicos.',
    content: [
      'A Coop63 acaba de inaugurar novos pontos estratégicos de apoio, embarque e desembarque nas principais vias e centros comerciais da cidade.',
      'A iniciativa foi desenvolvida em conjunto com cooperados e usuários, visando garantir maior segurança nas paradas, áreas cobertas para espera e facilidade de acesso em horários de pico.',
      'Os novos locais contam com sinalização orientativa no aplicativo tanto para passageiros quanto para os motoristas cooperados. Consulte o mapa no app para conferir o ponto mais próximo de você.'
    ],
    date: '30 de outubro de 2026',
    readTime: '3 min de leitura'
  },*/
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Motoristas',
    title: 'Campanha: Motorista Valorizado e Reconhecido',
    summary: 'A Coop63 valoriza quem move a nossa cidade! Conheça as premiações e incentivos exclusivos para os cooperados este mês.',
    content: [
      'Neste mês, a Coop63 lança oficialmente a campanha "Motorista Valorizado", um programa de reconhecimento contínuo para os cooperados com melhores taxas de avaliação e pontualidade.',
      'Além de menores taxas administrativas da categoria, os motoristas participantes concorrem a vales de combustível, revisões veiculares completas e benefícios exclusivos da cooperativa.',
      '"Nosso objetivo é demonstrar que no modelo cooperativista todos crescem juntos e o trabalho de cada um faz a diferença", destacou a diretoria da Coop63.'
    ],
    date: '25 de outubro de 2026',
    readTime: '4 min de leitura'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Passageiros',
    title: 'Dicas de segurança e praticidade para suas viagens diárias',
    summary: 'Confira nossas recomendações para uma viagem ainda mais segura, desde a solicitação até a chegada ao seu destino.',
    content: [
      'A segurança e a tranquilidade dos passageiros são pilares fundamentais da Coop63. Para que sua experiência seja impecável em cada corrida, preparamos algumas recomendações essenciais:',
      '1. Sempre confira a placa, o modelo do veículo e o nome do motorista exibidos no aplicativo antes de embarcar.',
      '2. Utilize o compartilhamento de rota em tempo real com familiares ou amigos diretamente pelo botão do app.',
      '3. Avalie o motorista ao término da corrida; seu feedback é indispensável para mantermos o alto padrão de serviço.'
    ],
    date: '20 de outubro de 2026',
    readTime: '3 min de leitura'
  },
  /*{
    id: 3,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Coop63',
    title: 'Assembleia Geral Ordinária de Prestação de Contas',
    summary: 'Participe da assembleia da cooperativa e ajude a deliberar sobre novos investimentos e melhorias para a nossa frota.',
    content: [
      'Convidamos todos os membros e cooperados para a nossa Assembleia Geral Ordinária, que ocorrerá na sede da cooperativa com transmissão online.',
      'Na pauta estarão a prestação de contas do último exercício financeiro, a apresentação das metas de expansão tecnológica para o próximo semestre e a votação de novos benefícios para a categoria.',
      'A participação de cada cooperado é essencial para o fortalecimento da nossa democracia interna.'
    ],
    date: '14 de outubro de 2026',
    readTime: '2 min de leitura'
  },*/
  /*{
    id: 2,
    image: 'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Motoristas',
    title: 'Parceria com Redes de Postos de Combustível',
    summary: 'Fechamos uma nova parceria com redes de postos, oferecendo descontos expressivos no litro do combustível para motoristas cadastrados.',
    content: [
      'Buscando sempre reduzir os custos operacionais dos nossos cooperados, a Coop63 firmou convênio com mais de 15 postos de combustíveis na região.',
      'Para usufruir do desconto imediato na bomba, basta apresentar o crachá digital ativo no aplicativo da Coop63 no momento do pagamento.',
      'O desconto é válido para gasolina, etanol e GNV em todas as unidades credenciadas.'
    ],
    date: '06 de outubro de 2026',
    readTime: '3 min de leitura'
  },*/
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Coop63',
    title: 'Nova atualização do Aplicativo Coop63 disponível para download',
    summary: 'Versão 2.4 traz melhorias de estabilidade, menor consumo de bateria e cálculo de trajetos mais veloz.',
    content: [
      'A equipe de tecnologia da Coop63 acaba de lançar a versão 2.4 dos aplicativos para passageiro e motorista na Google Play e Apple App Store.',
      'Esta atualização reduz em até 30% o consumo de bateria durante corridas longas, otimiza o algoritmo de GPS para prever desvios de trânsito em tempo real e introduz novas opções de acessibilidade.',
      'Atualize seu aplicativo agora mesmo pela sua loja oficial para aproveitar todas as novidades.'
    ],
    date: '01 de outubro de 2026',
    readTime: '2 min de leitura'
  }
];
