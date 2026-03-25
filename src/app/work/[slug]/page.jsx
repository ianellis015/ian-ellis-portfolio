import { notFound } from 'next/navigation';
import PageTransition from '@/components/animations/PageTransition';
import ProjectDetail from '@/components/work/ProjectDetail';
import { projects } from '@/lib/data';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Ian Ellis`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <PageTransition>
      <ProjectDetail project={project} />
    </PageTransition>
  );
}
