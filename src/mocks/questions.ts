export interface QuizOption {
  label: string;
  tags: string[];
  filterCriteria?: string;
}

export interface QuizQuestion {
  id: string;
  title: string;
  options: QuizOption[];
}

export interface QuizPart {
  partNumber: number;
  title: string;
  questions: QuizQuestion[];
}

export const STANDARD_QUIZ_PARTS: QuizPart[] = [
  {
    partNumber: 1,
    title: "La cible, le contexte et le budget",
    questions: [
      {
        id: 'cible',
        title: 'Pour qui cherchez-vous ?',
        options: [
          { label: 'Ami(e)', tags: ['#Ami'] },
          { label: 'Conjoint(e)', tags: ['#Couple', '#Amour', '#Romantique'] },
          { label: 'Parent / Grand-parent', tags: ['#Maman', '#Papa', '#GrandParent'] },
          { label: 'Enfant / Bébé', tags: ['#Bébé', '#Enfant', '#Ado'] },
          { label: 'Collègue / Connaissance', tags: ['#Collègue', '#SecretSanta', '#Formel'] },
          { label: 'Pour soi-même (ça arrive souvent !)', tags: ['#AutoCadeau', '#PlaisirPerso'] }
        ]
      },
      {
        id: 'genre',
        title: "C'est un cadeau pour...",
        options: [
          { label: 'Un homme', tags: ['#Homme'] },
          { label: 'Une femme', tags: ['#Femme'] },
          { label: 'Peu importe / Neutre', tags: ['#Unisexe'] }
        ]
      },
      {
        id: 'age',
        title: 'Quel âge a cette personne ?',
        options: [
          { label: '0 à 3 ans', tags: ['#Naissance', '#PremierÂge'] },
          { label: '4 à 11 ans', tags: ['#Enfance'] },
          { label: '12 à 17 ans', tags: ['#Adolescent'] },
          { label: '18 à 30 ans', tags: ['#JeuneAdulte'] },
          { label: '31 à 59 ans', tags: ['#Adulte'] },
          { label: '60 ans et plus', tags: ['#Senior'] }
        ]
      },
      {
        id: 'occasion',
        title: "Quelle est l'occasion ?",
        options: [
          { label: 'Noël', tags: ['#Noël'] },
          { label: 'Nouvel An / Réveillon', tags: ['#NouvelAn'] },
          { label: 'Pâques', tags: ['#Pâques'] },
          { label: 'Halloween', tags: ['#Halloween'] },
          { label: 'Baptême / Communion / Profession de foi', tags: ['#Communion', '#Religion'] },
          { label: 'Fêtes de l\'Aïd', tags: ['#Aïd'] },
          { label: 'Hanouka', tags: ['#Hanouka'] },
          { label: 'Fête spirituelle / Esotérisme', tags: ['#Esotérisme'] },
          { label: 'Naissance / Babyshower', tags: ['#Naissance', '#Maternité', '#Babyshower'] },
          { label: 'Mariage / PACS / Fiançailles', tags: ['#Mariage', '#PACS', '#Amour'] },
          { label: 'Diplôme / Réussite', tags: ['#Diplôme', '#Réussite'] },
          { label: 'Départ (Retraite, Mutation...)', tags: ['#Départ', '#CadeauCommun', '#Retraite'] },
          { label: 'Anniversaire', tags: ['#Anniversaire'] },
          { label: 'Saint-Valentin', tags: ['#SaintValentin', '#Couple'] },
          { label: 'Départ en retraite / Mutation', tags: ['#Départ', '#CadeauCommun', '#Retraite'] },
          { label: 'Juste pour le plaisir', tags: ['#PlaisirDOffrir'] }
        ]
      },
      {
        id: 'budget',
        title: 'Quel est votre budget max ?',
        options: [
          { label: 'Moins de 20€', tags: [], filterCriteria: '<=20' },
          { label: 'Entre 20€ et 50€', tags: [], filterCriteria: '20-50' },
          { label: 'Entre 50€ et 100€', tags: [], filterCriteria: '50-100' },
          { label: 'Plus de 100€', tags: [], filterCriteria: '>100' }
        ]
      }
    ]
  },
  {
    partNumber: 2,
    title: "La psychologie et mode de vie du destinataire",
    questions: [
      {
        id: 'energie',
        title: "Dans son groupe d'amis/famille, c'est la personne qui...",
        options: [
          { label: "Fait des blagues et détend l'atmosphère.", tags: ['#Humour', '#Fun', '#Décalé'] },
          { label: 'Organise tout de A à Z, on peut compter sur elle.', tags: ['#Papeterie', '#Pratique', '#Organisé'] },
          { label: 'Écoute, rassure et donne les bons conseils.', tags: ['#BienÊtre', '#Zen', '#Spiritualité'] }
        ]
      },
      {
        id: 'passions',
        title: 'Si on lui donne un dimanche 100% libre, elle va le passer à...',
        options: [
          { label: 'Créer, bricoler, ou chouchouter ses plantes.', tags: ['#DIY', '#Nature', '#Végétal'] },
          { label: 'Dévorer un bon livre ou flâner dans une expo.', tags: ['#Art', '#Culture', '#Lecture'] },
          { label: 'Se dépenser, faire du sport ou marcher en forêt.', tags: ['#Sport', '#Énergie', '#Outdoor'] },
          { label: 'Je ne sais pas.', tags: [] }
        ]
      },
      {
        id: 'sensibilite',
        title: "Face à un bel objet, qu'est-ce qui la fait fondre instantanément ?",
        options: [
          { label: '"C\'est tellement poétique et délicat..."', tags: ['#Poésie', '#Romantique', '#Doux'] },
          { label: '"C\'est super malin et bien pensé !"', tags: ['#Ingénieux', '#Minimaliste', '#Pratique'] },
          { label: '"Oh, ça me rappelle trop mon enfance !"', tags: ['#Vintage', '#Rétro', '#Nostalgie'] }
        ]
      }
    ]
  },
  {
    partNumber: 3,
    title: "L'Usage (Le Rapport à l'Objet)",
    questions: [
      {
        id: 'objet',
        title: "Pour lui/elle, le cadeau parfait c'est avant tout un objet...",
        options: [
          { label: 'Qui se dévore ou se déguste (Épicurien)', tags: ['#Gourmand', '#Boisson', '#ÉpicerieFine'] },
          { label: 'Qui embellit le quotidien (Esthète)', tags: ['#Décoration', '#Affiche', '#Céramique'] },
          { label: 'Qui se porte sur soi (Coquet.te)', tags: ['#Bijoux', '#Mode', '#Maroquinerie', '#Accessoire'] },
          { label: 'Qui sert vraiment à quelque chose (Pragmatique)', tags: ['#ZéroDéchet', '#Papeterie', '#MaisonUtile'] },
          { label: 'Qui fait du bien au corps ou à la tête (Détente)', tags: ['#BienÊtre', '#Cosmétique', '#Bougie'] }
        ]
      }
    ]
  },
  {
    partNumber: 4,
    title: "L'Univers Sensoriel (Matières & Couleurs)",
    questions: [
      {
        id: 'style',
        title: "Si on regardait la décoration de son salon (ou son style vestimentaire), on y verrait plutôt...",
        options: [
          { label: 'Des couleurs douces, du bois, des plantes', tags: ['#Bohème', '#Nature', '#Bois', '#Végétal'] },
          { label: 'Du métal, du cuir, des lignes épurées', tags: ['#Minimaliste', '#Industriel', '#Brut', '#Cuir'] },
          { label: 'Des couleurs qui flashent, des objets décalés', tags: ['#Pop', '#Coloré', '#Humour', '#Original'] },
          { label: 'Des choses douces, chaudes, réconfortantes', tags: ['#Cocooning', '#Doux', '#Textile', '#Pastel'] }
        ]
      }
    ]
  },
  {
    partNumber: 5,
    title: "Les Valeurs (L'Engagement Artisan)",
    questions: [
      {
        id: 'valeur',
        title: "À quel argument est-il/elle le plus sensible aujourd'hui ?",
        options: [
          { label: "L'éco-responsabilité à tout prix", tags: ['#Upcycling', '#Bio', '#ZéroDéchet', '#Vegan'] },
          { label: 'Le savoir-faire traditionnel', tags: ['#SavoirFaire', '#MatièreNoble', '#Tradition'] },
          { label: "L'exclusivité (Avoir une pièce que personne d'autre n'a)", tags: ['#PièceUnique', '#Personnalisable', '#SérieLimitée'] }
        ]
      }
    ]
  }
];

export const SUPPLEMENTARY_QUIZ_PARTS: QuizPart[] = [
  {
    partNumber: 1,
    title: "Questions supplémentaires : Le contexte",
    questions: [
      {
        id: 'intention',
        title: 'Honnêtement, avec ce cadeau, vous cherchez surtout à...',
        options: [
          { label: 'Marquer le coup, il faut un effet "Waouh" !', tags: ['#PièceMaîtresse', '#Luxe', '#Imposant'] },
          { label: 'Faire un petit clin d\'œil sympa, juste pour le sourire.', tags: ['#ClinDOeil', '#PetitPrix', '#Mignon'] },
          { label: 'Lui offrir un truc super utile qu\'il/elle n\'a jamais osé s\'acheter.', tags: ['#Utile', '#Quotidien', '#Pratique'] }
        ]
      },
      {
        id: 'risque',
        title: 'Quel est votre niveau de prise de risque aujourd\'hui ?',
        options: [
          { label: 'Je veux surprendre à 100%, proposez-moi un truc insolite.', tags: ['#Insolite', '#Original', '#Surprise'] },
          { label: 'Je joue la sécurité, il me faut une valeur sûre, intemporelle.', tags: ['#Classique', '#Intemporel', '#ValeurSûre'] },
          { label: 'Je veux la carte de l\'émotion avec un objet personnalisable.', tags: ['#Personnalisable', '#SurMesure'] }
        ]
      }
    ]
  },
  {
    partNumber: 2,
    title: "Questions supplémentaires : Psychologie et mode de vie",
    questions: [
      {
        id: 'vendredisoir',
        title: 'Le vendredi soir idéal pour cette personne, c\'est plutôt...',
        options: [
          { label: 'Une grosse tablée avec les copains, ça rigole fort !', tags: ['#Apéro', '#Convivial', '#Jeu'] },
          { label: 'Plaid, tisane et la dernière série Netflix.', tags: ['#Cocooning', '#Maison', '#Détente'] },
          { label: 'Préparer son sac à dos, demain on part en vadrouille !', tags: ['#Voyage', '#PleinAir', '#Nomade'] }
        ]
      },
      {
        id: 'reseaux',
        title: 'Sur son téléphone ou ses réseaux sociaux, elle regarde surtout...',
        options: [
          { label: 'Des recettes de cuisine et des restos sympas.', tags: ['#Gourmand', '#Cuisine', '#Épicurien'] },
          { label: 'Des comptes de déco, d\'architecture ou de mode.', tags: ['#Déco', '#Design', '#Mode'] },
          { label: 'Des vidéos de petits chiens et de chats mignons.', tags: ['#Animaux', '#Pets'] },
          { label: 'Je ne sais pas.', tags: [] }
        ]
      },
      {
        id: 'peche',
        title: 'Son petit péché mignon au quotidien, c\'est...',
        options: [
          { label: 'Le confort absolu, il faut que ce soit douillet.', tags: ['#Confort', '#Chaud', '#Textile'] },
          { label: 'Avoir du style, même pour aller acheter le pain.', tags: ['#Tendance', '#Chic', '#Accessoire'] },
          { label: 'Consommer juste (local, bio, zéro déchet).', tags: ['#Écolo', '#Éthique', '#ZéroDéchet'] }
        ]
      }
    ]
  },
  {
    partNumber: 3,
    title: "Questions supplémentaires : L'Usage",
    questions: [
      {
        id: 'usage',
        title: 'Ce cadeau, une fois déballé, il va plutôt...',
        options: [
          { label: 'Trôner fièrement en plein milieu du salon.', tags: ['#Décoration', '#Exposition', '#Art'] },
          { label: 'Être utilisé ou manipulé tous les jours.', tags: ['#Accessoire', '#MaisonUtile', '#EDC'] },
          { label: 'Être rangé précieusement et sorti pour les grandes occasions.', tags: ['#Précieux', '#Exception', '#BijouFin'] }
        ]
      },
      {
        id: 'format',
        title: 'En termes de format, vous imaginez plutôt...',
        options: [
          { label: 'Un tout petit objet, fin et délicat.', tags: ['#Miniature', '#Fin', '#Discret'] },
          { label: 'Une belle pièce qui a de la présence, qui prend un peu de place.', tags: ['#GrandFormat', '#Volume'] },
          { label: 'Un assortiment de plusieurs petites choses pour faire un "effet pochette surprise".', tags: ['#Coffret', '#Assortiment', '#Box'] }
        ]
      }
    ]
  },
  {
    partNumber: 4,
    title: "Questions supplémentaires : L'Univers Sensoriel",
    questions: [
      {
        id: 'toucher',
        title: 'Si vous deviez fermer les yeux et toucher l\'objet, ce serait...',
        options: [
          { label: 'Chaud et texturé comme du bois, du tissu ou de la laine.', tags: ['#Bois', '#Textile', '#Chaud', '#Naturel'] },
          { label: 'Lisse, frais et solide comme de la céramique, du verre ou du métal.', tags: ['#Céramique', '#Verre', '#Métal', '#Lisse'] },
          { label: 'Souple et noble comme du beau cuir, de la soie ou du lin.', tags: ['#Cuir', '#Soie', '#Lin', '#Noble'] }
        ]
      },
      {
        id: 'couleur',
        title: 'Du côté de la palette de couleurs, on part sur...',
        options: [
          { label: 'Des tons neutres et apaisants (beige, blanc, terracotta, gris).', tags: ['#Neutre', '#Pastel', '#Terracotta'] },
          { label: 'Du sombre, profond et mystérieux (noir, bleu nuit, vert sapin).', tags: ['#Sombre', '#Profond', '#Noir'] },
          { label: 'Une explosion de couleurs joyeuses et assumées !', tags: ['#Vif', '#Multicolore', '#Flashy'] }
        ]
      }
    ]
  },
  {
    partNumber: 5,
    title: "Questions supplémentaires : Les Valeurs",
    questions: [
      {
        id: 'histoire',
        title: 'Qu\'est-ce qu\'il/elle aimera raconter à ses amis à propos de ce cadeau ?',
        options: [
          { label: '"Regarde, c\'est fabriqué à partir d\'anciens objets recyclés !"', tags: ['#Upcycling', '#ZéroDéchet', '#SecondeMain'] },
          { label: '"C\'est une édition ultra-limitée, l\'artisan n\'en a fait que 10."', tags: ['#SérieLimitée', '#Exclusif', '#Rare'] },
          { label: '"C\'est fabriqué avec des ingrédients 100% naturels d\'Occitanie."', tags: ['#Bio', '#Naturel', '#Terroir'] }
        ]
      },
      {
        id: 'ouverture',
        title: 'À l\'ouverture du paquet, l\'ambiance globale ça doit sentir...',
        options: [
          { label: 'L\'atelier d\'artiste, l\'authenticité brute.', tags: ['#Brut', '#Artisanal', '#FaitMain'] },
          { label: 'L\'élégance raffinée, comme dans une boutique de luxe.', tags: ['#Chic', '#Premium', '#Élégant'] },
          { label: 'La bonne odeur gourmande ou fleurie, un vrai réconfort.', tags: ['#Gourmand', '#Floral', '#Parfumé'] }
        ]
      }
    ]
  }
];

export const ALL_QUIZ_QUESTIONS = [
  ...STANDARD_QUIZ_PARTS.flatMap(p => p.questions),
  ...SUPPLEMENTARY_QUIZ_PARTS.flatMap(p => p.questions)
];
