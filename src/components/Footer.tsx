import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img src="/logo-min.png" alt="Tout Juste Min Logo" className={styles.logoMin} />
          <p className={styles.tagline}>ToutJuste.</p>
        </div>
        <div className={styles.links}>
          <div>
            <h4>À Propos</h4>
            <ul>
              <li><a href="#">Le concept</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Légal</h4>
            <ul>
              <li><a href="#">CGU & CGV</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} ToutJuste. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
