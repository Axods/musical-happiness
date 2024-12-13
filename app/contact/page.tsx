"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:support@intelgain.io';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            {...fadeIn}
          >
            <h1 className="text-4xl font-bold text-deep-blue mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-steel-gray">
              We're here to help and answer any questions you might have
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-md p-8"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-deep-blue mb-4">Get in Touch</h2>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-teal" />
                  <div>
                    <p className="font-medium text-deep-blue">Email</p>
                    <p className="text-steel-gray">support@intelgain.io</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-teal" />
                  <div>
                    <p className="font-medium text-deep-blue">Support Hours</p>
                    <p className="text-steel-gray">Monday - Friday, 9AM - 6PM EST</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-deep-blue mb-4">Quick Support</h3>
                <p className="text-steel-gray mb-6">
                  For the fastest response, email our support team directly.
                </p>
                <Button 
                  onClick={handleEmailClick}
                  className="w-full bg-teal hover:bg-deep-blue transition-colors"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Email Support
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}