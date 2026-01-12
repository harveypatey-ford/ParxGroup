import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Database } from '../types/database.types';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

type Article = Database['public']['Tables']['articles']['Row'];

const Insights = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [displayedRows, setDisplayedRows] = useState(2);
  const articlesPerRow = 3;
  const articlesToShow = displayedRows * articlesPerRow;

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    setDisplayedRows(2);
  }, [selectedCategory]);

  const fetchArticles = async () => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'PBSA': 'bg-blue-100 text-blue-800',
      'Social Housing': 'bg-green-100 text-green-800',
      'Build to Rent': 'bg-orange-100 text-orange-800',
      'Risk Transfer': 'bg-red-100 text-red-800',
      'News': 'bg-slate-100 text-slate-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(articles.map(a => a.category)));
    return ['All', ...uniqueCategories];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') return articles;
    return articles.filter(article => article.category === selectedCategory);
  }, [articles, selectedCategory]);

  const featuredArticles = useMemo(() => {
    return filteredArticles.filter(article => article.featured);
  }, [filteredArticles]);

  const regularArticles = useMemo(() => {
    return filteredArticles.filter(article => !article.featured);
  }, [filteredArticles]);

  const blogSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Parx Group Insights & News",
    "description": "Expert insights, analysis and news covering real estate investment, property insurance, PBSA, social housing, build-to-rent, and risk transfer solutions.",
    "url": "https://parxgroup.co.uk/insights",
    "publisher": {
      "@type": "Organization",
      "name": "Parx Group",
      "url": "https://parxgroup.co.uk",
      "logo": {
        "@type": "ImageObject",
        "url": "https://parxgroup.co.uk/parx_5.png"
      }
    },
    "blogPost": articles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.summary,
      "image": article.featured_image,
      "datePublished": article.published_at,
      "author": {
        "@type": "Person",
        "name": article.author || "Parx Group"
      },
      "url": `https://parxgroup.co.uk/insights/${article.slug}`
    }))
  }), [articles]);

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
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Insights & News - Real Estate Investment & Property Insurance"
        description="Expert insights, analysis and industry news on real estate investment, property insurance, PBSA, social housing, build-to-rent and risk transfer. Stay informed with Parx Group's property sector expertise."
        keywords="property insurance insights, real estate news, PBSA news, social housing news, build to rent insights, property investment news, real estate risk management insights, portfolio investor protection news, property insurance analysis"
        canonical="https://parxgroup.co.uk/insights"
      />
      <StructuredData data={blogSchema} />
      <StructuredData data={breadcrumbSchema} />
      <header className="relative bg-white -mt-20">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 65%' }}
            src="/insights-hero.webm"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='white'/%3E%3C/svg%3E"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="relative z-10 bg-primary-900/80 p-8 rounded-lg backdrop-blur-sm max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Property Investment Insights
              </h1>
              <p className="mt-6 text-xl text-white max-w-3xl">
                Expert analysis, market insights and industry news shaping the future of real estate investment, property insurance and risk transfer solutions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </header>

      {/* Mobile Filter Section - Static below hero */}
      <div className="lg:hidden bg-white border-b border-neutral-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center justify-center space-x-2 flex-1 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all duration-200"
            >
              <Filter className="h-5 w-5" />
              <span>Filter by Category</span>
              {selectedCategory !== 'All' && (
                <span className="ml-2 bg-white text-slate-900 px-2 py-0.5 rounded-full text-xs font-bold">
                  {selectedCategory}
                </span>
              )}
            </button>
            {selectedCategory !== 'All' && (
              <button
                onClick={() => setSelectedCategory('All')}
                className="px-4 py-3 bg-neutral-200 hover:bg-neutral-300 text-neutral-700 font-semibold rounded-lg transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Mobile Filter Dropdown */}
          {isFilterOpen && (
            <div className="mt-2 bg-white rounded-lg shadow-xl border border-neutral-200 overflow-hidden">
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <h3 className="font-semibold">Select Category</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="hover:bg-slate-800 rounded-full p-1 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-slate-900 text-white font-medium'
                        : 'hover:bg-neutral-100 text-neutral-700'
                    }`}
                  >
                    {category}
                    {category !== 'All' && (
                      <span className="ml-2 text-xs text-neutral-500">
                        ({articles.filter(a => a.category === category).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        {/* Desktop Floating Filter Button */}
        <div className="hidden lg:block fixed left-8 top-[28rem] z-50">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>

          {/* Desktop Filter Panel */}
          {isFilterOpen && (
            <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 overflow-hidden">
              <div className="p-4 bg-primary-600 text-white flex items-center justify-between">
                <h3 className="font-semibold">Filter by Category</h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="hover:bg-primary-700 rounded-full p-1 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="p-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-100 text-primary-800 font-medium'
                        : 'hover:bg-neutral-100 text-neutral-700'
                    }`}
                  >
                    {category}
                    {category !== 'All' && (
                      <span className="ml-2 text-xs text-neutral-500">
                        ({articles.filter(a => a.category === category).length})
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Active Filter Badge - Desktop only */}
        {selectedCategory !== 'All' && (
          <div className="hidden lg:flex mb-6 items-center space-x-2">
            <span className="text-sm text-neutral-600">Filtered by:</span>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedCategory)}`}>
              {selectedCategory}
            </span>
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              Clear filter
            </button>
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
          </div>
        ) : filteredArticles.length === 0 ? (
          <AnimatedSection>
            <div className="text-center py-20">
              <p className="text-slate-600 text-lg">
                {selectedCategory === 'All'
                  ? 'No articles published yet. Check back soon!'
                  : `No articles found in "${selectedCategory}" category.`}
              </p>
            </div>
          </AnimatedSection>
        ) : (
          <div className="space-y-16">
            {featuredArticles.length > 0 && (
              <div className="relative">
                <AnimatedSection direction="up">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-neutral-900 mb-2">Featured Articles</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
                    <p className="text-lg text-neutral-600 max-w-3xl mx-auto">Handpicked insights and must-read content</p>
                  </div>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredArticles.slice(0, articlesToShow).map((article, index) => (
                    <AnimatedSection key={article.id} delay={index * 0.1} direction="up">
                      <Link to={`/insights/${article.slug}`} className="block h-full group">
                        <article className="bg-white rounded-lg shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-2xl flex flex-col cursor-pointer border-2 border-primary-100">
                          <div className="h-40 overflow-hidden">
                            <img
                              src={article.featured_image}
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-5 flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-2.5">
                              <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${getCategoryColor(article.category)}`}>
                                {article.category}
                              </span>
                              <div className="flex items-center space-x-2 text-xs text-neutral-500">
                                <span>{new Date(article.published_at!).toLocaleDateString('en-GB', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric'
                                })}</span>
                                <span>•</span>
                                <span>{article.reading_time} min read</span>
                              </div>
                            </div>

                            <h2 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors leading-snug mb-2">
                              {article.title}
                            </h2>

                            <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                              {article.summary}
                            </p>
                          </div>
                        </article>
                      </Link>
                    </AnimatedSection>
                  ))}
                </div>
                {featuredArticles.length > articlesToShow && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={() => setDisplayedRows(displayedRows + 2)}
                      className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </div>
            )}

            {regularArticles.length > 0 && (
              <div>
                {featuredArticles.length > 0 && (
                  <AnimatedSection direction="up">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-neutral-900 mb-2">All Articles</h2>
                      <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
                      <p className="text-lg text-neutral-600 max-w-3xl mx-auto">Browse our complete collection of insights</p>
                    </div>
                  </AnimatedSection>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularArticles.slice(0, articlesToShow).map((article, index) => (
                    <AnimatedSection key={article.id} delay={index * 0.1} direction="up">
                      <Link to={`/insights/${article.slug}`} className="block h-full group">
                        <article className="bg-white rounded-lg shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-2xl flex flex-col cursor-pointer">
                          <div className="h-40 overflow-hidden">
                            <img
                              src={article.featured_image}
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-5 flex-1 flex flex-col">
                            <div className="flex items-center justify-between mb-2.5">
                              <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${getCategoryColor(article.category)}`}>
                                {article.category}
                              </span>
                              <div className="flex items-center space-x-2 text-xs text-neutral-500">
                                <span>{new Date(article.published_at!).toLocaleDateString('en-GB', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric'
                                })}</span>
                                <span>•</span>
                                <span>{article.reading_time} min read</span>
                              </div>
                            </div>

                            <h2 className="text-lg font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors leading-snug mb-2">
                              {article.title}
                            </h2>

                            <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                              {article.summary}
                            </p>
                          </div>
                        </article>
                      </Link>
                    </AnimatedSection>
                  ))}
                </div>
                {regularArticles.length > articlesToShow && (
                  <div className="mt-8 text-center">
                    <button
                      onClick={() => setDisplayedRows(displayedRows + 2)}
                      className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Insights;
