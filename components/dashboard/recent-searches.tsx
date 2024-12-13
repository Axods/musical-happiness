"use client";

import { motion } from 'framer-motion';

interface RecentSearchesProps {
  searches: any[]; // Replaced RecentSearch with any[]
}

export function RecentSearches({ searches }: RecentSearchesProps) {
  if (!searches.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      <h2 className="text-2xl font-bold text-deep-blue mb-4">Recent Searches</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="divide-y divide-gray-200">
          {searches.map((search) => (
            <div key={search.id} className="p-4 hover:bg-gray-50">
              <p className="font-medium text-deep-blue">{search.query}</p>
              <p className="text-sm text-steel-gray">
                {new Date(search.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
