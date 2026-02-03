import Preloader from '@/components/Preloader';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import WorkWith from '@/components/WorkWith';
import Values from '@/components/Values';
import Timeline from '@/components/Timeline';
import Impact from '@/components/Impact';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import Resources from '@/components/Resources';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main className="relative">
      <Preloader />
      
      {/* Content wrapper with higher z-index and solid background to cover the footer */}
      <div className="relative z-10 bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] mb-[600px] md:mb-[700px]">
        <Hero />
        <Mission />
        <WorkWith />
        <Values />
        <Timeline />
        <Impact />
        <Services />
        <Resources />

        {/* FAQs */}
        <section id="faqs" className="py-32 px-4 md:px-24 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-[#004AAD] font-montserrat font-bold uppercase tracking-[0.4em] mb-6 text-xs md:text-sm">
              FAQs
            </h3>
            <h2 className="text-4xl md:text-6xl font-league text-[#1A1A1A] uppercase leading-tight mb-16">
              Questions organisations often ask us.
            </h2>
            <FAQ />
          </div>
        </section>
      </div>
      
      {/* 
        The Footer is fixed at the bottom with z-index -10.
        The mb-[height] on the content wrapper above creates the "curtain" reveal effect.
      */}
      <Footer />
    </main>
  );
}
