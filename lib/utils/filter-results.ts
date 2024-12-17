import type { SearchResult } from '@/lib/api/types/search';
import type { SearchFilters } from '@/components/search/filters';

export function filterResults(results: SearchResult[], filters: SearchFilters): SearchResult[] {
  return results.filter(result => {
    const matchesState = !filters.state || 
      result.other_fields?.st?.toLowerCase() === filters.state.toLowerCase();
    
    const matchesCity = !filters.city || 
      result.other_fields?.city?.toLowerCase().includes(filters.city.toLowerCase());

    return matchesState && matchesCity;
  });
}