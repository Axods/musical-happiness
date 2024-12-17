"use client";

import { useEffect, useState } from 'react';
import { SystemMessage } from './system-message';
import type { SystemMessage as SystemMessageType } from '@/lib/api/types/system-messages';

interface SystemMessagesProviderProps {
  type?: string;
}

export function SystemMessagesProvider({ type }: SystemMessagesProviderProps) {
  const [messages, setMessages] = useState<SystemMessageType[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`/api/system-messages${type ? `?type=${type}` : ''}`);
        const { data } = await response.json();
        setMessages(data);
      } catch (error) {
        console.error('Failed to fetch system messages:', error);
      }
    };

    fetchMessages();
  }, [type]);

  if (!messages.length) return null;

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <SystemMessage key={message.id} message={message} />
      ))}
    </div>
  );
}