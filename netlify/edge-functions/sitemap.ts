import type { Context } from "https://edge.netlify.com";

const baseUrl = 'https://parxgroup.co.uk';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/portfolio-investment-protection', priority: '0.90', changefreq: 'monthly' },
  { url: '/services', priority: '0.80', changefreq: 'monthly' },
  { url: '/development', priority: '0.75', changefreq: 'monthly' },
  { url: '/acquisition-disposal', priority: '0.75', changefreq: 'monthly' },
  { url: '/contact', priority: '0.70', changefreq: 'monthly' },
  { url: '/insights', priority: '0.70', changefreq: 'weekly' },
  { url: '/terms', priority: '0.20', changefreq: 'yearly' },
  { url: '/privacy', priority: '0.20', changefreq: 'yearly' },
];

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

export default async (request: Request, context: Context) => {
  const SUPABASE_URL = Deno.env.get('VITE_SUPABASE_URL');
  const SUPABASE_ANON_KEY = Deno.env.get('VITE_SUPABASE_ANON_KEY');

  let articles: Array<{ slug: string; updated_at?: string; published_at?: string }> = [];

  if (SUPABASE_URL && SUPABASE_ANON_KEY) {
    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/articles?published=eq.true&select=slug,updated_at,published_at&order=published_at.desc`,
        {
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.ok) {
        articles = await response.json();
      }
    } catch (error) {
      console.error('Error fetching articles for sitemap:', error);
    }
  }

  const today = formatDate(new Date());

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const page of staticPages) {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${escapeXml(baseUrl + page.url)}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  }

  for (const article of articles) {
    const lastMod = article.updated_at || article.published_at;
    sitemap += '  <url>\n';
    sitemap += `    <loc>${escapeXml(`${baseUrl}/insights/${article.slug}`)}</loc>\n`;
    if (lastMod) {
      sitemap += `    <lastmod>${formatDate(new Date(lastMod))}</lastmod>\n`;
    }
    sitemap += '    <changefreq>monthly</changefreq>\n';
    sitemap += '    <priority>0.60</priority>\n';
    sitemap += '  </url>\n';
  }

  sitemap += '</urlset>';

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
