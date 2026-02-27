'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * On home page, scrolls to #faqs when the URL hash is present (e.g. after clicking FAQ in nav).
 */
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;
    const hash = window.location.hash?.slice(1); // 'faqs' or ''
    if (hash !== 'faqs') return;
    const el = document.getElementById('faqs');
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [pathname]);

  return null;
}
