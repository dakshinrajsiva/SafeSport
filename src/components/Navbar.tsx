'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  {
    title: "About us",
    items: ["Our founders", "Our background /why we exist", "Why SafeSport - and beyond sport", "Our values"]
  },
  {
    title: "Our approach",
    items: ["Our philosophy/ safeguarding as a capability", "How we’re different", "Our commitment"]
  },
  {
    title: "Our services",
    items: ["Safeguarding foundations/ training", "Systems and Readiness", "Consulting, advisory, and audit"]
  },
  {
    title: "Who we work with",
    items: ["NGO/S4D", "Private academies", "Educational institutions", "National bodies"]
  },
  {
    title: "Our standards",
    items: ["Build safeguards (adapted from Int safeguards)", "Indian legal and regulatory context", "Contextualization for India", "Ethical and professional commitments"]
  },
  {
    title: "Resources",
    items: ["Toolkits", "Guides", "Safeguarding explainers", "Articles?"]
  },
  {
    title: "FAQs",
    items: ["Is this only for children?", "Is this only for sport?", "Do we need this if we already have policies?", "Is this compliance or culture?", "How do we start?"]
  }
];

const SECTION_IDS: Record<string, string> = {
  'About us': 'about',
  'Our approach': 'approach',
  'Our services': 'services',
  'Who we work with': 'who-we-work-with',
  'Our standards': 'standards',
  'Resources': 'resources',
  'FAQs': 'faqs',
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
      isScrolled ? "bg-white py-3 border-b border-black/5" : "bg-transparent py-8"
    )}>
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 grid grid-cols-3 items-center">
        
        {/* Left: Logo */}
        <div className="flex justify-start">
          <a href="#" className="relative z-[110] transition-transform hover:scale-105 duration-500">
            <Logo
              size={isScrolled ? 100 : 130}
              className="transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
              variant={isScrolled ? 'default' : 'white'}
            />
          </a>
        </div>
        
        {/* Center: Navigation */}
        <div className="hidden xl:flex justify-center items-center gap-10">
          {NAV_ITEMS.map((item, index) => {
            const sectionId = SECTION_IDS[item.title] || '';
            const href = sectionId ? `#${sectionId}` : '#';
            return (
            <div 
              key={item.title}
              className="relative group py-2"
            >
              <a 
                href={href}
                className={cn(
                  "font-bold uppercase tracking-[0.25em] text-[9px] transition-all duration-300 relative whitespace-nowrap",
                  isScrolled ? "text-[#004AAD] hover:opacity-70" : "text-white hover:opacity-70"
                )}
              >
                {item.title}
                <span className={cn(
                  "absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"
                )} />
              </a>
            </div>
          )})}
        </div>

        {/* Right: Actions */}
        <div className="flex justify-end items-center gap-6">
          <button className={cn(
            "hidden md:block px-6 py-2.5 rounded-none font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-500 border",
            isScrolled 
              ? "bg-[#004AAD] border-[#004AAD] text-white hover:bg-black hover:border-black" 
              : "bg-white border-white text-[#004AAD] hover:bg-transparent hover:text-white"
          )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Menu
          </button>
          
          <button 
            className="xl:hidden p-2 relative z-[110]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-black" size={24} />
            ) : (
              <Menu className={isScrolled ? "text-black" : "text-white"} size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/Full Screen Menu Overlay */}
      <div className={cn(
        "fixed inset-0 bg-[#004AAD] z-[100] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-y-auto flex flex-col",
        isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        {/* Header inside Menu */}
        <div className="flex justify-between items-center px-6 md:px-12 py-8">
          <Logo size={48} variant="white" />
          <button
            className="flex items-center gap-2 px-6 py-2.5 rounded-none font-bold uppercase tracking-[0.2em] text-[10px] text-white border border-white hover:bg-white hover:text-[#004AAD] transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Close
            <X size={16} />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {NAV_ITEMS.map((item, index) => {
                const sectionId = SECTION_IDS[item.title] || '';
                const href = sectionId ? `#${sectionId}` : '#';
                
                return (
                  <div 
                    key={item.title} 
                    className="group"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <a 
                      href={href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="inline-block text-3xl md:text-4xl font-league text-white uppercase tracking-tight mb-4 group-hover:text-white/70 transition-colors"
                    >
                      {item.title}
                    </a>
                    <div className="h-[1px] w-12 bg-white/20 mb-4 group-hover:w-full transition-all duration-500 ease-out" />
                    
                    {/* Clean list of sub-items */}
                    <div className="flex flex-col gap-2">
                      {item.items.map((subItem) => (
                        <span 
                          key={subItem}
                          className="text-xs font-montserrat text-white/50 tracking-wide"
                        >
                          {subItem}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
