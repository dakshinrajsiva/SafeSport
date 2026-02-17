'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import { ShieldCheck, BookOpen, UserCheck, Layers } from 'lucide-react';

const STANDARDS = [
  {
    title: "We've done the work for you",
    description: "We work with expert partners to curate high-impact restoration projects that promote positive change for communities and nature. We will also tailor your support to projects that reflect your specific goals and your fans’ ethos.",
    icon: <ShieldCheck className="w-12 h-12 text-[#004AAD]" />,
    align: 'left',
    number: '01'
  },
  {
    title: "Pick your path",
    description: "We work together to select a funding model that works for you. Whether you choose to designate proceeds from an existing piece of merch or a percentage of event/tour revenue, we make sure that more of every dollar donated goes directly to your high-impact restoration projects.",
    icon: <BookOpen className="w-12 h-12 text-[#004AAD]" />,
    align: 'right',
    number: '02'
  },
  {
    title: "Amplify your impact",
    description: "This first-of-its-kind platform shows exactly where your money is going, and constantly monitors progress to ensure transparency and measurable results. Showcase the impact of your contributions with fans through custom social media reports.",
    icon: <UserCheck className="w-12 h-12 text-[#004AAD]" />,
    align: 'left',
    number: '03'
  }
];

export default function StandardsPage() {
  return (
    <main className="relative bg-white text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-[100vh] min-h-screen pt-32">
        
        {/* Header */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              How It Works
            </h1>
            <div className="w-20 h-1 bg-[#004AAD] mx-auto mb-12" />
            <p className="text-xl md:text-2xl font-montserrat text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our standards are built on global best practices, contextualized for the unique challenges and opportunities within the Indian sporting ecosystem.
            </p>
          </div>
        </section>

        {/* Standards Steps - Surf & Turf Style */}
        <section className="px-6 md:px-12 lg:px-24 pb-32">
          <div className="max-w-7xl mx-auto relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2 hidden md:block" />

            <div className="space-y-24">
              {STANDARDS.map((std, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Text Side */}
                  <div className="flex-1 text-center md:text-left">
                    <div className={`flex flex-col ${i % 2 === 1 ? 'md:items-end md:text-right' : 'md:items-start'}`}>
                      <span className="text-8xl font-league font-bold text-[#004AAD]/10 leading-none mb-6 block">
                        {std.number}
                      </span>
                      <h2 className="text-4xl md:text-5xl font-league uppercase text-[#1A1A1A] mb-6 leading-tight">
                        {std.title}
                      </h2>
                      <p className="text-lg font-montserrat text-gray-600 leading-relaxed max-w-xl">
                        {std.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon/Image Side (Center Marker) */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-[#004AAD] flex items-center justify-center shadow-xl">
                      {std.icon}
                    </div>
                  </div>

                  {/* Empty Side for balance */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
