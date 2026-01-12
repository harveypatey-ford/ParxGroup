import React, { useState } from 'react';
import { Shield, Users2, Phone, Mail, MapPin, ChevronRight, Award, Briefcase, Building, Star, Menu, X, Lock, FileText, Eye, EyeOff, Clock, BarChart4, PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import { useAuth } from '../contexts/AuthContext';

// Mock data for demonstration
const mockCasefiles = [
  { id: 1, parxRef: 'PRX-2025-001', clientRef: 'CR-12345', projectName: 'Riverside Development', policyType: 'PIP', status: 'Active', lastUpdated: '2025-03-15', formType: 'pip' },
  { id: 2, parxRef: 'PRX-2025-002', clientRef: 'CR-12346', projectName: 'City Center Acquisition', policyType: 'Rights to Light', status: 'Pending', lastUpdated: '2025-03-12', formType: 'rights-to-light' },
  { id: 3, parxRef: 'PRX-2025-003', clientRef: 'CR-12347', projectName: 'Oakwood Portfolio', policyType: 'PIP', status: 'Active', lastUpdated: '2025-03-10', formType: 'pip' }
];

function ChangePasswordModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { changePassword } = useAuth();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    try {
      if (newPassword !== confirmPassword) {
        throw new Error('New passwords do not match');
      }

      if (newPassword.length < 8) {
        throw new Error('Password must be at least 8 characters long');
      }

      await changePassword(currentPassword, newPassword);
      setSuccess(true);
      
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');

      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to change password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">Change Password</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md border border-red-200">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md border border-green-200">
            Password changed successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-neutral-700">
              Current Password
            </label>
            <div className="mt-1 relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="block w-full pr-10 border-neutral-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showCurrentPassword ? (
                  <EyeOff className="h-5 w-5 text-neutral-400" />
                ) : (
                  <Eye className="h-5 w-5 text-neutral-400" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-neutral-700">
              New Password
            </label>
            <div className="mt-1 relative">
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="block w-full pr-10 border-neutral-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showNewPassword ? (
                  <EyeOff className="h-5 w-5 text-neutral-400" />
                ) : (
                  <Eye className="h-5 w-5 text-neutral-400" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-neutral-700">
              Confirm New Password
            </label>
            <div className="mt-1 relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full pr-10 border-neutral-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-neutral-400" />
                ) : (
                  <Eye className="h-5 w-5 text-neutral-400" />
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded-md disabled:opacity-50"
            >
              {loading ? 'Changing...' : 'Change Password'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Dashboard() {
  const { user, signOut } = useAuth();
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  // Filter casefiles based on search term
  const filteredCasefiles = mockCasefiles.filter(casefile => 
    casefile.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    casefile.parxRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
    casefile.clientRef.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current casefiles for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCasefiles = filteredCasefiles.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate statistics
  const statistics = {
    totalCases: mockCasefiles.length,
    activeCases: mockCasefiles.filter(c => c.status === 'Active').length,
    pendingCases: mockCasefiles.filter(c => c.status === 'Pending').length
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-soft sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-neutral-900">Client Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsChangePasswordOpen(true)}
                className="btn btn-secondary"
              >
                <Lock className="h-4 w-4 mr-2" />
                Change Password
              </button>
              <button 
                onClick={signOut}
                className="btn btn-primary"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <AnimatedSection direction="up">
          <div className="bg-white rounded-lg shadow-card p-6 mb-8">
            <h2 className="text-xl font-semibold text-neutral-900">
              Welcome back, {user?.name}
            </h2>
            <p className="mt-1 text-neutral-600">
              {user?.company}
            </p>
          </div>
        </AnimatedSection>

        {/* Statistics */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-card p-6">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Total Cases</p>
                  <p className="text-2xl font-bold text-neutral-900">{statistics.totalCases}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-card p-6">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Active Cases</p>
                  <p className="text-2xl font-bold text-neutral-900">{statistics.activeCases}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-card p-6">
              <div className="flex items-center">
                <div className="p-3 bg-yellow-100 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Pending Cases</p>
                  <p className="text-2xl font-bold text-neutral-900">{statistics.pendingCases}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Cases Section */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="bg-white rounded-lg shadow-card overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-neutral-900">Your Cases</h3>
              <Link 
                to="/create-casefile"
                className="btn btn-primary"
              >
                <PlusCircle className="h-5 w-5 mr-2" />
                New Case
              </Link>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200">
                  <thead className="bg-neutral-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Reference
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Project Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Last Updated
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    {currentCasefiles.map((casefile) => (
                      <tr key={casefile.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
                          {casefile.parxRef}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                          {casefile.projectName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                          {casefile.policyType}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            casefile.status === 'Active' ? 'bg-green-100 text-green-800' :
                            casefile.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-neutral-100 text-neutral-800'
                          }`}>
                            {casefile.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                          {casefile.lastUpdated}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link
                            to={`/${casefile.formType}`}
                            className="text-primary-600 hover:text-primary-900"
                          >
                            View/Edit
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <ChangePasswordModal
        isOpen={isChangePasswordOpen}
        onClose={() => setIsChangePasswordOpen(false)}
      />
    </div>
  );
}

// Helper icon components
function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default Dashboard;