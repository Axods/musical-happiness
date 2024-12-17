"use client";

import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SensitiveInfoProps {
  type: 'ssn' | 'dob';
  value?: string;
}

export function SensitiveInfo({ type, value }: SensitiveInfoProps) {
  if (!value) return null;

  return (
    <div className="relative group">
      <div className="flex items-center">
        <Lock className="h-4 w-4 text-teal mr-1" />
        <span>{type.toUpperCase()}: </span>
        <div className="ml-1 blur-sm group-hover:blur-md transition-all">
          {type === 'ssn' ? '***-**-****' : '**/**/****'}
        </div>
      </div>
      <div className="hidden group-hover:block absolute top-full left-0 mt-2 p-2 bg-white rounded-md shadow-lg z-10 w-48">
        <p className="text-xs text-steel-gray mb-2">
          Subscribe to view full {type === 'ssn' ? 'SSN' : 'date of birth'}
        </p>
        <Link href="/pricing">
          <Button size="sm" variant="default" className="w-full text-xs">
            View Plans
          </Button>
        </Link>
      </div>
    </div>
  );
}