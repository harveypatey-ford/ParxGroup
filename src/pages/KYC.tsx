import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Save, Upload, File, Check, X, Info, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import StatusDisclosure from '../components/StatusDisclosure';

function KYC() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    tradingName: '',
    companyNumber: '',
    vatNumber: '',
    incorporationDate: '',
    registeredAddress: '',
    tradingAddress: '',
    website: '',
    
    // Business Information
    natureOfBusiness: '',
    industryType: '',
    annualTurnover: '',
    numberOfEmployees: '',
    
    // Directors/Partners Information
    directors: [{
      fullName: '',
      dateOfBirth: '',
      nationality: '',
      position: '',
      address: '',
      idType: '',
      idNumber: '',
    }],
    
    // Ownership Information
    ultimateBeneficialOwners: [{
      fullName: '',
      dateOfBirth: '',
      nationality: '',
      ownershipPercentage: '',
      address: '',
    }],
    
    // Contact Information
    primaryContact: {
      name: '',
      position: '',
      email: '',
      phone: '',
    },
    
    // Bank Details
    bankName: '',
    accountName: '',
    sortCode: '',
    accountNumber: '',
    
    // Regulatory Information
    regulatoryBody: '',
    licenseNumber: '',
    sanctionsScreening: 'no',
    pepsScreening: 'no',
    
    // Additional Information
    sourceOfFunds: '',
    expectedTransactionVolume: '',
    geographicalOperations: '',
    
    // Declarations
    confirmAccuracy: false,
    confirmUpdates: false,
    confirmCompliance: false
  });

  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File | null}>({
    companyRegistration: null,
    vatCertificate: null,
    directorId: null,
    proofOfAddress: null,
    bankStatement: null,
    financialStatements: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFiles(prev => ({
        ...prev,
        [name]: e.target.files![0]
      }));
    }
  };

  const removeFile = (name: string) => {
    setUploadedFiles(prev => ({
      ...prev,
      [name]: null
    }));
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    console.log('Uploaded files:', uploadedFiles);
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
              Know Your Customer (KYC) Form
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
                  <h2 className="text-2xl font-bold text-neutral-900">KYC Information</h2>
                  <p className="text-neutral-500 mt-1">
                    Please complete all required information for our Know Your Customer process
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                  Company Information
                </h3>
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
                    <label htmlFor="tradingName" className="block text-sm font-medium text-neutral-700">
                      Trading Name (if different)
                    </label>
                    <input
                      type="text"
                      id="tradingName"
                      name="tradingName"
                      value={formData.tradingName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="companyNumber" className="block text-sm font-medium text-neutral-700">
                      Company Registration Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyNumber"
                      name="companyNumber"
                      value={formData.companyNumber}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="vatNumber" className="block text-sm font-medium text-neutral-700">
                      VAT Number
                    </label>
                    <input
                      type="text"
                      id="vatNumber"
                      name="vatNumber"
                      value={formData.vatNumber}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                  Business Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="natureOfBusiness" className="block text-sm font-medium text-neutral-700">
                      Nature of Business <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="natureOfBusiness"
                      name="natureOfBusiness"
                      value={formData.natureOfBusiness}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="industryType" className="block text-sm font-medium text-neutral-700">
                      Industry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="industryType"
                      name="industryType"
                      value={formData.industryType}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    >
                      <option value="">Select Industry</option>
                      <option value="real_estate">Real Estate</option>
                      <option value="construction">Construction</option>
                      <option value="property_development">Property Development</option>
                      <option value="property_management">Property Management</option>
                      <option value="investment">Investment</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Required Documents */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                  Required Documents
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Certificate of Incorporation <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-neutral-400" />
                          <div className="flex text-sm text-neutral-600">
                            <label className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                              <span>Upload a file</span>
                              <input
                                type="file"
                                className="sr-only"
                                onChange={(e) => handleFileChange(e, 'companyRegistration')}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-neutral-500">PDF up to 10MB</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Proof of Address <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-neutral-400" />
                          <div className="flex text-sm text-neutral-600">
                            <label className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                              <span>Upload a file</span>
                              <input
                                type="file"
                                className="sr-only"
                                onChange={(e) => handleFileChange(e, 'proofOfAddress')}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-neutral-500">PDF up to 10MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Declarations */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                  Declarations
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="confirmAccuracy"
                        name="confirmAccuracy"
                        type="checkbox"
                        checked={formData.confirmAccuracy}
                        onChange={handleCheckboxChange}
                        required
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="confirmAccuracy" className="font-medium text-neutral-700">
                        I confirm that all information provided is accurate and complete
                      </label>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="confirmUpdates"
                        name="confirmUpdates"
                        type="checkbox"
                        checked={formData.confirmUpdates}
                        onChange={handleCheckboxChange}
                        required
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="confirmUpdates" className="font-medium text-neutral-700">
                        I agree to inform Parx Group of any changes to the information provided
                      </label>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="confirmCompliance"
                        name="confirmCompliance"
                        type="checkbox"
                        checked={formData.confirmCompliance}
                        onChange={handleCheckboxChange}
                        required
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="confirmCompliance" className="font-medium text-neutral-700">
                        I understand that this information is required for compliance purposes
                      </label>
                    </div>
                  </div>
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
                    Submit KYC
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

export default KYC;