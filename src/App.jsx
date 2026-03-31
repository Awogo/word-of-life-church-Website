// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import Context
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ministries from './pages/Ministries';
import MenAlive from './pages/MenAlive';
import DaughtersOfSarah from './pages/DaughtersOfSarah';
import ActionYouth from './pages/ActionYouth';
import ActionTeens from './pages/ActionTeens';
import ChildrenEvangelical from './pages/ChildrenEvangelical';
import EagleStrength from './pages/EagleStrength';
import Cart from './pages/Cart'; // Import Cart Page
import './styles/global.css';
import EagleGroup from './pages/EagleGroup';
import ISOM from './pages/Isom';
import About from './pages/About';
import NotFound from './pages/NotFound';
import EagleNest from './pages/EagleNest';
import EagleHealth from './pages/EagleHealth';


function App() {
  return (
    <CartProvider> {/* WRAPS THE WHOLE APP SO CART WORKS EVERYWHERE */}
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ministries" element={<Ministries />} />
              <Route path="/ministries/men-alive" element={<MenAlive />} />
              <Route path="/ministries/daughters-of-sarah" element={<DaughtersOfSarah />} />
              <Route path="/ministries/action-youth" element={<ActionYouth />} />
              <Route path="/ministries/action-teens" element={<ActionTeens />} />
              <Route path="/ministries/children-evangelical" element={<ChildrenEvangelical />} />
              
              {/* Eagle Strength Routes */}
              <Route path="/eagle-strength" element={<EagleStrength />} />
              <Route path="/eagle-strength/cart" element={<Cart />} /> {/* NEW CART ROUTE */}
              <Route path="/eagle-group" element={<EagleGroup />} />
              <Route path="/isom" element={<NotFound />} />
              <Route path="/about" element={<NotFound />} />
              <Route path="/eagle-nest" element={<NotFound />} />
              <Route path="/eagle-health" element={<NotFound q/>} />

              {/* Catch-all for 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;