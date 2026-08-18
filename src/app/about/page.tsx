'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';
import { lockScroll, unlockScroll } from '@/lib/scroll';

const VALUES = [
  {
    letter: "S",
    title: "Standards",
    description: "We set and uphold the global benchmark for safeguarding in the Indian context."
  },
  {
    letter: "A",
    title: "Accountability",
    description: "Transparency and ethical action at every level of the sporting ecosystem."
  },
  {
    letter: "F",
    title: "Fairness",
    description: "Equal protection and respect for every athlete, regardless of background."
  },
  {
    letter: "E",
    title: "Empowerment",
    description: "Turning awareness into the confidence and courage to act."
  }
];

const FOUNDERS = [
  {
    name: "Aman Jain",
    role: "Co-Founder",
    image: "/images/founders/aman.jpg",
    bio: "Aman Jain is a Co-Founder of Safe Sport India, bringing extensive experience in sports administration and policy development. He is passionate about creating systemic change in the Indian sports ecosystem, ensuring that safety and ethics are at the forefront of athletic development. His work focuses on bridging the gap between policy and practice, helping institutions implement safeguarding measures that are both effective and sustainable."
  },
  {
    name: "Rania Mecca",
    role: "Co-Founder",
    image: "/images/founders/rania.jpg",
    bio: "Rania Mecca is a safeguarding specialist with a background in sport psychology and organisational development. She has worked extensively with grassroots organisations, schools, and academies to implement practical, child-centred safeguarding systems. Her approach is grounded in the belief that safe environments are built on culture, trust, and shared understanding, not just compliance."
  }
];

export default function AboutPage() {
  const [selectedFounder, setSelectedFounder] = useState<typeof FOUNDERS[0] | null>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Focus trap and keyboard handling for founder modal
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedFounder) return;

    // Focus the close button when modal opens
    const timer = setTimeout(() => {
      modalCloseRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedFounder(null);
        triggerRef.current?.focus();
        return;
      }

      if (e.key !== 'Tab') return;
      const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href], [tabindex="0"]'
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    lockScroll(); // Lenis keeps scrolling the page behind the modal otherwise
    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKeyDown);
      unlockScroll();
    };
  }, [selectedFounder]);

  const openFounderModal = useCallback((founder: typeof FOUNDERS[0], buttonEl: HTMLButtonElement) => {
    triggerRef.current = buttonEl;
    setSelectedFounder(founder);
  }, []);

  const closeFounderModal = useCallback(() => {
    setSelectedFounder(null);
    triggerRef.current?.focus();
  }, []);

  return (
    <main className="relative bg-white text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-0 md:mb-[100vh] min-h-screen pt-32">

        {/* Header */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              About Us
            </h1>
            <div className="w-full h-[1px] bg-gray-200" aria-hidden="true" />
          </div>
        </section>

        {/* Founders */}
        <section id="founders" className="px-6 md:px-12 lg:px-24 mb-32 scroll-mt-[108px]" aria-labelledby="founders-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="founders-heading" className="text-4xl md:text-6xl font-league uppercase mb-16 text-[#1A1A1A]">Our Founders</h2>

            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
              {FOUNDERS.map((founder, i) => (
                <button
                  key={i}
                  type="button"
                  className="group cursor-pointer text-left"
                  aria-label={`Learn more about ${founder.name}, ${founder.role}`}
                  onClick={(e) => openFounderModal(founder, e.currentTarget)}
                >
                  <div className="aspect-[3/4] relative mb-6 overflow-hidden bg-gray-100 rounded-sm">
                    <Image
                      src={founder.image}
                      alt={`Portrait of ${founder.name}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading={i === 0 ? 'eager' : 'lazy'}
                    />

                    <div className="absolute inset-0 bg-[#004AAD]/0 group-hover:bg-[#004AAD]/10 transition-colors duration-500 opacity-0 group-hover:opacity-100">
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                        <span className="bg-white px-6 py-3 rounded-full text-[#004AAD] font-bold uppercase tracking-widest text-xs shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 inline-block whitespace-nowrap" aria-hidden="true">
                          Know more
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-league uppercase tracking-wide mb-1 text-[#1A1A1A] group-hover:text-[#004AAD] transition-colors">{founder.name}</h3>
                  <p className="text-sm font-montserrat uppercase tracking-[0.2em] text-gray-500">{founder.role}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Background */}
        <section id="our-background" className="px-6 md:px-12 lg:px-24 bg-[#004AAD] py-14 md:py-24 text-white scroll-mt-[108px]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-6 md:gap-24">
              <div className="md:col-span-5">
                <h2 className="text-4xl md:text-5xl font-league uppercase mb-4 md:mb-6 text-white">Our Background</h2>
                <div className="w-20 h-1 bg-white/20 mb-0 md:mb-8" />
              </div>
              <div className="md:col-span-7 space-y-8 text-lg font-montserrat text-white/80 leading-relaxed">
                <p>
                  SafeSport India was established by founders who have worked closely with <span className="font-bold text-white border-b-2 border-white/30">athletes</span>, <span className="font-bold text-white border-b-2 border-white/30">educators</span>, and institutions, seeing first-hand the consequences of systems that rely on intent rather than structure.
                </p>
                <p>
                  Trained internationally in <span className="font-bold text-white border-b-2 border-white/30">sport psychology</span> and safeguarding, they recognised the need for an organisation that can translate global standards into practical, culturally relevant systems for India.
                </p>
                <p>
                  Their approach combines research, applied psychology, and <span className="font-bold text-white border-b-2 border-white/30">organisational insight</span> to help institutions move beyond compliance and build genuine safeguarding capacity. SafeSport India reflects their belief that safeguarding is not a legal formality, but a professional capability, one that must be embedded into everyday practice to protect people and sustain performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why SafeSport */}
        <section id="why-safesport" className="px-6 md:px-12 lg:px-24 bg-[#004AAD] py-14 md:py-24 text-white scroll-mt-[108px]">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-6 md:gap-16">
              <div className="md:col-span-5">
                <h2 className="text-4xl md:text-5xl font-league uppercase mb-6 text-white leading-tight">
                  Why SafeSport -<br />And Beyond Sport
                </h2>
                <div className="w-20 h-1 bg-white/30 mb-0 md:mb-8" />
              </div>
              <div className="md:col-span-7 space-y-8 text-lg font-montserrat text-white/80 leading-relaxed">
                <p>
                  The principles of safeguarding extend far beyond the world of sport. Wherever there is a duty of care in schools, youth programmes, organisations, and residential settings, the same foundations apply: clear boundaries, shared understanding, accountable systems, and cultures where people feel safe to speak up.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values - S A F E Letters */}
        <section id="our-values" className="px-6 md:px-12 lg:px-24 pb-32 scroll-mt-[108px]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-league uppercase mb-6 text-[#1A1A1A]">Our Values</h2>
              <p className="text-lg font-montserrat text-gray-500 max-w-2xl mx-auto">
                Guided by the S.A.F.E. framework.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8" role="list">
              {VALUES.map((val, i) => (
                <div
                  key={i}
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${val.letter} for ${val.title}: ${val.description}`}
                  className="md:aspect-square relative group bg-white border border-gray-100 hover:border-[#004AAD] focus-within:border-[#004AAD] transition-all duration-500 flex flex-col items-center justify-center overflow-hidden cursor-default p-8 md:p-0 text-center"
                >
                  <span className="text-[5rem] md:text-[12rem] font-league font-bold text-[#004AAD] transition-colors duration-500 leading-none select-none" aria-hidden="true">
                    {val.letter}
                  </span>

                  {/* Touch devices have no hover, so the copy is shown outright below md */}
                  <div className="md:hidden mt-2" aria-hidden="true">
                    <h3 className="text-xl font-league uppercase tracking-wider mb-2 text-[#1A1A1A]">{val.title}</h3>
                    <p className="text-sm font-montserrat text-gray-500 leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="hidden md:flex absolute inset-0 bg-[#004AAD] translate-x-full group-hover:translate-x-0 group-focus-within:translate-x-0 focus:translate-x-0 transition-transform duration-500 flex-col items-center justify-center text-white p-6 text-center" aria-hidden="true">
                    <span className="text-6xl md:text-8xl font-league font-bold mb-4">{val.letter}</span>
                    <h3 className="text-xl font-league uppercase tracking-wider mb-2">{val.title}</h3>
                    <p className="text-xs font-montserrat opacity-80 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />

      {/* Founder Bio Modal */}
      <AnimatePresence>
        {selectedFounder && (
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={`About ${selectedFounder.name}`}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeFounderModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                ref={modalCloseRef}
                onClick={closeFounderModal}
                aria-label={`Close ${selectedFounder.name} bio`}
                className="absolute top-4 right-4 z-10 w-10 h-10 min-w-[44px] min-h-[44px] bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-[#004AAD] hover:text-white transition-colors"
              >
                <X size={20} aria-hidden="true" />
              </button>

              <div className="w-full md:w-1/3 bg-gray-100 relative min-h-[300px] md:min-h-full">
                <Image
                  src={selectedFounder.image}
                  alt={`Portrait of ${selectedFounder.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="w-full md:w-2/3 p-8 md:p-12 overflow-y-auto">
                <h3 className="text-4xl md:text-5xl font-league uppercase text-[#004AAD] mb-2">{selectedFounder.name}</h3>
                <p className="text-sm font-montserrat font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">{selectedFounder.role}</p>
                <div className="prose prose-lg text-gray-600 font-montserrat">
                  <p>{selectedFounder.bio}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
