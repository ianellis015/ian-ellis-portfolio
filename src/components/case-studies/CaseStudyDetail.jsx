'use client';

import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';
import TextReveal from '@/components/animations/TextReveal';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import Button from '@/components/ui/Button';
import styles from './CaseStudyDetail.module.css';

export default function CaseStudyDetail({ study }) {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div className="container container--narrow">
          <FadeIn>
            <Link href="/case-studies" className={styles.back}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              All Case Studies
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className={styles.meta}>
              <span className={styles.category}>{study.category}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.readTime}>{study.readTime}</span>
              <span className={styles.dot}>·</span>
              <span className={styles.date}>{study.date}</span>
            </div>
          </FadeIn>

          <TextReveal as="h1" className={styles.title} delay={0.15}>
            {study.title}
          </TextReveal>
        </div>
      </header>

      <div className="container container--narrow">
        <div className={styles.body}>
          <FadeIn>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The Problem</h2>
              <p className={styles.text}>{study.problem}</p>
            </section>
          </FadeIn>

          <FadeIn>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The Approach</h2>
              <p className={styles.text}>{study.approach}</p>
            </section>
          </FadeIn>

          <section className={styles.section}>
            <FadeIn>
              <h2 className={styles.sectionTitle}>Key Decisions</h2>
            </FadeIn>
            <StaggerContainer>
              <ul className={styles.decisions}>
                {study.decisions.map((decision, i) => (
                  <StaggerItem key={i}>
                    <li className={styles.decision}>{decision}</li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>
          </section>

          <FadeIn>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>The Outcome</h2>
              <p className={styles.text}>{study.outcome}</p>
            </section>
          </FadeIn>

          <FadeIn className={styles.cta}>
            <Button href="/case-studies" variant="secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Case Studies
            </Button>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}
