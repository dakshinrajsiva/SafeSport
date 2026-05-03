'use client';

import { Mail, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
import Logo from './Logo';
import MarqueeBanner from './MarqueeBanner';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#F5F7FA] text-[#1A1A1A] -z-10 flex flex-col h-[100vh]" role="contentinfo">

      {/* Main footer content */}
      <div className="flex-1 flex flex-col justify-center pt-32 md:pt-40 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 w-full items-start">

          {/* Left: CTA + Socials */}
          <div className="flex flex-col w-full">
            <h2 className="text-7xl md:text-9xl font-league text-[#004AAD] mb-12 tracking-tight uppercase leading-[0.8]">
              Let&apos;s build a <br /> safer future - together.
            </h2>

            <div className="flex flex-col gap-6 font-montserrat">
              {/* Email display */}
              <a href="mailto:info@safesportindia.com" className="flex items-center gap-4 group" aria-label="Email SafeSport India at info@safesportindia.com">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#004AAD] group-hover:text-white transition-all duration-500 border border-gray-100 shrink-0" aria-hidden="true">
                  <Mail size={24} />
                </div>
                <span className="text-xl md:text-2xl font-bold text-[#1A1A1A] group-hover:text-[#004AAD] transition-colors">
                  info@safesportindia.com
                </span>
              </a>

              {/* Social links */}
              <nav aria-label="Social media links" className="flex flex-wrap items-center gap-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/safesport-india-6854a73a0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SafeSport India on LinkedIn"
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-[#0077B5] hover:text-white transition-all duration-500 border border-gray-100"
                >
                  <Linkedin size={24} aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/safesportindia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SafeSport India on Instagram"
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-[#E4405F] hover:text-white transition-all duration-500 border border-gray-100"
                >
                  <Instagram size={24} aria-hidden="true" />
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label="Facebook (profile coming soon)"
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-[#1877F2] hover:text-white transition-all duration-500 border border-gray-100"
                >
                  <Facebook size={24} aria-hidden="true" />
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label="X / Twitter (profile coming soon)"
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-[#1DA1F2] hover:text-white transition-all duration-500 border border-gray-100"
                >
                  <Twitter size={24} aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>

            {/* Right: Founders */}
            <div className="flex flex-col w-full">
              <h3 className="font-bold uppercase tracking-[0.3em] text-xs text-gray-400 mb-10 font-montserrat">Founders</h3>
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6 group">
                  <div>
                    <div className="flex items-center gap-3">
                      <Link href="/about" className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#004AAD] transition-colors font-montserrat">
                        Aman Jain
                      </Link>
                      <a
                        href="https://www.linkedin.com/in/aman-jain-b648b319a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Aman Jain on LinkedIn"
                        className="text-gray-400 hover:text-[#0077B5] transition-colors"
                      >
                        <Linkedin size={20} aria-hidden="true" />
                      </a>
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold font-montserrat mt-1">Co-Founder</p>
                    <a href="mailto:amanjain@safesportindia.com" className="text-sm text-gray-500 hover:text-[#004AAD] transition-colors font-montserrat mt-1 block">
                      amanjain@safesportindia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div>
                    <div className="flex items-center gap-3">
                      <Link href="/about" className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#004AAD] transition-colors font-montserrat">
                        Rania Mecca
                      </Link>
                      <a
                        href="https://www.linkedin.com/in/rania-mecca-508805204"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Rania Mecca on LinkedIn"
                        className="text-gray-400 hover:text-[#0077B5] transition-colors"
                      >
                        <Linkedin size={20} aria-hidden="true" />
                      </a>
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold font-montserrat mt-1">Co-Founder</p>
                    <a href="mailto:raniamecca@safesportindia.com" className="text-sm text-gray-500 hover:text-[#004AAD] transition-colors font-montserrat mt-1 block">
                      raniamecca@safesportindia.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom row: copyright + nav links + big logo */}
            <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8 mt-12 w-full">
              <div className="flex flex-col gap-4 items-center md:items-start">
                <nav aria-label="Footer navigation" className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6 text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest font-montserrat">
                  <Link href="/about" className="hover:text-[#004AAD] transition-colors">About Us</Link>
                  <Link href="/approach" className="hover:text-[#004AAD] transition-colors">Approach</Link>
                  <Link href="/services" className="hover:text-[#004AAD] transition-colors">Services</Link>
                  <Link href="/contact" className="hover:text-[#004AAD] transition-colors">Contact</Link>
                  <Link href="/safeguarding-policy" className="hover:text-[#004AAD] transition-colors">Safeguarding Policy</Link>
                  <Link href="/privacy" className="hover:text-[#004AAD] transition-colors">Privacy Policy</Link>
                </nav>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest font-montserrat">
                  &copy; {new Date().getFullYear()} SafeSport India.
                </p>
              </div>
              <Logo size={220} className="opacity-30 grayscale hover:opacity-50 hover:grayscale-0 transition-all duration-700" variant="default" />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Banner at the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10" aria-hidden="true">
        <MarqueeBanner />
      </div>
    </footer>
  );
}
