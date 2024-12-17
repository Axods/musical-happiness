"use client";

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { performSearch } from '@/lib/api/search';
import { ResultCard } from '@/components/search/result-card';
import type { SearchResponse, SearchResult } from '@/lib/api/types';

interface SearchSectionProps {
  apiKey: string;
}

interface SearchFilters {
  city?: string;
  county?: string;
  state?: string;
  zip?: string;
}

export function SearchSection({ apiKey }: SearchSectionProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({});

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    
    try {
      const searchResults = await performSearch(query, apiKey);
      setResults(searchResults);
    } catch (err: any) {
      setError(err.message || 'Failed to perform search');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const filteredResults = useMemo(() => {
    if (!results?.data?.name_data?.results) return [];

    return results.data.name_data.results.filter(result => {
      const otherFields = result.other_fields || {};
      
      const matchesCity = !filters.city || 
        otherFields.city?.toLowerCase().includes(filters.city.toLowerCase());
      
      const matchesCounty = !filters.county || 
        otherFields.county_name?.toLowerCase().includes(filters.county.toLowerCase());
      
      const matchesState = !filters.state || 
        otherFields.st?.toLowerCase() === filters.state.toLowerCase();
      
      const matchesZip = !filters.zip || 
        otherFields.zip?.includes(filters.zip);

      return matchesCity && matchesCounty && matchesState && matchesZip;
    });
  }, [results, filters]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold text-deep-blue mb-6">Search Records</h2>
      
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="flex gap-4">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter a name to search..."
            className="flex-grow"
          />
          <Button 
            type="button"
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="text-deep-blue hover:text-teal"
          >
            <Filter className="h-4 w-4" />
          </Button>
          <Button 
            type="submit" 
            className="bg-teal hover:bg-deep-blue transition-colors"
            disabled={loading}
          >
            <Search className="mr-2 h-4 w-4" />
            {loading ? 'Searching...' : 'Search'}
          </Button>
        </div>

        {showFilters && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <Input
                id="city"
                placeholder="Filter by city"
                onChange={(e) => handleFilterChange({ city: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="county" className="block text-sm font-medium text-gray-700">
                County
              </label>
              <Input
                id="county"
                placeholder="Filter by county"
                onChange={(e) => handleFilterChange({ county: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
              </label>
              <Input
                id="state"
                placeholder="Filter by state"
                onChange={(e) => handleFilterChange({ state: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                ZIP Code
              </label>
              <Input
                id="zip"
                placeholder="Filter by ZIP"
                onChange={(e) => handleFilterChange({ zip: e.target.value })}
              />
            </div>
          </div>
        )}
      </form>

      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-500 rounded-md">
          {error}
        </div>
      )}

      {results && (
        <div className="mt-6 space-y-6">
          <div className="text-steel-gray">
            Found {filteredResults.length} of {results.data.name_data?.found || 0} total matches
          </div>
          {filteredResults.map((result, index) => (
            <ResultCard key={index} result={result} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
