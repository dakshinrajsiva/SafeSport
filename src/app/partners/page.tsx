'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const PARTNERS = [
  {
    name: "International Schools Sports Organisation",
    shortName: "ISSO",
    logo: "/logos/isso.png",
    width: 800,
    height: 266,
  },
  {
    name: "FC Madras",
    shortName: "FC Madras",
    logo: "/logos/fc-madras.png",
    width: 420,
    height: 620,
  },
];

export default function PartnersPage() {
  return (
    <main className="relative bg-white text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-[100vh] min-h-screen pt-32">

        {/* Header */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 md:mb-28">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              Our Partners
            </h1>
            <div className="w-full h-[1px] bg-gray-200 mb-12" />
            <p className="text-2xl md:text-3xl font-montserrat text-gray-600 max-w-4xl leading-relaxed">
              The organisations we have <span className="font-bold text-[#004AAD]">worked with</span> across sport and education.
            </p>
          </div>
        </section>

        {/* Logo wall */}
        <section className="px-6 md:px-12 lg:px-24 pb-32" aria-label="Partner organisations">
          <div className="max-w-7xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none">
              {PARTNERS.map((partner, i) => (
                <motion.li
                  key={partner.shortName}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-[2rem] bg-[#F5F7FA] border-2 border-gray-100 hover:border-[#004AAD] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-10 flex flex-col items-center justify-center text-center"
                >
                  <div className="h-32 md:h-40 w-full flex items-center justify-center mb-8">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={partner.width}
                      height={partner.height}
                      className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs font-montserrat font-bold uppercase tracking-[0.25em] text-gray-500 group-hover:text-[#004AAD] transition-colors">
                    {partner.name}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
