import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Share2, Copy, Check, ArrowLeft, Mail, Linkedin, ChevronDown, ChevronUp, Phone, ChevronRight } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Database } from '../types/database.types';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

type Article = Database['public']['Tables']['articles']['Row'];

const ArticleView = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [copiedLink, setCopiedLink] = useState(false);
  const [authorExpanded, setAuthorExpanded] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchArticle();
    }
  }, [slug]);


  const fetchArticle = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        navigate('/insights');
        return;
      }

      setArticle(data);
    } catch (error) {
      console.error('Error fetching article:', error);
      navigate('/insights');
    } finally {
      setLoading(false);
    }
  };

  const handleShareLinkedIn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = window.location.href;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const appUrl = `linkedin://shareArticle?url=${encodeURIComponent(url)}`;
      const webUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

      const startTime = Date.now();
      window.location.href = appUrl;

      setTimeout(() => {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < 2000 && document.hidden !== true) {
          window.open(webUrl, '_blank', 'noopener,noreferrer');
        }
      }, 1500);
    } else {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'PBSA': 'bg-blue-100 text-blue-800',
      'Social Housing': 'bg-green-100 text-green-800',
      'Build to Rent': 'bg-orange-100 text-orange-800',
      'Risk Transfer': 'bg-red-100 text-red-800',
      'Parx News': 'bg-slate-100 text-slate-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const normalizeLinkedInUrl = (url: string) => {
    return url.replace(/https?:\/\/uk\.linkedin\.com/, 'https://www.linkedin.com');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  if (!article) {
    return null;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.featured_image,
    "datePublished": article.published_at,
    "dateModified": article.updated_at || article.published_at,
    "author": {
      "@type": "Person",
      "name": article.author || "Parx Group",
      "jobTitle": article.author_position,
      "url": article.author_linkedin,
      "description": article.author_bio
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
    },
    "articleSection": article.category,
    "keywords": `${article.category}, real estate investment, property insurance, ${article.article_type === 'case_study' ? 'case study' : 'article'}`,
    "wordCount": article.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
    "timeRequired": `PT${article.reading_time}M`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://parxgroup.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Insights & News",
        "item": "https://parxgroup.co.uk/insights"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `https://parxgroup.co.uk/insights/${article.slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${article.title} | Parx Group Insights`}
        description={article.excerpt || article.summary || ''}
        canonical={`https://parxgroup.co.uk/insights/${article.slug}`}
        ogImage={article.featured_image}
        ogType="article"
        article={{
          publishedTime: article.published_at,
          author: article.author || 'Parx Group'
        }}
      />
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      <header className="relative h-[60vh] min-h-[500px] w-full overflow-hidden -mt-20">
        <img
          src={article.featured_image}
          alt={`${article.title} - ${article.category} article on real estate investment and property insurance`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

        <div className="absolute inset-0 flex items-end pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
            <div className="relative z-10 bg-primary-900/80 p-8 rounded-lg backdrop-blur-sm">
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(article.category)}`}>
                  {article.category}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <span className="font-medium">{article.author}</span>
                <span>•</span>
                <span>
                  {new Date(article.published_at!).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                <span>•</span>
                <span>{article.reading_time} min read</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="fixed top-[calc(60vh+2rem)] left-8 z-10 hidden lg:flex flex-col space-y-4" aria-label="Article actions">
        <Link
          to="/insights"
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          title="Back to Insights"
        >
          <ArrowLeft className="h-5 w-5 text-slate-700" />
        </Link>
        <a
          href="#"
          onClick={handleShareLinkedIn}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          title="Share on LinkedIn"
        >
          <Share2 className="h-5 w-5 text-slate-700" />
        </a>
        <button
          onClick={handleCopyLink}
          className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
          title="Copy Link"
        >
          {copiedLink ? (
            <Check className="h-5 w-5 text-green-600" />
          ) : (
            <Copy className="h-5 w-5 text-slate-700" />
          )}
        </button>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2">
            <div className="lg:hidden flex items-center space-x-4 mb-8">
              <a
                href="#"
                onClick={handleShareLinkedIn}
                className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <Share2 className="h-5 w-5 text-slate-700" />
              </a>
              <button
                onClick={handleCopyLink}
                className="p-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {copiedLink ? (
                  <Check className="h-5 w-5 text-green-600" />
                ) : (
                  <Copy className="h-5 w-5 text-slate-700" />
                )}
              </button>
            </div>

            {(article.author_profile_picture || article.author_bio) && (
              <div className="lg:hidden bg-white rounded-xl overflow-hidden shadow-lg mb-8 border border-slate-200">
                <button
                  onClick={() => setAuthorExpanded(!authorExpanded)}
                  className="w-full flex items-center justify-between p-6 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 text-white hover:from-slate-700 hover:via-slate-800 hover:to-slate-900 transition-all"
                >
                  <div className="flex items-center space-x-3">
                    {article.author_profile_picture && (
                      <img
                        src={article.author_profile_picture}
                        alt={article.author}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white"
                      />
                    )}
                    <div className="text-left">
                      <div className="text-xs font-semibold tracking-wider opacity-75 mb-1">AUTHOR</div>
                      <div className="font-semibold">{article.author}</div>
                    </div>
                  </div>
                  {authorExpanded ? (
                    <ChevronUp className="h-5 w-5 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 flex-shrink-0" />
                  )}
                </button>

                {authorExpanded && (
                  <div className="p-6 bg-white">
                    {article.author_profile_picture && (
                      <div className="w-full max-w-xs mx-auto mb-4">
                        <img
                          src={article.author_profile_picture}
                          alt={article.author}
                          className="w-full h-auto rounded-xl object-contain"
                          loading="eager"
                        />
                      </div>
                    )}
                    <div className="flex items-center justify-between w-full gap-3 mb-3">
                      <h4 className="font-semibold text-slate-900 text-lg">
                        {article.author}
                      </h4>
                      {article.author_linkedin && (
                        <a
                          href={normalizeLinkedInUrl(article.author_linkedin)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Connect on LinkedIn"
                          className="inline-block transition-all duration-250 hover:opacity-80 hover:scale-110 flex-shrink-0"
                        >
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
                          </svg>
                        </a>
                      )}
                    </div>
                    {article.author_bio && (
                      <p className="text-sm text-slate-600 leading-relaxed mb-4 font-bold italic">
                        {article.author_bio}
                      </p>
                    )}
                    {((article as any).author_phone || (article as any).author_email) && (
                      <div className="space-y-2 mb-4">
                        {(article as any).author_phone && (
                          <a
                            href={`tel:${(article as any).author_phone}`}
                            className="flex items-center space-x-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                          >
                            <Phone className="h-4 w-4" />
                            <span>{(article as any).author_phone}</span>
                          </a>
                        )}
                        {(article as any).author_email && (
                          <a
                            href={`mailto:${(article as any).author_email}`}
                            className="flex items-center space-x-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                          >
                            <Mail className="h-4 w-4" />
                            <span>{(article as any).author_email}</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            <div
              className="prose prose-lg prose-slate max-w-none mb-16 text-left md:text-justify hyphens-auto"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {article.article_references && (article.article_references as any).length > 0 && (
              <section className="border-t border-slate-200 pt-8 mb-16" aria-labelledby="article-references">
                <h2 id="article-references" className="text-2xl font-bold text-slate-900 mb-6">References & Sources</h2>
                <div className="space-y-4">
                  {((article.article_references as any) || []).map((ref: any, index: number) => (
                    <div key={index} className="border-l-4 border-slate-300 pl-4">
                      <div className="flex items-start space-x-2">
                        <span className="text-sm font-medium text-slate-500 mt-0.5">[{index + 1}]</span>
                        <div className="flex-1">
                          {ref.url ? (
                            <a
                              href={ref.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-slate-900 hover:text-primary-700 font-medium underline decoration-1 underline-offset-2 transition-colors"
                            >
                              {ref.title}
                            </a>
                          ) : (
                            <span className="text-slate-900 font-medium">{ref.title}</span>
                          )}
                          {ref.accessed_date && (
                            <span className="text-sm text-slate-600 ml-2">
                              (Accessed: {ref.accessed_date})
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="lg:hidden relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-8 md:p-12 mb-12 shadow-2xl">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 h-40 w-40 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-8 -ml-8 h-48 w-48 rounded-full bg-white/5 blur-3xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {(article as any).cta_type === 'custom' && (article as any).cta_title
                    ? (article as any).cta_title
                    : (article as any).cta_type === 'services'
                      ? 'Explore Our Services'
                      : (article as any).cta_type === 'pip'
                        ? 'Portfolio Investment Protection'
                        : 'Get In Touch'}
                </h3>

                <p className="text-white/90 mb-8 text-base md:text-lg leading-relaxed">
                  {(article as any).cta_type === 'custom' && (article as any).cta_description
                    ? (article as any).cta_description
                    : (article as any).cta_type === 'services'
                      ? 'Discover how our services can protect and enhance your investment outcomes.'
                      : (article as any).cta_type === 'pip'
                        ? 'Discover how PIP can protect and enhance investment outcomes.'
                        : 'Get in touch to learn how we can support your investment strategy.'}
                </p>

                {(article as any).cta_type === 'custom' && (article as any).cta_link ? (
                  (article as any).cta_link.startsWith('http') ? (
                    <a
                      href={(article as any).cta_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center space-x-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap"
                    >
                      <span>{(article as any).cta_button_text || 'Learn More'}</span>
                      <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </a>
                  ) : (
                    <Link
                      to={(article as any).cta_link}
                      className="group inline-flex items-center justify-center space-x-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap"
                    >
                      <span>{(article as any).cta_button_text || 'Learn More'}</span>
                      <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>
                  )
                ) : (article as any).cta_type === 'services' ? (
                  <Link
                    to="/services"
                    className="group inline-flex items-center justify-center space-x-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap"
                  >
                    <span>View Services</span>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Link>
                ) : (article as any).cta_type === 'pip' ? (
                  <Link
                    to="/portfolio-investor-protection"
                    className="group inline-flex items-center justify-center space-x-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Link>
                ) : (
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center space-x-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 whitespace-nowrap"
                  >
                    <span>Contact Parx</span>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </Link>
                )}
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 text-center">
              <Link
                to="/insights"
                className="inline-flex items-center text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                View all insights
              </Link>
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-24">
              {(article.author_profile_picture || article.author_bio) && (
                <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-white p-6 pb-4">
                    <div className="flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 text-white text-xs font-semibold tracking-wider mb-4">
                      AUTHOR
                    </div>
                    {article.author_profile_picture && (
                      <div className="w-full">
                        <img
                          src={article.author_profile_picture}
                          alt={article.author}
                          className="w-full h-auto rounded-xl object-contain"
                          loading="eager"
                        />
                      </div>
                    )}
                  </div>

                  <div className="px-6 pb-6">
                    <div className="flex items-center justify-between w-full gap-3 mb-2">
                      <h4 className="font-semibold text-slate-900 text-lg">
                        {article.author}
                      </h4>
                      {article.author_linkedin && (
                        <a
                          href={normalizeLinkedInUrl(article.author_linkedin)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Connect on LinkedIn"
                          className="inline-block transition-all duration-250 hover:opacity-80 hover:scale-110 flex-shrink-0"
                        >
                          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
                          </svg>
                        </a>
                      )}
                    </div>
                    {article.author_bio && (
                      <p className="text-sm text-slate-600 leading-relaxed mb-4 font-bold italic">
                        {article.author_bio}
                      </p>
                    )}
                    {((article as any).author_phone || (article as any).author_email) && (
                      <div className="space-y-2 mb-4">
                        {(article as any).author_phone && (
                          <a
                            href={`tel:${(article as any).author_phone}`}
                            className="flex items-center space-x-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                          >
                            <Phone className="h-4 w-4" />
                            <span>{(article as any).author_phone}</span>
                          </a>
                        )}
                        {(article as any).author_email && (
                          <a
                            href={`mailto:${(article as any).author_email}`}
                            className="flex items-center space-x-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                          >
                            <Mail className="h-4 w-4" />
                            <span>{(article as any).author_email}</span>
                          </a>
                        )}
                      </div>
                    )}

                    <div className="pt-6 border-t border-slate-200 -mx-6 px-6 mt-6">
                      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-6 shadow-xl">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-white/10 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-32 w-32 rounded-full bg-white/5 blur-3xl"></div>

                        <div className="relative z-10">
                          <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                            {(article as any).cta_type === 'custom' && (article as any).cta_title
                              ? (article as any).cta_title
                              : (article as any).cta_type === 'services'
                                ? 'Explore Our Services'
                                : (article as any).cta_type === 'pip'
                                  ? 'Portfolio Investment Protection'
                                  : 'Get In Touch'}
                          </h3>

                          <p className="text-white/90 mb-6 text-sm leading-relaxed">
                            {(article as any).cta_type === 'custom' && (article as any).cta_description
                              ? (article as any).cta_description
                              : (article as any).cta_type === 'services'
                                ? 'Discover how our services can protect and enhance your investment outcomes.'
                                : (article as any).cta_type === 'pip'
                                  ? 'Discover how PIP can protect and enhance investment outcomes.'
                                  : 'Get in touch to learn how we can support your investment strategy.'}
                          </p>

                          {(article as any).cta_type === 'custom' && (article as any).cta_link ? (
                            (article as any).cta_link.startsWith('http') ? (
                              <a
                                href={(article as any).cta_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center space-x-2 bg-white text-primary-700 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200 text-sm w-full shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                              >
                                <span>{(article as any).cta_button_text || 'Learn More'}</span>
                                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                              </a>
                            ) : (
                              <Link
                                to={(article as any).cta_link}
                                className="group inline-flex items-center justify-center space-x-2 bg-white text-primary-700 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200 text-sm w-full shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                              >
                                <span>{(article as any).cta_button_text || 'Learn More'}</span>
                                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                              </Link>
                            )
                          ) : (article as any).cta_type === 'services' ? (
                            <Link
                              to="/services"
                              className="group inline-flex items-center justify-center space-x-2 bg-white text-primary-700 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200 text-sm w-full shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                            >
                              <span>View Services</span>
                              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                          ) : (article as any).cta_type === 'pip' ? (
                            <Link
                              to="/portfolio-investor-protection"
                              className="group inline-flex items-center justify-center space-x-2 bg-white text-primary-700 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200 text-sm w-full shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                            >
                              <span>Learn More</span>
                              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                          ) : (
                            <Link
                              to="/contact"
                              className="group inline-flex items-center justify-center space-x-2 bg-white text-primary-700 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200 text-sm w-full shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
                            >
                              <span>Contact Parx</span>
                              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ArticleView;
