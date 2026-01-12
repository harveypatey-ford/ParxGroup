import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  hreflang?: string;
  article?: {
    publishedTime?: string;
    author?: string;
  };
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://parxgroup.co.uk/parx_1.jpg',
  ogType = 'website',
  keywords,
  hreflang = 'en-GB',
  article
}: SEOProps) {
  const location = useLocation();
  const baseUrl = 'https://parxgroup.co.uk';
  const fullUrl = canonical || `${baseUrl}${location.pathname}`;
  const fullTitle = title.includes('Parx Group') ? title : `${title} - Parx Group`;

  useEffect(() => {
    document.title = fullTitle;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    updateMetaTag('description', description);

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:locale', 'en_GB', true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:secure_url', ogImage, true);
    updateMetaTag('og:image:type', 'image/jpeg', true);
    updateMetaTag('og:image:width', '2000', true);
    updateMetaTag('og:image:height', '2000', true);
    updateMetaTag('og:image:alt', ogType === 'article' ? title : 'Parx Group Logo', true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', 'Parx Group', true);

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@parxgroup');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', ogType === 'article' ? title : 'Parx Group Logo');

    if (article) {
      if (article.publishedTime) {
        updateMetaTag('article:published_time', article.publishedTime, true);
      }
      if (article.author) {
        updateMetaTag('article:author', article.author, true);
      }
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = fullUrl;

    let hreflangLink = document.querySelector('link[rel="alternate"][hreflang]') as HTMLLinkElement;
    if (!hreflangLink) {
      hreflangLink = document.createElement('link');
      hreflangLink.rel = 'alternate';
      document.head.appendChild(hreflangLink);
    }
    hreflangLink.setAttribute('hreflang', hreflang);
    hreflangLink.href = fullUrl;
  }, [fullTitle, description, fullUrl, ogImage, ogType, article, hreflang]);

  return null;
}
