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

        {/* Services List - Redesigned with Brand Blue Sections */}
        <section className="px-6 md:px-12 lg:px-24 pb-32 -mt-8 relative z-10">
          <div className="max-w-7xl mx-auto space-y-24">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative grid md:grid-cols-12 gap-0 rounded-[2.5rem] overflow-hidden shadow-xl group"
              >
                {/* Left: Blue Brand Section with Number & Icon */}
                <div className="md:col-span-4 bg-[#004AAD] p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  
                  <div>
                    <span className="text-8xl font-league font-bold text-white/20 leading-none block mb-8">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-8 backdrop-blur-sm border border-white/20">
                      {service.icon}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-league uppercase leading-[0.9] tracking-tight relative z-10">
                      {service.title}
                    </h2>
                  </div>

                  <div className="mt-12 w-12 h-1 bg-white/30 rounded-full" />
                </div>

                {/* Right: Content Section */}
                <div className="md:col-span-8 bg-white p-10 md:p-12 flex flex-col justify-center border-y border-r border-gray-100 rounded-r-[2.5rem]">
                  <p className="text-xl md:text-2xl font-montserrat font-medium text-[#004AAD] leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-4 items-start text-lg font-montserrat text-gray-600">
                        <span className="mt-2.5 w-1.5 h-1.5 bg-[#004AAD] rounded-full flex-shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {service.outcomes && (
                    <div className="pt-8 border-t border-gray-100">
                      <h4 className="text-sm font-black font-montserrat uppercase tracking-[0.2em] text-[#004AAD]/60 mb-6">
                        Key Outcomes
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm font-bold font-montserrat text-gray-700 bg-[#F5F7FA] p-4 rounded-xl border border-gray-100 group-hover:border-[#004AAD]/20 transition-colors">
                            <UserCheck size={16} className="text-[#004AAD]" />
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
        </section>

      </div>
      <Footer />
    </main>
  );
}
