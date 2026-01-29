'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const STATS = [
  { text: "1 in 3 women in India report workplace sexual harassment", size: "large", color: "bg-[#004AAD]" },
  { text: "53% of children report abuse by a school teacher or relative", size: "medium", color: "bg-[#800020]" }, // Brand Maroon
  { text: "Only ~10% of abuse cases are ever reported in India", size: "small", color: "bg-[#7CA57A]" }, // Brand Green
  { text: "90% of athletes do not report harmful experiences", size: "medium", color: "bg-[#004AAD]" },
  { text: "74% of athletes believe reporting would not lead to action", size: "small", color: "bg-[#FFBD59]", textColor: "text-[#1A1A1A]" }, // Brand Yellow
  { text: "13,900 students died by suicide in 2023 — the highest globally", size: "large", color: "bg-[#800020]" },
  { text: "Zero Tolerance. 100% Commitment.", size: "medium", color: "bg-[#004AAD]" },
  { text: "95% of sporting bodies lack formal safeguarding policies", size: "small", color: "bg-[#1A1A1A]" },
];

export default function Impact() {
  return (
    <section id="impact-section" className="py-32 bg-white px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mb-24">
          <h3 className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.3em] mb-6 text-xs md:text-sm">
            The Cost of Inaction
          </h3>
          <h2 className="text-6xl md:text-9xl font-league mb-8 tracking-tight text-[#1A1A1A] uppercase leading-[0.8]">
            Statistics <br /> That Matter
          </h2>
          <div className="w-24 h-2 bg-[#004AAD] mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl font-medium leading-relaxed">
            Hard-hitting data from the National Crime Records Bureau and SafeSport India research.
          </p>
        </div>
        
        {/* Authentic Masonry Grid (Lando Norris style) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.05,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className={cn(
                "break-inside-avoid p-10 md:p-14 flex flex-col justify-center text-center group hover:shadow-3xl transition-all duration-700 cursor-default rounded-[2rem] relative overflow-hidden border border-transparent hover:border-white/20",
                stat.color,
                stat.textColor || "text-white"
              )}
            >
              <div className="absolute top-6 left-6 text-[10px] font-mono opacity-20 group-hover:opacity-100 transition-opacity uppercase tracking-widest font-bold">
                Data Point {index + 1}
              </div>
              
              <p className={cn(
                "font-bold leading-[1.1] transition-transform duration-700 group-hover:scale-105",
                stat.size === 'large' ? 'text-4xl md:text-5xl' : 
                stat.size === 'medium' ? 'text-3xl md:text-4xl' : 'text-2xl'
              )}>
                {stat.text}
              </p>

              <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
