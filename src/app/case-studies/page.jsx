import PageTransition from '@/components/animations/PageTransition';
import SectionHeading from '@/components/ui/SectionHeading';
import CaseStudyCard from '@/components/case-studies/CaseStudyCard';
import { caseStudies } from '@/lib/data';

export const metadata = {
  title: 'Case Studies — Ian Ellis',
  description: 'Detailed breakdowns of projects I\'ve shipped.',
};

export default function CaseStudiesPage() {
  return (
    <PageTransition>
      <section className="section" style={{ paddingTop: 'calc(var(--space-section) + 4rem)' }}>
        <div className="container">
          <SectionHeading
            label="Case Studies"
            title="Deep Dives"
            description="Detailed breakdowns of projects I've shipped — the problems, the process, and the outcomes."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
