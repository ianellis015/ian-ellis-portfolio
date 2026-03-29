'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';
import TextReveal from '@/components/animations/TextReveal';
import Button from '@/components/ui/Button';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail({ project }) {
  return (
    <article className={styles.article}>
      <section
        className={styles.hero}
        style={{ '--project-color': project.color }}
      >
        <div className="container">
          <FadeIn>
            <Link href="/work" className={styles.back}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              All Projects
            </Link>
          </FadeIn>

          <div className={styles.meta}>
            <motion.span
              className={styles.category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.category}
            </motion.span>
            <motion.span
              className={styles.year}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.year}
            </motion.span>
          </div>

          <TextReveal as="h1" className={styles.title} delay={0.1}>
            {project.title}
          </TextReveal>

          <FadeIn delay={0.3}>
            <p className={styles.description}>{project.longDescription}</p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className={styles.tags}>
              {project.tech.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </FadeIn>

          {project.externalUrl && (
            <FadeIn delay={0.5}>
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
              >
                Visit Live Site
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </FadeIn>
          )}
        </div>
      </section>

      <section className={styles.imageSection}>
        <div className="container">
          <FadeIn>
            {project.image ? (
              <div className={styles.imageWrapper}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={styles.projectImage}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                />
              </div>
            ) : (
              <div className={styles.imagePlaceholder} style={{ '--project-color': project.color }}>
                <span className={styles.placeholderLetter}>{project.title[0]}</span>
                <span className={styles.placeholderHint}>Project screenshot coming soon</span>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--max-width-narrow)', margin: '0 auto' }}>
          <FadeIn>
            <div className={styles.cta}>
              <Button href="/work" variant="secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Back to All Projects
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}
