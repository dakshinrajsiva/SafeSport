'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const RESOURCES = [
  {
    title: "Toolkits",
    description: "Plug-and-play templates for codes of conduct, reporting forms, and induction checklists.",
    icon: "01",
  },
  {
    title: "Guides",
    description: "Plain-language explainers for boards, staff, and coaches on their safeguarding duties.",
    icon: "02",
  },
  {
    title: "Safeguarding explainers",
    description: "Short primers on key concepts like grooming, power, consent, and trauma-informed practice.",
    icon: "03",
  },
  {
    title: "Articles",
    description: "Commentary on emerging risks, case studies, and lessons from global safeguarding practice.",
    icon: "04",
  },
];

export default function Resources() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(headerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      // Animate cards with staggered left-to-right reveal
      const cards = cardsRef.current?.querySelectorAll('.resource-card');
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, x: -60 },
          {
            opacity: 1, x: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="resources" ref={sectionRef} className="py-32 px-4 md:px-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef}>
          <h3 className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.4em] mb-6 text-xs md:text-sm flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#004AAD]" />
            Resources
          </h3>
          <h2 className="text-4xl md:text-6xl font-league text-[#1A1A1A] uppercase leading-tight mb-16">
            Practical tools to make safeguarding real.
          </h2>
        </div>
        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((resource) => (
            <div
              key={resource.icon}
              className="resource-card group p-8 rounded-2xl bg-[#F5F7FA] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default relative overflow-hidden"
            >
              <div className="w-10 h-10 rounded-full bg-[#004AAD]/10 flex items-center justify-center mb-6 group-hover:bg-[#004AAD] transition-colors duration-500">
                <span className="text-xs font-black text-[#004AAD] group-hover:text-white transition-colors duration-500 font-montserrat">{resource.icon}</span>
              </div>
              <h4 className="text-base md:text-lg font-bold text-[#1A1A1A] mb-3 leading-snug">
                {resource.title}
              </h4>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed font-montserrat">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
