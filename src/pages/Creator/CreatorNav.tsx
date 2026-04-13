import { NavLink } from 'react-router-dom';
import styles from './CreatorNav.module.css';

export default function CreatorNav() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/creator" end className={({ isActive }) => isActive ? styles.active : ''}>Tableau de bord</NavLink>
      <NavLink to="/creator/settings" className={({ isActive }) => isActive ? styles.active : ''}>Boutique</NavLink>
      <NavLink to="/creator/catalog" className={({ isActive }) => isActive ? styles.active : ''}>Catalogue</NavLink>
      <NavLink to="/creator/orders" className={({ isActive }) => isActive ? styles.active : ''}>Commandes</NavLink>
    </nav>
  );
}
