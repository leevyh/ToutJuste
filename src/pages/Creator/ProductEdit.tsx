import { useState } from 'react';
import CreatorNav from './CreatorNav';
import Button from '../../components/Button';
import styles from './ProductEdit.module.css';

export default function ProductEdit() {
  const [selections, setSelections] = useState({
    cible: [] as string[],
    occasion: [] as string[],
    utilite: [] as string[],
    style: [] as string[],
    couleurs: [] as string[],
    matiere: [] as string[],
    valeurs: [] as string[]
  });

  const handleToggle = (category: keyof typeof selections, value: string, max: number) => {
    setSelections(prev => {
      const current = prev[category];
      if (current.includes(value)) {
        return { ...prev, [category]: current.filter(v => v !== value) };
      }
      if (max === 1) {
        return { ...prev, [category]: [value] };
      }
      if (current.length < max) {
        return { ...prev, [category]: [...current, value] };
      }
      return prev;
    });
  };

  const renderCheckboxes = (
    options: { id: string; label: string }[],
    category: keyof typeof selections,
    max: number
  ) => {
    return options.map(opt => {
      const isChecked = selections[category].includes(opt.id);
      const isMaxReached = !isChecked && selections[category].length >= max;
      return (
        <label key={opt.id} className={`${styles.tagLabel} ${isMaxReached && max > 1 ? styles.tagDisabled : ''}`}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleToggle(category, opt.id, max)}
            disabled={isMaxReached && max > 1}
          /> {opt.label}
        </label>
      );
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Éditer un Produit</h1>
      <CreatorNav />

      <form className={styles.form}>
        <div className={styles.mainContent}>
          <section className={styles.section}>
            <h2>Informations Générales</h2>
            <div className={styles.inputGroup}>
              <label>Nom du produit</label>
              <input type="text" className={styles.input} defaultValue="Nouveau Produit" />
            </div>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Prix (€)</label>
                <input type="number" className={styles.input} defaultValue={0} />
              </div>
              <div className={styles.inputGroup}>
                <label>Stock disponible</label>
                <input type="number" className={styles.input} defaultValue={1} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <label>Description</label>
              <textarea rows={4} className={styles.textarea}></textarea>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.matchingHeader}>
              <h2>🎯 Le Matching : Aidez-nous à trouver vos futurs clients</h2>
              <p className={styles.helpText}>
                "C'est ici que la magie opère ! 🪄 Notre algorithme se base sur ces critères pour proposer votre création aux bons acheteurs.
                <br /><strong>Ne cochez pas tout pour essayer d'être visible partout, cela fausserait l'algorithme.</strong> Soyez le plus précis possible : plus vos choix seront justes, plus le 'Match' sera parfait."
              </p>
            </div>

            <div className={styles.tagsGrid}>
              <div className={styles.tagCategory}>
                <h3>1. La Cible & Le Genre <span className={styles.tagHint}>(Max 3)</span></h3>
                <p className={styles.tagQuestion}>« Pour qui cette création est-elle pensée ? »</p>
                <div className={styles.subCategory}>
                  <h4>Genre :</h4>
                  <div className={styles.tagsListHorizontal}>
                    {renderCheckboxes([
                      { id: 'cible_homme', label: '👨 Homme' },
                      { id: 'cible_femme', label: '👩 Femme' },
                      { id: 'cible_unisexe', label: '👽 Unisexe / Tout public' }
                    ], 'cible', 3)}
                  </div>
                </div>
                <div className={styles.subCategory}>
                  <h4>Âge cible :</h4>
                  <div className={styles.tagsListHorizontal}>
                    {renderCheckboxes([
                      { id: 'cible_bebe', label: '👶 Bébé/Enfant' },
                      { id: 'cible_ado', label: '🧑 Ado/Adulte' },
                      { id: 'cible_senior', label: '🧓 Senior' },
                      { id: 'cible_tout', label: '♾️ Tout âge' }
                    ], 'cible', 3)}
                  </div>
                </div>
              </div>

              <div className={styles.tagCategory}>
                <h3>2. L'Occasion <span className={styles.tagHint}>(Max 3)</span></h3>
                <p className={styles.tagQuestion}>« C'est le cadeau rêvé pour... »</p>

                <div className={styles.subCategory}>
                  <h4>Les fêtes de fin d'année & Annuelles :</h4>
                  <div className={styles.tagsListColumn}>
                    {renderCheckboxes([
                      { id: 'occ_noel', label: '🎄 Noël' },
                      { id: 'occ_nouvelan', label: '✨ Nouvel An / Réveillon' },
                      { id: 'occ_paques', label: '🐰 Pâques' },
                      { id: 'occ_halloween', label: '🎃 Halloween' }
                    ], 'occasion', 3)}
                  </div>
                </div>

                <div className={styles.subCategory}>
                  <h4>Les fêtes religieuses & spirituelles :</h4>
                  <div className={styles.tagsListColumn}>
                    {renderCheckboxes([
                      { id: 'occ_communion', label: '🕊️ Baptême / Communion / Profession de foi' },
                      { id: 'occ_aid', label: '🌙 Fêtes de l\'Aïd' },
                      { id: 'occ_hanouka', label: '🕎 Hanouka' },
                      { id: 'occ_esoterique', label: '🧿 Fête spirituelle / Ésotérique' }
                    ], 'occasion', 3)}
                  </div>
                </div>

                <div className={styles.subCategory}>
                  <h4>Les grandes étapes de la vie :</h4>
                  <div className={styles.tagsListColumn}>
                    {renderCheckboxes([
                      { id: 'occ_nais', label: '🍼 Naissance / Babyshower' },
                      { id: 'occ_mariage', label: '💍 Mariage / PACS / Fiançailles' },
                      { id: 'occ_diplome', label: '🎓 Diplôme / Réussite (Bac, Permis...)' },
                      { id: 'occ_depart', label: '✈️ Départ (Retraite, Nouveau travail, Voyage)' }
                    ], 'occasion', 3)}
                  </div>
                </div>

                <div className={styles.subCategory}>
                  <h4>Les classiques & Petites attentions :</h4>
                  <div className={styles.tagsListColumn}>
                    {renderCheckboxes([
                      { id: 'occ_anni', label: '🎂 Anniversaire' },
                      { id: 'occ_saintv_rencontre', label: '❤️ Saint-Valentin / Anniversaire de rencontre' },
                      { id: 'occ_fetesmp', label: '💐 Fête des Mères / Pères / Grands-parents' },
                      { id: 'occ_crem_new', label: '🔑 Crémaillère / Nouvel appartement' },
                      { id: 'occ_plaisiroff', label: '🎁 Plaisir d\'offrir (Sans occasion)' }
                    ], 'occasion', 3)}
                  </div>
                </div>
              </div>

              <div className={styles.tagCategory}>
                <h3>3. L'Utilité de l'objet <span className={styles.tagHint}>(Max 1)</span></h3>
                <p className={styles.tagQuestion}>« Concrètement, cet objet sert surtout à... »</p>
                <div className={styles.tagsListColumn}>
                  {renderCheckboxes([
                    { id: 'util_degus', label: '🤤 Se déguster (Gourmand, épicerie, boisson)' },
                    { id: 'util_deco', label: '🖼️ Décorer (Affiches, céramique, fleurs)' },
                    { id: 'util_porter', label: '👗 Se porter (Bijoux, mode, accessoires)' },
                    { id: 'util_servir', label: '🛠️ Servir au quotidien (Papeterie, zéro déchet, pratique)' },
                    { id: 'util_bien', label: '🧘 Faire du bien (Cosmétique, bougie, détente)' }
                  ], 'utilite', 1)}
                </div>
              </div>

              <div className={styles.tagCategory}>
                <h3>4. Le Style & La "Vibe" <span className={styles.tagHint}>(Max 3)</span></h3>
                <p className={styles.tagQuestion}>« Quel est l'univers de ce produit ? »</p>
                <div className={styles.tagsList}>
                  {renderCheckboxes([
                    { id: 'style_nat', label: '🌿 Nature / Bohème' },
                    { id: 'style_coc', label: '🛋️ Cocooning / Réconfortant' },
                    { id: 'style_brut', label: '🤘 Brut / Industriel' },
                    { id: 'style_min', label: '✨ Minimaliste / Épuré' },
                    { id: 'style_pop', label: '🤪 Pop / Fun / Décalé' },
                    { id: 'style_adv', label: '🎒 Aventure / Nomade' },
                    { id: 'style_vin', label: '🕰️ Vintage / Rétro' }
                  ], 'style', 3)}
                </div>
              </div>

              <div className={styles.tagCategory}>
                <h3>5. L'Apparence : Couleurs & Matières <span className={styles.tagHint}>(Max 2 par ligne)</span></h3>
                <p className={styles.tagQuestion}>« Si on devait le décrire visuellement et au toucher... »</p>
                <div className={styles.subCategory}>
                  <h4>Couleurs dominantes : *</h4>
                  <div className={styles.tagsListColumn}>
                    {renderCheckboxes([
                      { id: 'coul_neu', label: '⚪ Neutre / Pastel / Doux' },
                      { id: 'coul_som', label: '⚫ Sombre / Profond / Nuit' },
                      { id: 'coul_vif', label: '🌈 Vif / Multicolore / Flashy' }
                    ], 'couleurs', 2)}
                  </div>
                </div>
                <div className={styles.subCategory}>
                  <h4>Le toucher / La matière : *</h4>
                  <div className={styles.tagsListColumn}>
                    {renderCheckboxes([
                      { id: 'mat_chaud', label: '🪵 Chaud / Texturé (Bois, laine, tissu...)' },
                      { id: 'mat_lisse', label: '🧊 Lisse / Solide (Céramique, verre, métal...)' },
                      { id: 'mat_souple', label: '🪶 Souple / Noble (Cuir, soie, lin...)' }
                    ], 'matiere', 2)}
                  </div>
                </div>
              </div>

              <div className={styles.tagCategory}>
                <h3>6. Les Valeurs & L'Engagement <span className={styles.tagHint}>(Optionnel)</span></h3>
                <p className={styles.tagQuestion}>« Le petit supplément d'âme de votre création... »</p>
                <div className={styles.tagsListColumn}>
                  {renderCheckboxes([
                    { id: 'val_upc', label: '♻️ Upcyclé / Zéro Déchet' },
                    { id: 'val_bio', label: '🌿 100% Naturel / Bio' },
                    { id: 'val_uni', label: '🥇 Pièce Unique / Série très limitée' },
                    { id: 'val_per', label: '✍️ Personnalisable (Prénom, message...)' },
                    { id: 'val_sav', label: '👐 Savoir-faire traditionnel / Matière noble' }
                  ], 'valeurs', 99)}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.sidebar}>
          <section className={styles.section}>
            <h2>Médias</h2>
            <div className={styles.uploadBox}>
              Ajouter une image
            </div>
          </section>

          <div className={styles.actionsBox}>
            <Button type="button" fullWidth className={styles.saveBtn}>Enregistrer</Button>
            <Button type="button" fullWidth variant="outline">Annuler</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
