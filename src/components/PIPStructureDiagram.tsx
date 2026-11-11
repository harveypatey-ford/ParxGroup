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
  /** Large screens: where each part of the shortfall path sits on that grid. */
  placement: {
    label: string;
    lineToInsured: string;
    reserve: string;
    link: string;
    policy: string;
  };
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
    gridColumns: 'lg:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)_3rem_minmax(0,1fr)]',
    /* Five columns. The investor is in column 5, so the reserve sits beneath it and the policy to its left. */
    placement: {
      label: 'lg:col-start-1 lg:col-span-3 lg:row-start-2',
      lineToInsured: 'lg:col-start-5 lg:row-start-2',
      reserve: 'lg:col-start-5 lg:row-start-3',
      link: 'lg:col-start-4 lg:row-start-3',
      policy: 'lg:col-start-1 lg:col-span-3 lg:row-start-3'
    }
  },
  debt: {
    summary: 'Debt funded: a shortfall is met by the reserve first, then by the policy.',
    incomeFlow: [
      GROSS_INCOME,
      PORTFOLIO_MANAGEMENT,
      {
        title: 'Borrower or Sponsor',
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
      'lg:grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)_2.5rem_minmax(0,1fr)_2.5rem_minmax(0,1fr)]',
    /* Seven columns. The lender is in column 7, so the reserve ends beneath it and the policy sits to its left. */
    placement: {
      label: 'lg:col-start-1 lg:col-span-5 lg:row-start-2',
      lineToInsured: 'lg:col-start-7 lg:row-start-2',
      reserve: 'lg:col-start-5 lg:col-span-3 lg:row-start-3',
      link: 'lg:col-start-4 lg:row-start-3',
      policy: 'lg:col-start-1 lg:col-span-3 lg:row-start-3'
    }
  }
};

const DASHED_LINE = 'border-dashed border-primary-600';

type CardTone = 'plain' | 'insured' | 'reserve' | 'policy';

/* The reserve and the policy are solid green so they stand out: the reserve mid green, the policy the darkest. */
const CARD_TONES: Record<CardTone, { card: string; title: string; text: string }> = {
  plain: { card: 'border-neutral-200 bg-neutral-50', title: 'text-neutral-900', text: 'text-neutral-700' },
  insured: { card: 'border-primary-300 bg-primary-50', title: 'text-primary-900', text: 'text-neutral-800' },
  reserve: { card: 'border-primary-600 bg-primary-600', title: 'text-white', text: 'text-white' },
  policy: { card: 'border-primary-900 bg-primary-900', title: 'text-white', text: 'text-primary-100' }
};

function Card({ party, tone = 'plain', className = '' }: { party: Party; tone?: CardTone; className?: string }) {
  const colours = CARD_TONES[tone];
  return (
    <div className={'rounded-xl border p-5 ' + colours.card + ' ' + className}>
      <h3 className={'text-base font-semibold ' + colours.title}>{party.title}</h3>
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
  const { summary, incomeFlow, insured, reserve, policy, gridColumns, placement } = STRUCTURES[fundingStructure];

  return (
    <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <figcaption className="sr-only">{summary}</figcaption>

      <div className="p-5 sm:p-8">
        <LaneLabel>When income is received</LaneLabel>

        {/*
          One grid holds the whole diagram, so every box and line stays in step at any screen size.
          Small screens: a single column, read from top to bottom.
          Large screens: income runs left to right along the first row and ends at the insured party. The
          reserve sits directly beneath the insured party, with the policy behind it, so the reserve is
          between the policy and the insured party: it is used first, and the policy can respond after it.
          The only arrowhead on the dashed path points into the insured party.
        */}
        <div className={'mt-4 grid grid-cols-1 gap-y-3 lg:gap-y-0 ' + gridColumns}>
          {incomeFlow.map((party) => (
            <React.Fragment key={party.title}>
              <Card party={party} />
              <Arrow />
            </React.Fragment>
          ))}
          <Card party={insured} tone="insured" />

          {/* From the reserve up to the insured party */}
          <div aria-hidden="true" className={'flex flex-col items-center lg:h-16 ' + placement.lineToInsured}>
            <span className="mt-1 h-2 w-2 shrink-0 rotate-45 border-l-2 border-t-2 border-primary-600"></span>
            <span className={'-mt-2 h-6 w-0 border-l-2 lg:h-auto lg:flex-1 ' + DASHED_LINE}></span>
          </div>

          <LaneLabel dashed className={'lg:self-end lg:pb-3 ' + placement.label}>
            If income falls short
          </LaneLabel>

          <Card party={reserve} tone="reserve" className={placement.reserve} />

          {/* The policy stands behind the reserve. A plain link, with no arrowhead, because nothing is paid into the reserve. */}
          <div aria-hidden="true" className={'flex flex-col items-center lg:flex-row ' + placement.link}>
            <span className={'h-5 w-0 border-l-2 lg:h-0 lg:w-auto lg:flex-1 lg:border-l-0 lg:border-t-2 ' + DASHED_LINE}></span>
          </div>

          <Card party={policy} tone="policy" className={placement.policy} />
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
