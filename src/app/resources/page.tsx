'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { FileText, Book, HelpCircle, Newspaper } from 'lucide-react';

const RESOURCES = [
  {
    title: "Toolkits",
    description: "Plug-and-play templates for codes of conduct, reporting forms, and induction checklists.",
    icon: <FileText size={32} />,
    number: "01",
    highlights: ["codes of conduct", "reporting forms", "induction checklists"]
  },
  {
    title: "Guides",
    description: "Plain-language explainers for boards, staff, and coaches on their safeguarding duties.",
    icon: <Book size={32} />,
    number: "02",
    highlights: ["boards", "staff", "coaches"]
  },
  {
    title: "Safeguarding Explainers",
    description: "Short primers on key concepts like grooming, power, consent, and trauma-informed practice.",
    icon: <HelpCircle size={32} />,
    number: "03",
    highlights: ["grooming", "power", "consent", "trauma-informed"]
  },
  {
    title: "Articles",
    description: "Commentary on emerging risks, case studies, and lessons from global safeguarding practice.",
    icon: <Newspaper size={32} />,
    number: "04",
    highlights: ["emerging risks", "case studies", "global safeguarding"]
  },
];

export default function ResourcesPage() {
  return (
    <main className="relative bg-white text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-[100vh] min-h-screen pt-32">
        
        {/* Header */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              Resources
            </h1>
            <div className="w-full h-[1px] bg-gray-200 mb-12" />
            <p className="text-2xl md:text-3xl font-montserrat text-gray-600 max-w-4xl leading-relaxed">
              Practical tools to make <span className="font-bold text-[#004AAD]">safeguarding real</span>.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="px-6 md:px-12 lg:px-24 pb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {RESOURCES.map((resource, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-10 md:p-12 rounded-[2.5rem] bg-[#F5F7FA] border-2 border-gray-100 hover:border-[#004AAD] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#004AAD]/5 rounded-bl-[150px] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#004AAD]/10" />
                  
                  {/* Number watermark */}
                  <div className="absolute bottom-4 right-6 text-[8rem] font-league text-gray-100 group-hover:text-[#004AAD]/10 transition-colors duration-500 leading-none">
                    {resource.number}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-8 group-hover:bg-[#004AAD]/15 transition-colors duration-500 shadow-sm">
                      <div className="text-[#004AAD] transition-colors duration-500">
                        {resource.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-4xl md:text-5xl font-league uppercase text-[#1A1A1A] mb-6 leading-tight group-hover:text-[#004AAD] transition-colors">
                      {resource.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg font-montserrat text-gray-600 leading-relaxed mb-8">
                      {resource.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {resource.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 text-xs font-bold font-montserrat uppercase tracking-wider bg-white text-[#004AAD] rounded-full border border-gray-200 group-hover:bg-[#004AAD] group-hover:text-white transition-colors duration-300"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
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
