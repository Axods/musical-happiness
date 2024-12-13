"use client";

import { motion } from 'framer-motion';

interface WelcomeSectionProps {
  email: string;
}

export function WelcomeSection({ email }: WelcomeSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h1 className="text-3xl font-bold text-deep-blue mb-2">
        Welcome back{email ? `, ${email.split('@')[0]}` : ''}
      </h1>
      <p className="text-steel-gray">
        Manage your account and view your search history
      </p>
    </motion.div>
  );
}