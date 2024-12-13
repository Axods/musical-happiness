import { NextResponse } from 'next/server';
import { supabase } from '@/lib/api/supabase';
import type { SavedProfile, BaseResponse } from '@/lib/api/types';
import { createSuccessResponse, createErrorResponse } from '@/lib/api/responses';

export async function GET(
  request: Request
): Promise<NextResponse<BaseResponse<SavedProfile[]>>> {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const limit = searchParams.get('limit') || '5';

    if (!userId) {
      return NextResponse.json(
        createErrorResponse('User ID is required'),
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('saved_profiles')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(parseInt(limit));

    if (error) throw error;

    return NextResponse.json(createSuccessResponse(data));
  } catch (error: any) {
    return NextResponse.json(
      createErrorResponse(error.message),
      { status: 500 }
    );
  }
}