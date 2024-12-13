import { NextResponse } from 'next/server';
import { supabase } from '@/lib/api/supabase';
import type { BaseResponse } from '@/lib/api/types';

export async function GET(
  request: Request
): Promise<NextResponse<BaseResponse<any>>> {  // Using 'any' for flexibility if you're returning various data
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { data: null, error: 'User ID is required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('user_stats')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) throw error;

    return NextResponse.json({ data, error: null });
  } catch (error: any) {
    return NextResponse.json(
      { data: null, error: error.message },
      { status: 500 }
    );
  }
}
