'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { UserCheck, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    title: "Safeguarding Foundations & Training",
    number: "01",
    description: "Safeguarding is most effective when people clearly understand their roles and feel confident acting within them.",
    details: [
      "Building shared understanding, professional judgement, and practical confidence among staff, coaches, teachers, volunteers, and leaders.",
      "Training grounded in real situations, supporting participants to recognise concerns, understand boundaries, and respond appropriately.",
      "Work builds clarity and awareness, helping safeguarding become a core professional skill."
    ],
    outcomes: [
      "Greater staff confidence and consistency",
      "Clearer understanding of responsibilities and boundaries",
      "Improved awareness of early concerns and appropriate responses",
      "A stronger foundation for safe, respectful environments"
    ]
  },
  {
    title: "Systems and Readiness",
    number: "02",
    description: "The greater challenge comes after training: how safeguarding is actually implemented in day-to-day practice.",
    details: [
      "We work with institutions to strengthen the systems and structures that make safeguarding easier to apply in practice.",
      "Developing clear codes of conduct, reporting pathways, role clarity, and internal processes.",
      "Ensuring safeguarding is supported by systems that work in real environments, under real pressures, and across changing contexts."
    ],
    outcomes: [
      "Clear codes of conduct and reporting pathways",
      "Defined roles and accountability structures",
      "Systems that work under real-world pressures",
      "Reduced reliance on informal or ad hoc responses"
    ]
  },
  {
    title: "Consulting, Advisory, and Audit",
    number: "03",
    description: "Safeguarding is not static. As organisations grow, face new challenges, or operate across multiple locations, safeguarding needs evolve.",
    details: [
      "Ongoing consulting, advisory, and review support to help organisations anticipate risk, strengthen decision-making, and maintain safeguarding integrity.",
      "Support during periods of increased complexity, including tournaments, camps, events, tours, and travel-based activities.",
      "Independent perspectives, structured reviews, and practical guidance to support informed leadership.",
      "Helping leaders and teams operate with clarity, preparedness, and confidence in high-pressure settings."
    ],
    outcomes: [
      "Proactive risk anticipation and mitigation",
      "Stronger decision-making under pressure",
      "Independent assurance and credibility",
      "Long-term safeguarding integrity and accountability"
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="relative bg-white text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-0 md:mb-[100vh] min-h-screen pt-32">

        {/* Header */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              Our Services
            </h1>
            <div className="w-full h-[1px] bg-gray-200 mb-12" />
            <p className="text-xl md:text-2xl font-montserrat text-gray-600 max-w-4xl leading-relaxed">
              We support organisations at different stages of their safeguarding journey - from building foundational understanding, to strengthening systems, to providing ongoing guidance and assurance.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 md:px-12 lg:px-24 pb-0">
          <div className="max-w-7xl mx-auto space-y-0">
            {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
                id={`service-${i}`}
                className={`py-20 md:py-28 scroll-mt-[108px] ${i < SERVICES.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

                  {/* Left: Number + Title */}
                  <div className="lg:col-span-4">
                    <span className="text-8xl md:text-9xl font-league font-bold text-[#004AAD] leading-none block mb-4">
                      {service.number}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-league uppercase leading-[0.85] tracking-tight text-[#1A1A1A] mb-6">
                      {service.title}
                    </h2>
                    <div className="w-16 h-1.5 bg-[#004AAD] rounded-full" />
                  </div>

                  {/* Right: Content */}
                  <div className="lg:col-span-8">
                    <p className="text-xl md:text-2xl font-montserrat font-medium text-gray-800 leading-relaxed mb-10">
                      {service.description}
                    </p>

                    <ul className="space-y-5 mb-10">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-4 items-start text-base md:text-lg font-montserrat text-gray-600">
                          <span className="mt-2.5 w-2 h-2 bg-[#004AAD] rounded-full flex-shrink-0" />
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {service.outcomes && (
                      <div className="bg-[#F5F7FA] rounded-2xl p-8 md:p-10">
                        <h4 className="text-xs font-black font-montserrat uppercase tracking-[0.2em] text-[#004AAD] mb-6">
                          Key Outcomes
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {service.outcomes.map((outcome, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm font-medium font-montserrat text-gray-700">
                              <UserCheck size={16} className="text-[#004AAD] flex-shrink-0 mt-0.5" />
                              {outcome}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#004AAD] py-24 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-league uppercase text-white leading-[0.85] tracking-tight mb-8">
              Ready to get started?
            </h2>
            <p className="text-lg md:text-xl font-montserrat text-white/80 max-w-2xl mx-auto leading-relaxed mb-12">
              We work with organisations at different stages of their safeguarding journey. From initial consultation to ongoing support, we&apos;re here to help you build safe, accountable environments.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.2em] text-sm px-10 py-5 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
