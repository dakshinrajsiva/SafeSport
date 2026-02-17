'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState } from 'react';
import HoverReveal from '@/components/ui/HoverReveal';
import MovingLine from '@/components/ui/MovingLine';
import { Layout, Users, Globe, ChevronDown, ChevronUp } from 'lucide-react';

const DIFFERENCES = [
  {
    title: "Built for real environments",
    icon: <Layout className="w-8 h-8 text-[#004AAD]" />,
    content: "Safeguarding is most effective when it reflects how organisations actually function day to day. In practice, concerns are not always clear-cut, situations often sit in grey areas, and people need guidance they can rely on in real time. Safe Sport India focuses on strengthening safeguarding before harm occurs, by helping organisations build clarity, preparedness, and shared understanding across teams. Our work is grounded in real environments and designed to support confident, consistent action."
  },
  {
    title: "Focused on clarity and judgement",
    icon: <Users className="w-8 h-8 text-[#004AAD]" />,
    content: "We help organisations strengthen clarity around boundaries, roles, and decision-making. By supporting people to develop sound professional judgement and shared expectations, safeguarding becomes easier to apply in everyday situations. This approach allows safeguarding to function as part of normal organisational practice supporting accountability, trust, and effective leadership."
  },
  {
    title: "Human-centred and globally informed",
    icon: <Globe className="w-8 h-8 text-[#004AAD]" />,
    content: "Our work is human-centred and decision-focused, informed by ongoing engagement with international safeguarding organisations, practitioners, and standards bodies. This enables us to remain closely aligned with evolving global best practice, while carefully adapting it for Indian contexts: legally, culturally, and institutionally. The result is safeguarding that supports organisations to operate with confidence, consistency, and credibility as standards and expectations continue to rise."
  }
];

const COMMITMENTS = [
  {
    title: "Protection",
    content: "We are committed to protecting every athlete, student, and participant across ages, abilities, and backgrounds by strengthening environments where safety, dignity, and wellbeing are actively upheld."
  },
  {
    title: "Clarity",
    content: "We support organisations in building clear, practical safeguarding systems that work in real environments providing structure, guidance, and shared understanding rather than ambiguity."
  },
  {
    title: "Capability",
    content: "We equip teachers, coaches, staff, and leaders with the skills, awareness, and confidence to act responsibly, make informed decisions, and respond appropriately in everyday situations."
  },
  {
    title: "Standards",
    content: "We are committed to raising the standard of safety, accountability, and care across India, aligning with evolving best practice while remaining grounded in local realities."
  }
];

export default function ApproachPage() {
  const [openDifference, setOpenDifference] = useState<number | null>(null);

  return (
    <main className="relative bg-[#F8FAFC] text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-[100vh] min-h-screen pt-32">
        
        {/* Header — brand band */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32 bg-[#004AAD]/[0.06] py-16 md:py-20 -mt-32 pt-48 md:pt-52">
          <div className="max-w-7xl mx-auto">
            <div className="w-20 h-1 bg-[#004AAD] mb-8" />
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              Our Approach
            </h1>
            <div className="w-full h-[1px] bg-[#004AAD]/20" />
          </div>
        </section>

        {/* Philosophy */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 bg-white py-16 md:py-20 rounded-t-3xl -mt-8 relative z-10 overflow-hidden">
          <MovingLine className="opacity-40" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
              <div className="md:col-span-4 sticky top-32">
                <h2 className="text-4xl md:text-5xl font-league uppercase mb-6 text-[#1A1A1A] leading-tight">
                  Our Philosophy <br />
                  <span className="text-[#004AAD] text-2xl md:text-3xl tracking-wide">Safeguarding as a Capability</span>
                </h2>
                <p className="text-sm font-montserrat uppercase tracking-widest text-gray-400 mt-4">
                  Systems. Understanding. Judgement.
                </p>
              </div>
              <div className="md:col-span-8 space-y-8 text-lg md:text-xl font-montserrat text-gray-600 leading-relaxed border-l-2 border-[#004AAD]/10 pl-8 md:pl-12">
                <p>
                  At Safe Sport India, our philosophy is grounded in a simple idea: <HoverReveal imageSrc="/images/approach-graphic.svg">safe environments</HoverReveal> are built through clear systems, shared understanding, and sound judgement. Awareness alone is not enough. Safeguarding becomes effective when it is embedded into <HoverReveal imageSrc="/images/values-graphic.svg">everyday practice</HoverReveal> — how people lead, teach, coach, supervise, and make decisions.
                </p>
                
                {/* Approach Graphic - Cropped via object-cover and height constraint */}
                <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden bg-[#004AAD]/5 border border-[#004AAD]/10">
                  <Image 
                    src="/images/approach-graphic.svg" 
                    alt="Our Philosophy Approach" 
                    fill
                    className="object-cover"
                  />
                </div>

                <p>
                  We recognise that real environments are complex. Hierarchies exist. Pressure exists. Situations are rarely clear-cut. Our philosophy acknowledges this reality and focuses on helping organisations operate with <HoverReveal imageSrc="/images/values-graphic.svg">clarity and preparedness</HoverReveal> rather than assumption or reaction.
                </p>
                <p className="text-[#1A1A1A] font-medium border-l-4 border-[#004AAD] pl-6 py-2 bg-[#004AAD]/5 rounded-r-lg">
                  Safeguarding, in our view, is not about control or fear. It is about enabling people to act responsibly, confidently, and consistently — supported by structures that make safe practice possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How We're Different - Accordion */}
        <section className="px-6 md:px-12 lg:px-24 mb-32 bg-[#004AAD]/[0.08] py-24 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#004AAD]/10 skew-x-12 translate-x-1/4 pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-league uppercase mb-16 text-[#1A1A1A] text-center">How We&apos;re Different</h2>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {DIFFERENCES.map((diff, i) => (
                <div 
                  key={i}
                  className="bg-white rounded-2xl shadow-sm border border-[#004AAD]/10 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenDifference(openDifference === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-[#004AAD]/5 flex items-center justify-center text-[#004AAD]">
                        {diff.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-league uppercase text-[#1A1A1A]">{diff.title}</h3>
                        {/* Show first sentence as preview if closed */}
                        {openDifference !== i && (
                          <p className="text-sm font-montserrat text-gray-500 mt-2 line-clamp-1">
                            {diff.content.split('.')[0]}.
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-[#004AAD]">
                      {openDifference === i ? <ChevronUp /> : <ChevronDown />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {openDifference === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 md:px-8 pb-8 pt-0 pl-[5.5rem]">
                          <p className="text-base font-montserrat text-gray-600 leading-relaxed">
                            {diff.content}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitments - Brand Blue Background */}
        <section className="px-6 md:px-12 lg:px-24 pb-32 bg-[#004AAD] py-24 rounded-b-3xl text-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <div className="w-16 h-1 bg-white/20 mx-auto mb-6" />
              <h2 className="text-4xl md:text-6xl font-league uppercase mb-6 text-white">Our Commitments</h2>
              <p className="text-lg font-montserrat text-white/70">
                At SafeSport India, our work is guided by a clear set of commitments that shape how we partner with organisations and the standards we hold ourselves to.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {COMMITMENTS.map((comm, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white font-league text-lg group-hover:bg-white group-hover:text-[#004AAD] transition-all duration-300">
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-league uppercase mb-3 text-white">{comm.title}</h3>
                    <p className="text-base font-montserrat text-white/70 leading-relaxed group-hover:text-white transition-colors">
                      {comm.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 pt-12 border-t border-white/10 text-center">
              <p className="text-xl font-league uppercase text-white tracking-widest opacity-60">
                These commitments guide our decisions, our partnerships, and our long-term vision.
              </p>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
