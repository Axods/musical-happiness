"use client";

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { SearchResult } from '@/lib/api/types';

interface SearchFiltersProps {
  onFilterChange: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  city?: string;
  county?: string;
  state?: string;
  zip?: string;
}

export function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    onFilterChange({ [key]: value });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
      <div>
        <Label htmlFor="city">City</Label>
        <Input
          id="city"
          placeholder="Filter by city"
          onChange={(e) => handleFilterChange('city', e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="county">County</Label>
        <Input
          id="county"
          placeholder="Filter by county"
          onChange={(e) => handleFilterChange('county', e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="state">State</Label>
        <Input
          id="state"
          placeholder="Filter by state"
          onChange={(e) => handleFilterChange('state', e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="zip">ZIP Code</Label>
        <Input
          id="zip"
          placeholder="Filter by ZIP"
          onChange={(e) => handleFilterChange('zip', e.target.value)}
        />
      </div>
    </div>
  );
}