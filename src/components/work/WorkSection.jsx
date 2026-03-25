'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import WorkCard from './WorkCard';
import FadeIn from '@/components/animations/FadeIn';
import Button from '@/components/ui/Button';
import styles from './WorkSection.module.css';
import { projects } from '@/lib/data';

export default function WorkSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="work" className={`section ${styles.work}`}>
      <div className="container">
        <SectionHeading
          label="Selected Work"
          title="Things I've built"
          description="A selection of projects I've designed, built, and shipped."
        />

        <div className={styles.grid}>
          {featured.map((project, i) => (
            <WorkCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <FadeIn delay={0.3} className={styles.cta}>
          <Button href="/work" variant="secondary">
            View All Projects
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
