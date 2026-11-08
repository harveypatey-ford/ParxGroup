import { useState, type FormEvent } from 'react';
import { Lock, Mail } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import StatusDisclosure from '../components/StatusDisclosure';
import SEO from '../components/SEO';

/** Visual placeholder only. Form values are never read, stored or transmitted. */
function Login() {
  const [demoNotice, setDemoNotice] = useState(false);

  const handleDemoSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setDemoNotice(true);
  };

  return (
    <div className="-mt-20 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      <SEO title="Client Portal | Parx Group" description="Parx Group client portal information." />
      <div className="absolute inset-0 z-0">
        <img src="/login-hero.webp" alt="People working in an office" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary-900/70 backdrop-blur-sm" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <AnimatedSection direction="up">
          <div className="text-center">
            <div className="mx-auto p-3 bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Lock className="h-8 w-8 text-primary-600" />
            </div>
            <h1 className="text-3xl font-bold text-white">Client Portal</h1>
            <p className="mt-2 text-primary-100">Sign in to access your account</p>
          </div>
        </AnimatedSection>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="bg-white py-8 px-6 shadow-card sm:rounded-lg sm:px-10">
            <form onSubmit={handleDemoSubmit} autoComplete="off" className="space-y-6">
              <div>
                <label htmlFor="portal-email" className="block text-sm font-medium text-neutral-700">Email address</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <Mail className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400 pointer-events-none" />
                  <input
                    id="portal-email"
                    type="email"
                    name="demo-email"
                    placeholder="you@example.com"
                    autoComplete="off"
                    required
                    onChange={() => setDemoNotice(false)}
                    className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md leading-5 bg-white placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 transition-colors sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="portal-password" className="block text-sm font-medium text-neutral-700">Password</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <Lock className="absolute left-3 top-2.5 h-5 w-5 text-neutral-400 pointer-events-none" />
                  <input
                    id="portal-password"
                    type="password"
                    name="demo-password"
                    placeholder="Password"
                    autoComplete="new-password"
                    required
                    onChange={() => setDemoNotice(false)}
                    className="block w-full pl-10 pr-3 py-2 border border-neutral-300 rounded-md leading-5 bg-white placeholder-neutral-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 transition-colors sm:text-sm"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
              >
                <Lock className="h-4 w-4" />
                Sign in
              </button>
              {demoNotice && (
                <p role="status" aria-live="polite" className="rounded-md bg-primary-50 border border-primary-200 px-3 py-3 text-sm text-primary-800 text-center">
                  This is a demonstration page. No sign-in has taken place.
                </p>
              )}
            </form>
            <div className="mt-6 text-center text-sm text-neutral-600">
              Demo only. Please do not enter real login details.
              <div className="mt-2">
                For assistance, email{' '}
                <a href="mailto:Connect@ParxGroup.co.uk" className="text-primary-600 hover:text-primary-700">Connect@ParxGroup.co.uk</a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
      <StatusDisclosure className="" textColor="text-white" />
    </div>
  );
}

export default Login;
