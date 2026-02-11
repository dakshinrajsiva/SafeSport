'use client';

import { Mail, Instagram, Linkedin, Globe } from 'lucide-react';
import Logo from './Logo';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#F5F7FA] text-[#1A1A1A] -z-10 flex flex-col h-[100vh]">

      {/* Main footer content */}
      <div className="flex-1 flex flex-col justify-end pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 w-full">
          
          {/* Left: CTA + Socials */}
          <div className="flex flex-col justify-end">
            <h2 className="text-6xl md:text-8xl font-league text-[#004AAD] mb-12 tracking-tight uppercase leading-[0.8]">
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

          {/* Right: Founders */}
          <div className="flex flex-col justify-end">
            <h4 className="font-bold uppercase tracking-[0.3em] text-xs text-gray-400 mb-10 font-montserrat">Founders</h4>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-6 group">
                <div className="relative w-28 h-28 flex-shrink-0">
                  <div className="absolute inset-0 bg-[#004AAD] rounded-full translate-x-1 translate-y-1 opacity-20 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-xl">
                    <Image src="/aman-photo.jpg" alt="Aman Jain" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="112px" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-[#1A1A1A] tracking-tighter group-hover:text-[#004AAD] transition-colors font-league uppercase">Aman Jain</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold font-montserrat">Co-Founder</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="relative w-28 h-28 flex-shrink-0">
                  <div className="absolute inset-0 bg-[#004AAD] rounded-full translate-x-1 translate-y-1 opacity-20 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-xl">
                    <Image src="/rania-photo.jpg" alt="Rania Mecca" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="112px" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-black text-[#1A1A1A] tracking-tighter group-hover:text-[#004AAD] transition-colors font-league uppercase">Rania Mecca</p>
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
    </footer>
  );
}
