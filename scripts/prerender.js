import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  {
    path: '/',
    title: 'Parx Group - Real Estate Insurance Specialist',
    description: 'Bespoke risk management strategies to protect and enhance real estate investments. Specialising in title insurance, environmental insurance, and property development protection.',
    h1: 'Real Estate Insurance Specialist',
    content: 'Protecting and enhancing real estate value through bespoke insurance-led risk transfer solutions.'
  },
  {
    path: '/services',
    title: 'Property Insurance Services - Real Estate Insurance',
    description: 'Comprehensive insurance solutions for property development, acquisition, disposal, and portfolio investment. Title insurance, environmental coverage, and rights to light protection.',
    h1: 'Property Insurance Services',
    content: 'Comprehensive risk management solutions tailored to your real estate needs.'
  },
  {
    path: '/development',
    title: 'Development Insurance - Property Development Risk Management',
    description: 'Cover is designed to address legal, title and site-specific risks that can arise during acquisition, construction and onward funding, helping developers and funders proceed with confidence.',
    h1: 'Development Insurance',
    content: 'Protecting property development projects from legal, title and site-specific risks during acquisition, construction and funding.'
  },
  {
    path: '/acquisition-disposal',
    title: 'Acquisition & Disposal Insurance - Property Transaction Risk Management',
    description: 'Cover is structured to facilitate efficient deal execution where time constraints, incomplete information or legacy issues might otherwise impede progress.',
    h1: 'Acquisition & Disposal Insurance',
    content: 'Insurance solutions for efficient property transaction execution, managing time constraints and legacy issues.'
  },
  {
    path: '/portfolio-investor-protection',
    title: 'Rental Income Protection Insurance | Portfolio Investor Protection',
    description: 'We structure insurance-led risk transfer solutions that protect income, strengthen funding terms and enhance long-term asset value.',
    h1: 'Rental Income Protection Insurance',
    content: 'Secure your property investment portfolio returns with comprehensive rental income insurance.'
  },
  {
    path: '/insights',
    title: 'Property Investment Insights - Real Estate Investment & Insurance',
    description: 'Expert insights, analysis and industry news on real estate investment, property insurance, PBSA, social housing, build-to-rent and risk transfer.',
    h1: 'Property Investment Insights',
    content: 'Expert analysis, market insights and industry news shaping the future of real estate investment.'
  },
  {
    path: '/contact',
    title: 'Contact Our Insurance Experts - Get in Touch with Parx Group',
    description: 'Contact our expert team for personalized real estate risk management consultation. Phone: +44 (0) 20 3370 7909. Email: connect@parxgroup.co.uk',
    h1: 'Contact Our Insurance Experts',
    content: 'Get in touch with our expert team to discuss your insurance needs and risk management strategies.'
  },
  {
    path: '/privacy',
    title: 'Privacy Notice - Parx Group',
    description: 'Privacy notice explaining how Parx Group collects, uses, and protects your personal information in accordance with data protection regulations.',
    h1: 'Privacy Notice',
    content: 'Our commitment to protecting your privacy and personal data.'
  },
  {
    path: '/terms',
    title: 'Terms and Conditions - Parx Group',
    description: 'Terms and conditions governing the use of Parx Group services and website.',
    h1: 'Terms and Conditions',
    content: 'Terms and conditions for using our services and website.'
  },
  {
    path: '/title-insurance',
    title: 'Title Insurance - Property Title Protection',
    description: 'Comprehensive title insurance protection for property transactions. Safeguard against title defects, ownership disputes, and hidden risks.',
    h1: 'Title Insurance',
    content: 'Protecting property transactions with comprehensive title insurance coverage.'
  },
  {
    path: '/environmental-insurance',
    title: 'Environmental Insurance - Environmental Risk Coverage',
    description: 'Environmental insurance solutions protecting against contamination risks and environmental liabilities in property transactions.',
    h1: 'Environmental Insurance',
    content: 'Insurance solutions for environmental risks and contamination liabilities.'
  },
  {
    path: '/rights-to-light',
    title: 'Rights to Light Insurance - Development Protection',
    description: 'Rights to light insurance protecting property developments from potential legal claims and injunctions related to overshadowing.',
    h1: 'Rights to Light Insurance',
    content: 'Protecting developments from rights to light claims and injunctions.'
  }
];

const distPath = path.resolve(__dirname, '../dist');
const indexPath = path.join(distPath, 'index.html');

console.log('Starting pre-rendering process...');

const baseHtml = fs.readFileSync(indexPath, 'utf8');

function replaceMetaTag(html, property, attrType, newContent) {
  const singleLinePattern = new RegExp(
    `<meta\\s+${attrType}="${property}"\\s+content="[^"]*"\\s*/?>`,
    'g'
  );

  const multiLinePattern = new RegExp(
    `<meta\\s+${attrType}="${property}"[^>]*content="[^"]*"[^>]*/?>`,
    'gs'
  );

  const altSingleLine = new RegExp(
    `<meta[^>]*${attrType}="${property}"[^>]*/>`,
    'g'
  );

  let result = html.replace(singleLinePattern, `<meta ${attrType}="${property}" content="${newContent}" />`);

  if (result === html) {
    const lines = html.split('\n');
    const newLines = [];
    let skipNext = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (skipNext) {
        if (line.includes('/>') || line.includes('>')) {
          skipNext = false;
        }
        continue;
      }

      if (line.includes(`${attrType}="${property}"`) && !line.includes('/>')) {
        newLines.push(`    <meta ${attrType}="${property}" content="${newContent}" />`);
        skipNext = true;
        continue;
      }

      newLines.push(line);
    }

    result = newLines.join('\n');
  }

  return result;
}

routes.forEach(route => {
  let html = baseHtml;
  const fullUrl = route.path === '/' ? 'https://parxgroup.co.uk/' : `https://parxgroup.co.uk${route.path}`;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);

  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${fullUrl}" />`
  );

  html = replaceMetaTag(html, 'description', 'name', route.description);
  html = replaceMetaTag(html, 'og:title', 'property', route.title);
  html = replaceMetaTag(html, 'og:description', 'property', route.description);
  html = replaceMetaTag(html, 'og:url', 'property', fullUrl);
  html = replaceMetaTag(html, 'twitter:title', 'name', route.title);
  html = replaceMetaTag(html, 'twitter:description', 'name', route.description);

  const prerenderContent = `
    <noscript>
      <div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
        <h1>${route.h1}</h1>
        <p>${route.content}</p>
        <p>Please enable JavaScript to view the full site.</p>
      </div>
    </noscript>
    <div id="prerender-data" style="display: none;">
      <h1>${route.h1}</h1>
      <p>${route.content}</p>
    </div>`;

  html = html.replace(
    /<div id="root"><\/div>/,
    `<div id="root"></div>${prerenderContent}`
  );

  if (route.path !== '/') {
    const routePath = route.path.substring(1);
    const routeDir = path.join(distPath, routePath);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    const outputPath = path.join(routeDir, 'index.html');
    fs.writeFileSync(outputPath, html);
    console.log(`Pre-rendered: ${route.path}`);
  } else {
    fs.writeFileSync(indexPath, html);
    console.log('Pre-rendered: /');
  }
});

console.log('Pre-rendering complete!');
