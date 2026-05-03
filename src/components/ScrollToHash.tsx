'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const STORAGE_KEY = 'safesport:scrollToFaqs';

/** Called from Navbar when navigating home specifically to open FAQs */
export function requestScrollToFaqs() {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(STORAGE_KEY, '1');
}

function scrollFaqsElementIntoView() {
  const el = document.getElementById('faqs');
  if (!el) return false;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' }); /* scroll-mt on #faqs clears fixed nav */
  if (window.location.hash !== '#faqs') {
    window.history.replaceState(null, '', `${window.location.pathname}#faqs`);
  }
  return true;
}

/**
 * On home page: scrolls to FAQs when hash is #faqs, after nav from menu
 * (sessionStorage), or when hash changes.
 */
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;

    const tryScroll = () => {
      const pending = sessionStorage.getItem(STORAGE_KEY);
      if (pending) {
        sessionStorage.removeItem(STORAGE_KEY);
        if (scrollFaqsElementIntoView()) return;
      }
      if (window.location.hash === '#faqs') {
        scrollFaqsElementIntoView();
      }
    };

    tryScroll();
    const t1 = window.setTimeout(tryScroll, 150);
    const t2 = window.setTimeout(tryScroll, 450);

    const onHashChange = () => {
      if (window.location.hash === '#faqs') scrollFaqsElementIntoView();
    };
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [pathname]);

  return null;
}
