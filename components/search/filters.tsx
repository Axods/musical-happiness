"use client";

import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FiltersProps {
  onFilterChange: (filters: SearchFilters) => void;
}

export interface SearchFilters {
  state?: string;
  city?: string;
}

export function Filters({ onFilterChange }: FiltersProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({});

  const handleFilterChange = (key: keyof SearchFilters, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="mb-4">
      <Button
        variant="outline"
        onClick={() => setShowFilters(!showFilters)}
        className="mb-4"
      >
        <Filter className="h-4 w-4 mr-2" />
        {showFilters ? 'Hide Filters' : 'Show Filters'}
      </Button>

      {showFilters && (
        <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
          <div>
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              placeholder="Filter by state (e.g., TX)"
              value={filters.state || ''}
              onChange={(e) => handleFilterChange('state', e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="Filter by city"
              value={filters.city || ''}
              onChange={(e) => handleFilterChange('city', e.target.value)}
              className="mt-1"
            />
          </div>
        </div>
      )}
    </div>
  );
}