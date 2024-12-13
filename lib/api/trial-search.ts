import type { SearchResponse } from './types';

export async function trialSearch(name: string): Promise<SearchResponse> {
  const response = await fetch(`https://api.intelgain.io/trial-search?name=${encodeURIComponent(name)}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to perform trial search');
  }

  return response.json();
}