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
    id: 1,
    image: newsAppImg,
    category: 'Comunicado',
    title: 'Novos pontos de embarque e desembarque mapeados na cidade',
    summary: 'Confira os novos pontos de apoio para mais comodidade nas suas viagens. Mapeamos os locais mais estratégicos.',
    content: [
      'A Coop63 acaba de inaugurar novos pontos estratégicos de apoio, embarque e desembarque nas principais vias e centros comerciais da cidade.',
      'A iniciativa foi desenvolvida em conjunto com cooperados e usuários, visando garantir maior segurança nas paradas, áreas cobertas para espera e facilidade de acesso em horários de pico.',
      'Os novos locais contam com sinalização orientativa no aplicativo tanto para passageiros quanto para os motoristas cooperados. Consulte o mapa no app para conferir o ponto mais próximo de você.'
    ],
    date: '15 de abril de 2026',
    readTime: '3 min de leitura'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Motoristas',
    title: 'Campanha: Motorista Valorizado e Reconhecido',
    summary: 'A Coop63 valoriza quem move a nossa cidade! Conheça as premiações e incentivos exclusivos para os cooperados este mês.',
    content: [
      'Neste mês, a Coop63 lança oficialmente a campanha "Motorista Valorizado", um programa de reconhecimento contínuo para os cooperados com melhores taxas de avaliação e pontualidade.',
      'Além de menores taxas administrativas da categoria, os motoristas participantes concorrem a vales de combustível, revisões veiculares completas e benefícios exclusivos da cooperativa.',
      '"Nosso objetivo é demonstrar que no modelo cooperativista todos crescem juntos e o trabalho de cada um faz a diferença", destacou a diretoria da Coop63.'
    ],
    date: '10 de abril de 2026',
    readTime: '4 min de leitura'
  },
  {
    id: 3,
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
    date: '05 de abril de 2026',
    readTime: '3 min de leitura'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Coop63',
    title: 'Assembleia Geral Ordinária de Prestação de Contas',
    summary: 'Participe da assembleia da cooperativa e ajude a deliberar sobre novos investimentos e melhorias para a nossa frota.',
    content: [
      'Convidamos todos os membros e cooperados para a nossa Assembleia Geral Ordinária, que ocorrerá na sede da cooperativa com transmissão online.',
      'Na pauta estarão a prestação de contas do último exercício financeiro, a apresentação das metas de expansão tecnológica para o próximo semestre e a votação de novos benefícios para a categoria.',
      'A participação de cada cooperado é essencial para o fortalecimento da nossa democracia interna.'
    ],
    date: '28 de março de 2026',
    readTime: '2 min de leitura'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Motoristas',
    title: 'Parceria com Redes de Postos de Combustível',
    summary: 'Fechamos uma nova parceria com redes de postos, oferecendo descontos expressivos no litro do combustível para motoristas cadastrados.',
    content: [
      'Buscando sempre reduzir os custos operacionais dos nossos cooperados, a Coop63 firmou convênio com mais de 15 postos de combustíveis na região.',
      'Para usufruir do desconto imediato na bomba, basta apresentar o crachá digital ativo no aplicativo da Coop63 no momento do pagamento.',
      'O desconto é válido para gasolina, etanol e GNV em todas as unidades credenciadas.'
    ],
    date: '20 de março de 2026',
    readTime: '3 min de leitura'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Coop63',
    title: 'Nova atualização do Aplicativo Coop63 disponível para download',
    summary: 'Versão 2.4 traz melhorias de estabilidade, menor consumo de bateria e cálculo de trajetos mais veloz.',
    content: [
      'A equipe de tecnologia da Coop63 acaba de lançar a versão 2.4 dos aplicativos para passageiro e motorista na Google Play e Apple App Store.',
      'Esta atualização reduz em até 30% o consumo de bateria durante corridas longas, otimiza o algoritmo de GPS para prever desvios de trânsito em tempo real e introduz novas opções de acessibilidade.',
      'Atualize seu aplicativo agora mesmo pela sua loja oficial para aproveitar todas as novidades.'
    ],
    date: '12 de março de 2026',
    readTime: '2 min de leitura'
  }
];
