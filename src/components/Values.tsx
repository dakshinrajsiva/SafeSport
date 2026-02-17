'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VALUES_DATA = [
  { 
    letter: 'S', 
    title: 'Standards', 
    desc: 'We set and uphold the global benchmark for safeguarding in the Indian context.',
    color: '#004AAD',
    detail: 'Implementing rigorous protocols that protect athletes and organisations while fostering a culture of excellence.'
  },
  { 
    letter: 'A', 
    title: 'Accountability', 
    desc: 'Transparency and ethical action at every level of the sporting ecosystem.',
    color: '#800020',
    detail: 'Ensuring clear reporting lines and independent oversight to build trust and integrity within institutions.'
  },
  { 
    letter: 'F', 
    title: 'Fairness', 
    desc: 'Equal protection and respect for every athlete, regardless of background.',
    color: '#7CA57A',
    detail: 'Creating inclusive environments where dignity is non-negotiable and every voice is heard.'
  },
  { 
    letter: 'E', 
    title: 'Empowerment', 
    desc: 'Turning awareness into the confidence and courage to act.',
    color: '#FFBD59',
    textColor: '#1A1A1A',
    detail: 'Educating and enabling stakeholders to champion safeguarding as a pillar of performance.'
  },
];

export default function Values() {
  const [activeValue, setActiveValue] = useState<number | null>(null);

  return (
    <section id="standards" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-20">
          <h3 className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.4em] mb-8 text-xs md:text-sm flex items-center gap-4">
            <span className="w-8 h-[1px] bg-[#004AAD]" />
            Our Core Values
          </h3>
          <h2 className="text-6xl md:text-8xl font-league text-[#1A1A1A] uppercase leading-[0.8] tracking-tight">
            THE S.A.F.E. <br /> FRAMEWORK
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES_DATA.map((val, idx) => (
            <motion.button
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              onClick={() => setActiveValue(activeValue === idx ? null : idx)}
              className="text-left group relative"
            >
              {/* Card */}
              <div 
                className={`relative p-8 md:p-10 rounded-2xl border-2 transition-all duration-500 overflow-hidden ${
                  activeValue === idx 
                    ? 'border-current shadow-xl scale-[1.02]' 
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-lg'
                }`}
                style={{ borderColor: activeValue === idx ? val.color : undefined }}
              >
                {/* Large letter background */}
                <div 
                  className="absolute -right-4 -top-6 text-[10rem] font-league font-bold leading-none pointer-events-none select-none transition-opacity duration-500"
                  style={{ color: val.color, opacity: activeValue === idx ? 0.15 : 0.07 }}
                >
                  {val.letter}
                </div>

                <div className="relative z-10">
                  {/* Colored dot + letter */}
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center font-league text-2xl mb-6 transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: val.color, color: val.textColor || 'white' }}
                  >
                    {val.letter}
                  </div>

                  {/* Title */}
                  <h4 className="font-bold text-2xl font-montserrat text-[#1A1A1A] mb-3 tracking-tight">
                    {val.title}
                  </h4>

                  {/* Short description */}
                  <p className="text-sm font-montserrat text-gray-500 leading-relaxed mb-4">
                    {val.desc}
                  </p>

                  {/* Expanded detail */}
                  <AnimatePresence>
                    {activeValue === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div 
                          className="pt-4 border-t-2 mt-2"
                          style={{ borderColor: `${val.color}20` }}
                        >
                          <p className="text-sm font-montserrat text-gray-600 leading-relaxed">
                            {val.detail}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle hint */}
                  <div 
                    className="mt-4 text-xs font-montserrat font-bold uppercase tracking-widest transition-colors duration-300"
                    style={{ color: val.color }}
                  >
                    {activeValue === idx ? '— Less' : '+ More'}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
}
