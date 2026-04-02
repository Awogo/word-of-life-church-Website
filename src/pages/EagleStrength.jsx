// src/pages/EagleStrength.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/EagleStrength.css';

const sermonsData = [
  // ADD YOUR REAL THUMBNAILS HERE: e.g., thumbnail: require('../assets/pursue-thumb.jpg')
  // For now, I'm using external placeholders so it looks beautiful immediately.
  { id: 1, title: "Pursue, Overtake, and Recover All", speaker: "Papa Ayo Oritsejafor", date: "2026-03-20", type: "Video", price: 1500, isTrending: true, thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=300&fit=crop" },
  { id: 2, title: "God Has Remembered Me", speaker: "Papa Ayo Oritsejafor", date: "2023-06-08", type: "Video", price: 1500, thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop" },
  { id: 3, title: "God Is Not Limited (1)", speaker: "Papa Ayo Oritsejafor", date: "2016-12-10", type: "Audio", price: 500, thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop" },
  { id: 4, title: "The Beginning of Dominion", speaker: "Dr. Innocent Okpe", date: "2026-01-23", type: "Video", price: 1500, thumbnail: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=400&h=300&fit=crop" },
  { id: 5, title: "It is Time to Fly", speaker: "Papa Ayo Oritsejafor", date: "2020-12-10", type: "Video", price: 500, thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=300&fit=crop" },
  { id: 6, title: " Divine Dominion", speaker: "Apostle Mike Akindakpo", date: "2026-03-30", type: "Video", price: 1500, thumbnail: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop" }
];

const EagleStrength = () => {
  const { addToCart, cart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedSpeaker, setSelectedSpeaker] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [mediaType, setMediaType] = useState('All'); 

  const uniqueYears = useMemo(() => ['All', ...new Set(sermonsData.map(s => s.date.substring(0, 4)))].sort().reverse(), []);
  const uniqueSpeakers = useMemo(() => ['All', ...new Set(sermonsData.map(s => s.speaker))], []);

  const filteredSermons = useMemo(() => {
    let result = sermonsData.filter(s => {
      const matchSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) || s.speaker.toLowerCase().includes(searchTerm.toLowerCase());
      const matchYear = selectedYear === 'All' || s.date.startsWith(selectedYear);
      const matchSpeaker = selectedSpeaker === 'All' || s.speaker === selectedSpeaker;
      const matchMedia = mediaType === 'All' || s.type === mediaType;
      return matchSearch && matchYear && matchSpeaker && matchMedia;
    });

    if (sortBy === 'A-Z') result.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === 'Z-A') result.sort((a, b) => b.title.localeCompare(a.title));
    if (sortBy === 'Newest') result.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (sortBy === 'Oldest') result.sort((a, b) => new Date(a.date) - new Date(b.date));

    return result;
  }, [searchTerm, selectedYear, selectedSpeaker, sortBy, mediaType]);

  return (
    <div className="es-page">
      
      <div className="es-top-bar container">
        <div className="es-brand">
          <h2>EAGLE STRENGTH</h2>
          <span>WORD OF LIFE BIBLE CHURCH</span>
        </div>
        <Link to="/eagle-strength/cart" className="es-cart-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--navy-blue)" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
      </div>

      <div className="es-search-wrapper">
        <div className="es-search-inner container">
          <div className="es-search-input-group">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search sermons, speakers, or series..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
        </div>
      </div>

      {/* UPDATED HERO TO MATCH NEW DATA */}
      <section className="es-hero-media" style={{ backgroundImage: `url(${sermonsData[0].thumbnail})` }}>
        <div className="es-hero-overlay"></div>
        <div className="es-hero-content container">
          <div className="es-hero-label">SERMON OF THE WEEK</div>
          <h1>{sermonsData[0].title}</h1>
          <p className="es-hero-desc">Join {sermonsData[0].speaker} in this powerful message about recovering all that the enemy has stolen.</p>
          <div className="es-hero-btns">
            <button className="btn es-btn-watch" onClick={() => addToCart(sermonsData[0])}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              Watch Now (₦{sermonsData[0].price.toLocaleString()})
            </button>
            <button className="btn es-btn-audio" onClick={() => addToCart({...sermonsData[0], type: 'Audio', price: 500})}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
              Audio (₦500)
            </button>
          </div>
        </div>
      </section>

      <section className="es-controls container">
        <div className="es-dropdowns">
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {uniqueYears.map(y => <option key={y} value={y}>{y === 'All' ? 'Year' : y}</option>)}
          </select>
          <select value={selectedSpeaker} onChange={(e) => setSelectedSpeaker(e.target.value)}>
            {uniqueSpeakers.map(s => <option key={s} value={s}>{s === 'All' ? 'Speaker' : s}</option>)}
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="Newest">Sort: Newest</option>
            <option value="Oldest">Sort: Oldest</option>
            <option value="A-Z">Title: A-Z</option>
            <option value="Z-A">Title: Z-A</option>
          </select>
          <select value={mediaType} onChange={(e) => setMediaType(e.target.value)} className="es-media-select">
            <option value="All">All Media</option>
            <option value="Video">Video</option>
            <option value="Audio">Audio</option>
          </select>
        </div>
      </section>

      <section className="es-list container">
        {filteredSermons.filter(s => !s.isTrending).length === 0 ? (
          <div className="es-no-results"><p>No sermons found for this selection.</p></div>
        ) : (
          filteredSermons.filter(s => !s.isTrending).map(sermon => (
            <div className="es-list-item" key={sermon.id}>
              <div className="es-item-thumb">
                {/* ADDED ACTUAL IMAGE HERE */}
                <img src={sermon.thumbnail} alt={sermon.title} className="es-thumb-img" />
                <div className="es-play-icon">
                  {sermon.type === 'Video' ? 
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> : 
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                  }
                </div>
                <span className="es-type-badge">{sermon.type}</span>
              </div>
              
              <div className="es-item-details">
                <h3>{sermon.title}</h3>
                <p className="es-item-meta">{sermon.speaker} • {new Date(sermon.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
              </div>

              <div className="es-item-actions">
                <h4 className="es-item-price">₦{sermon.price.toLocaleString()}</h4>
                <button className="btn es-add-btn" onClick={() => addToCart(sermon)}>Add</button>
              </div>
            </div>
          ))
        )}
      </section>

      <section className="es-bottom-container container">
        <div className="es-bottom-card">
          <h3>Weekly Newsletter</h3>
          <p>Get spiritual insights delivered to your inbox every week.</p>
          <button className="btn es-outline-btn">Subscribe Now</button>
        </div>
        <div className="es-bottom-card">
          <h3>Book Downloads</h3>
          <p>Access our library of life-changing books and devotionals.</p>
          <Link to="/eagle-strength/books" className="btn es-primary-btn">View Books</Link>
        </div>
      </section>

    </div>
  );
};

export default EagleStrength;