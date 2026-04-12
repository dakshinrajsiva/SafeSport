'use client';

/**
 * WWP-style scrolling text ticker.
 * Uses large bold "SafeSport India" text. 4+4 items for seamless loop.
 */
export default function MarqueeBanner() {
  const ITEM_COUNT = 4;

  return (
    <div className="w-full overflow-hidden bg-[#004AAD] py-6 md:py-8" aria-hidden="true">
      <div className="flex whitespace-nowrap animate-marquee-left w-max items-center">
        {/* First set */}
        {[...Array(ITEM_COUNT)].map((_, i) => (
          <span
            key={`a-${i}`}
            className="mx-8 md:mx-14 text-3xl md:text-5xl lg:text-6xl tracking-tight text-white inline-flex items-baseline"
          >
            <span className="font-league font-bold uppercase">SafeSport</span>
            <span className="font-league font-bold uppercase ml-2">India</span>
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {[...Array(ITEM_COUNT)].map((_, i) => (
          <span
            key={`b-${i}`}
            className="mx-8 md:mx-14 text-3xl md:text-5xl lg:text-6xl tracking-tight text-white inline-flex items-baseline"
          >
            <span className="font-league font-bold uppercase">SafeSport</span>
            <span className="font-league font-bold uppercase ml-2">India</span>
          </span>
        ))}
      </div>
    </div>
  );
}
