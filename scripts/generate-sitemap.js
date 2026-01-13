import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function loadEnvVariables() {
  const envPath = path.join(__dirname, '..', '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    const lines = envContent.split('\n');
    lines.forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        const value = valueParts.join('=').trim();
        process.env[key.trim()] = value;
      }
    });
  }
}

loadEnvVariables();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.log('Skipping sitemap generation - Supabase environment variables not set');
  process.exit(0);
}

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

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const { data: articles, error } = await supabase
    .from('articles')
    .select('slug, updated_at, published_at')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching articles:', error);
  }

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
