"use client";

export async function checkSubscriptionStatus(userId: string) {
  try {
    const response = await fetch(`/api/user/subscription?userId=${userId}`);
    const data = await response.json();

    // Get API key if subscription is active
    let apiKey = null;
    if (data.data?.status === 'active') {
      const apiKeyResponse = await fetch(`/api/user/api-key?userId=${userId}`);
      const apiKeyData = await apiKeyResponse.json();
      apiKey = apiKeyData.data?.key;
    }

    return {
      isSubscribed: data.data?.status === 'active',
      apiKey,
      error: null
    };
  } catch (error) {
    console.error('Subscription check error:', error);
    return {
      isSubscribed: false,
      apiKey: null,
      error: 'Failed to check subscription status'
    };
  }
}