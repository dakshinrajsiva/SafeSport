'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const SECTORS = [
  {
    title: "NGOs & S4D Organisations",
    whyMatters: [
      "High-trust settings with children and young people need clear safeguarding so impact and responsibility stay aligned. We can walk through how this applies to your programmes on a call."
    ],
    howWeWork: [
      "Practical training, proportionate reporting pathways, and leadership guidance that fit your resources and mission."
    ],
    support: [
      "Foundations training for staff and volunteers",
      "Policy and codes of conduct",
      "Reporting frameworks and ongoing advisory support"
    ]
  },
  {
    title: "Private Academies & Training Centres",
    whyMatters: [
      "Performance culture, authority, and selection pressure make clear boundaries and safe practice essential. Details for your academy are easiest to shape together on a call."
    ],
    howWeWork: [
      "Safeguarding embedded in coaching conduct, leadership behaviour, and day-to-day operations without undermining excellence."
    ],
    support: [
      "Coach and staff training",
      "Policy and systems",
      "Athlete-facing education and readiness reviews"
    ]
  },
  {
    title: "Educational Institutions",
    whyMatters: [
      "Schools and colleges need safeguarding as a lived professional skill, not only on paper. We can map priorities to your context in conversation."
    ],
    howWeWork: [
      "Staff confidence, supervision and reporting, and approaches aligned to Indian legal and institutional realities."
    ],
    support: [
      "Teacher and staff training",
      "Leadership guidance",
      "Policy review and student-facing education"
    ]
  },
  {
    title: "National Bodies & Federations",
    whyMatters: [
      "National bodies set expectations across a sector; safeguarding is about governance, consistency, and credibility. Framework design is best scoped collaboratively."
    ],
    howWeWork: [
      "Scalable frameworks, governance support, and reporting that translate standards into implementation across diverse contexts."
    ],
    support: [
      "Framework and policy development",
      "Leadership and governance advisory",
      "Training for officials and strategic ongoing support"
    ]
  }
];

export default function WhoWeWorkWithPage() {
  return (
    <main className="relative bg-white text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-[100vh] min-h-screen pt-32">

        {/* Header */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              Who We Work With
            </h1>
            <div className="w-full h-[1px] bg-gray-200" aria-hidden="true" />
          </div>
        </section>

        {/* Sectors */}
        <section className="px-6 md:px-12 lg:px-24 pb-32">
          <div className="max-w-7xl mx-auto space-y-32">
            {SECTORS.map((sector, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="scroll-mt-32"
                id={`sector-${i}`}
              >
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                  {/* Left Column: Title & Sticky Header */}
                  <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                    <div className="text-base font-black font-montserrat text-[#004AAD] uppercase tracking-widest mb-6 flex items-center gap-4">
                       <span className="w-12 h-2 bg-[#004AAD]" aria-hidden="true" />
                       Sector {String(i + 1).padStart(2, '0')}
                    </div>
                    <h2 className="text-6xl md:text-7xl lg:text-8xl font-league uppercase leading-[0.8] mb-10 text-[#1A1A1A] tracking-tighter">
                      {sector.title}
                    </h2>
                  </div>

                  {/* Right Column: Content */}
                  <div className="lg:col-span-8 space-y-12">
                    {/* Why Matters */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl font-bold font-montserrat uppercase tracking-wider text-[#1A1A1A] mb-4 border-l-4 border-[#004AAD] pl-4">
                        Why Safeguarding Matters
                      </h3>
                      <div className="space-y-4">
                        {sector.whyMatters.map((para, j) => (
                          <p key={j} className="text-lg font-montserrat text-gray-600 leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* How We Work */}
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-xl font-bold font-montserrat uppercase tracking-wider text-[#1A1A1A] mb-4 border-l-4 border-[#004AAD] pl-4">
                        How We Work
                      </h3>
                      <div className="space-y-4">
                        {sector.howWeWork.map((para, j) => (
                          <p key={j} className="text-lg font-montserrat text-gray-600 leading-relaxed">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Support */}
                    <div className="bg-[#F5F7FA] p-8 md:p-10 rounded-2xl border border-gray-100">
                      <h3 className="text-lg font-bold font-montserrat uppercase tracking-wider text-[#004AAD] mb-6">
                        Typical Support Includes
                      </h3>
                      <ul className="grid gap-4">
                        {sector.support.map((item, idx) => (
                          <li key={idx} className="flex gap-4 items-start text-base font-montserrat text-gray-700">
                            <span className="w-1.5 h-1.5 bg-[#004AAD] rounded-full mt-2.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {i < SECTORS.length - 1 && (
                  <div className="w-full h-[1px] bg-gray-200 mt-24" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
