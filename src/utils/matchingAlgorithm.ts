import { MOCK_PRODUCTS, type Product, type Shop, MOCK_SHOPS } from '../mocks/database';

export interface MatchResult extends Product {
  score: number;
  shop: Shop;
}

export function calculateMatches(answers: Record<string, { tags: string[], filter?: string }>): MatchResult[] {
  // Collect all target tags from user answers
  const targetTags = new Set<string>();
  let minPrice = 0;
  let maxPrice = Infinity;

  Object.values(answers).forEach(answer => {
    answer.tags.forEach(tag => targetTags.add(tag));
    
      // Process explicit filters like budget
      if (answer.filter) {
        if (answer.filter === '<=20') maxPrice = 20;
        else if (answer.filter === '20-50') { minPrice = 20; maxPrice = 50; }
        else if (answer.filter === '50-100') { minPrice = 50; maxPrice = 100; }
        else if (answer.filter === '>100') minPrice = 100;
        // Handle dynamic format
        else if (answer.filter.includes('-')) {
          const [min, max] = answer.filter.split('-');
          if (min) minPrice = parseInt(min, 10);
          if (max) maxPrice = parseInt(max, 10);
        } else if (answer.filter.startsWith('<=')) {
          maxPrice = parseInt(answer.filter.replace('<=', ''), 10);
        } else if (answer.filter.startsWith('>=')) {
          minPrice = parseInt(answer.filter.replace('>=', ''), 10);
        }
      }
  });

  const results: MatchResult[] = [];

  MOCK_PRODUCTS.forEach(product => {
    // 1. Mandatory hard filters (Price)
    if (product.price < minPrice || product.price > maxPrice) return;
    
    // 2. Calculate soft match score
    let score = 0;
    let matchCount = 0;
    product.tags.forEach(tag => {
      if (targetTags.has(tag)) {
        score += 10;
        matchCount++;
      }
    });

    // Base inclusion: product must match at least 1 tag if tags were provided
    if (score > 0 || targetTags.size === 0) {
      const shop = MOCK_SHOPS.find(s => s.id === product.shopId);
      if (shop) {
        results.push({ ...product, score, shop });
      }
    }
  });

  // Sort by score descending
  return results.sort((a, b) => b.score - a.score).slice(0, 10);
}
