import React from 'react';
import { Shield } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import StatusDisclosure from '../components/StatusDisclosure';

function Terms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
                Terms and Conditions
              </h1>
              <p className="mt-6 text-xl text-white max-w-3xl mx-auto">
                Please read these terms carefully before using our services
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimatedSection direction="up">
          <div className="prose prose-lg max-w-none">
            <div className="bg-neutral-50 p-8 rounded-lg mb-8">
              <p className="text-neutral-600">
                These terms and conditions govern your use of the Parx Group website and services. By using our website and services, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website or services.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">1. Introduction</h2>
                <p className="text-neutral-700">
                  These terms and conditions govern your use of the Parx Group website and services. By using our website and services, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">2. License to use website</h2>
                <p className="text-neutral-700">
                  Unless otherwise stated, Parx Group and/or its licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">3. Acceptable use</h2>
                <p className="text-neutral-700">
                  You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">4. Professional Services</h2>
                <p className="text-neutral-700">
                  Parx Group provides insurance broking and risk management services. Our services are subject to separate terms and conditions which will be provided to you when you engage our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">5. Limitations and exclusions of liability</h2>
                <p className="text-neutral-700">
                  Nothing in these terms and conditions will: (a) limit or exclude our or your liability for death or personal injury resulting from negligence; (b) limit or exclude our or your liability for fraud or fraudulent misrepresentation; (c) limit any of our or your liabilities in any way that is not permitted under applicable law; or (d) exclude any of our or your liabilities that may not be excluded under applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">6. Indemnity</h2>
                <p className="text-neutral-700">
                  You hereby indemnify us and undertake to keep us indemnified against any losses, damages, costs, liabilities and expenses incurred or suffered by us arising out of any breach by you of any provision of these terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">7. Breaches of these terms and conditions</h2>
                <p className="text-neutral-700">
                  Without prejudice to our other rights under these terms and conditions, if you breach these terms and conditions in any way, we may take such action as we deem appropriate to deal with the breach.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">8. Variation</h2>
                <p className="text-neutral-700">
                  We may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the use of our website from the date of the publication of the revised terms and conditions on our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">9. Assignment</h2>
                <p className="text-neutral-700">
                  We may transfer, sub-contract or otherwise deal with our rights and/or obligations under these terms and conditions without notifying you or obtaining your consent. You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">10. Severability</h2>
                <p className="text-neutral-700">
                  If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">11. Entire agreement</h2>
                <p className="text-neutral-700">
                  These terms and conditions constitute the entire agreement between you and Parx Group in relation to your use of our website and supersede all previous agreements in respect of your use of this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">12. Law and jurisdiction</h2>
                <p className="text-neutral-700">
                  These terms and conditions will be governed by and construed in accordance with English law, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">13. Ownership of Website</h2>
                <div className="text-neutral-700 space-y-2">
                  <p>This site is provided and owned by Parx Group Limited.</p>
                  <p>Parx Group is registered in England No. 14768763.</p>
                  <p>Registered office: Preston Park House, South Road, Brighton, East Sussex, BN1 6SB.</p>
                  <p>These Terms of Use apply to your use of every part of this website. Separate terms and conditions will apply to any websites accessible via a hypertext link from this website.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">14. Product Terms and Conditions</h2>
                <p className="text-neutral-700">
                  If you apply for any product or service detailed on this website, these Terms of Use should be read in conjunction with any other terms and conditions which relate to any such product or service and, in the event of any contradiction between these Terms of Use and the specific terms and conditions relating to such product or service, the latter shall prevail. For the purposes of these Terms of Use, product(s) and service(s) shall include, without limitation, any insurance or financial service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">15. Viruses, Hacking and Other Offences</h2>
                <div className="text-neutral-700 space-y-4">
                  <p>
                    You must not misuse this website by knowingly introducing viruses, trojans, worms, logic bombs or other material which is malicious or technologically harmful. You must not attempt to gain unauthorised access to this website, the server on which this website is stored, or any server, computer or database connected to this website. You must not attack this website via a denial-of-service attack or a distributed denial-of service attack.
                  </p>
                  <p>
                    By breaching this provision, you would commit a criminal offence under the Computer Misuse Act 1990 and the Police and Justice Act 2006. We will report any such breach to the relevant law enforcement authorities, and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use this website will cease immediately.
                  </p>
                  <p>
                    We will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of this website or to your downloading of any material posted on it, or on any website linked to it.
                  </p>
                  <p>
                    Parx Group cannot warrant that this website is free of viruses or technical defects of any description and will not be responsible for any technical problems arising from the use of this website.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">16. Acceptable Use Standards</h2>
                <div className="text-neutral-700 space-y-4">
                  <p>You may use our site only for lawful purposes. You may not use our site:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      to transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material or any other form of similar solicitation ("spam");
                    </li>
                    <li>
                      to transmit, or procure the sending of any material which is:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Defamatory of any person</li>
                        <li>Obscene, offensive or inflammatory</li>
                        <li>Sexually explicit</li>
                        <li>Promotes discrimination based on race, sex, religion, disability, or age</li>
                        <li>Infringes any copyright, database right or trade mark of any other person</li>
                        <li>Is likely to deceive any person</li>
                        <li>Is in breach of any legal duty owed to a third party (e.g. duty of confidence)</li>
                        <li>Is threatening or abusive</li>
                        <li>Is likely to harass, upset or embarrass any other person</li>
                        <li>Misrepresents your identity</li>
                        <li>Advocates or promotes any unlawful act</li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    We will determine, in our discretion, whether there has been a breach of these Acceptable Use Standards using our site. If a breach of this policy has occurred, we may take such action as we deem appropriate. Failure to comply with these Acceptable Use Standards constitutes a material breach of the Terms of Use and may result in our taking all or any of the following actions:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>immediate, temporary or permanent withdrawal of your right to use our site;</li>
                    <li>immediate, temporary or permanent removal of any posting or material uploaded by you to our site;</li>
                    <li>a warning being issued to you;</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">17. Security</h2>
                <p className="text-neutral-700">
                  We will take all reasonable steps, including encryption, to ensure that any personal information you provide is kept secure. However, because of the nature of the Internet, and the fact that it is not a secure system, we cannot and do not guarantee that personal information you provide will not be intercepted by others and decrypted. Consequently your privacy cannot be guaranteed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">18. Trademarks</h2>
                <p className="text-neutral-700">
                  The images, logos and names on this website which identify us, a Parx Group company or third parties and their products and services are proprietary marks of Parx Group and/or the relevant third parties. Nothing contained in this website shall be deemed to confer on any person any licence or right on the part of Parx Group or any third party with respect to any such image, logo or name.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 border-b border-neutral-200 pb-2 mb-4">19. Complaints</h2>
                <div className="text-neutral-700 space-y-4">
                  <p>
                    If you have a complaint regarding our services, please send the details to Preston Park House, South Road, Brighton, East Sussex, BN1 6SB. Or Email: connect@parxgroup.co.uk.
                  </p>
                  <p>
                    Your complaint will be acknowledged within 5 working days of receipt and You should receive a written response within 20 working days. Where this is not possible, Parx will inform you of the reasons for this and give you an indication of when you should receive a response.
                  </p>
                  <p>
                    If you have not received a response within 40 working days of the original receipt of the complaint, or you are not happy with the response given you may refer your complaint to the Financial Ombudsman Service (FOS), Exchange Tower, Harbour Exchange Square, London, E14 9SR, Tel. 0800 023 4567 or online at www.financial-ombudsman.org.uk
                  </p>
                </div>
              </section>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Terms;