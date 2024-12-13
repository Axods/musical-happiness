"use client";

import { Activity, BarChart3, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface StatsOverviewProps {
  dailyRequests: number;
  totalRequests: number;
  lastActivity: string;
  requestLimit: number;
}

export function StatsOverview({
  dailyRequests,
  totalRequests,
  lastActivity,
  requestLimit
}: StatsOverviewProps) {
  return (
    <div className="grid gap-4 md:grid-cols-3 mb-8">
      <Card className="p-6">
        <div className="flex items-center space-x-2">
          <Activity className="h-5 w-5 text-teal" />
          <h3 className="text-lg font-semibold text-deep-blue">Daily Usage</h3>
        </div>
        <div className="mt-3">
          <div className="text-2xl font-bold text-deep-blue">
            {dailyRequests} / {requestLimit}
          </div>
          <p className="text-sm text-steel-gray">Requests Today</p>
          <div className="mt-2 h-2 w-full bg-gray-100 rounded-full">
            <div
              className="h-2 bg-teal rounded-full"
              style={{
                width: `${(dailyRequests / requestLimit) * 100}%`
              }}
            />
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center space-x-2">
          <BarChart3 className="h-5 w-5 text-teal" />
          <h3 className="text-lg font-semibold text-deep-blue">Total Requests</h3>
        </div>
        <div className="mt-3">
          <div className="text-2xl font-bold text-deep-blue">{totalRequests}</div>
          <p className="text-sm text-steel-gray">Lifetime API requests</p>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-teal" />
          <h3 className="text-lg font-semibold text-deep-blue">Last Activity</h3>
        </div>
        <div className="mt-3">
          <div className="text-2xl font-bold text-deep-blue">
            {new Date(lastActivity).toLocaleDateString()}
          </div>
          <p className="text-sm text-steel-gray">Last API key usage</p>
        </div>
      </Card>
    </div>
  );
}