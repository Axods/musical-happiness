"use client";

import { useState, useEffect } from 'react';
import { fetchApi } from '@/lib/api/client';
import type { UserStatsResponse, RecentSearch, SavedProfileResponse } from '@/lib/api/types';

interface DashboardData {
  stats: UserStatsResponse | null;
  searches: RecentSearch[];
  profiles: SavedProfileResponse[];
}

export function useDashboard(userId: string) {
  const [data, setData] = useState<DashboardData>({
    stats: null,
    searches: [],
    profiles: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      const [statsResponse, searchesResponse, profilesResponse] = await Promise.all([
        fetchApi<{ data: UserStatsResponse }>(`/api/user-stats?userId=${userId}`),
        fetchApi<{ data: RecentSearch[] }>(`/api/searches?userId=${userId}&limit=5`),
        fetchApi<{ data: SavedProfileResponse[] }>(`/api/saved-profiles?userId=${userId}&limit=5`),
      ]);

      setData({
        stats: statsResponse.data,
        searches: searchesResponse.data,
        profiles: profilesResponse.data,
      });
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchDashboardData();
    }
  }, [userId]);

  return { ...data, loading, error, refetch: fetchDashboardData };
}