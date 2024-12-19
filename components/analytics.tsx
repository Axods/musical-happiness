"use client"; // This ensures the component runs on the client side

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-M8VBWDRQBL', {
          page_path: url,
        });
      }
    };

    handleRouteChange(pathname); // Track the initial page load
  }, [pathname]);

  return (
    <>
      {/* Google Analytics script */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-M8VBWDRQBL"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M8VBWDRQBL');
          `,
        }}
      />
    </>
  );
}
