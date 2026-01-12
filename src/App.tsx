import React, { useState, useEffect } from 'react';
import { Shield, Users as Users2, Phone, Mail, MapPin, ChevronRight, ChevronDown, Award, Briefcase, Building, Menu, X, Home, TrendingUp, Linkedin, Layers } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Development, AcquisitionDisposal, PortfolioInvestorProtection, Login, Dashboard, CreateCasefile, CreatePIPApplication, CreatePBSAApplication, RightsToLight, TitleInsurance, Services, Contact, AdminLogin, AdminDashboard, Terms, Privacy, KYC, TOBA, EnvironmentalInsurance, Insights, ArticleView, ManageInsights } from './pages';
import AnimatedSection from './components/AnimatedSection';
import StatusDisclosure from './components/StatusDisclosure';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import SEO from './components/SEO';
import StructuredData, { organizationSchema, websiteSchema, siteNavigationSchema } from './components/StructuredData';
import { supabase } from './lib/supabase';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="bg-white p-8 rounded-lg shadow-card">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            <p className="mt-4 text-neutral-600">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

function HomePage() {
  const [recentArticles, setRecentArticles] = useState<any[]>([]);
  const [displayedRows, setDisplayedRows] = useState(2);
  const articlesPerRow = 3;
  const articlesToShow = displayedRows * articlesPerRow;

  useEffect(() => {
    const cacheKey = 'parx_recent_articles';
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      try {
        setRecentArticles(JSON.parse(cachedData));
      } catch (e) {
        console.error('Error parsing cached articles:', e);
      }
    }

    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => fetchRecentArticles(cacheKey), { timeout: 2000 });
    } else {
      setTimeout(() => fetchRecentArticles(cacheKey), 2000);
    }
  }, []);

  const fetchRecentArticles = async (cacheKey: string) => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('published', true)
        .eq('featured', true)
        .order('published_at', { ascending: false })
        .limit(3);

      if (error) throw error;
      if (data) {
        setRecentArticles(data);
        localStorage.setItem(cacheKey, JSON.stringify(data));
      }
    } catch (error) {
      console.error('Error fetching articles:', error);
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

  return (
    <>
      <SEO
        title="Parx Group - Real Estate Insurance and Funding Specialist"
        description="Providing bespoke insurance-led risk transfer solutions that secure income, strengthen funding and safeguard long-term asset value."
        keywords="real estate insurance, property insurance UK, rental income protection, rent protection, rent guarantee, title insurance, environmental insurance, portfolio investment protection, PIP insurance, property development insurance, acquisition insurance, disposal insurance, rights to light insurance, real estate risk management, property investment protection, development insurance, property portfolio insurance"
        canonical="https://parxgroup.co.uk/"
      />
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <StructuredData data={siteNavigationSchema} />
      {/* Hero Section */}
      <div className="relative bg-neutral-900 -mt-20 h-[calc(100vh+5rem)]">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="/parx-hero.webm"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='white'/%3E%3C/svg%3E"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="relative z-10 text-center mt-16 sm:mt-0 px-4 py-4 inline-block">
            <AnimatedSection direction="up" delay={0.1}>
              <img
                src="/logo.svg"
                alt="Parx Group Logo"
                className="h-56 sm:h-80 lg:h-[28rem] w-auto mx-auto mb-2 drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)]"
              />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.3}>
              <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,1)] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)]">
                Real Estate Insurance Specialist
              </h1>
            </AnimatedSection>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <ChevronDown className="h-12 w-12 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]" />
        </div>
      </div>

      {/* Services Section */}
      <section className="section bg-neutral-50" id="services">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Property Insurance Services</h2>
              <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-4">
                Dedicted to protecting and enhancing real estate through bespoke risk transfer solutions that secure income, strengthen funding and safeguard long-term asset value.
              </p>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Every project presents its own set of risks, and its risk management strategies must be tailored with the same level of precision. Parx Group provides the assurance that your requirements will be assessed in full and that the most effective approach will be identified to support your objectives.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection direction="up" delay={0.1}>
              <Link to="/development" className="card p-4 sm:p-8 h-full flex flex-col text-center group cursor-pointer hover:shadow-xl hover:-translate-y-2 hover:border-primary-300 transition-all duration-300">
                <div className="mx-auto p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                  <Building className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">Development</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Protect your development project from unexpected delays and financial Losses.
                </p>
                <div className="mt-4 flex items-center justify-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium mr-1">Learn more</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <Link to="/acquisition-disposal" className="card p-4 sm:p-8 h-full flex flex-col text-center group cursor-pointer hover:shadow-xl hover:-translate-y-2 hover:border-primary-300 transition-all duration-300">
                <div className="mx-auto p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                  <Home className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">Acquisition and Disposal</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Safeguard your transactions with our specialised risk management solutions.
                </p>
                <div className="mt-4 flex items-center justify-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium mr-1">Learn more</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Link to="/portfolio-investor-protection" className="card p-4 sm:p-8 h-full flex flex-col text-center group cursor-pointer hover:shadow-xl hover:-translate-y-2 hover:border-primary-300 transition-all duration-300">
                <div className="mx-auto p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">Portfolio Investment Protection</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Enhance your investment portfolio with comprehensive rental income protection.
                </p>
                <div className="mt-4 flex items-center justify-center text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium mr-1">Learn more</span>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            </AnimatedSection>
          </div>
          
          <AnimatedSection direction="up" delay={0.4}>
            <div className="mt-12 text-center">
              <Link
                to="/services"
                className="btn btn-primary"
              >
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Expert Real Estate Risk Management</h2>
              <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
              <div className="max-w-4xl mx-auto text-neutral-600 space-y-4">
                <p className="text-lg">
                  At Parx Group, we specialise in structuring insurance-led risk transfer solutions that address the complex risk landscape of UK property development and transactions. Our team brings over 50 years of combined experience working with developers, investors, lenders and professional advisers across the full spectrum of real estate asset classes.
                </p>
                <p className="text-lg">
                  We work with A- and AA rated insurers to deliver institutional-grade protection throughout the property lifecycle, ensuring that risk transfer solutions align with the expectations of funders, lenders and institutional capital active in UK real estate markets.
                </p>
              </div>
            </div>
          </AnimatedSection>
          <div className="mt-8 grid grid-cols-3 gap-4 sm:hidden max-w-xs mx-auto">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="flex flex-col items-center">
                <div className="bg-primary-50 rounded-xl w-12 h-12 flex items-center justify-center">
                  <Layers className="h-6 w-6 text-primary-600" />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <div className="flex flex-col items-center">
                <div className="bg-primary-50 rounded-xl w-12 h-12 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.3}>
              <div className="flex flex-col items-center">
                <div className="bg-primary-50 rounded-xl w-12 h-12 flex items-center justify-center">
                  <Users2 className="h-6 w-6 text-primary-600" />
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="mt-12 hidden sm:grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="relative bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-6 shadow-lg border border-neutral-100 overflow-hidden">
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex-shrink-0 bg-primary-50 rounded-2xl w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <Layers className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">Bespoke Structuring</h3>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <div className="relative bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-6 shadow-lg border border-neutral-100 overflow-hidden">
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex-shrink-0 bg-primary-50 rounded-2xl w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">Comprehensive Coverage</h3>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.3}>
              <div className="relative bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-6 shadow-lg border border-neutral-100 overflow-hidden">
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex-shrink-0 bg-primary-50 rounded-2xl w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <Users2 className="h-7 w-7 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">Personal Service</h3>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Client Testimonials</h2>
              <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Hear what our clients have to say about our bespoke insurance solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            <AnimatedSection direction="left" delay={0.1}>
              <div className="card p-8 relative">
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                    <img
                      src="/jaspar.webp"
                      alt="Jaspar Group logo"
                      className="w-auto h-auto object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900">Sam Stickler</h4>
                    <p className="text-neutral-600">Acquisition Director</p>
                  </div>
                </div>
                <blockquote className="text-neutral-700 italic relative z-10">
                  Parx Group have superb expertise in their field. They quickly guide us through our exposures, before offering a neat solution that lets us continue to focus on developing our projects.
                </blockquote>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="card p-8 relative">
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                    <img
                      src="/hspg.webp"
                      alt="HSPG logo"
                      className="w-auto h-auto object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900">Stuart Brightmore</h4>
                    <p className="text-neutral-600">Senior Acquisitions Associate</p>
                  </div>
                </div>
                <blockquote className="text-neutral-700 italic relative z-10">
                  Parx offer tailored, practical advice and exceptional customer service, making them a trusted partner in managing our risks. They understands the unique challenges of social housing, and I always feel confident with their support.
                </blockquote>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="card p-8 relative">
                <div className="flex items-center mb-6">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                    <img
                      src="/westmede.webp"
                      alt="Westmede logo"
                      className="w-auto h-auto object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900">George Wise</h4>
                    <p className="text-neutral-600">Head of Investment & Development</p>
                  </div>
                </div>
                <blockquote className="text-neutral-700 italic relative z-10">
                  Parx Group's bespoke insurance solutions and proactive approach give us confidence in navigating the challenges of the sector. Highly recommended for reliable risk management.
                </blockquote>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Insights and News Section */}
      <section className="section bg-white" id="insights">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-2">Real Estate Investment Insights</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-neutral-600">
              Stay informed with our latest articles and industry insights
            </p>
          </div>

          {recentArticles.length > 0 && (
            <div className="mt-12 grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3">
              {recentArticles.slice(0, articlesToShow).map((article) => (
                <Link
                  key={article.id}
                  to={`/insights/${article.slug}`}
                  className="block h-full group"
                >
                  {/* Mobile card design */}
                  <div className="md:hidden bg-white rounded-2xl border-2 border-neutral-100 overflow-hidden h-full flex flex-col shadow-md hover:shadow-xl hover:border-primary-200">
                    <div className="relative h-48 overflow-hidden flex-shrink-0 bg-neutral-50">
                      <img
                        src={article.featured_image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
                      <div className="absolute top-4 left-4">
                        <span className={`inline-block px-4 py-2 rounded-lg text-xs font-bold tracking-wide uppercase shadow-lg backdrop-blur-sm ${getCategoryColor(article.category)}`}>
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-neutral-900 mb-5 leading-tight line-clamp-3 group-hover:text-primary-600 flex-grow">
                        {article.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm font-semibold text-neutral-400 mt-auto pt-5 border-t-2 border-neutral-50">
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {new Date(article.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {article.reading_time} min
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop card design */}
                  <div className="hidden md:flex bg-white border-2 border-neutral-100 rounded-2xl overflow-hidden h-full flex-col group hover:border-primary-200 hover:shadow-2xl">
                    <div className="relative h-56 overflow-hidden flex-shrink-0 bg-neutral-50">
                      <img
                        src={article.featured_image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0"></div>
                      <div className="absolute top-5 left-5">
                        <span className={`inline-block px-4 py-2 rounded-lg text-xs font-bold tracking-wide uppercase shadow-lg backdrop-blur-sm ${getCategoryColor(article.category)}`}>
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-7 flex-grow flex flex-col bg-gradient-to-b from-white to-neutral-50/50">
                      <h3 className="text-xl font-bold text-neutral-900 mb-6 leading-tight group-hover:text-primary-600 flex-grow line-clamp-3">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm font-semibold text-neutral-400 mt-auto pt-5 border-t-2 border-neutral-100">
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {new Date(article.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {article.reading_time} min read
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {recentArticles.length > articlesToShow && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setDisplayedRows(displayedRows + 2)}
                className="btn btn-primary"
              >
                Load More
              </button>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link
              to="/insights"
              className="btn btn-primary"
            >
              View All Insights
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function AppContent() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = location.pathname === '/';
  const isArticlePage = location.pathname.startsWith('/insights/');

  // Hide nav for client dashboard and admin pages
  const clientPages = ['/dashboard', '/create-casefile', '/create-pip-application', '/create-pbsa-application', '/kyc', '/toba'];
  const adminPages = ['/admin/login', '/admin/dashboard', '/admin/manage-insights', '/admin-login', '/admin-dashboard'];
  const hideNav = clientPages.includes(location.pathname) || adminPages.includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const shouldUseScrolledStyle = isScrolled;

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    shouldUseScrolledStyle ? 'bg-white shadow-soft' : 'bg-transparent'
  }`;

  const linkClasses = `text-lg font-semibold tracking-wide transition-all duration-200 relative group ${
    shouldUseScrolledStyle ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-primary-100'
  }`;

  const linkUnderlineClasses = `absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
    shouldUseScrolledStyle ? 'bg-primary-600' : 'bg-white'
  }`;

  const buttonClasses = `px-4 py-2 rounded-md font-medium transition-all duration-200 ${
    shouldUseScrolledStyle
      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow'
      : 'bg-white text-primary-600 hover:bg-white/90'
  }`;

  const mobileButtonClasses = `mobile-menu-button ${
    shouldUseScrolledStyle ? 'text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100' : 'text-white hover:text-white/80'
  }`;

  const mobileMenuClasses = `md:hidden transition-all duration-300 ${
    isMobileMenuOpen ? 'block' : 'hidden'
  } ${shouldUseScrolledStyle ? 'bg-white border-t border-neutral-200' : 'bg-primary-900/90 backdrop-blur-sm'}`;

  const mobileLinkClasses = `block px-4 py-3 rounded-md text-base font-medium transition-colors ${
    shouldUseScrolledStyle
      ? 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
      : 'text-white hover:text-white hover:bg-white/10'
  }`;

  const mobilePortalClasses = `block px-4 py-3 rounded-md text-base font-medium transition-colors ${
    shouldUseScrolledStyle
      ? 'bg-primary-600 text-white hover:bg-primary-700'
      : 'bg-white text-primary-600 hover:bg-white/90'
  }`;

  return (
    <div className="min-h-screen bg-white">
          {!hideNav && (
            <nav className={navClasses}>
            <div className="container-custom">
              <div className="flex justify-between h-20 items-center">
                <div className="flex items-center">
                  <Link
                    to="/"
                    onClick={closeMobileMenu}
                  >
                    <img
                      src="/logo.svg"
                      alt="Parx Group Logo"
                      className={`h-14 w-auto transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] ${
                        shouldUseScrolledStyle ? '' : 'brightness-0 invert'
                      } ${isHomePage && !isScrolled ? 'opacity-0' : 'opacity-100'}`}
                    />
                  </Link>
                </div>

                {/* Mobile menu button */}
                <div className={`md:hidden transition-opacity duration-300 ${isHomePage && !isScrolled ? 'opacity-0' : 'opacity-100'}`}>
                  <button
                    onClick={toggleMobileMenu}
                    className={mobileButtonClasses}
                    aria-label="Toggle menu"
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </button>
                </div>

                {/* Desktop Navigation */}
                <div className={`hidden md:flex space-x-6 items-center transition-opacity duration-300 ${isHomePage && !isScrolled ? 'opacity-0' : 'opacity-100'}`}>
                  <Link to="/" className={linkClasses}>
                    Home
                    <span className={linkUnderlineClasses}></span>
                  </Link>
                  <Link to="/services" className={linkClasses}>
                    Services
                    <span className={linkUnderlineClasses}></span>
                  </Link>
                  <Link to="/portfolio-investor-protection" className={linkClasses}>
                    PIP
                    <span className={linkUnderlineClasses}></span>
                  </Link>
                  <Link to="/insights" className={linkClasses}>
                    Insights & News
                    <span className={linkUnderlineClasses}></span>
                  </Link>
                  <Link to="/contact" className={linkClasses}>
                    Contact
                    <span className={linkUnderlineClasses}></span>
                  </Link>
                  <Link to="/login" className={buttonClasses}>Client Portal</Link>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className={mobileMenuClasses}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link 
                  to="/" 
                  className={mobileLinkClasses}
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className={mobileLinkClasses}
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
                <Link
                  to="/portfolio-investor-protection"
                  className={mobileLinkClasses}
                  onClick={closeMobileMenu}
                >
                  PIP
                </Link>
                <Link
                  to="/insights"
                  className={mobileLinkClasses}
                  onClick={closeMobileMenu}
                >
                  Insights & News
                </Link>
                <Link
                  to="/contact"
                  className={mobileLinkClasses}
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
                <Link 
                  to="/login" 
                  className={mobilePortalClasses}
                  onClick={closeMobileMenu}
                >
                  Client Portal
                </Link>
              </div>
            </div>
          </nav>
          )}

          <div className={hideNav ? '' : isHomePage ? '' : 'pt-20'}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/development" element={<Development />} />
              <Route path="/acquisition-disposal" element={<AcquisitionDisposal />} />
              <Route path="/portfolio-investor-protection" element={<PortfolioInvestorProtection />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/create-casefile" element={<ProtectedRoute><CreateCasefile /></ProtectedRoute>} />
              <Route path="/create-pip-application" element={<ProtectedRoute><CreatePIPApplication /></ProtectedRoute>} />
              <Route path="/create-pbsa-application" element={<ProtectedRoute><CreatePBSAApplication /></ProtectedRoute>} />
              <Route path="/rights-to-light" element={<ProtectedRoute><RightsToLight /></ProtectedRoute>} />
              <Route path="/title-insurance" element={<ProtectedRoute><TitleInsurance /></ProtectedRoute>} />
              <Route path="/environmental-insurance" element={<ProtectedRoute><EnvironmentalInsurance /></ProtectedRoute>} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<ArticleView />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/manage-insights" element={<ProtectedRoute><ManageInsights /></ProtectedRoute>} />
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/kyc" element={<ProtectedRoute><KYC /></ProtectedRoute>} />
              <Route path="/toba" element={<ProtectedRoute><TOBA /></ProtectedRoute>} />
            </Routes>
          </div>

          <footer className="bg-primary-900 py-8 sm:py-12 lg:py-16">
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                <div>
                  <div className="flex items-center">
                    <img
                      src="/logo.svg"
                      alt="Parx Group Logo"
                      className="h-20 sm:h-32 lg:h-40 w-auto"
                    />
                  </div>
                  <div className="mt-4 sm:mt-6">
                    <a
                      href="https://www.linkedin.com/company/parxgroup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary-800 text-white border-2 border-primary-700 shadow-lg hover:bg-primary-700 hover:shadow-xl hover:scale-105 hover:border-primary-600 transition-all duration-300"
                      aria-label="Visit Parx Group on LinkedIn"
                    >
                      <Linkedin className="h-7 w-7" />
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h3>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li><Link to="/" className="text-primary-200 hover:text-white transition-colors">Home</Link></li>
                    <li><Link to="/services" className="text-primary-200 hover:text-white transition-colors">Services</Link></li>
                    <li><Link to="/insights" className="text-primary-200 hover:text-white transition-colors">Insights & News</Link></li>
                    <li><Link to="/contact" className="text-primary-200 hover:text-white transition-colors">Contact</Link></li>
                    <li><Link to="/login" className="text-primary-200 hover:text-white transition-colors">Client Portal</Link></li>
                    <li><Link to="/admin-login" className="text-primary-200 hover:text-white transition-colors">Admin Portal</Link></li>
                    <li><Link to="/terms" className="text-primary-200 hover:text-white transition-colors">Terms & Conditions</Link></li>
                    <li><Link to="/privacy" className="text-primary-200 hover:text-white transition-colors">Privacy Notice</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Services</h3>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li><Link to="/portfolio-investor-protection" className="text-primary-200 hover:text-white transition-colors">Portfolio Investment Protection</Link></li>
                    <li><Link to="/acquisition-disposal" className="text-primary-200 hover:text-white transition-colors">Acquisition and Disposal</Link></li>
                    <li><Link to="/development" className="text-primary-200 hover:text-white transition-colors">Development</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contact</h3>
                  <ul className="space-y-2 text-primary-200 text-sm sm:text-base">
                    <li className="flex items-start">
                      <MapPin className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Preston Park House, South Road, Brighton, East Sussex, BN1 6SB</span>
                    </li>
                    <li className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span>+44 (0) 20 3370 7909</span>
                    </li>
                    <li className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="break-all">connect@parxgroup.co.uk</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-6 sm:mt-12 sm:pt-8 border-t border-primary-800">
                <p className="text-center text-primary-300 text-sm sm:text-base px-4">
                  © {new Date().getFullYear()} Parx Group. All rights reserved.
                </p>
                <p className="text-center text-primary-400 text-xs sm:text-sm mt-3 sm:mt-4 max-w-4xl mx-auto px-4 leading-relaxed">
                  Parx is a trading name of Parx Group Limited, registered in England & Wales with registered number 14768763, which is an Appointed Representative of CLS Property Insight Limited who are authorised and regulated by the Financial Conduct Authority (FRN 718255). Registered office: Preston Park House, South Road, Brighton, East Sussex, BN1 6SB | Parx Group 2025 ©
                </p>
              </div>
            </div>
          </footer>
        </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;