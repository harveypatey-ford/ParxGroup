import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Save, Upload, File, Check, X, Info, Shield, FileCheck, Building, Users2, Clock, PoundSterling, Landmark, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import StatusDisclosure from '../components/StatusDisclosure';

function CreatePBSAApplication() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Overview
    projectName: '',
    portfolioOwnerName: '',
    managingAgent: '',
    lenderName: '',
    insuredParty: '',
    insurancePeriod: '',
    annualRentalIncome: '',
    inceptionDate: '',
    projectDescription: '',

    // Property Information
    propertyCount: '',
    bedCount: '',
    currentUse: '',
    intendedUse: '',
    propertyStatus: '',
    planningPermission: 'no',
    developmentStartDate: '',
    buildPeriod: '',
    singleTransferDate: 'no',
    timeToFullOccupation: '',
    coverStage: '',
    constructionContracts: '',
    constructionBonds: '',
    timeOverrunBuffers: '',
    refurbPeriod: '',
    tenantMoveInTime: '',
    existingCoverStage: '',
    propertyAdditionalInfo: '',

    // Type of Tenants
    ultimateResidents: '',
    tenancyLength: '',
    leavingReasons: '',
    tenantRemovalTime: '',
    tenantAdditionalInfo: '',

    // Voids
    averageVoidPeriod: '',
    refurbBetweenTenants: '',
    refurbTime: '',
    postRefurbVoidPeriod: '',
    voidAdditionalInfo: '',

    // Rental Payments
    rentDetermination: '',
    rentComparison: '',
    totalIncomePerAnnum: '',
    coreRentPerAnnum: '',
    coreRentPercentage: '',
    rentToBeInsured: '',
    anticipatedOccupancy: '',
    incomeSource: '',
    inflationLinked: 'no',
    inflationIndex: '',
    inflationInsured: 'no',
    inflationCap: '',
    inflationCollar: '',
    lenderIncomePercentage: '',
    ownerIncomePercentage: '',
    maIncomePercentage: '',
    rentalCollection: '',
    rentalAdditionalInfo: '',

    // Debt Service Reserve
    rentReservePeriod: '',

    // Portfolio Management
    maName: '',
    maWebsite: '',
    parentCompanyBacked: 'no',
    leaseLength: '',
    managementPersonnel: '',
    performanceHistory: '',
    managementVoidPeriods: '',
    managementAdditionalInfo: '',

    // University
    universityName: '',
    availableBeds: '',
    demandDetails: '',

    // Portfolio Owner
    investorName: '',
    investorWebsite: '',
    investorExperience: '',
    assetOwnership: '',
    refinancePlans: 'no',
    exitStrategy: '',
    ownerAdditionalInfo: '',

    // Lender
    lenderFullName: '',
    lenderWebsite: '',
    loanAmount: '',
    loanPeriod: '',
    interestRate: '',
    totalRepayment: '',
    loanPurpose: '',
    repaymentType: '',
    requiredOccupancy: '',
    earlySettlement: '',
    dscr: '',
    lenderAdditionalInfo: ''
  });

  const [uploadedFiles, setUploadedFiles] = useState<{[key: string]: File | null}>({
    propertyList: null,
    financialsBreakdown: null,
    structureChart: null,
    businessPlan: null,
    sampleLease: null,
    demandReport: null,
    planningDocuments: null
  });

  const formSections = [
    {
      id: 'overview',
      title: "Overview",
      description: "Basic information about the project and insurance requirements",
      icon: <Shield className="h-6 w-6" />,
      fields: [
        { name: "projectName", label: "Project Name", type: "text", required: true },
        { name: "portfolioOwnerName", label: "Portfolio Owner Name", type: "text", required: true },
        { name: "managingAgent", label: "Managing Agent", type: "text", required: true },
        { name: "lenderName", label: "Lender Name", type: "text", required: true },
        { name: "insuredParty", label: "Who is to be the Insured party?", type: "text", required: true },
        { name: "insurancePeriod", label: "Period of insurance required (years)", type: "number", required: true },
        { name: "annualRentalIncome", label: "Annual Rental Income (Core Rent)", type: "text", required: true },
        { name: "inceptionDate", label: "When will the insurance policy incept?", type: "date", required: true },
        { name: "projectDescription", label: "Brief description of the project", type: "textarea", required: true }
      ]
    },
    {
      id: 'propertyInformation',
      title: "Property Information",
      description: "Details about the properties in the portfolio",
      icon: <Building className="h-6 w-6" />,
      fields: [
        { name: "propertyCount", label: "Number of Properties", type: "number", required: true },
        { name: "bedCount", label: "Number of Beds", type: "number", required: true },
        { name: "currentUse", label: "Current use", type: "text", required: true },
        { name: "intendedUse", label: "Intended use", type: "text", required: true },
        { name: "propertyStatus", label: "Property status?", type: "radio", options: ["development required", "existing stock"], required: true },
        { name: "planningPermission", label: "Has planning permission already been obtained?", type: "radio", options: ["yes", "no"], required: true, conditionalOn: { field: "propertyStatus", value: "development required" } },
        { name: "developmentStartDate", label: "When will development commence?", type: "date", required: true, conditionalOn: { field: "propertyStatus", value: "development required" } },
        { name: "buildPeriod", label: "How long is the expected build period?", type: "text", required: true, conditionalOn: { field: "propertyStatus", value: "development required" } },
        { name: "singleTransferDate", label: "Will the properties be transferred on a single date?", type: "radio", options: ["yes", "no"], required: true, conditionalOn: { field: "propertyStatus", value: "development required" } },
        { name: "timeToFullOccupation", label: "How long following completion would it take for the properties to reach full occupation?", type: "text", required: true, conditionalOn: { field: "propertyStatus", value: "development required" } },
        { name: "coverStage", label: "At what stage is cover required?", type: "text", required: true, conditionalOn: { field: "propertyStatus", value: "development required" } },
        { name: "constructionContracts", label: "Details of construction contracts", type: "textarea", required: true, conditionalOn: { field: "propertyStatus", value: "development required" } },
        { name: "constructionBonds", label: "Details of construction bonds", type: "textarea", required: true, conditionalOn: { field: "propertyStatus", value: "development required" } },
        { name: "timeOverrunBuffers", label: "Details of time and cost overrun buffers", type: "textarea", required: true, conditionalOn: { field: "propertyStatus", value: "development required" } },
        { name: "refurbPeriod", label: "How long is the expected refurb period?", type: "text", required: true, conditionalOn: { field: "propertyStatus", value: "existing stock" } },
        { name: "tenantMoveInTime", label: "When will tenants be able to move in after completion of refurbishment?", type: "text", required: true, conditionalOn: { field: "propertyStatus", value: "existing stock" } },
        { name: "existingCoverStage", label: "At what stage is cover required?", type: "text", required: true, conditionalOn: { field: "propertyStatus", value: "existing stock" } },
        { name: "propertyAdditionalInfo", label: "Additional information", type: "textarea", required: false }
      ]
    },
    {
      id: 'tenants',
      title: "Type of Tenants",
      description: "Information about the tenants and occupancy patterns",
      icon: <Users2 className="h-6 w-6" />,
      fields: [
        { name: "ultimateResidents", label: "Who will be the ultimate residents?", type: "text", required: true },
        { name: "tenancyLength", label: "What is the average length of tenancy?", type: "text", required: true },
        { name: "leavingReasons", label: "What is the common reason(s) for a tenant leaving?", type: "textarea", required: true },
        { name: "tenantRemovalTime", label: "How long does it take to remove a tenant for non-payment of rent?", type: "text", required: true },
        { name: "tenantAdditionalInfo", label: "Additional information", type: "textarea", required: false }
      ]
    },
    {
      id: 'voids',
      title: "Voids",
      description: "Information about void periods and refurbishment",
      icon: <Clock className="h-6 w-6" />,
      fields: [
        { name: "averageVoidPeriod", label: "What is the average void period?", type: "text", required: true },
        { name: "refurbBetweenTenants", label: "What refurbishment is required between tenants?", type: "textarea", required: true },
        { name: "refurbTime", label: "How long does refurbishment take to complete?", type: "text", required: true },
        { name: "postRefurbVoidPeriod", label: "What is the average void period following refurbishment?", type: "text", required: true },
        { name: "voidAdditionalInfo", label: "Additional information", type: "textarea", required: false }
      ]
    },
    {
      id: 'rentalPayments',
      title: "Rental Payments",
      description: "Details about rental income and payment structures",
      icon: <PoundSterling className="h-6 w-6" />,
      fields: [
        { name: "rentDetermination", label: "How was the rent level determined?", type: "textarea", required: true },
        { name: "rentComparison", label: "How do these rents compare to comparable rents in the area?", type: "textarea", required: true },
        { name: "totalIncomePerAnnum", label: "Total expected income per annum", type: "text", required: true },
        { name: "coreRentPerAnnum", label: "Expected core rent per annum (i.e. net of administration and management costs)", type: "text", required: true },
        { name: "coreRentPercentage", label: "What percentage of total income are the core rents?", type: "text", required: true },
        { name: "rentToBeInsured", label: "Annual rent to be insured (Limit of Indemnity)", type: "text", required: true },
        { name: "anticipatedOccupancy", label: "Anticipated occupancy rate", type: "text", required: true },
        { name: "incomeSource", label: "Income received from?", type: "text", required: true },
        { name: "inflationLinked", label: "Are the rents inflation linked?", type: "radio", options: ["yes", "no"], required: true },
        { name: "inflationIndex", label: "What inflation index is stated within the lease?", type: "text", required: true, conditionalOn: { field: "inflationLinked", value: "yes" } },
        { name: "inflationInsured", label: "Did you want the inflation index increases insured?", type: "radio", options: ["yes", "no"], required: true, conditionalOn: { field: "inflationLinked", value: "yes" } },
        { name: "inflationCap", label: "Inflation index cap (%)", type: "text", required: true, conditionalOn: { field: "inflationLinked", value: "yes" } },
        { name: "inflationCollar", label: "Inflation index collar (%)", type: "text", required: true, conditionalOn: { field: "inflationLinked", value: "yes" } },
        { name: "lenderIncomePercentage", label: "Portion of income expected by Lender (%)", type: "text", required: true },
        { name: "ownerIncomePercentage", label: "Portion of income expected by Owner (%)", type: "text", required: true },
        { name: "maIncomePercentage", label: "Portion of rental income expected by the Managing Agent (%)", type: "text", required: true },
        { name: "rentalCollection", label: "How will the rental payments be collected and distributed i.e. client account segregated from own funds?", type: "textarea", required: true },
        { name: "rentalAdditionalInfo", label: "Additional information", type: "textarea", required: false }
      ]
    },
    {
      id: 'debtServiceReserve',
      title: "Debt Service Reserve/Excess",
      description: "Information about financial reserves for debt service",
      icon: <Landmark className="h-6 w-6" />,
      fields: [
        { name: "rentReservePeriod", label: "What period of rent will be reserved to cover short term voids?", type: "select", options: ["6 months", "12 months", "Other"], required: true }
      ]
    },
    {
      id: 'portfolioManagement',
      title: "Portfolio Management",
      description: "Details about the management structure and experience",
      icon: <Briefcase className="h-6 w-6" />,
      fields: [
        { name: "maName", label: "Name of the Managing Agent", type: "text", required: true },
        { name: "maWebsite", label: "Website", type: "text", required: true },
        { name: "parentCompanyBacked", label: "Will they be backed by a Parent company?", type: "radio", options: ["yes", "no"], required: true },
        { name: "leaseLength", label: "Length of Lease", type: "text", required: true },
        { name: "managementPersonnel", label: "Summary of the management personnel", type: "textarea", required: true },
        { name: "performanceHistory", label: "Summary of performance history", type: "textarea", required: true },
        { name: "managementVoidPeriods", label: "Average void periods", type: "text", required: true },
        { name: "managementAdditionalInfo", label: "Additional information", type: "textarea", required: false }
      ]
    },
    {
      id: 'university',
      title: "University",
      description: "Information about university capacity and demand",
      icon: <Building className="h-6 w-6" />,
      fields: [
        { name: "universityName", label: "Name of University", type: "text", required: true },
        { name: "availableBeds", label: "How many beds are currently available?", type: "number", required: true },
        { name: "demandDetails", label: "What is the demand?", type: "textarea", required: true }
      ]
    },
    {
      id: 'portfolioOwner',
      title: "Portfolio Owner",
      description: "Information about the portfolio ownership structure",
      icon: <Users2 className="h-6 w-6" />,
      fields: [
        { name: "investorName", label: "Name of the Investor?", type: "text", required: true },
        { name: "investorWebsite", label: "Website", type: "text", required: true },
        { name: "investorExperience", label: "What experience does the Investor have in this market?", type: "textarea", required: true },
        { name: "assetOwnership", label: "Who owns the asset at the end of loan/lease?", type: "text", required: true },
        { name: "refinancePlans", label: "Are there any plans to refinance mid-term?", type: "radio", options: ["yes", "no"], required: true },
        { name: "exitStrategy", label: "What is the Exit strategy?", type: "textarea", required: true },
        { name: "ownerAdditionalInfo", label: "Additional information", type: "textarea", required: false }
      ]
    },
    {
      id: 'lender',
      title: "Lender",
      description: "Details about the financing structure",
      icon: <Landmark className="h-6 w-6" />,
      fields: [
        { name: "lenderFullName", label: "Name of Lender", type: "text", required: true },
        { name: "lenderWebsite", label: "Website", type: "text", required: true },
        { name: "loanAmount", label: "Loan amount", type: "text", required: true },
        { name: "loanPeriod", label: "Period of loan", type: "text", required: true },
        { name: "interestRate", label: "Interest rate", type: "text", required: true },
        { name: "totalRepayment", label: "Total repayment", type: "text", required: true },
        { name: "loanPurpose", label: "Loan required for? i.e. acquisition, development refurb", type: "text", required: true },
        { name: "repaymentType", label: "Repayment type? i.e. capital and interest / interest only / any balloon payment?", type: "textarea", required: true },
        { name: "requiredOccupancy", label: "What level of occupancy is required in order to repay the loan?", type: "text", required: true },
        { name: "earlySettlement", label: "Any early settlement/assignment conditions?", type: "textarea", required: true },
        { name: "dscr", label: "What is the lender's debt service coverage ratio (DSCR) for the Borrower? (if applicable)", type: "text", required: false },
        { name: "lenderAdditionalInfo", label: "Additional information", type: "textarea", required: false }
      ]
    },
    {
      id: 'documents',
      title: "Required Documents",
      description: "Upload all necessary documentation to support your application",
      icon: <FileCheck className="h-6 w-6" />,
      isFileUpload: true,
      fileUploads: [
        { name: "propertyList", label: "Property List", required: true },
        { name: "financialsBreakdown", label: "Financials Breakdown", required: true },
        { name: "structureChart", label: "Structure Chart", required: true },
        { name: "businessPlan", label: "Business Plan", required: true },
        { name: "sampleLease", label: "Sample Lease", required: true },
        { name: "demandReport", label: "Third Party Demand Report", required: false },
        { name: "planningDocuments", label: "Planning Permissions", required: false, conditionalOn: { field: "propertyStatus", value: "development required" } }
      ]
    }
  ];

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    } else {
      navigate('/dashboard');
    }
  };

  const handleContinue = () => {
    if (currentStep < formSections.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    } else {
      console.log('Form submitted:', formData);
      console.log('Uploaded files:', uploadedFiles);
      navigate('/dashboard');
    }
  };

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

  const isFieldVisible = (field: any) => {
    if (!field.conditionalOn) return true;
    return formData[field.conditionalOn.field as keyof typeof formData] === field.conditionalOn.value;
  };

  const renderField = (field: any) => {
    if (!isFieldVisible(field)) return null;

    const fieldValue = formData[field.name as keyof typeof formData] as string;

    switch (field.type) {
      case 'text':
      case 'number':
      case 'date':
        return (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name} className="form-label">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={fieldValue}
              onChange={handleInputChange}
              required={field.required}
              className="form-input"
            />
          </div>
        );

      case 'textarea':
        return (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name} className="form-label">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <textarea
              id={field.name}
              name={field.name}
              value={fieldValue}
              onChange={handleInputChange}
              required={field.required}
              rows={4}
              className="form-input"
            />
          </div>
        );

      case 'select':
        return (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name} className="form-label">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <select
              id={field.name}
              name={field.name}
              value={fieldValue}
              onChange={handleInputChange}
              required={field.required}
              className="form-select"
            >
              <option value="">Please select</option>
              {field.options?.map((option: string) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        );

      case 'radio':
        return (
          <div key={field.name} className="form-group">
            <label className="form-label">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <div className="mt-2 space-x-6">
              {field.options?.map((option: string) => (
                <label key={option} className="inline-flex items-center">
                  <input
                    type="radio"
                    name={field.name}
                    value={option}
                    checked={fieldValue === option}
                    onChange={handleInputChange}
                    required={field.required}
                    className="form-radio"
                  />
                  <span className="ml-2 text-sm text-neutral-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderFileUpload = (fileUpload: any) => {
    if (fileUpload.conditionalOn && formData[fileUpload.conditionalOn.field as keyof typeof formData] !== fileUpload.conditionalOn.value) {
      return null;
    }

    const file = uploadedFiles[fileUpload.name as keyof typeof uploadedFiles];
    
    return (
      <div key={fileUpload.name} className="mb-8">
        <div className="flex justify-between items-start mb-2">
          <label className="block text-sm font-medium text-neutral-700">
            {fileUpload.label} {fileUpload.required && <span className="text-red-500">*</span>}
          </label>
          {file && (
            <button
              type="button"
              onClick={() => removeFile(fileUpload.name)}
              className="text-red-500 hover:text-red-700 text-sm flex items-center transition-colors"
            >
              <X className="h-4 w-4 mr-1" />
              Remove
            </button>
          )}
        </div>
        
        {!file ? (
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md bg-neutral-50 hover:bg-neutral-100 transition-colors">
            <div className="space-y-1 text-center">
              <Upload className="mx-auto h-12 w-12 text-primary-400" />
              <div className="flex text-sm text-neutral-600">
                <label
                  htmlFor={`file-upload-${fileUpload.name}`}
                  className="relative cursor-pointer bg-neutral-50 rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                >
                  <span>Upload a file</span>
                  <input
                    id={`file-upload-${fileUpload.name}`}
                    name={fileUpload.name}
                    type="file"
                    className="sr-only"
                    onChange={(e) => handleFileChange(e, fileUpload.name)}
                    required={fileUpload.required}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-neutral-500">
                PDF, DOC, DOCX, XLS, XLSX up to 10MB
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-1 flex items-center p-4 border border-neutral-300 rounded-md bg-neutral-50">
            <File className="h-8 w-8 text-primary-500 mr-3" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-neutral-900 truncate">{file.name}</p>
              <p className="text-xs text-neutral-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
            <div className="flex-shrink-0">
              <Check className="h-5 w-5 text-primary-500" />
            </div>
          </div>
        )}
      </div>
    );
  };

  const currentSection = formSections[currentStep - 1];

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
              Student Accommodation (PBSA) Application
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
                  {currentSection.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-neutral-900">{currentSection.title}</h2>
                  <p className="text-neutral-500 mt-1">{currentSection.description}</p>
                </div>
              </div>
              
              {/* Progress bar */}
              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-neutral-700">
                    Step {currentStep} of {formSections.length}
                  </span>
                  <span className="text-sm font-medium text-primary-600">
                    {Math.round((currentStep / formSections.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${(currentStep / formSections.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleContinue(); }} className="space-y-8">
              {currentSection.isFileUpload ? (
                <div className="space-y-2">
                  {currentSection.fileUploads.map((fileUpload: any) => renderFileUpload(fileUpload))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {currentSection.fields.map(field => renderField(field))}
                </div>
              )}

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
                    {currentStep === formSections.length ? 'Submit Application' : 'Continue'}
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

export default CreatePBSAApplication;