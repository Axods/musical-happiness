"use client";

import { AlertTriangle, Info, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { SystemMessage } from '@/lib/api/types/system-messages';

interface SystemMessageProps {
  message: SystemMessage;
}

export function SystemMessage({ message }: SystemMessageProps) {
  const getIcon = () => {
    switch (message.type) {
      case 'alert':
        return <AlertTriangle className="h-4 w-4" />;
      case 'maintenance':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getVariant = () => {
    switch (message.type) {
      case 'alert':
        return 'destructive';
      case 'maintenance':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <Alert variant={getVariant()}>
      {getIcon()}
      <AlertTitle className="ml-2">Important Notice</AlertTitle>
      <AlertDescription className="ml-2">
        {message.message}
        {message.type === 'auth' && (
          <span>
            {' '}If you had an active subscription, please email{' '}
            <a 
              href="mailto:Support@IntelGain.io" 
              className="font-medium underline hover:text-deep-blue"
            >
              Support@IntelGain.io
            </a>
            {' '}for assistance.
          </span>
        )}
      </AlertDescription>
    </Alert>
  );
}