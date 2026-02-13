'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const SAFEGUARDS = [
  {
    title: "Safeguarding Is Clearly Understood and Practised",
    description: "Safeguarding is communicated in simple, accessible ways and reflected in everyday behaviour, not just written policies."
  },
  {
    title: "Everyone Knows How to Raise a Concern Safely",
    description: "Clear, fear-reduced reporting pathways exist so concerns can be raised without risk of retaliation or harm."
  },
  {
    title: "Roles, Responsibilities, and Support Are Clear",
    description: "Athletes, coaches, parents, and staff understand their safeguarding role and know where to seek guidance and support."
  },
  {
    title: "Risks Are Actively Identified and Reduced",
    description: "Safeguarding risks - including physical, psychological, and power-based risks - are recognised and addressed proactively."
  },
  {
    title: "Clear Boundaries Define Acceptable Behaviour",
    description: "Explicit standards distinguish coaching, discipline, and unacceptable behaviour, with attention to power and hierarchy."
  },
  {
    title: "Staff Are Recruited and Developed Safely",
    description: "Recruitment and training prioritise values, boundaries, and safeguarding competence alongside technical expertise."
  },
  {
    title: "Safeguarding Extends Across the Entire Ecosystem",
    description: "Safeguarding expectations are shared with partners, affiliates, and collaborators to protect athletes across settings."
  },
  {
    title: "Responses Are Timely, Fair, and Trauma-Informed",
    description: "Concerns are handled with care, dignity, transparency, and a focus on the wellbeing of those affected."
  },
  {
    title: "Families and Communities Are Engaged in Safeguarding",
    description: "Parents and communities are informed partners in creating safe, supportive environments."
  },
  {
    title: "Safeguarding Is Continuously Reviewed and Improved",
    description: "Safeguarding is treated as a living system, regularly monitored, evaluated, and strengthened over time."
  }
];

export default function StandardsPage() {
  return (
    <main className="relative bg-white text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-[100vh] min-h-screen pt-32">
        
        {/* Header */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              Our Standards
            </h1>
            <div className="w-full h-[1px] bg-gray-200 mb-12" />
            
            <div className="max-w-4xl">
              <h2 className="text-3xl md:text-5xl font-league uppercase text-[#1A1A1A] mb-6">
                The 10 Contextualised Safeguards
              </h2>
              <p className="text-lg md:text-xl font-montserrat text-gray-600 leading-relaxed mb-8">
                Safeguarding frameworks developed internationally are robust, evidence-based, and essential. However, their effectiveness depends on the context in which they are applied. Indian sport and youth ecosystems differ structurally, culturally, and operationally from many Western systems.
              </p>
              <p className="text-lg md:text-xl font-montserrat text-gray-600 leading-relaxed border-l-4 border-[#004AAD] pl-6 py-6 bg-[#F5F7FA] rounded-r-lg shadow-sm">
                <span className="font-bold text-[#004AAD]">SafeSport India’s approach</span> does not replace international safeguards - it operationalises them for <span className="font-bold text-[#1A1A1A]">Indian realities</span>, ensuring they are not only compliant, but actually usable.
              </p>
            </div>
          </div>
        </section>

        {/* Safeguards Grid */}
        <section className="px-6 md:px-12 lg:px-24 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {SAFEGUARDS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative h-[320px] bg-[#F5F7FA] rounded-2xl overflow-hidden cursor-default border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Default State: Number & Title */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between transition-opacity duration-500 group-hover:opacity-0">
                    <span className="text-6xl font-league text-[#004AAD]/10 font-bold">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="text-2xl font-league uppercase text-[#1A1A1A] leading-tight pr-4">
                      {item.title}
                    </h3>
                    <div className="w-8 h-1 bg-[#004AAD]" />
                  </div>

                  {/* Hover State: Description */}
                  <div className="absolute inset-0 bg-[#004AAD] p-8 flex flex-col justify-center items-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                    <span className="text-4xl font-league text-white/20 font-bold mb-4">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-white font-montserrat text-base leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
