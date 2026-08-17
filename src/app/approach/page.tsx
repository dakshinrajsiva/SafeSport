'use client';

import Footer from '@/components/Footer';
import HoverReveal from '@/components/ui/HoverReveal';
import VennDiagram from '@/components/ui/VennDiagram';

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
  return (
    <main className="relative bg-white text-[#1A1A1A]">
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-0 md:mb-[100vh] min-h-screen pt-32">
        
        {/* Header */}
        <section className="px-6 md:px-12 lg:px-24 mb-20 md:mb-32">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-league uppercase leading-[0.8] tracking-tighter text-[#004AAD] mb-8">
              Our Approach
            </h1>
            <div className="w-full h-[1px] bg-gray-200" aria-hidden="true" />
          </div>
        </section>

        {/* Philosophy */}
        <section id="philosophy" className="px-6 md:px-12 lg:px-24 mb-32 bg-white py-16 md:py-20 relative z-10 overflow-hidden scroll-mt-[108px]" aria-labelledby="philosophy-heading">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
              <div className="md:col-span-4 sticky top-32">
                <h2 id="philosophy-heading" className="text-4xl md:text-6xl font-league uppercase mb-6 text-[#1A1A1A] leading-tight">
                  Our Philosophy
                </h2>
                <p className="text-sm font-montserrat uppercase tracking-widest text-gray-400 mt-4">
                  Systems. Understanding. Judgement.
                </p>
              </div>
              <div className="md:col-span-8 space-y-8 text-lg md:text-xl font-montserrat text-gray-600 leading-relaxed border-l-2 border-[#004AAD]/10 pl-8 md:pl-12">
                <p>
                  At Safe Sport India, our philosophy is grounded in a simple idea: <HoverReveal>safe environments</HoverReveal> are built through clear systems, shared understanding, and sound judgement. Awareness alone is not enough. Safeguarding becomes effective when it is embedded into <HoverReveal>everyday practice</HoverReveal> - how people lead, teach, coach, supervise, and make decisions.
                </p>
                
                {/* Custom Animated Venn Diagram */}
                <div className="my-16">
                  <VennDiagram />
                </div>

                <p>
                  We recognise that real environments are complex. Hierarchies exist. Pressure exists. Situations are rarely clear-cut. Our philosophy acknowledges this reality and focuses on helping organisations operate with <HoverReveal>clarity and preparedness</HoverReveal> rather than assumption or reaction.
                </p>
                <p className="text-[#1A1A1A] font-medium border-l-4 border-[#004AAD] pl-6 py-2 bg-[#004AAD]/5 rounded-r-lg">
                  Safeguarding is about enabling people to act responsibly, confidently, and consistently, supported by structures that make safe practice possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitments - Brand Blue Background */}
        <section id="commitments" className="px-6 md:px-12 lg:px-24 pb-32 bg-[#004AAD] py-24 rounded-b-3xl relative overflow-hidden scroll-mt-[108px]">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-white/5 -skew-x-12 -translate-x-1/4 pointer-events-none" aria-hidden="true" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-16 text-center max-w-3xl mx-auto">
              <div className="w-16 h-1 bg-white mx-auto mb-6" />
              <h2 className="text-4xl md:text-6xl font-league uppercase mb-6 text-white">Our Commitments</h2>
              <p className="text-lg font-montserrat text-white/80">
                At SafeSport India, our work is guided by a clear set of commitments that shape how we partner with organisations and the standards we hold ourselves to.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {COMMITMENTS.map((comm, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 mt-2">
                    <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white font-league text-lg group-hover:bg-white group-hover:text-[#004AAD] transition-all duration-300">
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-league uppercase mb-3 text-white">{comm.title}</h3>
                    <p className="text-base font-montserrat text-white/80 leading-relaxed">
                      {comm.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 pt-12 border-t border-white/20 text-center">
              <p className="text-xl font-league uppercase text-white tracking-widest">
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
