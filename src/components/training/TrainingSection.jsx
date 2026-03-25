'use client';

import Image from 'next/image';

import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './TrainingSection.module.css';
import { trainingEvents } from '@/lib/data';

export default function TrainingSection() {
  return (
    <section id="training" className={`section ${styles.training}`}>
      <div className="container">
        <SectionHeading
          label="Training & Education"
          title="More than an engineer"
          description="I’ve worked with teams to explore and apply AI through hands-on sessions and structured learning experiences, empowering others to harness it as a force multiplier in their own work, no matter their field."
        />

        <StaggerContainer className={styles.grid}>
          {trainingEvents.map((event) => (
            <StaggerItem key={event.slug} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.imageOverlay} />
                <span className={styles.category}>{event.category}</span>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span className={styles.date}>{event.date}</span>
                </div>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <p className={styles.cardDescription}>{event.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
