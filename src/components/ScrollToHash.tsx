'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { scrollToElement } from '@/lib/scroll';

const STORAGE_KEY = 'safesport:scrollToFaqs';

/** Called from Navbar when navigating home specifically to open FAQs */
export function requestScrollToFaqs() {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem(STORAGE_KEY, '1');
}

const HEADER_OFFSET = -108;
/** Within this many px of the target counts as landed */
const LANDED_TOLERANCE = 24;

function scrollFaqsElementIntoView() {
  const el = document.getElementById('faqs');
  if (!el) return false;
  scrollToElement(el, HEADER_OFFSET); /* offset clears the fixed nav */
  if (window.location.hash !== '#faqs') {
    window.history.replaceState(null, '', `${window.location.pathname}#faqs`);
  }
  return true;
}

/**
 * The home page pins the hero and the sector slider, so its height grows by several
 * viewports after mount and a single scroll lands short. Re-measure until #faqs is
 * actually in place (or the user takes over by scrolling themselves).
 */
function scrollToFaqsWhenSettled() {
  let attempts = 0;
  let cancelled = false;

  const stopOnUserScroll = () => { cancelled = true; };
  window.addEventListener('wheel', stopOnUserScroll, { once: true, passive: true });
  window.addEventListener('touchstart', stopOnUserScroll, { once: true, passive: true });

  const tick = () => {
    if (cancelled) return cleanup();
    const el = document.getElementById('faqs');
    if (!el) {
      if (++attempts > 16) return cleanup();
      return void window.setTimeout(tick, 250);
    }
    const landed = Math.abs(el.getBoundingClientRect().top - Math.abs(HEADER_OFFSET)) < LANDED_TOLERANCE;
    if (landed || ++attempts > 16) return cleanup();
    scrollFaqsElementIntoView();
    window.setTimeout(tick, 250);
  };

  const cleanup = () => {
    window.removeEventListener('wheel', stopOnUserScroll);
    window.removeEventListener('touchstart', stopOnUserScroll);
  };

  tick();
  return cleanup;
}

/**
 * On home page: scrolls to FAQs when hash is #faqs, after nav from menu
 * (sessionStorage), or when hash changes.
 */
export default function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;

    const pending = sessionStorage.getItem(STORAGE_KEY);
    if (pending) sessionStorage.removeItem(STORAGE_KEY);

    let cancelSettleLoop: (() => void) | undefined;
    if (pending || window.location.hash === '#faqs') {
      cancelSettleLoop = scrollToFaqsWhenSettled();
    }

    const onHashChange = () => {
      if (window.location.hash === '#faqs') {
        cancelSettleLoop?.();
        cancelSettleLoop = scrollToFaqsWhenSettled();
      }
    };
    window.addEventListener('hashchange', onHashChange);

    return () => {
      cancelSettleLoop?.();
      window.removeEventListener('hashchange', onHashChange);
    };
  }, [pathname]);

  return null;
}
