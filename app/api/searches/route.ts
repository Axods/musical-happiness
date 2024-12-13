import { NextResponse } from 'next/server';
import { supabase } from '@/lib/api/supabase';
import type { BaseResponse, SearchResponse } from '@/lib/api/types';

export async function GET(
  request: Request
): Promise<NextResponse<BaseResponse<SearchResponse[]>>> {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const limit = searchParams.get('limit') || '5';

    if (!userId) {
      return NextResponse.json(
        { data: null, error: 'User ID is required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('searches')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(parseInt(limit));

    if (error) throw error;

    return NextResponse.json({ data, error: null });
  } catch (error: any) {
    return NextResponse.json(
      { data: null, error: error.message },
      { status: 500 }
    );
  }
}
