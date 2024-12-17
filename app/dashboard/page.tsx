"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { getSession } from '@/lib/auth';
import { useSubscription } from '@/lib/hooks/useSubscription';
import { ApiKeyDisplay } from '@/components/dashboard/api-key-display';
import { WelcomeSection } from '@/components/dashboard/welcome-section';
import { SearchSection } from '@/components/dashboard/search-section';
import { StatsOverview } from '@/components/dashboard/stats-overview';
import { UpgradePrompt } from '@/components/dashboard/upgrade-prompt';
import { fetchApi } from '@/lib/api/client';
import type { ApiKeyStats } from '@/lib/api/types';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<ApiKeyStats | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (!session) {
        router.push('/sign-in');
        return;
      }
      setUser(session.user);
      setLoading(false);
    };

    checkSession();
  }, [router]);

  useEffect(() => {
    const fetchStats = async () => {
      if (!user?.id) return;
      
      try {
        const response = await fetchApi<{ data: { stats: ApiKeyStats } }>(
          `/api/user/api-key?userId=${user.id}`
        );
        setStats(response.data.stats);
      } catch (error) {
        console.error('Failed to fetch API key stats:', error);
      }
    };

    if (user?.id) {
      fetchStats();
    }
  }, [user?.id]);

  const { isSubscribed, apiKey, loading: subscriptionLoading } = useSubscription(user?.id);

  if (loading || subscriptionLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-deep-blue">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // Check if user has either a subscription or an API key
  const hasAccess = isSubscribed || !!apiKey;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto space-y-8">
          <WelcomeSection email={user.email} />
          
          {hasAccess ? (
            <>
              {stats && <StatsOverview {...stats} />}
              <SearchSection apiKey={apiKey || ''} />
              <ApiKeyDisplay userId={user.id} />
            </>
          ) : (
            <UpgradePrompt />
          )}
        </div>
      </motion.div>
    </div>
  );
}