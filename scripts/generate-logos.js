import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import opentype from 'opentype.js';

// Exact brand colors from official visual identity
const LIME_GREEN = '#6EF000'; // Electric vibrant neon lime
const WHITE = '#FFFFFF';
const BLACK = '#000000';
const NAVY_DARK = '#0A0D14';

// Load bold font with genuine geometric glyphs
const fontBuffer = fs.readFileSync('/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf');
const font = opentype.parse(fontBuffer.buffer.slice(fontBuffer.byteOffset, fontBuffer.byteOffset + fontBuffer.byteLength));

function createHorizontalLogoSvg({
  bg = '#000000',
  coopColor = WHITE,
  greenColor = LIME_GREEN,
  width = 900,
  height = 260,
  rounded = 28
}) {
  const fontSize = 160;
  const baselineY = 168;
  const textStartX = 284;

  // Real typographic vector paths
  const pathCoop = font.getPath('coop', textStartX, baselineY, fontSize);
  const bbCoop = pathCoop.getBoundingBox();

  const spacing = 16;
  const x63 = bbCoop.x2 + spacing;
  const path63 = font.getPath('63', x63, baselineY, fontSize);

  const dCoop = pathCoop.toPathData(2);
  const d63 = path63.toPathData(2);

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 260" width="${width}" height="${height}">
  ${bg ? `<rect width="900" height="260" rx="${rounded}" fill="${bg}"/>` : ''}
  
  <!-- Speed Lines Mark (3 rows: dot + capsule) -->
  <g fill="${greenColor}">
    <!-- Row 1 -->
    <circle cx="65" cy="68" r="15" />
    <rect x="100" y="53" width="95" height="30" rx="15" />

    <!-- Row 2 (longer middle bar) -->
    <circle cx="65" cy="130" r="15" />
    <rect x="100" y="115" width="140" height="30" rx="15" />

    <!-- Row 3 -->
    <circle cx="65" cy="192" r="15" />
    <rect x="100" y="177" width="95" height="30" rx="15" />
  </g>

  <!-- Wordmark 'coop' in authentic bold geometry -->
  <path d="${dCoop}" fill="${coopColor}" />

  <!-- Numbers '63' in brand lime green -->
  <path d="${d63}" fill="${greenColor}" />
</svg>
`;
}

function createSquareLogoSvg() {
  const markScale = 1.1;
  const startX = 60;
  const startY = 85;

  // '63' next to mark in top half
  const font63Size = 135;
  const path63 = font.getPath('63', 270, 215, font63Size);
  const d63 = path63.toPathData(2);

  // 'coop' centered in bottom half
  const fontCoopSize = 130;
  const pathCoop = font.getPath('coop', 80, 375, fontCoopSize);
  const dCoop = pathCoop.toPathData(2);

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="112" fill="#000000"/>
  
  <!-- Top row: Speed lines mark + 63 -->
  <g fill="${LIME_GREEN}">
    <!-- Row 1 -->
    <circle cx="${startX + 18}" cy="${startY + 20}" r="15" />
    <rect x="${startX + 50}" y="${startY + 5}" width="75" height="30" rx="15" />

    <!-- Row 2 -->
    <circle cx="${startX + 18}" cy="${startY + 75}" r="15" />
    <rect x="${startX + 50}" y="${startY + 60}" width="115" height="30" rx="15" />

    <!-- Row 3 -->
    <circle cx="${startX + 18}" cy="${startY + 130}" r="15" />
    <rect x="${startX + 50}" y="${startY + 115}" width="75" height="30" rx="15" />

    <!-- 63 -->
    <path d="${d63}" />
  </g>

  <!-- Bottom row: coop in white -->
  <path d="${dCoop}" fill="${WHITE}" />
</svg>
`;
}

async function build() {
  const publicDir = path.resolve('public');
  const distDir = path.resolve('dist');

  // 1. Official black-background logo (exact to brand guidelines and IMG-20260928-WA0037.jpg)
  const officialLogo = createHorizontalLogoSvg({ bg: '#000000', coopColor: WHITE, greenColor: LIME_GREEN, rounded: 28 });
  fs.writeFileSync(path.join(publicDir, 'logo-official.svg'), officialLogo);
  await sharp(Buffer.from(officialLogo))
    .resize(1800, 520)
    .png()
    .toFile(path.join(publicDir, 'logo.png'));

  // 2. Transparent dark version (white 'coop', for dark backgrounds)
  const transparentDark = createHorizontalLogoSvg({ bg: '', coopColor: WHITE, greenColor: LIME_GREEN });
  fs.writeFileSync(path.join(publicDir, 'logo-dark.svg'), transparentDark);
  await sharp(Buffer.from(transparentDark))
    .resize(1800, 520)
    .png()
    .toFile(path.join(publicDir, 'logo-dark.png'));

  // 3. Transparent light version (dark navy 'coop', for light backgrounds)
  const transparentLight = createHorizontalLogoSvg({ bg: '', coopColor: NAVY_DARK, greenColor: LIME_GREEN });
  fs.writeFileSync(path.join(publicDir, 'logo-light.svg'), transparentLight);
  await sharp(Buffer.from(transparentLight))
    .resize(1800, 520)
    .png()
    .toFile(path.join(publicDir, 'logo-light.png'));

  // 4. Square App Icon version (for favicon, app stores, download cards)
  const squareSvg = createSquareLogoSvg();
  fs.writeFileSync(path.join(publicDir, 'logo-square.svg'), squareSvg);
  await sharp(Buffer.from(squareSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'logo-square.png'));

  // 5. Favicon (64x64)
  await sharp(Buffer.from(squareSvg))
    .resize(64, 64)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));

  // Also sync to dist/ if dist exists
  if (fs.existsSync(distDir)) {
    for (const file of ['logo.png', 'logo-official.svg', 'logo-dark.svg', 'logo-dark.png', 'logo-light.svg', 'logo-light.png', 'logo-square.svg', 'logo-square.png', 'favicon.png']) {
      const src = path.join(publicDir, file);
      if (fs.existsSync(src)) {
        fs.copyFileSync(src, path.join(distDir, file));
      }
    }
  }

  console.log('Successfully generated all brand-accurate logo variations.');
}

build().catch(console.error);
