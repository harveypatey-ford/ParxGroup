import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, Award, Building, Clock, BarChart4, PoundSterling, FileCheck, TrendingDown, TrendingUp, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import AnimatedSection from '../components/AnimatedSection';
import PIPStructureDiagram from '../components/PIPStructureDiagram';

function PortfolioInvestorProtection() {
  const [fundingStructure, setFundingStructure] = useState<'equity' | 'debt'>('equity');

  const audiences = [
    { icon: Building, label: 'Lenders', description: 'funding income producing portfolios, including banks, debt funds and institutional lenders.' },
    { icon: Award, label: 'Institutional investors', description: 'holding leased real estate for the long term, including insurers, annuity providers and pension funds, and investors in forward funded and income strip structures.' },
    { icon: PoundSterling, label: 'Borrowers and sponsors', description: 'raising finance against portfolio income.' },
    { icon: FileCheck, label: 'Advisers', description: 'structuring transactions for clients, including debt advisers and solicitors.' }
  ];

  const coverSteps = [
    { icon: PoundSterling, title: 'What Is Insured', description: 'The net rent payable to the insured lender or investor. The policy can indemnify up to 100% of that net rent for the policy term, above the first loss layer.' },
    { icon: Shield, title: 'A Funded First Loss Layer', description: "Before the policy responds, the first loss layer must be used. This is a ring fenced cash reserve funded at the outset. It absorbs short term disruption and keeps the parties' interests aligned." },
    { icon: Building, title: 'Cover Is Tested at Portfolio Level', description: 'Income is measured across the whole portfolio. A vacancy in one unit, or a weak period in one asset, does not give rise to a claim on its own. A claim needs net income across the portfolio to fall below the insured level. The policy is designed to respond to structural income failure, such as the failure of a counterparty or a sustained fall in income, and not to routine movements in occupancy.' },
    { icon: FileCheck, title: 'Oversight Through the Term', description: 'The policy is accompanied by an Operating Agreement, which sets out how the portfolio is reported on and monitored and how the cover operates in practice.' }
  ];

  const benefitGroups = [
    {
      label: 'For borrowers and sponsors',
      benefits: [
        { icon: TrendingDown, title: 'Lower Cost of Capital', description: 'Where net rental income is insured, lenders may be able to offer keener margins.' },
        { icon: TrendingUp, title: 'Scope for Higher Leverage', description: 'Insurance backing can support the case for increased leverage or a lower equity requirement.' },
        { icon: PoundSterling, title: 'Access to Institutional Capital', description: 'Long dated, insured income may broaden the range of lenders and investors able to fund a portfolio, including annuity and pension capital.' }
      ]
    },
    {
      label: 'For lenders',
      benefits: [
        { icon: Award, title: 'Insurer Covenant Rated A- or Better', description: 'Insured net rent is supported by the covenant of insurers rated A- or better, in addition to the underlying tenant or operator.' },
        { icon: Shield, title: 'Layered Protection', description: 'A funded Debt Service Reserve absorbs early disruption, and the policy can respond to covered shortfalls beyond it.' },
        { icon: FileCheck, title: 'Oversight Through the Loan Term', description: 'The Operating Agreement provides structured reporting on the portfolio and its income.' }
      ]
    },
    {
      label: 'For institutional investors',
      benefits: [
        { icon: CheckCircle2, title: 'More Predictable Net Income', description: 'Protection against covered shortfalls can make long dated income more predictable for liability matching and investment planning.' },
        { icon: BarChart4, title: 'Support for Valuation and Exit', description: 'Insured income may support keener yields and stronger pricing on sale, including for forward funded and income strip structures.' }
      ]
    }
  ];

  const policyFeatures = [
    { icon: Shield, label: 'Insurer Security', text: 'Underwritten by insurers rated A- or better.' },
    { icon: PoundSterling, label: 'Cover', text: 'Up to 100% of net rent payable to the lender or investor, above the first loss layer.' },
    { icon: FileCheck, label: 'First Loss Layer', text: 'A funded reserve, sized for each transaction: a Debt Service Reserve in debt funded structures and a First Loss Reserve in equity funded structures.' },
    { icon: Clock, label: 'Policy Term', text: 'Aligned with the term of the lease or lending agreement, up to a maximum of 25 years, subject to insurer approval.' },
    { icon: Building, label: 'Limit of Indemnity', text: 'Set by reference to the total insured net rent over the policy term.' },
    { icon: BarChart4, label: 'Indexation', text: 'The limit of indemnity can be index linked, so that cover keeps pace with indexed rent, subject to an agreed cap.' },
    { icon: FileCheck, label: 'Operating Agreement', text: 'Sets out reporting, monitoring and how the cover operates in practice.' },
    { icon: PoundSterling, label: 'Premium', text: 'A single premium paid at inception, with an annual management fee thereafter.' }
  ];

  const sectorNames = [
    'social housing;',
    'purpose built student accommodation (PBSA);',
    'private rented sector and build to rent;',
    'commercial real estate.'
  ];

  const relatedReading = [
    { title: 'Why Long Income Social Housing Is a Smart Strategic Investment in 2026', path: '/insights/why-long-income-social-housing-is-a-smart-strategic-investment-in-2026' },
    { title: 'Long Income Rent Protection for Student Accommodation Investors', path: '/insights/long-income-rent-protection-for-student-accommodation-investors' },
    { title: 'Unlock Annuity Capital for Real Estate', path: '/insights/unlock-annuity-capital-for-real-estate' },
    { title: 'Strengthen Portfolio Funding Terms with Long Income Rent Protection', path: '/insights/strengthen-portfolio-funding-terms-with-long-income-rent-protection' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    "name": "Portfolio Investment Protection",
    "alternateName": ["PIP Insurance"],
    "description": "Portfolio Investment Protection (PIP) is an insurance policy that protects the net rental income a lender or investor expects to receive from a real estate portfolio.",
    "provider": {
      "@type": "Organization",
      "name": "Parx Group",
      "url": "https://parxgroup.co.uk",
      "telephone": "+44-20-3370-7909",
      "email": "connect@parxgroup.co.uk"
    },
    "category": "Insurance",
    "feesAndCommissionsSpecification": "A single premium paid at inception, with an annual management fee thereafter.",
    "termsOfService": "Aligned with the term of the lease or lending agreement, up to a maximum of 25 years, subject to insurer approval.",
    "audience": {
      "@type": "Audience",
      "audienceType": "professional and institutional parties to real estate transactions"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "eligibleRegion": { "@type": "Country", "name": "United Kingdom" }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://parxgroup.co.uk" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://parxgroup.co.uk/services" },
      { "@type": "ListItem", "position": 3, "name": "Portfolio Investment Protection", "item": "https://parxgroup.co.uk/portfolio-investment-protection" }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Portfolio Investment Protection",
    "name": "Portfolio Investment Protection",
    "alternateName": "PIP Insurance",
    "description": "Each policy is structured around the transaction it supports and the requirements of the capital behind it, so the detail varies with the portfolio, the funding structure and the insurer.",
    "provider": { "@type": "Organization", "name": "Parx Group", "url": "https://parxgroup.co.uk" },
    "areaServed": { "@type": "Country", "name": "United Kingdom" }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Portfolio Investment Protection | Rental Income Protection for Lenders and Investors | Parx Group"
        description="Portfolio Investment Protection (PIP) is an insurance policy that protects the net rental income lenders and institutional investors rely on, subject to underwriting and policy terms."
        keywords="portfolio investment protection, PIP insurance, net rental income, institutional lenders and investors, first loss reserve, debt service reserve, operating agreement"
        canonical="https://parxgroup.co.uk/portfolio-investment-protection"
      />
      <StructuredData data={structuredData} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      {/* Hero Section */}
      <header className="relative bg-white -mt-20">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/pip_hero_4_-_trim.webm"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='white'/%3E%3C/svg%3E"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-neutral-900/20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="relative z-10 bg-primary-900/80 p-8 rounded-lg backdrop-blur-sm max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl">
              Portfolio Investment Protection
            </h1>
            <p className="mt-6 text-xl text-white max-w-3xl">
              Insured net rental income for institutional lenders and investors in long income real estate, supported by insurers rated A- or better.
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
                Portfolio Investment Protection (PIP) is an insurance policy that protects the net rental income a lender or investor expects to receive from a real estate portfolio. It is designed to respond where tenant default, sustained voids or the failure of a counterparty leave net income across the portfolio short of the insured amount. Cover runs for the term of the lease or lending arrangement, up to a maximum of 25 years.
              </p>
              <p className="text-base sm:text-xl text-gray-700 leading-relaxed text-justify hyphens-auto">
                PIP is a policy of indemnity. Cover is tested across the portfolio as a whole and responds once an agreed first loss layer has been used. It is subject to the terms, conditions, exclusions and limit of indemnity of the policy, and is underwritten by insurers rated A- or better.
              </p>
              <p className="text-base sm:text-xl text-gray-700 leading-relaxed text-justify hyphens-auto">
                Each policy is structured around the transaction it supports and the requirements of the capital behind it, so the detail varies with the portfolio, the funding structure and the insurer.
              </p>
            </article>
          </AnimatedSection>
        </div>
      </section>

      {/* Who It Is For Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2} distance={30} duration={0.5} direction="up">
            <div className="mb-8 text-left">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Who It Is For</h2>
              <div className="w-20 h-1 bg-primary-500 mb-6"></div>
              <p className="text-base sm:text-xl text-gray-700 leading-relaxed">PIP is arranged for professional and institutional parties to real estate transactions:</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {audiences.map(({ icon: Icon, label, description }) => (
                <div key={label} className="card p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 sm:mr-4 lg:mr-5">
                      <div className="p-3 bg-primary-50 rounded-lg w-fit"><Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" /></div>
                    </div>
                    <p className="text-neutral-600 text-sm sm:text-base">
                      <strong className="text-neutral-900">{label}</strong> {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How the Cover Works Section */}
      <section className="section bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2} distance={30} duration={0.5} direction="up">
            <div className="mb-8 text-left">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">How the Cover Works</h2>
              <div className="w-20 h-1 bg-primary-500 mb-6"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {coverSteps.map(({ icon: Icon, title, description }) => (
                <div key={title} className="card p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 sm:mr-4 lg:mr-5">
                      <div className="p-3 bg-primary-50 rounded-lg w-fit"><Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" /></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">{title}</h3>
                      <p className="text-neutral-600 text-sm sm:text-base">{description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

{/* Deal Structure Section */}
      <section className="section bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.4} distance={32} duration={0.55} direction="right">
            <div className="mb-6">
              <h2 id="deal-structure" className="text-3xl font-bold text-neutral-900 mb-1">Cashflow & Risk Transfer Structure</h2>
              <div className="w-16 h-1 bg-primary-500 mb-6"></div>
              <p className="text-base sm:text-xl text-gray-700 leading-relaxed">How income flows, and where the policy sits, depends on how the portfolio is funded.</p>
            </div>
            <div className="mb-8 flex justify-center">
              <div role="group" aria-label="Choose a portfolio funding structure" className="inline-flex rounded-xl border border-neutral-200 bg-neutral-100 p-1">
                <button
                  type="button"
                  aria-pressed={fundingStructure === 'equity'}
                  onClick={() => setFundingStructure('equity')}
                  className={fundingStructure === 'equity'
                    ? 'rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 bg-primary-700 text-white shadow-sm'
                    : 'rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 text-neutral-700 hover:bg-white hover:text-primary-700'}
                >
                  Equity-Funded
                </button>
                <button
                  type="button"
                  aria-pressed={fundingStructure === 'debt'}
                  onClick={() => setFundingStructure('debt')}
                  className={fundingStructure === 'debt'
                    ? 'rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 bg-primary-700 text-white shadow-sm'
                    : 'rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 text-neutral-700 hover:bg-white hover:text-primary-700'}
                >
                  Debt-Funded
                </button>
              </div>
            </div>
            <PIPStructureDiagram fundingStructure={fundingStructure} />
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
              <p className="text-base sm:text-xl text-gray-700 leading-relaxed">Insured net rental income can change how a portfolio is assessed by lenders, valuers and purchasers.</p>
            </div>
            {benefitGroups.map(({ label, benefits }) => (
              <div key={label} className="mb-10 last:mb-0">
                <h3 className="text-xl font-semibold text-neutral-900 mb-5">{label}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {benefits.map(({ icon: Icon, title, description }) => (
                    <div key={title} className="card p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-3 sm:mr-4 lg:mr-5">
                          <div className="p-3 bg-primary-50 rounded-lg w-fit"><Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" /></div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">{title}</h4>
                          <p className="text-neutral-600 text-sm sm:text-base">{description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Policy Features Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.3} distance={30} duration={0.5} direction="left">
            <div className="mb-8 sm:mb-10 text-left">
              <h2 id="policy-coverage" className="text-3xl font-bold text-neutral-900 mb-2">Policy Features</h2>
              <div className="w-20 h-1 bg-primary-500 mb-6"></div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                {policyFeatures.map(({ icon: Icon, label, text }) => (
                  <div key={label} className="flex items-start">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mr-2 sm:mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base text-gray-700">
                      <strong>{label}:</strong> {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="section bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={0.2} distance={30} duration={0.5} direction="up">
            <div className="mb-8 text-left">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Sectors</h2>
              <div className="w-20 h-1 bg-primary-500 mb-6"></div>
              <p className="text-base sm:text-xl text-gray-700 leading-relaxed">PIP can be structured for portfolios in:</p>
            </div>
            <div className="card p-4 sm:p-6 lg:p-8">
              <ul className="space-y-3">
                {sectorNames.map(name => (
                  <li key={name} className="flex items-start gap-3 text-neutral-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-600 mt-0.5" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-neutral-600 text-sm sm:text-base">Other use classes can be considered, subject to insurer approval.</p>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-5">Related reading</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {relatedReading.map(({ title, path }) => (
                  <Link to={path} key={path} className="card p-4 sm:p-6 text-primary-700 hover:text-primary-800 font-semibold transition-colors">
                    {title}
                  </Link>
                ))}
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
                    <p className="text-sm sm:text-base text-gray-700 mb-3">To discuss a transaction or request indicative terms:</p>
                    <h3 className="text-xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 tracking-tight">
                      Harvey Patey-Ford
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
                      CEO
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
                        <div className="text-sm sm:text-base font-semibold text-gray-900">+44 (0) 7514 466677</div>
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
                        <div className="text-sm sm:text-base font-semibold text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">harvey.patey-ford@parxgroup.co.uk</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Important Information, directly above the shared footer */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm leading-relaxed text-neutral-500 space-y-4">
          <h2 className="text-sm font-semibold text-neutral-700">Important Information</h2>
          <p>This page gives general information about Portfolio Investment Protection for professional and institutional audiences. It is not an offer of insurance, and it is not advice or a personal recommendation. Cover is subject to underwriting and insurer approval, and to the terms, conditions, exclusions and limits of the policy issued for each transaction.</p>
          <p>References to funding, valuation or pricing describe how insured income may be viewed by lenders, valuers and investors. They are not forecasts or guarantees, and outcomes depend on each party's own assessment. Nothing on this page is a statement about regulatory eligibility or capital treatment.</p>
        </div>
      </section>
    </div>
  );
}

export default PortfolioInvestorProtection;
