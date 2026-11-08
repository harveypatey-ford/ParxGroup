import React from 'react';
import { Shield } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import StatusDisclosure from '../components/StatusDisclosure';

function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-white -mt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/tech-abstract.jpg"
            alt="Legal background"
          />
          <div className="absolute inset-0 bg-primary-900/80 backdrop-blur-sm"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="text-center">
              <div className="mx-auto p-3 bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Privacy Notice
              </h1>
              <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
                How we collect, use, and protect your personal information
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <AnimatedSection direction="up">
          <div className="space-y-8">
            <div className="bg-neutral-50 p-4 sm:p-8 rounded-lg">
              <p className="text-neutral-600 text-base sm:text-lg">
                This Privacy Notice is separate from and does not override any contract terms We may have with You, nor Your rights under applicable data protection legislation, including the UK General Data Protection Regulation, the Data Protection Act 2018, and the Data (Use and Access) Act 2025.
              </p>
              <p className="text-neutral-700 text-base sm:text-lg mt-4">
                When We refer to &ldquo;You&rdquo; or &ldquo;Your&rdquo;, We mean any individual whose Personal Data We may collect or process, including:
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-neutral-700 text-base sm:text-lg mt-4 ml-4">
                <li className="mb-2">Anyone seeking a quotation from Us or whose details are provided during a quotation process</li>
                <li className="mb-2">Anyone placing an order for a product with Us or requesting services from Us</li>
                <li className="mb-2">Policyholders and any individual named on or covered by a policy</li>
                <li className="mb-2">Anyone who may benefit from, be involved in, or be affected by a policy or claim, including claimants and witnesses</li>
              </ul>
              <p className="text-neutral-700 text-base sm:text-lg mt-4">
                Where products or services are arranged through a third party such as a solicitor, broker, lender, or other intermediary, that third party may act as an independent data controller and process Your Personal Data for their own purposes. You should refer to their privacy notice for further information.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">Collection of Personal Data</h2>
                <div className="space-y-4">
                  <p className="text-neutral-700 text-base sm:text-lg">
                    Personal Data means any information relating to an identified or identifiable individual. It does not include data that has been anonymised.
                  </p>
                  <p className="text-neutral-700 text-base sm:text-lg">
                    Parx may collect personal and business information directly from You, from intermediaries acting on Your behalf, or from third parties where permitted by law. We ensure that all Personal Data is collected and processed for a valid lawful basis.
                  </p>
                  <p className="text-neutral-700 text-base sm:text-lg">
                    The Personal Data We collect may include:
                  </p>
                  <ul className="list-disc pl-4 sm:pl-6 text-neutral-700 text-base sm:text-lg ml-4 space-y-2">
                    <li>Personal details such as name, address, email address, telephone number, gender and marital status</li>
                    <li>Identification and verification information including identity checks, background information, sanctions screening results, and anti fraud database searches</li>
                    <li>Financial information including credit history, credit score, payment details and banking information</li>
                    <li>Business information including company details, ownership structure, and transactional data</li>
                    <li>Policy, quotation, and claims information</li>
                    <li>Technical and usage data relating to Our website and systems</li>
                    <li>Marketing and communications preferences</li>
                  </ul>
                  <p className="text-neutral-700 text-base sm:text-lg">
                    We may also collect information from sources such as publicly available registers, electoral roll data, insurers, lenders, loss adjusters, professional advisers, fraud prevention agencies, and other parties involved in insurance placement, administration, or claims handling.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">Lawful Basis for Processing</h2>
                <div className="space-y-4">
                  <p className="text-neutral-700 text-base sm:text-lg">
                    Parx only processes Personal Data where permitted by law. The lawful basis for processing depends on the purpose for which the data is used.
                  </p>
                </div>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full text-left border border-neutral-200 rounded-lg overflow-hidden">
                    <thead className="bg-primary-900 text-white">
                      <tr>
                        <th className="px-3 sm:px-4 py-3 text-sm font-semibold align-top">Purpose of Processing</th>
                        <th className="px-3 sm:px-4 py-3 text-sm font-semibold align-top">Types of Personal Data</th>
                        <th className="px-3 sm:px-4 py-3 text-sm font-semibold align-top">Lawful Basis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {[
                        ['Insurance quotations, arranging and administering insurance, claims, renewals and adjustments', 'Name, address, contact details, policy and claim data, business details, order and account data, risk information', 'Performance of a Contract'],
                        ['Legal and regulatory compliance', 'Name, address, identification checks, credit checks, sanctions results, risk information, business details, fraud database results', 'Legal Obligation'],
                        ['Financial crime and fraud prevention', 'Credit history, credit score, fraud check data, sanctions data, identification and financial details', 'Legal Obligation and or Legitimate Interests'],
                        ['Business operations and administration', 'Name, address, contact details, technical logs, business information, order data, complaint and support data', 'Legitimate Interests'],
                        ['Customer relationship management', 'Name, contact details, account and order history, complaints and communications', 'Performance of a Contract or Legitimate Interests'],
                        ['Communication monitoring', 'Call recordings, call metadata including date, time and numbers', 'Legitimate Interests'],
                        ['Marketing of Parx services', 'Name, contact details, marketing preferences, purchase and order history', 'Legitimate Interests and or Consent'],
                        ['Website usage monitoring', 'IP address, browser type, operating system, pages visited, session duration', 'Legitimate Interests'],
                        ['Payment processing and credit facilities', 'Name, address, bank details, card details, credit checks', 'Performance of a Contract and Legitimate Interests'],
                        ['Internal administration', 'Name, contact details, account, policy and claims information', 'Legitimate Interests'],
                        ['Processing data relating to other individuals', 'Names, contact details, relationship to policyholder or claimant', 'Legitimate Interests'],
                      ].map(([purpose, data, basis], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                          <td className="px-3 sm:px-4 py-3 text-sm text-neutral-700 align-top">{purpose}</td>
                          <td className="px-3 sm:px-4 py-3 text-sm text-neutral-700 align-top">{data}</td>
                          <td className="px-3 sm:px-4 py-3 text-sm text-neutral-700 align-top">{basis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">Use of Personal Data</h2>
                <p className="text-neutral-700 text-base sm:text-lg">
                  Parx uses Personal Data to operate its business and deliver insurance and risk transfer services. This includes assessing applications, evaluating risk, verifying identity, administering policies and claims, handling complaints, managing customer relationships, maintaining systems security, conducting analysis, and meeting regulatory obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">Marketing</h2>
                <p className="text-neutral-700 text-base sm:text-lg">
                  We may send marketing communications about Parx products and services where You have requested information, purchased services, or where We have a legitimate interest to do so and You have not opted out. Where consent is required, We will obtain it and You may withdraw consent at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">Data Retention</h2>
                <div className="space-y-4">
                  <p className="text-neutral-700 text-base sm:text-lg">
                    Parx retains Personal Data only for as long as necessary to fulfil the purposes for which it was collected, including legal, regulatory, accounting, and reporting requirements.
                  </p>
                  <p className="text-neutral-700 text-base sm:text-lg">
                    Retention periods are determined by:
                  </p>
                  <ul className="list-disc pl-4 sm:pl-6 text-neutral-700 text-base sm:text-lg ml-4 space-y-2">
                    <li>The nature of the product or service provided</li>
                    <li>Regulatory and statutory retention requirements</li>
                    <li>Limitation periods for legal claims</li>
                    <li>Operational and audit requirements</li>
                  </ul>
                  <p className="text-neutral-700 text-base sm:text-lg">
                    In most cases, insurance related records are retained for a minimum of six years after the end of the business relationship or policy term, or longer where required by law or regulatory guidance. Data is securely deleted or anonymised once it is no longer required.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">Data Subject Rights</h2>
                <div className="space-y-4">
                  <p className="text-neutral-700 text-base sm:text-lg">
                    You have rights in relation to Your Personal Data, including:
                  </p>
                  <ul className="list-disc pl-4 sm:pl-6 text-neutral-700 text-base sm:text-lg ml-4 space-y-2">
                    <li>The right to object to processing</li>
                    <li>The right to request access to Your Personal Data</li>
                    <li>The right to correct inaccurate or incomplete information</li>
                    <li>The right to withdraw consent where processing is based on consent</li>
                    <li>The right to request deletion of data that is no longer required</li>
                    <li>The right to restrict processing in certain circumstances</li>
                    <li>The right to complain about how Your Personal Data is handled</li>
                  </ul>
                  <p className="text-neutral-700 text-base sm:text-lg">
                    Subject Access Requests can be made in any format, including by email, telephone, in writing, in person, or via social media. You do not need to use the term &ldquo;subject access request&rdquo;.
                  </p>
                  <p className="text-neutral-700 text-base sm:text-lg">
                    Parx aims to respond within 30 days. We do not charge for Subject Access Requests, however where requests are manifestly unfounded, excessive, or repetitive, We reserve the right to charge a reasonable administrative fee or refuse the request in line with applicable law.
                  </p>
                  <p className="text-neutral-700 text-base sm:text-lg">
                    If a request cannot be completed within 30 days, We will inform You and explain the reasons and expected timeframe.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">Contact Details</h2>
                <div className="space-y-4">
                  <p className="text-neutral-700 text-base sm:text-lg">
                    To exercise Your rights or raise queries about this Privacy Notice, please contact:
                  </p>
                  <p className="text-neutral-700 text-base sm:text-lg">
                    Email: <a href="mailto:Connect@parxgroup.co.uk" className="text-primary-600 hover:text-primary-700 font-medium">Connect@parxgroup.co.uk</a>
                  </p>
                  <p className="text-neutral-700 text-base sm:text-lg">
                    If You are not satisfied with Our response, You have the right to complain to the Information Commissioner&rsquo;s Office:
                  </p>
                  <div className="mt-2 bg-neutral-50 rounded-lg p-4 sm:p-6">
                    <p className="text-neutral-700 text-base sm:text-lg">
                      <span className="font-medium">Writing:</span> Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF
                    </p>
                    <p className="text-neutral-700 text-base sm:text-lg mt-2">
                      <span className="font-medium">Telephone:</span> 0303 123 1113 or 01625 545 745
                    </p>
                    <p className="text-neutral-700 text-base sm:text-lg mt-2">
                      <span className="font-medium">Website:</span>{' '}
                      <a href="https://ico.org.uk/concerns" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-medium">https://ico.org.uk/concerns</a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <StatusDisclosure />
    </div>
  );
}

export default Privacy;
