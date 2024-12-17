import { NextResponse } from 'next/server';
import { getActiveSystemMessages } from '@/lib/api/services/system-messages';
import type { SystemMessageType } from '@/lib/api/types/system-messages';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') as SystemMessageType | undefined;

    const messages = await getActiveSystemMessages(type);
    return NextResponse.json({ data: messages });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}