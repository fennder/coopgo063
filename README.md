# Coop63 — Portal Oficial de Mobilidade Cooperativa (`coop63.coop.br`)

Site institucional, central de notícias e portal de captação para passageiros e motoristas da **COOPGO63 — Cooperativa de Transporte Privado de Passageiros do Estado do Tocantins** (CNPJ `68.699.797/0001-09`), com sede em Palmas - TO.

---

## Stack Tecnológica

- **Frontend:** React 19, TypeScript, React Router DOM 7
- **Estilização:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Ícones:** Lucide React
- **Build & Tooling:** Vite 6, `esbuild`, `sharp` (processamento de imagens/logos), `tsx`
- **Hospedagem alvo:** Netlify (`netlify.toml` com regras de cache e fallback SPA)

---

## Estrutura do Projeto

```text
├── index.html                  # HTML base com JSON-LD global (LocalBusiness + SoftwareApplication)
├── netlify.toml                # Build command, políticas de Cache-Control e rewrite SPA
├── public/
│   ├── assets/aistudio/        # Imagens estáticas públicas otimizadas em WebP
│   ├── og-image.jpg            # Imagem padrão de compartilhamento social (1200x630)
│   ├── logo-*.svg / .png       # Logotipos oficiais gerados pelo script de marca
│   ├── robots.txt              # Diretivas de rastreamento para buscadores
│   └── sitemap.xml             # Mapa do site atualizado automaticamente no build
├── scripts/
│   ├── generate-logos.js       # Geração dos ativos SVG/PNG da marca Coop63
│   └── postbuild-seo.mjs       # Pós-build: gera sitemap.xml e pré-renderiza HTML SEO por rota/slug
└── src/
    ├── App.tsx                 # Roteamento com Code Splitting (React.lazy + Suspense)
    ├── components/
    │   ├── SeoHead.tsx         # Gerenciador dinâmico de <title>, meta tags, OG e JSON-LD
    │   ├── Hero.tsx            # Banner principal com imagem LCP prioritária
    │   ├── Passengers.tsx      # Seção para passageiros
    │   ├── Drivers.tsx         # Seção para motoristas
    │   ├── AppDownload.tsx     # QR Codes e links diretos (Google Play e Apple App Store)
    │   ├── News.tsx            # Vitrine das últimas notícias na Home
    │   ├── Contact.tsx         # Formulário e canais oficiais de atendimento
    │   └── Footer.tsx          # Rodapé institucional e links legais
    ├── data/
    │   └── newsData.ts         # Base estruturada de notícias e comunicados (com slug e isoDate)
    ├── layouts/Layout.tsx      # Layout base (Header, Footer e CookieConsentBanner)
    └── pages/                  # Páginas roteadas (/passageiros, /motoristas, /noticias/:id, etc.)
```

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento Vite |
| `npm run build` | Executa `vite build` seguido de `node scripts/postbuild-seo.mjs` para gerar bundles, `sitemap.xml` e HTMLs pré-renderizados por rota |
| `npm run preview` | Pré-visualiza localmente a pasta `dist/` gerada pelo build |
| `npm run lint` | Executa verificação estrita de tipos TypeScript (`tsc --noEmit`) |
| `npm run generate-logos` | Regera os logotipos vetoriais e PNG em `public/` |

---

## Arquitetura de SEO e Otimizações de Performance

### 1. SEO Técnico, Metadados e Pré-renderização Estática
- **Metadados Dinâmicos (`src/components/SeoHead.tsx`):** Atualiza em tempo real `<title>`, `<meta name="description">`, `<meta name="robots">`, `<link rel="canonical">`, OpenGraph (`og:*`, `article:*`), Twitter Cards e bloco JSON-LD específico da rota atualizada.
- **Pré-renderização no Pós-Build (`scripts/postbuild-seo.mjs`):** Ao final de `npm run build`, o script lê os artigos ativos de `src/data/newsData.ts` via `esbuild`, resolve os hashes reais de imagens gerados em `dist/assets/` e cria arquivos `dist/<rota>/index.html` dedicados para:
  - Rotas institucionais (`/passageiros`, `/motoristas`, `/sobre`, `/noticias`, `/contato`, `/termos`, `/privacidade`);
  - Todas as matérias publicadas em `/noticias/<slug>` e seus atalhos numéricos retrocompatíveis `/noticias/<id>` (com `canonical` consolidado no slug).
  - Isso garante que rastreadores sem execução completa de JS (como WhatsApp, Facebook e X) exibam título, descrição e imagem exata de cada notícia compartilhada.
- **Sitemap Automatizado:** `public/sitemap.xml` e `dist/sitemap.xml` são gerados automaticamente a cada build a partir das rotas principais e das notícias ativas, utilizando `isoDate` como `<lastmod>`.
- **Dados Estruturados (Schema.org):**
  - `LocalBusiness` + `SoftwareApplication` (apps Passageiro e Motorista) em `index.html`;
  - `NewsArticle` + `BreadcrumbList` em cada notícia;
  - `AboutPage`, `CollectionPage`, `ContactPage` e `BreadcrumbList` nas páginas correspondentes.
- **Diretiva `noindex`:** Aplicada em `/termos`, `/privacidade`, `/404` e notícias inexistentes.

### 2. Performance e Core Web Vitals
- **Imagens em WebP e Redimensionamento:** Ativos em `src/assets/images/` otimizados com `sharp`, reduzindo o peso total de **5.519 KB para 677 KB (-87,7%)**, além da conversão das imagens em `public/assets/aistudio/` e remoção de arquivos órfãos (`.heic` e rascunhos em PDF).
- **Otimização de LCP (Largest Contentful Paint):**
  - Banner principal (`src/components/Hero.tsx`) convertido de CSS `background-image` para `<img>` com `fetchPriority="high"`, `loading="eager"` e `decoding="sync"`;
  - `<link rel="preload" as="image" href="/logo-official.svg" />` no `index.html`.
- **Lazy Loading e Estabilidade Visual (CLS):** Imagens abaixo da dobra utilizam `loading="lazy"` e `decoding="async"`, e avatares/ícones/QR codes possuem `width` e `height` explícitos.
- **Code Splitting e Chunks de Vendor:** Páginas secundárias carregadas sob demanda via `React.lazy` + `<Suspense>` (`src/App.tsx`), e dependências de terceiros isoladas em `vendor-react` e `vendor-icons` (`vite.config.ts`).
- **Cache HTTP (`netlify.toml`):** `/assets/*` servido com `max-age=31536000, immutable` (1 ano), imagens `.webp` com cache de 30 dias e `sitemap.xml`/`robots.txt` com cache de 1 hora.

---

## Como Adicionar uma Nova Notícia

1. Adicione a imagem otimizada (preferencialmente `.webp`) em `src/assets/images/`.
2. Inclua um novo objeto no início do array `newsArticles` em `src/data/newsData.ts` preenchendo `id`, `slug` (único, sem acentos e separado por hífens), `isoDate` (`YYYY-MM-DD`), `date`, `category`, `title`, `summary`, `content` e `readTime`.
3. Execute `npm run build`: o script de pós-build atualizará automaticamente o `sitemap.xml` e criará a página estática `/noticias/<slug>/index.html` pronta para indexação e compartilhamento.

---

## Google Analytics 4 (GA4) e LGPD

O portal está preparado para o **Google Analytics 4** com integração nativa ao **Google Consent Mode v2** e ao banner de cookies (`CookieConsentBanner`):

1. Crie ou edite o arquivo `.env` local (ou configure as variáveis de ambiente no painel da Netlify) e defina o ID da sua propriedade GA4:
   ```env
   VITE_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
   ```
2. Por padrão (LGPD), o script `gtag.js` **não é carregado** enquanto o visitante não autorizar a categoria **Cookies Analíticos**. Assim que o consentimento é concedido (ou já estiver salvo), o GA4 passa a registrar automaticamente:
   - `page_view`: navegação SPA em todas as rotas com caminho e título atualizados;
   - `app_download_click`: cliques para baixar os apps Passageiro e Motorista (`app_type`, `store`, `placement`);
   - `platform_preference_select`: alternância entre Android e iOS;
   - `whatsapp_contact_click`: cliques nos canais oficiais de WhatsApp;
   - `contact_form_submit`: envios pelo formulário de contato (`subject`);
   - `comunicado_modal_action`: fechamento e abertura de comunicados oficiais (`action`, `comunicado_id`).

---

## Canais Oficiais da Coop63

- **Site:** [https://coop63.coop.br](https://coop63.coop.br)
- **E-mail:** `administracao@coop63.coop.br`
- **WhatsApp:** `(63) 98498-4085`
- **Instagram:** [@coop63.oficial](https://www.instagram.com/coop63.oficial)
- **Sede:** Palmas - Tocantins, Brasil
