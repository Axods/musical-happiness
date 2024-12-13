import { NextResponse } from 'next/server';
import { supabase } from '@/lib/api/supabase';

export async function GET() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) throw error;
    return NextResponse.json({ data: { session }, error: null });
  } catch (error: any) {
    return NextResponse.json(
      { data: null, error: error.message },
      { status: 500 }
    );
  }
}