import { Heart } from "lucide-react";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          Built with React & <Heart className={styles.heart} /> by <strong>Manish Patel</strong>
        </p>
        <p className={styles.copyright}>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
