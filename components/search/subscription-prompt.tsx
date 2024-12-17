"use client";

import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function SubscriptionPrompt() {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-4">
      <div className="flex items-center text-deep-blue mb-2">
        <Shield className="h-5 w-5 mr-2 text-teal" />
        <h3 className="font-semibold">Premium Data Available</h3>
      </div>
      <p className="text-sm text-steel-gray mb-3">
        Subscribe to access full records including:
      </p>
      <ul className="text-sm text-steel-gray mb-3 list-disc list-inside">
        <li>Complete SSN numbers</li>
        <li>Full date of birth</li>
        <li>Detailed address history</li>
        <li>Additional phone numbers</li>
        <li>Email addresses</li>
      </ul>
      <Link href="/pricing">
        <Button className="w-full bg-teal hover:bg-deep-blue transition-colors">
          View Subscription Plans
        </Button>
      </Link>
    </div>
  );
}