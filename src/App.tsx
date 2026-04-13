import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Buyer/Landing';
import Quiz from './pages/Buyer/Quiz';
import Results from './pages/Buyer/Results';
import ShopView from './pages/Buyer/ShopView';
import CreatorDashboard from './pages/Creator/Dashboard';
import ShopSettings from './pages/Creator/ShopSettings';
import Catalog from './pages/Creator/Catalog';
import ProductEdit from './pages/Creator/ProductEdit';
import Orders from './pages/Creator/Orders';
import AdminDashboard from './pages/Admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container" style={{ flex: 1, padding: '2rem 1.5rem' }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/shop/:id" element={<ShopView />} />
          <Route path="/creator" element={<CreatorDashboard />} />
          <Route path="/creator/settings" element={<ShopSettings />} />
          <Route path="/creator/catalog" element={<Catalog />} />
          <Route path="/creator/catalog/edit" element={<ProductEdit />} />
          <Route path="/creator/orders" element={<Orders />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
