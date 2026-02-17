'use client';

import { cn } from '@/lib/utils';

interface HoverRevealProps {
  children: React.ReactNode;
  imageSrc?: string;
  className?: string;
  alt?: string;
}

/** Blue highlight only — no hover image. imageSrc/alt kept for API compatibility but unused. */
export default function HoverReveal({ children, className }: HoverRevealProps) {
  return (
    <span
      className={cn(
        "relative inline-block text-[#004AAD] font-bold border-b-2 border-[#004AAD]/20 hover:border-[#004AAD] transition-colors duration-300",
        className
      )}
    >
      {children}
    </span>
  );
}
