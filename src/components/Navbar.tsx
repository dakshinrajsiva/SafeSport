'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_ITEMS = [
  {
    title: "About us",
    sectionId: "about",
    items: ["Our founders", "Our background / why we exist", "Why SafeSport — and beyond sport", "Our values"]
  },
  {
    title: "Our approach",
    sectionId: "approach",
    items: ["Our philosophy / safeguarding as a capability", "How we're different", "Our commitment"]
  },
  {
    title: "Our services",
    sectionId: "services",
    items: ["Safeguarding Foundations", "Systems and Readiness", "Consulting, Advisory, and Audit"]
  },
  {
    title: "Who we work with",
    sectionId: "who-we-work-with",
    items: ["NGO/S4D", "Private academies", "Educational institutions", "National bodies"]
  },
  {
    title: "Our standards",
    sectionId: "standards",
    items: ["Localised Safeguards", "Indian legal and regulatory context", "Contextualization for India", "Our partners", "Ethical and professional commitments"]
  },
  {
    title: "Resources",
    sectionId: "resources",
    items: ["Toolkits", "Guides", "Safeguarding explainers", "Articles"]
  },
  {
    title: "FAQs",
    sectionId: "faqs",
    items: ["Is this only for children?", "Is this only for sport?", "Do we need this if we already have policies?", "Is this compliance or culture?", "How do we start?"]
  }
];

// Top-level quick links shown in the header bar — only sections that exist on page
const QUICK_LINKS = ["About us", "Our approach", "Our services", "Who we work with", "Resources", "FAQs"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const scrollToSection = useCallback((sectionId: string) => {
    setIsMenuOpen(false);
    setActiveGroup(null);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 300);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
        isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
      )}>
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="relative z-[110] transition-transform hover:scale-105 duration-500 flex-shrink-0"
          >
            <Logo
              size={isScrolled ? 130 : 180}
              className="transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
              variant={isScrolled ? 'default' : 'white'}
            />
          </a>
          
          {/* Center: Quick section links (desktop) */}
          <div className="hidden xl:flex items-center gap-7">
            {QUICK_LINKS.map((title) => {
              const item = NAV_ITEMS.find(n => n.title === title);
              if (!item) return null;
              return (
                <button
                  key={title}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={cn(
                    "font-montserrat font-bold uppercase tracking-[0.15em] text-xs transition-all duration-300 relative group whitespace-nowrap",
                    isScrolled ? "text-[#004AAD]" : "text-white"
                  )}
                >
                  {title}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover:w-full" />
                </button>
              );
            })}
          </div>

          {/* Right: Menu toggle */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              onClick={() => { setIsMenuOpen(!isMenuOpen); setActiveGroup(null); }}
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 font-montserrat font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 border relative z-[110]",
                isMenuOpen
                  ? "bg-transparent border-white text-white hover:bg-white hover:text-[#004AAD]"
                  : isScrolled 
                    ? "bg-[#004AAD] border-[#004AAD] text-white hover:bg-black hover:border-black" 
                    : "bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-[#004AAD]"
              )}
            >
              {isMenuOpen ? (
                <>Close <X size={14} /></>
              ) : (
                <>Menu <Menu size={14} /></>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen menu overlay */}
      <div className={cn(
        "fixed inset-0 z-[105] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-y-auto",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {/* Background */}
        <div className={cn(
          "absolute inset-0 bg-[#004AAD] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )} />

        {/* Menu content */}
        <div className="relative z-10 min-h-screen flex flex-col pt-28 pb-12">
          <div className="flex-1 flex items-start">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
              
              {/* Two-column layout: nav titles left, sub-items right */}
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">
                
                {/* Left: Nav titles */}
                <div className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item, index) => (
                    <button
                      key={item.title}
                      onClick={() => {
                        if (activeGroup === index) {
                          scrollToSection(item.sectionId);
                        } else {
                          setActiveGroup(index);
                        }
                      }}
                      className={cn(
                        "text-left text-3xl md:text-5xl font-league uppercase tracking-tight py-2 transition-all duration-300 flex items-center gap-4 group",
                        activeGroup === index ? "text-white" : "text-white/40 hover:text-white/70",
                        isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      )}
                      style={{ transitionDelay: isMenuOpen ? `${index * 60 + 200}ms` : '0ms' }}
                    >
                      <span className="text-xs font-montserrat font-bold tracking-[0.3em] opacity-50 w-6">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {item.title}
                      <ArrowRight 
                        size={20} 
                        className={cn(
                          "transition-all duration-300 ml-auto",
                          activeGroup === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                        )} 
                      />
                    </button>
                  ))}
                </div>

                {/* Right: Sub items for active group */}
                <div className="hidden lg:flex flex-col justify-start pt-4">
                  {activeGroup !== null && (
                    <div className="animate-fade-in">
                      <div className="mb-8">
                        <p className="text-xs font-montserrat font-bold uppercase tracking-[0.4em] text-white/40 mb-2">
                          {NAV_ITEMS[activeGroup].title}
                        </p>
                        <div className="w-12 h-[1px] bg-white/20" />
                      </div>
                      <div className="flex flex-col gap-5">
                        {NAV_ITEMS[activeGroup].items.map((subItem, i) => (
                          <button
                            key={subItem}
                            onClick={() => scrollToSection(NAV_ITEMS[activeGroup].sectionId)}
                            className="text-left text-lg md:text-xl font-montserrat text-white/70 hover:text-white transition-all duration-300 group flex items-center gap-3"
                            style={{ animationDelay: `${i * 80}ms` }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white group-hover:scale-150 transition-all duration-300" />
                            {subItem}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => scrollToSection(NAV_ITEMS[activeGroup].sectionId)}
                        className="mt-10 inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white text-xs font-bold uppercase tracking-[0.2em] font-montserrat hover:bg-white hover:text-[#004AAD] transition-all duration-300"
                      >
                        Go to section
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  )}
                  {activeGroup === null && (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-white/20 font-montserrat text-sm uppercase tracking-[0.3em]">
                        Select a section
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile: show sub-items inline */}
              <div className="lg:hidden mt-8">
                {activeGroup !== null && (
                  <div className="animate-fade-in border-t border-white/10 pt-6">
                    <div className="flex flex-col gap-3">
                      {NAV_ITEMS[activeGroup].items.map((subItem) => (
                        <button
                          key={subItem}
                          onClick={() => scrollToSection(NAV_ITEMS[activeGroup].sectionId)}
                          className="text-left text-sm font-montserrat text-white/60 hover:text-white transition-colors flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-white/40" />
                          {subItem}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => scrollToSection(NAV_ITEMS[activeGroup].sectionId)}
                      className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white text-xs font-bold uppercase tracking-[0.2em] font-montserrat hover:bg-white hover:text-[#004AAD] transition-all duration-300"
                    >
                      Go to section <ArrowRight size={12} />
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Bottom bar in menu */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-auto pt-12">
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <Logo size={60} variant="white" className="opacity-40" />
              <div className="flex items-center gap-8">
                <a href="mailto:safesportindia@gmail.com" className="text-xs font-montserrat text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em]">
                  Email
                </a>
                <a href="https://www.linkedin.com/in/safesport-india-6854a73a0/" target="_blank" rel="noopener noreferrer" className="text-xs font-montserrat text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em]">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/safesportindia" target="_blank" rel="noopener noreferrer" className="text-xs font-montserrat text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em]">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
