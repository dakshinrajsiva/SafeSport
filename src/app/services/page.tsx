'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Footer from '@/components/Footer';
import { UserCheck } from 'lucide-react';

const SERVICES = [
  {
    title: "Safeguarding Foundations & Training",
    description: "Safeguarding is most effective when people clearly understand their roles and feel confident acting within them.",
    details: [
      "Building shared understanding, professional judgement, and practical confidence among staff, coaches, teachers, volunteers, and leaders.",
      "Training grounded in real situations, supporting participants to recognise concerns, understand boundaries, and respond appropriately.",
      "Work builds clarity and awareness, helping safeguarding become a core professional skill."
    ],
    outcomes: [
      "Greater staff confidence and consistency",
      "Clearer understanding of responsibilities and boundaries",
      "Improved awareness of early concerns and appropriate responses",
      "A stronger foundation for safe, respectful environments"
    ]
  },
  {
    title: "Systems and Readiness",
    description: "The greater challenge comes after training: how safeguarding is actually implemented in day-to-day practice.",
    details: [
      "We work with institutions to strengthen the systems and structures that make safeguarding easier to apply in practice.",
      "Developing clear codes of conduct, reporting pathways, role clarity, and internal processes.",
      "Ensuring safeguarding is supported by systems that work in real environments, under real pressures, and across changing contexts."
    ]
  },
  {
    title: "Consulting, Advisory, and Audit",
    description: "Safeguarding is not static. As organisations grow, face new challenges, or operate across multiple locations, safeguarding needs evolve.",
    details: [
      "Ongoing consulting, advisory, and review support to help organisations anticipate risk, strengthen decision-making, and maintain safeguarding integrity.",
      "Support during periods of increased complexity, including tournaments, camps, events, tours, and travel-based activities.",
      "Independent perspectives, structured reviews, and practical guidance to support informed leadership.",
      "Helping leaders and teams operate with clarity, preparedness, and confidence in high-pressure settings."
    ]
  },
  {
    title: "Get Started",
    description: "Ready to strengthen safeguarding in your organisation? Let's build a safer future together.",
    details: [
      "We work with organisations at different stages of their safeguarding journey.",
      "From initial consultation to ongoing support, we're here to help you build safe, accountable environments.",
      "Contact us to discuss how we can support your specific needs and context."
    ]
  }
];

export default function ServicesPage() {
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
        // Scroll distance: 4 viewport heights (1 screen per card)
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

    // Refresh ScrollTrigger after a short delay
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
    <main className="relative bg-white text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-[100vh] min-h-screen pt-32">
        
        {/* Header */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              Our Services
            </h1>
            <div className="w-full h-[1px] bg-gray-200 mb-12" />
            <p className="text-xl md:text-2xl font-montserrat text-gray-700 max-w-4xl leading-relaxed">
              Safe Sport India supports organisations at different stages of their safeguarding journey — from building foundational understanding, to strengthening systems, to providing ongoing guidance and assurance.
            </p>
          </div>
        </section>

        {/* Services List - Horizontal scroll with GSAP */}
        <section
          ref={sectionRef}
          className="relative h-screen w-screen overflow-hidden bg-white"
        >
          {/* Horizontal track */}
          <div
            ref={trackRef}
            className="absolute top-0 left-0 h-full flex flex-nowrap will-change-transform items-center"
          >
            {SERVICES.map((service, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 h-full flex items-center justify-center px-12 md:px-24"
                style={{ width: '100vw', minWidth: '100vw' }}
              >
                <div className="max-w-4xl w-full bg-white border-2 border-gray-200 rounded-3xl p-10 md:p-16 shadow-2xl">
                  <div className="flex flex-col">
                    <div className="mb-8">
                      <span className="text-7xl md:text-8xl font-league font-bold text-[#004AAD]/10 leading-none block mb-6">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-league uppercase leading-tight tracking-tight text-[#1A1A1A] mb-4">
                        {service.title}
                      </h2>
                      <div className="w-16 h-1 bg-[#004AAD] rounded-full" />
                    </div>

                    <p className="text-xl md:text-2xl font-montserrat font-medium text-gray-800 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-4 items-start text-base md:text-lg font-montserrat text-gray-600">
                          <span className="mt-2 w-2 h-2 bg-[#004AAD] rounded-full flex-shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {service.outcomes && (
                      <div className="pt-8 border-t border-gray-200">
                        <h4 className="text-xs font-black font-montserrat uppercase tracking-[0.2em] text-[#004AAD] mb-6">
                          Key Outcomes
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {service.outcomes.map((outcome, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm font-medium font-montserrat text-gray-700">
                              <UserCheck size={16} className="text-[#004AAD] flex-shrink-0 mt-0.5" />
                              {outcome}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Counter - bottom right */}
                <div className="absolute bottom-8 right-8 md:right-16 text-gray-300 font-league text-2xl md:text-3xl">
                  {String(i + 1).padStart(2, '0')} / 04
                </div>
              </div>
            ))}
          </div>

          {/* Fixed header - "Our Services" */}
          <div className="absolute top-8 left-6 md:left-16 z-[100] pointer-events-none">
            <h2 className="text-2xl md:text-3xl font-league text-[#004AAD] uppercase tracking-tight">
              Our Services
            </h2>
            <p className="text-xs md:text-sm font-montserrat text-gray-500 mt-1 tracking-wide">
              Scroll to explore
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
