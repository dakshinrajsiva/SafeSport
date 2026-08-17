/**
 * Programmatic scrolling helpers.
 *
 * Lenis drives the page from a rAF loop, so a native `scrollTo({behavior:'smooth'})`
 * races it and can be cancelled mid-animation. Whenever Lenis is mounted we hand the
 * request to it; otherwise (reduced motion, or before mount) we fall back to native.
 */

type LenisLike = {
  scrollTo: (target: number | string | HTMLElement, options?: { offset?: number; duration?: number }) => void;
  stop?: () => void;
  start?: () => void;
};

let lenis: LenisLike | null = null;

export function registerLenis(instance: LenisLike | null) {
  lenis = instance;
}

export function scrollToTop() {
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.2 });
    return;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Locks page scrolling while an overlay (menu, modal) is open. `overflow: hidden` alone
 * does not stop Lenis, which drives scrolling from its own wheel/touch handlers.
 */
export function lockScroll() {
  document.body.style.overflow = 'hidden';
  lenis?.stop?.();
}

export function unlockScroll() {
  document.body.style.overflow = '';
  lenis?.start?.();
}

/** `offset` is applied on top of the element position - negative clears the fixed header. */
export function scrollToElement(el: HTMLElement, offset = 0) {
  if (lenis) {
    lenis.scrollTo(el, { offset, duration: 1.2 });
    return;
  }
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
