'use client';

import { motion } from 'framer-motion';
import { Code, Key, Search, Shield, AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Documentation() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn}>
            <h1 className="text-4xl font-bold text-deep-blue mb-4">API Documentation</h1>
            <p className="text-xl text-steel-gray mb-8">
              Complete documentation for the IntelGain API
            </p>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-md p-8 mb-8"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-deep-blue mb-4">Base URL</h2>
            <div className="bg-gray-50 p-4 rounded-md font-mono text-steel-gray">
              https://api.intelgain.io
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-lg shadow-md p-8 mb-8"
            {...fadeIn}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-teal mr-2" />
              <h2 className="text-2xl font-bold text-deep-blue">Authentication</h2>
            </div>
            <p className="text-steel-gray mb-4">
              All API endpoints require authentication via an API key, which should be included in the request headers.
            </p>
            <div className="bg-gray-50 p-4 rounded-md font-mono text-sm">
              <p className="text-steel-gray">X-API-Key: your_api_key</p>
            </div>
          </motion.div>

          <motion.div 
            {...fadeIn} 
            transition={{ delay: 0.4 }}
          >
            <Tabs defaultValue="endpoints" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
                <TabsTrigger value="rate-limits">Rate Limits</TabsTrigger>
                <TabsTrigger value="examples">Examples</TabsTrigger>
              </TabsList>

              <TabsContent value="endpoints" className="space-y-4">
                {/* Search Endpoint */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <Search className="w-5 h-5 text-teal mr-2" />
                    <h3 className="text-xl font-semibold text-deep-blue">Search</h3>
                  </div>
                  <div className="font-mono text-sm bg-gray-50 p-3 rounded mb-4">
                    GET /search
                  </div>
                  <p className="text-steel-gray mb-4">
                    Search by name.
                  </p>
                  <h4 className="font-semibold text-deep-blue mb-2">Parameters:</h4>
                  <ul className="list-disc list-inside mb-4 text-steel-gray">
                    <li>name (required): String to search for</li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <pre className="text-sm overflow-x-auto">
{`{
    "data": [...search results...],
    "usage": {
        "daily_requests": 7,
        "daily_limit": 8,
        "remaining": 1,
        "total_requests": 10
    }
}`}
                    </pre>
                  </div>
                </div>

                {/* Phone Search Endpoint */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <Search className="w-5 h-5 text-teal mr-2" />
                    <h3 className="text-xl font-semibold text-deep-blue">Phone Search</h3>
                  </div>
                  <div className="font-mono text-sm bg-gray-50 p-3 rounded mb-4">
                    GET /search
                  </div>
                  <p className="text-steel-gray mb-4">
                    Search by phone number.
                  </p>
                  <h4 className="font-semibold text-deep-blue mb-2">Parameters:</h4>
                  <ul className="list-disc list-inside mb-4 text-steel-gray">
                    <li>phone (required): The phone number to search for, in the format of a string (e.g., "9402431558")</li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <pre className="text-sm overflow-x-auto">
{`{
    "data": [...search results...],
    "usage": {
        "daily_requests": 7,
        "daily_limit": 8,
        "remaining": 1,
        "total_requests": 10
    }
}`}
                    </pre>
                  </div>
                </div>

                {/* Check API Key Status Endpoint */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <Key className="w-5 h-5 text-teal mr-2" />
                    <h3 className="text-xl font-semibold text-deep-blue">Check API Key Status</h3>
                  </div>
                  <div className="font-mono text-sm bg-gray-50 p-3 rounded mb-4">
                    GET /check
                  </div>
                  <p className="text-steel-gray mb-4">
                    Check your API key&apos;s usage and limits.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <pre className="text-sm overflow-x-auto">
{`{
    "api_key": "your_key",
    "daily_requests": 7,
    "daily_limit": 8,
    "remaining": 1
}`}
                    </pre>
                  </div>
                </div>

                {/* Trial Search Endpoint */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <Code className="w-5 h-5 text-teal mr-2" />
                    <h3 className="text-xl font-semibold text-deep-blue">Trial Search</h3>
                  </div>
                  <div className="font-mono text-sm bg-gray-50 p-3 rounded mb-4">
                    GET /trial-search
                  </div>
                  <p className="text-steel-gray mb-4">
                    Limited search functionality without an API key.
                  </p>
                  <h4 className="font-semibold text-deep-blue mb-2">Parameters:</h4>
                  <ul className="list-disc list-inside mb-4 text-steel-gray">
                    <li>name (required): String to search for</li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <pre className="text-sm overflow-x-auto">
{`{
    "message": "Trial data. Sign up for full access.",
    "searches_remaining": 4,
    "data": [...limited results...]
}`}
                    </pre>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="rate-limits">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <AlertCircle className="w-5 h-5 text-teal mr-2" />
                    <h3 className="text-xl font-semibold text-deep-blue">Rate Limits</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-md">
                      <h4 className="font-semibold text-deep-blue mb-2">Free Trial</h4>
                      <p className="text-steel-gray">5 searches per IP per day</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md">
                      <h4 className="font-semibold text-deep-blue mb-2">API Key</h4>
                      <p className="text-steel-gray">Varies by plan (default 100/day)</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="examples">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-deep-blue mb-4">Example Requests</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-md">
                      <h4 className="font-mono text-sm mb-2">Search Request</h4>
                      <pre className="text-sm overflow-x-auto">
{`curl -X GET "https://api.intelgain.io/search?name=john%20doe" \\
-H "X-API-Key: your_api_key"`}
                      </pre>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md">
                      <h4 className="font-mono text-sm mb-2">Check API Status</h4>
                      <pre className="text-sm overflow-x-auto">
{`curl -X GET "https://api.intelgain.io/check" \\
-H "X-API-Key: your_api_key"`}
                      </pre>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md">
                      <h4 className="font-mono text-sm mb-2">Trial Search</h4>
                      <pre className="text-sm overflow-x-auto">
{`curl -X GET "https://api.intelgain.io/trial-search?name=john"`}
                      </pre>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-md">
                      <h4 className="font-mono text-sm mb-2">Phone Search</h4>
                      <pre className="text-sm overflow-x-auto">
{`curl -X GET "https://api.intelgain.io/search?phone=9402431558" \\
-H "X-API-Key: your_api_key"`}
                      </pre>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
