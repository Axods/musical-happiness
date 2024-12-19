import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { GoogleAnalytics } from '@/components/analytics'; // New component for client-side logic

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IntelGain | People Search & Background Check Platform',
  description:
    'Conduct reliable people searches, US person lookups, and background checks. IntelGain is the top search tool for journalists and researchers.',
  keywords: [
    'people search',
    'background check',
    'US person search',
    'US people search',
    'TLO alternative',
    'investigative research tool',
    'public records search',
    'find people online',
    'person lookup',
    'data search for journalists',
    'person search engine',
    'people search tool',
    'background check tool',
    'US people search tool',
  ],
  authors: [{ name: 'IntelGain Team' }],
  creator: 'IntelGain',
  publisher: 'IntelGain',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://intelgain.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'IntelGain | People Search & Background Check Platform',
    description:
      'The best people search and background check platform for journalists, researchers, and professionals. Transparent pricing and free journalist access.',
    url: 'https://intelgain.io',
    siteName: 'IntelGain',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IntelGain | US Person Search Tool',
    description:
      'Conduct reliable US person searches and background checks with IntelGain. Free for journalists.',
    creator: '@IntelGain',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-google-site-verification-here',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#002855" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body className={inter.className}>
        {/* Include Google Analytics */}
        <GoogleAnalytics />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
