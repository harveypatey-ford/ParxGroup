import React, { useState } from 'react';
import { Shield, Users as Users2, Phone, Mail, MapPin, ChevronRight, ChevronLeft, Award, Briefcase, Building, Star, Menu, X, Lock, FileText, Eye, EyeOff, Clock, BarChart4, PoundSterling, Landmark, FileCheck, TrendingDown, TrendingUp, DollarSign, CheckCircle2, Calendar, LogOut, Play, ArrowRightLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import AnimatedSection from '../components/AnimatedSection';

function PortfolioInvestorProtection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const benefits = [
    {
      icon: TrendingDown,
      title: "Lower Cost of Capital for Property Investors",
      description: "Property funders and lenders provide finance at reduced margins when future rental cashflow is de-risked through PIP insurance."
    },
    {
      icon: TrendingUp,
      title: "Higher LTV Ratios for Portfolio Lending",
      description: "Insurance backing can justify increased leverage or reduced equity requirements for property portfolio investments."
    },
    {
      icon: BarChart4,
      title: "Income Certainty Drives Higher Valuations",
      description: "Property portfolios with guaranteed rental income command stronger yields and capitalisation rates in the real estate market."
    },
    {
      icon: Award,
      title: "A-Rated Covenant Protection",
      description: "Purchasers can underwrite based on guaranteed cashflows rather than tenant or market risk as the insurer's A-rated covenant effectively substitutes the tenant's covenant, giving property funders institutional-grade security."
    },
    {
      icon: CheckCircle2,
      title: "Predictable Rental Revenue Streams",
      description: "Supporting long term property investment plans, compliance with regulatory stress testing, and sustainability commitments for real estate portfolios."
    },
    {
      icon: LogOut,
      title: "Strengthens Portfolio Exit Strategy",
      description: "Enhanced exit opportunities and pricing for forward-funded or income-strip property investment structures."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Portfolio Investment Protection Insurance",
    "alternateName": ["PIP Insurance", "Rental Income Protection Insurance", "Portfolio Lending Protection"],
    "description": "Portfolio Investment Protection (PIP) insurance protects portfolio lenders and investors net rental income against tenant defaults, rental voids and counterparty risks for the duration of lease or lending agreements.",
    "provider": {
      "@type": "Organization",
      "name": "Parx Group",
      "url": "https://parxgroup.co.uk",
      "telephone": "+44-20-3370-7909",
      "email": "connect@parxgroup.co.uk"
    },
    "category": "Insurance",
    "feesAndCommissionsSpecification": "Single premium paid upfront with annual management fee",
    "termsOfService": "Policy term aligned with lease or lending agreement duration",
    "audience": {
      "@type": "Audience",
      "audienceType": "Property Investors, Portfolio Lenders, Property Funders, Real Estate Investment Funds"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": {
        "@type": "Country",
        "name": "United Kingdom"
      }
    }
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
        "name": "Services",
        "item": "https://parxgroup.co.uk/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Portfolio Investment Protection",
        "item": "https://parxgroup.co.uk/portfolio-investment-protection"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Portfolio Investment Protection Insurance",
    "name": "Portfolio Investment Protection",
    "alternateName": "PIP Insurance",
    "description": "Comprehensive rental income protection for property investors and lenders. Protects against tenant defaults, rental voids and counterparty risks with A-rated insurer backing.",
    "provider": {
      "@type": "Organization",
      "name": "Parx Group",
      "url": "https://parxgroup.co.uk"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Portfolio Investment Protection Benefits",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lower Cost of Capital",
            "description": "Reduced financing costs for property investors through de-risked rental cashflows"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Higher LTV Ratios",
            "description": "Increased leverage opportunities for portfolio lending with insurance backing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "A-Rated Covenant Protection",
            "description": "Institutional-grade security from A-rated insurers substituting tenant covenant risk"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rental Income Guarantee",
            "description": "100% protection of net rental income for the full policy term"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Portfolio Investment Protection insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Portfolio Investment Protection (PIP) insurance protects a portfolio lenders or investors net rental income. The policy covers rental or lease cashflows and provides protection against defaults, voids and counterparty risks for the duration of the lease or lending agreement."
        }
      },
      {
        "@type": "Question",
        "name": "What are the key benefits of PIP insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Key benefits include lower cost of capital, higher LTV ratios, income certainty driving higher valuations, A-rated covenant protection, predictable revenue streams, and strengthened exit opportunities with forward-funded or income-strip structures."
        }
      },
      {
        "@type": "Question",
        "name": "What types of properties does PIP insurance cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The policy can be used for a range of tenant types including social housing, student accommodation, and other use classes as may be agreed with the insurer."
        }
      },
      {
        "@type": "Question",
        "name": "How is PIP insurance premium structured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A single premium is paid upfront together with an annual management fee thereafter. The policy is underwritten by an A-rated insurer."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Portfolio Investment Protection Insurance | Rental Income Protection for Property Investors"
        description="We structure insurance-led risk transfer solutions that protect income, strengthen funding terms and enhance long-term asset value."
        keywords="portfolio investment protection, PIP insurance, rental income protection, rent protection, rent guarantee, property investment insurance, tenant default insurance, portfolio lending protection, real estate investment protection, rental income guarantee, property portfolio insurance, investor protection insurance, lease income insurance, rental cashflow protection, property lender insurance, A-rated covenant protection, LTV ratio insurance, social housing insurance, PBSA insurance, build to rent insurance, property funders insurance"
        canonical="https://parxgroup.co.uk/portfolio-investment-protection"
      />
      <StructuredData data={structuredData} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      {/* Hero Section */}
      <header className="relative bg-white -mt-20">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/pip-hero_2.webm"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='white'/%3E%3C/svg%3E"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-neutral-900/20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="relative z-10 bg-primary-900/80 p-8 rounded-lg backdrop-blur-sm max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl">
              Portfolio Investment Protection
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              Secure your property investment portfolio returns with comprehensive rental income insurance.
            </p>
          </div>
        </div>
      </header>

      {/* Product Summary Section */}
      <section className="section bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.3} distance={30} duration={0.5} direction="up">
            <article className="prose prose-lg max-w-none">
              <div className="mb-8 text-left">
                <h2 className="text-3xl font-bold text-neutral-900 mb-2">Product Summary</h2>
                <div className="w-20 h-1 bg-primary-500 mb-6"></div>
              </div>
              <p className="text-base sm:text-xl text-gray-700 leading-relaxed text-justify hyphens-auto">
                The Portfolio Investment Protection "PIP" policy safeguards rental and lease cashflows for lenders and investors by providing comprehensive protection against tenant default, rental voids and counterparty risk for the full term of the lease or lending arrangement.
              </p>
              <p className="text-base sm:text-xl text-gray-700 leading-relaxed mt-4 text-justify hyphens-auto">
                The policy is designed to operate across a wide range of property asset classes and tenant profiles, including social housing, purpose-built student accommodation, build-to-rent developments and other agreed use classes, subject to insurer approval.
              </p>
              <div className="mt-8 text-center sm:text-left">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 hover:from-primary-700 hover:via-primary-800 hover:to-primary-700 text-white font-bold rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 group relative overflow-hidden ring-2 ring-primary-400 ring-offset-2 hover:ring-4 hover:ring-primary-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <Play className="h-6 w-6 mr-3 group-hover:scale-125 transition-transform relative z-10" />
                  <span className="relative z-10 text-lg">Explainer Video</span>
                </button>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>

{/* Deal Structure Section */}
<section className="section bg-white py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <AnimatedSection delay={0.4} distance={32} duration={0.55} direction="right">
      <div className="mb-6">
        <h2 id="deal-structure" className="text-3xl font-bold text-neutral-900 mb-1">
          Cashflow & Risk Transfer Structure
        </h2>
        <div className="w-16 h-1 bg-primary-500"></div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-4">
        {/* Stage 1 */}
        <div className="bg-gradient-to-br from-white to-neutral-50 rounded-xl shadow-md p-5 border border-neutral-200">
          <div className="flex items-start gap-3">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg p-2.5 w-11 h-11 flex items-center justify-center shadow">
              <ArrowRightLeft className="h-5 w-5 text-primary-700" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                Gross Income
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Rental income is paid to the portfolio operator.
              </p>
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center">
          <div className="w-px h-8 bg-primary-300"></div>
        </div>

        {/* Stage 2 */}
        <div className="bg-gradient-to-br from-white to-neutral-50 rounded-xl shadow-md p-5 border border-neutral-200">
          <div className="flex items-start gap-3">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg p-2.5 w-11 h-11 flex items-center justify-center shadow">
              <Building className="h-5 w-5 text-primary-700" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                Portfolio Management
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                The operator manages the portfolio and retains a portion of the income.
              </p>
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center">
          <div className="w-px h-8 bg-primary-300"></div>
        </div>

        {/* PIP Box */}
        <div className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50 rounded-xl shadow-lg p-5 border border-primary-300">
          <div className="flex items-start gap-3">
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg p-2.5 w-11 h-11 flex items-center justify-center shadow">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                Portfolio Investment Protection
              </h3>
              <p className="text-sm text-neutral-700 leading-relaxed">
                The policy indemnifies up to 100% of net rent payable to the lender or investor for the duration of the lease or financing arrangement.
              </p>
            </div>
          </div>
        </div>

        {/* Arrow down */}
        <div className="flex justify-center">
          <div className="w-px h-8 bg-primary-300"></div>
        </div>

        {/* Stage 3 */}
        <div className="bg-gradient-to-br from-white to-neutral-50 rounded-xl shadow-md p-5 border border-neutral-200">
          <div className="flex items-start gap-3">
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg p-2.5 w-11 h-11 flex items-center justify-center shadow">
              <PoundSterling className="h-5 w-5 text-primary-700" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                Net Income
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                The remaining net income is payable to the portfolio lender or investor.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="relative hidden md:block">
        <div
          className="
            grid
            grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)_56px_minmax(0,1fr)]
            grid-rows-[auto_150px]
            gap-x-5
            gap-y-3
            items-stretch
          "
        >
          {/* Stage 1 */}
          <div className="flex justify-center">
            <div className="w-[340px] bg-gradient-to-br from-white to-neutral-50 rounded-xl shadow-md p-5 relative border border-neutral-200">
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg p-2.5 w-11 h-11 flex items-center justify-center shadow">
                  <ArrowRightLeft className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">
                    Gross Income
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Rental income is paid to the portfolio operator.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal line 1 */}
          <div className="flex items-center justify-center" aria-hidden="true">
            <div className="w-full h-px bg-primary-300"></div>
          </div>

          {/* Stage 2 */}
          <div className="flex justify-center">
            <div className="w-[340px] bg-gradient-to-br from-white to-neutral-50 rounded-xl shadow-md p-5 relative border border-neutral-200">
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg p-2.5 w-11 h-11 flex items-center justify-center shadow">
                  <Building className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">
                    Portfolio Management
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    The operator manages the portfolio and retains a portion of the income.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal line 2 + vertical drop */}
          <div className="relative flex items-center justify-center" aria-hidden="true">
            {/* Base horizontal */}
            <div className="w-full h-px bg-primary-300"></div>

            {/* Horizontal glow */}
            <div
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px]"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 50%, rgba(30,125,105,0.6) 0%, rgba(30,125,105,0.25) 45%, rgba(30,125,105,0) 75%)',
                opacity: 0.7,
                filter: 'blur(0.6px)'
              }}
            />

            {/* Base vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-px bg-primary-300 z-10 h-[156px]" />

            {/* Vertical glow (same centre pixel, not a second line) */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-1/2 w-px z-20 h-[156px]"
              style={{
                background: 'rgba(30,125,105,0.85)',
                opacity: 0.55,
                filter: 'blur(0.35px)',
                boxShadow:
                  '0 0 10px rgba(30,125,105,0.45), 0 0 22px rgba(30,125,105,0.25)'
              }}
            />
          </div>

          {/* Stage 3 */}
          <div className="flex justify-center">
            <div className="w-[340px] bg-gradient-to-br from-white to-neutral-50 rounded-xl shadow-md p-5 relative border border-neutral-200">
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg p-2.5 w-11 h-11 flex items-center justify-center shadow">
                  <PoundSterling className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-neutral-900 mb-2">
                    Net Income
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    The remaining net income is payable to the portfolio lender or investor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* PIP row */}
          <div className="col-start-4 row-start-2 flex justify-center">
            <div className="relative mt-3">
              <div
                className="
                  bg-gradient-to-br
                  from-primary-50
                  via-primary-100
                  to-primary-50
                  rounded-xl
                  shadow-lg
                  p-5
                  border
                  border-primary-300
                  w-[460px]
                  max-w-[50vw]
                  relative
                  z-20
                "
                style={{
                  boxShadow:
                    '0 0 0 2px rgba(30,125,105,0.35), 0 0 28px rgba(30,125,105,0.35)'
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg p-2.5 w-11 h-11 flex items-center justify-center shadow">
                    <Shield className="h-5 w-5 text-white" />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-neutral-900 mb-2">
                      Portfolio Investment Protection
                    </h3>

                    <p className="text-sm text-neutral-700 leading-relaxed">
                      The policy indemnifies up to 100% of net rent payable to the lender or investor for the duration of the lease or financing arrangement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid fillers */}
          <div className="col-start-1 row-start-2"></div>
          <div className="col-start-2 row-start-2"></div>
          <div className="col-start-3 row-start-2"></div>
          <div className="col-start-5 row-start-2"></div>
        </div>
      </div>
    </AnimatedSection>
  </div>
</section>






















      {/* Key Benefits Section */}
      <section className="section bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2} distance={30} duration={0.5} direction="up">
            <div className="mb-8 sm:mb-10 text-left">
              <h2 id="key-benefits" className="text-3xl font-bold text-neutral-900 mb-2">Key Benefits</h2>
              <div className="w-20 h-1 bg-primary-500 mb-6"></div>
            </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedSection key={index} delay={0.1 * index} direction="up" distance={30} duration={0.5}>
                  <div className="card p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-3 sm:mr-4 lg:mr-5">
                        <div className="p-3 bg-primary-50 rounded-lg w-fit">
                          <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-neutral-600 text-sm sm:text-base">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Policy Coverage Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.3} distance={30} duration={0.5} direction="left">
            <div className="mb-8 sm:mb-10 text-left">
              <h2 id="policy-coverage" className="text-3xl font-bold text-neutral-900 mb-2">Policy Coverage</h2>
              <div className="w-20 h-1 bg-primary-500 mb-6"></div>
            </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary-600 p-3 sm:p-4">
              <h3 className="text-base sm:text-xl font-semibold text-white">Comprehensive Rental Income Protection</h3>
            </div>
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex items-start">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
                <p className="text-sm sm:text-base text-gray-700">
                  <strong>A-Rated Insurer:</strong> The portfolio investment protection product is underwritten by an A-rated insurance company providing institutional-grade security
                </p>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
                <p className="text-sm sm:text-base text-gray-700">
                  <strong>Flexible Policy Term:</strong> Policy duration is aligned with the term of the lease or lending agreement (subject to insurer approval)
                </p>
              </div>
              <div className="flex items-start">
                <FileCheck className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
                <p className="text-sm sm:text-base text-gray-700">
                  <strong>Comprehensive Indemnity Limit:</strong> Limit of indemnity represents the total net rental income for the duration of the policy term
                </p>
              </div>
              <div className="flex items-start">
                <BarChart4 className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
                <p className="text-sm sm:text-base text-gray-700">
                  <strong>Inflation Protection:</strong> Limit of indemnity can be inflation linked to protect against rising costs
                </p>
              </div>
              <div className="flex items-start">
                <PoundSterling className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
                <p className="text-sm sm:text-base text-gray-700">
                  <strong>Simple Premium Structure:</strong> Single premium paid upfront together with an annual management fee thereafter
                </p>
              </div>
            </div>
          </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative Divider */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-center">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
              <div className="px-6 sm:px-8">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                  <span className="text-lg sm:text-xl font-semibold text-gray-700 tracking-wide">Get In Touch</span>
                  <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                </div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300"></div>
            </div>
          </div>

          <AnimatedSection delay={0.3} direction="none" duration={0.5}>
            <div className="relative sm:bg-white sm:rounded-3xl sm:shadow-2xl overflow-hidden sm:border sm:border-gray-100">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-50 via-primary-100/30 to-transparent rounded-full blur-3xl opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gray-50 to-transparent rounded-full blur-2xl opacity-50"></div>

              <div className="relative flex flex-col sm:flex-row items-center sm:items-stretch gap-0">
                {/* Image Section */}
                <div className="flex-shrink-0 w-full sm:w-auto p-4 sm:p-0 flex justify-center sm:block">
                  <div className="relative w-40 sm:w-72 md:w-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-xl sm:rounded-br-3xl sm:rounded-br-none sm:rounded-r-none sm:rounded-l-none sm:rounded-tl-none"></div>
                    <img
                      src="/harvey_patey-ford_800x940_webp.webp"
                      alt="Harvey Patey-Ford"
                      className="w-full h-auto relative z-10 rounded-xl sm:rounded-none shadow-lg sm:shadow-none"
                      loading="eager"
                      decoding="sync"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-gray-900/60 to-transparent z-20 rounded-b-xl sm:rounded-none"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 px-4 pt-2 pb-4 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center min-h-full w-full">
                  <div className="mb-4 sm:mb-6 md:mb-8 text-center sm:text-left">
                    <h3 className="text-xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 tracking-tight">
                      Harvey Patey-Ford
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
                      Long Income Specialist
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    <a
                      href="tel:+447514466677"
                      className="group flex items-center p-3 sm:p-4 bg-gradient-to-r from-primary-50 to-primary-100/50 hover:from-primary-100 hover:to-primary-200/50 rounded-lg sm:rounded-xl transition-all duration-300 border border-primary-200/50 hover:border-primary-300 hover:shadow-md"
                    >
                      <div className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 bg-primary-600 rounded-md sm:rounded-lg flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-primary-700 transition-colors duration-300 shadow-md">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-primary-700 font-medium mb-0.5">Phone</div>
                        <div className="text-sm sm:text-base font-semibold text-gray-900">+44 (0) 751 44 666 77</div>
                      </div>
                    </a>

                    <a
                      href="mailto:harvey.patey-ford@parxgroup.co.uk"
                      className="group flex items-center p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-gray-100/50 hover:from-primary-50 hover:to-primary-100/50 rounded-lg sm:rounded-xl transition-all duration-300 border border-gray-200 hover:border-primary-300 hover:shadow-md"
                    >
                      <div className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 bg-gray-600 group-hover:bg-primary-600 rounded-md sm:rounded-lg flex items-center justify-center mr-3 sm:mr-4 transition-colors duration-300 shadow-md">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      </div>
                      <div className="min-w-0 overflow-hidden">
                        <div className="text-xs text-gray-600 group-hover:text-primary-700 font-medium mb-0.5 transition-colors duration-300">Email</div>
                        <div className="text-sm sm:text-base font-semibold text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">Harvey.Patey-Ford@ParxGroup.co.uk</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 group"
              aria-label="Close video"
            >
              <X className="h-6 w-6 text-gray-700 group-hover:text-gray-900" />
            </button>

            <div className="aspect-video bg-black">
              <video
                className="w-full h-full"
                controls
                autoPlay
                src="/pip_explainer_video_hb.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioInvestorProtection;