'use client';

import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 md:px-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.4em] mb-6 text-xs md:text-sm">
          Our Services
        </h3>
        <h2 className="text-4xl md:text-6xl font-league text-[#1A1A1A] uppercase leading-tight mb-10">
          Building safeguarding as a capability.
        </h2>
        <div className="grid gap-8 md:grid-cols-3 font-montserrat">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-3xl bg-[#F5F7FA] border border-gray-100"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#004AAD] mb-4">
              Safeguarding foundations / training
            </p>
            <p className="text-sm text-gray-600">
              Core training, induction, and role-specific modules that embed safeguarding literacy across your organisation.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#F5F7FA] border border-gray-100"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#004AAD] mb-4">
              Systems and readiness
            </p>
            <p className="text-sm text-gray-600">
              Policies, reporting pathways, and preparedness planning so you are ready before a concern arises.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-3xl bg-[#F5F7FA] border border-gray-100"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#004AAD] mb-4">
              Consulting, advisory, and audit
            </p>
            <p className="text-sm text-gray-600">
              Independent reviews, advisory support, and audits aligned to Indian law and global safeguarding standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
