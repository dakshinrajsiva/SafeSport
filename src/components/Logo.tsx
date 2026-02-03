'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: number;
  width?: number;
  height?: number;
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
        "transition-all duration-500", 
        variant === 'default' ? "bg-[#004AAD]" : "bg-white",
        className
      )}
      style={{ 
        width: finalWidth, 
        height: finalHeight,
        maskImage: 'url(/safesport-logo.svg)',
        maskRepeat: 'no-repeat',
        maskSize: 'contain',
        maskPosition: 'center',
        WebkitMaskImage: 'url(/safesport-logo.svg)',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: 'contain',
        WebkitMaskPosition: 'center',
      }}
    />
  );
}
