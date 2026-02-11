'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const SERVICES = [
  {
    title: "Safeguarding foundations / training",
    description: "Core training, induction, and role-specific modules that embed safeguarding literacy across your organisation.",
    number: "01",
  },
  {
    title: "Systems and readiness",
    description: "Policies, reporting pathways, and preparedness planning so you are ready before a concern arises.",
    number: "02",
  },
  {
    title: "Consulting, advisory, and audit",
    description: "Independent reviews, advisory support, and audits aligned to Indian law and global safeguarding standards.",
    number: "03",
  },
];

export default function Services() {
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

      // Animate cards staggered
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.8,
            stagger: 0.15,
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
    <section id="services" ref={sectionRef} className="py-32 px-4 md:px-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef}>
          <h3 className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.4em] mb-6 text-xs md:text-sm flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#004AAD]" />
            Our Services
          </h3>
          <h2 className="text-4xl md:text-6xl font-league text-[#1A1A1A] uppercase leading-tight mb-16">
            Building safeguarding as a capability.
          </h2>
        </div>
        <div ref={cardsRef} className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((service) => (
            <div 
              key={service.number}
              className="service-card group p-10 rounded-3xl bg-[#F5F7FA] border border-gray-100 hover:bg-[#004AAD] hover:border-[#004AAD] transition-all duration-700 cursor-default relative overflow-hidden"
            >
              <span className="absolute top-6 right-6 text-7xl font-league font-bold text-[#004AAD]/5 group-hover:text-white/10 transition-colors duration-700 leading-none">
                {service.number}
              </span>
              <h4 className="text-lg md:text-xl font-bold text-[#1A1A1A] group-hover:text-white mb-4 transition-colors duration-700 relative z-10 leading-snug">
                {service.title}
              </h4>
              <p className="text-base text-gray-500 group-hover:text-white/80 leading-relaxed transition-colors duration-700 relative z-10 font-montserrat">
                {service.description}
              </p>
              <div className="mt-8 w-8 h-[2px] bg-[#004AAD]/20 group-hover:bg-white/40 group-hover:w-16 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
