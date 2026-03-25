'use client';

import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerChildren';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Services.module.css';
import { services } from '@/lib/data';

const iconMap = {
  code: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  brain: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.9 2-2 2h-4a2 2 0 0 1-2-2 4 4 0 0 1 4-4z" />
      <path d="M9 8v2a3 3 0 0 0 6 0V8" />
      <path d="M8 14a5 5 0 0 0 8 0" />
      <path d="M12 14v4" />
      <path d="M9 22h6" />
      <circle cx="7" cy="12" r="1" />
      <circle cx="17" cy="12" r="1" />
    </svg>
  ),
  mobile: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  consulting: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <SectionHeading
          label="Services"
          title="What I do"
          description="If you’re looking to collaborate or build something together, here’s where I do my best work:"
        />

        <StaggerContainer className={styles.grid}>
          {services.map((service) => (
            <StaggerItem key={service.title} className={styles.card}>
              <div className={styles.iconWrapper}>
                {iconMap[service.icon]}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <span className={styles.cardTech}>{service.tech}</span>
              <a
                href={service.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookingLink}
              >
                Book a meeting with me
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
