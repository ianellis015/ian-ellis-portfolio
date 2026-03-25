'use client';

import { motion } from 'framer-motion';
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
        </div>
      </section>

      <section className={styles.imageSection}>
        <div className="container">
          <FadeIn>
            <div className={styles.imagePlaceholder} style={{ '--project-color': project.color }}>
              <span className={styles.placeholderLetter}>{project.title[0]}</span>
              <span className={styles.placeholderHint}>Project screenshot coming soon</span>
            </div>
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
