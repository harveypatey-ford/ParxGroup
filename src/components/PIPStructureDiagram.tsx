import React from 'react';
import { ArrowDown, ArrowRight, ArrowRightLeft, Building, FileCheck, Landmark, PoundSterling, Shield, Wallet } from 'lucide-react';

type FundingStructure = 'equity' | 'debt';

interface PIPStructureDiagramProps {
  fundingStructure: FundingStructure;
}

const incomeStages = {
  equity: [
    { icon: ArrowRightLeft, title: 'Gross Income', description: 'Rental income is paid to the portfolio operator.' },
    { icon: Building, title: 'Portfolio Management', description: 'The operator manages the portfolio and retains an agreed portion of the income.' },
    { icon: PoundSterling, title: 'Investor', description: 'The remaining net income is payable to the investor. The investor is the insured.' }
  ],
  debt: [
    { icon: ArrowRightLeft, title: 'Gross Income', description: 'Rental income is paid to the portfolio operator.' },
    { icon: Building, title: 'Portfolio Management', description: 'The operator manages the portfolio and retains an agreed portion of the income.' },
    { icon: Building, title: 'Borrower or Sponsor', description: 'Net rental income is paid to the borrower that owns the properties.' },
    { icon: Landmark, title: 'Lender', description: 'The borrower makes scheduled debt service payments to the lender. The lender is the named insured.' }
  ]
};

const shortfallSteps = {
  equity: [
    { title: 'First Loss Reserve', description: 'The first loss layer. A ring fenced cash reserve absorbs the first part of any shortfall, before the policy responds.' },
    { title: 'Portfolio Investment Protection', description: 'Once the reserve has been used, the policy can indemnify covered shortfalls, up to 100% of the net rent payable to the investor, for the policy term. The indemnity is provided by insurers rated A- or better.' }
  ],
  debt: [
    { title: 'Debt Service Reserve', description: 'The first loss layer. A ring fenced cash reserve absorbs the first part of any shortfall, before the policy responds.' },
    { title: 'Portfolio Investment Protection', description: "Once the reserve has been used, the policy can indemnify covered shortfalls in the borrower's scheduled debt service payments, for the policy term. The indemnity is provided by insurers rated A- or better." }
  ]
};

const operatingAgreementText = 'Sets out reporting, monitoring and how the cover operates in practice, through the policy term.';

export default function PIPStructureDiagram({ fundingStructure }: PIPStructureDiagramProps) {
  const stages = incomeStages[fundingStructure];
  const protections = shortfallSteps[fundingStructure];

  return (
    <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-5 sm:p-7 lg:p-9 shadow-sm">
      {/* The income path is read first, left to right on desktop and top to bottom on smaller screens. */}
      <div className="hidden lg:flex items-stretch gap-2 xl:gap-3">
        {stages.map(({ icon: Icon, title, description }, index) => {
          const isInsured = index === stages.length - 1;
          return (
            <React.Fragment key={title}>
              {index > 0 && (
                <div className="flex w-6 xl:w-8 shrink-0 items-center justify-center" aria-hidden="true">
                  <ArrowRight className="h-5 w-5 text-primary-500" strokeWidth={1.5} />
                </div>
              )}
              <div className={'flex min-w-0 flex-1 flex-col rounded-2xl border p-5 xl:p-6 shadow-sm ' + (isInsured ? 'border-primary-300 bg-primary-50' : 'border-neutral-200 bg-white')}>
                <div className={'mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ' + (isInsured ? 'bg-primary-700' : 'bg-primary-100')}>
                  <Icon className={'h-5 w-5 ' + (isInsured ? 'text-white' : 'text-primary-700')} />
                </div>
                <h3 className="mb-3 text-base font-semibold text-neutral-900">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="lg:hidden">
        {stages.map(({ icon: Icon, title, description }, index) => {
          const isInsured = index === stages.length - 1;
          return (
            <React.Fragment key={title}>
              {index > 0 && (
                <div className="flex justify-center py-2" aria-hidden="true">
                  <ArrowDown className="h-5 w-5 text-primary-500" strokeWidth={1.5} />
                </div>
              )}
              <div className={'flex items-start gap-4 rounded-2xl border p-5 shadow-sm ' + (isInsured ? 'border-primary-300 bg-primary-50' : 'border-neutral-200 bg-white')}>
                <div className={'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ' + (isInsured ? 'bg-primary-700' : 'bg-primary-100')}>
                  <Icon className={'h-5 w-5 ' + (isInsured ? 'text-white' : 'text-primary-700')} />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-neutral-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Each protection is connected back to the last income card. There is no link between protections. */}
      <div className="relative hidden h-24 lg:block" aria-hidden="true">
        <svg viewBox="0 0 1200 96" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          <path
            d={fundingStructure === 'debt' ? 'M 1060 0 V 28 H 300 V 96 M 1060 28 H 900 V 96' : 'M 1010 0 V 28 H 300 V 96 M 1010 28 H 900 V 96'}
            fill="none"
            stroke="#75bfa9"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx={fundingStructure === 'debt' ? 1060 : 1010} cy="28" r="4" fill="#1e7d69" />
          <circle cx="300" cy="92" r="3" fill="#1e7d69" />
          <circle cx="900" cy="92" r="3" fill="#1e7d69" />
        </svg>
        <span className="absolute bottom-3 left-0 rounded-lg bg-neutral-50 pr-3 text-sm font-semibold text-primary-800">If income falls short</span>
      </div>
      <div className="flex flex-col items-center gap-2 py-5 lg:hidden">
        <div className="h-5 w-px bg-primary-400" aria-hidden="true"></div>
        <div className="h-2 w-2 rounded-full bg-primary-600" aria-hidden="true"></div>
        <span className="mt-1 text-sm font-semibold text-primary-800">If income falls short</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7">
        {protections.map(({ title, description }, index) => {
          const isPolicy = index === 1;
          const Icon = isPolicy ? Shield : Wallet;
          return (
            <div
              key={title}
              className={'flex h-full flex-col rounded-2xl border p-6 sm:p-7 ' + (isPolicy ? 'border-primary-300 bg-gradient-to-br from-primary-50 to-white shadow-[0_12px_30px_rgba(30,125,105,0.10)]' : 'border-neutral-200 bg-white shadow-sm')}
            >
              <div className="mb-5 flex items-center justify-between">
                <span className={'flex h-11 w-11 items-center justify-center rounded-xl text-base font-bold ' + (isPolicy ? 'bg-primary-700 text-white' : 'bg-primary-100 text-primary-800')}>{index + 1}</span>
                <Icon className={'h-6 w-6 ' + (isPolicy ? 'text-primary-700' : 'text-primary-500')} strokeWidth={1.8} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="text-sm sm:text-base leading-relaxed text-neutral-600">{description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl bg-primary-900 p-6 sm:p-7 text-white">
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
            <FileCheck className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-white">Operating Agreement</h3>
            <p className="text-sm sm:text-base leading-relaxed text-primary-100">{operatingAgreementText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
