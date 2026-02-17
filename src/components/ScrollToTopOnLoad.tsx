'use client';

import { useEffect } from 'react';

/**
 * On full page load/reload, scroll to top so the user always starts at the top.
 */
export default function ScrollToTopOnLoad() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Prevent browser from restoring previous scroll position after we scroll
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
