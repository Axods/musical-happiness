export interface UserStats {
  user_id: string;
  total_searches: number;
  monthly_searches: number;
  last_search_at: string;
  subscription_tier: string;
  subscription_status: string;
  subscription_end_date: string;
}

export interface Search {
  id: string;
  user_id: string;
  query: string;
  filters: Record<string, any>;
  created_at: string;
  result_count: number;
}

export interface SavedProfile {
  id: string;
  user_id: string;
  profile_data: {
    full_name: string;
    other_fields?: {
      city?: string;
      st?: string;
      [key: string]: any;
    };
    [key: string]: any;
  };
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Export {
  id: string;
  user_id: string;
  export_type: string;
  status: string;
  file_url?: string;
  created_at: string;
  completed_at?: string;
}