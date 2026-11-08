import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const articlesDir = path.join(__dirname, '..', 'src', 'content', 'articles');
const publishedArticles = () => fs.readdirSync(articlesDir)
  .filter(file => file.endsWith('.json'))
  .map(file => JSON.parse(fs.readFileSync(path.join(articlesDir, file), 'utf8')))
  .filter(article => article.published && article.published_at);

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

function escapeXml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatDate(date) {
  return new Date(date).toISOString().split('T')[0];
}

async function generateSitemap() {
  console.log('Generating sitemap.xml...');

  const articles = publishedArticles();

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  staticPages.forEach(page => {
    sitemap += '  <url>\n';
    sitemap += `    <loc>${escapeXml(baseUrl + page.url)}</loc>\n`;
    sitemap += `    <lastmod>${formatDate(new Date())}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += '  </url>\n';
  });

  if (articles && articles.length > 0) {
    articles.forEach(article => {
      const lastMod = article.updated_at || article.published_at;
      sitemap += '  <url>\n';
      sitemap += `    <loc>${escapeXml(`${baseUrl}/insights/${article.slug}`)}</loc>\n`;
      if (lastMod) {
        sitemap += `    <lastmod>${formatDate(lastMod)}</lastmod>\n`;
      }
      sitemap += '    <changefreq>monthly</changefreq>\n';
      sitemap += '    <priority>0.60</priority>\n';
      sitemap += '  </url>\n';
    });
  }

  sitemap += '</urlset>';

  const distDir = path.join(__dirname, '..', 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  const sitemapPath = path.join(distDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);

  console.log(`Sitemap generated successfully with ${staticPages.length + (articles?.length || 0)} URLs`);
  console.log(`Saved to: ${sitemapPath}`);
}

generateSitemap().catch(console.error);
