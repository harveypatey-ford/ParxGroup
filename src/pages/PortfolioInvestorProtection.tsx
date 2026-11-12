import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRightLeft,
  Award,
  BarChart4,
  ChevronDown,
  FileCheck,
  Layers,
  Mail,
  Phone,
  PoundSterling,
  TrendingDown,
  TrendingUp
} from 'lucide-react';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import AnimatedSection from '../components/AnimatedSection';
import PIPStructureDiagram from '../components/PIPStructureDiagram';

type FundingStructure = 'equity' | 'debt';

/* -------------------------------------------------------------------------------------------------
 * Page copy
 * All wording lives here, separate from the layout below, so it can be updated in one place.
 * ----------------------------------------------------------------------------------------------- */

const HERO_SUBHEADING =
  'Insured income for institutional lenders and investors in long income real estate, supported by insurers rated A- or better.';

const PRODUCT_SUMMARY =
  'Portfolio Investment Protection (PIP) is an insurance policy that protects the income a lender or investor expects to receive from a real estate portfolio. It is designed to respond where tenant default, sustained voids or the failure of a counterparty leave income across the portfolio short of the insured amount. Cover runs for the term of the lease or lending arrangement, up to a maximum of 25 years.';

/* Each entry reads as one sentence: the name, then the description. */
const AUDIENCES = [
  { name: 'Lenders', description: 'funding income producing portfolios, including banks, debt funds and institutional lenders.' },
  { name: 'Institutional investors', description: 'holding leased real estate for the long term, including insurers, annuity providers and pension funds, and investors in forward funded and income strip structures.' },
  { name: 'Borrowers', description: 'raising finance against portfolio income.' },
  { name: 'Advisers', description: 'structuring transactions for clients, including debt advisers and solicitors.' }
];

const COVER_POINTS = [
  { title: 'What Is Insured', text: 'The income payable to the insured lender or investor. The policy can indemnify up to 100% of that income for the policy term, above the first loss layer.' },
  { title: 'A Funded First Loss Layer', text: "Before the policy responds, the first loss layer must be used. This is a ring fenced cash reserve funded at the outset. It absorbs short term disruption and keeps the parties' interests aligned." },
  { title: 'Cover Is Tested at Portfolio Level', text: 'Income is measured across the whole portfolio. A vacancy in one unit, or a weak period in one asset, does not give rise to a claim on its own. A claim needs income across the portfolio to fall below the insured level. The policy is designed to respond to structural income failure, such as the failure of a counterparty or a sustained fall in income, and not to routine movements in occupancy.' },
  { title: 'Oversight Through the Term', text: 'The policy is accompanied by an Operating Agreement, which sets out how the portfolio is reported on and monitored and how the cover operates in practice.' }
];

const FUNDING_OPTIONS: { value: FundingStructure; label: string }[] = [
  { value: 'equity', label: 'Equity-Funded' },
  { value: 'debt', label: 'Debt-Funded' }
];

const BENEFIT_GROUPS = [
  {
    audience: 'For borrowers',
    benefits: [
      { icon: TrendingDown, title: 'Lower Cost of Capital', text: 'Where income is insured, lenders may be able to offer keener margins.' },
      { icon: TrendingUp, title: 'Scope for Higher Leverage', text: 'Insurance backing can support the case for increased leverage or a lower equity requirement.' },
      { icon: PoundSterling, title: 'Access to Institutional Capital', text: 'Long dated, insured income may broaden the range of lenders and investors able to fund a portfolio, including annuity and pension capital.' }
    ]
  },
  {
    audience: 'For lenders',
    benefits: [
      { icon: Award, title: 'Insurer Covenant Rated A- or Better', text: 'Insured income is supported by the covenant of insurers rated A- or better, in addition to the underlying tenant or operator.' },
      { icon: Layers, title: 'Layered Protection', text: 'A funded Debt Service Reserve absorbs early disruption, and the policy can respond to covered shortfalls beyond it.' },
      { icon: FileCheck, title: 'Oversight Through the Loan Term', text: 'The Operating Agreement provides structured reporting on the portfolio and its income.' }
    ]
  },
  {
    audience: 'For institutional investors',
    benefits: [
      { icon: BarChart4, title: 'More Predictable Income', text: 'Protection against covered shortfalls can make long dated income more predictable for liability matching and investment planning.' },
      { icon: ArrowRightLeft, title: 'Support for Valuation and Exit', text: 'Insured income may support keener yields and stronger pricing on sale, including for forward funded and income strip structures.' },
        { icon: PoundSterling, title: 'Capital Efficiency', text: 'Insured income may support more efficient capital allocation, subject to each investor’s own risk assessment and applicable requirements.' }
    ]
  }
];

const POLICY_FEATURES = [
  { label: 'Insurer Security', text: 'Underwritten by insurers rated A- or better.' },
  { label: 'Cover', text: 'Up to 100% of income payable to the lender or investor, above the first loss layer.' },
  { label: 'First Loss Layer', text: 'A funded reserve, sized for each transaction: a Debt Service Reserve in debt funded structures and a First Loss Reserve in equity funded structures.' },
  { label: 'Policy Term', text: 'Aligned with the term of the lease or lending agreement, up to a maximum of 25 years, subject to insurer approval.' },
  { label: 'Limit of Indemnity', text: 'Set by reference to the total insured income over the policy term.' },
  { label: 'Indexation', text: 'The limit of indemnity can be index linked, so that cover keeps pace with indexed rent, subject to an agreed cap.' },
  { label: 'Operating Agreement', text: 'Sets out reporting, monitoring and how the cover operates in practice.' },
  { label: 'Premium', text: 'A single premium paid at inception, with an annual management fee thereafter.' }
];

const CONTACT_INTRO = 'To discuss a transaction or request indicative terms:';

const IMPORTANT_INFORMATION = [
  'This page gives general information about Portfolio Investment Protection for professional and institutional audiences. It is not an offer of insurance, and it is not advice or a personal recommendation. Cover is subject to underwriting and insurer approval, and to the terms, conditions, exclusions and limits of the policy issued for each transaction.',
  "References to funding, valuation or pricing describe how insured income may be viewed by lenders, valuers and investors. They are not forecasts or guarantees, and outcomes depend on each party's own assessment. Nothing on this page is a statement about regulatory eligibility or capital treatment."
];

/* -------------------------------------------------------------------------------------------------
 * Structured data
 * ----------------------------------------------------------------------------------------------- */

const financialProductSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialProduct',
  name: 'Portfolio Investment Protection',
  alternateName: ['PIP Insurance'],
  description: 'Portfolio Investment Protection (PIP) is an insurance policy that protects the income a lender or investor expects to receive from a real estate portfolio.',
  provider: {
    '@type': 'Organization',
    name: 'Parx Group',
    url: 'https://parxgroup.co.uk',
    telephone: '+44-20-3370-7909',
    email: 'connect@parxgroup.co.uk'
  },
  category: 'Insurance',
  feesAndCommissionsSpecification: 'A single premium paid at inception, with an annual management fee thereafter.',
  termsOfService: 'Aligned with the term of the lease or lending agreement, up to a maximum of 25 years, subject to insurer approval.',
  audience: {
    '@type': 'Audience',
    audienceType: 'professional and institutional audiences'
  },
  /* Carried over from the current page. Still to be decided: whether "InStock" suits a bespoke product. */
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    eligibleRegion: { '@type': 'Country', name: 'United Kingdom' }
  }
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Portfolio Investment Protection',
  name: 'Portfolio Investment Protection',
  alternateName: 'PIP Insurance',
  description: 'Portfolio Investment Protection (PIP) is an insurance policy that protects the income lenders and institutional investors rely on, subject to underwriting and policy terms.',
  provider: { '@type': 'Organization', name: 'Parx Group', url: 'https://parxgroup.co.uk' },
  areaServed: { '@type': 'Country', name: 'United Kingdom' }
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://parxgroup.co.uk' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://parxgroup.co.uk/services' },
    { '@type': 'ListItem', position: 3, name: 'Portfolio Investment Protection', item: 'https://parxgroup.co.uk/portfolio-investment-protection' }
  ]
};

/* -------------------------------------------------------------------------------------------------
 * Layout building blocks
 * ----------------------------------------------------------------------------------------------- */

const CONTAINER = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

/* Twelve column grid shared by every section, so headings and text line up down the page. */
const SECTION_GRID = 'lg:grid lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12';

const BODY_TEXT = 'text-base leading-relaxed text-neutral-700 sm:text-lg sm:leading-relaxed';
const LEAD_TEXT = 'text-xl leading-relaxed text-neutral-900 sm:text-2xl sm:leading-relaxed';

/* A row with its label on the left and its text on the right. Stacks on small screens. */
const LABELLED_ROW = 'sm:grid sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-x-6';

const TOGGLE_BUTTON =
  'rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600';

/* The site's section heading: title with a short green bar beneath it. White text on the dark green band. */
function SectionHeading({ id, onDark = false, children }: { id?: string; onDark?: boolean; children: React.ReactNode }) {
  return (
    <>
      <h2 id={id} className={'scroll-mt-24 text-3xl font-bold mb-2 ' + (onDark ? 'text-white' : 'text-neutral-900')}>
        {children}
      </h2>
      <div aria-hidden="true" className="w-20 h-1 bg-primary-500"></div>
    </>
  );
}

/* A section with its heading in a left hand column and its content to the right on large screens. */
function SplitSection({ title, titleId, className, children }: { title: string; titleId?: string; className: string; children: React.ReactNode }) {
  return (
    <section className={'section ' + className}>
      <div className={CONTAINER}>
        <AnimatedSection delay={0.1} distance={24} duration={0.5} direction="up">
          <div className={SECTION_GRID}>
            <div className="mb-8 sm:mb-10 lg:col-span-4 lg:mb-0">
              <div className="lg:sticky lg:top-28">
                <SectionHeading id={titleId}>{title}</SectionHeading>
              </div>
            </div>
            <div className="lg:col-span-8">{children}</div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Page
 * ----------------------------------------------------------------------------------------------- */

function PortfolioInvestorProtection() {
  const [fundingStructure, setFundingStructure] = useState<FundingStructure>('equity');
  const heroVideo = useRef<HTMLVideoElement>(null);

  /* Visitors who have asked their device to reduce motion see a still frame instead of the looping video. */
  useEffect(() => {
    const video = heroVideo.current;
    if (!video || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const holdOnFirstFrame = () => video.pause();
    if (video.paused) {
      video.addEventListener('playing', holdOnFirstFrame, { once: true });
    } else {
      holdOnFirstFrame();
    }
    return () => video.removeEventListener('playing', holdOnFirstFrame);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Portfolio Investment Protection | Rental Income Protection for Lenders and Investors | Parx Group"
        description="Portfolio Investment Protection (PIP) is an insurance policy that protects the income lenders and institutional investors rely on, subject to underwriting and policy terms."
        keywords="portfolio investment protection, PIP insurance, income, institutional lenders and investors, first loss reserve, debt service reserve, operating agreement"
        canonical="https://parxgroup.co.uk/portfolio-investment-protection"
      />
      <StructuredData data={financialProductSchema} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />

      {/* Hero. The dark green background and poster keep the menu readable while the video loads. */}
      <header className="relative bg-primary-900 -mt-20">
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={heroVideo}
            className="w-full h-full object-cover"
            src="/pip_hero_4_-_trim.webm"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%2307302c'/%3E%3C/svg%3E"
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
            <p className="mt-6 text-xl text-white max-w-3xl">{HERO_SUBHEADING}</p>
            {/* Optional: a shortcut to the contact details at the foot of the page. Delete this link to remove it. */}
            <a
              href="#get-in-touch"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 font-medium text-primary-600 transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get In Touch
              <ChevronDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Product Summary */}
      <SplitSection title="Product Summary" className="bg-white">
        <p className={LEAD_TEXT}>{PRODUCT_SUMMARY}</p>
      </SplitSection>

      {/* Who It Is For */}
      <SplitSection title="Who It Is For" className="bg-neutral-50">
        <ul role="list" className="divide-y divide-neutral-300">
          {AUDIENCES.map(({ name, description }) => (
            <li key={name} className={'py-5 first:pt-0 last:pb-0 ' + BODY_TEXT + ' ' + LABELLED_ROW}>
              <strong className="font-semibold text-neutral-900">{name}</strong>{' '}
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </SplitSection>

      {/* How the Cover Works */}
      <SplitSection title="How the Cover Works" className="bg-white">
        <div className="divide-y divide-neutral-200">
          {COVER_POINTS.map(({ title, text }) => (
            <div key={title} className={'py-6 first:pt-0 last:pb-0 ' + LABELLED_ROW}>
              <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-neutral-700 sm:mt-0">{text}</p>
            </div>
          ))}
        </div>
      </SplitSection>

      {/* Cashflow & Risk Transfer Structure */}
      <section className="section bg-neutral-50">
        <div className={CONTAINER}>
          <AnimatedSection delay={0.1} distance={24} duration={0.5} direction="up">
            <div className="mb-8 sm:flex sm:items-end sm:justify-between sm:gap-x-8">
              <div>
                <SectionHeading id="deal-structure">Cashflow &amp; Risk Transfer Structure</SectionHeading>
              </div>
              <div
                role="group"
                aria-label="Choose a portfolio funding structure"
                className="mt-6 inline-flex rounded-xl border border-neutral-300 bg-white p-1 sm:mt-0 sm:shrink-0"
              >
                {FUNDING_OPTIONS.map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    aria-pressed={fundingStructure === value}
                    onClick={() => setFundingStructure(value)}
                    className={
                      TOGGLE_BUTTON +
                      (fundingStructure === value
                        ? ' bg-primary-700 text-white shadow-sm'
                        : ' text-neutral-700 hover:bg-neutral-100 hover:text-primary-700')
                    }
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <PIPStructureDiagram fundingStructure={fundingStructure} />
          </AnimatedSection>
        </div>
      </section>

      {/*
        Key Benefits: one card for each audience, on the dark green band.
        Widest screens: three cards side by side. Smaller desktops: the cards stack and each one sets its
        benefits out in a row. Tablets and phones: the cards stack and the benefits run down the card.
      */}
      <section className="section bg-primary-900">
        <div className={CONTAINER}>
          <AnimatedSection delay={0.1} distance={24} duration={0.5} direction="up">
            <div className="mb-8 sm:mb-10">
              <SectionHeading id="key-benefits" onDark>
                Key Benefits
              </SectionHeading>
            </div>
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-3 xl:gap-6">
              {BENEFIT_GROUPS.map(({ audience, benefits }) => (
                <div key={audience} className="rounded-2xl bg-white p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-neutral-900">{audience}</h3>
                  <div aria-hidden="true" className="mt-3 h-1 w-10 bg-primary-500"></div>
                  <ul role="list" className="mt-7 grid gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-1 xl:gap-6">
                    {benefits.map(({ icon: Icon, title, text }) => (
                      <li key={title} className="flex gap-4 lg:flex-col lg:gap-3 xl:flex-row xl:gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                          <Icon aria-hidden="true" className="h-5 w-5 text-primary-600" />
                        </span>
                        <div className="min-w-0">
                          <h4 className="text-base font-semibold text-neutral-900">{title}</h4>
                          <p className="mt-1 text-base leading-relaxed text-neutral-700">{text}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Policy Features. The heading keeps its original id, policy-coverage, so existing links to it still work. */}
      <SplitSection title="Policy Features" titleId="policy-coverage" className="bg-white">
        <dl className="divide-y divide-neutral-200 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
          {POLICY_FEATURES.map(({ label, text }) => (
            <div key={label} className="px-5 py-4 sm:grid sm:grid-cols-[11.5rem_minmax(0,1fr)] sm:gap-x-6 sm:px-6 sm:py-5">
              <dt className="text-base font-semibold text-neutral-900">{label}</dt>
              <dd className="mt-1 text-base leading-relaxed text-neutral-700 sm:mt-0">{text}</dd>
            </div>
          ))}
        </dl>
      </SplitSection>

      {/*
        Contact. The site's existing block with the agreed wording. Changes from the live version, so the
        card is no longer cut off at its right hand edge on tablets: the text column can shrink (min-w-0),
        the email address wraps (break-words) and the name is one size smaller between 640px and 768px.
      */}
      <section id="get-in-touch" className="section bg-neutral-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative Divider */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-center">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
              <div className="px-6 sm:px-8">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary-500"></div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-700 tracking-wide">Get In Touch</h2>
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
                <div className="flex-shrink-0 w-full sm:w-72 md:w-80 p-4 sm:p-0 flex justify-center sm:block sm:self-stretch">
                  <div className="relative w-40 sm:w-full sm:h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-primary-800/20 rounded-xl sm:rounded-br-3xl sm:rounded-br-none sm:rounded-r-none sm:rounded-l-none sm:rounded-tl-none"></div>
                    <img
                      src="/harvey_patey-ford_800x940_webp.webp"
                      alt="Harvey Patey-Ford"
                      className="w-full h-auto relative z-10 rounded-xl sm:absolute sm:inset-0 sm:h-full sm:object-cover sm:object-top sm:rounded-none shadow-lg sm:shadow-none"
                      loading="eager"
                      decoding="sync"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-gray-900/60 to-transparent z-20 rounded-b-xl sm:rounded-none"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 min-w-0 px-4 pt-2 pb-4 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center min-h-full w-full">
                  <div className="mb-4 sm:mb-6 md:mb-8 text-center sm:text-left">
                    <p className="text-sm sm:text-base text-gray-700 mb-3">{CONTACT_INTRO}</p>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2 tracking-tight">
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
                        <div className="text-sm sm:text-base font-semibold text-gray-900 break-words">harvey.patey-ford@parxgroup.co.uk</div>
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
      <section className="border-t border-neutral-200 bg-neutral-50 py-10 sm:py-12">
        <div className={CONTAINER}>
          <div className={SECTION_GRID}>
            <h2 className="mb-3 text-base font-semibold text-neutral-900 lg:col-span-4 lg:mb-0">Important Information</h2>
            <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-neutral-700 lg:col-span-8">
              {IMPORTANT_INFORMATION.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioInvestorProtection;
