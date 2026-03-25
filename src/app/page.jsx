import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import Services from '@/components/services/Services';
import WorkSection from '@/components/work/WorkSection';
import TrainingSection from '@/components/training/TrainingSection';
import CaseStudiesSection from '@/components/case-studies/CaseStudiesSection';
import Contact from '@/components/contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WorkSection />
      <TrainingSection />
      <Services />
      <CaseStudiesSection />
      <Contact />
    </>
  );
}
