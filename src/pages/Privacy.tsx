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
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
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
                This notice describes how Parx Group Limited, as a data controller, collects, uses, shares and retains the Personal Data You provide and informs You about Your choices regarding use, access and correction of Your Personal Data. Parx Group Limited is committed to ensuring that any Personal Data it receives is protected and handled in accordance with applicable data protection laws. In this Privacy Notice, "We", "Us" and "Our" refers to Parx Group Limited. "Parx" means the following companies: Parx Group Limited registered in England and Wales with company number 14768763.
              </p>
            </div>

            <div className="space-y-8">
              <section>
                <p className="text-neutral-700 text-base sm:text-lg">
                  This Privacy Policy is separate from and not intended to override the terms of any contract We may have with You or Your rights under data protection laws.
                </p>

                <p className="text-neutral-700 text-base sm:text-lg mt-4">
                  When We say, "You" and "Your" in this notice, We mean anyone whose Personal Data We may collect, including:
                </p>

                <ul className="list-disc pl-4 sm:pl-6 text-neutral-700 text-base sm:text-lg mt-4 ml-4">
                  <li className="mb-2">Anyone seeking a quote from Us or whose details are provided during the quotation process</li>
                  <li className="mb-2">Anyone placing an order for a product with Us and/or requesting services from Us</li>
                  <li className="mb-2">Policyholders and anyone named on or covered by the policy</li>
                  <li className="mb-2">Anyone who may benefit from or be directly involved in the policy or a claim, including claimants and witnesses</li>
                </ul>

                <p className="text-neutral-700 text-base sm:text-lg mt-4">
                  If You are ordering products from Parx through a third party such as a solicitor, broker or other intermediary, they may have their own reasons for processing Your Personal Data. Please contact them directly should You require further information about their uses of Your Personal Data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">Collection of data</h2>
                <ul className="list-disc pl-4 sm:pl-6 text-neutral-700 text-base sm:text-lg ml-4 space-y-4">
                  <li>Personal Data, means any information from which that person can be identified. It does not include data where the identity has been removed (anonymous data).</li>
                  <li>Parx may collect a range of personal and business information supplied by You or third parties on Your behalf. Wherever We collect or use Personal Data, We will make sure We do this for a valid legal reason. This information may include the following: basic personal details such as Your name, address, telephone number, gender, marital status, financial details, identification checks and background information, credit history, credit score, sanctions check results, information received from various anti-fraud databases, additional information about Your order or account requirements, such as details of Your Business, and marketing and communications data which includes Your preferences in receiving marketing from Us and our third parties and Your communication preferences.</li>
                  <li>Parx may also collect data about You, Your business or the property for which the order is placed from a number of different sources, including but not limited to the electoral roll, third party databases available, other insurance or property search firms, loss adjusters and/or other parties involved in the process of administrating a claim, as well as publicly available sources.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">Our uses of data</h2>
                <div className="space-y-4">
                  <p className="text-neutral-700 text-base sm:text-lg">
                    Parx will only use Your Personal Data when the law allows us to. Most commonly, We use the Personal Data in the following circumstances:
                  </p>
                  <p className="text-neutral-700 text-base sm:text-lg">
                    Parx uses the Personal Data We collect to operate Our business and provide the products we offer. The information We collect may be used for (amongst other purposes) the following: to assess Your application for an account, quote or product; to evaluate the risk You present; to verify Your identity; to register You as a new customer; to administer Your order and deliver our services; to conduct statistical analysis for pricing purposes; to administer claims; to investigate and resolve complaints; to manage our business relationship with You, to enable You to partake in a prize draw or complete a survey; to administer and protect Our business and Our website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data; to make suggestions; to make suggestions and recommendations to You about Parx products or services that may be of interest to You.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">Marketing</h2>
                <div className="space-y-4">
                  <p className="text-neutral-700 text-base sm:text-lg">
                    We strive to provide You choices regarding certain Personal Data uses, particularly around marketing and advertising.
                  </p>
                  <p className="text-neutral-700 text-base sm:text-lg">
                    Promotional offers from Us: We may use Your Personal Data to form a view on what we think you may want or need, or what may be of interest to You. This is how we decide which products, services and offers may be relevant for you (we call this marketing). You will receive marketing communications from Us if You have requested from Us or purchases products or services from Us and you have not opted out of receiving that marketing.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">Who to contact</h2>
                <div className="space-y-4">
                  <p className="text-neutral-700 text-base sm:text-lg">
                    If You wish to exercise any of Your rights or have any queries about how We use Your Personal Data, please contact Parx by email: Connect@Parxgroup.co.uk
                  </p>
                  <p className="text-neutral-700 text-base sm:text-lg">
                    We will consider Your request and either comply with it or explain why We are not able to. Please note, We may request evidence of Your identity to process Your request.
                  </p>
                  <div className="mt-4">
                    <p className="text-neutral-700 text-base sm:text-lg font-medium">Contact Information:</p>
                    <p className="text-neutral-700 text-base sm:text-lg mt-2">
                      Writing: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF
                    </p>
                    <p className="text-neutral-700 text-base sm:text-lg">
                      Telephone: 0303 123 1113 (local rate) or 01625 545 745 (National Rate)
                    </p>
                    <p className="text-neutral-700 text-base sm:text-lg">
                      Website: https://ico.org.uk/concerns
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">Changes to this Data Privacy Notice</h2>
                <p className="text-neutral-700 text-base sm:text-lg">
                  We may amend this Data Privacy Notice from time to time for example, to keep it up to date or to comply with legal requirements. Should any significant changes be made to the ways in which Parx processes Personal Data from those described at the time of collection, We will post a notice on Our website.
                </p>
              </section>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Privacy;