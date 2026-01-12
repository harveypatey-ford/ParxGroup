import React, { useState, useEffect } from 'react';
import { Lock, Mail, Eye, EyeOff, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import StatusDisclosure from '../components/StatusDisclosure';
import { useAuth } from '../contexts/AuthContext';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [localLoading, setLocalLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, user, loading: authLoading } = useAuth();

  useEffect(() => {
    if (user && !authLoading) {
      if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        setError('Access denied. Admin privileges required.');
      }
    }
  }, [user, authLoading, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLocalLoading(true);

    try {
      await signIn(email, password);

      // Check will happen in useEffect above
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Invalid email or password');
      }
    } finally {
      setLocalLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Office building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm"></div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center">
            <div className="mx-auto p-3 bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-white">
              Admin Portal
            </h2>
            <p className="mt-2 text-primary-100">
              Sign in to access the administration dashboard
            </p>
          </div>
        </AnimatedSection>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="bg-white py-8 px-4 shadow-card sm:rounded-lg sm:px-10">
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md border border-red-200">
                {error}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md leading-5 bg-white placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 transition-colors sm:text-sm"
                    placeholder="admin@parxgroup.co.uk"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700">
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-neutral-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-2 border border-neutral-300 rounded-md leading-5 bg-white placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 transition-colors sm:text-sm"
                    placeholder="••••••••"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="text-neutral-400 hover:text-neutral-500 focus:outline-none"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded transition-colors"
                  />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-neutral-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={localLoading}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <Shield className="h-5 w-5 text-primary-500 group-hover:text-primary-400" />
                  </span>
                  {localLoading ? 'Loading...' : 'Sign in to Admin'}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-neutral-600">
                For admin access, please contact the system administrator
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Status Disclosure */}
      <StatusDisclosure className="" textColor="text-white" />
    </div>
  );
}

export default AdminLogin;