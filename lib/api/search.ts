"use client";

import { fetchApi } from './client';
import type { SearchResponse } from './types';

export async function performSearch(query: string, apiKey: string): Promise<SearchResponse> {
  const response = await fetch(`https://api.intelgain.io/search?name=${encodeURIComponent(query)}`, {
    headers: {
      'X-API-Key': apiKey,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to perform search');
  }

  return response.json();
}