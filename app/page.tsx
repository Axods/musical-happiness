import { Button } from '@/components/ui/button';
import { Search, Shield, Database, Zap } from 'lucide-react';
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
              Search Smarter, <span className="text-[#FFD700]">Uncover More</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Professional data search and intelligence platform for journalists and researchers.
            </p>
            
            {/* Search Demo Box */}
            <div className="bg-white rounded-lg p-8 shadow-xl mb-12">
              <h2 className="text-2xl font-bold text-deep-blue mb-6">Try a Free Search</h2>
              <TrialSearch />
            </div>

            <div className="flex justify-center">
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
              description="Access millions of records from verified sources worldwide."
            />
            <FeatureCard 
              icon={<Zap className="h-8 w-8 text-[#008080]" />}
              title="Lightning Fast"
              description="Get instant results with our advanced search algorithm."
            />
            <FeatureCard 
              icon={<Shield className="h-8 w-8 text-[#008080]" />}
              title="Secure & Compliant"
              description="Your searches are protected with enterprise-grade security."
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