import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IntelGain - Professional U.S. Person Search Platform',
  description: 'The most reliable U.S. person search platform for journalists and researchers. Free access for journalists, transparent pricing, and comprehensive data search capabilities.',
  keywords: [
    'person search',
    'US person search',
    'journalist research tool',
    'people finder',
    'background check',
    'public records search',
    'investigative journalism tool',
    'data search platform',
    'professional research tool',
    'people search engine'
  ],
  authors: [{ name: 'IntelGain' }],
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
    title: 'IntelGain - Professional U.S. Person Search Platform',
    description: 'The most reliable U.S. person search platform for journalists and researchers. Free access for journalists, transparent pricing, and comprehensive data search capabilities.',
    url: 'https://intelgain.io',
    siteName: 'IntelGain',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IntelGain - Professional U.S. Person Search Platform',
    description: 'The most reliable U.S. person search platform for journalists and researchers. Free access for journalists.',
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}