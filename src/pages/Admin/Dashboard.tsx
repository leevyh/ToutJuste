import styles from './AdminDashboard.module.css';

export default function AdminDashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Tour de Contrôle Admin</h1>

      <div className={styles.metricsGrid}>
        <div className={styles.metricCard}>
          <h3>Volume d'Affaires (GMV)</h3>
          <p className={styles.metricValue}>12 450 €</p>
        </div>
        <div className={styles.metricCard}>
          <h3>Commissions brutes (10%)</h3>
          <p className={styles.metricValue}>1 245 €</p>
        </div>
        <div className={styles.metricCard}>
          <h3>Créateurs actifs</h3>
          <p className={styles.metricValue}>42</p>
        </div>
        <div className={styles.metricCard}>
          <h3>Acheteurs inscrits</h3>
          <p className={styles.metricValue}>1 204</p>
        </div>
      </div>

      <div className={styles.sectionsGrid}>
        <section className={styles.section}>
          <h2>Créateurs en attente de validation (KYC)</h2>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <div>
                <strong>Bijoux M.</strong>
                <span className={styles.subtext}>SIRET: 123 456 789 00012</span>
              </div>
              <div className={styles.actions}>
                <button className={styles.btnApprove}>✓ Valider</button>
                <button className={styles.btnReject}>✗ Rejeter</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Avis signalés</h2>
          <div className={styles.emptyState}>Aucun avis signalé pour le moment.</div>
        </section>
      </div>
    </div>
  );
}
