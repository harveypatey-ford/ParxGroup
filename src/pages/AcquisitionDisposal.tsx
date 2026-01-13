import React from 'react';
import { Shield, Building, Gavel, Lock, FileCheck, Wrench, Compass, AlertTriangle, MapPin, Home, Pickaxe, Plane, Baseline as Pipeline, Loader as Road, Church, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

function AcquisitionDisposal() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Property Acquisition & Disposal Insurance"
        description="Comprehensive risk management for property transactions. Title insurance, portfolio wrappers, and protection against defects for property acquisition and disposal."
        keywords="property acquisition insurance, property disposal insurance, title insurance, portfolio wrapper insurance, no-search cover, environmental insurance acquisition, property transaction insurance, acquisition risk management, disposal risk management, property purchase insurance"
        canonical="https://parxgroup.co.uk/acquisition-disposal"
      />

      <div className="relative bg-white -mt-20">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/acquisitionanddisposal-hero.webm"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='white'/%3E%3C/svg%3E"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-neutral-900/20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="relative z-10 bg-primary-900/80 p-8 rounded-lg backdrop-blur-sm max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Acquisition and Disposal
              </h1>
              <p className="mt-6 text-xl text-white max-w-3xl">
                Comprehensive risk management for property transactions.
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
                We have experience in working with investors and developers to source effective solutions to relieve the burden of legal issues, allowing you to focus on getting projects completed. These policies safeguard funders and developers against legal disputes resulting in financial security for your project.
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
                  <FileCheck className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">No-Search Cover</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Expedite property transactions by eliminating the need for time-consuming searches while maintaining protection against potential issues.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.15}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Building className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Portfolio Wrappers</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Comprehensive coverage solutions for multiple properties under a single policy, streamlining management and reducing administrative burden.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Title</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Protection against unforeseen title defects, ensuring your ownership rights are secure and defending against potential claims.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.25}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <FileText className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
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
                  <Lock className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Restrictive Covenant</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Protection against breaches of historical restrictions on land use, ensuring your development plans can proceed without legal challenges.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.35}>
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

            <AnimatedSection direction="up" delay={0.4}>
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

            <AnimatedSection direction="up" delay={0.45}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Gavel className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Litigation Dispute Resolution</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Coverage for legal costs and potential damages arising from property-related disputes, providing financial protection during litigation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Adverse Possession</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Protection against claims from individuals asserting ownership of adversely possessed land, securing your property boundaries.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.55}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Home className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Lack of Planning & Building Regulations</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Coverage for properties lacking proper planning permissions or building regulation compliance, protecting against enforcement action.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.6}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Pickaxe className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Mines and Minerals</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Protection against claims relating to mineral rights and underground mining activities, securing your property's foundation rights.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.65}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Plane className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Flying Freehold</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Insurance for properties with flying freeholds, protecting against potential access issues and maintenance disputes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.7}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Pipeline className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Build Over Sewer</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Protection for properties built over or near sewers, covering potential damages and access requirements for maintenance.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.75}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Road className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Lack of Access and/or Services</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Coverage for properties with uncertain or restricted access rights or lacking essential services, ensuring continued use and value.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.8}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Church className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Chancel Repair</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Protection against historic church repair liabilities that may be attached to your property, providing financial security against unexpected costs.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.85}>
              <div className="card p-4 sm:p-8 h-full flex flex-col">
                <div className="p-2 sm:p-3 bg-primary-50 rounded-lg w-fit mb-3 sm:mb-6">
                  <Wrench className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Bespoke Solutions</h3>
                <p className="mt-2 sm:mt-4 text-sm sm:text-base text-neutral-600 flex-grow">
                  Custom-tailored risk management strategies designed specifically for your unique property acquisition or disposal challenges.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={0.9}>
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

export default AcquisitionDisposal;