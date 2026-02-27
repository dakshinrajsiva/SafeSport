'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import { ShieldCheck, BookOpen, UserCheck, Layers, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    title: "Safeguarding Foundations & Training",
    icon: <BookOpen className="w-12 h-12 text-white" />,
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
    icon: <Layers className="w-12 h-12 text-white" />,
    description: "The greater challenge comes after training: how safeguarding is actually implemented in day-to-day practice.",
    details: [
      "We work with institutions to strengthen the systems and structures that make safeguarding easier to apply in practice.",
      "Developing clear codes of conduct, reporting pathways, role clarity, and internal processes.",
      "Ensuring safeguarding is supported by systems that work in real environments, under real pressures, and across changing contexts."
    ]
  },
  {
    title: "Consulting, Advisory, and Audit",
    icon: <ShieldCheck className="w-12 h-12 text-white" />,
    description: "Safeguarding is not static. As organisations grow, face new challenges, or operate across multiple locations, safeguarding needs evolve.",
    details: [
      "Ongoing consulting, advisory, and review support to help organisations anticipate risk, strengthen decision-making, and maintain safeguarding integrity.",
      "Support during periods of increased complexity, including tournaments, camps, events, tours, and travel-based activities.",
      "Independent perspectives, structured reviews, and practical guidance to support informed leadership.",
      "Helping leaders and teams operate with clarity, preparedness, and confidence in high-pressure settings."
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="relative bg-[#F8FAFC] text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-[100vh] min-h-screen pt-32">
        
        {/* Header — brand band */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32 bg-[#004AAD]/[0.06] py-16 md:py-20 -mt-32 pt-48 md:pt-52">
          <div className="max-w-7xl mx-auto">
            <div className="w-20 h-1 bg-[#004AAD] mb-8" />
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              Our Services
            </h1>
            <div className="w-full h-[1px] bg-[#004AAD]/20 mb-12" />
            <p className="text-xl md:text-2xl font-montserrat text-gray-700 max-w-4xl leading-relaxed">
              Safe Sport India supports organisations at different stages of their safeguarding journey — from building foundational understanding, to strengthening systems, to providing ongoing guidance and assurance.
            </p>
          </div>
        </section>

        {/* Services List - Horizontal scroll */}
        <section className="px-6 md:px-12 lg:px-24 pb-32 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide">
              {SERVICES.map((service, i) => (
                <motion.div 
                  key={i}
                  id={`service-${i}`}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex-shrink-0 w-[90vw] md:w-[600px] snap-center bg-white border border-gray-200 rounded-3xl p-10 md:p-12 shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-8">
                      <span className="text-6xl font-league font-bold text-gray-200 leading-none block mb-6">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-league uppercase leading-tight tracking-tight text-[#1A1A1A] mb-4">
                        {service.title}
                      </h2>
                      <div className="w-12 h-1 bg-[#004AAD] rounded-full" />
                    </div>

                    <p className="text-lg md:text-xl font-montserrat font-medium text-gray-800 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-3 items-start text-base font-montserrat text-gray-600">
                          <span className="mt-2 w-1.5 h-1.5 bg-[#004AAD] rounded-full flex-shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {service.outcomes && (
                      <div className="mt-auto pt-6 border-t border-gray-100">
                        <h4 className="text-xs font-black font-montserrat uppercase tracking-[0.2em] text-[#004AAD] mb-4">
                          Key Outcomes
                        </h4>
                        <div className="flex flex-col gap-2">
                          {service.outcomes.map((outcome, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm font-medium font-montserrat text-gray-700">
                              <UserCheck size={14} className="text-[#004AAD] flex-shrink-0" />
                              {outcome}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
