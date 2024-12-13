"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ApiKeyStatus } from './api-key-status';
import { fetchApi } from '@/lib/api/client';
import type { ApiKey } from '@/lib/api/types';

interface ApiKeyDisplayProps {
  userId: string;
}

export function ApiKeyDisplay({ userId }: ApiKeyDisplayProps) {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const response = await fetchApi<{ data: { key: string; isActive: boolean } }>(
          `/api/user/api-key?userId=${userId}`
        );
        setApiKey(response.data.key);
        setIsActive(response.data.isActive);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch API key');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchApiKey();
    }
  }, [userId]);

  const handleCopy = async () => {
    if (apiKey) {
      await navigator.clipboard.writeText(apiKey);
    }
  };

  if (loading) {
    return (
      <Card className="p-6">
        <p className="text-steel-gray">Loading API key...</p>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6">
        <p className="text-red-500">{error}</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h3 className="text-lg font-semibold text-deep-blue">Your API Key</h3>
            <ApiKeyStatus isActive={isActive} />
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(!isVisible)}
              className="text-steel-gray hover:text-deep-blue"
            >
              {isVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="text-steel-gray hover:text-deep-blue"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="bg-gray-50 p-3 rounded-md font-mono text-sm">
          {isVisible ? apiKey : '••••••••••••••••'}
        </div>
        <p className="text-sm text-steel-gray">
          Use this key to authenticate API requests. Keep it secure and never share it publicly.
        </p>
      </div>
    </Card>
  );
}