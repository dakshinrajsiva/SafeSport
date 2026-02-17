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
      // Wrap words in spans; highlight "safeguarding" in blue
      textRef.current.innerHTML = words.map(word => {
        const isSafeguarding = word.toLowerCase().replace(/[^a-z]/g, '') === 'safeguarding';
        const spanClass = isSafeguarding
          ? 'opacity-10 inline-block transition-colors duration-500 vision-highlight'
          : 'opacity-10 inline-block transition-colors duration-500';
        const underline = isSafeguarding
          ? ' style="text-decoration: underline; text-decoration-style: dotted; text-decoration-color: #004AAD; text-underline-offset: 6px; text-decoration-thickness: 3px;"'
          : '';
        return `<span class="${spanClass}"${underline}>${word}</span>`;
      }).join(' ');
    }

    const spans = textRef.current?.querySelectorAll('span');
    
    if (!spans || spans.length === 0) return;

    const normalSpans = Array.from(spans).filter((s) => !(s as HTMLElement).classList.contains('vision-highlight'));
    const highlightSpans = Array.from(spans).filter((s) => (s as HTMLElement).classList.contains('vision-highlight'));

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
    <section id="about" ref={sectionRef} className="py-48 px-4 md:px-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h3 className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.4em] mb-16 text-xs md:text-sm flex items-center gap-4">
          <span className="w-8 h-[1px] bg-[#004AAD]"></span>
          The Vision
        </h3>
        <p ref={textRef} className="text-4xl md:text-7xl font-bold leading-[1.05] text-[#1A1A1A] tracking-tight font-sans">
          SafeSport India is India’s first dedicated safeguarding enterprise committed to building a safe, ethical, and inclusive sporting, organizational, and educational environment across the country.
        </p>
      </div>
    </section>
  );
}
