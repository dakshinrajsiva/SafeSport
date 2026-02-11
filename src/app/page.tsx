import Preloader from '@/components/Preloader';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import WorkWith from '@/components/WorkWith';
import Timeline from '@/components/Timeline';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Resources from '@/components/Resources';
import FAQ from '@/components/FAQ';
import MarqueeBanner from '@/components/MarqueeBanner';

export default function Home() {
  return (
    <main className="relative">
      <Preloader />
      
      {/* Content wrapper with higher z-index and solid background to cover the footer */}
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-[100vh]">
        <Hero />
        <Mission />
        <WorkWith />
        <Timeline />
        <Services />

        {/* Our Standards */}
        <section id="standards" className="py-32 px-4 md:px-24 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.4em] mb-6 text-xs md:text-sm flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#004AAD]" />
              Our Standards
            </h3>
            <h2 className="text-4xl md:text-6xl font-league text-[#1A1A1A] uppercase leading-tight mb-16">
              Rigorous. Contextual. Indian.
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Localised Safeguards", desc: "Adapted from international safeguarding frameworks to fit Indian sporting and educational contexts." },
                { title: "Indian Legal & Regulatory Context", desc: "Aligned with POCSO, JJ Act, Vishaka guidelines, and emerging Indian child protection frameworks." },
                { title: "Contextualization for India", desc: "Designed for India's diverse cultural, linguistic, and institutional landscape — not a Western copy-paste." },
                { title: "Ethical & Professional Commitments", desc: "Grounded in transparency, accountability, and a duty of care to every individual we serve." },
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-2xl bg-[#F5F7FA] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-10 h-10 rounded-full bg-[#004AAD]/10 flex items-center justify-center mb-6 group-hover:bg-[#004AAD] transition-colors duration-500">
                    <span className="text-xs font-black text-[#004AAD] group-hover:text-white transition-colors duration-500 font-montserrat">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-[#1A1A1A] mb-3 leading-snug">{item.title}</h4>
                  <p className="text-sm md:text-base text-gray-500 leading-relaxed font-montserrat">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Resources />

        {/* FAQs */}
        <section id="faqs" className="py-32 px-4 md:px-24 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.4em] mb-6 text-xs md:text-sm flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#004AAD]" />
              FAQs
            </h3>
            <h2 className="text-4xl md:text-6xl font-league text-[#1A1A1A] uppercase leading-tight mb-16">
              Questions organisations often ask us.
            </h2>
            <FAQ />
          </div>
        </section>

        {/* WWP-style scrolling marquee ticker — last element before footer reveal */}
        <MarqueeBanner />
      </div>
      
      {/* 
        The Footer is fixed at the bottom with z-index -10.
        The mb-[height] on the content wrapper above creates the "curtain" reveal effect.
      */}
      <Footer />
    </main>
  );
}
