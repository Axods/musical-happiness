import { NextResponse } from 'next/server';
import { supabase } from '@/lib/api/supabase';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/reset-password`,
    });

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }
}