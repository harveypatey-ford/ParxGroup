import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Save, Shield, Upload, File, Check, X, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import StatusDisclosure from '../components/StatusDisclosure';

function RightsToLight() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    insuredParties: '',
    siteValue: '',
    limitOfIndemnity: '',
    limitCalculation: '',
    developmentGainDetails: '',
    planningConsent: 'no',
    planningSubmissionDate: '',
    preApplicationConsultation: '',
    planningSiteHistory: '',
    neighbourlyMatters: '',
    noComplaintsConfirmation: '',
    approachesToOwners: '',
    negotiationIntentions: '',
    pastDisputes: '',
    completionTimescale: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File | null}>({
    rightOfLightReport: null,
    efzAnalysis: null,
    cutBackAnalysis: null,
    planningPermission: null,
    approvedLayoutPlans: null,
    planningOfficerReport: null,
    objectionLetters: null
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
              Rights to Light Application
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatedSection direction="up">
          <div className="bg-white rounded-lg shadow-card p-8">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-100 rounded-full mr-3">
                  <Shield className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900">Rights to Light Application Form</h2>
                  <p className="text-neutral-500 mt-1">
                    Please complete all required information for your Rights to Light insurance application
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                  Basic Information
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="insuredParties" className="block text-sm font-medium text-neutral-700">
                      Full name of the insured and/or interested parties (eg mortgagees) <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="insuredParties"
                      name="insuredParties"
                      value={formData.insuredParties}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="siteValue" className="block text-sm font-medium text-neutral-700">
                      Fully developed value of the site <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-neutral-500 sm:text-sm">£</span>
                      </div>
                      <input
                        type="text"
                        id="siteValue"
                        name="siteValue"
                        value={formData.siteValue}
                        onChange={handleInputChange}
                        required
                        className="pl-7 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                  </div>

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
                    <label htmlFor="limitCalculation" className="block text-sm font-medium text-neutral-700">
                      How was the Limit of Indemnity calculated? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="limitCalculation"
                      name="limitCalculation"
                      value={formData.limitCalculation}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="completionTimescale" className="block text-sm font-medium text-neutral-700">
                      Please provide details of the proposed time-scale for completion of the development: <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="completionTimescale"
                      name="completionTimescale"
                      value={formData.completionTimescale}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
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
                      Right of Light surveyor's report <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      {!uploadedFiles.rightOfLightReport ? (
                        <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <Upload className="mx-auto h-12 w-12 text-neutral-400" />
                            <div className="flex text-sm text-neutral-600">
                              <label className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                                <span>Upload a file</span>
                                <input
                                  type="file"
                                  className="sr-only"
                                  onChange={(e) => handleFileChange(e, 'rightOfLightReport')}
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
                              {uploadedFiles.rightOfLightReport.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {(uploadedFiles.rightOfLightReport.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile('rightOfLightReport')}
                            className="ml-4 text-sm font-medium text-red-600 hover:text-red-500"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Before & After EFZs <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      {!uploadedFiles.efzAnalysis ? (
                        <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <Upload className="mx-auto h-12 w-12 text-neutral-400" />
                            <div className="flex text-sm text-neutral-600">
                              <label className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                                <span>Upload a file</span>
                                <input
                                  type="file"
                                  className="sr-only"
                                  onChange={(e) => handleFileChange(e, 'efzAnalysis')}
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
                              {uploadedFiles.efzAnalysis.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {(uploadedFiles.efzAnalysis.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile('efzAnalysis')}
                            className="ml-4 text-sm font-medium text-red-600 hover:text-red-500"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Cut Back Analysis <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      {!uploadedFiles.cutBackAnalysis ? (
                        <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <Upload className="mx-auto h-12 w-12 text-neutral-400" />
                            <div className="flex text-sm text-neutral-600">
                              <label className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                                <span>Upload a file</span>
                                <input
                                  type="file"
                                  className="sr-only"
                                  onChange={(e) => handleFileChange(e, 'cutBackAnalysis')}
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
                              {uploadedFiles.cutBackAnalysis.name}
                            </p>
                            <p className="text-xs text-neutral-500">
                              {(uploadedFiles.cutBackAnalysis.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile('cutBackAnalysis')}
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

              {/* Development Details Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                  Development Details
                </h3>
                <div>
                  <label htmlFor="developmentGainDetails" className="block text-sm font-medium text-neutral-700">
                    Details of the development gain that can be attributed to the cut-back scheme identified by the Right of Light Report <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="developmentGainDetails"
                    name="developmentGainDetails"
                    value={formData.developmentGainDetails}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* Planning Details Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                  Planning Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Does the scheme have planning consent? <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="planningConsent"
                          value="yes"
                          checked={formData.planningConsent === 'yes'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="planningConsent"
                          value="no"
                          checked={formData.planningConsent === 'no'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>

                  {formData.planningConsent === 'yes' && (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700">
                          Planning Permission and Layout Plans <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          {!uploadedFiles.planningPermission ? (
                            <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <Upload className="mx-auto h-12 w-12 text-neutral-400" />
                                <div className="flex text-sm text-neutral-600">
                                  <label className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                                    <span>Upload a file</span>
                                    <input
                                      type="file"
                                      className="sr-only"
                                      onChange={(e) => handleFileChange(e, 'planningPermission')}
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
                                  {uploadedFiles.planningPermission.name}
                                </p>
                                <p className="text-xs text-neutral-500">
                                  {(uploadedFiles.planningPermission.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile('planningPermission')}
                                className="ml-4 text-sm font-medium text-red-600 hover:text-red-500"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-700">
                          Planning Officer's Report <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          {!uploadedFiles.planningOfficerReport ? (
                            <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <Upload className="mx-auto h-12 w-12 text-neutral-400" />
                                <div className="flex text-sm text-neutral-600">
                                  <label className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                                    <span>Upload a file</span>
                                    <input
                                      type="file"
                                      className="sr-only"
                                      onChange={(e) => handleFileChange(e, 'planningOfficerReport')}
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
                                  {uploadedFiles.planningOfficerReport.name}
                                </p>
                                <p className="text-xs text-neutral-500">
                                  {(uploadedFiles.planningOfficerReport.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile('planningOfficerReport')}
                                className="ml-4 text-sm font-medium text-red-600 hover:text-red-500"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-700">
                          Letters of Objection <span className="text-red-500">*</span>
                        </label>
                        <div className="mt-1">
                          {!uploadedFiles.objectionLetters ? (
                            <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <Upload className="mx-auto h-12 w-12 text-neutral-400" />
                                <div className="flex text-sm text-neutral-600">
                                  <label className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                                    <span>Upload a file</span>
                                    <input
                                      type="file"
                                      className="sr-only"
                                      onChange={(e) => handleFileChange(e, 'objectionLetters')}
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
                                  {uploadedFiles.objectionLetters.name}
                                </p>
                                <p className="text-xs text-neutral-500">
                                  {(uploadedFiles.objectionLetters.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile('objectionLetters')}
                                className="ml-4 text-sm font-medium text-red-600 hover:text-red-500"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {formData.planningConsent === 'no' && (
                    <div>
                      <label htmlFor="planningSubmissionDate" className="block text-sm font-medium text-neutral-700">
                        When do you expect to submit your application? <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="planningSubmissionDate"
                        name="planningSubmissionDate"
                        value={formData.planningSubmissionDate}
                        onChange={handleInputChange}
                        required
                        className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="preApplicationConsultation" className="block text-sm font-medium text-neutral-700">
                      Has any pre-application consultation been undertaken? If so, please provide details: <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="preApplicationConsultation"
                      name="preApplicationConsultation"
                      value={formData.preApplicationConsultation}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="planningSiteHistory" className="block text-sm font-medium text-neutral-700">
                      Please supply a planning history of the site if available:
                    </label>
                    <textarea
                      id="planningSiteHistory"
                      name="planningSiteHistory"
                      value={formData.planningSiteHistory}
                      onChange={handleInputChange}
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="neighbourlyMatters" className="block text-sm font-medium text-neutral-700">
                      Do you need to discuss neighbourly matters with any of the properties identified in the report as affected by Rights of Light? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="neighbourlyMatters"
                      name="neighbourlyMatters"
                      value={formData.neighbourlyMatters}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Please provide details of party wall, scaffolding, oversail or other matters"
                    />
                  </div>
                </div>
              </div>

              {/* Adjoining Owners Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                  Adjoining Owners
                </h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="noComplaintsConfirmation" className="block text-sm font-medium text-neutral-700">
                      Confirmation that, to date, the adjoining owners have not complained about infringement of their rights <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="noComplaintsConfirmation"
                      name="noComplaintsConfirmation"
                      value={formData.noComplaintsConfirmation}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="approachesToOwners" className="block text-sm font-medium text-neutral-700">
                      Have any approaches been made to surrounding owners? <span className="text-re d-500">*</span>
                    </label>
                    <textarea
                      id="approachesToOwners"
                      name="approachesToOwners"
                      value={formData.approachesToOwners}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="negotiationIntentions" className="block text-sm font-medium text-neutral-700">
                      Do you wish/intend to negotiate a release of Rights of Light with specific surrounding property owners? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="negotiationIntentions"
                      name="negotiationIntentions"
                      value={formData.negotiationIntentions}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="pastDisputes" className="block text-sm font-medium text-neutral-700">
                      Please provide details of any past disputes with adjoining property owners: <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="pastDisputes"
                      name="pastDisputes"
                      value={formData.pastDisputes}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
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

export default RightsToLight;