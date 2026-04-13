export interface Shop {
  id: string;
  name: string;
  creatorId: string;
  bio: string;
  location: { lat: number; lng: number; city: string; distance?: number };
  logo: string;
  banner: string;
  vacationMode: boolean;
}

export interface Product {
  id: string;
  shopId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  tags: string[]; // These correspond to the matching engine tags
  stock: number;
}

export const MOCK_SHOPS: Shop[] = [
  {
    id: 'shop_1', name: 'Atelier Céramique Sud', creatorId: 'user_1',
    bio: 'Créations uniques en grès.', location: { lat: 43.6, lng: 1.4, city: 'Toulouse', distance: 2.5 },
    logo: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=100&auto=format&fit=crop',
    banner: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa',
    vacationMode: false
  },
  {
    id: 'shop_2', name: 'Les Cuirs de Julien', creatorId: 'user_2',
    bio: 'Maroquinerie artisanale, cuir tannage végétal.', location: { lat: 43.6, lng: 1.4, city: 'Toulouse', distance: 5.1 },
    logo: 'https://images.unsplash.com/photo-1590874103328-eacf38a6a1bf?q=80&w=100&auto=format&fit=crop',
    banner: 'https://images.unsplash.com/photo-1590874103328-eacf38a6a1bf',
    vacationMode: false
  },
  {
    id: 'shop_3', name: 'Bougies & Sens', creatorId: 'user_3',
    bio: 'Bougies 100% végétales aux parfums de Grasse.', location: { lat: 44.8, lng: -0.5, city: 'Bordeaux', distance: 120 },
    logo: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?q=80&w=100&auto=format&fit=crop',
    banner: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6',
    vacationMode: false
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1', shopId: 'shop_1', name: 'Vase Minimaliste en Grès', price: 45, stock: 5, category: 'Maison',
    description: 'Un magnifique vase fait à la main, parfait pour une décoration épurée.',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=600&auto=format&fit=crop'],
    tags: ['#Femme', '#Adulte', '#Crémaillère', '#Maison', '#Classique', '#Décoration', '#Minimaliste', '#Lisse', '#Céramique', '#Neutre', '#SavoirFaire']
  },
  {
    id: 'p2', shopId: 'shop_2', name: 'Portefeuille en cuir vintage', price: 85, stock: 2, category: 'Accessoire',
    description: 'Portefeuille robuste, cousu main.',
    images: ['https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=600&auto=format&fit=crop'],
    tags: ['#Homme', '#Papa', '#Adulte', '#Senior', '#FêteDesPères', '#Utile', '#ValeurSûre', '#Maroquinerie', '#Pratique', '#Cuir', '#Sombre', '#Tradition', '#Accessoire']
  },
  {
    id: 'p3', shopId: 'shop_3', name: 'Coffret Bougies Cocooning', price: 35, stock: 10, category: 'Bien-Être',
    description: 'Trio de bougies pour des soirées détendues.',
    images: ['https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop'],
    tags: ['#Ami', '#Femme', '#Unisexe', '#JeuneAdulte', '#Adulte', '#PlaisirDOffrir', '#Zen', '#Cocooning', '#BienÊtre', '#Doux', '#Gourmand', '#Naturel']
  },
  {
    id: 'p4', shopId: 'shop_1', name: 'Tasse à café "Réveil Matin"', price: 18, stock: 15, category: 'Cuisine',
    description: 'Petite tasse fun peinte à la main avec messages humoristiques.',
    images: ['https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=600&auto=format&fit=crop'],
    tags: ['#Collègue', '#Ami', '#Unisexe', '#PetitPrix', '#ClinDOeil', '#Humour', '#Fun', '#Gourmand', '#Céramique', '#Pop', '#Coloré']
  },
  {
    id: 'p5', shopId: 'shop_2', name: 'Porte-clés personnalisable', price: 25, stock: 20, category: 'Accessoire',
    description: 'Porte-clés avec initiales gravées.',
    images: ['https://images.unsplash.com/photo-1585218356052-b1dca5ab2a15?q=80&w=600&auto=format&fit=crop'],
    tags: ['#Couple', '#Amour', '#Homme', '#Femme', '#SaintValentin', '#Personnalisable', '#SurMesure', '#EDC', '#Cuir']
  }
];
