'use client';

import { motion } from 'framer-motion';

export default function VennDiagram() {
  // Smaller 3-circle Venn diagram
  const circleRadius = 24;
  
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
      
      {/* Top Circle - Systems */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        style={{
          top: '8%',
          left: '26%',
          width: `${circleRadius * 2}%`,
          height: `${circleRadius * 2}%`,
        }}
        className="absolute rounded-full border-2 border-[#004AAD] mix-blend-multiply flex items-start justify-center pt-3 bg-[#004AAD]/5"
      >
        <span className="font-league uppercase text-sm md:text-base text-[#004AAD] font-bold tracking-wider">Systems</span>
      </motion.div>

      {/* Bottom Left Circle - Understanding */}
      <motion.div
        initial={{ x: -50, y: 50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        style={{
          top: '38%',
          left: '10%',
          width: `${circleRadius * 2}%`,
          height: `${circleRadius * 2}%`,
        }}
        className="absolute rounded-full border-2 border-[#004AAD] mix-blend-multiply flex items-end justify-center pb-3 bg-[#004AAD]/5"
      >
        <span className="font-league uppercase text-sm md:text-base text-[#004AAD] font-bold tracking-wider">Understanding</span>
      </motion.div>

      {/* Bottom Right Circle - Judgement */}
      <motion.div
        initial={{ x: 50, y: 50, opacity: 0 }}
        whileInView={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
        style={{
          top: '38%',
          left: '42%',
          width: `${circleRadius * 2}%`,
          height: `${circleRadius * 2}%`,
        }}
        className="absolute rounded-full border-2 border-[#004AAD] mix-blend-multiply flex items-end justify-center pb-3 bg-[#004AAD]/5"
      >
        <span className="font-league uppercase text-sm md:text-base text-[#004AAD] font-bold tracking-wider">Judgement</span>
      </motion.div>

      {/* Center Intersection text */}
      <motion.div
        initial={{ x: "-50%", y: "-50%", scale: 0, opacity: 0 }}
        whileInView={{ x: "-50%", y: "-50%", scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
        viewport={{ once: true }}
        className="absolute z-10 text-center flex flex-col items-center justify-center"
        style={{
          top: '52%',
          left: '50%',
        }}
      >
        <span className="font-league font-bold text-sm md:text-base uppercase tracking-wider text-[#004AAD]">SafeSport India</span>
        <span className="w-8 h-[2px] bg-[#004AAD] mt-2" />
      </motion.div>

    </div>
  );
}
