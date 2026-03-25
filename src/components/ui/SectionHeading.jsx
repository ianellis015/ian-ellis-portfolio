'use client';

import TextReveal from '@/components/animations/TextReveal';
import FadeIn from '@/components/animations/FadeIn';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ label, title, description }) {
  return (
    <div className={styles.heading}>
      {label && (
        <FadeIn delay={0}>
          <span className={styles.label}>{label}</span>
        </FadeIn>
      )}
      <TextReveal as="h2" className={styles.title}>
        {title}
      </TextReveal>
      {description && (
        <FadeIn delay={0.2}>
          <p className={styles.description}>{description}</p>
        </FadeIn>
      )}
    </div>
  );
}
