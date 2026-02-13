'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Footer from '@/components/Footer';
import { ShieldCheck, BookOpen, UserCheck, Layers, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    title: "Safeguarding Foundations & Training",
    icon: <BookOpen className="w-12 h-12 text-[#004AAD]" />,
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
    icon: <Layers className="w-12 h-12 text-[#004AAD]" />,
    description: "The greater challenge comes after training: how safeguarding is actually implemented in day-to-day practice.",
    details: [
      "We work with institutions to strengthen the systems and structures that make safeguarding easier to apply in practice.",
      "Developing clear codes of conduct, reporting pathways, role clarity, and internal processes.",
      "Ensuring safeguarding is supported by systems that work in real environments, under real pressures, and across changing contexts."
    ]
  },
  {
    title: "Consulting, Advisory, and Audit",
    icon: <ShieldCheck className="w-12 h-12 text-[#004AAD]" />,
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
            <p className="text-lg md:text-xl font-montserrat text-gray-600 max-w-4xl mt-6">
              Our services are designed to be context-specific, proportionate, and practical, recognising that safeguarding needs differ across institutions, environments, and levels of responsibility.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="px-6 md:px-12 lg:px-24 pb-32 -mt-8 relative z-10">
          <div className="max-w-7xl mx-auto space-y-24">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "grid md:grid-cols-12 gap-12 p-8 md:p-12 rounded-[2.5rem] border-2 transition-all duration-500 group relative overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#004AAD]/40",
                  i % 2 === 0 ? "bg-white border-gray-100" : "bg-[#004AAD]/[0.05] border-[#004AAD]/15"
                )}
              >
                {/* Background Decoration */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#004AAD]/5 rounded-full blur-3xl group-hover:bg-[#004AAD]/10 transition-colors duration-500" />

                {/* Icon & Title */}
                <div className="md:col-span-4 flex flex-col justify-between relative z-10 h-full">
                  <div>
                    <div className="w-24 h-24 rounded-2xl bg-[#F5F7FA] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-[#004AAD]/15">
                      <div className="text-[#004AAD] transition-colors duration-500">
                        {service.icon}
                      </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-league uppercase text-[#1A1A1A] leading-[0.85] tracking-tight mb-6">
                      {service.title}
                    </h2>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-[#004AAD] font-bold uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-500">
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-8 flex flex-col justify-center relative z-10">
                  <p className="text-xl md:text-2xl font-montserrat font-medium text-gray-900 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-6 mb-10">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-4 items-start text-lg font-montserrat text-gray-600 group-hover:text-gray-900 transition-colors">
                        <span className="mt-2.5 w-2 h-2 bg-[#004AAD] rounded-full flex-shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {service.outcomes && (
                    <div className="pt-8 border-t-2 border-gray-100 group-hover:border-[#004AAD]/20 transition-colors">
                      <h4 className="text-sm font-black font-montserrat uppercase tracking-[0.2em] text-[#004AAD] mb-6">
                        Key Outcomes
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {service.outcomes.map((outcome, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm font-bold font-montserrat text-gray-700 bg-gray-50 group-hover:bg-[#004AAD]/5 p-4 rounded-xl transition-colors">
                            <UserCheck size={18} className="text-[#004AAD]" />
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
