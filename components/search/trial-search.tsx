"use client";

import { useState } from 'react';
import { Search, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trialSearch } from '@/lib/api/trial-search';
import { ResultCard } from './result-card';
import { PaginationControls } from './pagination-controls';
import { Alert } from '@/components/ui/alert';

export function TrialSearch() {
  const [query, setQuery] = useState('Linda Curiale');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalFound, setTotalFound] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchesRemaining, setSearchesRemaining] = useState<number | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setCurrentPage(0);
    setHasSearched(true);
    
    try {
      const response = await trialSearch(query);
      setResults(response.data.results || []);
      setTotalFound(response.data.found || 0);
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
      <div className="mb-6">
        <Alert className="mb-4">
          <Info className="h-4 w-4" />
          <p className="ml-2">
            Try searching for people in our database. For example: "Linda Curiale" or "John Smith"
          </p>
        </Alert>
      </div>

      <form onSubmit={handleSearch} className="flex gap-4 mb-8">
        <Input 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a name to search..."
          className="flex-grow"
        />
        <Button 
          type="submit" 
          className={`bg-teal transition-colors ${loading ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-deep-blue'}`}
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

{hasSearched && !loading && (
  <div className="space-y-6">
    <div className="flex justify-between items-center text-steel-gray">
      <p>
        {totalFound === 0 ? (
          <span className="flex items-center text-steel-gray">
            <AlertCircle className="h-4 w-4 mr-2" />
            No matches found. Try a different name or check your spelling.
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

          
          {results.length > 0 && (
            <>
              <ResultCard result={results[currentPage]} />
              <PaginationControls
                currentPage={currentPage}
                totalResults={results.length}
                onPageChange={handlePageChange}
              />
            </>
          )}

          {totalFound === 0 && (
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-steel-gray mb-4">
                Try searching for common names like "John Smith" or "Mary Johnson"
              </p>
              <Button
                variant="outline"
                onClick={() => setQuery("John Smith")}
                className="mr-2"
              >
                Try "John Smith"
              </Button>
              <Button
                variant="outline"
                onClick={() => setQuery("Mary Johnson")}
              >
                Try "Mary Johnson"
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}