import type { Context } from "https://edge.netlify.com";

const isCrawler = (userAgent: string): boolean => {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  const crawlers = [
    'linkedinbot',
    'linkedin',
    'facebookexternalhit',
    'facebookcatalog',
    'twitterbot',
    'slackbot',
    'whatsapp',
    'skypeuripreview',
    'discordbot',
    'googlebot',
    'bingbot',
    'slackbot-linkexpanding'
  ];
  return crawlers.some(bot => ua.includes(bot));
};

const escapeHtml = (text: string): string => {
  if (!text) return '';
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

const servicePages: { [key: string]: { title: string; description: string } } = {
  '/insights': {
    title: 'Property Investment Insights | Real Estate Investment & Insurance',
    description: 'Expert insights, analysis and industry news on real estate investment, property insurance, PBSA, social housing, build-to-rent and risk transfer.'
  },
  '/terms': {
    title: 'Terms and Conditions | Parx Group',
    description: 'Terms and conditions governing the use of Parx Group services and website.'
  },
  '/privacy': {
    title: 'Privacy Notice | Parx Group',
    description: 'Privacy notice explaining how Parx Group collects, uses, and protects your personal information in accordance with data protection regulations.'
  },
  '/services': {
    title: 'Property Insurance Services | Real Estate Insurance Solutions',
    description: 'Comprehensive insurance solutions for property development, acquisition, disposal, and portfolio investment. Title insurance, environmental coverage, and rights to light protection.'
  },
  '/portfolio-investor-protection': {
    title: 'Portfolio Investment Protection Insurance | Rental Income Protection for Property Investors',
    description: 'Portfolio Investment Protection (PIP) insurance protects rental income for property investors and lenders. Cover against tenant defaults, voids and counterparty risks with A-rated covenant protection. Lower cost of capital and higher LTV ratios.'
  },
  '/title-insurance': {
    title: 'Title Insurance | Property Title Protection',
    description: 'Comprehensive title insurance protection for property transactions. Safeguard against title defects, ownership disputes, and hidden risks.'
  },
  '/environmental-insurance': {
    title: 'Environmental Insurance | Environmental Risk Coverage',
    description: 'Environmental insurance solutions protecting against contamination risks and environmental liabilities in property transactions.'
  },
  '/rights-to-light': {
    title: 'Rights to Light Insurance | Development Protection',
    description: 'Rights to light insurance protecting property developments from potential legal claims and injunctions related to overshadowing.'
  },
  '/development': {
    title: 'Development Insurance Services',
    description: 'Specialist insurance solutions for property developers covering construction risks, project delays, and development-specific exposures.'
  },
  '/acquisition-disposal': {
    title: 'Acquisition & Disposal Insurance',
    description: 'Insurance solutions supporting property acquisitions and disposals, including warranty & indemnity coverage and transaction risk protection.'
  },
  '/contact': {
    title: 'Contact Our Insurance Experts | Get in Touch with Parx Group',
    description: 'Contact our expert team for personalized real estate risk management consultation. Phone: +44 (0) 20 3370 7909. Email: connect@parxgroup.co.uk'
  }
};

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const userAgent = request.headers.get('user-agent') || '';

  const SUPABASE_URL = Deno.env.get('VITE_SUPABASE_URL');
  const SUPABASE_ANON_KEY = Deno.env.get('VITE_SUPABASE_ANON_KEY');

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Missing Supabase environment variables');
    return context.next();
  }

  console.log('Edge function triggered for:', url.pathname);
  console.log('User agent:', userAgent);

  // Check if it's a service page
  const servicePage = servicePages[url.pathname];
  if (servicePage) {
    console.log('Service page match:', url.pathname);

    const title = escapeHtml(servicePage.title);
    const description = escapeHtml(servicePage.description);
    const pageUrl = escapeHtml(request.url);
    const image = 'https://parxgroup.co.uk/parx_1.jpg';

    const nextResponse = await context.next();
    let html = await nextResponse.text();

    html = html
      .replace(/<meta\s+property="og:type"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:url"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:title"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:description"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:image[^"]*"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:site_name"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:locale"[^>]*>/gi, '')
      .replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, '')
      .replace(/<meta\s+name="description"[^>]*>/gi, '')
      .replace(/<meta\s+name="keywords"[^>]*>/gi, '')
      .replace(/<link\s+rel="canonical"[^>]*>/gi, '')
      .replace(/<title>[^<]*<\/title>/gi, '');

    const metaTags = `
  <title>${title} - Parx Group</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${pageUrl}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:title" content="${title} - Parx Group">
  <meta property="og:description" content="${description}">
  <meta property="og:image" content="${image}">
  <meta property="og:image:secure_url" content="${image}">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="2000">
  <meta property="og:image:height" content="2000">
  <meta property="og:image:alt" content="Parx Group Logo">
  <meta property="og:site_name" content="Parx Group">
  <meta property="og:locale" content="en_GB">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${pageUrl}">
  <meta name="twitter:title" content="${title} - Parx Group">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">
  <meta name="twitter:image:alt" content="Parx Group Logo">`;

    const modifiedHtml = html.replace('</head>', `${metaTags}\n</head>`);

    console.log('Injecting service page meta tags');
    return new Response(modifiedHtml, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': 'public, max-age=0, must-revalidate'
      },
    });
  }

  // Check if it's an insights article
  const match = url.pathname.match(/^\/insights\/([^/]+)$/);
  if (!match) {
    console.log('No insights path match');
    return context.next();
  }

  const isCrawlerRequest = isCrawler(userAgent);
  console.log('Is crawler:', isCrawlerRequest);

  const slug = match[1];
  console.log('Fetching article with slug:', slug);

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/articles?slug=eq.${slug}&published=eq.true&select=*`,
      {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      console.error('Supabase error:', response.status, await response.text());
      return context.next();
    }

    const articles = await response.json();
    console.log('Articles found:', articles.length);

    if (!articles || articles.length === 0) {
      console.log('No articles found');
      return context.next();
    }

    const article = articles[0];
    console.log('Article data:', JSON.stringify({
      title: article.title,
      hasImage: !!article.featured_image,
      hasExcerpt: !!article.excerpt,
      hasAuthor: !!article.author
    }));

    if (!article.title || !article.featured_image) {
      console.error('Missing required article fields');
      return context.next();
    }

    const title = escapeHtml(article.title);
    const excerpt = escapeHtml(article.excerpt || 'Read more on Parx Group');
    const image = escapeHtml(article.featured_image);
    const pageUrl = escapeHtml(request.url);
    const author = escapeHtml(article.author || 'Parx Group');
    const publishedDate = article.published_at ? new Date(article.published_at).toISOString() : '';

    const nextResponse = await context.next();
    let html = await nextResponse.text();

    html = html
      .replace(/<meta\s+property="og:type"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:url"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:title"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:description"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:image[^"]*"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:site_name"[^>]*>/gi, '')
      .replace(/<meta\s+property="og:locale"[^>]*>/gi, '')
      .replace(/<meta\s+property="article:[^"]*"[^>]*>/gi, '')
      .replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, '')
      .replace(/<meta\s+name="description"[^>]*>/gi, '')
      .replace(/<meta\s+name="keywords"[^>]*>/gi, '')
      .replace(/<meta\s+name="author"[^>]*>/gi, '')
      .replace(/<link\s+rel="canonical"[^>]*>/gi, '')
      .replace(/<title>[^<]*<\/title>/gi, '');

    const metaTags = `
  <title>${title} | Parx Group Insights</title>
  <meta name="description" content="${excerpt}">
  <link rel="canonical" href="${pageUrl}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${excerpt}">
  <meta property="og:image" content="${image}">
  <meta property="og:image:secure_url" content="${image}">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="Parx Group">
  <meta property="og:locale" content="en_GB">
  ${publishedDate ? `<meta property="article:published_time" content="${publishedDate}">` : ''}
  ${author ? `<meta property="article:author" content="${author}">` : ''}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${pageUrl}">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${excerpt}">
  <meta name="twitter:image" content="${image}">
  <meta name="author" content="${author}">`;

    const modifiedHtml = html.replace('</head>', `${metaTags}\n</head>`);

    console.log('Injecting meta tags into existing HTML');
    return new Response(modifiedHtml, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': 'public, max-age=0, must-revalidate'
      },
    });
  } catch (error) {
    console.error('Error in edge function:', error);
    return context.next();
  }
};
