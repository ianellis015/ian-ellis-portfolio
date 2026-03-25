'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './CaseStudyCard.module.css';

export default function CaseStudyCard({ study, index }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={`/case-studies/${study.slug}`} className={styles.link}>
        <div className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.category}>{study.category}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.readTime}>{study.readTime}</span>
          </div>
          <span className={styles.date}>{study.date}</span>
        </div>

        <h3 className={styles.title}>{study.title}</h3>
        <p className={styles.excerpt}>{study.excerpt}</p>

        <span className={styles.readMore}>
          Read Case Study
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </Link>
    </motion.article>
  );
}
