import { NextResponse } from 'next/server';
import { getApiKey } from '@/lib/api/api-keys';

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

    const apiKey = await getApiKey(userId);

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      data: {
        key: apiKey.key,
        isActive: apiKey.is_active,
        stats: {
          dailyRequests: apiKey.daily_requests,
          totalRequests: apiKey.requests,
          lastActivity: apiKey.last_used_at,
          requestLimit: apiKey.daily_limit
        }
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}