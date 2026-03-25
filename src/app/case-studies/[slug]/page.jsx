import { notFound } from 'next/navigation';
import PageTransition from '@/components/animations/PageTransition';
import CaseStudyDetail from '@/components/case-studies/CaseStudyDetail';
import { caseStudies } from '@/lib/data';

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.title} — Ian Ellis`,
    description: study.excerpt,
  };
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <PageTransition>
      <CaseStudyDetail study={study} />
    </PageTransition>
  );
}
