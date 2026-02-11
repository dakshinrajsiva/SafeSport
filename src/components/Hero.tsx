'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const maskParentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    // Animate background overlay to solid blue
    tl.fromTo(overlayRef.current,
      { backgroundColor: 'rgba(0, 74, 173, 0.4)', mixBlendMode: 'multiply' },
      { backgroundColor: 'rgba(0, 74, 173, 1)', mixBlendMode: 'normal', duration: 2 },
      0
    );

    // Fade the white mask parent to blue
    tl.to(maskParentRef.current, {
      backgroundColor: 'rgba(0, 74, 173, 1)',
      duration: 2,
      mixBlendMode: 'normal',
    }, 0);

    // Dramatic WWP scaling mask effect
    tl.fromTo(maskRef.current, 
      { scale: 0.8, opacity: 1 },
      { scale: 100, opacity: 0, ease: "power4.inOut", duration: 2 },
      0
    );

    // Fade in the CTA and tagline
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
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-running-track-athlete-preparing-to-start-a-race-40502-large.mp4" type="video/mp4" />
        </video>
        <div ref={overlayRef} className="absolute inset-0 bg-[#004AAD]/40 mix-blend-multiply" />
      </div>

      {/* The WWP Text Mask Overlay - Using League Gothic */}
      <div ref={maskParentRef} className="absolute inset-0 z-10 flex items-center justify-center bg-white mix-blend-screen pointer-events-none">
        <div 
          ref={maskRef}
          className="flex flex-col items-center"
        >
          <h1 className="text-[20vw] font-league tracking-tight uppercase leading-[0.7] text-[#004AAD] text-center">
            SAFE <br /> SPORT
          </h1>
          <p className="text-[5vw] font-league tracking-[0.2em] uppercase text-[#004AAD] -mt-4">
            India
          </p>
        </div>
      </div>

      {/* Floating UI Elements - Using Montserrat */}
      <div ref={contentRef} className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-24 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-1 h-12 bg-white/30 rounded-full overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce" />
            </div>
            
            <div className="flex flex-col items-center gap-4 text-center px-4 max-w-4xl">
              <div className="overflow-hidden">
                <h2 className="text-white font-league text-4xl md:text-6xl uppercase tracking-wide leading-none">
                  <span className="inline-block animate-slide-in-left opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                    Protecting Potential.
                  </span>
                  <span className="inline-block animate-slide-in-right opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
                    &nbsp;Powering Performance.
                  </span>
                </h2>
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
