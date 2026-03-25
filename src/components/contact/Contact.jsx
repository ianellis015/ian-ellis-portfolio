'use client';

import FadeIn from '@/components/animations/FadeIn';
import TextReveal from '@/components/animations/TextReveal';
import Button from '@/components/ui/Button';
import styles from './Contact.module.css';
import { siteConfig } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={`container ${styles.wrapper}`}>
        <FadeIn>
          <span className={styles.label}>Get in Touch</span>
        </FadeIn>

        <TextReveal as="h2" className={styles.heading}>
          Let&apos;s build something together.
        </TextReveal>

        <FadeIn delay={0.2}>
          <p className={styles.description}>
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something great.
          </p>
        </FadeIn>

        <FadeIn delay={0.35} className={styles.actions}>
          <Button href={`mailto:${siteConfig.email}`} variant="primary" size="lg">
            Say Hello
          </Button>
        </FadeIn>

        <FadeIn delay={0.45} className={styles.socials}>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`} className={styles.socialLink}>
            Email
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
