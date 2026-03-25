'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import CaseStudyCard from './CaseStudyCard';
import FadeIn from '@/components/animations/FadeIn';
import Button from '@/components/ui/Button';
import styles from './CaseStudiesSection.module.css';
import { caseStudies } from '@/lib/data';

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className={`section ${styles.caseStudies}`}>
      <div className="container">
        <SectionHeading
          label="Case Studies"
          title="Deep dives"
          description="Detailed breakdowns of projects I've shipped — the problems, the process, and the outcomes."
        />

        <div className={styles.grid}>
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </div>

        <FadeIn delay={0.3} className={styles.cta}>
          <Button href="/case-studies" variant="secondary">
            All Case Studies
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
