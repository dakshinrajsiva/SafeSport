'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PARTNERS = [
  {
    title: "NGO/S4D's",
    number: "01",
    category: "Policy & Standards",
    description: "Evaluating and upgrading safeguarding policies to meet global and Indian standards.",
    image: "/partners/1.jpg",
    overlay: "bg-black/40",
    href: "/who-we-work-with#sector-0",
  },
  {
    title: "Private Academies",
    number: "02",
    category: "Culture & Practice",
    description: "Embedding safe practices into daily routines, communication, reporting, and culture.",
    image: "/partners/2.jpg",
    overlay: "bg-black/40",
    href: "/who-we-work-with#sector-1",
  },
  {
    title: "Institutions",
    number: "03",
    category: "Integration",
    description: "We help integrate safeguarding into daily practice, staff capability, & organisational systems.",
    image: "/partners/3.jpg",
    overlay: "bg-black/40",
    href: "/who-we-work-with#sector-2",
  },
  {
    title: "National Bodies",
    number: "04",
    category: "Systems & Reporting",
    description: "We set up reporting systems, risk registers, codes of conduct, & protection systems.",
    image: "/partners/4.jpg",
    overlay: "bg-black/40",
    href: "/who-we-work-with#sector-3",
  },
];

const AUTOPLAY_MS = 5500;
/** Horizontal travel (px) that counts as a swipe rather than a tap */
const SWIPE_THRESHOLD = 45;

export default function WorkWith() {
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [interacting, setInteracting] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  const goTo = useCallback((next: number) => {
    setIndex((next + PARTNERS.length) % PARTNERS.length);
  }, []);

  // Only run the timer while the carousel is on screen and nobody is interacting with it
  useEffect(() => {
    if (reducedMotion || interacting || !inView) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % PARTNERS.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [reducedMotion, interacting, inView]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    setInteracting(true);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    setInteracting(false);
    if (start === null) return;
    const delta = (e.changedTouches[0]?.clientX ?? start) - start;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    goTo(index + (delta < 0 ? 1 : -1));
  };

  return (
    <section
      id="who-we-work-with"
      ref={sectionRef}
      aria-label="Who we work with"
      aria-roledescription="carousel"
      className="relative h-screen [@supports(height:100svh)]:h-[100svh] w-full overflow-hidden bg-[#0a0a0a]"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setInteracting(true)}
      onBlurCapture={() => setInteracting(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slide track */}
      <div
        className="absolute inset-0 flex flex-nowrap will-change-transform"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: reducedMotion ? 'none' : 'transform 900ms cubic-bezier(0.65, 0, 0.35, 1)',
        }}
      >
        {PARTNERS.map((partner, i) => {
          const isActive = i === index;
          return (
            <div
              key={partner.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${PARTNERS.length}: ${partner.title}`}
              aria-hidden={!isActive}
              className="relative w-full shrink-0 h-full flex items-end"
            >
              {/* Full-bleed background image - the first two are worth eager loading */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={partner.image}
                  alt={`${partner.title} - ${partner.description}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                  loading={i <= 1 ? undefined : 'lazy'}
                />
                <div className={cn('absolute inset-0 pointer-events-none', partner.overlay)} />
              </div>

              {/* Content overlay */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pb-28 md:pb-24">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
                  {/* Left: Number, category, title */}
                  <div className="flex flex-col gap-4 md:gap-6">
                    <div className="flex items-center gap-6">
                      <span className="text-5xl md:text-[8vw] font-league text-white/30 leading-none tracking-tighter" aria-hidden="true">
                        {partner.number}
                      </span>
                      <span className="hidden md:inline text-xs md:text-sm font-montserrat font-medium text-white/70 uppercase tracking-[0.3em]">
                        {partner.category}
                      </span>
                    </div>
                    <h3 className="text-5xl md:text-[7vw] lg:text-[6rem] font-league text-white uppercase leading-[0.85] tracking-tighter">
                      {partner.title}
                    </h3>
                  </div>

                  {/* Right: Description + CTA */}
                  <div className="flex flex-col gap-8 max-w-md md:max-w-lg">
                    <p className="hidden md:block text-lg md:text-2xl font-montserrat font-medium text-white/90 leading-relaxed">
                      {partner.description}
                    </p>
                    <Link
                      href={partner.href}
                      tabIndex={isActive ? undefined : -1}
                      className="group flex items-center gap-4 w-fit font-montserrat font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs text-white hover:text-[#004AAD] transition-colors duration-300"
                    >
                      <span className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white transition-colors duration-300" aria-hidden="true">
                        &rarr;
                      </span>
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section heading */}
      <div className="absolute top-32 left-6 md:left-16 z-20 pointer-events-none">
        <h2 className="text-4xl md:text-4xl font-league text-white uppercase tracking-tight leading-none">
          Who We Work With
        </h2>
        <p className="text-xs md:text-sm font-montserrat text-white/70 mt-2 tracking-wide">
          One framework. Context-specific delivery.
        </p>
      </div>

      {/* Counter - bottom left so it clears the back-to-top button on phones */}
      <div className="absolute bottom-6 left-6 md:left-16 z-20 text-white font-league text-2xl md:text-4xl opacity-40" aria-hidden="true">
        {PARTNERS[index].number} / {String(PARTNERS.length).padStart(2, '0')}
      </div>

      {/* Prev / next */}
      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#004AAD]"
      >
        <ChevronLeft size={22} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 items-center justify-center rounded-full border border-white/40 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#004AAD]"
      >
        <ChevronRight size={22} aria-hidden="true" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1">
        {PARTNERS.map((partner, i) => (
          <button
            key={partner.title}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${partner.title}`}
            aria-current={i === index}
            className="group flex h-11 w-11 items-center justify-center"
          >
            <span
              className={cn(
                'block h-1.5 rounded-full transition-all duration-500',
                i === index ? 'w-8 bg-white' : 'w-2.5 bg-white/40 group-hover:bg-white/70'
              )}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
