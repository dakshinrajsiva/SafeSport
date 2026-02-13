'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Image from 'next/image';

import HoverReveal from '@/components/ui/HoverReveal';

const VALUES = [
  {
    title: "Respect",
    description: "Valuing every individual's dignity and rights."
  },
  {
    title: "Integrity",
    description: "Ensuring transparency and honesty in all actions."
  },
  {
    title: "Empathy",
    description: "Understanding and sharing the feelings of others."
  },
  {
    title: "Accountability",
    description: "Taking responsibility for our actions and decisions."
  }
];

export default function AboutPage() {
  return (
    <main className="relative bg-white text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-[100vh] min-h-screen pt-32">
        
        {/* Header */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              About Us
            </h1>
            <div className="w-full h-[1px] bg-gray-200" />
          </div>
        </section>

        {/* Our Founders */}
        <section className="px-6 md:px-12 lg:px-24 mb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-league uppercase mb-16 text-[#1A1A1A]">Our Founders</h2>
            
            <div className="grid md:grid-cols-2 gap-16 mb-24">
              {/* Aman Jain */}
              <div className="group">
                <div className="relative w-full aspect-[4/5] md:aspect-square mb-6 overflow-hidden rounded-2xl">
                  <Image 
                    src="/aman-photo.jpg" 
                    alt="Aman Jain" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-[#004AAD]/0 group-hover:bg-[#004AAD]/10 transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-league uppercase tracking-wide mb-1">Aman Jain</h3>
                <p className="text-sm font-montserrat font-bold uppercase tracking-widest text-[#004AAD]">Co-Founder</p>
              </div>

              {/* Rania Mecca */}
              <div className="group">
                <div className="relative w-full aspect-[4/5] md:aspect-square mb-6 overflow-hidden rounded-2xl">
                  <Image 
                    src="/rania-photo.jpg" 
                    alt="Rania Mecca" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-[#004AAD]/0 group-hover:bg-[#004AAD]/10 transition-colors duration-500" />
                </div>
                <h3 className="text-3xl font-league uppercase tracking-wide mb-1">Rania Mecca</h3>
                <p className="text-sm font-montserrat font-bold uppercase tracking-widest text-[#004AAD]">Co-Founder</p>
              </div>
            </div>

            {/* Founders Note */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <h3 className="text-xl font-montserrat font-bold uppercase tracking-widest text-[#004AAD] mb-4">Founders Note</h3>
                <div className="w-12 h-[2px] bg-[#004AAD]" />
              </div>
              <div className="md:col-span-8 space-y-6 text-lg md:text-xl font-montserrat text-gray-600 leading-relaxed">
                <p>
                  SafeSport India was established by founders who have worked closely with <HoverReveal imageSrc="/images/values-graphic.svg" alt="Athletes">athletes</HoverReveal>, <HoverReveal imageSrc="/images/approach-graphic.svg" alt="Educators">educators</HoverReveal>, and institutions, seeing first-hand the consequences of systems that rely on intent rather than structure.
                </p>
                <p>
                  Trained internationally in <HoverReveal imageSrc="/images/values-graphic.svg" alt="Sport Psychology">sport psychology</HoverReveal> and safeguarding, they recognised the need for an organisation that can translate global standards into practical, culturally relevant systems for India.
                </p>
                <p>
                  Their approach combines research, applied psychology, and <HoverReveal imageSrc="/images/approach-graphic.svg" alt="Insight">organisational insight</HoverReveal> to help institutions move beyond compliance and build genuine safeguarding capacity. SafeSport India reflects their belief that safeguarding is not a legal formality, but a professional capability, one that must be embedded into everyday practice to protect people and sustain performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Background */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 bg-[#F5F7FA] py-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-4">
                <h2 className="text-4xl md:text-5xl font-league uppercase mb-6 text-[#1A1A1A]">Our Background</h2>
              </div>
              <div className="md:col-span-8 space-y-6 text-lg font-montserrat text-gray-600 leading-relaxed">
                <p>
                  SafeSport India was established in response to a simple but persistent reality: environments built for growth, performance, and learning are evolving rapidly, while the systems that support safety and wellbeing often struggle to keep pace.
                </p>
                <p>
                  Across sport, education, and training contexts, safeguarding is widely recognised as important. Yet in practice, organisations are frequently left navigating complex questions: how to apply safeguarding consistently, how to support staff and leaders, and how to respond confidently when situations are unclear.
                </p>
                <p>
                  SafeSport India exists to strengthen this space between intention and practice.
                </p>
                <p>
                  We work with institutions to build safeguarding that is structured, practical, and grounded in real environments. Our work draws on international best practice and is carefully adapted for Indian contexts, recognising the legal, cultural, and organisational realities institutions operate within.
                </p>
                <p>
                  Our focus is on environments where responsibility is high, from elite academies and schools to adult teams, and structured programmes, supporting them with clear frameworks, informed training, and trusted pathways that help safeguard people and promote wellbeing over the long term.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Safe Sport */}
        <section className="px-6 md:px-12 lg:px-24 mb-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 md:gap-16">
              <div className="md:col-span-5 relative">
                <div className="sticky top-32">
                  <h2 className="text-4xl md:text-6xl font-league uppercase mb-6 text-[#1A1A1A] leading-tight">
                    Why Safe Sport — <br /><span className="text-[#004AAD]">and Beyond Sport</span>
                  </h2>
                  <p className="text-sm font-montserrat uppercase tracking-widest text-gray-400 mt-4">
                    Our name reflects the standards and rigour that inform our work.
                  </p>
                </div>
              </div>
              <div className="md:col-span-7 space-y-8 text-lg font-montserrat text-gray-600 leading-relaxed">
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide">The Test of Sport</h3>
                  <p>
                    Sport provides one of the clearest and most demanding tests of safeguarding in practice. It concentrates factors that challenge safety systems: unequal power, high expectations, close supervision, performance pressure, emotional investment, and dependence on authority figures. Decisions are made quickly, relationships are intense, and the consequences of silence can be significant.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide">Robust Frameworks</h3>
                  <p>
                    Because of this, safeguarding frameworks developed in and for sport are among the most robust. They are designed to function in environments where pressure is high, boundaries are tested, and responsibility must be clearly defined.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide">Universal Application</h3>
                  <p>
                    These same conditions exist far beyond sport. Schools, educational institutions, NGOs, and professional environments all involve similar dynamics - authority, trust, hierarchy, and vulnerability - even if performance looks different. Safeguarding principles that hold up under the demands of sport therefore translate powerfully across sectors.
                  </p>
                  <p className="mt-4 font-medium text-[#004AAD]">
                    Our application extends wherever people are taught, trained, led, or cared for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="px-6 md:px-12 lg:px-24 pb-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-league uppercase mb-16 text-[#1A1A1A] text-center">Our Values</h2>
            
            {/* Values Graphic */}
            <div className="mb-20 flex justify-center">
              <div className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[21/9]">
                <Image 
                  src="/images/values-graphic.svg" 
                  alt="Our Values - SafeSport India" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {VALUES.map((val, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-gray-50 border border-gray-100 hover:border-[#004AAD]/30 hover:shadow-lg transition-all duration-300 rounded-xl group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#004AAD]/5 rounded-bl-[100px] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#004AAD]/10" />
                  
                  <div className="w-12 h-12 bg-[#004AAD]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#004AAD] transition-colors duration-300 relative z-10">
                    <span className="font-league text-xl text-[#004AAD] group-hover:text-white transition-colors duration-300">{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-league uppercase mb-3 text-[#1A1A1A] relative z-10">{val.title}</h3>
                  <p className="text-sm font-montserrat text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors relative z-10">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
