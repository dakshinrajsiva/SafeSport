'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQS = [
  {
    question: "Is this only for children?",
    answer: "No. Our safeguarding framework covers children, young people, and adults in vulnerable situations across sport and education."
  },
  {
    question: "Is this only for sport?",
    answer: "We work across sport, education, youth-facing programmes, and any setting where power and trust shape safety."
  },
  {
    question: "Do we need this if we already have policies?",
    answer: "Policies are a starting point. Safeguarding becomes real only when people, systems, and culture align around them."
  },
  {
    question: "Is this compliance or culture?",
    answer: "We design for both — legal readiness and everyday behaviours — so safeguarding is seen as performance infrastructure, not a checkbox."
  },
  {
    question: "How do we start?",
    answer: "Most partners begin with a short diagnostic and leadership conversation to prioritise quick wins and a longer-term roadmap."
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
