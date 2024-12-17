"use client";

import { useState, useEffect } from 'react';
import { checkSubscriptionStatus } from '@/lib/api/subscription';

export function useSubscription(userId: string | null) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkStatus = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/user/subscription?userId=${userId}`);
        const data = await response.json();
        
        // Check if subscription is active
        const hasActiveSubscription = data.data?.status === 'active';
        setIsSubscribed(hasActiveSubscription);

        // Get API key in a separate request
        if (hasActiveSubscription) {
          const apiKeyResponse = await fetch(`/api/user/api-key?userId=${userId}`);
          const apiKeyData = await apiKeyResponse.json();
          setApiKey(apiKeyData.data?.key || null);
        }

        setError(null);
      } catch (err) {
        setError('Failed to check subscription status');
        console.error('Subscription check error:', err);
      } finally {
        setLoading(false);
      }
    };

    checkStatus();
  }, [userId]);

  return { isSubscribed, apiKey, loading, error };
}