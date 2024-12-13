import { NextResponse } from 'next/server';
import { supabase } from '@/lib/api/supabase';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    
    if (!userId) {
      throw new Error('User ID is required');
    }

    // Fetch user stats
    const { data: stats, error: statsError } = await supabase
      .from('user_stats')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (statsError) throw statsError;

    // Fetch recent searches
    const { data: searches, error: searchesError } = await supabase
      .from('searches')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(5);

    if (searchesError) throw searchesError;

    // Fetch saved profiles
    const { data: profiles, error: profilesError } = await supabase
      .from('saved_profiles')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(5);

    if (profilesError) throw profilesError;

    return NextResponse.json({
      stats,
      searches,
      profiles,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}