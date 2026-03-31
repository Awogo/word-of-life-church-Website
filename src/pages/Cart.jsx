// src/pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart, removeFromCart, totalCost } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page-empty container">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any sermons or books yet.</p>
        <Link to="/eagle-strength" className="btn es-btn-subscribe">Browse Store</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <h1>Checkout</h1>
        <div className="cart-layout">
          
          {/* Cart Items List */}
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-thumb">
                  <span>{item.type}</span>
                </div>
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>{item.speaker}</p>
                </div>
                <div className="cart-item-right">
                  <h4>₦{item.price.toLocaleString()}</h4>
                  <button onClick={() => removeFromCart(item.id)} className="cart-remove-btn">Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Sidebar */}
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="cart-summary-row">
              <span>Items ({cart.length})</span>
              <span>₦{totalCost.toLocaleString()}</span>
            </div>
            <div className="cart-summary-row total">
              <span>Total</span>
              <span>₦{totalCost.toLocaleString()}</span>
            </div>
            
            <button className="btn es-btn-watch" style={{width: '100%', justifyContent: 'center', marginTop: '20px'}}>
              Proceed to Payment (Paystack/Stripe)
            </button>
            <Link to="/eagle-strength" className="continue-shopping">Continue Shopping</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;