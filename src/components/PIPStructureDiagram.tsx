import React from 'react';
import { ArrowRightLeft, Building, FileCheck, Landmark, PoundSterling, Shield, Wallet } from 'lucide-react';

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
  const shortfall = shortfallSteps[fundingStructure];

  return (
    <div>
      {/* Preserve the existing cashflow card styling; the reserve and policy branch from the insured party. */}
      <div className="hidden xl:flex items-stretch gap-4">
        {stages.map(({ icon: Icon, title, description }, index) => (
          <React.Fragment key={title}>
            {index > 0 && (
              <div className="flex w-8 shrink-0 items-center" aria-hidden="true">
                <div className="h-px w-full bg-primary-300" />
              </div>
            )}
            <div className="min-w-0 flex-1 rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-5 shadow-md">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 p-2.5 shadow">
                  <Icon className="h-5 w-5 text-primary-700" />
                </div>
                <div className="min-w-0">
                  <h3 className="mb-2 text-base font-semibold text-neutral-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="space-y-4 xl:hidden">
        {stages.map(({ icon: Icon, title, description }, index) => (
          <React.Fragment key={title}>
            {index > 0 && (
              <div className="flex justify-center" aria-hidden="true"><div className="h-6 w-px bg-primary-300" /></div>
            )}
            <div className="rounded-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-5 shadow-md">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 p-2.5 shadow">
                  <Icon className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-neutral-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Both numbered protections connect to the last income card, not to each other. */}
      <div className="relative hidden h-20 xl:block">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <path
            d={`M ${fundingStructure === 'debt' ? 1050 : 1000} 0 V 26 H 300 V 80 M ${fundingStructure === 'debt' ? 1050 : 1000} 26 H 900 V 80`}
            fill="none"
            stroke="#7ecfba"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <span className="absolute bottom-2 left-5 rounded-md bg-white px-3 py-1 text-sm font-semibold text-primary-800">If income falls short</span>
      </div>
      <div className="mt-5 flex flex-col items-center xl:hidden">
        <div className="h-6 w-px bg-primary-300" aria-hidden="true" />
        <div className="mb-4 text-sm font-semibold text-primary-800">If income falls short</div>
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-8">
        {shortfall.map(({ title, description }, index) => {
          const isPolicy = index === 1;
          const Icon = isPolicy ? Shield : Wallet;
          return (
            <div
              key={title}
              className={`rounded-xl border p-5 shadow-lg ${isPolicy ? 'border-primary-300 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-50' : 'border-neutral-200 bg-gradient-to-br from-white to-neutral-50'}`}
            >
              <div className="flex items-start gap-3">
                <div className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg p-2.5 shadow ${isPolicy ? 'bg-gradient-to-br from-primary-600 to-primary-700' : 'bg-gradient-to-br from-primary-100 to-primary-200'}`}>
                  <Icon className={`h-5 w-5 ${isPolicy ? 'text-white' : 'text-primary-700'}`} />
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary-700 text-xs font-bold text-white">{index + 1}</span>
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-neutral-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-700">{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-primary-200 bg-gradient-to-r from-primary-50 to-white p-5 shadow-md">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 p-2.5 shadow">
          <FileCheck className="h-5 w-5 text-primary-700" />
        </div>
        <div>
          <h3 className="mb-2 text-base font-semibold text-neutral-900">Operating Agreement</h3>
          <p className="text-sm leading-relaxed text-neutral-600">{operatingAgreementText}</p>
        </div>
      </div>
    </div>
  );
}
