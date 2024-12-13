import { supabase } from './supabase';
import type { ApiKey, ApiKeyStats } from './types';

export async function getApiKey(userId: string): Promise<ApiKey | null> {
  const { data, error } = await supabase
    .from('api_keys')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) throw error;
  return data;
}

export async function getApiKeyStats(userId: string): Promise<ApiKeyStats | null> {
  const apiKey = await getApiKey(userId);
  
  if (!apiKey) return null;

  return {
    dailyRequests: apiKey.daily_requests,
    totalRequests: apiKey.requests,
    lastActivity: apiKey.last_used_at,
    requestLimit: apiKey.daily_limit,
    isActive: apiKey.is_active
  };
}