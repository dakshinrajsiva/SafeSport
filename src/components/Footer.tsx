'use client';

import { Mail, Instagram, Linkedin, Globe } from 'lucide-react';
import Logo from './Logo';
import Image from 'next/image';
import MarqueeBanner from './MarqueeBanner';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#F5F7FA] text-[#1A1A1A] -z-10 flex flex-col h-[100vh]">

      {/* Main footer content — slightly lower (more space above than below) */}
      <div className="flex-1 flex flex-col justify-center pt-32 md:pt-40 pb-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 w-full items-start">
          
          {/* Left: CTA + Socials */}
          <div className="flex flex-col w-full">
            <h2 className="text-7xl md:text-9xl font-league text-[#004AAD] mb-12 tracking-tight uppercase leading-[0.8]">
              Let&apos;s build a <br /> safer future.
            </h2>
            
            <div className="flex items-center gap-4 font-montserrat">
              <a href="mailto:safesportindia@gmail.com" className="flex items-center group cursor-pointer" aria-label="Email us">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#004AAD] group-hover:text-white transition-all duration-500 border border-gray-100">
                  <Mail size={24} />
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/safesport-india-6854a73a0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-[#0077B5] hover:text-white transition-all duration-500 border border-gray-100 group"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://www.instagram.com/safesportindia?igsh=MWx1d2NkdDlkZmVrZw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-[#E4405F] hover:text-white transition-all duration-500 border border-gray-100 group"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://safesportindia.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-[#004AAD] hover:text-white transition-all duration-500 border border-gray-100 group"
              >
                <Globe size={24} />
              </a>
            </div>
          </div>

            {/* Right: Founders — aligned with "Let's build a safer future" headline */}
            <div className="flex flex-col w-full">
              <h4 className="font-bold uppercase tracking-[0.3em] text-xs text-gray-400 mb-10 font-montserrat">Founders</h4>
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-6 group">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#004AAD] transition-colors font-montserrat">Aman Jain</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold font-montserrat">Co-Founder</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#004AAD] transition-colors font-montserrat">Rania Mecca</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold font-montserrat">Co-Founder</p>
                  </div>
                </div>
              </div>

              {/* Bottom row: copyright + big logo */}
            <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8 mt-12">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest font-montserrat">
                &copy; 2026 SafeSport India.
              </p>
              <Logo size={220} className="opacity-30 grayscale hover:opacity-50 hover:grayscale-0 transition-all duration-700" variant="default" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Marquee Banner at the bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <MarqueeBanner />
      </div>
    </footer>
  );
}
