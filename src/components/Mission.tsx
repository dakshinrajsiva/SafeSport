'use client';

import { useRef, useEffect, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const MISSION_TEXT = "SafeSport India is India's first dedicated safeguarding enterprise committed to building a safe, ethical, and inclusive sporting, organizational, and educational environment across the country.";

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const words = useMemo(() => MISSION_TEXT.split(' '), []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Show all words immediately
      wordsRef.current.forEach(span => {
        if (span) {
          span.style.opacity = '1';
          const word = span.textContent?.toLowerCase().replace(/[^a-z]/g, '');
          span.style.color = word === 'safeguarding' ? '#004AAD' : '#1A1A1A';
        }
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const spans = wordsRef.current.filter(Boolean) as HTMLSpanElement[];
    if (spans.length === 0) return;

    const normalSpans = spans.filter(s => !s.classList.contains('vision-highlight'));
    const highlightSpans = spans.filter(s => s.classList.contains('vision-highlight'));

    const tl = gsap.timeline();
    tl.to(spans, { opacity: 1, stagger: 0.1, ease: "power2.out" }, 0);
    tl.to(normalSpans, { color: "#1A1A1A", stagger: 0.1, ease: "power2.out" }, 0);
    tl.to(highlightSpans, { color: "#004AAD", stagger: 0.1, ease: "power2.out" }, 0);

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 65%",
      end: "bottom 35%",
      scrub: 1,
      animation: tl,
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-48 px-4 md:px-24 bg-white relative overflow-hidden" aria-labelledby="vision-heading">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 id="vision-heading" className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.4em] mb-16 text-xs md:text-sm flex items-center gap-4">
          <span className="w-8 h-[1px] bg-[#004AAD]" aria-hidden="true"></span>
          The Vision
        </h2>
        <p className="text-4xl md:text-7xl font-bold leading-[1.05] text-[#1A1A1A] tracking-tight font-sans">
          {words.map((word, i) => {
            const isSafeguarding = word.toLowerCase().replace(/[^a-z]/g, '') === 'safeguarding';
            return (
              <span key={i}>
                <span
                  ref={el => { wordsRef.current[i] = el; }}
                  className={`opacity-10 inline-block transition-colors duration-500${isSafeguarding ? ' vision-highlight' : ''}`}
                  style={isSafeguarding ? {
                    textDecoration: 'underline',
                    textDecorationStyle: 'dotted',
                    textDecorationColor: '#004AAD',
                    textUnderlineOffset: '6px',
                    textDecorationThickness: '3px',
                  } : undefined}
                >
                  {word}
                </span>
                {i < words.length - 1 ? ' ' : ''}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
