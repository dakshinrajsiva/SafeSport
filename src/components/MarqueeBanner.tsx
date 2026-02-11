'use client';

/**
 * WWP-style scrolling text ticker.
 * Uses large bold "SafeSport India" text — just like WWP scrolls city names.
 * Sits at the bottom of the content wrapper, right before the footer reveals.
 */
export default function MarqueeBanner() {
  return (
    <div className="w-full overflow-hidden bg-[#004AAD] py-6 md:py-8">
      <div className="flex whitespace-nowrap animate-marquee-left w-max items-center">
        {/* First set */}
        {[...Array(10)].map((_, i) => (
          <span
            key={`a-${i}`}
            className="mx-8 md:mx-14 text-3xl md:text-5xl lg:text-6xl font-league font-bold uppercase tracking-tight text-white"
          >
            SafeSport India
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {[...Array(10)].map((_, i) => (
          <span
            key={`b-${i}`}
            className="mx-8 md:mx-14 text-3xl md:text-5xl lg:text-6xl font-league font-bold uppercase tracking-tight text-white"
          >
            SafeSport India
          </span>
        ))}
      </div>
    </div>
  );
}
