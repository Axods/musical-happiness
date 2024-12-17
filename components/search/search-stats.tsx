"use client";

import { AlertCircle } from 'lucide-react';

interface SearchStatsProps {
  totalFound: number;
  searchesRemaining: number | null;
}

export function SearchStats({ totalFound, searchesRemaining }: SearchStatsProps) {
  return (
    <div className="flex justify-between items-center text-steel-gray mb-4">
      <p>
        {totalFound === 0 ? (
          <span className="flex items-center text-steel-gray">
            <AlertCircle className="h-4 w-4 mr-2" />
            No matches found. Try a different search term or check your spelling.
          </span>
        ) : (
          `Found ${totalFound} potential matches`
        )}
      </p>
      {searchesRemaining !== null && (
        <p className="text-sm bg-deep-blue/10 px-3 py-1 rounded-full">
          Trial searches remaining: {searchesRemaining}
        </p>
      )}
    </div>
  );
}