"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { getSession, signOut } from '@/lib/auth';

export function AuthButtons() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      setUser(session?.user || null);
      setLoading(false);
    };
    checkSession();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
    router.push('/');
  };

  if (loading) {
    return null;
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="text-white hover:text-gold hover:bg-deep-blue/50"
          onClick={() => router.push('/dashboard')}
        >
          Dashboard
        </Button>
        <Button
          className="bg-teal hover:bg-gold hover:text-deep-blue transition-colors"
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Link href="/sign-in">
        <Button 
          variant="ghost" 
          className="text-white hover:text-gold hover:bg-deep-blue/50"
        >
          Sign In
        </Button>
      </Link>
      <Link href="/sign-up">
        <Button 
          className="bg-teal hover:bg-gold hover:text-deep-blue transition-colors"
        >
          Sign Up
        </Button>
      </Link>
    </div>
  );
}