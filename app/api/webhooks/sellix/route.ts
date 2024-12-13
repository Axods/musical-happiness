import { NextResponse } from 'next/server';
import { supabase } from '@/lib/api/supabase';
import { headers } from 'next/headers';
import crypto from 'crypto';

const SELLIX_WEBHOOK_SECRET = process.env.SELLIX_WEBHOOK_SECRET!;

// Verify Sellix webhook signature
function verifySignature(payload: string, signature: string): boolean {
  const hmac = crypto.createHmac('sha512', SELLIX_WEBHOOK_SECRET);
  const expectedSignature = hmac.update(payload).digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

// Calculate subscription end date based on plan
function getSubscriptionEndDate(plan: string): Date {
  const now = new Date();
  switch (plan) {
    case 'monthly':
      return new Date(now.setMonth(now.getMonth() + 1));
    case 'yearly':
      return new Date(now.setFullYear(now.getFullYear() + 1));
    default:
      return new Date(now.setMonth(now.getMonth() + 1)); // Default to monthly
  }
}

export async function POST(request: Request) {
  try {
    const signature = headers().get('x-sellix-unescaped-signature');
    if (!signature) {
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 401 }
      );
    }

    const payload = await request.text();
    if (!verifySignature(payload, signature)) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const event = JSON.parse(payload);
    
    // Handle only completed payments
    if (event.event === 'order:complete') {
      const { customer_email, product } = event.data;
      
      // Get user by email
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('email', customer_email)
        .single();

      if (userError) {
        throw new Error(`User not found: ${userError.message}`);
      }

      const userId = userData.id;
      const subscriptionEndDate = getSubscriptionEndDate(product.type);

      // Update user subscription
      const { error: updateError } = await supabase
        .from('user_stats')
        .upsert({
          user_id: userId,
          subscription_tier: product.type === 'yearly' ? 'professional' : 'basic',
          subscription_status: 'active',
          subscription_end_date: subscriptionEndDate.toISOString(),
        });

      if (updateError) {
        throw new Error(`Failed to update subscription: ${updateError.message}`);
      }

      return NextResponse.json({ status: 'success' });
    }

    return NextResponse.json({ status: 'ignored' });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}