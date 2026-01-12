import React from 'react';
import { Shield, Building, FileCheck, PoundSterling, ChevronRight, CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

function Services() {
  const serviceCategories = [
    {
      id: 'development',
      title: 'Development',
      description: 'Cover is designed to address legal, title and site-specific risks that can arise during acquisition, construction and onward funding, helping developers and funders proceed with confidence.',
      icon: Building,
      link: '/development',
      features: [
        'Rights to Light',
        'Planning Insurance',
        'Environmental Liabilities'
      ]
    },
    {
      id: 'acquisition',
      title: 'Acquisition & Disposal',
      description: 'Cover is structured to facilitate efficient deal execution where time constraints, incomplete information or legacy issues might otherwise impede progress.',
      icon: FileCheck,
      link: '/acquisition-disposal',
      features: [
        'Title Risk',
        'Restrictive Covenant',
        'Absence of Easement'
      ]
    },
    {
      id: 'portfolio-investor-protection',
      title: 'Portfolio Investment Protection',
      description: 'Portfolio Investment Protection (PIP) insurance is a specialist rental income protection policy that safeguards the lenders or investors net rental income for the duration of the lease or lending agreement.',
      icon: PoundSterling,
      link: '/portfolio-investor-protection',
      features: [
        'Rental Income Guarantee',
        'Long Income Protection',
        'A-Rated Insurer Backing'
      ]
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Real Estate Insurance Services",
    "name": "Property Insurance Services",
    "description": "Comprehensive insurance solutions for property development, acquisition, disposal, and portfolio investment including title insurance, environmental coverage, and rights to light protection.",
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
      "name": "Property Insurance Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Development Insurance",
            "description": "Insurance covering legal, title and site-specific risks during property development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Acquisition & Disposal Insurance",
            "description": "Insurance facilitating efficient property transaction execution"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Portfolio Investment Protection",
            "description": "Rental income protection for property portfolio lenders and investors"
          }
        }
      ]
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
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Property Insurance Services | Real Estate Insurance Solutions"
        description="Comprehensive insurance solutions for property development, acquisition, disposal, and portfolio investment. Title insurance, environmental coverage, and rights to light protection."
        canonical="https://parxgroup.co.uk/services"
        keywords="property insurance, real estate insurance, title insurance, development insurance, rights to light, environmental insurance, portfolio investor protection, UK property insurance"
      />
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />

      <header className="relative bg-white -mt-20">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/services-hero.webm"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='white'/%3E%3C/svg%3E"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label="London cityscape skyline featuring modern commercial buildings"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="relative z-10 bg-primary-900/80 p-8 rounded-lg backdrop-blur-sm max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Property Insurance Services
              </h1>
              <p className="mt-6 text-xl text-white max-w-3xl">
                Bespoke insurance-led risk transfer solutions that protect property investments, strengthen funding terms and enhance long-term asset value across the UK real estate market.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </header>

      <section className="py-16 bg-neutral-50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h2 id="services-heading" className="text-3xl font-bold text-neutral-900 mb-2">Our Insurance Services</h2>
              <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Three core service areas covering the full property investment lifecycle, from development through acquisition to long-term portfolio management.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <AnimatedSection key={category.id} direction="up" delay={0.1 * index}>
                <article className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden h-full flex flex-col">
                  <div className="p-8 flex-grow">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-md mb-6">
                      <category.icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">{category.title}</h3>
                    <p className="text-neutral-600 mb-6">{category.description}</p>

                    <ul className="space-y-3">
                      {category.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary-500 mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="px-8 pb-8">
                    <Link
                      to={category.link}
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-200"
                    >
                      Learn more
                      <ChevronRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600"></div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white to-neutral-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Expert Real Estate Insurance Solutions</h2>
              <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
            </div>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <AnimatedSection direction="left" delay={0.1}>
              <div className="relative bg-gradient-to-br from-white to-neutral-50/50 rounded-3xl p-10 shadow-xl border border-neutral-200/60">
                <div className="absolute -top-5 left-10 flex gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-lg flex items-center justify-center transform -rotate-3">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-lg flex items-center justify-center transform rotate-3">
                    <Building className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg shadow-lg flex items-center justify-center transform -rotate-3">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="prose prose-lg max-w-none mt-4">
                  <p className="text-neutral-700 leading-relaxed mb-5">
                    Parx Group provides insurance-led risk transfer structures for UK property development and transactional activity, tailored to the complexities of each deal. Our team has accumulated more than five decades of experience working alongside developers, investors, lenders and advisers across the breadth of the real estate market.
                  </p>
                  <p className="text-neutral-700 leading-relaxed mb-5">
                    No two property transactions are the same. Whether navigating an acquisition or disposal, supporting development finance, reshaping capital structures or mitigating operational risk, we take a deal-specific approach, building insurance solutions that align precisely with your commercial priorities and longer-term objectives.
                  </p>
                  <p className="text-neutral-700 leading-relaxed">
                    We partner with A- and AA rated insurers to deliver robust, institutional-quality protection at every stage of the property lifecycle, ensuring that risk transfer arrangements satisfy the requirements of lenders, funders and institutional investors active in UK real estate.
                  </p>
                </div>

                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full blur-2xl opacity-50"></div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 bg-white p-8">
                <img
                  src="/property_lifecycle_parx_4.webp"
                  alt="Diagram showing the property investment lifecycle stages: development, acquisition, disposal, and portfolio management with insurance coverage at each phase"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <h2 id="cta-heading" className="text-3xl font-bold text-neutral-900 mb-2">Ready to Discuss Your Insurance Needs?</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-lg text-neutral-600 mb-8">
              Contact our specialist team for a confidential consultation on your property insurance requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200"
            >
              Get in Touch
              <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export default Services;
