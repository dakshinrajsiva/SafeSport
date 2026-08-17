'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const maskParentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion preference - skip scroll-driven animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Show content immediately without animation
      if (contentRef.current) contentRef.current.style.opacity = '1';
      if (maskRef.current) maskRef.current.style.opacity = '0';
      if (scrollCueRef.current) scrollCueRef.current.style.opacity = '0';
      if (overlayRef.current) {
        overlayRef.current.style.backgroundColor = 'rgba(0, 74, 173, 1)';
        overlayRef.current.style.mixBlendMode = 'normal';
      }
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: 1,
        pin: true,
      }
    });

    tl.fromTo(overlayRef.current,
      { backgroundColor: 'rgba(0, 74, 173, 0.4)', mixBlendMode: 'multiply' },
      { backgroundColor: 'rgba(0, 74, 173, 1)', mixBlendMode: 'normal', duration: 2 },
      0
    );

    tl.to(maskParentRef.current, {
      backgroundColor: 'rgba(0, 74, 173, 1)',
      duration: 2,
      mixBlendMode: 'normal',
    }, 0);

    tl.fromTo(maskRef.current,
      { scale: 0.8, opacity: 1 },
      { scale: 100, opacity: 0, ease: "power4.inOut", duration: 2 },
      0
    );

    // The scroll cue has done its job the moment the user starts scrolling
    tl.to(scrollCueRef.current, { opacity: 0, duration: 0.3 }, 0);

    tl.fromTo(contentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5 },
      "-=1.5"
    );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen [@supports(height:100svh)]:h-[100svh] w-full overflow-hidden bg-white"
      aria-label="Hero introduction"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover"
          poster="/images/hero-poster.jpg"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-running-track-athlete-preparing-to-start-a-race-40502-large.mp4" type="video/mp4" />
        </video>
        <div ref={overlayRef} className="absolute inset-0 bg-[#004AAD]/40 mix-blend-multiply" />
      </div>

      <div ref={maskParentRef} className="absolute inset-0 z-10 flex items-center justify-center bg-white mix-blend-screen pointer-events-none" aria-hidden="true">
        <div
          ref={maskRef}
          className="flex flex-col items-center"
        >
          <span className="text-[clamp(4rem,20vw,20rem)] font-league tracking-tight uppercase leading-[0.7] text-[#004AAD] text-center">
            SAFE <br /> SPORT
          </span>
          {/* Pull-up scales with the type so "India" never collides with "Sport" on small screens */}
          <span className="text-[clamp(1.5rem,5vw,5rem)] font-league tracking-[0.2em] uppercase text-[#004AAD] -mt-[0.22em]">
            India
          </span>
        </div>
      </div>

      {/* Scroll cue sitting under the wordmark - fades out as the mask opens */}
      <div
        ref={scrollCueRef}
        className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-[#004AAD] pointer-events-none"
        aria-hidden="true"
      >
        <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.35em] opacity-60 mb-2">
          Scroll down
        </span>
        <ChevronDown className="w-7 h-7 md:w-8 md:h-8 animate-scroll-cue" strokeWidth={2.5} />
        <ChevronDown
          className="w-7 h-7 md:w-8 md:h-8 -mt-4 animate-scroll-cue opacity-50"
          strokeWidth={2.5}
          style={{ animationDelay: '0.18s' }}
        />
      </div>

      {/* Centred on phones so the copy is not stranded at the bottom; lower-third composition from md up */}
      <div ref={contentRef} className="absolute inset-0 z-20 flex flex-col items-center justify-center md:justify-end pb-0 md:pb-24 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-4 text-center px-4 max-w-4xl">
              <div className="overflow-hidden">
                <h1 className="text-white font-league text-4xl md:text-6xl uppercase tracking-wide leading-none">
                  <span className="inline-block animate-slide-in-left opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                    Protecting Potential.
                  </span>
                  <span className="inline-block animate-slide-in-right opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                    &nbsp;Powering Performance.
                  </span>
                </h1>
              </div>

              <p className="text-white/80 font-montserrat font-medium text-sm md:text-lg tracking-wide max-w-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
                We help institutions build safe, accountable environments across sport, education, and youth-facing sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
