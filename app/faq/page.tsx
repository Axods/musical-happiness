"use client";

import { motion } from 'framer-motion';
import { Accordion } from "@/components/ui/accordion";
import { FAQItem } from '@/components/faq/faq-item';
import { faqContent } from '@/lib/content/faq';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-center mb-4">
              <HelpCircle className="h-12 w-12 text-teal" />
            </div>
            <h1 className="text-4xl font-bold text-deep-blue mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-steel-gray">
              Find answers to common questions about IntelGain
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqContent.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                />
              ))}
            </Accordion>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}