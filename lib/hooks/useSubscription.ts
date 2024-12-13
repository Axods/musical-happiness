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
        const { isSubscribed, apiKey, error } = await checkSubscriptionStatus(userId);
        setIsSubscribed(isSubscribed);
        setApiKey(apiKey);
        setError(error);
      } catch (err) {
        setError('Failed to check subscription status');
      } finally {
        setLoading(false);
      }
    };

    checkStatus();
  }, [userId]);

  return { isSubscribed, apiKey, loading, error };
}