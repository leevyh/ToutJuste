import { Link } from 'react-router-dom';
import CreatorNav from './CreatorNav';
import Button from '../../components/Button';
import { MOCK_PRODUCTS } from '../../mocks/database';
import styles from './Catalog.module.css';

export default function Catalog() {
  const shopProducts = MOCK_PRODUCTS.filter(p => p.shopId === 'shop_1');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.pageTitle}>Gestion du Catalogue</h1>
        <Link to="/creator/catalog/edit">
          <Button>+ Nouveau produit</Button>
        </Link>
      </div>
      <CreatorNav />

      <div className={styles.filters}>
        <select className={styles.select}>
          <option>Tous les statuts</option>
          <option>Actif</option>
          <option>Masqué</option>
          <option>Rupture de stock</option>
        </select>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Produit</th>
              <th>Prix</th>
              <th>Stock</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {shopProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className={styles.productCell}>
                    <img src={product.images[0]} alt={product.name} className={styles.productThumb} />
                    <span>{product.name}</span>
                  </div>
                </td>
                <td>{product.price} €</td>
                <td>{product.stock}</td>
                <td>
                  <span className={styles.statusBadge}>Actif</span>
                </td>
                <td>
                  <Link to="/creator/catalog/edit">
                    <Button variant="outline">Modifier</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
