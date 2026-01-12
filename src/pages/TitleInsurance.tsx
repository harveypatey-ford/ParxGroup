import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Save, Shield, Upload, File, Check, X, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import StatusDisclosure from '../components/StatusDisclosure';

function TitleInsurance() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentUse: '',
    intendedUse: '',
    developmentIntended: 'no',
    planningRequired: 'no',
    planningStage: '',
    planningReference: '',
    planningApplicationLink: '',
    grossDevelopedValue: '',
    limitOfIndemnity: '',
    riskDescription: '',
  });

  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File | null}>({
    titleDocument: null,
    planningDocuments: null,
    otherDocuments: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
              Title Insurance Application
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
                  <h2 className="text-2xl font-bold text-neutral-900">Title Insurance Application</h2>
                  <p className="text-neutral-500 mt-1">
                    Please complete all required information for your Title Insurance application
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Property Usage Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                  Property Usage
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="currentUse" className="block text-sm font-medium text-neutral-700">
                      Current Use <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="currentUse"
                      name="currentUse"
                      value={formData.currentUse}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Please describe the current use of the property"
                    />
                  </div>

                  <div>
                    <label htmlFor="intendedUse" className="block text-sm font-medium text-neutral-700">
                      Intended Use <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="intendedUse"
                      name="intendedUse"
                      value={formData.intendedUse}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Please describe the intended use of the property"
                    />
                  </div>
                </div>
              </div>

              {/* Development Details Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                  Development Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Is development intended? <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="developmentIntended"
                          value="yes"
                          checked={formData.developmentIntended === 'yes'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="developmentIntended"
                          value="no"
                          checked={formData.developmentIntended === 'no'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>

                  {formData.developmentIntended === 'yes' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700">
                          Is planning permission required? <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-2 space-x-6">
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="planningRequired"
                              value="yes"
                              checked={formData.planningRequired === 'yes'}
                              onChange={handleInputChange}
                              className="form-radio"
                            />
                            <span className="ml-2">Yes</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input
                              type="radio"
                              name="planningRequired"
                              value="no"
                              checked={formData.planningRequired === 'no'}
                              onChange={handleInputChange}
                              className="form-radio"
                            />
                            <span className="ml-2">No</span>
                          </label>
                        </div>
                      </div>

                      {formData.planningRequired === 'yes' && (
                        <>
                          <div>
                            <label htmlFor="planningStage" className="block text-sm font-medium text-neutral-700">
                              Planning Stage <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="planningStage"
                              name="planningStage"
                              value={formData.planningStage}
                              onChange={handleInputChange}
                              required
                              className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            >
                              <option value="">Select stage</option>
                              <option value="pre">Pre-planning</option>
                              <option value="post">Post-planning</option>
                            </select>
                          </div>

                          <div>
                            <label htmlFor="planningReference" className="block text-sm font-medium text-neutral-700">
                              Planning Reference
                            </label>
                            <input
                              type="text"
                              id="planningReference"
                              name="planningReference"
                              value={formData.planningReference}
                              onChange={handleInputChange}
                              className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                            />
                          </div>

                          <div>
                            <label htmlFor="planningApplicationLink" className="block text-sm font-medium text-neutral-700">
                              Link to Planning Application
                            </label>
                            <input
                              type="url"
                              id="planningApplicationLink"
                              name="planningApplicationLink"
                              value={formData.planningApplicationLink}
                              onChange={handleInputChange}
                              className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                              placeholder="https://"
                            />
                          </div>
                        </>
                      )}

                      <div>
                        <label htmlFor="grossDevelopedValue" className="block text-sm font-medium text-neutral-700">
                          Gross Developed Value <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-neutral-500 sm:text-sm">£</span>
                          </div>
                          <input
                            type="text"
                            id="grossDevelopedValue"
                            name="grossDevelopedValue"
                            value={formData.grossDevelopedValue}
                            onChange={handleInputChange}
                            required
                            className="pl-7 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Insurance Details Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                  Insurance Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="limitOfIndemnity" className="block text-sm font-medium text-neutral-700">
                      Limit of Indemnity <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-neutral-500 sm:text-sm">£</span>
                      </div>
                      <input
                        type="text"
                        id="limitOfIndemnity"
                        name="limitOfIndemnity"
                        value={formData.limitOfIndemnity}
                        onChange={handleInputChange}
                        required
                        className="pl-7 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="riskDescription" className="block text-sm font-medium text-neutral-700">
                      Description of the Risk <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="riskDescription"
                      name="riskDescription"
                      value={formData.riskDescription}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Please provide a detailed description of the title risk"
                    />
                  </div>
                </div>
              </div>

              {/* Required Documents Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                  Required Documents
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Title Document <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      {!uploadedFiles.titleDocument ? (
                        <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <Upload className="mx-auto h-12 w-12 text-neutral-400" />
                            <div className="flex text-sm text-neutral-600">
                              <label className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                                <span>Upload a file</span>
                                <input
                                  type="file"
                                  className="sr-only"
                                  onChange={(e) => handleFileChange(e, 'titleDocument')}
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-neutral-500">PDF up to 10MB</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center p-4 border border-neutral-300 rounded-md bg-neutral-50">
                          <File className="h-8 w-8 text-primary-500 mr-3" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-neutral-900 truncate">
                              {uploadedFiles.titleDocument.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {(uploadedFiles.titleDocument.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile('titleDocument')}
                            className="ml-4 text-sm font-medium text-red-600 hover:text-red-500"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {formData.planningRequired === 'yes' && (
                    <div>
                      <label className="block text-sm font-medium text-neutral-700">
                        Planning Documents
                      </label>
                      <div className="mt-1">
                        {!uploadedFiles.planningDocuments ? (
                          <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <Upload className="mx-auto h-12 w-12 text-neutral-400" />
                              <div className="flex text-sm text-neutral-600">
                                <label className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                                  <span>Upload a file</span>
                                  <input
                                    type="file"
                                    className="sr-only"
                                    onChange={(e) => handleFileChange(e, 'planningDocuments')}
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-neutral-500">PDF up to 10MB</p>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center p-4 border border-neutral-300 rounded-md bg-neutral-50">
                            <File className="h-8 w-8 text-primary-500 mr-3" />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-neutral-900 truncate">
                                {uploadedFiles.planningDocuments.name}
                              </p>
                              <p className="text-xs text-neutral-500">
                                {(uploadedFiles.planningDocuments.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile('planningDocuments')}
                              className="ml-4 text-sm font-medium text-red-600 hover:text-red-500"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Other Supporting Documents
                    </label>
                    <div className="mt-1">
                      {!uploadedFiles.otherDocuments ? (
                        <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <Upload className="mx-auto h-12 w-12 text-neutral-400" />
                            <div className="flex text-sm text-neutral-600">
                              <label className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                                <span>Upload a file</span>
                                <input
                                  type="file"
                                  className="sr-only"
                                  onChange={(e) => handleFileChange(e, 'otherDocuments')}
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-neutral-500">PDF up to 10MB</p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center p-4 border border-neutral-300 rounded-md bg-neutral-50">
                          <File className="h-8 w-8 text-primary-500 mr-3" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-neutral-900 truncate">
                              {uploadedFiles.otherDocuments.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {(uploadedFiles.otherDocuments.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile('otherDocuments')}
                            className="ml-4 text-sm font-medium text-red-600 hover:text-red-500"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-neutral-200 gap-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="btn btn-secondary w-full sm:w-auto"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </button>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => console.log('Saving draft...')}
                    className="btn btn-secondary w-full sm:w-auto"
                  >
                    <Save className="h-4 w-4 mr-2" />
                    Save Draft
                  </button>
                  
                  <button
                    type="submit"
                    className="btn btn-primary w-full sm:w-auto"
                  >
                    Submit Application
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

export default TitleInsurance;