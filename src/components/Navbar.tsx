'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 md:px-24 py-6 flex justify-between items-center",
      isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm border-b border-gray-100" : "bg-transparent"
    )}>
      <a href="#" className="flex items-center shrink-0">
        <Logo
          size={isScrolled ? 100 : 70}
          className="transition-all duration-500 transform origin-left"
          variant={isScrolled ? 'default' : 'white'}
        />
      </a>
      
      <div className="flex gap-10 items-center">
        <div className="hidden md:flex gap-8 items-center font-montserrat">
          <a href="#" className={cn(
            "font-bold uppercase tracking-widest text-[10px] hover:text-[#004AAD] transition-all",
            isScrolled ? "text-[#1A1A1A]" : "text-white"
          )}>
            Services
          </a>
          <a href="#" className={cn(
            "font-bold uppercase tracking-widest text-[10px] hover:text-[#004AAD] transition-all",
            isScrolled ? "text-[#1A1A1A]" : "text-white"
          )}>
            About Us
          </a>
          <a href="#" className={cn(
            "font-bold uppercase tracking-widest text-[10px] hover:text-[#004AAD] transition-all",
            isScrolled ? "text-[#1A1A1A]" : "text-white"
          )}>
            Certification
          </a>
        </div>
        
        <button className={cn(
          "px-8 py-2.5 rounded-sm font-montserrat font-bold uppercase tracking-widest text-[10px] transition-all duration-500 shadow-lg hover:scale-105",
          isScrolled 
            ? "bg-[#004AAD] text-white hover:bg-[#800020]" 
            : "bg-white text-[#004AAD] hover:bg-[#004AAD] hover:text-white"
        )}>
          Book a Call
        </button>
      </div>
    </nav>
  );
}
