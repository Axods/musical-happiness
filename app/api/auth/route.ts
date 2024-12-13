import { NextResponse } from 'next/server';
import { supabase } from '@/lib/api/supabase';

export async function POST(request: Request) {
  try {
    const { action, email, password } = await request.json();

    if (action === 'signIn') {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
      return NextResponse.json({ data });
    }

    if (action === 'signUp') {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (error) throw error;
      return NextResponse.json({ data });
    }

    throw new Error('Invalid action');
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}