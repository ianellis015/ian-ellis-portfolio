'use client';

import { motion } from 'framer-motion';
import styles from './TextReveal.module.css';

export default function TextReveal({ children, delay = 0, as: Tag = 'div', className }) {
  return (
    <Tag className={`${styles.wrapper} ${className || ''}`}>
      <motion.span
        className={styles.inner}
        initial={{ y: '110%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}
