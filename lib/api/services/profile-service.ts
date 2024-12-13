import { supabase } from '../supabase';
import type { SavedProfile } from '../types';

export async function getSavedProfiles(
  userId: string,
  limit: number = 5
): Promise<SavedProfile[]> {
  const { data, error } = await supabase
    .from('saved_profiles')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data || [];
}

export async function saveProfile(
  userId: string,
  profileData: Omit<SavedProfile, 'id' | 'user_id' | 'created_at' | 'updated_at'>
): Promise<SavedProfile> {
  const { data, error } = await supabase
    .from('saved_profiles')
    .insert([{ user_id: userId, ...profileData }])
    .select()
    .single();

  if (error) throw error;
  return data;
}