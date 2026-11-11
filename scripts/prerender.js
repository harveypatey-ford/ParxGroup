import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  {
    path: '/',
    title: 'Parx Group: Real Estate Insurance Specialist',
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
    path: '/portfolio-investment-protection',
    title: 'Portfolio Investment Protection | Rental Income Protection for Lenders and Investors | Parx Group',
    description: 'Portfolio Investment Protection (PIP) is an insurance policy that protects the net rental income lenders and institutional investors rely on, subject to underwriting and policy terms.',
    h1: 'Portfolio Investment Protection',
    content: 'Insured net rental income for institutional lenders and investors in long income real estate, supported by insurers rated A- or better.',
    additionalHeading: 'Product Summary',
    additionalParagraphs: [
      'Portfolio Investment Protection (PIP) is an insurance policy that protects the net rental income a lender or investor expects to receive from a real estate portfolio. It is designed to respond where tenant default, sustained voids or the failure of a counterparty leave net income across the portfolio short of the insured amount. Cover runs for the term of the lease or lending arrangement, up to a maximum of 25 years.',
      'PIP is a policy of indemnity. Cover is tested across the portfolio as a whole and responds once an agreed first loss layer has been used. It is subject to the terms, conditions, exclusions and limit of indemnity of the policy, and is underwritten by insurers rated A- or better.',
      'Each policy is structured around the transaction it supports and the requirements of the capital behind it, so the detail varies with the portfolio, the funding structure and the insurer.'
    ]
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
  const additionalHeading = route.additionalHeading ? `<h2>${route.additionalHeading}</h2>` : '';
  const additionalCopy = (route.additionalParagraphs || []).map(paragraph => `<p>${paragraph}</p>`).join('\n      ');
  const javascriptPrompt = route.path === '/portfolio-investment-protection' ? '' : '<p>Please enable JavaScript to view the full site.</p>';

  if (route.path === '/portfolio-investment-protection') {
    html = html.replace(/<!-- SEO fallback for non-JS crawlers -->[\s\S]*?<\/noscript>/, '');
    html = html.replace(/<!-- SEO fallback for JS-enabled but React failing -->[\s\S]*?<!-- React mount point -->/, '<!-- React mount point -->');
  }

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
        ${additionalHeading}
        ${additionalCopy}
        ${javascriptPrompt}
      </div>
    </noscript>
    <div id="prerender-data" style="display: none;">
      <h1>${route.h1}</h1>
      <p>${route.content}</p>
      ${additionalHeading}
      ${additionalCopy}
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
