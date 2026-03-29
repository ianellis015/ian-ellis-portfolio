'use client';

import FadeIn from '@/components/animations/FadeIn';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './Resume.module.css';

export default function Resume() {
  return (
    <section id="resume" className={`section ${styles.resume}`}>
      <div className="container">
        <SectionHeading
          label="Resume"
          title="Experience & Background"
          description="A full overview of my professional experience, education, and skills."
        />

        <FadeIn delay={0.2}>
          <div className={styles.viewerWrapper}>
            <iframe
              src="/resume.pdf"
              className={styles.viewer}
              title="Ian Ellis Resume"
            />
          </div>

          <div className={styles.download}>
            <a
              href="/resume.pdf"
              download
              className={styles.downloadLink}
            >
              Download PDF
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
