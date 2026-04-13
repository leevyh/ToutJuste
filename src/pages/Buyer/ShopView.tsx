import { useParams, useLocation, Link } from 'react-router-dom';
import { MOCK_SHOPS, MOCK_PRODUCTS } from '../../mocks/database';
import Button from '../../components/Button';
import styles from './ShopView.module.css';

export default function ShopView() {
  const { id } = useParams();
  const location = useLocation();
  const isPreview = location.state?.isPreview;

  const shop = MOCK_SHOPS.find(s => s.id === (id || 'shop_1')) || MOCK_SHOPS[0];
  const products = MOCK_PRODUCTS.filter(p => p.shopId === shop.id);

  return (
    <div className={styles.container}>
      {isPreview && (
        <div className={styles.previewBanner}>
          <span className={styles.previewText}>Mode Prévisualisation Créateur</span>
          <Link to="/creator/settings">
            <Button variant="secondary">Quitter la prévisualisation</Button>
          </Link>
        </div>
      )}
      <div className={styles.banner} style={{ backgroundImage: `url(${shop.banner})` }}>
        <div className={styles.bannerOverlay}></div>
      </div>
      
      <div className={styles.shopHeader}>
        <img src={shop.logo} alt={shop.name} className={styles.shopLogo} />
        <div className={styles.shopInfo}>
          <h1 className={styles.shopName}>{shop.name}</h1>
          <p className={styles.shopLocation}>📍 {shop.location.city}</p>
          <p className={styles.shopBio}>{shop.bio}</p>
        </div>
      </div>

      <div className={styles.catalogSection}>
        <h2 className={styles.sectionTitle}>Les créations de {shop.name}</h2>
        <div className={styles.productsGrid}>
          {products.map(product => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.images[0]} alt={product.name} className={styles.productImage} />
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productPrice}>{product.price} €</p>
                <Button variant="primary" fullWidth>Acheter ou Retirer</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
