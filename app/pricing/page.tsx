"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PriceCard } from '@/components/pricing/price-card';
import Script from 'next/script';

export default function Pricing() {
  useEffect(() => {
    // Initialize Sellix when the component mounts
    const loadSellix = () => {
      if ((window as any).Sellix) {
        (window as any).Sellix.init();
      } else {
        // Retry after a short delay if Sellix isn't loaded yet
        setTimeout(loadSellix, 500);
      }
    };

    loadSellix();
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const monthlyPlans = [
    {
      name: "Basic",
      price: "10",
      period: "month",
      features: [
        "100 searches per day",
        "Basic search capabilities",
        "Standard data access",
        "Email support"
      ],
      buttonText: "Subscribe Now",
      highlighted: false,
      sellixProductId: "6758833cd75a7" // Replace with your actual Sellix product ID
    },
    {
      name: "API Access",
      price: "50",
      period: "month",
      features: [
        "Full API access",
        "Unlimited searches",
        "Premium data access",
        "Priority support",
        "Custom exports",
        "Developer documentation"
      ],
      buttonText: "Get Started",
      highlighted: true,
      sellixProductId: "675883b49b42c" // Replace with your actual Sellix product ID
    }
  ];

  const yearlyPlans = [
    {
      name: "Basic",
      price: "70",
      period: "year",
      description: "Save $50 compared to monthly",
      features: [
        "Unlimited daily searches",
        "Basic search capabilities",
        "Standard data access",
        "Email support",
        "Annual billing"
      ],
      buttonText: "Subscribe Now",
      highlighted: false,
      sellixProductId: "675884001c6d6" // Replace with your actual Sellix product ID
    },
    {
      name: "API Access",
      price: "300",
      period: "year",
      description: "Save $300 compared to monthly",
      features: [
        "Full API access",
        "Unlimited searches",
        "Premium data access",
        "Priority support",
        "Custom exports",
        "Developer documentation",
        "Annual billing"
      ],
      buttonText: "Get Started",
      highlighted: true,
      sellixProductId: "6758842ee47fb" // Replace with your actual Sellix product ID
    }
  ];

  return (
    <>
      <Script 
        src="https://cdn.sellix.io/static/js/embed.js" 
        strategy="afterInteractive"
        onLoad={() => {
          if ((window as any).Sellix) {
            (window as any).Sellix.init();
          }
        }}
      />
      
      <div className="min-h-screen bg-gray-50 py-16">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              {...fadeIn}
            >
              <h1 className="text-4xl font-bold text-deep-blue mb-4">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-steel-gray">
                Choose the perfect plan for your research needs
              </p>
            </motion.div>

            <div className="space-y-16">
              {/* Monthly Plans */}
              <div>
                <h2 className="text-2xl font-bold text-deep-blue mb-8 text-center">
                  Monthly Plans
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {monthlyPlans.map((plan, index) => (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <PriceCard {...plan} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Yearly Plans */}
              <div>
                <h2 className="text-2xl font-bold text-deep-blue mb-8 text-center">
                  Annual Plans
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {yearlyPlans.map((plan, index) => (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <PriceCard {...plan} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}