import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import styles from './Landing.module.css';

export default function Landing() {
  return (
    <div className={styles.landing}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Tout juste.<br />
            <span className={styles.highlight}>Tout simplement.</span>
          </h1>
          <p className={styles.subtitle}>
            Fini les pannes d'inspiration et les cadeaux impersonnels ! Répondez à 5 questions rapides et laissez nous vous dénicher la pépite parfaite, fabriquée avec passion par les artisans de notre région.
          </p>
          <div className={styles.ctaWrapper}>
            <Link to="/quiz">
              <Button className={styles.mainCta}>
                Dénicher le cadeau idéal
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <div className={styles.imagePlaceholder}>
            <div className={styles.heartShape}>100%</div>
            <p>Créateurs Locaux</p>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <h2>Comment ça marche ?</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <h3>Le Mini-Quiz</h3>
            <p>Dites-nous tout sur lui/elle ! Quelques questions ludiques sur sa personnalité, son mode de vie et vos envies.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <h3>La Magie du Match</h3>
            <p>Notre algo trouve les meilleures créations artisanales correspondantes à votre recherche.</p>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <h3>Click & Collect</h3>
            <p>Faites-vous livrer chez vous, ou venez récupérer votre cadeau directement à l'atelier du créateur !</p>
          </div>
        </div>
      </section>
    </div>
  );
}
