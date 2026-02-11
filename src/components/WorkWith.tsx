'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const PARTNERS = [
  {
    title: "NGO/S4D's",
    number: "01",
    category: "Policy & Standards",
    description: "Evaluating and upgrading safeguarding policies to meet global and Indian standards.",
    image: "/partners/1.jpg",
    overlay: "bg-black/40",
  },
  {
    title: "Private Academies",
    number: "02",
    category: "Culture & Practice",
    description: "Embedding safe practices into daily routines, communication, reporting, and culture.",
    image: "/partners/2.jpg",
    overlay: "bg-black/40",
  },
  {
    title: "Institutions",
    number: "03",
    category: "Integration",
    description: "We help integrate safeguarding into daily practice, staff capability, & organisational systems.",
    image: "/partners/3.jpg",
    overlay: "bg-black/40",
  },
  {
    title: "National Bodies",
    number: "04",
    category: "Systems & Reporting",
    description: "We set up reporting systems, risk registers, codes of conduct, & protection systems.",
    image: "/partners/4.jpg",
    overlay: "bg-black/40",
  },
];

export default function WorkWith() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Create a timeline for the horizontal scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        // Scroll distance: 4 viewport heights (1 screen per slide)
        end: () => `+=${window.innerHeight * 4}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Animate the track horizontally
    tl.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth),
      ease: 'none',
    });

    // Refresh ScrollTrigger after a short delay to ensure correct calculations
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timeout);
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      id="who-we-work-with"
      ref={sectionRef}
      className="relative h-screen w-screen overflow-hidden bg-[#0a0a0a]"
    >
      {/* Horizontal track - Akaru-style full-viewport slides */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 h-full flex flex-nowrap will-change-transform"
      >
        {PARTNERS.map((partner, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 h-full flex items-end"
            style={{ width: '100vw', minWidth: '100vw' }}
          >
            {/* Full-bleed background image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={partner.image}
                alt={partner.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
              <div
                className={cn(
                  'absolute inset-0 pointer-events-none',
                  partner.overlay
                )}
              />
            </div>

            {/* Content overlay - Akaru editorial layout */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pb-16 md:pb-24">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
                {/* Left: Number, category, title */}
                <div className="flex flex-col gap-4 md:gap-6">
                  <div className="flex items-center gap-6">
                    <span className="text-5xl md:text-[8vw] font-league text-white/30 leading-none tracking-tighter">
                      {partner.number}
                    </span>
                    <span className="text-xs md:text-sm font-montserrat font-medium text-white/70 uppercase tracking-[0.3em]">
                      {partner.category}
                    </span>
                  </div>
                  <h3 className="text-5xl md:text-[7vw] lg:text-[6rem] font-league text-white uppercase leading-[0.85] tracking-tighter">
                    {partner.title}
                  </h3>
                </div>

                {/* Right: Description + CTA */}
                <div className="flex flex-col gap-8 max-w-md md:max-w-lg">
                  <p className="text-lg md:text-2xl font-montserrat font-medium text-white/90 leading-relaxed">
                    {partner.description}
                  </p>
                  <button
                    type="button"
                    className="group flex items-center gap-4 w-fit font-montserrat font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs text-white hover:text-[#004AAD] transition-colors duration-300"
                  >
                    <span className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      →
                    </span>
                    Learn more
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom right counter - Akaru style */}
            <div className="absolute bottom-6 right-6 md:right-16 z-20 text-white font-league text-2xl md:text-4xl opacity-40">
              {partner.number} / 04
            </div>
          </div>
        ))}
      </div>

      {/* Fixed header - "Who We Work With" - visible across all slides */}
      <div className="absolute top-12 left-6 md:left-16 z-[100] pointer-events-none">
        <h2 className="text-2xl md:text-4xl font-league text-white uppercase tracking-tight">
          Who We Work With
        </h2>
        <p className="text-xs md:text-sm font-montserrat text-white/70 mt-1 tracking-wide">
          One framework. Context-specific delivery.
        </p>
      </div>
    </section>
  );
}
