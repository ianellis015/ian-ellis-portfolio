import styles from './Footer.module.css';
import { siteConfig } from '@/lib/data';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <span className={styles.copyright}>
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </span>
        <span className={styles.credit}>
          Designed & built by {siteConfig.name}
        </span>
      </div>
    </footer>
  );
}
