"use client";

import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function UpgradePrompt() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white rounded-lg shadow-md p-8 text-center"
    >
      <Shield className="w-16 h-16 text-teal mx-auto mb-6" />
      <h2 className="text-2xl font-bold text-deep-blue mb-4">
        Unlock Full Access
      </h2>
      <p className="text-steel-gray mb-8 max-w-2xl mx-auto">
        To use our powerful search capabilities and access comprehensive data, 
        you'll need to subscribe to one of our plans. Get started today to unlock 
        all features.
      </p>
      <Link href="/pricing">
        <Button className="bg-teal hover:bg-deep-blue transition-colors">
          View Plans
        </Button>
      </Link>
    </motion.div>
  );
}