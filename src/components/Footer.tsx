'use client';

import { Mail, Phone, MapPin } from 'lucide-react';
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
            <div className="flex items-center gap-6 text-xl group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#004AAD] group-hover:text-white transition-all duration-500">
                <Mail size={24} />
              </div>
              <span className="font-bold tracking-tight text-[#1A1A1A]">contact@safesport.in</span>
            </div>
            <div className="flex items-center gap-6 text-xl group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#004AAD] group-hover:text-white transition-all duration-500">
                <Phone size={24} />
              </div>
              <span className="font-bold tracking-tight text-[#1A1A1A]">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-6 text-xl group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#004AAD] group-hover:text-white transition-all duration-500">
                <MapPin size={24} />
              </div>
              <span className="font-bold tracking-tight text-[#1A1A1A]">New Delhi, India</span>
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
              <ul className="space-y-6">
                <li><a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-[#004AAD] transition-colors">Services</a></li>
                <li><a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-[#004AAD] transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-[#004AAD] transition-colors">Certification</a></li>
                <li><a href="#" className="text-sm font-bold uppercase tracking-widest hover:text-[#004AAD] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-24 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8 mt-24">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest font-montserrat">
              © 2026 SafeSport India. Institutional Innovation in Safeguarding.
            </p>
            <Logo size={96} className="opacity-30" />
          </div>
        </div>
      </div>
    </footer>
  );
}
