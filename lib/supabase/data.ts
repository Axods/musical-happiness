import { createClient } from '@supabase/supabase-js';

// Data-specific Supabase client
const dataUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const dataKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const dataSupabase = createClient(dataUrl, dataKey);