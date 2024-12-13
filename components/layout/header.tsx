"use client";

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getSession, signOut } from '@/lib/auth';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  
  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      setUser(session?.user || null);
    };
    checkSession();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setUser(null);
    router.push('/');
  };
  
  const links = [
    { href: '/', label: 'Home', showAlways: false },
    { href: '/about', label: 'About', showAlways: true },
    { href: '/journalist-access', label: 'Journalist Access', showAlways: true },
    { href: '/pricing', label: 'Pricing', showAlways: true },
  ];
  
  return (
    <motion.header 
      className="w-full bg-deep-blue py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="text-white" />
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            (link.showAlways || pathname !== link.href) && (
              <motion.div
                key={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={link.href}
                  className="text-white hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            )
          ))}
          
          {user ? (
            <>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="ghost" 
                  className="text-white hover:text-gold hover:bg-deep-blue/50"
                  onClick={() => router.push('/dashboard')}
                >
                  Dashboard
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  className="bg-teal hover:bg-gold hover:text-deep-blue transition-colors"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/sign-in">
                  <Button 
                    variant="ghost" 
                    className="text-white hover:text-gold hover:bg-deep-blue/50"
                  >
                    Sign In
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/sign-up">
                  <Button 
                    className="bg-teal hover:bg-gold hover:text-deep-blue transition-colors"
                  >
                    Sign Up
                  </Button>
                </Link>
              </motion.div>
            </>
          )}
        </nav>
      </div>
    </motion.header>
  );
}