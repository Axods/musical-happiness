import { NextResponse } from 'next/server';
import { supabase } from '@/lib/api/supabase';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    // Get subscription status and API key
    const { data, error } = await supabase
      .rpc('get_user_subscription', {
        p_user_id: userId
      });

    if (error) throw error;

    // If no subscription found, return inactive status
    if (!data || data.length === 0) {
      return NextResponse.json({
        data: {
          subscription_status: 'inactive',
          api_key: null,
          plan_type: null,
          expires_at: null
        }
      });
    }

    return NextResponse.json({ data: data[0] });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}