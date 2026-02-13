import React from 'react';
import { Shield, Building, FileCheck, PoundSterling, ChevronRight, CheckCircle, Award, Layers, Users2 } from 'lucide-react';
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
      id: 'portfolio-investment-protection',
      title: 'Portfolio Investment Protection',
      description: 'Portfolio Investment Protection (PIP) insurance is a specialist rental income protection policy that safeguards the lenders or investors net rental income for the duration of the lease or lending agreement.',
      icon: PoundSterling,
      link: '/portfolio-investment-protection',
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
            src="/service_hero3_-_trim.webm"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='white'/%3E%3C/svg%3E"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
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
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-md flex-shrink-0">
                        <category.icon className="h-7 w-7 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900">{category.title}</h3>
                    </div>
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

      <section className="relative py-20 lg:py-28 bg-primary-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-700 rounded-full blur-[160px] opacity-20 -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-600 rounded-full blur-[120px] opacity-15 translate-y-1/2 -translate-x-1/4" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection direction="left">
              <div>
                <span className="inline-block text-primary-300 font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Parx</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                  Expert Real Estate Insurance Solutions
                </h2>
                <p className="text-primary-200 text-lg leading-relaxed mb-5">
                  Parx Group provides insurance-led risk transfer structures for UK property development and transactional activity, tailored to the complexities of each deal. Our team has accumulated more than five decades of experience working alongside developers, investors, lenders and advisers across the breadth of the real estate market.
                </p>
                <p className="text-primary-200 text-lg leading-relaxed">
                  We partner with A- and AA rated insurers to deliver robust, institutional-quality protection at every stage of the property lifecycle, ensuring that risk transfer arrangements satisfy the requirements of lenders, funders and institutional investors active in UK real estate.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-1 gap-5">
                <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.1] transition-all duration-300 group">
                  <div className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                      <Layers className="h-7 w-7 text-primary-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Bespoke Structuring</h3>
                      <p className="text-primary-300 text-sm mt-1">Tailored solutions for every project</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.1] transition-all duration-300 group">
                  <div className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                      <Shield className="h-7 w-7 text-primary-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Comprehensive Coverage</h3>
                      <p className="text-primary-300 text-sm mt-1">AA rated insurer partnerships</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.1] transition-all duration-300 group">
                  <div className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                      <Users2 className="h-7 w-7 text-primary-300" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Deal-Specific Approach</h3>
                      <p className="text-primary-300 text-sm mt-1">No two transactions are the same</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={0.3}>
            <div className="mt-16 pt-16 border-t border-white/10 hidden sm:grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-black text-white">50+</div>
                <p className="text-primary-300 mt-2 text-sm font-medium">Years Combined Experience</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-white">AA</div>
                <p className="text-primary-300 mt-2 text-sm font-medium">Rated Insurer Partners</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-white">360&deg;</div>
                <p className="text-primary-300 mt-2 text-sm font-medium">Full Lifecycle Coverage</p>
              </div>
            </div>
          </AnimatedSection>
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
