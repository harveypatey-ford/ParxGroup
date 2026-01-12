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
  console.log('Skipping social meta generation - Supabase environment variables not set');
  process.exit(0);
}

const escapeHtml = (text) => {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};

const generateHtml = (article, builtIndexHtml) => {
  const title = escapeHtml(article.title);
  const excerpt = escapeHtml(article.excerpt || 'Read more on Parx Group');
  const image = escapeHtml(article.featured_image);
  const pageUrl = `https://parxgroup.co.uk/insights/${article.slug}`;
  const author = escapeHtml(article.author || 'Parx Group');
  const publishedDate = article.published_at ? new Date(article.published_at).toISOString() : '';

  const cssMatch = builtIndexHtml.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]*)"[^>]*>/);
  const jsMatch = builtIndexHtml.match(/<script[^>]*type="module"[^>]*src="([^"]*)"[^>]*>/);

  const cssLink = cssMatch ? `<link rel="stylesheet" crossorigin href="${cssMatch[1]}">` : '';
  const scriptTag = jsMatch ? `<script type="module" crossorigin src="${jsMatch[1]}"></script>` : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - Parx Group</title>
  <meta name="description" content="${excerpt}">
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="apple-touch-icon" href="/favicon.png">

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

  ${cssLink}
</head>
<body>
  <div id="root"></div>
  ${scriptTag}
</body>
</html>`;
};

async function main() {
  console.log('Generating social meta files...');

  const indexHtmlPath = path.join(__dirname, '..', 'dist', 'index.html');
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('Built index.html not found. Make sure to run build first.');
    process.exit(1);
  }

  const builtIndexHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  const { data: articles, error } = await supabase
    .from('articles')
    .select('*')
    .eq('published', true);

  if (error) {
    console.error('Error fetching articles:', error);
    process.exit(1);
  }

  if (!articles || articles.length === 0) {
    console.log('No published articles found');
    return;
  }

  const distDir = path.join(__dirname, '..', 'dist', 'insights');

  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  for (const article of articles) {
    if (!article.slug || !article.title || !article.featured_image) {
      console.warn(`Skipping article ${article.id}: missing required fields`);
      continue;
    }

    const html = generateHtml(article, builtIndexHtml);
    const filePath = path.join(distDir, `${article.slug}.html`);

    fs.writeFileSync(filePath, html);
    console.log(`Generated: ${filePath}`);
  }

  console.log(`Successfully generated ${articles.length} social meta files`);
}

main().catch(console.error);
