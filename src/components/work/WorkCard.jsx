'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './WorkCard.module.css';

export default function WorkCard({ project, index }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link href={`/work/${project.slug}`} className={styles.link}>
        <div
          className={styles.imageArea}
          style={{ '--project-color': project.color }}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={styles.cardImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span className={styles.placeholderText}>{project.title[0]}</span>
            </div>
          )}
          <motion.div
            className={styles.overlay}
            whileHover={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className={styles.viewProject}>View Project</span>
          </motion.div>
        </div>

        <div className={styles.info}>
          <div className={styles.meta}>
            <span className={styles.category}>{project.category}</span>
            <span className={styles.year}>{project.year}</span>
          </div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tags}>
            {project.tech.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
