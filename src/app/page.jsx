import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import WorkSection from '@/components/work/WorkSection';
import TrainingSection from '@/components/training/TrainingSection';
import Services from '@/components/services/Services';
import CaseStudiesSection from '@/components/case-studies/CaseStudiesSection';
import Resume from '@/components/resume/Resume';
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
      <Resume />
      <Contact />
    </>
  );
}
