'use client';

import Image from 'next/image';
import FadeIn from '@/components/animations/FadeIn';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './About.module.css';
import { siteConfig } from '@/lib/data';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <SectionHeading label="About" title="A bit about me" />

        <div className={styles.grid}>
          <FadeIn delay={0.1} className={styles.bio}>
            {siteConfig.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </FadeIn>

          <FadeIn delay={0.25} className={styles.imageWrapper}>
            <Image
              src="/images/about-me.jpg"
              alt="Ian Ellis"
              width={520}
              height={620}
              className={styles.aboutImage}
              priority
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
