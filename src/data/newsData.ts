import newsAppImg from '../assets/images/news_app_coop63_1788912399020.webp';
import driverInCarImg from '../assets/images/motorista_camisa_branca_1794492908369.webp';
import supermarketImg from '../assets/images/supermercado_camisa_verde_1794493072031.webp';
import stjDriverImg from '../assets/images/coop63_stj_decisao_motorista_1794945412714.webp';

export type NewsCategory = 'Comunicado' | 'Motoristas' | 'Passageiros' | 'Coop63';

export interface NewsItem {
  id: number;
  slug: string;
  image: string;
  category: NewsCategory;
  categories?: NewsCategory[];
  title: string;
  summary: string;
  content: string[];
  date: string;
  isoDate: string;
  readTime: string;
}

export const newsArticles: NewsItem[] = [
  {
    id: 14,
    slug: 'janeirao-2027-coop63-sem-passe-taxa-zero-km-mais-bem-pago',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-24_at_10.44.41_40e5c99b.jpeg',
    category: 'Comunicado',
    categories: ['Comunicado', 'Motoristas'],
    title: 'Janeirão 2027 COOP63: em mês de férias e recesso, faz sentido pagar para rodar?',
    summary: 'Com férias escolares e universitárias, recesso de órgãos públicos e redução da demanda de corridas, a COOP63 garante Sem Passe, Taxa Zero (0%) e KM mais bem pago para o dinheiro da mobilidade ficar em Palmas.',
    content: [
      'JANEIRÃO 2027 — COOP63: UM MÊS DE ALÍVIO PARA O MOTORISTA E MAIS DINHEIRO CIRCULANDO EM PALMAS 🚘💚',
      'Todo motorista de aplicativo conhece bem a realidade de janeiro em Palmas e no Tocantins. Chegam as férias escolares e universitárias, acontece o recesso de alguns poderes, órgãos e entidades do governo e, naturalmente, ocorre a redução da demanda de corridas pela cidade.',
      'Diante disso, vale parar e fazer uma pergunta direta que todo condutor já pensou no volante: faz sentido pagar para rodar nesse cenário?',
      'Quando o movimento cai, ter que pagar passe antecipado ou perder parte do ganho em taxas pesadas significa tirar dinheiro do próprio bolso antes mesmo de saber quantas corridas o dia vai render. Não é justo trabalhar dobrado apenas para cobrir cobranças fixas enquanto a cidade está em ritmo de férias.',
      '### A resposta da COOP63: em janeiro, não pague para trabalhar',
      'Pensando exatamente em quem está todos os dias nas ruas, a COOP63 apresenta o Janeirão 2027 — um mês de alívio real para o motorista cooperado e de fortalecimento da economia palmense:',
      '• Sem Passe: você não precisa desembolsar valores antecipados ou pagar assinatura para poder aceitar corridas.\n• Taxa Zero (0%): 0% de comissão — você não divide o seu esforço em momentos de menor movimento.\n• KM Mais Bem Pago: valorização justa pelo quilômetro rodado para proteger a rentabilidade do motorista.',
      '### Mais renda para você e mais recursos na economia local',
      'Na COOP63, a conta fecha a favor de quem dirige e da nossa própria cidade. O dinheiro da mobilidade fica em Palmas, valorizando nossa cidade, girando no comércio local e gerando mais renda para você e sua família.',
      'Se o cenário é de menos corridas por causa das férias e do recesso, a escolha mais inteligente é rodar onde você não paga para trabalhar.',
      'EM JANEIRO, NÃO PAGUE PARA TRABALHAR. RODE COM A COOP63.',
      'COOP63 | Mobilidade que conecta. Economia que fica.'
    ],
    date: '24 de novembro de 2026',
    isoDate: '2026-11-24',
    readTime: '3 min de leitura'
  },
  {
    id: 13,
    slug: 'agradecimento-aos-cooperados-coop63-759-corridas-30-dias',
    image: newsAppImg,
    category: 'Comunicado',
    categories: ['Comunicado', 'Motoristas', 'Coop63'],
    title: 'Agradecimento aos Cooperados – COOP63: 759 corridas finalizadas nos primeiros 30 dias',
    summary: 'Entre os dias 21 de outubro e 21 de novembro, completamos nossos primeiros 30 dias de operação alcançando a marca de 759 corridas finalizadas.',
    content: [
      'AGRADECIMENTO AOS COOPERADOS – COOP63 🤝🚀',
      'Hoje temos um motivo especial para agradecer a cada um de vocês que acredita no propósito da COOP63.',
      'Entre os dias 21 de outubro e 21 de novembro, completamos nossos primeiros 30 dias de operação, alcançando a marca de 759 corridas finalizadas.',
      'Esse número representa muito mais do que corridas. Representa trabalho, confiança, persistência, união e a coragem de construir um projeto diferente, pensado para valorizar os motoristas e fortalecer o cooperativismo.',
      'Cada corrida finalizada é uma pequena conquista que contribui para o crescimento da nossa cooperativa. Sabemos que ainda temos muito a melhorar, muitos desafios a superar e um longo caminho pela frente, mas cada passo dado até aqui demonstra que estamos construindo algo real.',
      'Agradecemos a cada cooperado que acreditou, que colocou o aplicativo para rodar, que atendeu nossos passageiros e que, mesmo diante das dificuldades, continua fazendo parte desse projeto.',
      '759 corridas finalizadas em 30 dias. Esse é apenas o começo!',
      'Que possamos continuar crescendo, fortalecendo nossa união e transformando o esforço individual em conquistas coletivas.',
      'O sucesso da COOP63 depende de cada um de nós. Quanto mais unidos estivermos, mais longe chegaremos.',
      'Obrigado por fazer parte dessa história!',
      '🚘 COOP63 — Mobilidade que conecta. 💚'
    ],
    date: '22 de novembro de 2026',
    isoDate: '2026-11-22',
    readTime: '3 min de leitura'
  },
  {
    id: 12,
    slug: 'promocao-10-reais-credito-coop63-mais-2000-passageiros-cadastrados',
    image: '/assets/aistudio/promocao10_a0a1ff38.jpeg',
    category: 'Coop63',
    categories: ['Passageiros', 'Motoristas', 'Coop63'],
    title: 'Promoção de R$ 10,00 em crédito é finalizada com sucesso e supera 2.000 passageiros cadastrados',
    summary: 'Realizada entre 31 de outubro e 15 de novembro de 2026, a campanha promocional da Coop63 atingiu a marca de mais de 2.000 passageiros cadastrados, fortalecendo corridas para motoristas e economia para usuários.',
    content: [
      'A Coop63 celebra o encerramento com sucesso da Promoção de R$ 10,00 em crédito, ação especial que teve início em 31 de outubro de 2026 e foi finalizada em 15 de novembro de 2026. Ao longo do período da campanha, a plataforma superou a expressiva marca de mais de 2.000+ passageiros cadastrados.',
      'Desenvolvida para aproximar ainda mais a comunidade do modelo cooperativo de mobilidade urbana, a iniciativa trouxe vantagens diretas tanto para quem utiliza o aplicativo para se deslocar quanto para quem dirige todos os dias pela cooperativa.',
      '### Cronograma da Campanha',
      'TIMELINE:\n31 de outubro de 2026 — Início da Promoção | Lançamento oficial da campanha promocional de R$ 10,00 em crédito para novos passageiros no aplicativo da Coop63.\n15 de novembro de 2026 — Finalização com Sucesso | Encerramento oficial da ação superando a marca de mais de 2.000+ passageiros cadastrados na plataforma.',
      '### Impacto para Passageiros, Motoristas e para a Coop63',
      '• Para os Passageiros: a promoção garantiu R$ 10,00 em crédito para experimentar o aplicativo Coop63, conhecendo na prática um atendimento próximo, veículos vistoriados e preços justos e transparentes em cada corrida.\n• Para os Motoristas Cooperados: a chegada de mais de dois mil novos cadastros amplia diretamente o fluxo de solicitações de viagens na cidade, gerando mais oportunidades de faturamento para quem roda com a cooperativa.\n• Para a Coop63: o resultado confirma a confiança da população no cooperativismo tocantinense, mantendo os recursos circulando localmente e consolidando uma alternativa humana e sustentável no transporte por aplicativo.',
      '### Agradecimento Oficial',
      'A Coop63 agradece a todos os passageiros e motoristas cooperados que participaram, compartilharam a campanha e confiaram em nosso trabalho entre os dias 31 de outubro e 15 de novembro. Seguimos trabalhando juntos por uma mobilidade cada vez mais justa e conectada!',
      'COOP63 – Mobilidade que conecta!'
    ],
    date: '19 de novembro de 2026',
    isoDate: '2026-11-19',
    readTime: '3 min de leitura'
  },
  {
    id: 11,
    slug: 'stj-suspende-liminar-trabalhista-passe-motoristas-uber',
    image: stjDriverImg,
    category: 'Motoristas',
    title: 'STJ suspende liminar trabalhista e libera provisoriamente o “Passe para Motoristas” da Uber',
    summary: 'Decisão do ministro Raul Araújo divulgada em 17 de novembro permite a retomada imediata das cobranças da assinatura enquanto o tribunal define se o caso cabe à Justiça Comum ou à Trabalhista.',
    content: [
      'O Superior Tribunal de Justiça (STJ) suspendeu provisoriamente a liminar da Justiça do Trabalho que proibia a cobrança do programa “Passe para Motoristas” da Uber em todo o Brasil. A decisão, assinada pelo ministro Raul Araújo e divulgada nesta terça-feira (17 de novembro de 2026), permite que a plataforma retome imediatamente as adesões, renovações e cobranças da assinatura semanal enquanto o tribunal decide qual ramo do Judiciário tem competência para julgar o caso.',
      'NOTA: Embora a mídia e o setor frequentemente associem as duas gigantes no debate regulatório, a ação civil pública atual do Ministério Público do Trabalho e a decisão específica de hoje do STJ tratam exclusivamente do programa “Passe para Motoristas” da Uber (e não da 99).',
      '### Clipping de Notícias — Decisão do STJ (17/11/2026)',
      'CLIPPING:\nG1 | STJ suspende decisão que impedia cobrança de taxa da Uber para motoristas em todo o país | Destaca a reviravolta jurídica: o ministro Raul Araújo atendeu ao pedido de conflito de competência movido pela Uber, derrubando a liminar da 9ª Vara do Trabalho de Salvador.\nSpaceMoney | STJ suspende liminar trabalhista e libera provisoriamente o Passe para Motoristas da Uber | Ressalta o argumento jurídico usado pelo ministro: precedentes da Segunda Seção do STJ indicam que disputas entre apps e motoristas sem pedido de vínculo empregatício cabem à Justiça Comum, e não à Trabalhista.\nBPMoney | STJ suspende bloqueio do Passe para Motoristas da Uber | Explica o funcionamento do modelo de assinatura (pagamento fixo antecipado em troca de 0% de taxa variável por corrida) e o argumento do MPT de que o modelo transfere o risco econômico do negócio ao condutor.\nSou de Palmas | STJ suspende proibição de taxa semanal da Uber e permite retomada de cobranças a motoristas em todo o Brasil | Detalha os próximos passos processuais: o STJ deu prazo de 10 dias para manifestação das partes e posterior parecer do Ministério Público Federal antes de definir o juízo definitivo.',
      '### Contexto e Linha do Tempo do Caso',
      'TIMELINE:\n25 de maio de 2026 — Lançamento | A Uber inicia os testes do Passe para Motoristas (nos formatos por tempo ou por limite de ganhos), substituindo a comissão percentual por corrida por uma taxa fixa pré-paga, chegando a 42 cidades e ultrapassando R$ 1.000 mensais para motoristas de tempo integral.\nAgosto de 2026 — Ação do MPT | O Ministério Público do Trabalho na Bahia ajuíza Ação Civil Pública pedindo o fim do programa, devolução dos valores cobrados e indenização de R$ 321 milhões por danos morais coletivos.\n11 de novembro de 2026 — Bloqueio Trabalhista | O juiz Luciano Dorea Martinez Carreiro, da 9ª Vara do Trabalho de Salvador, concede liminar suspendendo o programa em âmbito nacional sob pena de multa diária de até R$ 300 mil.\n17 de novembro de 2026 — Reviravolta no STJ | Ao analisar o conflito de competência suscitado pela Uber, o ministro Raul Araújo suspende a liminar trabalhista por risco de decisões conflitantes entre esferas judiciais, ressaltando que o mérito sobre a legalidade da taxa ainda não foi julgado.',
      '### Posição da COOP63: aqui não existe passe',
      'Diante das idas e vindas judiciais envolvendo a cobrança de assinaturas antecipadas nas plataformas tradicionais, a COOP63 reforça a segurança e a previsibilidade do modelo cooperativista adotado em Palmas desde a sua fundação: na cooperativa não existe passe.',
      'Na COOP63, o motorista cooperado não precisa desembolsar valores fixos antecipados nem assumir o risco de pagar para trabalhar sem garantia de retorno. Nossa taxa é zero para os motoristas.',
      'Além disso, o cooperado é sócio da cooperativa, possui voz e voto nas assembleias gerais e participa diretamente das decisões sobre regras e tarifas, enquanto os recursos que permanecem na cooperativa circulam localmente em Palmas e no Tocantins.',
      'FONTES DA MATÉRIA:\nClipping jornalístico da decisão monocrática proferida pelo ministro Raul Araújo no Superior Tribunal de Justiça (STJ) em 17 de novembro de 2026, em conflito de competência referente à Ação Civil Pública do MPT na Bahia.\n\nVeículos consultados (17 nov. 2026):\n• G1: "STJ suspende decisão que impedia cobrança de taxa da Uber para motoristas em todo o país".\n• SpaceMoney: "STJ suspende liminar trabalhista e libera provisoriamente o Passe para Motoristas da Uber".\n• BPMoney: "STJ suspende bloqueio do Passe para Motoristas da Uber".\n• Sou de Palmas: "STJ suspende proibição de taxa semanal da Uber e permite retomada de cobranças a motoristas em todo o Brasil".'
    ],
    date: '17 de novembro de 2026',
    isoDate: '2026-11-17',
    readTime: '4 min de leitura'
  },
  {
    id: 10,
    slug: 'diretrizes-corridas-supermercado-aplicativo-coop63',
    image: supermarketImg,
    category: 'Comunicado',
    title: 'Comunicado Oficial: Diretrizes para Corridas de Supermercado no Aplicativo',
    summary: 'Informações importantes para cooperados sobre a opção "Supermercado" nas configurações do aplicativo Coop63. Saiba quando ativar e como funciona o atendimento.',
    content: [
      'Prezados cooperados,',
      'Informamos que o botão "Supermercado", disponível nas configurações do aplicativo Coop63, deve ser marcado somente pelos motoristas que não possuem restrições ou objeções em realizar corridas que envolvam supermercados, atacarejos e centros de compras.',
      'Atenção importante: a ativação dessa opção não garante tarifas ou valores maiores para esse tipo de corrida. O valor do trajeto segue as diretrizes habituais do app.',
      'Portanto, orientamos a todos:',
      '• Marque a opção: se você aceita e tem disponibilidade para realizar corridas de supermercado;\n• Deixe desmarcada: se não deseja receber esse tipo de solicitação na sua rotina.',
      'IMAGE:/assets/aistudio/PreferenciaCorrida_ee1c318a.webp | Tela de Preferências de corrida no app Coop63 com o botão Supermercado',
      'Pedimos a todos que configurem essa opção de acordo com sua disponibilidade e preferência, evitando recusas desnecessárias e contribuindo para uma melhor experiência dos passageiros e cooperados.',
      'A colaboração e a organização de cada um fortalecem a qualidade do nosso serviço para toda a comunidade de Palmas!',
      'COOP63 – Mobilidade que conecta!'
    ],
    date: '11 de novembro de 2026',
    isoDate: '2026-11-11',
    readTime: '2 min de leitura'
  },
  {
    id: 9,
    slug: 'justica-trabalho-suspende-passe-motoristas-uber',
    image: driverInCarImg,
    category: 'Motoristas',
    title: 'Justiça do Trabalho suspende “Passe para Motoristas” da Uber em todo o país',
    summary: 'Liminar atende a pedido do Ministério Público do Trabalho e proíbe a cobrança antecipada para que motoristas aceitem corridas. Entenda a decisão e o modelo da COOP63, em que não existe passe.',
    content: [
      'A Justiça do Trabalho determinou a suspensão, em todo o Brasil, do programa “Passe para Motoristas”, da Uber. A liminar foi assinada em 9 de novembro de 2026 pelo juiz Luciano Dorea Martinez Carreiro, titular da 9ª Vara do Trabalho de Salvador (BA), em ação civil pública movida pelo Ministério Público do Trabalho (MPT) (processo nº 0000773-47.2026.5.05.0009).',
      'A empresa tem 48 horas, contadas da intimação pessoal, para cumprir três obrigações: suspender o programa para motoristas e motociclistas, nas modalidades por tempo e por ganhos; deixar de exigir taxa de assinatura, taxa de acesso ou qualquer valor equivalente como condição para aceitar corridas, seja qual for o nome da cobrança; e retirar de seus canais a publicidade que associa o passe à “previsibilidade de ganhos”. Cada obrigação descumprida sujeita a Uber a multa diária de R$ 100 mil.',
      '### Como funcionava o passe',
      'Lançado em 25 de maio de 2026, o programa substituía a taxa cobrada sobre cada viagem por um valor fixo, pago antecipadamente pelo motorista que aderisse. Havia duas modalidades: o passe por tempo, válido por 24 ou 72 horas, e o passe por ganhos, válido até o motorista atingir uma faixa de faturamento. Durante a vigência, a taxa de serviço por corrida era zero. Segundo a Uber, o modelo estava em fase de testes; em setembro, a empresa informou à Justiça que ele funcionava para carros em 29 cidades e também na categoria Moto.',
      '### O que alega o MPT',
      'Na ação, ajuizada em agosto, o MPT sustenta que o programa inverte a lógica do risco do negócio: o motorista paga antes para ter acesso às corridas, sem garantia de volume mínimo de viagens — o que os próprios termos da Uber reconhecem. Para o procurador Ilan Fonseca, do MPT, a cobrança viola a legislação brasileira e a Convenção 181 da Organização Internacional do Trabalho (OIT), que proíbe agências privadas de emprego de cobrar tarifas dos trabalhadores.',
      'O MPT também pede a devolução dos valores pagos pelos motoristas, indenização de R$ 321 milhões por dano moral coletivo e acesso ao código-fonte do algoritmo da plataforma. Esses pedidos ainda serão julgados.',
      '### E quem já comprou o passe?',
      'Pela decisão, quem tinha passe ativo e integralmente pago mantém a taxa zero até o fim do período ou da faixa de ganhos contratada, sem renovação. Nos casos de pagamento parcial ou débito registrado, a Uber não pode fazer novas cobranças ligadas ao programa. Nas demais situações, a empresa pode voltar a cobrar por viagem. A audiência para receber a defesa e instruir o processo está marcada para 27 de novembro, em Salvador.',
      '### O que diz a Uber',
      'Em nota, a Uber informou que analisa a liminar e avalia as medidas judiciais cabíveis para contestá-la. A empresa afirma que o passe é uma alternativa comercial em teste e que modelos de assinatura são usados há anos por outros aplicativos do setor. Por isso, vê na decisão “insegurança jurídica e desequilíbrio concorrencial”.',
      '### Posição da COOP63: aqui não existe passe',
      'Para a COOP63, cooperativa de transporte por aplicativo de Palmas, a decisão reforça uma escolha feita desde a fundação: na cooperativa não há passe. O cooperado não adianta nenhum valor para poder trabalhar. Ele contribui com 15% sobre cada corrida realizada; se não roda, não paga.',
      'O motorista também não é apenas um cadastro em uma plataforma. Ele é sócio da cooperativa, vota nas assembleias e participa das decisões. Pela Lei nº 5.764/1971, as sobras líquidas do exercício, quando houver, retornam aos cooperados na proporção das operações de cada um, salvo decisão contrária da assembleia geral. E a parcela da receita que fica com a cooperativa permanece em Palmas.',
      'A COOP63 convida os motoristas de Palmas a conhecer de perto o modelo cooperativo. Central de Atendimento e WhatsApp: (63) 98498-4085 | Sede: Palmas - Tocantins.',
      'FONTES DA MATÉRIA:\nDecisão liminar proferida na Ação Civil Pública nº 0000773-47.2026.5.05.0009 pela 9ª Vara do Trabalho de Salvador (TRT-5).\n\nReferências e cobertura jornalística consultada (ABNT NBR 6023:2018):\n• BRASIL. Lei nº 5.764, de 16 de dezembro de 1971. Define a Política Nacional de Cooperativismo.\n• Metrópoles: "Justiça suspende nova cobrança de taxa para motoristas da Uber" (11 nov. 2026).\n• InfoMoney: "Justiça do Trabalho suspende \'Passe para Motoristas\' da Uber em todo país" (11 nov. 2026).\n• Portal O Dia: "Justiça suspende \'Passe para Motoristas\' da Uber em todo país" (11 nov. 2026).\n• Portal 98 FM Natal: "Justiça suspende cobrança de taxa para motoristas aceitarem corridas na Uber" (11 nov. 2026).\n• Canaltech: "Uber é processada por R$ 321 milhões por taxa cobrada de motoristas" (2026).\n• AutoPapo: "MPT processa Uber em R$ 321 milhões por motoristas terem que pagar para trabalhar" (28 ago. 2026).\n• O Povo: "Uber é processada no Brasil por taxa cobrada de motoristas, mas caso ainda depende da Justiça" (28 ago. 2026).\n• Mobile Time: "MPT processa Uber por taxa sobre corridas e pede indenização de R$ 321 milhões" (26 ago. 2026).'
    ],
    date: '11 de novembro de 2026',
    isoDate: '2026-11-11',
    readTime: '5 min de leitura'
  },
  {
    id: 8,
    slug: 'coop63-experience-quanto-passes-custam-motorista-dono',
    image: '/assets/aistudio/Presid_26eb7b3d.webp',
    category: 'Coop63',
    title: 'No Coop63 Experience, presidente mostra quanto os passes custam e apresenta o modelo em que o motorista é dono',
    summary: 'Jullian Miranda colocou no telão a conta dos passes cobrados pelas plataformas e explicou por que, na Coop63, o motorista só paga quando roda.',
    content: [
      'Entrar na Coop63 é como escolher a pílula vermelha do filme Matrix: abrir os olhos para como o mercado de aplicativos realmente funciona. A analogia marcou o Coop63 Experience, realizado em 07/11/2026 no auditório da Defensoria Pública do Estado do Tocantins (DPE-TO), em Palmas, e resumiu a escolha que a cooperativa propõe aos motoristas de aplicativo.',
      'Há anos, os motoristas ouvem que são “seus próprios chefes”. Na prática, arcam sozinhos com combustível, manutenção, pneus e desvalorização do carro, e não controlam a taxa cobrada pela plataforma. Em recibos de 2026 reunidos pela cooperativa, a parte da plataforma variou de 22% a 35% do preço da viagem (COOP63, 2026). A jornada também é longa: segundo o IBGE, os motoristas de aplicativo trabalharam em média 45,9 horas por semana em 2025, 5,5 horas a mais que os demais motoristas (SÓ […], 2026; TRABALHADORES […], 2026).',
      '### A conta dos passes',
      'No palco, o presidente da Coop63, Jullian Gabriel Ferreira Miranda, mostrou no telão a conta que, segundo ele, todo motorista deveria fazer antes de ligar o carro. O alvo foram os passes por tempo, em que o motorista paga antes para poder rodar.',
      'Na Uber, o passe de 24 horas custava R$ 46,00 e o de 72 horas, R$ 124,00, segundo os preços vistos no aplicativo em Palmas, em 2 de novembro; os valores variam de cidade para cidade (COOP63, 2026). Quem compra um passe de 24 horas todos os dias gasta R$ 1.380,00 em 30 dias e R$ 16.790,00 em um ano. Mesmo combinando os passes de 3 dias, o gasto chega a R$ 1.240,00 por mês e R$ 15.096,00 por ano. Na 99, os pacotes custavam R$ 39,99 por dia e R$ 107,99 por três dias, em preço promocional.',
      '“Quase 17 mil reais por ano arrancados do sustento da sua família, do colégio dos seus filhos e da segurança do seu futuro”, disse Jullian, aplaudido pela plateia. “Na Coop63, a lógica é o oposto: não há cobrança de passes. Aqui, o motorista não é um número descartável em uma planilha estrangeira. No cooperativismo, ele deixa a condição de explorado para se tornar dono e sócio do próprio negócio.”',
      '### Só paga quando roda',
      'Na Coop63 não existe passe: o cooperado contribui com 15% sobre cada corrida concluída e não paga nada em dia parado. Numa corrida de R$ 15,00, por exemplo, R$ 12,75 ficam com o motorista e R$ 2,25 com a cooperativa (COOP63, 2026).',
      'A cooperativa também apresentou uma projeção. Se 600 motoristas comprassem dois passes de R$ 46,00 por dia, seriam R$ 55.200 por dia, R$ 1.656.000 por mês e R$ 20.148.000 por ano saindo de Palmas. É esse dinheiro que, segundo a Coop63, deixaria de sair da cidade se esses motoristas fossem cooperados. A conta parte de uma premissa da cooperativa, e não de um resultado já alcançado.',
      '### Dono do próprio negócio',
      'Para a Coop63, a escolha da “pílula vermelha” é um caminho de independência econômica para a categoria. Cada motorista é cooperado e tem voz e voto nas assembleias gerais, onde se aprovam regras como a tarifa. Havendo sobras no fim do exercício, elas são distribuídas aos cooperados conforme o Estatuto (BRASIL, 1971). E os recursos que ficam com a cooperativa circulam em Palmas e no Tocantins.',
      'O encontro contou também com a participação de Carlos Eduardo Matos, representante do Sistema OCB/TO. Ele apresentou a história das cooperativas no mundo e no Brasil e incentivou os motoristas à capacitação contínua, à união e à governança democrática.',
      'Para a Coop63, o recado ficou claro: o futuro da mobilidade em Palmas pode estar nas mãos de quem decidir ser dono do próprio trabalho.',
      'Contexto: em 9 de novembro de 2026, a Justiça do Trabalho suspendeu em todo o país, por liminar, o “Passe para Motoristas” da Uber, a pedido do Ministério Público do Trabalho. A Uber informou que avalia as medidas judiciais cabíveis (TEIXEIRA; SCHWINGEL, 2026).',
      'FONTES DA MATÉRIA:\nReferências e fontes consultadas (ABNT NBR 6023:2018):\n• BRASIL. Lei nº 5.764, de 16 de dezembro de 1971. Define a Política Nacional de Cooperativismo, institui o regime jurídico das sociedades cooperativas, e dá outras providências. Diário Oficial da União: seção 1, Brasília, DF, 16 dez. 1971.\n• COOP63 – COOPERATIVA DE MOBILIDADE. Seja dono do seu próprio trabalho: apresentação de adesão. Palmas: COOP63, nov. 2026. Apresentação em PowerPoint. Documento interno.\n• SÓ 1 em cada 5 motociclistas de aplicativo tem cobertura previdenciária. A Crítica, Manaus, 2026.\n• TEIXEIRA, Isadora; SCHWINGEL, Samara. Justiça suspende nova cobrança de taxa para motoristas da Uber. Metrópoles, Brasília, 11 nov. 2026. Coluna Grande Angular.\n• TRABALHADORES por app chegam a 2 milhões, mas dois terços não têm previdência. Movimento Econômico, 4 set. 2026.'
    ],
    date: '7 de novembro de 2026',
    isoDate: '2026-11-07',
    readTime: '5 min de leitura'
  },
  {
    id: 7,
    slug: 'coop63-experience-inovacao-forca-cooperativista',
    image: '/assets/aistudio/IMG_8576_1f8ca5f0.webp',
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
    isoDate: '2026-11-07',
    readTime: '4 min de leitura'
  },
  /*{
    id: 6,
    slug: 'novos-pontos-embarque-desembarque-mapeados',
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
    isoDate: '2026-10-30',
    readTime: '3 min de leitura'
  },*/
  {
    id: 5,
    slug: 'campanha-motorista-valorizado-reconhecido',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp',
    category: 'Motoristas',
    title: 'Campanha: Motorista Valorizado e Reconhecido',
    summary: 'A Coop63 valoriza quem move a nossa cidade! Conheça as premiações e incentivos exclusivos para os cooperados este mês.',
    content: [
      'Neste mês, a Coop63 lança oficialmente a campanha "Motorista Valorizado", um programa de reconhecimento contínuo para os cooperados com melhores taxas de avaliação e pontualidade.',
      'Além de menores taxas administrativas da categoria, os motoristas participantes concorrem a vales de combustível, revisões veiculares completas e benefícios exclusivos da cooperativa.',
      '"Nosso objetivo é demonstrar que no modelo cooperativista todos crescem juntos e o trabalho de cada um faz a diferença", destacou a diretoria da Coop63.'
    ],
    date: '25 de outubro de 2026',
    isoDate: '2026-10-25',
    readTime: '4 min de leitura'
  },
  {
    id: 4,
    slug: 'dicas-seguranca-praticidade-viagens-diarias',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp',
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
    isoDate: '2026-10-20',
    readTime: '3 min de leitura'
  },
  /*{
    id: 3,
    slug: 'assembleia-geral-ordinaria-prestacao-contas',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp',
    category: 'Coop63',
    title: 'Assembleia Geral Ordinária de Prestação de Contas',
    summary: 'Participe da assembleia da cooperativa e ajude a deliberar sobre novos investimentos e melhorias para a nossa frota.',
    content: [
      'Convidamos todos os membros e cooperados para a nossa Assembleia Geral Ordinária, que ocorrerá na sede da cooperativa com transmissão online.',
      'Na pauta estarão a prestação de contas do último exercício financeiro, a apresentação das metas de expansão tecnológica para o próximo semestre e a votação de novos benefícios para a categoria.',
      'A participação de cada cooperado é essencial para o fortalecimento da nossa democracia interna.'
    ],
    date: '14 de outubro de 2026',
    isoDate: '2026-10-14',
    readTime: '2 min de leitura'
  },*/
  /*{
    id: 2,
    slug: 'parceria-redes-postos-combustivel',
    image: 'https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp',
    category: 'Motoristas',
    title: 'Parceria com Redes de Postos de Combustível',
    summary: 'Fechamos uma nova parceria com redes de postos, oferecendo descontos expressivos no litro do combustível para motoristas cadastrados.',
    content: [
      'Buscando sempre reduzir os custos operacionais dos nossos cooperados, a Coop63 firmou convênio com mais de 15 postos de combustíveis na região.',
      'Para usufruir do desconto imediato na bomba, basta apresentar o crachá digital ativo no aplicativo da Coop63 no momento do pagamento.',
      'O desconto é válido para gasolina, etanol e GNV em todas as unidades credenciadas.'
    ],
    date: '06 de outubro de 2026',
    isoDate: '2026-10-06',
    readTime: '3 min de leitura'
  },*/
  {
    id: 1,
    slug: 'atualizacao-aplicativo-coop63-versao-2-4',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp',
    category: 'Coop63',
    title: 'Nova atualização do Aplicativo Coop63 disponível para download',
    summary: 'Versão 2.4 traz melhorias de estabilidade, menor consumo de bateria e cálculo de trajetos mais veloz.',
    content: [
      'A equipe de tecnologia da Coop63 acaba de lançar a versão 2.4 dos aplicativos para passageiro e motorista na Google Play e Apple App Store.',
      'Esta atualização reduz em até 30% o consumo de bateria durante corridas longas, otimiza o algoritmo de GPS para prever desvios de trânsito em tempo real e introduz novas opções de acessibilidade.',
      'Atualize seu aplicativo agora mesmo pela sua loja oficial para aproveitar todas as novidades.'
    ],
    date: '01 de outubro de 2026',
    isoDate: '2026-10-01',
    readTime: '2 min de leitura'
  }
];
