// Base types
export interface BaseResponse<T> {
  data: T | null;
  error: string | null;
}

// API Key types
export interface ApiKey {
  id: string;
  key: string;
  user_id: string;
  is_active: boolean;
  created_at: string;
  last_used_at: string;
  requests: number;
  daily_limit: number;
  daily_requests: number;
  last_reset_date: string;
  personal_notes?: string;
}

export interface ApiKeyStats {
  dailyRequests: number;
  totalRequests: number;
  lastActivity: string;
  requestLimit: number;
  isActive: boolean;
}

export interface ApiKeyResponse {
  key: string;
  isActive: boolean;
  stats: ApiKeyStats;
}

// Search types
export interface SearchResult {
  id: string;
  query: string;
  timestamp: string;
  results: number;
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
}

// Profile types
export interface SavedProfile {
  id: string;
  user_id: string;
  full_name: string;
  data: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export type SavedProfileResponse = SavedProfile;