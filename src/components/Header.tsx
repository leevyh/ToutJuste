import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link to="/" className={styles.logoLink}>
          <img src="/logo.png" alt="Tout Juste Logo" className={styles.logo} />
        </Link>
        <nav className={styles.nav}>
          <Link to="/quiz" className={styles.navLink}>Quizz</Link>
          <Link to="/creator" className={styles.navLink}>Espace Créateur</Link>
          <Link to="/admin" className={styles.adminLink}>Admin</Link>
        </nav>
      </div>
    </header>
  );
}
