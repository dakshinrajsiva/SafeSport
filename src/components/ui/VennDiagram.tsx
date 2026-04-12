'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VennDiagram() {
  return (
    <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center py-8">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full relative"
      >
        <Image
          src="/venn.jpeg"
          alt="Venn diagram showing the intersection of three pillars: Systems, Understanding, and Judgement. Where all three overlap is where effective safeguarding operates."
          width={1200}
          height={800}
          className="w-full h-auto object-contain mix-blend-multiply"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}
