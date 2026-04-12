'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const STATS = [
  {
    number: "40–50%",
    text: "of athletes globally have experienced some form of harassment or abuse during their sporting career.",
    source: "IOC Consensus Statement on Harassment and Abuse in Sport, 2016",
    size: "large",
  },
  {
    number: "1 in 3",
    text: "female athletes in India have experienced sexual abuse, harassment, or inappropriate behaviour by a male coach.",
    source: "Johal & Pooja, International Journal of Physical Education, Sports and Health, 2016",
    size: "medium",
  },
  {
    number: "81%",
    text: "of children surveyed reported facing verbal or emotional abuse from teachers.",
    source: "NCPCR via International Journal of Law, Social Sciences and Humanities (IJLSSS), 2025",
    size: "medium",
  },
  {
    number: "~10%",
    text: "of abuse cases are ever reported in India.",
    source: "National Crime Records Bureau (NCRB), Government of India",
    size: "small",
  },
  {
    number: "53%",
    text: "of children reported abuse by a school teacher or relative.",
    source: "National Crime Records Bureau (NCRB), Government of India",
    size: "medium",
  },
];

export default function Impact() {
  return (
    <section id="impact-section" className="py-32 bg-white px-4 relative overflow-hidden" aria-labelledby="impact-heading">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mb-24">
          <p className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.3em] mb-6 text-xs md:text-sm" aria-hidden="true">
            The Cost of Inaction
          </p>
          <h2 id="impact-heading" className="text-6xl md:text-9xl font-league mb-8 tracking-tight text-[#1A1A1A] uppercase leading-[0.8]">
            Statistics <br /> That Matter
          </h2>
          <div className="w-24 h-2 bg-[#004AAD] mb-8" aria-hidden="true"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-medium leading-relaxed">
            Hard-hitting data that underscores the urgent need for institutional safeguarding in sport and education.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8" role="list">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              role="listitem"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.05,
                ease: [0.215, 0.61, 0.355, 1]
              }}
              className="break-inside-avoid p-10 md:p-14 flex flex-col justify-center text-center group hover:shadow-3xl transition-all duration-700 cursor-default rounded-[2rem] relative overflow-hidden border border-transparent hover:border-white/20 bg-[#004AAD] text-white"
            >
              <span className={cn(
                "font-league font-bold leading-none mb-4 block",
                stat.size === 'large' ? 'text-6xl md:text-8xl' :
                stat.size === 'medium' ? 'text-5xl md:text-7xl' : 'text-4xl md:text-6xl'
              )}>
                {stat.number}
              </span>

              <p className={cn(
                "font-montserrat font-medium leading-relaxed transition-transform duration-700 group-hover:scale-105",
                stat.size === 'large' ? 'text-lg md:text-xl' :
                stat.size === 'medium' ? 'text-base md:text-lg' : 'text-sm md:text-base'
              )}>
                {stat.text}
              </p>

              <cite className="block mt-6 text-[10px] md:text-xs font-montserrat text-white/40 not-italic leading-snug">
                — {stat.source}
              </cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
