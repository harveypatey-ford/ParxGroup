import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Save, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import StatusDisclosure from '../components/StatusDisclosure';

function TOBA() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: '',
    signatoryName: '',
    signatoryPosition: '',
    signatoryEmail: '',
    dateAccepted: '',
    acceptTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('TOBA accepted:', formData);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-soft sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <button 
              onClick={handleBack}
              className="mr-4 p-1 rounded-full text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 transition-colors"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <h1 className="text-2xl font-bold text-neutral-900">
              Terms of Business Agreement
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatedSection direction="up">
          <div className="bg-white rounded-lg shadow-card p-8">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 rounded-full mr-3">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900">Terms of Business Agreement</h2>
                  <p className="text-neutral-500 mt-1">
                    Please review and accept our terms of business
                  </p>
                </div>
              </div>
            </div>

            {/* Terms Content */}
            <div className="prose prose-sm max-w-none mb-8 space-y-6">
              <div className="bg-neutral-50 p-6 rounded-lg">
                <p className="text-neutral-600">
                  Parx Group Limited are an independent, appointed representative registered in England & Wales. Our registered address is: Preston Park House, South Road, Brighton, East Sussex, BN1 6SB. Parx Group Limited has no holding direct or indirect that represents voting rights in any insurance undertaking and no insurance undertaking has any voting rights or capital in Parx Group Limited.
                </p>
                <p className="text-neutral-600 mt-4">
                  Parx Group Limited is an Appointed Representative of CLS Property Insight Limited who are regulated by the Financial Conduct Authority "FCA" the independent agency that regulates financial services. CLS Property Insights FRN is 718255. Our FRN is 996187. Our permitted business includes insurance advising and arranging.
                </p>
              </div>

              <div>
                <p>Please read this document carefully. It sets out the terms on which we agree to act for you and contains details of our regulatory and statutory responsibilities. Contact us immediately if there is anything which you do not understand.</p>
                
                <p>We would particularly draw your attention to the following sections of these Terms of Business:</p>
                <ul className="list-disc pl-6">
                  <li>Duty of Fair Presentation (For Commercial Clients)</li>
                  <li>Reasonable Care (For Consumer Clients)</li>
                  <li>Premium Payment</li>
                  <li>Cancellation</li>
                  <li>Minimum and Deposit premiums (M&D)</li>
                  <li>Client Money Arrangements</li>
                </ul>
              </div>

              <section>
                <h3 className="text-lg font-semibold">HOURS OF BUSINESS AND INSTRUCTIONS</h3>
                <p>Our usual office hours are 09.00 - 17.00 Monday to Friday other than Bank and Public Holidays. Please note, we cannot accept instructions from you outside of these times and may still require time after your instructions to obtain cover from Insurers.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">ADVISING ON/ARRANGING YOUR INSURANCE</h3>
                <p>We are an insurance distributor (intermediary) and can act both as agent of insurer, and on behalf of you, the customer. Unless we advise you otherwise, we are acting on your behalf. We also act on behalf of insurers when collecting premiums under risk transfer.</p>
                <p>We will ask questions to enable us to assess reasonably your insurance requirements, this may include checking information that we already hold about you and your existing insurance arrangements with us and other parties. We will provide you with advice and guidance, after assessing what you want and need, we will personally recommend a suitable policy based on our experience of dealing with similar risks.</p>
                <p>We will confirm to you the level of service we are providing as part of our sales process. In all cases our service will include arranging and administering your insurance, including helping you with on-going changes. If we use the services of another intermediary to place your insurance, we will advise you of the name of the intermediary we use and the name of the insurer. In some instances, we may approach an MGA (Managing General Agent). Details of the placement of your policy will be confirmed to you.</p>
                <p>We will usually recommend an insurance solution that meets your demands and needs. The number of insurers approached will depend upon the type of insurance required and sometimes a selection of insurers or single insurer may be used. If you wish, you may ask for a list of insurers with whom we offer insurance. We will confirm to you whether we have approached the whole market, a selection of insurers or a single insurer.</p>
                <p>Upon receipt of your instruction we will place cover with insurance providers and keep you informed of progress.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">SECURITY</h3>
                <p>We will advise you of the insurers with whom it is proposed to place any insurance on your behalf. However, we cannot and do not guarantee the solvency or continuing solvency of any insurer used. You should note that the financial position of an insurer can change after cover has incepted. A liability may arise to pay the premium in part or in full under policies where a participating insurer becomes insolvent.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">PRODUCT OVERSIGHT AND GOVERNANCE FRAMEWORK</h3>
                <p>All of the products we offer are ultimately manufactured by product providers (usually the Insurance Companies providing cover); Our framework, means we have in place written processes, to ensure that: For any existing products we distribute and any new products we propose to distribute, we will have procedures in place to consider, on a continuing basis, whether the product offers fair value to customers in the target market.</p>
                <p>(a) take appropriate action to mitigate the situation and/or prevent further occurrences of any possible detriment to customers, including, where appropriate amending our distribution strategy, and (b) inform any relevant manufacturers promptly about any concerns we have and any action we are taking.</p>
                <p>Any distributors (including us, and our employees) have the necessary knowledge, experience, and competence to understand the product and ensure it is consistent with a customer (or potential customers) demands and needs; even where our distribution chain is long, we aim to ensure this goal is met.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">PREMIUM PAYMENT</h3>
                <p>You must provide the premium due in cleared funds in accordance with the amounts and payment dates in our debit notes. Failure to meet the payment dates may lead to insurers cancelling your policy without further notice.</p>
                <p>Where insurers have specified that the premium must be received by a certain date, failure to comply can result in the automatic termination of your insurance with insurers retaining a portion of your premium for the time on risk which has elapsed.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">FEES & CHARGES</h3>
                <p>No charge will be made for Debit or Credit Card transactions. We reserve the right to charge you £25 if you issue a cheque to us which does not clear on the first presentation.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">CANCELLATION & MID-TERM ADJUSTMENTS</h3>
                <p>In the event of cancellation of the insurance contract after inception and/or mid-term adjustments and any other refunds, insurers may return some or all the premium to us. In such circumstances, and where the insurer has provided a refund, we will return this to you less a deduction of the commission which is repayable to the insurer.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">INSURANCE PREMIUM TAX (IPT)</h3>
                <p>Your premium detailed in the policy will include IPT at the prevailing rate. Should the rate of IPT be amended by the Government, your premium will be amended by the insurer to reflect the change.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">REMUNERATION</h3>
                <p>Our remuneration for our services is normally in the form of commission which is a percentage of the insurance premium paid by you and allowed by the insurer(s) with whom the insurance is placed. Other remuneration options include a brokerage fee or a combination of a fee and commission percentage.</p>
                <p>Our remuneration is earned at the inception of the policy and each successive renewal date and brokerage and/or fees will not usually be returnable.</p>
                <p>In addition to client fees and/or brokerage payments we may also receive remuneration by way of:</p>
                <ul className="list-disc pl-6">
                  <li>Interest earned on insurance monies passing through our bank accounts</li>
                  <li>Expense allowances or commissions from insurers for managing and administering certain covers, binding authorities and other similar facilities</li>
                  <li>Profit commissions or profit shares paid by insurers on specific facilities and arrangements for a limited class of business</li>
                  <li>Administrative service fees which may be paid for limited specific service we provide to insurer(s) as part of the placing or claims process</li>
                </ul>
                <p>We will deal with you openly and, when requested, we will disclose the amount of any additional income (or where that is not feasible a reasonable estimate of the additional income or its basis of calculation) from the above and any other sources which we may receive in relation to insurance which we arrange.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">MINIMUM AND DEPOSIT PREMIUMS (M & D)</h3>
                <p>Your commercial insurance policy may be subject to a Minimum & Deposit premium. In this case there is no refund in the event of cancellation, and you will be liable for 100% of the premium even if you are paying by instalments. You will be notified from the outset if your policy is subject to this condition. If you are unsure whether your policy is subject to a Minimum & Deposit premium, please contact us.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">DUTY OF FAIR PRESENTATION (FOR COMMERCIAL CONTRACTS)</h3>
                <p>It is your responsibility to provide a fair presentation of the insurance risk when requesting a quotation from us. This should include you conducting a reasonable search for information within your organisation and approaching relevant senior employees of both your company and any other connected company in relation to the risk. You must thereafter disclose every material circumstance which you know or ought to know. Failing this, you must disclose enough information to put your insurer on notice that it needs to make further enquiries regarding the material fact. You must also ensure that the information provided to us is correct to the best of your knowledge and that all representations made to us in either expectation or belief are made in good faith.</p>
                <p>Failure to make a fair presentation of the risk may result in additional terms or warranties being applied to your policy from inception or any claim amount being reduced proportionately. In certain circumstances, your insurer may declare your cover void and will return any premiums already paid. If the insurer views the omission as a deliberate or reckless breach of the duty of fair presentation, they may void your policy and retain all premiums paid.</p>
                <p>Whether specifically requested by us or your Insurer, you should disclose all material circumstances and facts. If you need further clarity regarding a material circumstance or fact, please contact us immediately.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">REASONABLE CARE (FOR CONSUMER CONTRACTS)</h3>
                <p>You must take reasonable care to provide complete and accurate information to us and your insurer, when you take out your insurance policy, throughout the life of your insurance policy and when you renew your insurance policy. Failure to provide correct information or disclosure of false information could invalidate your insurance, result in a claim not being paid and/or an additional premium being charged.</p>
                <p>You must check all details on any proposal form or statement of facts and notify us immediately if any information needs to be corrected.</p>
                <p>The answers or statements you have provided will be shown and they must be given to the best of your knowledge and belief. It is important that you ensure all statements you make on proposal forms, claim forms and other documents, are full and accurate. If a form is completed on your behalf, you should check that the answers shown to any questions are true and accurate before signing the document.</p>
                <p>You are reminded that it is an offence under the Road Traffic Act to make any false statements or withhold any relevant information to obtain a certificate of motor insurance.</p>
                <p>You are advised to keep copies of any correspondence you send to us or direct to your insurer.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">DOCUMENTATION</h3>
                <p>We will issue written documentation confirming details of the policy purchased, including the identity of your Insurers and any specific conditions or warranties. We will advise you of the dates(s) on which any premiums are due, and if relevant, the consequence of late payment. Where required by regulation we will also:</p>
                <ul className="list-disc pl-6">
                  <li>Set out your demands and needs as understood by us</li>
                  <li>Confirm whether the contract has been personally recommended and, if so, the reasons for making that recommendation</li>
                  <li>Include a summary of the key aspects of your policy or Insurance Product Information Document (IPID)</li>
                  <li>Provide you with the policy confirmation</li>
                  <li>Provide you with renewal terms in good time before the expiry of your policy or notify you that renewal is not being invited</li>
                </ul>
                <p>Please read through any summaries of cover, letters, or registers of insurance which we issue and advise us immediately of any inaccuracies or omissions as this forms the basis of your insurance. These documents attempt to provide you with a summary of the main points only of the policy. You should be aware that there will be other terms and conditions of the insurance which are not shown in such documents and which will restrict or exclude cover. It is most important that you read through the policy documentation in its entirety and ask us if any point is unclear or if additional or amended cover is required. Please also take care to store all insurance documents in a safe place. Please take note to read any claims notification provisions and any warranties and conditions as failure to comply may invalidate or affect cover.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">CLAIMS</h3>
                <p>You must notify us as soon as possible of a claim or circumstances which may give rise to a claim. We will advise you what you need to do to pursue your claim; you should note you will need to state all material facts concerning your claim. We will remit claims payments to you as soon as possible after they have been received on your behalf. We will provide you with every assistance in submitting a claim and seeking to obtain reimbursement. However, if an insurer becomes insolvent or delays making settlement, we do not accept liability for any unpaid amounts.</p>
                <p>Where you have elected to appoint another insurance broker/provider or have moved your cover(s) elsewhere, we reserve the right to cease assisting you with a current and ongoing claim. In these instances, and upon request, we may provide or continue to provide a claims handling service subject to payment of a reasonable fee.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">COMPLAINTS</h3>
                <p>It is always our intention to provide a high standard of service. If our service falls below the standard our clients reasonably expect and they have cause for complaint, we will endeavour to ensure that at the appropriate stage the matter is handled fairly and promptly by a suitably senior and independent member of staff, If you have a complaint regarding our services, please send the details to connect@parxgroup.co.uk. If we consider that your complaint does not relate to our services (for instance, if the matter concerns the performance of your insurer) we will put you in contact with an appropriate person to whom your complaint may be addressed. We have a formal complaint procedure, details of which we will send to you either on receipt of a complaint or on request.</p>
                <p>Your complaint will be acknowledged within 5 working days of receipt and you should receive a written response within 20 working days. Where this is not possible, we will inform you of the reasons for this and give you an indication of when you should receive a response. If you have not received a response within 40 working days of the original receipt of the complaint, or you are not happy with the response given you may refer your complaint to the Financial Ombudsman Service (FOS), Exchange Tower, Harbour Exchange Square, London, E14 9SR, Tel. 0800 023 4567 or online at www.financial-ombudsman.org.uk; or if after we have investigated your complaint you still remain dissatisfied and wish to refer your complaint to the FOS. We may need to be provided with information about your Insurance Product or Bond which may contain personal data. Unless you advise us to the contrary we will share any information we have with the FOS to enable them to investigate your complaint.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">TRANSFERRED BUSINESS</h3>
                <p>Where you appoint us to service your insurance policies mid-term and transfer your current insurance policies from another broker to ourselves, we shall not be liable during the current insurance period for any loss arising from any errors or omissions or gaps in insurance cover or advice which has not been provided by us. If you are concerned that your previous cover was not adequate to meet your insurance requirements, please highlight this to us immediately prior to your policy transferring across. If you do not advise us of any issues, we will review your insurance requirements at each subsequent renewal.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">LIABILITIES</h3>
                <p>Our liability to you in breach of contract, negligence, breach of statutory duty or other claim arising out of or in connection with this agreement or the services provided to us shall be limited as follows:</p>
                <ul className="list-disc pl-6">
                  <li>In respect of personal injury or death caused by our negligence, £1,250,000</li>
                  <li>In respect of breach of contract and/or breach of statutory duty relating to the services we provide you, £1,250,000</li>
                  <li>Subject to clauses (I) and (II) above, in respect of the following losses: loss of revenue; loss of opportunity; loss of profits; loss of anticipated savings; or any other indirect or consequential loss, we will have no liability in any circumstance.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold">CONFLICTS OF INTEREST</h3>
                <p>Circumstances may arise where we may find we have a conflict of interest or otherwise have a material interest in, or related to, a matter in respect of which we are acting. For example, we may find that the interests of two clients for whom we act conflict. Where this has occurred, we will endeavour to act in your best interests always and manage any unavoidable conflicts of interest fairly.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">PREMIUM MONEY ARRANGEMENTS</h3>
                <p>We hold your premium payment under risk transfer as agent of the insurers and we do this by paying it into an insurer premium trust account until it is passed to the insurers. This is to protect your money and means that whilst your money is in the account, it cannot be used for any purpose other than paying the insurer. We will retain any interest earned on the account.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">RIGHTS TO SET OFF</h3>
                <p>We, the insurer or claims handler shall be entitled (but not obliged) without notice to you, to set off any amounts due from you against any amounts which we may receive on your behalf (such as claims monies, refunded premiums and other sums).</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">DATA PROTECTION & GDPR</h3>
                <p>Please read Privacy Policy on our website. Once you have provided your consent, we will exchange the information that you provide to us with insurance companies and other brokers or agents for the purposes of obtaining quotations and arranging cover, this may result in a credit check to confirm your identity and minimise the risk of fraud. We will treat all information as private and confidential, and in strict accordance with the Data Protection Act 1998 (DPA) & General Data Protection Act 2018 (2018), even when you are no longer a customer and will only share information if we are required to do so by law, or regulation. Under data protection law, you may have a right to access the information which we hold about you, or to have inaccurate or incomplete information corrected. If you wish to exercise your rights, please contact us in writing, we will, upon receipt of your consent, use information for marketing similar products or services by us and carefully selected companies. Contact may include SMS text, post, telephone or e-mail. If you have previously given your consent for us to store your personal data and would like to withdraw this, please let us know. Further details regarding your rights are contained within our Privacy Policy.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">SANCTIONS</h3>
                <p>Upon inception of a policy, renewal and when changes are made to your policy mid-term, we submit a sanction check to ensure that no sanctions will be, or are likely to be breached, as a result of us acting on your behalf or in placing insurances. Whilst we will try and comply with all relevant sanctions legislation (in the UK, European Union or elsewhere), it is for you to ensure compliance with such legislation and we will not accept responsibility for any breaches of sanctions legislation that you may commit in any part of the world. If we suspect or find there had been a breach of such legislation, we shall be entitled to refer such matter to the appropriate authorities without notice to you. In such circumstances, we reserve the right to withdraw from providing our services to you in support of any cover or insurances and shall not be liable to any services or services in support of any claim which is ongoing.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">METHOD OF COMMUNICATION</h3>
                <p>Whilst you do have a choice in the way we communicate with you, we will principally provide you with information using electronic means (usually this will be e-mail or some other means to enable you to access information electronically). During the process of dealing with us you will be given an option to receive information in this way, meaning if you would like information in a paper format, we will be happy to provide it.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">E-MAILS</h3>
                <p>We may communicate with you and with other parties in order to provide our services to you, by e-mail. By engaging in this method of communication we both accept the inherent risks e.g. the security risks of interception of or unauthorised access to such communication. In the event of a dispute, neither of us will challenge the validity of this method of communication.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">COMPENSATION</h3>
                <p>Depending on the type of business and the circumstances, you may be entitled to compensation from the Financial Services Compensation Scheme ("FSCS") in the unlikely event that the insurer cannot meet its obligations if you are an individual, an unincorporated association or a small business. The FSCS will meet up to 90% of your claim without any upper limit. Further details can be obtained from www.fscs.org.uk or you may contact the FSCS on 0800 678 1100 for further details.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">MONEY LAUNDERING/PROCEEDS OF CRIME ACT</h3>
                <p>We are obliged to report to the National Criminal Intelligence Service any evidence or suspicion of money laundering at the first opportunity and we are prohibited from disclosing any such report.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">ANTI BRIBERY & CORRUPTION</h3>
                <p>We are committed to the prevention, deterrence and detection of bribery. We have zero tolerance towards bribery and corruption and operate in compliance with the UK Bribery Act 2010.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">STATUTORY REQUIREMENTS</h3>
                <p>We are registered under the Data Protection Act 1998 and Consumer Credit Act 1974.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">LAW AND JURISDICTION</h3>
                <p>These terms of business shall be governed by and construed in accordance with English law. In relation to any legal action or proceedings arising out of or in connection with these terms of business we both irrevocably submit to the non-exclusive jurisdiction of the English courts. The Contract shall not be transferrable or assignable by the you to any other party. The provisions of the Contracts (Rights of Third Parties) Act 1999 are specifically excluded from the Contract. If any term or condition of the Contract is for any reason held to be illegal, invalid, ineffective, inoperable or otherwise unenforceable, it shall be severed and deemed to be deleted from this agreement and the validity and enforceability of the remainder of this agreement shall not be affected or impaired thereby.</p>
                <p>We will use the English language for all communications, the contractual terms and conditions, and any information we are required to supply to you before and during the duration of the contract.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">TRAINING</h3>
                <p>We maintain training to a minimum standard to ensure our workforce is appropriately skilled but where specialism in particular activities is required, we have in place more detailed requirements, including the need for our staff to attain a professional qualification where relevant.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">COPYRIGHT AND INTELLECTUAL PROPERTY</h3>
                <p>Parx Group Limited own the copyright and all other intellectual property rights subsisting in this agreement. You are not permitted to redistribute or extract any information in whole or in part other than for your personal, non-commercial use, unless otherwise stated. Our status as the authors of material within this agreement must always be acknowledged. Except as set out above, you may not reproduce, modify or in any way commercially exploit any of the information contained unless expressly permitted in writing by Parx Group Limited (These prohibitions are without limitation to the legal rights of Parx Group Limited). If you print off, copy or duplicate any part of this agreement in breach of these terms, you must, at our option, return or destroy any copies of the materials you have made.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">WORK PRODUCT</h3>
                <p>We accept no responsibility for any consequence that arises from a third party relying upon any report, letter, information or advice we provide to you without us providing our prior written consent that the third party may do so.</p>
              </section>

              <section>
                <h3 className="text-lg font-semibold">TERMINATION</h3>
                <p>This Terms of Business agreement can be cancelled by either party by giving 7 days notice of cancellation in writing to the other party. As our client, you will remain liable to pay any funds due to us for adjustments and transactions already made and for any further transactions or adjustments which you make prior to the effective termination date. We shall be entitled to retain any and all commission and or fees payable in relation to insurance cover placed as agreed with you prior to the effective termination date.</p>
              </section>
            </div>

            {/* Acceptance Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-neutral-700">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="signatoryName" className="block text-sm font-medium text-neutral-700">
                    Signatory Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="signatoryName"
                    name="signatoryName"
                    value={formData.signatoryName}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="signatoryPosition" className="block text-sm font-medium text-neutral-700">
                    Position <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="signatoryPosition"
                    name="signatoryPosition"
                    value={formData.signatoryPosition}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="signatoryEmail" className="block text-sm font-medium text-neutral-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="sig natoryEmail"
                    name="signatoryEmail"
                    value={formData.signatoryEmail}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleCheckboxChange}
                    required
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="acceptTerms" className="font-medium text-neutral-700">
                    I confirm that I have read, understood and agree to these Terms of Business <span className="text-red-500">*</span>
                  </label>
                  <p className="text-neutral-500">
                    By accepting, you confirm that you have the authority to enter into this agreement on behalf of your company
                  </p>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-between pt-8 border-t border-neutral-200">
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn btn-secondary"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </button>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => console.log('Saving draft...')}
                    className="btn btn-secondary"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </button>
                  
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Accept Terms
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </main>
      
      <StatusDisclosure className="bg-white mt-8" />
    </div>
  );
}

export default TOBA;