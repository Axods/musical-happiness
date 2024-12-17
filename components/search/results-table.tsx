"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MapPin, Phone, Calendar, User } from 'lucide-react';
import { SensitiveInfo } from './sensitive-info';
import { SubscriptionPrompt } from './subscription-prompt';
import type { SearchResult } from '@/lib/api/types/search';

interface ResultsTableProps {
  results: SearchResult[];
}

export function ResultsTable({ results }: ResultsTableProps) {
  return (
    <div className="space-y-4">
      <SubscriptionPrompt />
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Sensitive Info</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((result, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">
                  <div>
                    {result.full_name}
                    {result.other_fields?.middlename && (
                      <span className="text-sm text-steel-gray ml-2">
                        MI: {result.other_fields.middlename}
                      </span>
                    )}
                  </div>
                  {result.other_fields?.aka1fullname && (
                    <div className="text-sm text-steel-gray flex items-center mt-1">
                      <User className="h-3 w-3 mr-1" />
                      AKA: {result.other_fields.aka1fullname}
                    </div>
                  )}
                </TableCell>
                <TableCell>
                  {(result.other_fields?.city || result.other_fields?.st) && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-teal mr-1" />
                      <span>
                        {result.other_fields.city}
                        {result.other_fields.st && `, ${result.other_fields.st}`}
                      </span>
                    </div>
                  )}
                  {result.other_fields?.county_name && (
                    <div className="text-sm text-steel-gray mt-1">
                      County: {result.other_fields.county_name}
                    </div>
                  )}
                </TableCell>
                <TableCell>
                  {result.phone_number && (
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-teal mr-1" />
                      {result.phone_number}
                    </div>
                  )}
                </TableCell>
                <TableCell>
                  <div className="space-y-2">
                    <SensitiveInfo 
                      type="dob" 
                      value={result.other_fields?.dob} 
                    />
                    <SensitiveInfo 
                      type="ssn" 
                      value={result.sensitive_fields?.ssn} 
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}