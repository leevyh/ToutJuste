import CreatorNav from './CreatorNav';
import styles from './Dashboard.module.css';

export default function CreatorDashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Espace Créateur</h1>
      <CreatorNav />
      
      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <h3>Vues ce mois</h3>
          <p className={styles.metricValue}>1 245</p>
          <span className={styles.metricTrend}>+12%</span>
        </div>
        <div className={styles.metricCard}>
          <h3>Mises en favoris</h3>
          <p className={styles.metricValue}>84</p>
          <span className={styles.metricTrend}>+5%</span>
        </div>
        <div className={styles.metricCard}>
          <h3>Chiffre d'Affaires</h3>
          <p className={styles.metricValue}>850 €</p>
        </div>
        <div className={styles.metricCard}>
          <h3>Commandes en cours</h3>
          <p className={styles.metricValue}>3</p>
        </div>
      </div>

      <div className={styles.recentActivity}>
        <h2>Activité Récente</h2>
        <div className={styles.activityList}>
          <div className={styles.activityItem}>
            <p>Nouvelle commande (C-1042) pour "Vase Minimaliste en Grès"</p>
            <span>Il y a 2 heures</span>
          </div>
          <div className={styles.activityItem}>
            <p>Paiement transféré vers votre compte (850€)</p>
            <span>Hier</span>
          </div>
        </div>
      </div>
    </div>
  );
}
