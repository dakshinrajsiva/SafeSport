'use client';

import { ReactLenis } from 'lenis/react';
import { useEffect, useState, ReactNode, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { registerLenis } from '@/lib/scroll';

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<any>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    // Sync ScrollTrigger with Lenis
    const lenisInstance = lenisRef.current?.lenis;
    if (lenisInstance) {
      lenisInstance.on('scroll', ScrollTrigger.update);
    }

    // Let buttons elsewhere in the tree (back-to-top, menu) scroll through Lenis
    registerLenis(lenisInstance ?? null);

    return () => {
      gsap.ticker.remove(update);
      lenisInstance?.off('scroll', ScrollTrigger.update);
      registerLenis(null);
    };
  }, [prefersReducedMotion]);

  // When reduced motion is preferred, skip Lenis entirely and use native scroll
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={false}
      options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}
