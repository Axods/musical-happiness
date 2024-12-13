"use client";

import { motion } from 'framer-motion';
import { Shield, FileCheck, Users, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JournalistAccess() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:Support@IntelGain.Io';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <motion.div 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold text-deep-blue mb-8 text-center"
            {...fadeIn}
          >
            Journalist Access Program
          </motion.h1>

          <motion.p 
            className="text-xl text-steel-gray mb-12 text-center"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Exclusive access to comprehensive data for verified journalists and media professionals.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: "Verified Access",
                description: "Exclusive access granted to verified journalists and media organizations"
              },
              {
                icon: FileCheck,
                title: "Comprehensive Data",
                description: "Access to detailed records and comprehensive search capabilities"
              },
              {
                icon: Users,
                title: "Support Team",
                description: "Dedicated support team to assist with your investigative needs"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (index + 1) }}
              >
                <feature.icon className="w-12 h-12 text-teal mb-4" />
                <h3 className="text-xl font-semibold text-deep-blue mb-2">{feature.title}</h3>
                <p className="text-steel-gray">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-center space-y-6">
              <div className="inline-block p-4 bg-teal/10 rounded-full">
                <Mail className="w-12 h-12 text-teal" />
              </div>
              
              <h2 className="text-2xl font-bold text-deep-blue">Contact Us for Access</h2>
              
              <p className="text-steel-gray max-w-2xl mx-auto">
                To apply for journalist access or inquire about our services, please email our dedicated support team. 
                We'll respond within 24 hours with detailed information about verification requirements and next steps.
              </p>

              <div className="pt-4">
                <Button 
                  onClick={handleSubmit}
                  className="bg-teal hover:bg-deep-blue transition-colors text-lg px-8 py-6 h-auto"
                >
                  Email Support@IntelGain.Io
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}