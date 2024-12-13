"use client";

import { motion } from 'framer-motion';
import { Search, Shield, Database, Award, Users, Globe } from 'lucide-react';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
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
            About IntelGain
          </motion.h1>

          <motion.p 
            className="text-xl text-steel-gray mb-12 text-center"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Empowering professionals with intelligent search capabilities and comprehensive data insights.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Search,
                title: "Advanced Search",
                description: "Powerful search algorithms to find the information you need"
              },
              {
                icon: Shield,
                title: "Secure Platform",
                description: "Enterprise-grade security to protect sensitive data"
              },
              {
                icon: Database,
                title: "Rich Data",
                description: "Access to millions of verified records and datasets"
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
            className="bg-white p-8 rounded-lg shadow-md mb-16"
            {...fadeIn}
            transition={{ delay: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-deep-blue mb-6">Our Mission</h2>
            <p className="text-steel-gray mb-6">
              At IntelGain, we believe in the power of information to drive meaningful change. Our mission is to provide journalists, researchers, and professionals with the tools they need to uncover truth and make informed decisions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Award className="w-8 h-8 text-gold mb-2" />
                <h3 className="text-lg font-semibold text-deep-blue mb-2">Excellence</h3>
                <p className="text-steel-gray">Committed to providing the highest quality data and search capabilities.</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-gold mb-2" />
                <h3 className="text-lg font-semibold text-deep-blue mb-2">Community</h3>
                <p className="text-steel-gray">Supporting a global community of truth-seekers and investigators.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="text-center"
            {...fadeIn}
            transition={{ delay: 1 }}
          >
            <Globe className="w-16 h-16 text-teal mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-deep-blue mb-4">Global Reach</h2>
            <p className="text-steel-gray">
              Serving professionals in over 50 countries with reliable data and insights.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}