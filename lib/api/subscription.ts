"use client";

export async function checkSubscriptionStatus(userId: string) {
  try {
    const response = await fetch(`/api/user/subscription?userId=${userId}`);
    const data = await response.json();
    return {
      isSubscribed: data.data?.subscription_status === 'active',
      apiKey: data.data?.api_key,
      error: null
    };
  } catch (error) {
    return {
      isSubscribed: false,
      apiKey: null,
      error: 'Failed to check subscription status'
    };
  }
}