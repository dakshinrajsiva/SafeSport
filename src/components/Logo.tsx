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
  width,
  height,
  variant = 'default',
}: LogoProps) {
  /** Omit inline sizing when no size is passed so callers can size responsively via className */
  const finalWidth = size ?? width;
  const finalHeight = size ?? height;

  return (
    <div
      role="img"
      aria-label="SafeSport India logo"
      className={cn(
        "transition-all duration-500",
        variant === 'default' ? "bg-[#004AAD]" : "bg-white",
        className
      )}
      style={{
        ...(finalWidth === undefined ? {} : { width: finalWidth }),
        ...(finalHeight === undefined ? {} : { height: finalHeight }),
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
