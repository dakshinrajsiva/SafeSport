'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  {
    title: "About us",
    sectionId: "about",
    description: "Meet our founders and learn about our mission to make safeguarding real in India."
  },
  {
    title: "Our approach",
    sectionId: "approach",
    description: "Systems, understanding, and judgement — our framework for effective safeguarding."
  },
  {
    title: "Our services",
    sectionId: "services",
    description: "Training, systems, and advisory support at every stage of your safeguarding journey."
  },
  {
    title: "Who we work with",
    sectionId: "who-we-work-with",
    description: "From grassroots NGOs to national bodies — we work across the sporting ecosystem."
  },
  {
    title: "Our standards",
    sectionId: "standards",
    description: "Global best practices, adapted for the Indian legal and sporting context."
  },
  {
    title: "Resources",
    sectionId: "resources",
    description: "Practical tools, explainers, and guides to make safeguarding actionable."
  },
  {
    title: "FAQs",
    sectionId: "faqs",
    description: "Common questions organisations ask us about safeguarding."
  },
  {
    title: "Reach out",
    sectionId: "contact",
    description: "Get in touch to start your safeguarding journey with us."
  }
];

const QUICK_LINKS = ["About us", "Our approach", "Our services", "Who we work with", "Resources", "Reach out"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    
    const pages = ['about', 'approach', 'services', 'who-we-work-with', 'standards', 'resources', 'contact'];
    if (pages.includes(sectionId)) {
      router.push(`/${sectionId}`);
      return;
    }

    if (sectionId === 'faqs') {
      if (pathname !== '/') {
        router.push('/');
        setTimeout(() => {
          const el = document.getElementById('faqs');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500);
      } else {
        const el = document.getElementById('faqs');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 300);
  }, [router, pathname]);

  const showSolidHeader = pathname !== '/' || isScrolled;

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] h-[100px]",
        isMenuOpen ? "bg-[#F5F0E8]" : showSolidHeader ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}>
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
          
          <Link 
            href="/" 
            className="relative z-[110] transition-transform hover:scale-105 duration-500 flex-shrink-0 flex items-center"
          >
            <div className="mt-8">
              <Logo
                size={150}
                className={cn(
                  "transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]",
                  isMenuOpen && "brightness-0" // Makes logo black when menu is open
                )}
                variant={isMenuOpen ? 'default' : showSolidHeader ? 'default' : 'white'}
              />
            </div>
          </Link>
          
          {/* Center: Quick section links (desktop) */}
          <div className={cn(
            "hidden xl:flex items-center gap-7 transition-all duration-300",
            isMenuOpen && "opacity-0 pointer-events-none"
          )}>
            {QUICK_LINKS.map((title) => {
              const item = NAV_ITEMS.find(n => n.title === title);
              if (!item) return null;
              
              return (
                <div key={title} className="relative group/nav py-4">
                  <button
                    onClick={() => scrollToSection(item.sectionId)}
                    className={cn(
                      "font-montserrat font-bold uppercase tracking-[0.15em] text-xs transition-all duration-300 relative whitespace-nowrap",
                      showSolidHeader ? "text-[#004AAD]" : "text-white"
                    )}
                  >
                    {title}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover/nav:w-full" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right: Menu toggle (hidden when menu is open because the close button takes over) */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 font-montserrat font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 border rounded-full relative z-[110]",
                isMenuOpen
                  ? "opacity-0 pointer-events-none" // Hide the original button when open
                  : showSolidHeader 
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

      {/* Full-screen tile menu — jailhouselawyers.org style */}
      <div className={cn(
        "fixed inset-0 z-[105] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-y-auto",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {/* Blue background matching brand */}
        <div className={cn(
          "absolute inset-0 bg-[#004AAD] transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )} />

        <div className="relative z-10 min-h-screen flex flex-col pt-32 pb-8">
          
          {/* Close button (only visible when menu is open) */}
          <div className={cn(
            "fixed top-8 right-6 md:right-12 z-50 transition-all duration-500",
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          )}>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 px-6 py-2.5 font-montserrat font-bold uppercase tracking-[0.2em] text-xs transition-all duration-500 border rounded-full bg-white border-white text-[#004AAD] hover:bg-transparent hover:text-white"
            >
              Close <X size={14} />
            </button>
          </div>

          <div className="flex-1 flex items-start">
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12">
              {/* Tile grid - Compact 4-column layout */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {NAV_ITEMS.map((item, index) => (
                  <button
                    key={item.title}
                    onClick={() => scrollToSection(item.sectionId)}
                    onMouseEnter={() => setHoveredTile(index)}
                    onMouseLeave={() => setHoveredTile(null)}
                    className={cn(
                      "group relative text-left rounded-2xl border border-white/20 overflow-hidden cursor-pointer transition-all duration-500",
                      "p-6 md:p-8 min-h-[180px] md:min-h-[220px] flex flex-col justify-between",
                      isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
                      hoveredTile === index ? "bg-white/15 border-white/40 scale-[1.02]" : "bg-transparent"
                    )}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 40 + 100}ms` : '0ms',
                      transitionDuration: '500ms',
                      transitionProperty: 'transform, opacity, background-color, border-color'
                    }}
                  >
                    <div className="relative z-10 w-full h-full flex flex-col justify-between">
                      <div>
                        <span className="text-sm font-league font-bold text-white block mb-4">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-league uppercase leading-[0.9] tracking-tight text-white mb-4">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-xs md:text-sm font-montserrat leading-relaxed text-white/80 font-medium max-w-[90%]">
                        {item.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full mt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <Logo size={80} className="opacity-50" variant="white" />
              <div className="flex items-center gap-8">
                <a href="mailto:safesportindia@gmail.com" className="text-xs font-montserrat text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] font-bold">
                  Email
                </a>
                <a href="https://www.linkedin.com/in/safesport-india-6854a73a0/" target="_blank" rel="noopener noreferrer" className="text-xs font-montserrat text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] font-bold">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/safesportindia" target="_blank" rel="noopener noreferrer" className="text-xs font-montserrat text-white/60 hover:text-white transition-colors uppercase tracking-[0.2em] font-bold">
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
