"use client";

import { motion } from 'framer-motion';
import type { UserStatsResponse } from '@/lib/api/types';

interface StatsSectionProps {
  stats: UserStatsResponse;
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="grid md:grid-cols-3 gap-6"
    >
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-deep-blue mb-2">Total Searches</h3>
        <p className="text-3xl font-bold text-teal">{stats.total_searches}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-deep-blue mb-2">Monthly Searches</h3>
        <p className="text-3xl font-bold text-teal">{stats.monthly_searches}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-deep-blue mb-2">Subscription</h3>
        <p className="text-3xl font-bold text-teal capitalize">{stats.subscription_tier}</p>
      </div>
    </motion.div>
  );
}