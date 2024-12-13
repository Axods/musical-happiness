"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trialSearch } from '@/lib/api/trial-search';
import { ResultCard } from './result-card';
import { PaginationControls } from './pagination-controls';

export function TrialSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalFound, setTotalFound] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchesRemaining, setSearchesRemaining] = useState<number | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setCurrentPage(0);
    
    try {
      const response = await trialSearch(query);
      setResults(response.data.results);
      setTotalFound(response.data.found);
      setSearchesRemaining(response.searches_remaining);
    } catch (err: any) {
      setError(err.message || 'Failed to perform search');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSearch} className="flex gap-4 mb-8">
        <Input 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a name to search..."
          className="flex-grow"
        />
        <Button 
          type="submit" 
          className="bg-teal hover:bg-deep-blue transition-colors"
          disabled={loading}
        >
          <Search className="mr-2 h-4 w-4" />
          {loading ? 'Searching...' : 'Search'}
        </Button>
      </form>

      {error && (
        <div className="text-red-500 mb-4 p-3 bg-red-50 rounded-md">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-6">
          <div className="flex justify-between items-center text-steel-gray">
            <p>Found {totalFound} potential matches</p>
            {searchesRemaining !== null && (
              <p className="text-sm">
                Trial searches remaining: {searchesRemaining}
              </p>
            )}
          </div>
          
          <ResultCard result={results[currentPage]} />
          
          <PaginationControls
            currentPage={currentPage}
            totalResults={results.length}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}