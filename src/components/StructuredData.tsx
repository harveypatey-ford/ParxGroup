import { useEffect, useRef } from 'react';

interface StructuredDataProps {
  data: Record<string, any>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.className = 'structured-data-schema';

    document.head.appendChild(script);
    scriptRef.current = script;

    return () => {
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
      }
    };
  }, [data]);

  return null;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Parx Group",
  "alternateName": "Parx",
  "description": "Bespoke risk management strategies for real estate investors, developers and property professionals.",
  "url": "https://parxgroup.co.uk",
  "logo": {
    "@type": "ImageObject",
    "url": "https://parxgroup.co.uk/parx_5.png",
    "width": "512",
    "height": "512"
  },
  "image": "https://parxgroup.co.uk/parx_5.png",
  "telephone": "+44-20-3370-7909",
  "email": "connect@parxgroup.co.uk",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Preston Park House, South Road",
    "addressLocality": "Brighton",
    "postalCode": "BN1 6SB",
    "addressCountry": "GB"
  },
  "sameAs": ["https://www.linkedin.com/company/parxgroup"],
  "areaServed": "GB",
  "knowsAbout": [
    "Title Insurance",
    "Environmental Insurance",
    "Rights to Light Insurance",
    "Property Development Insurance",
    "Real Estate Investment Protection",
    "Portfolio Investment Protection"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Parx Group",
  "url": "https://parxgroup.co.uk",
  "publisher": {
    "@type": "Organization",
    "name": "Parx Group",
    "url": "https://parxgroup.co.uk"
  },
  "inLanguage": "en-GB"
};

export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "SiteNavigationElement",
      "position": 1,
      "name": "Services",
      "description": "Comprehensive insurance solutions for property development, acquisition, disposal and investment",
      "url": "https://parxgroup.co.uk/services"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 2,
      "name": "Portfolio Investment Protection",
      "description": "Rental income protection insurance for property investors and lenders",
      "url": "https://parxgroup.co.uk/portfolio-investment-protection"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 3,
      "name": "Insights & News",
      "description": "Expert insights and updates on property insurance and real estate risk management",
      "url": "https://parxgroup.co.uk/insights"
    },
    {
      "@type": "SiteNavigationElement",
      "position": 4,
      "name": "Contact",
      "description": "Get in touch with Parx Group for bespoke real estate insurance solutions",
      "url": "https://parxgroup.co.uk/contact"
    }
  ]
};

export function createArticleSchema(article: {
  title: string;
  excerpt?: string;
  summary?: string;
  author_name: string;
  published_at: string;
  updated_at?: string;
  featured_image: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt || article.summary,
    "image": article.featured_image,
    "datePublished": article.published_at,
    "dateModified": article.updated_at || article.published_at,
    "author": {
      "@type": "Person",
      "name": article.author_name,
      "url": "https://parxgroup.co.uk"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Parx Group",
      "logo": {
        "@type": "ImageObject",
        "url": "https://parxgroup.co.uk/parx_5.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://parxgroup.co.uk/insights/${article.slug}`
    }
  };
}
