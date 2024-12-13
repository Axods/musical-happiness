"use client";

import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`flex items-center space-x-2 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 15 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Search className="w-6 h-6 text-gold" />
      </motion.div>
      <span className="text-xl font-bold tracking-tight">IntelGain</span>
    </motion.div>
  );
}