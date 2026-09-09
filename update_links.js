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
    
    // Replace hrefs
    let changed = false;
    for (const [hash, route] of Object.entries(linkMap)) {
      const regex = new RegExp(`href="${hash}"`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, `to="${route}"`);
        changed = true;
      }
    }
    
    // If we changed anything, we need to replace <a with <Link and </a> with </Link>
    // But ONLY for the ones we changed to="...".
    if (changed) {
      // Find <a ... to="..." ...> and replace <a with <Link and closing with </Link>
      content = content.replace(/<a([^>]*to="[^"]*"[^>]*)>/g, '<Link$1>');
      content = content.replace(/<\/a>/g, '</Link>'); // this might replace external links too if we have them, let's be careful.
      // In these components, all <a> are internal except maybe in footer?
      // In Footer.tsx we have terms, privacy, instagram, etc with href="#". So maybe we should be more precise.
      
      // Let's add the import statement if not exists
      if (!content.includes("import { Link }")) {
         // insert after first import
         content = content.replace(/import React(.*?);\n/, 'import React$1;\nimport { Link } from \'react-router-dom\';\n');
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file}`);
    }
  }
});
