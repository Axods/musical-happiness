"use client";

import { useState } from 'react';
import { Search, Info, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trialSearch } from '@/lib/api/trial-search';
import { ResultsTable } from './results-table';
import { Alert } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filters, type SearchFilters } from './filters';
import { SearchStats } from './search-stats';
import { filterResults } from '@/lib/utils/filter-results';
import type { SearchResult } from '@/lib/api/types/search';

export function TrialSearch() {
  const [query, setQuery] = useState('Linda Curiale');
  const [phone, setPhone] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalFound, setTotalFound] = useState(0);
  const [searchesRemaining, setSearchesRemaining] = useState<number | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({});

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const searchTerm = phone ? `?phone=${phone}` : `?name=${query}`;
    if (!searchTerm) return;

    setLoading(true);
    setError('');
    setHasSearched(true);
    
    try {
      const response = await trialSearch(searchTerm);
      const searchResults = response.data?.name_data?.results || response.data?.phone_data?.results || [];
      const found = response.data?.name_data?.found || response.data?.phone_data?.found || 0;
      
      setResults(searchResults);
      setFilteredResults(searchResults);
      setTotalFound(found);
      setSearchesRemaining(response.searches_remaining);
    } catch (err: any) {
      setError(err.message || 'Failed to perform search');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters: SearchFilters) => {
    setFilters(newFilters);
    setFilteredResults(filterResults(results, newFilters));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <Alert className="mb-4">
          <Info className="h-4 w-4" />
          <p className="ml-2">
            Try searching by name or phone number. For example: "Linda Curiale" or "9402431558"
          </p>
        </Alert>
      </div>

      <Tabs defaultValue="name" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="name">Search by Name</TabsTrigger>
          <TabsTrigger value="phone">Search by Phone</TabsTrigger>
        </TabsList>

        <TabsContent value="name">
          <form onSubmit={handleSearch} className="flex gap-4">
            <Input 
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPhone('');
              }}
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
        </TabsContent>

        <TabsContent value="phone">
          <form onSubmit={handleSearch} className="flex gap-4">
            <Input 
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setQuery('');
              }}
              placeholder="Enter a phone number (e.g., 9402431558)"
              className="flex-grow"
              type="tel"
            />
            <Button 
              type="submit" 
              className={`bg-teal transition-colors ${loading ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-deep-blue'}`}
              disabled={loading}
            >
              <Phone className="mr-2 h-4 w-4" />
              {loading ? 'Searching...' : 'Search'}
            </Button>
          </form>
        </TabsContent>
      </Tabs>

      {error && (
        <div className="text-red-500 mb-4 p-3 bg-red-50 rounded-md">
          {error}
        </div>
      )}

      {hasSearched && !loading && (
        <div className="space-y-6">
          <SearchStats 
            totalFound={totalFound} 
            searchesRemaining={searchesRemaining} 
          />

          {results.length > 0 && (
            <>
              <Filters onFilterChange={handleFilterChange} />
              <ResultsTable results={filteredResults} />
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