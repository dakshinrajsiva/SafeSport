'use client';

import { motion } from 'framer-motion';

export default function Resources() {
  return (
    <section id="resources" className="py-32 px-4 md:px-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.4em] mb-6 text-xs md:text-sm">
          Resources
        </h3>
        <h2 className="text-4xl md:text-6xl font-league text-[#1A1A1A] uppercase leading-tight mb-10">
          Practical tools to make safeguarding real.
        </h2>
        <div className="grid gap-8 md:grid-cols-4 font-montserrat">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-2xl bg-[#F5F7FA] border border-gray-100"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#004AAD] mb-3">
              Toolkits
            </p>
            <p className="text-sm text-gray-600">
              Plug-and-play templates for codes of conduct, reporting forms, and induction checklists.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-2xl bg-[#F5F7FA] border border-gray-100"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#004AAD] mb-3">
              Guides
            </p>
            <p className="text-sm text-gray-600">
              Plain-language explainers for boards, staff, and coaches on their safeguarding duties.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 rounded-2xl bg-[#F5F7FA] border border-gray-100"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#004AAD] mb-3">
              Safeguarding explainers
            </p>
            <p className="text-sm text-gray-600">
              Short primers on key concepts like grooming, power, consent, and trauma-informed practice.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 rounded-2xl bg-[#F5F7FA] border border-gray-100"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#004AAD] mb-3">
              Articles
            </p>
            <p className="text-sm text-gray-600">
              Commentary on emerging risks, case studies, and lessons from global safeguarding practice.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
