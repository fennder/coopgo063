import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import esbuild from 'esbuild';

const ORIGIN = 'https://coop63.coop.br';
const TODAY_ISO = '2026-11-17';
const ROOT_DIR = process.cwd();
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

async function loadNewsArticles() {
  const imageAssetPlugin = {
    name: 'image-asset-basename',
    setup(build) {
      build.onLoad({ filter: /\.(webp|jpe?g|png|svg|gif)$/i }, (args) => ({
        contents: `export default ${JSON.stringify(path.basename(args.path))};`,
        loader: 'js',
      }));
    },
  };

  const result = await esbuild.build({
    entryPoints: [path.join(ROOT_DIR, 'src/data/newsData.ts')],
    bundle: true,
    write: false,
    format: 'esm',
    platform: 'node',
    plugins: [imageAssetPlugin],
  });

  const jsFile = result.outputFiles[0];
  if (!jsFile) {
    throw new Error('Could not extract compiled newsData module from esbuild output.');
  }

  const tmpFile = path.join(ROOT_DIR, 'node_modules/.tmp-newsData.mjs');
  fs.mkdirSync(path.dirname(tmpFile), { recursive: true });
  fs.writeFileSync(tmpFile, jsFile.text, 'utf8');

  try {
    const mod = await import(`${pathToFileURL(tmpFile).href}?t=${Date.now()}`);
    return mod.newsArticles || [];
  } finally {
    fs.rmSync(tmpFile, { force: true });
  }
}

function buildAssetMap() {
  const assetsDir = path.join(DIST_DIR, 'assets');
  const assetFiles = fs.existsSync(assetsDir) ? fs.readdirSync(assetsDir) : [];

  return function resolveImageUrl(rawImage) {
    if (!rawImage) return `${ORIGIN}/og-image.jpg`;
    if (/^https?:\/\//i.test(rawImage)) return rawImage;
    if (rawImage.startsWith('/assets/')) return `${ORIGIN}${rawImage}`;

    const cleanName = path.basename(rawImage).replace(/^\.\//, '');
    const ext = path.extname(cleanName);
    const stem = path.basename(cleanName, ext);
    const matchedHashed = assetFiles.find(
      (file) => file.startsWith(`${stem}-`) && file.endsWith(ext)
    );
    if (matchedHashed) {
      return `${ORIGIN}/assets/${matchedHashed}`;
    }
    return `${ORIGIN}/og-image.jpg`;
  };
}

function generateSitemapXml(articles) {
  const staticUrls = [
    { loc: `${ORIGIN}/`, lastmod: TODAY_ISO, changefreq: 'daily', priority: '1.0' },
    { loc: `${ORIGIN}/passageiros`, lastmod: TODAY_ISO, changefreq: 'weekly', priority: '0.9' },
    { loc: `${ORIGIN}/motoristas`, lastmod: TODAY_ISO, changefreq: 'weekly', priority: '0.9' },
    { loc: `${ORIGIN}/noticias`, lastmod: TODAY_ISO, changefreq: 'daily', priority: '0.8' },
    { loc: `${ORIGIN}/sobre`, lastmod: TODAY_ISO, changefreq: 'monthly', priority: '0.7' },
    { loc: `${ORIGIN}/contato`, lastmod: TODAY_ISO, changefreq: 'monthly', priority: '0.7' },
    { loc: `${ORIGIN}/parceiros`, lastmod: TODAY_ISO, changefreq: 'monthly', priority: '0.7' },
  ];

  const articleUrls = articles.map((article) => ({
    loc: `${ORIGIN}/noticias/${article.slug}`,
    lastmod: article.isoDate || TODAY_ISO,
    changefreq: 'monthly',
    priority: '0.7',
  }));

  const entries = [...staticUrls, ...articleUrls]
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

function injectRouteMeta(baseHtml, route) {
  let html = baseHtml;
  const canonicalUrl = `${ORIGIN}${route.canonicalPath === '/' ? '/' : route.canonicalPath}`;
  const titleEscaped = escapeHtml(route.title);
  const descEscaped = escapeHtml(route.description);
  const imageUrl = escapeHtml(route.image || `${ORIGIN}/og-image.jpg`);
  const robotsValue = route.noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${titleEscaped}</title>`);
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/is,
    `<meta name="description" content="${descEscaped}" />`
  );
  html = html.replace(
    /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="robots" content="${robotsValue}" />`
  );
  html = html.replace(
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:type" content="${route.type || 'website'}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${titleEscaped}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${descEscaped}" />`
  );
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:image" content="${imageUrl}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${titleEscaped}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${descEscaped}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:image" content="${imageUrl}" />`
  );

  if (route.jsonLd) {
    const ldPayload = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': Array.isArray(route.jsonLd) ? route.jsonLd : [route.jsonLd],
    });
    html = html.replace(
      '</head>',
      `  <script id="dynamic-route-jsonld" type="application/ld+json">${ldPayload}</script>\n  </head>`
    );
  }

  return html;
}

function writeRouteHtml(outputPath, html) {
  const cleanRel = outputPath.replace(/^\/+/, '');
  const targetDir = path.join(DIST_DIR, cleanRel);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
}

async function main() {
  const baseHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(baseHtmlPath)) {
    throw new Error('dist/index.html not found. Run vite build first.');
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');
  const articles = await loadNewsArticles();
  const resolveImageUrl = buildAssetMap();

  // 1. Update sitemap.xml in public/ and dist/
  const sitemapXml = generateSitemapXml(articles);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf8');
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');

  // 2. Build route definitions for static HTML metadata prerendering
  const staticRoutes = [
    {
      outputPath: 'passageiros',
      canonicalPath: '/passageiros',
      title: 'Para Passageiros | Coop63 Mobilidade no Tocantins',
      description:
        'Viaje com motoristas verificados, preço transparente e suporte local em Palmas e região. Baixe o aplicativo Coop63 Passageiro para Android e iOS.',
      image: resolveImageUrl('passageira_natural_1791509954174.webp'),
      jsonLd: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Para Passageiros', item: `${ORIGIN}/passageiros` },
        ],
      },
    },
    {
      outputPath: 'motoristas',
      canonicalPath: '/motoristas',
      title: 'Para Motoristas | Seja Cooperado na Coop63',
      description:
        'Sem passe antecipado: na Coop63 você só paga 15% quando roda, tem voz nas assembleias e suporte humano em Palmas. Baixe o app Motorista.',
      image: resolveImageUrl('motorista_camisa_coop63_1794501549713.webp'),
      jsonLd: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Para Motoristas', item: `${ORIGIN}/motoristas` },
        ],
      },
    },
    {
      outputPath: 'sobre',
      canonicalPath: '/sobre',
      title: 'Sobre a Coop63 | História, Missão e Valores',
      description:
        'Conheça a história da Coop63, cooperativa de mobilidade urbana no Tocantins fundada por motoristas para gerar valor justo em Palmas e região.',
      image: `${ORIGIN}/og-image.jpg`,
      jsonLd: [
        {
          '@type': 'AboutPage',
          name: 'Sobre a Coop63',
          url: `${ORIGIN}/sobre`,
          description:
            'Conheça a história, missão, visão e valores da COOPGO63, cooperativa de mobilidade urbana do Tocantins.',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: `${ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Sobre a Coop63', item: `${ORIGIN}/sobre` },
          ],
        },
      ],
    },
    {
      outputPath: 'noticias',
      canonicalPath: '/noticias',
      title: 'Notícias e Comunicados | Coop63 Tocantins',
      description:
        'Acompanhe as últimas notícias, comunicados oficiais, decisões do setor e novidades da cooperativa Coop63 em Palmas e no Tocantins.',
      image: `${ORIGIN}/og-image.jpg`,
      jsonLd: [
        {
          '@type': 'CollectionPage',
          name: 'Notícias e Comunicados Coop63',
          url: `${ORIGIN}/noticias`,
          description: 'Notícias, comunicados oficiais, eventos e novidades sobre mobilidade cooperativa no Tocantins.',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: `${ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Notícias e Comunicados', item: `${ORIGIN}/noticias` },
          ],
        },
      ],
    },
    {
      outputPath: 'contato',
      canonicalPath: '/contato',
      title: 'Contato e Suporte | Coop63 Palmas - Tocantins',
      description:
        'Fale com a equipe da Coop63 em Palmas - TO pelo WhatsApp (63) 98498-4085, e-mail ou formulário de contato para passageiros e motoristas.',
      image: `${ORIGIN}/og-image.jpg`,
      jsonLd: [
        {
          '@type': 'ContactPage',
          name: 'Contato e Suporte Coop63',
          url: `${ORIGIN}/contato`,
          description: 'Entre em contato com a Coop63 em Palmas - Tocantins via formulário, e-mail ou WhatsApp oficial.',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: `${ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Contato e Suporte', item: `${ORIGIN}/contato` },
          ],
        },
      ],
    },
    {
      outputPath: 'parceiros',
      canonicalPath: '/parceiros',
      title: 'Parceiros | Coop63',
      description: 'Conheça os parceiros institucionais da Coop63.',
      image: `${ORIGIN}/og-image.jpg`,
      jsonLd: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Parceiros', item: `${ORIGIN}/parceiros` },
        ],
      },
    },
    {
      outputPath: 'termos',
      canonicalPath: '/termos',
      title: 'Termos e Condições de Uso | Coop63',
      description:
        'Leia os Termos e Condições de Uso dos aplicativos e plataforma digital da COOPGO63 Cooperativa de Transporte Privado do Tocantins.',
      image: `${ORIGIN}/og-image.jpg`,
      noindex: true,
    },
    {
      outputPath: 'privacidade',
      canonicalPath: '/privacidade',
      title: 'Política de Privacidade e LGPD | Coop63',
      description:
        'Saiba como a Coop63 coleta, trata e protege seus dados pessoais e de geolocalização em conformidade com a LGPD (Lei 13.709/2018).',
      image: `${ORIGIN}/og-image.jpg`,
      noindex: true,
    },
  ];

  let generatedCount = 0;

  for (const route of staticRoutes) {
    writeRouteHtml(route.outputPath, injectRouteMeta(baseHtml, route));
    generatedCount++;
  }

  for (const article of articles) {
    const slugPath = `/noticias/${article.slug}`;
    const imageUrl = resolveImageUrl(article.image);
    const articleRouteMeta = {
      canonicalPath: slugPath,
      title: `${article.title} | Coop63`,
      description: article.summary.slice(0, 160),
      image: imageUrl,
      type: 'article',
      jsonLd: [
        {
          '@type': 'NewsArticle',
          headline: article.title,
          description: article.summary,
          image: [imageUrl],
          datePublished: article.isoDate || TODAY_ISO,
          dateModified: article.isoDate || TODAY_ISO,
          articleSection:
            article.categories && article.categories.length > 0
              ? article.categories.join(', ')
              : article.category,
          inLanguage: 'pt-BR',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${ORIGIN}${slugPath}`,
          },
          author: {
            '@type': 'Organization',
            name: 'Comunicação Coop63',
            url: ORIGIN,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Coop63 Mobilidade Cooperativa',
            logo: {
              '@type': 'ImageObject',
              url: `${ORIGIN}/assets/aistudio/unnamed_88fe9c17.webp`,
            },
          },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: `${ORIGIN}/` },
            { '@type': 'ListItem', position: 2, name: 'Notícias', item: `${ORIGIN}/noticias` },
            { '@type': 'ListItem', position: 3, name: article.title, item: `${ORIGIN}${slugPath}` },
          ],
        },
      ],
    };

    const html = injectRouteMeta(baseHtml, articleRouteMeta);
    writeRouteHtml(`noticias/${article.slug}`, html);
    writeRouteHtml(`noticias/${article.id}`, html);
    generatedCount += 2;
  }

  console.log(
    `[postbuild-seo] Generated sitemap.xml (${articles.length} articles) and pre-rendered ${generatedCount} route HTML files.`
  );
}

main().catch((err) => {
  console.error('[postbuild-seo] Failed:', err);
  process.exit(1);
});
