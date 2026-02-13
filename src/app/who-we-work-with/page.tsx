'use client';

import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

const SECTORS = [
  {
    title: "NGOs & S4D Organisations",
    whyMatters: [
      "NGOs and sport-for-development organisations work in high-trust environments, often with children and young people from vulnerable or underserved communities. These settings involve close relationships, informal structures, travel, and long hours — all of which increase both impact and responsibility.",
      "Safeguarding in this context is not just about protection. It is about maintaining trust, ensuring ethical practice, and protecting both participants and staff. When safeguarding systems are unclear or inconsistent, responsibility often falls on individuals rather than being shared by the organisation.",
      "Strong safeguarding enables NGOs to deliver programmes with confidence, credibility, and long-term sustainability."
    ],
    howWeWork: [
      "We support NGOs to move beyond intention and embed safeguarding into everyday practice. Our approach is collaborative, context-aware, and sensitive to resource realities.",
      "We focus on building staff and volunteer confidence in recognising and responding to concerns, creating clear, proportionate reporting pathways, strengthening organisational accountability without overburdening teams, and aligning safeguarding practice with donor, CSR, and partnership expectations.",
      "Our work is designed to support mission delivery, not disrupt it."
    ],
    support: [
      "Safeguarding foundations training for staff and volunteers",
      "Development or strengthening of safeguarding policies and codes of conduct",
      "Clear reporting and response frameworks",
      "Leadership and programme-level safeguarding guidance",
      "Ongoing advisory support as organisations grow"
    ]
  },
  {
    title: "Private Academies & Training Centres",
    whyMatters: [
      "Private academies operate in performance-driven environments where ambition, authority, and trust intersect. Coaches and staff hold significant influence, and young athletes or trainees may be reluctant to raise concerns due to fear of selection, progression, or reputation.",
      "Safeguarding in academies is not about limiting coaching or performance. It is about creating environments where development can happen safely, consistently, and sustainably — without fear, silence, or harm.",
      "Strong safeguarding protects athletes, staff, and the academy itself."
    ],
    howWeWork: [
      "We work closely with academies to embed safeguarding into coaching practice, leadership behaviour, and daily operations — not just policy documents. Our approach focuses on clarity around boundaries and professional conduct, confidence in handling concerns without overreaction or avoidance.",
      "We align safeguarding with performance and wellbeing, and reduce reliance on informal judgement through clear systems. We respect the realities of high-performance environments and design safeguarding that supports, rather than undermines, excellence."
    ],
    support: [
      "Coach and staff safeguarding training",
      "Safeguarding policy and system development",
      "Athlete education around rights, boundaries, and reporting",
      "Leadership and management safeguarding guidance",
      "Readiness reviews and ongoing advisory support"
    ]
  },
  {
    title: "Educational Institutions",
    whyMatters: [
      "Educational institutions are responsible for more than academic outcomes. They are environments where children and young people learn, socialise, travel, and develop their understanding of boundaries, authority, and trust.",
      "Safeguarding in schools and colleges is a professional skill — one that supports teachers and staff to recognise concerns early, respond appropriately, and create safe learning environments. It also helps students understand their rights, boundaries, and sense of agency.",
      "Effective safeguarding strengthens trust with families, protects staff, and supports institutional integrity."
    ],
    howWeWork: [
      "We support institutions to embed safeguarding into everyday practice, rather than treating it as a compliance requirement. Our work focuses on building staff confidence and clarity in identifying and responding to concerns.",
      "We strengthen systems around supervision, conduct, travel, and reporting, support leadership in creating safe, accountable cultures, and ensure safeguarding is understood, not just documented. Our approach is age-appropriate, role-specific, and aligned with Indian legal and institutional realities."
    ],
    support: [
      "Safeguarding training for teachers and staff",
      "Leadership and management safeguarding guidance",
      "Policy review and system strengthening",
      "Student education on rights, boundaries, and safety",
      "Advisory support for ongoing safeguarding capacity"
    ]
  },
  {
    title: "National Bodies & Federations",
    whyMatters: [
      "National bodies and governing institutions play a critical role in setting expectations, standards, and culture across entire sectors. Safeguarding at this level is about governance, consistency, and credibility.",
      "As expectations from athletes, parents, partners, and international stakeholders increase, national bodies are expected to demonstrate leadership in safeguarding — not only through policy, but through implementation and oversight.",
      "Strong safeguarding frameworks support integrity, trust, and long-term institutional legitimacy."
    ],
    howWeWork: [
      "We support national bodies to design and strengthen safeguarding systems that are scalable, consistent, and aligned with international best practice — while remaining practical for diverse Indian contexts.",
      "Our work focuses on translating safeguarding standards into implementable frameworks, supporting leadership and governance structures, strengthening reporting and response systems, and aligning safeguarding with broader governance and performance goals. We work as thought partners, not just service providers."
    ],
    support: [
      "Safeguarding framework and policy development",
      "Leadership and governance advisory",
      "Training for key stakeholders and officials",
      "Readiness and gap assessments",
      "Ongoing strategic safeguarding support"
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
            <div className="w-full h-[1px] bg-gray-200" />
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
                    <motion.div
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.2 }}
                    >
                      <div className="text-base font-black font-montserrat text-[#004AAD] uppercase tracking-widest mb-6 flex items-center gap-4">
                         <span className="w-12 h-2 bg-[#004AAD]" />
                         Sector {String(i + 1).padStart(2, '0')}
                      </div>
                      <h2 className="text-6xl md:text-7xl lg:text-8xl font-league uppercase leading-[0.8] mb-10 text-[#1A1A1A] tracking-tighter">
                        {sector.title}
                      </h2>
                    </motion.div>
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
                  <div className="w-full h-[1px] bg-gray-200 mt-24" />
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
