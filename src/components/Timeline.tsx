'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const SAFESPORT_STEPS = [
  {
    title: "Training and Awareness",
    content: "Building foundational knowledge and cultural buy-in through comprehensive safeguarding education for all stakeholders.",
    badge: "Step 1"
  },
  {
    title: "Applied Practice",
    content: "Implementing customized safeguarding frameworks and training modules that integrate seamlessly into your daily operations.",
    badge: "Step 2"
  },
  {
    title: "Systems and Readiness",
    content: "Establishing robust reporting channels, audit-ready documentation, and incident response protocols for long-term accountability.",
    badge: "Step 3"
  }
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <section id="approach" ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="mb-32 text-center">
          <h2 className="text-5xl md:text-7xl font-league text-[#004AAD] tracking-tight mb-4 uppercase leading-none">
            This is how our collaboration works
          </h2>
          <div className="w-24 h-1.5 bg-[#004AAD] mx-auto"></div>
        </div>

        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-100 -translate-x-1/2 hidden md:block">
            <div ref={lineRef} className="w-full bg-[#004AAD] h-0 origin-top"></div>
          </div>

          <div className="space-y-24 md:space-y-0">
            {SAFESPORT_STEPS.map((step, index) => (
              <div 
                key={index} 
                className={`collaboration-item flex flex-col md:flex-row items-center w-full mb-0 md:mb-32 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Content Area */}
                <div className="w-full md:w-1/2 flex justify-center px-4 md:px-12">
                  <div className={`w-full max-w-lg bg-[#F5F7FA] p-8 md:p-12 rounded-[2.5rem] group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100 ${
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  }`}>
                    <div className="inline-block px-4 py-1 rounded-full bg-[#004AAD]/10 text-[#004AAD] text-xs font-montserrat font-bold uppercase tracking-widest mb-6">
                      {step.badge}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 group-hover:text-[#004AAD] transition-colors leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-lg leading-relaxed">
                      {step.content}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-[#004AAD] z-10 shadow-xl">
                  <span className="text-xs font-black text-[#004AAD]">0{index + 1}</span>
                  <div className="absolute inset-0 bg-[#004AAD]/10 rounded-full animate-ping -z-10"></div>
                </div>

                {/* Empty Spacer for the other side */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
