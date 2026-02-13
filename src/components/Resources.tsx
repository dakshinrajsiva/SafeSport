'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { FileText, Book, HelpCircle, Newspaper } from 'lucide-react';

const RESOURCES = [
  {
    title: "Toolkits",
    description: "Plug-and-play templates for codes of conduct, reporting forms, and induction checklists.",
    icon: <FileText size={24} />,
    number: "01",
  },
  {
    title: "Guides",
    description: "Plain-language explainers for boards, staff, and coaches on their safeguarding duties.",
    icon: <Book size={24} />,
    number: "02",
  },
  {
    title: "Safeguarding Explainers",
    description: "Short primers on key concepts like grooming, power, consent, and trauma-informed practice.",
    icon: <HelpCircle size={24} />,
    number: "03",
  },
  {
    title: "Articles",
    description: "Commentary on emerging risks, case studies, and lessons from global safeguarding practice.",
    icon: <Newspaper size={24} />,
    number: "04",
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
              key={resource.number}
              className="resource-card group p-8 rounded-3xl bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#004AAD]/5 rounded-bl-[100px] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#004AAD]/10" />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F7FA] flex items-center justify-center mb-8 group-hover:bg-[#004AAD] transition-colors duration-500 shadow-sm">
                    <div className="text-[#004AAD] group-hover:text-white transition-colors duration-500">
                      {resource.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-league uppercase text-[#1A1A1A] mb-4 leading-tight group-hover:text-[#004AAD] transition-colors">
                    {resource.title}
                  </h4>
                  <p className="text-base text-gray-500 leading-relaxed font-montserrat">
                    {resource.description}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center group-hover:border-[#004AAD]/20 transition-colors">
                  <span className="text-sm font-bold font-montserrat text-[#004AAD] uppercase tracking-widest">
                    Read More
                  </span>
                  <span className="text-4xl font-league text-gray-100 group-hover:text-[#004AAD]/20 transition-colors duration-500">
                    {resource.number}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
