"use client";

import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PriceCardProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  buttonText: string;
  description?: string;
  sellixProductId: string;
}

export function PriceCard({
  name,
  price,
  period,
  features,
  highlighted = false,
  buttonText,
  description,
  sellixProductId
}: PriceCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${
      highlighted ? 'ring-2 ring-teal' : ''
    }`}>
      <div className={`p-8 ${highlighted ? 'bg-teal text-white' : ''}`}>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold">${price}</span>
          <span className="ml-2 text-sm opacity-80">/{period}</span>
        </div>
        {description && (
          <p className="mt-2 text-sm opacity-90">{description}</p>
        )}
      </div>
      <div className="p-8">
        <ul className="space-y-4 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-steel-gray">
              <Check className="w-5 h-5 text-teal mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <a 
          href={`https://IntelGain.mysellix.io/product/${sellixProductId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
          <button
            className={`w-full py-2 px-4 rounded-md font-semibold ${
              highlighted 
                ? 'bg-teal hover:bg-deep-blue text-white' 
                : 'bg-deep-blue hover:bg-teal text-white'
            }`}
          >
            {buttonText}
          </button>
        </a>
      </div>
    </div>
  );
}