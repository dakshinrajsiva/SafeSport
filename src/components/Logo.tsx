'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

/** Logo is 1:1 (square) per SVG viewBox 375×375 */
interface LogoProps {
  className?: string;
  /** Size in px — logo is square (1:1). Prefer over width/height. */
  size?: number;
  width?: number;
  height?: number;
  /** Use 'white' when over dark backgrounds (e.g. hero video) */
  variant?: 'default' | 'white';
}

export default function Logo({
  className,
  size,
  width = 160,
  height = 160,
  variant = 'default',
}: LogoProps) {
  const finalWidth = size ?? width;
  const finalHeight = size ?? height;

  return (
    <div 
      className={cn(
        'transition-all duration-500 ease-in-out',
        variant === 'white' ? 'bg-white' : 'bg-[#004AAD]',
        className
      )}
      style={{
        maskImage: 'url(/safesport-logo.svg)',
        maskRepeat: 'no-repeat',
        maskSize: 'contain',
        maskPosition: 'center',
        WebkitMaskImage: 'url(/safesport-logo.svg)',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        WebkitMaskPosition: 'center',
        width: finalWidth,
        height: finalHeight
      }}
    />
  );
}
