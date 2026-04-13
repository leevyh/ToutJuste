import { useState } from 'react';
import { FileText, X, ScanLine } from 'lucide-react';
import CreatorNav from './CreatorNav';
import Button from '../../components/Button';
import styles from './Orders.module.css';

export default function Orders() {
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [showScanner, setShowScanner] = useState(false);
  const [isRefusing, setIsRefusing] = useState(false);

  const mockOrders = [
    { id: 'C-1050', date: 'À l\'instant', product: 'Collier en Argent', price: 85, status: 'À valider', customer: 'Léa M.', type: 'Livraison' },
    { id: 'C-1045', date: 'Ce matin', product: 'Vase Minimaliste', price: 45, status: 'En attente d\'envoi', customer: 'Sophie L.', type: 'Livraison' },
    { id: 'C-1042', date: 'Hier', product: 'Assiette Décorative', price: 30, status: 'Prête pour retrait', customer: 'Marc D.', type: 'Click & Collect' },
    { id: 'C-1025', date: 'Il y a 3 jours', product: 'Set de 4 tasses', price: 60, status: 'Expédiée', customer: 'Julie M.', type: 'Livraison' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'À valider': return styles.statusNew;
      case 'En attente d\'envoi': return styles.statusWaiting;
      case 'Prête pour retrait': return styles.statusReady;
      case 'Expédiée': return styles.statusShipped;
      default: return '';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h1 className={styles.pageTitle}>Commandes</h1>
        <Button variant="primary" onClick={() => setShowScanner(true)}>
          <ScanLine size={18} style={{ marginRight: '8px' }} />
          Scanner un retrait (Client)
        </Button>
      </div>
      <CreatorNav />

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>N° Commande</th>
              <th>Date</th>
              <th>Client</th>
              <th>Produit</th>
              <th>Total</th>
              <th>Type</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order) => (
              <tr key={order.id}>
                <td className={styles.orderId}>{order.id}</td>
                <td>{order.date}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.price} €</td>
                <td>
                  <span className={styles.typeBadge}>{order.type}</span>
                </td>
                <td>
                  <span className={`${styles.statusBadge} ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <Button variant="outline" onClick={() => {
                    setSelectedOrder(order);
                    setShowScanner(false);
                    setIsRefusing(false);
                  }}>
                    {order.status === 'Expédiée' ? 'Suivre' : 'Traiter'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showScanner && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={() => setShowScanner(false)}>
              <X size={24} />
            </button>
            <h2 className={styles.modalTitle}>Vérification du Click & Collect</h2>
            <div className={styles.scannerBox}>
              <div className={styles.scannerLine}></div>
              <p>Placez le QR Code de l'acheteur face à la caméra</p>
            </div>
            <Button
              variant="outline"
              fullWidth
              onClick={() => {
                setShowScanner(false);
                const collectOrder = mockOrders.find(o => o.id === 'C-1042');
                setSelectedOrder(collectOrder);
                setIsRefusing(false);
              }}
            >
              (Simuler le scan : Client C-1042 détecté)
            </Button>
          </div>
        </div>
      )}

      {selectedOrder && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button className={styles.closeBtn} onClick={() => setSelectedOrder(null)}>
              <X size={24} />
            </button>
            <h2 className={styles.modalTitle}>Commande {selectedOrder.id}</h2>
            <div className={styles.modalBody}>
              <p><strong>Client :</strong> {selectedOrder.customer}</p>
              <p><strong>Produit :</strong> {selectedOrder.product}</p>
              <p><strong>Montant :</strong> {selectedOrder.price} €</p>
              <p><strong>Type de remise :</strong> {selectedOrder.type}</p>

              <div className={styles.actionArea}>
                {selectedOrder.status === 'À valider' ? (
                  !isRefusing ? (
                    <div className={styles.validationActions}>
                      <p>Cette commande est en attente de votre validation.</p>
                      <div className={styles.actionButtons}>
                        <Button variant="primary" onClick={() => setSelectedOrder(null)}>Valider la commande</Button>
                        <Button variant="outline" onClick={() => setIsRefusing(true)}>Refuser la commande</Button>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.refusalForm}>
                      <h3 className={styles.refusalTitle}>Justification du refus</h3>
                      <div className={styles.radioGroup}>
                        <label className={styles.radioLabel}>
                          <input type="radio" name="refusalReason" value="stock" defaultChecked />
                          Produit en rupture de stock
                        </label>
                        <label className={styles.radioLabel}>
                          <input type="radio" name="refusalReason" value="other" />
                          Autre : justifiez
                        </label>
                        <textarea
                          className={styles.refusalInput}
                          placeholder="Expliquez la raison du refus..."
                          rows={3}
                        ></textarea>
                      </div>
                      <div className={styles.actionButtons}>
                        <Button variant="primary" onClick={() => setSelectedOrder(null)}>Confirmer le refus</Button>
                        <Button variant="outline" onClick={() => setIsRefusing(false)}>Annuler</Button>
                      </div>
                    </div>
                  )
                ) : selectedOrder.type === 'Livraison' ? (
                  <div className={styles.deliveryAction}>
                    <FileText size={64} className={styles.actionIcon} />
                    <p>Cette commande nécessite un envoi postal.</p>
                    <Button variant="primary">Générer le bon d'envoi (PDF)</Button>
                  </div>
                ) : (
                  <div className={styles.collectAction}>
                    <p style={{ color: 'var(--color-success)', fontWeight: 600, fontSize: '1.25rem' }}>
                      Paiement validé ✅
                    </p>
                    <p>Remettez la commande au client en toute sécurité.</p>
                    <Button variant="primary" onClick={() => setSelectedOrder(null)}>Confirmer la remise</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
