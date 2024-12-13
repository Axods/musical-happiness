"use client";

import { Card } from '@/components/ui/card';
import { MapPin, Phone, Calendar, Shield, User } from 'lucide-react';

export type SearchResult = {
  full_name: string;
  other_fields?: {
    address?: string;
    city?: string;
    dob?: string;
    middlename?: string;
    st?: string;
    county_name?: string;
    zip?: string;
    aka1fullname?: string;
  };
  phone_number?: string;
  sensitive_fields?: {
    ssn?: string;
  };
};

export function ResultCard({ result }: { result: SearchResult }) {
  const hasLocation = result.other_fields?.city || result.other_fields?.st;
  const hasAka = result.other_fields?.aka1fullname;

  return (
    <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6 space-y-6">
        <div className="border-b border-gray-100 pb-4">
          <h3 className="text-xl font-semibold text-deep-blue mb-2">
            {result.full_name}
            {result.other_fields?.middlename && (
              <span className="text-steel-gray ml-2 text-sm">
                Middle Initial: {result.other_fields.middlename}
              </span>
            )}
          </h3>
          {hasAka && result.other_fields?.aka1fullname && (
            <div className="flex items-center text-steel-gray text-sm mt-1">
              <User className="h-4 w-4 mr-2" />
              Also known as: {result.other_fields.aka1fullname}
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {result.other_fields?.address && (
            <div className="col-span-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-teal mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-deep-blue">
                    {result.other_fields.address}
                  </p>
                  {hasLocation && (
                    <p className="text-steel-gray">
                      {result.other_fields.city}
                      {result.other_fields.st && `, ${result.other_fields.st}`}
                      {result.other_fields.zip && ` ${result.other_fields.zip}`}
                    </p>
                  )}
                  {result.other_fields.county_name && (
                    <p className="text-sm text-steel-gray">
                      County: {result.other_fields.county_name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {result.phone_number && (
            <div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-teal mr-2" />
                <div>
                  <p className="text-sm text-steel-gray">Phone</p>
                  <p className="font-medium text-deep-blue">
                    {result.phone_number}
                  </p>
                </div>
              </div>
            </div>
          )}

          {result.other_fields?.dob && (
            <div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-teal mr-2" />
                <div>
                  <p className="text-sm text-steel-gray">Date of Birth</p>
                  <p className="font-medium text-deep-blue">
                    {result.other_fields.dob}
                  </p>
                </div>
              </div>
            </div>
          )}

          {result.sensitive_fields?.ssn && (
            <div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-teal mr-2" />
                <div>
                  <p className="text-sm text-steel-gray">SSN</p>
                  <p className="font-medium text-deep-blue">
                    {result.sensitive_fields.ssn}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}