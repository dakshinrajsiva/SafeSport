'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=150%',
        scrub: 1,
        pin: true,
      }
    });

    // Dramatic WWP scaling mask effect
    tl.fromTo(maskRef.current, 
      { scale: 0.8, opacity: 1 },
      { scale: 100, opacity: 0, ease: "power4.inOut", duration: 2 }
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
        <div className="absolute inset-0 bg-[#004AAD]/40 mix-blend-multiply" />
      </div>

      {/* The WWP Text Mask Overlay - Using League Gothic */}
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-white mix-blend-screen pointer-events-none">
        <div 
          ref={maskRef}
          className="flex flex-col items-center"
        >
          <h1 className="text-[25vw] font-league tracking-tight uppercase leading-[0.7] text-black text-center">
            SAFE <br /> SPORT
          </h1>
        </div>
      </div>

      {/* Floating UI Elements - Using Montserrat */}
      <div ref={contentRef} className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-24 pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center">
          <button className="bg-white text-[#004AAD] px-14 py-6 rounded-sm font-montserrat font-black uppercase tracking-[0.2em] text-xs hover:bg-[#004AAD] hover:text-white transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group mb-10 overflow-hidden relative">
            <span className="relative z-10">Get Certified</span>
            <div className="absolute inset-0 bg-[#004AAD] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-1 h-12 bg-white/30 rounded-full overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce" />
            </div>
            <p className="text-white font-montserrat font-bold tracking-[0.4em] uppercase text-[10px] md:text-xs text-center px-4">
              Protecting Potential. Powering Performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
