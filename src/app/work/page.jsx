import PageTransition from '@/components/animations/PageTransition';
import SectionHeading from '@/components/ui/SectionHeading';
import WorkCard from '@/components/work/WorkCard';
import { projects } from '@/lib/data';

export const metadata = {
  title: 'Work — Ian Ellis',
  description: 'A collection of projects I\'ve designed, built, and shipped.',
};

export default function WorkPage() {
  return (
    <PageTransition>
      <section className="section" style={{ paddingTop: 'calc(var(--space-section) + 4rem)' }}>
        <div className="container">
          <SectionHeading
            label="Work"
            title="All Projects"
            description="Everything I've built — from full-stack apps to AI integrations and mobile experiences."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))',
            gap: 'var(--space-xl)',
          }}>
            {projects.map((project, i) => (
              <WorkCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
