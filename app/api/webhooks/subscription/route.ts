import { NextResponse } from 'next/server';
import { supabase } from '@/lib/api/supabase';

export async function POST(request: Request) {
  try {
    const { user_id, plan_type, duration_months } = await request.json();

    // Calculate expiration date
    const expires_at = new Date();
    expires_at.setMonth(expires_at.getMonth() + duration_months);

    // Create or update subscription
    const { data, error } = await supabase
      .from('subscriptions')
      .upsert({
        user_id,
        status: 'active',
        plan_type,
        expires_at,
        last_billing_date: new Date().toISOString()
      }, {
        onConflict: 'user_id'
      });

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}