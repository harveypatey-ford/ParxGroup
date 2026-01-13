import React from 'react';
import { Shield, Lightbulb, Gavel, Lock, FileCheck, Leaf, Compass, AlertTriangle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

function Development() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Property Development Insurance Solutions"
        description="Comprehensive risk management for property development projects. Protect your development from title defects, environmental liabilities, and construction risks."
        keywords="property development insurance, development risk insurance, title insurance development, environmental insurance development, rights to light insurance, planning insurance, judicial review insurance, restrictive covenant insurance, development protection, construction insurance, property developer insurance"
        canonical="https://parxgroup.co.uk/development"
      />

      <div className="relative bg-white -mt-20">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/developent-hero.webm"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='white'/%3E%3C/svg%3E"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-neutral-900/20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="relative z-10 bg-primary-900/80 p-8 rounded-lg backdrop-blur-sm max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Development
              </h1>
              <p className="mt-6 text-xl text-white max-w-3xl">
                Comprehensive risk management for property development projects.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center">
              <p className="text-xl text-neutral-700 leading-relaxed max-w-4xl mx-auto">
                We help source effective solutions to relieve the burden of risk, allowing you to focus on getting projects completed. These policies safeguard funders and developers against unexpected costs and delays, so that you have financial security throughout the build.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <div className="mt-12 flex justify-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-200">
                <Shield className="h-5 w-5 text-primary-600 mr-2" />
                <span className="text-primary-700 font-medium">
                  These insurance solutions cover the owners, lenders and successors in title
                </span>
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Title</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Protection against unforeseen title defects and ownership issues that may emerge after completion.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Compass className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Absence of Easement</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Insurance coverage for properties lacking formal access or service rights, safeguarding your investment against potential access disputes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Lock className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Restrictive Covenants</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Protection against breaches of historical restrictions on land use, ensuring your development plans can proceed without legal challenges.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.25}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Leaf className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Environmental Liabilities</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Coverage for potential environmental risks and contamination issues, protecting your investment from costly remediation requirements.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Lightbulb className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Rights to Light</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Protection against claims from neighboring properties regarding obstruction of natural light due to your development.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.35}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Gavel className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Judicial Review</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Coverage for legal challenges to planning decisions, protecting your investment against costly delays.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <FileCheck className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Planning Insurance</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Protection against financial losses resulting from lack of planning and/or Building Regulations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.45}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Enforcement of Third Party Rights</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Protection against claims from third parties asserting rights over your property, ensuring your ownership and usage rights remain secure.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={0.5}>
            <div className="mt-12 text-center">
              <Link
                to="/services"
                className="btn btn-primary"
              >
                View All Services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                Ready to Discuss Your Insurance Needs?
              </h2>
              <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
              <p className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
                Contact our specialist team for a confidential consultation on your property insurance requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Get in Touch
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export default Development;