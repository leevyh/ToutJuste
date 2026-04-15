import { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import styles from './ProfileStep.module.css';

interface ProfileStepProps {
  answers: Record<string, any>;
  onChange: (questionId: string, tags: string[], filter?: string) => void;
}

export default function ProfileStep({ answers, onChange }: ProfileStepProps) {
  const filter = answers.budget?.filter || '';
  const initialMin = filter.includes('-') ? filter.split('-')[0] : (filter.startsWith('>=') ? filter.replace('>=', '') : '');
  const initialMax = filter.includes('-') ? filter.split('-')[1] : (filter.startsWith('<=') ? filter.replace('<=', '') : '');

  const [budgetMin, setBudgetMin] = useState(initialMin);
  const [budgetMax, setBudgetMax] = useState(initialMax);
  const [ageValue, setAgeValue] = useState(30);

  useEffect(() => {
    let filterStr = '';
    if (budgetMax) {
      if (budgetMin) filterStr = `${budgetMin}-${budgetMax}`;
      else filterStr = `<=${budgetMax}`;
    } else if (budgetMin) {
      filterStr = `>=${budgetMin}`;
    }

    onChange('budget', [], filterStr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [budgetMin, budgetMax]);

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    setAgeValue(val);

    let tags: string[] = [];
    if (val <= 3) tags = ['#Naissance', '#PremierÂge'];
    else if (val <= 11) tags = ['#Enfance'];
    else if (val <= 17) tags = ['#Adolescent'];
    else if (val <= 30) tags = ['#JeuneAdulte'];
    else if (val <= 59) tags = ['#Adulte'];
    else tags = ['#Senior'];

    onChange('age', tags, undefined);
  };

  return (
    <div className={styles.profileStep}>
      <h2 className={styles.title}>
        <User className={styles.titleIcon} /> Profil Général
      </h2>

      <div className={styles.formGroup}>
        <label>Quel est votre budget ? (Min - Max)</label>
        <div className={styles.budgetRow}>
          <input
            type="number"
            value={budgetMin}
            onChange={e => setBudgetMin(e.target.value)}
            className={styles.input}
            placeholder="10"
          />
          <span>-</span>
          <input
            type="number"
            value={budgetMax}
            onChange={e => setBudgetMax(e.target.value)}
            className={styles.input}
            placeholder="50"
          />
          <span>€</span>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Pour qui est-ce ?</label>
        <div className={styles.pills}>
          {[
            { label: 'Ami(e)', tags: ['#Ami'] },
            { label: 'Conjoint(e)', tags: ['#Couple', '#Amour', '#Romantique'] },
            { label: 'Grand-Parent', tags: ['#GrandParent'] },
            { label: 'Parent', tags: ['#Maman', '#Papa'] },
            { label: 'Enfant', tags: ['#Bébé', '#Enfant', '#Ado'] },
            { label: 'Collègue', tags: ['#Collègue', '#SecretSanta', '#Formel'] },
            { label: 'Frère/Soeur', tags: ['#FrèreSoeur'] },
            { label: 'Autre', tags: ['#Autre'] },
          ].map(opt => (
            <button
              key={opt.label}
              type="button"
              className={`${styles.pill} ${answers.cible?.tags[0] === opt.tags[0] ? styles.activePill : ''}`}
              onClick={() => onChange('cible', opt.tags)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.formGroup}>
          <label>Âge : {ageValue} ans</label>
          <input
            type="range"
            min="0"
            max="100"
            value={ageValue}
            onChange={handleAgeChange}
            className={styles.slider}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Genre (Optionnel)</label>
          <div className={styles.segmentedControl}>
            {[
              { label: 'Femme', tags: ['#Femme'] },
              { label: 'Homme', tags: ['#Homme'] },
              { label: 'Neutre', tags: ['#Unisexe'] }
            ].map(opt => (
              <button
                key={opt.label}
                type="button"
                className={`${styles.segmentBtn} ${answers.genre?.tags[0] === opt.tags[0] ? styles.activeSegment : ''}`}
                onClick={() => onChange('genre', opt.tags)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>L'occasion ?</label>
        <select
          className={styles.select}
          value={answers.occasion?.tags[0] || ''}
          onChange={(e) => {
            const val = e.target.value;
            const allOccasions = {
              '#Noël': ['#Noël'],
              '#NouvelAn / Réveillon': ['#NouvelAn'],
              '#Pâques': ['#Pâques'],
              '#Halloween': ['#Halloween'],
              '#Baptême': ['#Communion', '#Religion'],
              '#Aïd': ['#Aïd'],
              '#Hanouka': ['#Hanouka'],
              '#Esotérisme': ['#Esotérisme'],
              '#Naissance': ['#Naissance', '#Maternité', '#Babyshower'],
              '#Mariage': ['#Mariage', '#PACS', '#Amour'],
              '#Diplôme': ['#Diplôme', '#Réussite'],
              '#Départ': ['#Départ', '#CadeauCommun', '#Retraite'],
              '#Anniversaire': ['#Anniversaire'],
              '#SaintValentin': ['#SaintValentin', '#Couple'],
              '#FêteDesMères': ['#FêteDesMères', '#FêteDesPères', '#FêteDesGrandsParents'],
              '#Crémaillère': ['#Crémaillère', '#Maison', '#NouveauDépart'],
              '#PlaisirDOffrir': ['#PlaisirDOffrir']
            };
            if (val && allOccasions[val as keyof typeof allOccasions]) {
              onChange('occasion', allOccasions[val as keyof typeof allOccasions]);
            }
          }}
        >
          <option value="">Sélectionner une occasion</option>
          <option value="#Noël">Noël</option>
          <option value="#NouvelAn / Réveillon">Nouvel An / Réveillon</option>
          <option value="#Pâques">Pâques</option>
          <option value="#Halloween">Halloween</option>
          <option value="#Baptême">Baptême / Communion / Profession de foi</option>
          <option value="#Aïd">Fêtes de l'Aïd</option>
          <option value="#Hanouka">Hanouka</option>
          <option value="#Esotérisme">Esotérisme</option>
          <option value="#Naissance">Naissance / Babyshower</option>
          <option value="#Mariage">Mariage / PACS / Fiançailles</option>
          <option value="#Diplôme">Diplôme / Réussite</option>
          <option value="#Départ">Départ en retraite / Mutation</option>
          <option value="#Anniversaire">Anniversaire</option>
          <option value="#SaintValentin">Saint-Valentin</option>
          <option value="#FêteDesMères">Fête des Mères / Pères / Grands-Parents</option>
          <option value="#Crémaillère">Crémaillère</option>
          <option value="#PlaisirDOffrir">Juste pour le plaisir</option>
        </select>
      </div>

    </div>
  );
}
