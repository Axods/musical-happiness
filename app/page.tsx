import { Button } from '@/components/ui/button';
import { Search, Shield, Database, Zap, CheckCircle } from 'lucide-react';
import { TrialSearch } from '@/components/search/trial-search';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#002855] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Find Detailed Information About <span className="text-[#FFD700]">U.S. Residents</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Access comprehensive public records data for background checks, 
              investigative journalism, and research purposes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <div className="flex items-center text-gray-300">
                <CheckCircle className="h-5 w-5 mr-2 text-[#FFD700]" />
                <span>Public Records</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle className="h-5 w-5 mr-2 text-[#FFD700]" />
                <span>Background Checks</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle className="h-5 w-5 mr-2 text-[#FFD700]" />
                <span>Contact Information</span>
              </div>
            </div>
            
            {/* Search Demo Box */}
            <div className="bg-white rounded-lg p-8 shadow-xl mb-12">
              <h2 className="text-2xl font-bold text-deep-blue mb-6">Try a Free People Search</h2>
              <TrialSearch />
            </div>

            <div className="flex justify-center gap-4">
              <Link href="/sign-up">
                <Button className="bg-[#FFD700] hover:bg-[#002855] text-black hover:text-white transition-colors">
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#002855] mb-12">
            Why Choose IntelGain?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Database className="h-8 w-8 text-[#008080]" />}
              title="Comprehensive Data"
              description="Access millions of verified public records from trusted sources."
            />
            <FeatureCard 
              icon={<Zap className="h-8 w-8 text-[#008080]" />}
              title="Real-Time Results"
              description="Get instant access to current information and records."
            />
            <FeatureCard 
              icon={<Shield className="h-8 w-8 text-[#008080]" />}
              title="Secure & Compliant"
              description="All searches comply with FCRA and privacy regulations."
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#002855] mb-12">
            Who Uses IntelGain?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <UseCaseCard
              title="Journalists"
              description="Verify sources and uncover connections for investigative reporting."
            />
            <UseCaseCard
              title="Researchers"
              description="Access comprehensive data for academic and professional research."
            />
            <UseCaseCard
              title="Professionals"
              description="Conduct thorough background checks and verify information."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="inline-block p-4 bg-gray-50 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#002855] mb-3">{title}</h3>
      <p className="text-[#4A4A4A]">{description}</p>
    </div>
  );
}

function UseCaseCard({ title, description }: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-[#002855] mb-2">{title}</h3>
      <p className="text-[#4A4A4A]">{description}</p>
    </div>
  );
}