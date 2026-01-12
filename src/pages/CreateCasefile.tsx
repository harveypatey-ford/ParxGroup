import React from 'react';
import { ArrowLeft, ChevronRight, Shield, Building, Lightbulb, FileText, FileCheck, Lock, Compass, AlertTriangle, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import StatusDisclosure from '../components/StatusDisclosure';

function CreateCasefile() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleTypeSelect = (type: string) => {
    switch(type) {
      case 'pip':
        navigate('/create-pip-application');
        break;
      case 'pbsa':
        navigate('/create-pbsa-application');
        break;
      case 'rights-to-light':
        navigate('/rights-to-light');
        break;
      case 'title':
        navigate('/title-insurance');
        break;
      case 'environmental':
        navigate('/environmental-insurance');
        break;
      default:
        // Handle other insurance types
        break;
    }
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
              Create New Casefile
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatedSection direction="up">
          <div className="bg-white rounded-lg shadow-card p-8">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Select Insurance Type</h2>
            <div className="w-16 h-1 bg-primary-500 mb-6"></div>
            <p className="text-neutral-600 mb-10">
              Please select the type of insurance you're interested in. This will help us tailor the application process to your specific needs.
            </p>

            {/* Legal Indemnities Section */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
                <Shield className="h-6 w-6 text-primary-600 mr-2" />
                Legal Indemnities
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <button
                  onClick={() => handleTypeSelect('rights-to-light')}
                  className="flex flex-col items-center p-8 border-2 border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                >
                  <div className="p-4 rounded-full bg-neutral-100 mb-4">
                    <Lightbulb className="h-10 w-10 text-neutral-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Rights to Light
                  </h3>
                  <p className="text-sm text-neutral-500 text-center">
                    Protection against claims regarding obstruction of natural light
                  </p>
                </button>

                <button
                  onClick={() => handleTypeSelect('title')}
                  className="flex flex-col items-center p-8 border-2 border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                >
                  <div className="p-4 rounded-full bg-neutral-100 mb-4">
                    <FileText className="h-10 w-10 text-neutral-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Title Insurance
                  </h3>
                  <p className="text-sm text-neutral-500 text-center">
                    Protection against unforeseen title defects and ownership issues
                  </p>
                </button>

                <button
                  onClick={() => handleTypeSelect('environmental')}
                  className="flex flex-col items-center p-8 border-2 border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                >
                  <div className="p-4 rounded-full bg-neutral-100 mb-4">
                    <Leaf className="h-10 w-10 text-neutral-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Environmental
                  </h3>
                  <p className="text-sm text-neutral-500 text-center">
                    Protection against environmental risks and contamination issues
                  </p>
                </button>
              </div>
            </div>

            {/* Portfolio Investment Protection Section */}
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-6 flex items-center">
                <Building className="h-6 w-6 text-primary-600 mr-2" />
                Portfolio Investment Protection
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <button
                  onClick={() => handleTypeSelect('pip')}
                  className="flex flex-col items-center p-8 border-2 border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                >
                  <div className="p-4 rounded-full bg-neutral-100 mb-4">
                    <Shield className="h-10 w-10 text-neutral-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Social Housing (PIP)
                  </h3>
                  <p className="text-sm text-neutral-500 text-center">
                    Portfolio Investment Protection for social housing rental cashflows
                  </p>
                </button>

                <button
                  onClick={() => handleTypeSelect('pbsa')}
                  className="flex flex-col items-center p-8 border-2 border-neutral-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
                >
                  <div className="p-4 rounded-full bg-neutral-100 mb-4">
                    <Building className="h-10 w-10 text-neutral-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    Student Accommodation (PBSA)
                  </h3>
                  <p className="text-sm text-neutral-500 text-center">
                    Portfolio Investment Protection for purpose-built student accommodation
                  </p>
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      
      <StatusDisclosure className="bg-white mt-8" />
    </div>
  );
}

export default CreateCasefile;