'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

/**
 * Animated blue line that draws on scroll, inspired by Village of Wisdom.
 */
export default function MovingLine({ className }: { className?: string }) {
  const lineRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (lineRef.current && containerRef.current) {
      // Set initial length
      const length = lineRef.current.getTotalLength();
      gsap.set(lineRef.current, { strokeDasharray: length, strokeDashoffset: length });

      gsap.to(lineRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        }
      });
    }
  }, []);

  return (
    <div ref={containerRef} className={`absolute left-0 top-0 w-full h-full pointer-events-none overflow-hidden ${className}`}>
      <svg 
        className="w-full h-full" 
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <path
          ref={lineRef}
          d="M 50,0 Q 80,25 50,50 Q 20,75 50,100"
          fill="none"
          stroke="#004AAD"
          strokeWidth="6"
          vectorEffect="non-scaling-stroke"
          className="opacity-80"
        />
      </svg>
    </div>
  );
}
