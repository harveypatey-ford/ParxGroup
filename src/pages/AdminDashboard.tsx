import React, { useState } from 'react';
import { Search, Filter, Download, ChevronRight, ChevronLeft, PlusCircle, FileCheck, Eye, Trash2, Edit } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import StatusDisclosure from '../components/StatusDisclosure';
import { useAuth } from '../contexts/AuthContext';

// Mock data for demonstration
const mockCasefiles = [
  { 
    id: 1, 
    parxRef: 'PRX-2025-001', 
    clientRef: 'CR-12345', 
    projectName: 'Riverside Development', 
    clientName: 'Smith Property Investments Ltd',
    clientContact: 'John Smith',
    riskType: 'Development', 
    status: 'Active', 
    priority: 'High',
    assignedTo: 'Sarah Johnson',
    lastUpdated: '2025-03-15',
    submissionDate: '2025-03-10'
  },
  { 
    id: 2, 
    parxRef: 'PRX-2025-002', 
    clientRef: 'CR-12346', 
    projectName: 'City Center Acquisition', 
    clientName: 'Urban Developments Ltd',
    clientContact: 'Michael Brown',
    riskType: 'Acquisition', 
    status: 'Pending', 
    priority: 'Medium',
    assignedTo: 'David Wilson',
    lastUpdated: '2025-03-12',
    submissionDate: '2025-03-08'
  }
];

function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const [filterPriority, setFilterPriority] = useState<string | null>(null);
  const [filterAssigned, setFilterAssigned] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();

  React.useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      navigate('/admin/login');
    }
  }, [user, loading, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
      </div>
    );
  }

  if (!user || user.role !== 'admin') {
    return null;
  }

  // Filter casefiles based on search term and filters
  const filteredCasefiles = mockCasefiles.filter(casefile => {
    const matchesSearch = 
      casefile.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      casefile.parxRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      casefile.clientRef.toLowerCase().includes(searchTerm.toLowerCase()) ||
      casefile.clientName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus ? casefile.status === filterStatus : true;
    const matchesPriority = filterPriority ? casefile.priority === filterPriority : true;
    const matchesAssigned = filterAssigned ? casefile.assignedTo === filterAssigned : true;
    
    return matchesSearch && matchesStatus && matchesPriority && matchesAssigned;
  });

  // Sort casefiles if sortConfig is not null
  const sortedCasefiles = React.useMemo(() => {
    let sortableCasefiles = [...filteredCasefiles];
    if (sortConfig !== null) {
      sortableCasefiles.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableCasefiles;
  }, [filteredCasefiles, sortConfig]);

  // Get current casefiles for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCasefiles = sortedCasefiles.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Request sort
  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Reset filters
  const resetFilters = () => {
    setFilterStatus(null);
    setFilterPriority(null);
    setFilterAssigned(null);
    setShowFilters(false);
  };

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-blue-100 text-blue-800';
      case 'Under Review':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  // Get priority badge color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-orange-100 text-orange-800';
      case 'Low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Cases Table */}
        <AnimatedSection direction="up">
          <div className="bg-white rounded-lg shadow-card overflow-hidden mb-8">
            <div className="px-6 py-5 border-b border-neutral-200 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900">All Cases</h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Manage and review all client cases
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Link
                  to="/admin/manage-insights"
                  className="btn btn-secondary"
                >
                  <FileCheck className="h-5 w-5 mr-2" />
                  Manage Insights
                </Link>
                <button
                  className="btn btn-primary"
                >
                  <PlusCircle className="h-5 w-5 mr-2" />
                  Create New Case
                </button>
              </div>
            </div>
            
            {/* Search and Filter */}
            <div className="px-6 py-4 border-b border-neutral-200">
              <div className="flex flex-wrap items-center justify-between sm:flex-nowrap">
                <div className="w-full sm:w-auto flex-grow max-w-md">
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-neutral-300 rounded-md"
                      placeholder="Search cases by name, reference, or client..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-4 flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowFilters(!showFilters)}
                    className="btn btn-secondary text-sm"
                  >
                    <Filter className="h-4 w-4 mr-1" />
                    {showFilters ? 'Hide Filters' : 'Show Filters'}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary text-sm"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Export
                  </button>
                </div>
              </div>
              
              {/* Filters */}
              {showFilters && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div>
                    <label htmlFor="status-filter" className="block text-sm font-medium text-neutral-700 mb-1">
                      Status
                    </label>
                    <select
                      id="status-filter"
                      value={filterStatus || ''}
                      onChange={(e) => setFilterStatus(e.target.value || null)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                    >
                      <option value="">All Statuses</option>
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                      <option value="Under Review">Under Review</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="priority-filter" className="block text-sm font-medium text-neutral-700 mb-1">
                      Priority
                    </label>
                    <select
                      id="priority-filter"
                      value={filterPriority || ''}
                      onChange={(e) => setFilterPriority(e.target.value || null)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                    >
                      <option value="">All Priorities</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="assigned-filter" className="block text-sm font-medium text-neutral-700 mb-1">
                      Assigned To
                    </label>
                    <select
                      id="assigned-filter"
                      value={filterAssigned || ''}
                      onChange={(e) => setFilterAssigned(e.target.value || null)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                    >
                      <option value="">All Team Members</option>
                      <option value="Sarah Johnson">Sarah Johnson</option>
                      <option value="David Wilson">David Wilson</option>
                      <option value="Robert Taylor">Robert Taylor</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={resetFilters}
                      className="btn btn-secondary text-sm w-full"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('parxRef')}
                    >
                      <div className="flex items-center">
                        Reference
                        {sortConfig?.key === 'parxRef' && (
                          <span className="ml-1">
                            {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('projectName')}
                    >
                      <div className="flex items-center">
                        Project Name
                        {sortConfig?.key === 'projectName' && (
                          <span className="ml-1">
                            {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('clientName')}
                    >
                      <div className="flex items-center">
                        Client
                        {sortConfig?.key === 'clientName' && (
                          <span className="ml-1">
                            {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('riskType')}
                    >
                      <div className="flex items-center">
                        Type
                        {sortConfig?.key === 'riskType' && (
                          <span className="ml-1">
                            {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('status')}
                    >
                      <div className="flex items-center">
                        Status
                        {sortConfig?.key === 'status' && (
                          <span className="ml-1">
                            {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('priority')}
                    >
                      <div className="flex items-center">
                        Priority
                        {sortConfig?.key === 'priority' && (
                          <span className="ml-1">
                            {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('assignedTo')}
                    >
                      <div className="flex items-center">
                        Assigned To
                        {sortConfig?.key === 'assignedTo' && (
                          <span className="ml-1">
                            {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort('submissionDate')}
                    >
                      <div className="flex items-center">
                        Submitted
                        {sortConfig?.key === 'submissionDate' && (
                          <span className="ml-1">
                            {sortConfig.direction === 'ascending' ? '↑' : '↓'}
                          </span>
                        )}
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  {currentCasefiles.map((casefile) => (
                    <tr key={casefile.id} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
                        {casefile.parxRef}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                        {casefile.projectName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                        <div>
                          <p className="font-medium">{casefile.clientName}</p>
                          <p className="text-xs text-neutral-500">{casefile.clientContact}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                        {casefile.riskType}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(casefile.status)}`}>
                          {casefile.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(casefile.priority)}`}>
                          {casefile.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                        {casefile.assignedTo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
                        {casefile.submissionDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-primary-600 hover:text-primary-900 mr-3 transition-colors">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-blue-600 hover:text-blue-900 mr-3 transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            {sortedCasefiles.length > itemsPerPage && (
              <div className="bg-white px-6 py-4 flex items-center justify-between border-t border-neutral-200">
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-neutral-700">
                      Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
                      <span className="font-medium">
                        {indexOfLastItem > sortedCasefiles.length ? sortedCasefiles.length : indexOfLastItem}
                      </span>{' '}
                      of <span className="font-medium">{sortedCasefiles.length}</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium ${
                          currentPage === 1 ? 'text-neutral-300 cursor-not-allowed' : 'text-neutral-500 hover:bg-neutral-50'
                        }`}
                      >
                        <span className="sr-only">Previous</span>
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      {Array.from({ length: Math.ceil(sortedCasefiles.length / itemsPerPage) }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => paginate(index + 1)}
                          className={`relative inline-flex items-center px-4 py-2 border border-neutral-300 text-sm font-medium ${
                            currentPage === index + 1
                              ? 'z-10 bg-primary-50 border-primary-500 text-primary-600'
                              : 'text-neutral-500 hover:bg-neutral-50'
                          }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === Math.ceil(sortedCasefiles.length / itemsPerPage)}
                        className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium ${
                          currentPage === Math.ceil(sortedCasefiles.length / itemsPerPage)
                            ? 'text-neutral-300 cursor-not-allowed'
                            : 'text-neutral-500 hover:bg-neutral-50'
                        }`}
                      >
                        <span className="sr-only">Next</span>
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
}

export default AdminDashboard;