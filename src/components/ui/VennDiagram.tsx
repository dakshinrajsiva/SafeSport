'use client';

import { motion } from 'framer-motion';

export default function VennDiagram() {
  // Proper 3-circle Venn diagram with centers adjusted to fit container
  // Radius 30% (Diameter 60%) to prevent overflow and ensure good overlap
  
  const circleRadius = 30;
  
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center">
      
      {/* Top Circle - Systems */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          top: '0%',
          left: '20%',
          width: `${circleRadius * 2}%`,
          height: `${circleRadius * 2}%`,
        }}
        className="absolute rounded-full border-2 border-[#004AAD] mix-blend-multiply flex items-start justify-center pt-4 bg-[#004AAD]/5"
      >
        <span className="font-league uppercase text-base md:text-lg text-[#004AAD] font-bold tracking-wider">Systems</span>
      </motion.div>

      {/* Bottom Left Circle - Understanding */}
      <motion.div
        initial={{ x: -50, y: 50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        style={{
          top: '35%',
          left: '0%',
          width: `${circleRadius * 2}%`,
          height: `${circleRadius * 2}%`,
        }}
        className="absolute rounded-full border-2 border-[#004AAD] mix-blend-multiply flex items-end justify-center pb-4 bg-[#004AAD]/5"
      >
        <span className="font-league uppercase text-base md:text-lg text-[#004AAD] font-bold tracking-wider">Understanding</span>
      </motion.div>

      {/* Bottom Right Circle - Judgement */}
      <motion.div
        initial={{ x: 50, y: 50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        style={{
          top: '35%',
          left: '40%',
          width: `${circleRadius * 2}%`,
          height: `${circleRadius * 2}%`,
        }}
        className="absolute rounded-full border-2 border-[#004AAD] mix-blend-multiply flex items-end justify-center pb-4 bg-[#004AAD]/5"
      >
        <span className="font-league uppercase text-base md:text-lg text-[#004AAD] font-bold tracking-wider">Judgement</span>
      </motion.div>

      {/* Center Intersection text */}
      <motion.div
        initial={{ x: "-50%", y: "-50%", scale: 0, opacity: 0 }}
        whileInView={{ x: "-50%", y: "-50%", scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
        viewport={{ once: true }}
        className="absolute z-10 text-center flex flex-col items-center justify-center"
        style={{
          top: '54%',
          left: '50%',
        }}
      >
        <span className="font-montserrat font-bold text-xs md:text-sm uppercase tracking-widest text-[#1A1A1A]">Safe Environments</span>
        <span className="w-8 h-[2px] bg-[#004AAD] mt-2" />
      </motion.div>

    </div>
  );
}
