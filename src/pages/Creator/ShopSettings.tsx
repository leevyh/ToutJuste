import { Link } from 'react-router-dom';
import CreatorNav from './CreatorNav';
import Button from '../../components/Button';
import styles from './ShopSettings.module.css';

export default function ShopSettings() {
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.pageTitle}>Configuration de la Boutique</h1>
        <div className={styles.headerActions}>
          <div className={styles.vacationToggle}>
            <span className={styles.vacationLabel}>Mode Vacances</span>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
          </div>
          <Link to="/shop/shop_1" state={{ isPreview: true }}>
            <Button variant="outline">Prévisualiser</Button>
          </Link>
        </div>
      </div>
      <CreatorNav />
      
      <form className={styles.form}>
        <section className={styles.section}>
          <h2>Visuel de la Boutique</h2>
          <div className={styles.inputGroup}>
            <label>Logo de la marque</label>
            <div className={styles.uploadBox}>Importer une image (Carré)</div>
          </div>
          <div className={styles.inputGroup}>
            <label>Bannière de couverture</label>
            <div className={styles.uploadBox}>Importer une bannière (16:9)</div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Informations Générales</h2>
          <div className={styles.inputGroup}>
            <label>Nom de la boutique</label>
            <input type="text" defaultValue="Atelier Céramique Sud" className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <label>Biographie / À propos</label>
            <textarea rows={4} defaultValue="Créations uniques en grès faits main dans mon atelier toulousain." className={styles.textarea} />
          </div>
          <div className={styles.inputGroup}>
            <label>Liens externes (Instagram, site web...)</label>
            <input type="url" placeholder="https://instagram.com/..." className={styles.input} />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Localisation & Retrait</h2>
          <div className={styles.inputGroup}>
            <label>Adresse complète de l'atelier (pour la carte GPS)</label>
            <input type="text" defaultValue="15 rue des Arts, 31000 Toulouse" className={styles.input} />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Modes de remise</h2>
          <div className={styles.toggleGroup}>
            <label>Click & Collect (Retrait en boutique)</label>
            <input type="checkbox" className={styles.toggle} defaultChecked disabled />
          </div>
          <div className={styles.toggleGroup}>
            <label>Proposer la livraison à domicile</label>
            <input type="checkbox" className={styles.toggle} defaultChecked />
          </div>
        </section>

        <div className={styles.formActions}>
          <Button type="button">Enregistrer les modifications</Button>
        </div>
      </form>
    </div>
  );
}
