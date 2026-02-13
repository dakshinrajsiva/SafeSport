'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQS = [
  {
    question: "Is this only for children?",
    answer: "No. While safeguarding is essential for children and young people, it applies across all ages. Safeguarding is about how power, responsibility, and care are managed in structured environments. This includes adult teams, professional settings, educational institutions, and organisations where people depend on leadership, supervision, or authority."
  },
  {
    question: "Is this only for sport?",
    answer: "No. Our work extends beyond sport to education, training environments, NGOs, and other people-centred institutions. While sport provides an important context, the principles of safeguarding - clarity, responsibility, and safe practice - are relevant wherever people learn, work, and develop within structured systems."
  },
  {
    question: "Do we need this if we already have policies?",
    answer: "Policies are an important foundation, but safeguarding is effective when policies are understood and applied in practice. Many organisations have strong documentation but still face uncertainty around roles, decision-making, and response in real situations. Our work focuses on helping organisations translate policies into everyday practice."
  },
  {
    question: "Is this compliance or culture?",
    answer: "Safeguarding involves both. Compliance provides structure and accountability, while culture determines how people behave when situations are unclear. We support organisations to strengthen safeguarding as a shared professional practice where clear systems support confident, responsible action across the organisation."
  },
  {
    question: "How do we start?",
    answer: "We begin with a conversation to understand your context, environment, and priorities. From there, we work with you to identify appropriate next steps, whether that involves training, system strengthening, advisory support, or a combination of approaches. This helps us tailor our support to your environment, priorities, and stage of development."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {FAQS.map((faq, index) => (
        <div 
          key={index}
          className="border-b border-gray-200 last:border-0"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between py-8 text-left group transition-colors"
          >
            <span className={cn(
              "text-xl md:text-3xl font-league uppercase tracking-wide transition-colors duration-300",
              openIndex === index ? "text-[#004AAD]" : "text-[#1A1A1A] group-hover:text-[#004AAD]"
            )}>
              {faq.question}
            </span>
            <div className={cn(
              "w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300",
              openIndex === index 
                ? "bg-[#004AAD] border-[#004AAD] text-white rotate-180" 
                : "bg-transparent border-gray-300 text-gray-400 group-hover:border-[#004AAD] group-hover:text-[#004AAD]"
            )}>
              {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
            </div>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-8 pr-12">
                  <p className="text-gray-600 font-montserrat text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
