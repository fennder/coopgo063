const fs = require('fs');
const path = require('path');

const heroImg = "import heroBg from '../assets/images/hero_coop63_1788912367838.jpg';\n";
const passImg = "import passImgSrc from '../assets/images/passenger_coop63_1788912377837.jpg';\n";
const drvImg = "import drvImgSrc from '../assets/images/driver_coop63_1788912389552.jpg';\n";
const newsImg = "import newsAppImg from '../assets/images/news_app_coop63_1788912399020.jpg';\n";

function insertImport(content, importStr) {
  if (content.includes(importStr)) return content;
  return content.replace(/import React.*?\n/, match => match + importStr);
}

// 1. Hero.tsx
let heroPath = path.join(process.cwd(), 'src/components/Hero.tsx');
let heroContent = fs.readFileSync(heroPath, 'utf8');
heroContent = insertImport(heroContent, heroImg);
heroContent = heroContent.replace(/backgroundImage: 'url\("https:\/\/images\.unsplash\.com[^"]+"\)'/, "backgroundImage: `url(${heroBg})`");
fs.writeFileSync(heroPath, heroContent);

// 2. Passengers.tsx
let passPath = path.join(process.cwd(), 'src/components/Passengers.tsx');
let passContent = fs.readFileSync(passPath, 'utf8');
passContent = insertImport(passContent, passImg);
passContent = passContent.replace(/src="https:\/\/images\.unsplash\.com[^"]+"/, "src={passImgSrc}");
fs.writeFileSync(passPath, passContent);

// 3. Drivers.tsx
let drvPath = path.join(process.cwd(), 'src/components/Drivers.tsx');
let drvContent = fs.readFileSync(drvPath, 'utf8');
drvContent = insertImport(drvContent, drvImg);
drvContent = drvContent.replace(/src="https:\/\/images\.unsplash\.com[^"]+"/, "src={drvImgSrc}");
fs.writeFileSync(drvPath, drvContent);

// 4. PassengersPage.tsx
let passPagePath = path.join(process.cwd(), 'src/pages/PassengersPage.tsx');
let passPageContent = fs.readFileSync(passPagePath, 'utf8');
passPageContent = insertImport(passPageContent, passImg);
passPageContent = passPageContent.replace(/src="https:\/\/images\.unsplash\.com[^"]+"/, "src={passImgSrc}");
fs.writeFileSync(passPagePath, passPageContent);

// 5. DriversPage.tsx
let drvPagePath = path.join(process.cwd(), 'src/pages/DriversPage.tsx');
let drvPageContent = fs.readFileSync(drvPagePath, 'utf8');
drvPageContent = insertImport(drvPageContent, drvImg);
drvPageContent = drvPageContent.replace(/src="https:\/\/images\.unsplash\.com[^"]+"/, "src={drvImgSrc}");
fs.writeFileSync(drvPagePath, drvPageContent);

// 6. News.tsx
let newsPath = path.join(process.cwd(), 'src/components/News.tsx');
let newsContent = fs.readFileSync(newsPath, 'utf8');
newsContent = insertImport(newsContent, newsImg);
// Replace one of the images in the array
newsContent = newsContent.replace(
  /image: 'https:\/\/images\.unsplash\.com[^']+'/g, 
  (match, offset, string) => offset === string.indexOf("image: 'https://images.unsplash.com") ? "image: newsAppImg" : match
);
fs.writeFileSync(newsPath, newsContent);

// 7. NewsPage.tsx
let newsPagePath = path.join(process.cwd(), 'src/pages/NewsPage.tsx');
let newsPageContent = fs.readFileSync(newsPagePath, 'utf8');
newsPageContent = insertImport(newsPageContent, newsImg);
// Replace one of the images in the array
newsPageContent = newsPageContent.replace(
  /image: 'https:\/\/images\.unsplash\.com[^']+'/g, 
  (match, offset, string) => offset === string.indexOf("image: 'https://images.unsplash.com") ? "image: newsAppImg" : match
);
fs.writeFileSync(newsPagePath, newsPageContent);

console.log("Images replaced");
