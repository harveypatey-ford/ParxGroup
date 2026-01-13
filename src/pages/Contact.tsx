import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SEO from '../components/SEO';

function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact Us - Get in Touch with Parx Group"
        description="Contact our expert team for personalized real estate risk management consultation. Phone: +44 (0) 20 3370 7909. Email: connect@parxgroup.co.uk"
        keywords="contact Parx Group, property insurance contact, real estate insurance consultation, portfolio investor protection enquiry, property insurance quote, real estate risk management contact"
        canonical="https://parxgroup.co.uk/contact"
      />
      {/* Hero Section */}
      <div className="relative bg-white -mt-20">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="/contact-hero.webm"
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
                Contact Our Insurance Experts
              </h1>
              <p className="mt-6 text-xl text-white max-w-3xl">
                Get in touch with our expert team to discuss your insurance needs and risk management strategies.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Information */}
        <AnimatedSection direction="left">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Property Insurance Contact Information</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our team of experts is ready to help you navigate the complexities of real estate risk management.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-card p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-50 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  </div>
                </div>
                <a
                  href="tel:+442033707909"
                  className="text-gray-600 hover:text-primary-600 transition-colors font-medium inline-block"
                >
                  +44 (0) 20 3370 7909
                </a>
                <p className="text-gray-500 text-sm mt-2">Monday to Friday, 8am to 6pm GMT</p>
              </div>

              <div className="bg-white rounded-lg shadow-card p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-50 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  </div>
                </div>
                <a
                  href="mailto:connect@parxgroup.co.uk"
                  className="text-gray-600 hover:text-primary-600 transition-colors font-medium inline-block break-all"
                >
                  connect@parxgroup.co.uk
                </a>
                <p className="text-gray-500 text-sm mt-2">We aim to respond within 24 hours</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-card p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-50 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                  </div>
                </div>
                <p className="text-gray-600">Preston Park House, South Road, Brighton, East Sussex, BN1 6SB</p>
                <p className="text-gray-500 text-sm mt-2">United Kingdom</p>
              </div>
            </div>
            
            {/* Additional Contact Information */}
            <div className="mt-10 bg-primary-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary-800 mb-4">Our Business Hours</h3>
              <ul className="space-y-2 text-primary-700">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-primary-200">
                <h4 className="font-medium text-primary-800 mb-2">Need urgent assistance?</h4>
                <p className="text-primary-700 text-sm">
                  For urgent inquiries outside of business hours, please email us with "URGENT" in the subject line, and we'll respond as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* FAQ Section */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Real Estate Insurance FAQ</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How quickly can you provide a quote?</h3>
                <p className="text-gray-600">
                  We aim to provide initial quotes within 48 hours of receiving all necessary information. For more complex insurance needs, we may require additional time to ensure we offer the most appropriate coverage.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you work with international clients?</h3>
                <p className="text-gray-600">
                  Yes, we work with international clients who have UK-based real estate assets. Our expertise in the UK market allows us to provide comprehensive coverage for foreign investors and developers.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What information do I need to provide for a quote?</h3>
                <p className="text-gray-600">
                  The specific information required depends on the type of insurance you need. Generally, we'll need details about the property, its value, location, intended use, and any specific risks you're concerned about.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What are the insurer Ratings?</h3>
                <p className="text-gray-600">
                  We work exclusively with insurers rated A- or above by major rating agencies such as S&P, Moody's, and AM Best. This ensures our clients receive coverage from financially stable and reputable insurance providers with excellent claims-paying ability.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default Contact;