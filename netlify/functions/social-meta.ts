import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

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

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
  const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.error('Missing Supabase environment variables');
    return {
      statusCode: 500,
      body: 'Configuration error'
    };
  }

  const userAgent = event.headers['user-agent'] || '';
  let slug = event.queryStringParameters?.slug || '';

  console.log('Function triggered');
  console.log('Query params:', event.queryStringParameters);
  console.log('Path:', event.path);
  console.log('User agent:', userAgent);

  if (!slug && event.path) {
    const match = event.path.match(/\/insights\/([^/]+)/);
    if (match) {
      slug = match[1];
    }
  }

  console.log('Final slug:', slug);

  if (!slug) {
    console.error('No slug found');
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify({
        error: 'Missing slug parameter',
        path: event.path,
        query: event.queryStringParameters
      })
    };
  }

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
      return {
        statusCode: 302,
        headers: {
          'Location': '/'
        }
      };
    }

    const articles = await response.json();
    console.log('Articles found:', articles.length);

    if (!articles || articles.length === 0) {
      return {
        statusCode: 302,
        headers: {
          'Location': '/'
        }
      };
    }

    const article = articles[0];

    if (!article.title || !article.featured_image) {
      return {
        statusCode: 302,
        headers: {
          'Location': '/'
        }
      };
    }

    const title = escapeHtml(article.title);
    const excerpt = escapeHtml(article.excerpt || 'Read more on Parx Group');
    const image = escapeHtml(article.featured_image);
    const pageUrl = `https://parxgroup.co.uk/insights/${slug}`;
    const author = escapeHtml(article.author || 'Parx Group');
    const publishedDate = article.published_at ? new Date(article.published_at).toISOString() : '';

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - Parx Group</title>
  <meta name="description" content="${excerpt}">
  <link rel="icon" type="image/png" href="https://parxgroup.co.uk/favicon.png">

  <!-- Open Graph / Facebook -->
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
  ${publishedDate ? `<meta property="article:published_time" content="${publishedDate}">` : ''}
  ${author ? `<meta property="article:author" content="${author}">` : ''}

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${pageUrl}">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${excerpt}">
  <meta name="twitter:image" content="${image}">

  <!-- LinkedIn -->
  <meta property="og:locale" content="en_GB">
  <meta name="author" content="${author}">

  <script>
    setTimeout(() => {
      window.location.href = '/';
    }, 100);
  </script>
</head>
<body>
  <div id="root"></div>
  <p>Loading article...</p>
</body>
</html>`;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=0, must-revalidate'
      },
      body: html
    };
  } catch (error) {
    console.error('Error in function:', error);
    return {
      statusCode: 302,
      headers: {
        'Location': `/insights/${slug}`
      }
    };
  }
};
