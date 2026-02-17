'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import HoverReveal from '@/components/ui/HoverReveal';
import { X, ChevronRight } from 'lucide-react';

const VALUES = [
  {
    letter: "S",
    title: "Standards",
    description: "Setting the benchmark for safety."
  },
  {
    letter: "A",
    title: "Accountability",
    description: "Ensuring responsibility at all levels."
  },
  {
    letter: "F",
    title: "Fairness",
    description: "Creating equitable environments for all."
  },
  {
    letter: "E",
    title: "Empowerment",
    description: "Building confidence to act."
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

  return (
    <main className="relative bg-white text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-[100vh] min-h-screen pt-32">
        
        {/* Header */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              About Us
            </h1>
            <div className="w-full h-[1px] bg-gray-200" />
          </div>
        </section>

        {/* Founders */}
        <section className="px-6 md:px-12 lg:px-24 mb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-league uppercase mb-16 text-[#1A1A1A]">Our Founders</h2>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-24">
              {FOUNDERS.map((founder, i) => (
                <div key={i} className="group cursor-pointer" onClick={() => setSelectedFounder(founder)}>
                  <div className="aspect-[3/4] relative mb-6 overflow-hidden bg-gray-100">
                    {/* Founder Image - Using Next.js Image with fallback container */}
                    <div className="relative w-full h-full">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-[#004AAD]/0 group-hover:bg-[#004AAD]/10 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="bg-white px-6 py-3 rounded-full text-[#004AAD] font-bold uppercase tracking-widest text-xs shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Bio
                      </span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-league uppercase tracking-wide mb-1 text-[#1A1A1A] group-hover:text-[#004AAD] transition-colors">{founder.name}</h3>
                  <p className="text-sm font-montserrat uppercase tracking-[0.2em] text-gray-500">{founder.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 bg-[#F5F7FA] py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12 md:gap-24">
              <div className="md:col-span-5">
                <h2 className="text-4xl md:text-5xl font-league uppercase mb-6 text-[#1A1A1A]">Our Background</h2>
                <div className="w-20 h-1 bg-[#004AAD] mb-8" />
              </div>
              <div className="md:col-span-7 space-y-8 text-lg font-montserrat text-gray-600 leading-relaxed">
                <p>
                  SafeSport India was established by founders who have worked closely with <HoverReveal>athletes</HoverReveal>, <HoverReveal>educators</HoverReveal>, and institutions, seeing first-hand the consequences of systems that rely on intent rather than structure.
                </p>
                <p>
                  Trained internationally in <HoverReveal>sport psychology</HoverReveal> and safeguarding, they recognised the need for an organisation that can translate global standards into practical, culturally relevant systems for India.
                </p>
                <p>
                  Their approach combines research, applied psychology, and <HoverReveal>organisational insight</HoverReveal> to help institutions move beyond compliance and build genuine safeguarding capacity. SafeSport India reflects their belief that safeguarding is not a legal formality, but a professional capability, one that must be embedded into everyday practice to protect people and sustain performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values - S A F E Letters */}
        <section className="px-6 md:px-12 lg:px-24 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-league uppercase mb-6 text-[#1A1A1A]">Our Values</h2>
              <p className="text-lg font-montserrat text-gray-500 max-w-2xl mx-auto">
                Guided by the S.A.F.E. framework.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {VALUES.map((val, i) => (
                <div 
                  key={i} 
                  className="aspect-square relative group bg-white border border-gray-100 hover:border-[#004AAD] transition-all duration-500 flex flex-col items-center justify-center overflow-hidden"
                >
                  <span className="text-[8rem] md:text-[12rem] font-league font-bold text-[#004AAD]/10 group-hover:text-[#004AAD] transition-colors duration-500 leading-none select-none">
                    {val.letter}
                  </span>
                  
                  <div className="absolute inset-0 bg-[#004AAD] translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center justify-center text-white p-6 text-center">
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
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFounder(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedFounder(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-[#1A1A1A] hover:bg-[#004AAD] hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/3 bg-gray-100 relative min-h-[300px] md:min-h-full">
                {/* Founder Image in Modal */}
                <div className="relative w-full h-full">
                  <img 
                    src={selectedFounder.image} 
                    alt={selectedFounder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
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
