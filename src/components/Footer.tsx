'use client';

import { Mail, Phone, MapPin, Instagram, Linkedin, Globe } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#F5F7FA] text-[#1A1A1A] py-32 -z-10 h-[auto] min-h-[600px] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-24 w-full">
        <div>
          <h2 className="text-6xl md:text-8xl font-league text-[#004AAD] mb-12 tracking-tight uppercase leading-[0.8]">
            Let's build a <br /> safer future.
          </h2>
          
          <div className="space-y-8 font-montserrat">
            <a href="mailto:safesportindia@gmail.com" className="flex items-center gap-6 text-xl group cursor-pointer w-fit">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#004AAD] group-hover:text-white transition-all duration-500 border border-gray-100">
                <Mail size={24} />
              </div>
              <span className="font-bold tracking-tight text-[#1A1A1A]">safesportindia@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 mt-12">
              <a 
                href="https://www.linkedin.com/in/safesport-india-6854a73a0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-[#0077B5] hover:text-white transition-all duration-500 border border-gray-100 group"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://www.instagram.com/safesportindia?igsh=MWx1d2NkdDlkZmVrZw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-[#E4405F] hover:text-white transition-all duration-500 border border-gray-100 group"
              >
                <Instagram size={28} />
              </a>
              <a 
                href="https://safesportindia.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-[#004AAD] hover:text-white transition-all duration-500 border border-gray-100 group"
              >
                <Globe size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-12 font-montserrat">
            <div>
              <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-gray-400 mb-10">Founders</h4>
              <div className="mb-8 group cursor-default">
                <p className="text-3xl font-extrabold text-[#1A1A1A] tracking-tighter group-hover:text-[#004AAD] transition-colors">Aman Jain</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-1">Co-Founder</p>
              </div>
              <div className="group cursor-default">
                <p className="text-3xl font-extrabold text-[#1A1A1A] tracking-tighter group-hover:text-[#004AAD] transition-colors">Rania Mecca</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-1">Co-Founder</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-gray-400 mb-10">Navigation</h4>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                <li><a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-[#004AAD] transition-colors">About Us</a></li>
                <li><a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-[#004AAD] transition-colors">Our Approach</a></li>
                <li><a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-[#004AAD] transition-colors">Our Services</a></li>
                <li><a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-[#004AAD] transition-colors">Who We Work With</a></li>
                <li><a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-[#004AAD] transition-colors">Our Standards</a></li>
                <li><a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-[#004AAD] transition-colors">Resources</a></li>
                <li><a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-[#004AAD] transition-colors">FAQs</a></li>
                <li><a href="#" className="text-[10px] font-bold uppercase tracking-widest hover:text-[#004AAD] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-24 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8 mt-24">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest font-montserrat">
              © 2026 SafeSport India.
            </p>
            <Logo size={96} className="opacity-30" variant="default" />
          </div>
        </div>
      </div>
    </footer>
  );
}
