import React from 'react';

type FundingStructure = 'equity' | 'debt';

interface PIPStructureDiagramProps {
  fundingStructure: FundingStructure;
}

interface Party {
  title: string;
  description: string;
}

interface Structure {
  /** One sentence summary of the diagram, read out by screen readers. */
  summary: string;
  /** The parties rental income passes through, in order, before it reaches the insured. */
  incomeFlow: Party[];
  /** The lender or investor: the last card in the income row. */
  insured: Party;
  reserve: Party;
  policy: Party;
  /** Large screens: one column for each party in the income row, with a narrow column for each arrow between them. */
  gridColumns: string;
}

const GROSS_INCOME: Party = {
  title: 'Gross Income',
  description: 'Rental income is paid to the portfolio operator.'
};

const PORTFOLIO_MANAGEMENT: Party = {
  title: 'Portfolio Management',
  description: 'The operator manages the portfolio and retains an agreed portion of the income.'
};

const RESERVE_DESCRIPTION =
  'The first loss layer. A ring fenced cash reserve absorbs the first part of any shortfall, before the policy responds.';

const OPERATING_AGREEMENT_DESCRIPTION =
  'Sets out reporting, monitoring and how the cover operates in practice, through the policy term.';

const STRUCTURES: Record<FundingStructure, Structure> = {
  equity: {
    summary: 'Equity funded: a shortfall is met by the reserve first, then by the policy.',
    incomeFlow: [GROSS_INCOME, PORTFOLIO_MANAGEMENT],
    insured: {
      title: 'Investor',
      description: 'The remaining income is payable to the investor. The investor is the insured.'
    },
    reserve: { title: 'First Loss Reserve', description: RESERVE_DESCRIPTION },
    policy: {
      title: 'Portfolio Investment Protection',
      description:
        'Once the reserve has been used, the policy can indemnify covered shortfalls, up to 100% of the income payable to the investor, for the policy term. The indemnity is provided by insurers rated A- or better.'
    },
    gridColumns: 'lg:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)_3rem_minmax(0,1fr)]'
  },
  debt: {
    summary: 'Debt funded: a shortfall is met by the reserve first, then by the policy.',
    incomeFlow: [
      GROSS_INCOME,
      PORTFOLIO_MANAGEMENT,
      {
        title: 'Borrower',
        description: 'Income is paid to the borrower that owns the properties.'
      }
    ],
    insured: {
      title: 'Lender',
      description:
        'The borrower makes scheduled debt service payments to the lender. The lender is the named insured.'
    },
    reserve: { title: 'Debt Service Reserve', description: RESERVE_DESCRIPTION },
    policy: {
      title: 'Portfolio Investment Protection',
      description:
        "Once the reserve has been used, the policy can indemnify covered shortfalls in the borrower's scheduled debt service payments, for the policy term. The indemnity is provided by insurers rated A- or better."
    },
    gridColumns:
      'lg:grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)_2.5rem_minmax(0,1fr)_2.5rem_minmax(0,1fr)]'
  }
};

/*
  Large screens: the reserve and the policy sit in the same places for both structures, on the equity
  grid: the reserve across the first three columns and the policy in the last column, under the insured
  party. Switching structure changes only the income row above them.
*/
const SHORTFALL_GRID = 'lg:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)_3rem_minmax(0,1fr)]';

const DASHED_LINE = 'border-dashed border-primary-600';

type CardTone = 'plain' | 'insured' | 'reserve' | 'policy';

/* The reserve and the policy are solid green so they stand out: the reserve mid green, the policy the darkest. */
const CARD_TONES: Record<CardTone, { card: string; title: string; text: string; step: string }> = {
  plain: { card: 'border-neutral-200 bg-neutral-50', title: 'text-neutral-900', text: 'text-neutral-700', step: '' },
  insured: { card: 'border-primary-300 bg-primary-50', title: 'text-primary-900', text: 'text-neutral-800', step: '' },
  reserve: { card: 'border-primary-600 bg-primary-600', title: 'text-white', text: 'text-white', step: 'bg-white text-primary-700' },
  policy: { card: 'border-primary-900 bg-primary-900', title: 'text-white', text: 'text-primary-100', step: 'bg-white text-primary-900' }
};

/** A card. `step` numbers the reserve and the policy in the order they respond to a shortfall. */
function Card({ party, tone = 'plain', step, className = '' }: { party: Party; tone?: CardTone; step?: number; className?: string }) {
  const colours = CARD_TONES[tone];
  return (
    <div className={'rounded-xl border p-5 ' + colours.card + ' ' + className}>
      <h3 className={'text-base font-semibold ' + colours.title + (step ? ' flex items-start gap-2.5' : '')}>
        {step ? (
          <span className={'flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ' + colours.step}>
            {step}
          </span>
        ) : null}
        <span>{party.title}</span>
      </h3>
      <p className={'mt-2 text-sm leading-relaxed ' + colours.text}>{party.description}</p>
    </div>
  );
}

/**
 * A solid arrow between two cards in the income row, drawn with borders so it needs no coordinates.
 * It points down between stacked cards and right between cards in a row.
 */
function Arrow() {
  return (
    <div aria-hidden="true" className="flex flex-col items-center lg:flex-row">
      <span className="h-5 w-0 border-l-2 border-solid border-primary-600 lg:h-0 lg:w-auto lg:flex-1 lg:border-l-0 lg:border-t-2"></span>
      <span className="-mt-2 mb-1 h-2 w-2 rotate-45 border-b-2 border-r-2 border-primary-600 lg:-ml-2 lg:mb-0 lg:mr-1 lg:mt-0 lg:border-b-0 lg:border-t-2"></span>
    </div>
  );
}

/** Large screens: the arrowhead at the top of a dashed connector, pointing up into the insured party. */
function UpArrowhead({ className }: { className: string }) {
  return (
    <span className={'absolute top-1 h-2 w-2 -translate-x-[3px] rotate-45 border-l-2 border-t-2 border-primary-600 ' + className}></span>
  );
}

/** Names a group of cards and doubles as the key to the solid and dashed lines. */
function LaneLabel({ dashed = false, className = '', children }: { dashed?: boolean; className?: string; children: React.ReactNode }) {
  return (
    <p className={'flex items-center gap-3 text-sm font-semibold text-neutral-900 ' + className}>
      <span
        aria-hidden="true"
        className={'w-8 border-t-2 border-primary-600 ' + (dashed ? 'border-dashed' : 'border-solid')}
      ></span>
      {children}
    </p>
  );
}

export default function PIPStructureDiagram({ fundingStructure }: PIPStructureDiagramProps) {
  const { summary, incomeFlow, insured, reserve, policy, gridColumns } = STRUCTURES[fundingStructure];

  return (
    <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <figcaption className="sr-only">{summary}</figcaption>

      <div className="p-5 sm:p-8">
        <LaneLabel>When income is received</LaneLabel>

        {/*
          The income row. Small screens: a single column, read from top to bottom. Large screens: income
          runs left to right and ends at the insured party.
        */}
        <div className={'mt-4 grid grid-cols-1 gap-y-3 lg:gap-y-0 ' + gridColumns}>
          {incomeFlow.map((party) => (
            <React.Fragment key={party.title}>
              <Card party={party} />
              <Arrow />
            </React.Fragment>
          ))}
          <Card party={insured} tone="insured" />
        </div>

        {/*
          Between the income row and the shortfall row. Large screens: the reserve and the policy each have
          their own dashed connector, with its own arrowhead, into the insured party, and nothing links them
          to each other. The connectors arrive at fixed points, so they stay put when the structure changes.
          The lender's card (debt funded) is the narrower insured card: the last quarter of the row once the
          three 2.5rem arrow gaps are taken out, (100% - 7.5rem) / 4. The reserve's connector enters 30% of
          the way across that card, at 82.5% + 1.3125rem, and the policy's 70% of the way across, at
          92.5% + 0.5625rem. The investor's card (equity funded) is wider and contains both points.
        */}
        <div className="relative mt-3 lg:mt-0 lg:h-16">
          {/* Small screens: a dashed connector from the shortfall group up to the insured party. */}
          <div aria-hidden="true" className="flex flex-col items-center lg:hidden">
            <span className="mt-1 h-2 w-2 shrink-0 rotate-45 border-l-2 border-t-2 border-primary-600"></span>
            <span className={'-mt-2 h-6 w-0 border-l-2 ' + DASHED_LINE}></span>
          </div>

          <div aria-hidden="true" className="absolute inset-0 hidden lg:block">
            {/* The reserve's connector: up from the reserve card, across, then up into the insured party. */}
            <span className={'absolute bottom-0 left-1/2 top-1/2 border-l-2 ' + DASHED_LINE}></span>
            <span className={'absolute left-1/2 right-[calc(17.5%_-_1.3125rem_-_2px)] top-1/2 border-t-2 ' + DASHED_LINE}></span>
            <span className={'absolute bottom-1/2 left-[calc(82.5%_+_1.3125rem)] top-1 border-l-2 ' + DASHED_LINE}></span>
            <UpArrowhead className="left-[calc(82.5%_+_1.3125rem)]" />
            {/* The policy's connector: straight up from the policy card into the insured party. */}
            <span className={'absolute bottom-0 left-[calc(92.5%_+_0.5625rem)] top-1 border-l-2 ' + DASHED_LINE}></span>
            <UpArrowhead className="left-[calc(92.5%_+_0.5625rem)]" />
          </div>

          <LaneLabel dashed className="mt-3 lg:absolute lg:bottom-3 lg:left-0 lg:mt-0">
            If income falls short
          </LaneLabel>
        </div>

        {/* The shortfall row: the reserve first, then the policy, numbered in the order they respond. */}
        <div className={'mt-3 grid grid-cols-1 gap-y-3 lg:mt-0 lg:gap-y-0 ' + SHORTFALL_GRID}>
          <Card party={reserve} tone="reserve" step={1} className="lg:col-span-3" />
          <Card party={policy} tone="policy" step={2} className="lg:col-start-5" />
        </div>
      </div>

      {/* The Operating Agreement applies to the whole structure, so it runs along the foot of the diagram. */}
      <div className="border-t border-neutral-200 bg-neutral-50 px-5 py-4 sm:px-8 sm:py-5 md:grid md:grid-cols-[13rem_minmax(0,1fr)] md:gap-x-6">
        <h3 className="text-base font-semibold text-neutral-900">Operating Agreement</h3>
        <p className="mt-1 text-sm leading-relaxed text-neutral-700 md:mt-0">{OPERATING_AGREEMENT_DESCRIPTION}</p>
      </div>
    </figure>
  );
}
