import { useLocation, Link, Navigate } from 'react-router-dom';
import { useMemo } from 'react';
import { calculateMatches } from '../../utils/matchingAlgorithm';
import Button from '../../components/Button';
import styles from './Results.module.css';

export default function Results() {
  const location = useLocation();
  const answers = location.state?.answers;

  const matches = useMemo(() => {
    if (!answers) return [];
    return calculateMatches(answers);
  }, [answers]);

  if (!answers) {
    return <Navigate to="/quiz" replace />;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Voici vos Matchs Parfaits !</h1>
        <p className={styles.subtitle}>Notre algorithme a trouvé {matches.length} pépites locales pour vous.</p>
      </header>

      {matches.length === 0 ? (
        <div className={styles.noMatch}>
          <p>Mince, nous n'avons rien trouvé qui correspond exactement à vos critères...</p>
          <br />
          <Link to="/quiz">
            <Button>Recommencer le test</Button>
          </Link>
        </div>
      ) : (
        <div className={styles.resultsGrid}>
          {matches.map((match) => {
            const matchPercentage = Math.min(100, Math.round(match.score * 2.5)); // Arbitrary normalization for demo
            
            return (
              <div key={match.id} className={styles.productCard}>
                <div className={styles.imageContainer}>
                  <img src={match.images[0]} alt={match.name} className={styles.productImage} />
                  <span className={styles.matchScore}>{matchPercentage}% Match</span>
                </div>
                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{match.name}</h3>
                  <p className={styles.price}>{match.price} €</p>
                  
                  <div className={styles.shopInfo}>
                    <img src={match.shop.logo} alt={match.shop.name} className={styles.shopLogo} />
                    <div>
                      <span className={styles.shopName}>{match.shop.name}</span>
                      <span className={styles.location}>📍 {match.shop.location.city} ({match.shop.location.distance}km)</span>
                    </div>
                  </div>

                  <div className={styles.actions}>
                    <Button fullWidth>Réserver (Click & Collect)</Button>
                    <Button variant="outline" fullWidth>Voir la boutique</Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className={styles.refineSection}>
        <p>Le résultat ne vous convient toujours pas ?</p>
        <Link to="/quiz?refine=true" state={{ previousAnswers: answers }}>
          <Button variant="secondary">Affiner la recherche</Button>
        </Link>
      </div>
    </div>
  );
}
