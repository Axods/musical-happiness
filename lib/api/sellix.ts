import { supabase } from './supabase';

const SELLIX_API_KEY = process.env.SELLIX_API_KEY!;
const SELLIX_MERCHANT = process.env.SELLIX_MERCHANT!;

interface SellixProduct {
  title: string;
  price: number;
  currency: string;
  type: 'subscription';
  recurring_interval: 'month' | 'year';
}

export async function createSellixProduct(product: SellixProduct) {
  const response = await fetch(`https://dev.sellix.io/v1/products`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SELLIX_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...product,
      webhook: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/sellix`,
      webhook_fail: `${process.env.NEXT_PUBLIC_APP_URL}/api/webhooks/sellix/fail`,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to create Sellix product');
  }

  return response.json();
}

export async function getSubscriptionStatus(userId: string) {
  const { data, error } = await supabase
    .from('user_stats')
    .select('subscription_status, subscription_tier, subscription_end_date')
    .eq('user_id', userId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}