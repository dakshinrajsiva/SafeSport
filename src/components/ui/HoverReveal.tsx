'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HoverRevealProps {
  children: React.ReactNode;
  imageSrc: string;
  className?: string;
  alt?: string;
}

export default function HoverReveal({ children, imageSrc, className, alt = "Reveal image" }: HoverRevealProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Get cursor position relative to viewport
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <span
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={cn("relative inline-block cursor-none text-[#004AAD] font-bold z-20", className)}
    >
      <span className="relative z-10 border-b-2 border-[#004AAD]/20 hover:border-[#004AAD] transition-colors duration-300">
        {children}
      </span>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePosition.x - 150, // Center the image (assuming width 300)
              y: mousePosition.y - 200  // Position above cursor
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="fixed top-0 left-0 w-[300px] h-[200px] rounded-xl overflow-hidden pointer-events-none z-50 shadow-2xl"
          >
            <div className="relative w-full h-full bg-white">
              <Image 
                src={imageSrc} 
                alt={alt} 
                fill 
                className="object-cover"
                sizes="300px"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
