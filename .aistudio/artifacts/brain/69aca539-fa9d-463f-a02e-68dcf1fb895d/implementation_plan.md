# Otimização de SEO Técnico e Metadados Estruturados (Coop63)

Implementação de otimizações técnicas invisíveis de Search Engine Optimization (SEO) para posicionar o site da Coop63 no topo dos resultados de busca do Google no Tocantins, preservando 100% do layout e design visual já aprovados.

### User Review & Critical Decisions

> [!IMPORTANT]
> O usuário confirmou expressamente a escolha de **"Apenas otimizações técnicas sem mudar o layout atual"**. O plano a seguir restringe-se estritamente à camada de código (metadados, scripts semânticos, sitemap e indexação), sem adicionar novas páginas ou alterar seções do site.

- **Escopo Visual**: Preservação total da interface, cores e componentes atuais.
- **Escopo Técnico**: Injeção de dados estruturados JSON-LD, arquivos de indexação (`robots.txt` e `sitemap.xml`), tags OpenGraph e meta tags geolocalizadas (Palmas / Tocantins).

---

### 1. Overview & Core Concept

- **O que faz**: Adiciona uma infraestrutura completa de SEO técnico aos padrões modernos do Google e do W3C / Schema.org, permitindo que os robôs do Google compreendam a relevância da cooperativa, identifiquem a sede física em Palmas/TO e reconheçam os aplicativos móveis oficiais vinculados (Google Play e Apple App Store).
- **Público-alvo**: Passageiros e motoristas pesquisando no Google por aplicativos de transporte, viagens urbanas ou cooperativismo em Palmas e em todo o Estado do Tocantins.
- **Benefício principal**: Aumento de visibilidade orgânica sem custo de anúncios e sem necessidade de reformulação de layout.

---

### 2. User Experience & Visual Design

- **Impacto no Design**: Zero impacto visual negativo. A experiência de navegação, fluidez, responsividade mobile e estética visual permanecem idênticas.
- **Melhoria no Compartilhamento Social**: Ao compartilhar o link do site no WhatsApp, Telegram, Facebook ou LinkedIn, o card gerado apresentará título atraente, imagem de visualização nítida da logo/marca e descrição convidativa com chamada para ação.

---

### 3. Key Product Decisions & Trade-Offs

- **Decisão 1: Dados Estruturados em JSON-LD (`index.html`)**:
  - *Abordagem*: Adicionar blocos `@graph` no `<head>` com tipos `Cooperative`, `LocalBusiness` e `SoftwareApplication` para os dois aplicativos oficiais.
  - *Por que*: O Google recomenda formalmente o formato JSON-LD para exibição de Rich Snippets (estrelas, horários 24/7, botões de instalação e localização no Google Maps).
  - *Alternativa descartada*: Microdata inline em tags HTML, que poluiria o código dos componentes React e dificultaria manutenções futuras.

- **Decisão 2: Arquivos Estáticos de Indexação (`public/robots.txt` e `public/sitemap.xml`)**:
  - *Abordagem*: Gerar arquivos padronizados no diretório estático público com mapeamento de todas as rotas públicas (`/`, `/passageiros`, `/motoristas`, `/sobre`, `/noticias`, `/contato`, `/termos`, `/privacidade`).
  - *Por que*: Facilita o rastreamento automatizado pelos robôs do Google Search Console e Bing Webmaster Tools.

- **Decisão 3: Meta Tags Geográficas e Canônicas**:
  - *Abordagem*: Incluir `geo.region: BR-TO`, `geo.placename: Palmas`, coordenadas aproximadas e `<link rel="canonical" href="https://coop63.coop.br/">`.
  - *Por que*: Reforça o sinal de busca hiperlocal quando o usuário pesquisa de um smartphone localizado no estado do Tocantins.

---

### 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────┐
│                    Google Bot / Web Crawlers                │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
               ▼                              ▼
      ┌─────────────────┐            ┌─────────────────┐
      │   robots.txt    │            │   sitemap.xml   │
      │  (Permissões)   │            │ (Índice de URLs)│
      └─────────────────┘            └─────────────────┘
                                              │
               ┌──────────────────────────────┘
               ▼
┌─────────────────────────────────────────────────────────────┐
│                       index.html                            │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Geo Tags: BR-TO (Palmas) + Canonical                  │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │ OpenGraph / Twitter Cards (WhatsApp, redes sociais)   │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │ JSON-LD: Cooperative / LocalBusiness (Palmas/TO)      │  │
│  │  - Nome: COOPGO63                                     │  │
│  │  - CNPJ: 68.699.797/0001-09                           │  │
│  │  - Contato: (63) 98498-4085                           │  │
│  │  - Horário: 24/7                                      │  │
│  ├───────────────────────────────────────────────────────┤  │
│  │ JSON-LD: SoftwareApplication (Passageiro & Motorista) │  │
│  │  - Google Play Store & Apple App Store URLs           │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

#### Rastreamento e Mapeamento de Rotas
| Rota | Prioridade no Sitemap | Frequência |
| :--- | :--- | :--- |
| `/` (Início) | 1.0 | Diária |
| `/passageiros` | 0.9 | Semanal |
| `/motoristas` | 0.9 | Semanal |
| `/sobre` | 0.7 | Mensal |
| `/noticias` | 0.8 | Semanal |
| `/contato` | 0.7 | Mensal |
| `/termos` & `/privacidade` | 0.5 | Mensal |
