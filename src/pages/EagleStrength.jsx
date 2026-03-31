// src/pages/EagleStrength.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/EagleStrength.css';

const storeItems = [
  { id: 1, title: "The Wings of Faith: Rising Above Adversity", speaker: "Bishop David Adebayo", date: "2024-10-19", type: "Video", category: "Sermons", price: 1500, isTrending: true },
  { id: 2, title: "Walking in Divine Authority", speaker: "Pastor Sarah Jenkins", date: "2024-10-12", type: "Audio", category: "Sermons", price: 500 },
  { id: 3, title: "Seeds of Destiny 2024", speaker: "WOL Admin", date: "2024-01-01", type: "PDF", category: "Devotionals", price: 2500 },
  { id: 4, title: "The Power of Forgiveness", speaker: "Dr. Robert Smith", date: "2024-10-05", type: "Video", category: "Sermons", price: 1500 },
  { id: 5, title: "Understanding Spiritual Authority", speaker: "Bishop David Adebayo", date: "2019-06-15", type: "Book", category: "Books", price: 3000 },
  { id: 6, title: "Weekly Newsletter Bundle (Q3)", speaker: "WOL Admin", date: "2024-10-01", type: "PDF", category: "Newsletters", price: 1000 },
  { id: 7, title: "Apostolic Reformation", speaker: "Bishop David Adebayo", date: "2022-08-20", type: "Video", category: "Sermons", price: 1500 },
];

const EagleStrength = () => {
  const { addToCart, cart } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [mediaFilter, setMediaFilter] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedSpeaker, setSelectedSpeaker] = useState('All');
  const [sortByTitle, setSortByTitle] = useState('Default');
  const [showSubscribe, setShowSubscribe] = useState(false);

  // Dynamically extract unique years and speakers for the dropdowns
  const uniqueYears = useMemo(() => ['All', ...new Set(storeItems.map(item => item.date.substring(0, 4)))].sort().reverse(), []);
  const uniqueSpeakers = useMemo(() => ['All', ...new Set(storeItems.map(item => item.speaker))], []);

  const categories = ['All', 'Sermons', 'Books', 'Devotionals', 'Newsletters'];

  // Advanced Filtering & Sorting Logic
  const processedItems = useMemo(() => {
    let result = storeItems.filter(item => {
      const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.speaker.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCat = activeCategory === 'All' || item.category === activeCategory;
      const matchMedia = mediaFilter === 'All' || item.type === mediaFilter;
      const matchYear = selectedYear === 'All' || item.date.startsWith(selectedYear);
      const matchSpeaker = selectedSpeaker === 'All' || item.speaker === selectedSpeaker;
      return matchSearch && matchCat && matchMedia && matchYear && matchSpeaker;
    });

    // Sorting Logic
    if (sortByTitle === 'A-Z') result.sort((a, b) => a.title.localeCompare(b.title));
    if (sortByTitle === 'Z-A') result.sort((a, b) => b.title.localeCompare(a.title));
    if (sortByTitle === 'Newest') result.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (sortByTitle === 'Oldest') result.sort((a, b) => new Date(a.date) - new Date(b.date));

    return result;
  }, [searchTerm, activeCategory, mediaFilter, selectedYear, selectedSpeaker, sortByTitle]);

  const handleDirections = () => {
    // Opens actual Google Maps search for the church
    window.open('https://www.google.com/maps/search/Word+of+Life+Bible+Church+Warri+Delta+State+Nigeria', '_blank');
  };

  return (
    <div className="eagle-strength-page">
      
      {/* SEARCH BAR */}
      <div className="es-search-wrapper">
        <div className="es-search-inner container">
          <div className="es-search-input-group">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Search by title, preacher, or author..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <Link to="/eagle-strength/cart" className="es-cart-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--navy-blue)" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </Link>
        </div>
      </div>

      {/* HERO MEDIA */}
      <section className="es-hero-media">
        <div className="es-hero-overlay"></div>
        <div className="es-hero-content container">
          <div className="es-trending-badge">TRENDING NOW</div>
          <h1>The Wings of Faith: Rising Above Adversity</h1>
          <p className="es-hero-desc">Bishop David Adebayo delves deep into Isaiah 40:31, unpacking how believers can mount up with wings like eagles.</p>
          <div className="es-hero-btns">
            <button className="btn es-btn-watch" onClick={() => addToCart(storeItems[0])}><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Watch Now (₦1,500)</button>
            <button className="btn es-btn-audio" onClick={() => addToCart({...storeItems[0], type: 'Audio', price: 500})}><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg> Get Audio (₦500)</button>
          </div>
        </div>
      </section>

      {/* ADVANCED FILTERS SECTION */}
      <section className="es-filters container">
        
        {/* Row 1: Dropdowns */}
        <div className="es-filter-dropdowns">
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            {uniqueYears.map(year => <option key={year} value={year}>{year === 'All' ? 'All Years' : year}</option>)}
          </select>
          
          <select value={selectedSpeaker} onChange={(e) => setSelectedSpeaker(e.target.value)}>
            {uniqueSpeakers.map(speaker => <option key={speaker} value={speaker}>{speaker === 'All' ? 'All Preachers/Authors' : speaker}</option>)}
          </select>

          <select value={sortByTitle} onChange={(e) => setSortByTitle(e.target.value)}>
            <option value="Default">Sort By</option>
            <option value="A-Z">Title (A - Z)</option>
            <option value="Z-A">Title (Z - A)</option>
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
          </select>
        </div>

        {/* Row 2: Category & Media Toggles */}
        <div className="es-filter-row">
          <div className="es-year-tabs">
            {categories.map(cat => (
              <button key={cat} className={`es-tab ${activeCategory === cat ? 'active' : ''}`} onClick={() => setActiveCategory(cat)}>{cat}</button>
            ))}
          </div>
          <div className="es-media-toggles">
            <button className={`es-toggle-btn ${mediaFilter === 'All' ? 'active' : ''}`} onClick={() => setMediaFilter('All')}>All Media</button>
            <button className={`es-toggle-btn ${mediaFilter === 'Video' ? 'active' : ''}`} onClick={() => setMediaFilter('Video')}>Video</button>
            <button className={`es-toggle-btn ${mediaFilter === 'Audio' ? 'active' : ''}`} onClick={() => setMediaFilter('Audio')}>Audio</button>
            <button className={`es-toggle-btn ${mediaFilter === 'PDF' ? 'active' : ''}`} onClick={() => setMediaFilter('PDF')}>PDF/Text</button>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="es-products container">
        {processedItems.length === 0 ? (
          <div className="es-no-results"><p>No resources found matching your exact filters.</p></div>
        ) : (
          processedItems.map(item => (
            <div className="es-product-card" key={item.id}>
              <div className="es-product-thumb">
                <div className="es-play-icon">
                  {item.type === 'Video' ? <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> :
                   item.type === 'Audio' ? <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg> :
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>}
                </div>
                <span className="es-type-label">{item.type}</span>
              </div>
              <div className="es-product-info">
                <p className="es-product-meta">{item.category} • {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                <h3 className="es-product-title">{item.title}</h3>
                <p className="es-product-author">By {item.speaker}</p>
                <div className="es-product-footer">
                  <h4 className="es-product-price">₦{item.price.toLocaleString()}</h4>
                  <button className="btn es-buy-btn" onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))
        )}
      </section>

      {/* BOTTOM EXTRAS (With Working Functionality) */}
      <section className="es-bottom-grid container">
        <div className="es-extra-card">
          <h3>Weekly Newsletter</h3>
          <p>Get spiritual insights delivered to your inbox every week.</p>
          
          {showSubscribe ? (
            <div className="es-subscribe-form">
              <input type="email" placeholder="Enter your email address" />
              <button className="btn es-btn-subscribe">Send</button>
            </div>
          ) : (
            <button className="btn es-btn-subscribe" onClick={() => setShowSubscribe(true)}>Subscribe Now</button>
          )}
        </div>
        
        <div className="es-extra-card">
          <h3>Physical Bookstore</h3>
          <p>Visit us in person at the church headquarters in Warri.</p>
          <button className="btn es-btn-books" onClick={handleDirections}>Get Directions</button>
        </div>
      </section>

    </div>
  );
};

export default EagleStrength;