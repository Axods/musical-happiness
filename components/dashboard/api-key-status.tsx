"use client";

import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";

interface ApiKeyStatusProps {
  isActive: boolean;
}

export function ApiKeyStatus({ isActive }: ApiKeyStatusProps) {
  return (
    <Badge 
      variant={isActive ? "default" : "destructive"}
      className="ml-2"
    >
      {isActive ? (
        <CheckCircle className="w-4 h-4 mr-1" />
      ) : (
        <XCircle className="w-4 h-4 mr-1" />
      )}
      {isActive ? 'Active' : 'Inactive'}
    </Badge>
  );
}