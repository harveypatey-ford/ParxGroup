import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Save, Shield, Upload, File, Check, X, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import StatusDisclosure from '../components/StatusDisclosure';

function EnvironmentalInsurance() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Basic Information
    insuredName: '',
    address: '',
    limitOfIndemnity: '',
    surfaceCover: 'no',
    area: '',
    useClass: '',
    currentUse: '',
    redevelopment: '',

    // Contamination Questionnaire
    onContaminatedRegister: 'no',
    onContaminatedRegisterDetails: '',
    planningConditions: 'no',
    planningConditionsDetails: '',
    storageTanks: 'no',
    storageTanksDetails: '',
    remediationNotice: 'no',
    remediationNoticeDetails: '',
    regulatorContact: 'no',
    regulatorContactDetails: '',
    titleDeedsContamination: 'no',
    titleDeedsContaminationDetails: '',
    undisclosedContamination: 'no',
    undisclosedContaminationDetails: '',
    environmentalPermit: 'no',
    environmentalPermitDetails: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBack = () => {
    navigate('/dashboard');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
              Environmental Insurance Application
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
                  <h2 className="text-2xl font-bold text-neutral-900">Environmental Insurance Application</h2>
                  <p className="text-neutral-500 mt-1">
                    Please complete all required information for your Environmental Insurance application
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="insuredName" className="block text-sm font-medium text-neutral-700">
                      Insured Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="insuredName"
                      name="insuredName"
                      value={formData.insuredName}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-neutral-700">
                      Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
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
                    <label className="block text-sm font-medium text-neutral-700">
                      Surface Cover <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-neutral-500 mb-2">Is the entire Site laid to hardstanding?</p>
                    <div className="mt-2 space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="surfaceCover"
                          value="yes"
                          checked={formData.surfaceCover === 'yes'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="surfaceCover"
                          value="no"
                          checked={formData.surfaceCover === 'no'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-neutral-700">
                      Area (approx. acres) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="area"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="useClass" className="block text-sm font-medium text-neutral-700">
                      Use Class <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="useClass"
                      name="useClass"
                      value={formData.useClass}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="currentUse" className="block text-sm font-medium text-neutral-700">
                      Current Use <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-neutral-500 mb-2">Please provide a specific description of intended business activities at the Property</p>
                    <textarea
                      id="currentUse"
                      name="currentUse"
                      value={formData.currentUse}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div className="col-span-2">
                    <label htmlFor="redevelopment" className="block text-sm font-medium text-neutral-700">
                      Redevelopment / Change-of-Use <span className="text-red-500">*</span>
                    </label>
                    <p className="text-sm text-neutral-500 mb-2">Please provide a specific description (inc. Use Class), and attach relevant plans/permissions</p>
                    <textarea
                      id="redevelopment"
                      name="redevelopment"
                      value={formData.redevelopment}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>
              </div>

              {/* Contamination Questionnaire Section */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                  Contamination Questionnaire
                </h3>
                <div className="space-y-6">
                  {/* Question 1 */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Is the Property, or any land in the vicinity, on the Local Authority Contaminated Land register? <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="onContaminatedRegister"
                          value="yes"
                          checked={formData.onContaminatedRegister === 'yes'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="onContaminatedRegister"
                          value="no"
                          checked={formData.onContaminatedRegister === 'no'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                    {formData.onContaminatedRegister === 'yes' && (
                      <textarea
                        name="onContaminatedRegisterDetails"
                        value={formData.onContaminatedRegisterDetails}
                        onChange={handleInputChange}
                        placeholder="Please provide details"
                        required
                        rows={3}
                        className="mt-2 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    )}
                  </div>

                  {/* Question 2 */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Have any planning conditions been imposed on the Property relating to contaminated land? <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="planningConditions"
                          value="yes"
                          checked={formData.planningConditions === 'yes'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="planningConditions"
                          value="no"
                          checked={formData.planningConditions === 'no'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                    {formData.planningConditions === 'yes' && (
                      <textarea
                        name="planningConditionsDetails"
                        value={formData.planningConditionsDetails}
                        onChange={handleInputChange}
                        placeholder="Please provide details"
                        required
                        rows={3}
                        className="mt-2 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    )}
                  </div>

                  {/* Question 3 */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Are there any known (current or former) fuel, oil or chemical storage tanks at the property? <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="storageTanks"
                          value="yes"
                          checked={formData.storageTanks === 'yes'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="storageTanks"
                          value="no"
                          checked={formData.storageTanks === 'no'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                    {formData.storageTanks === 'yes' && (
                      <textarea
                        name="storageTanksDetails"
                        value={formData.storageTanksDetails}
                        onChange={handleInputChange}
                        placeholder="Please provide details"
                        required
                        rows={3}
                        className="mt-2 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    )}
                  </div>

                  {/* Question 4 */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Has a Remediation Notice been served on the Property, or any other land in the vicinity? <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="remediationNotice"
                          value="yes"
                          checked={formData.remediationNotice === 'yes'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="remediationNotice"
                          value="no"
                          checked={formData.remediationNotice === 'no'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                    {formData.remediationNotice === 'yes' && (
                      <textarea
                        name="remediationNoticeDetails"
                        value={formData.remediationNoticeDetails}
                        onChange={handleInputChange}
                        placeholder="Please provide details"
                        required
                        rows={3}
                        className="mt-2 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    )}
                  </div>

                  {/* Question 5 */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      To the best of the Proposer's knowledge, has there been any contact with any regulator (e.g. Local Authority, Environment Agency) relating to contaminated land issues or pollution incidents? <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="regulatorContact"
                          value="yes"
                          checked={formData.regulatorContact === 'yes'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="regulatorContact"
                          value="no"
                          checked={formData.regulatorContact === 'no'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                    {formData.regulatorContact === 'yes' && (
                      <textarea
                        name="regulatorContactDetails"
                        value={formData.regulatorContactDetails}
                        onChange={handleInputChange}
                        placeholder="Please provide details"
                        required
                        rows={3}
                        className="mt-2 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    )}
                  </div>

                  {/* Question 6 */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Are there any entries in the title deeds to the Property indicating that it was previously used for any purpose which could have resulted in contamination? <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="titleDeedsContamination"
                          value="yes"
                          checked={formData.titleDeedsContamination === 'yes'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="titleDeedsContamination"
                          value="no"
                          checked={formData.titleDeedsContamination === 'no'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                    {formData.titleDeedsContamination === 'yes' && (
                      <textarea
                        name="titleDeedsContaminationDetails"
                        value={formData.titleDeedsContaminationDetails}
                        onChange={handleInputChange}
                        placeholder="Please provide details"
                        required
                        rows={3}
                        className="mt-2 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    )}
                  </div>

                  {/* Question 7 */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Does the Proposer have any knowledge of any contamination which has not already been disclosed, or is aware of any circumstances that may reasonably be expected to give rise to a claim against the policy? <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="undisclosedContamination"
                          value="yes"
                          checked={formData.undisclosedContamination === 'yes'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="undisclosedContamination"
                          value="no"
                          checked={formData.undisclosedContamination === 'no'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                    {formData.undisclosedContamination === 'yes' && (
                      <textarea
                        name="undisclosedContaminationDetails"
                        value={formData.undisclosedContaminationDetails}
                        onChange={handleInputChange}
                        placeholder="Please provide details"
                        required
                        rows={3}
                        className="mt-2 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    )}
                  </div>

                  {/* Question 8 */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700">
                      Is an environmental permit required for the current/proposed use? <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2 space-x-6">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="environmentalPermit"
                          value="yes"
                          checked={formData.environmentalPermit === 'yes'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="environmentalPermit"
                          value="no"
                          checked={formData.environmentalPermit === 'no'}
                          onChange={handleInputChange}
                          className="form-radio"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                    {formData.environmentalPermit === 'yes' && (
                      <textarea
                        name="environmentalPermitDetails"
                        value={formData.environmentalPermitDetails}
                        onChange={handleInputChange}
                        placeholder="Please provide details"
                        required
                        rows={3}
                        className="mt-2 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      />
                    )}
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

export default EnvironmentalInsurance;