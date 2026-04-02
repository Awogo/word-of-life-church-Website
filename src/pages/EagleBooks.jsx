// src/pages/EagleBooks.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/EagleStrength.css';

const booksData = [
  { 
    id: 101, 
    title: "The Prophetic Mandate", 
    author: "Papa Ayo Oritsejafor", 
    type: "Book", 
    price: 3500,
    // REPLACE WITH: cover: require('../assets/prophetic-mandate.jpg')
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop" 
  },
  { 
    id: 102, 
    title: "Fire in the Bones", 
    author: "Papa Ayo Oritsejafor", 
    type: "Book", 
    price: 3000,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop" 
  },
  { 
    id: 103, 
    title: "Understanding the Times", 
    author: "Papa Ayo Oritsejafor", 
    type: "PDF", 
    price: 1500,
    cover: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=300&h=450&fit=crop" 
  },
  { 
    id: 104, 
    title: "The Drama of Life", 
    author: "Papa Ayo Oritsejafor", 
    type: "Book", 
    price: 2500,
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop" 
  }
];

const EagleBooks = () => {
  const { addToCart, cart } = useCart();
  const [search, setSearch] = useState('');

  const filteredBooks = booksData.filter(b => b.title.toLowerCase().includes(search.toLowerCase()) || b.author.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="es-page">
      {/* Top Bar */}
      <div className="es-top-bar container">
        <div className="es-brand">
          <h2>EAGLE STRENGTH <span style={{fontSize: '1rem', color: 'var(--text-gray)'}}>/ BOOKS</span></h2>
        </div>
        <Link to="/eagle-strength/cart" className="es-cart-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--navy-blue)" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </div>

      {/* Search */}
      <div className="es-search-wrapper">
        <div className="es-search-inner container">
          <div className="es-search-input-group">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search books or authors..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
          <Link to="/eagle-strength" className="btn es-outline-btn" style={{width: 'auto', whiteSpace: 'nowrap', padding: '12px 20px'}}>Back to Sermons</Link>
        </div>
      </div>

      {/* Books Grid Layout */}
      <section className="es-books-grid container">
        {filteredBooks.map(book => (
          <div className="es-book-card" key={book.id}>
            <div className="es-book-cover">
              <img src={book.cover} alt={book.title} />
              <span className="es-book-type">{book.type}</span>
            </div>
            <div className="es-book-info">
              <h3>{book.title}</h3>
              <p>By {book.author}</p>
              <div className="es-book-footer">
                <h4>₦{book.price.toLocaleString()}</h4>
                <button className="btn es-add-btn" onClick={() => addToCart(book)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EagleBooks;