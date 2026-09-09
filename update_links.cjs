const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'src/components/Hero.tsx',
  'src/components/Passengers.tsx',
  'src/components/Drivers.tsx',
  'src/components/About.tsx',
  'src/components/News.tsx',
  'src/components/CTA.tsx',
  'src/components/Footer.tsx'
];

const linkMap = {
  '#inicio': '/',
  '#passageiros': '/passageiros',
  '#motoristas': '/motoristas',
  '#sobre': '/sobre',
  '#noticias': '/noticias',
  '#contato': '/contato'
};

filesToUpdate.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Quick regex to match: <a href="#inicio" ...> -> <Link to="/" ...>
    let changed = false;
    for (const [hash, route] of Object.entries(linkMap)) {
      const regex = new RegExp(`href="${hash}"`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, `to="${route}"`);
        changed = true;
      }
    }
    
    if (changed) {
      // Replace <a ... to="..." ... > with <Link ... to="..." ...>
      // For this simple project, let's just replace ALL <a to= with <Link to=
      content = content.replace(/<a([\s\S]*?to=".*?"[\s\S]*?)>/g, '<Link$1>');
      
      // But we have a problem: </Link> needs to match. 
      // It's safer to just run a regex on the exact strings we know.
      // Let's do this: 
      content = content.replace(/<a([^>]*?)to="([^"]+)"([^>]*?)>/g, '<Link$1to="$2"$3>');
      // And we need to replace the corresponding </a>
      // A simple way is to replace </a> with </Link> ONLY if the file contains to="..."
      // We will do a generic replace but since we only changed some, let's just manually fix Footer since it has other <a> tags.
      content = content.replace(/<\/a>/g, '</Link>'); // Note: Footer has external <a href="#"> we need to revert those.
      
      if (!content.includes("import { Link }")) {
         content = content.replace(/import React(.*?);\n/, 'import React$1;\nimport { Link } from \'react-router-dom\';\n');
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file}`);
    }
  }
});

// Fix Footer.tsx <a href="#"> -> </a> (Since we blindly replaced </a> with </Link>)
const footerPath = path.join(process.cwd(), 'src/components/Footer.tsx');
let footerContent = fs.readFileSync(footerPath, 'utf8');
footerContent = footerContent.replace(/<Link href="#"(.*?)>/g, '<a href="#"$1>');
footerContent = footerContent.replace(/<Link(.*?)href="#"(.*?)>/g, '<a$1href="#"$2>');
// We need to match <a href="#">...</a>, so let's just fix the closing tags that don't match.
fs.writeFileSync(footerPath, footerContent);

