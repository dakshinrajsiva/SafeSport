'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const SAFESPORT_STEPS = [
  {
    title: "Audit",
    content: "We begin with a structured assessment of your organisation’s current safeguarding practices, policies, systems, and culture. Through a detailed survey and organisational assessment, we identify existing strengths, areas of risk, and key gaps.",
  },
  {
    title: "Policy Development",
    content: "We work with your organisation to develop, strengthen, or implement the policies and systems needed to support safeguarding in practice. This may include safeguarding policies, codes of conduct, roles and responsibilities, and other organisational protocols.",
  },
  {
    title: "Training and Awareness",
    content: "Building foundational knowledge and cultural buy-in through comprehensive safeguarding education for all stakeholders.",
  },
  {
    title: "Review & Continuous Improvement",
    content: "Safeguarding is not a one-time intervention. We return to assess how effectively the systems are working in practice. This allows us to measure progress against the initial baseline, identify areas that still need attention, and provide recommendations for continued improvement.",
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    // Line drawing animation
    gsap.fromTo(lineRef.current,
      { height: 0 },
      {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
          end: "bottom 70%",
          scrub: true,
        }
      }
    );

    // Animate items on scroll
    const items = gsap.utils.toArray('.collaboration-item');
    items.forEach((item: any, index) => {
      gsap.fromTo(item,
        {
          opacity: 0,
          x: index % 2 === 0 ? 50 : -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section id="approach" ref={containerRef} className="py-12 bg-white relative overflow-hidden" aria-label="Collaboration process">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="mb-12 text-center">
          <h2 className="text-5xl md:text-7xl font-league text-[#004AAD] tracking-tight mb-4 uppercase leading-none">
            This is how our collaboration works
          </h2>
          <div className="w-24 h-1.5 bg-[#004AAD] mx-auto" aria-hidden="true"></div>
        </div>

        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2 hidden md:block" aria-hidden="true">
            <div ref={lineRef} className="w-full bg-[#004AAD] h-0 origin-top"></div>
          </div>

          <ol className="space-y-10 md:space-y-0 list-none">
            {SAFESPORT_STEPS.map((step, index) => (
              <li
                key={index}
                className={`collaboration-item relative flex flex-col md:flex-row items-center w-full mb-0 md:mb-6 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Content Area */}
                <div className="w-full md:w-1/2 flex justify-center px-4 md:px-12 z-10">
                  <div
                    className={`w-full max-w-lg bg-[#F5F7FA] p-6 md:p-7 rounded-[1.75rem] group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#004AAD]/20 flex flex-col ${
                      index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                    }`}
                  >
                    <div className="inline-block self-start px-4 py-1 rounded-full bg-[#004AAD]/10 text-[#004AAD] text-xs font-montserrat font-bold uppercase tracking-widest mb-4 transition-colors group-hover:bg-[#004AAD] group-hover:text-white">
                      Step {index + 1}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#004AAD] transition-colors leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-[15px] md:text-base leading-relaxed group-hover:text-gray-600 transition-colors">
                      {step.content}
                    </p>
                  </div>
                </div>

                {/* Center Node -- matches badge numbering */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-[#004AAD] z-10 shadow-xl" aria-hidden="true">
                  <span className="text-xs font-black text-[#004AAD]">{index + 1}</span>
                  <div className="absolute inset-0 bg-[#004AAD]/10 rounded-full animate-ping -z-10"></div>
                </div>

                {/* Empty Spacer for the other side */}
                <div className="hidden md:block w-1/2" aria-hidden="true"></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
