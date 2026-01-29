'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Mission() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (textRef.current) {
      const content = textRef.current.innerText;
      const words = content.split(' ');
      // Wrap words in spans, preserving spaces
      textRef.current.innerHTML = words.map(word => `<span class="opacity-10 inline-block transition-colors duration-500">${word}</span>`).join(' ');
    }

    const spans = textRef.current?.querySelectorAll('span');
    
    if (!spans || spans.length === 0) return;

    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 65%',
      end: 'bottom 35%',
      scrub: 1,
      animation: gsap.to(spans, {
        opacity: 1,
        color: '#1A1A1A',
        stagger: 0.1,
        ease: "power2.out",
      })
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-48 px-4 md:px-24 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.4em] mb-16 text-xs md:text-sm flex items-center gap-4">
          <span className="w-8 h-[1px] bg-[#004AAD]"></span>
          The Vision
        </h3>
        <p ref={textRef} className="text-4xl md:text-7xl font-bold leading-[1.05] text-[#1A1A1A] tracking-tight font-sans">
          SafeSport India is India’s first dedicated safeguarding enterprise dedicated to building a safe, ethical, and inclusive sporting, organizational, and educational environment across the country.
        </p>
      </div>
    </section>
  );
}
