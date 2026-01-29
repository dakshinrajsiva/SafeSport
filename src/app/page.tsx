import Preloader from '@/components/Preloader';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import WorkWith from '@/components/WorkWith';
import Values from '@/components/Values';
import Timeline from '@/components/Timeline';
import Impact from '@/components/Impact';
import Footer from '@/components/Footer';

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
      </div>
      
      {/* 
        The Footer is fixed at the bottom with z-index -10.
        The mb-[height] on the content wrapper above creates the "curtain" reveal effect.
      */}
      <Footer />
    </main>
  );
}
