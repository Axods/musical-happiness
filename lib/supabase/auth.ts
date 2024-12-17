import { createClient } from '@supabase/supabase-js';

// Auth-specific Supabase client
const authUrl = process.env.NEXT_PUBLIC_SUPABASE_URL2!;
const authKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY2!;

export const authSupabase = createClient(authUrl, authKey);