import { Lock } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import StatusDisclosure from '../components/StatusDisclosure';
import SEO from '../components/SEO';

/** Visual placeholder only. No credential inputs, authentication or server requests. */
function Login() {
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
            <p className="mt-2 text-primary-100">Secure client access</p>
          </div>
        </AnimatedSection>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="bg-white py-8 px-6 shadow-card sm:rounded-lg sm:px-10 text-center">
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Portal access is not currently available</h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Please contact the Parx Group team directly if you need assistance with an existing enquiry or application.
            </p>
            <a href="mailto:Connect@ParxGroup.co.uk" className="inline-flex justify-center w-full px-6 py-3 rounded-md bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors">
              Contact Parx Group
            </a>
          </div>
        </AnimatedSection>
      </div>
      <StatusDisclosure className="" textColor="text-white" />
    </div>
  );
}

export default Login;
