// src/pages/MinistryDetail.jsx
import React, { useState } from 'react';
import '../styles/MinistryDetail.css';

const MinistryDetail = ({ ministryData }) => {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState("All");

  if (!ministryData) return <div className="container" style={{padding: '100px 20px'}}>Ministry not found.</div>;

  // Generate 6 dummy gallery blocks for demonstration
  const dummyGalleryItems = [
    { id: 1, category: "Special Events", color: "#1a3a6e" },
    { id: 2, category: "Retreats", color: "#2a4a7e" },
    { id: 3, category: "Outreach", color: "#0a2a5e" },
    { id: 4, category: "Special Events", color: "#3a5a8e" },
    { id: 5, category: "Retreats", color: "#1a3a6e" },
    { id: 6, category: "Outreach", color: "#2a4a7e" }
  ];

  const filteredGallery = activeGalleryFilter === "All" 
    ? dummyGalleryItems 
    : dummyGalleryItems.filter(item => item.category === activeGalleryFilter);

  return (
    <div className="ministry-detail-page">
      
      {/* --- HERO --- */}
      <section className="md-hero">
        <div className="md-hero-overlay"></div>
        <div className="container md-hero-content">
          <span className="md-category-badge">{ministryData.category.toUpperCase()}</span>
          <h1>{ministryData.heroTitle}</h1>
          <p>{ministryData.heroSubtitle}</p>
        </div>
      </section>

      {/* --- MISSION & STATS --- */}
      <section className="md-mission container">
        <div className="md-mission-grid">
          <div className="md-mission-text">
            <h2>About the Ministry</h2>
            <p>{ministryData.missionText}</p>
            <div className="md-stat-box">
              <h3>{ministryData.statNumber}</h3>
              <p>{ministryData.statLabel}</p>
            </div>
          </div>
          <div className="md-mission-image">
            {/* Replace with <img src={require(`../assets/${ministryData.slug}-mission.jpg`)} /> */}
            <div className="dummy-img-placeholder tall" style={{backgroundColor: '#f0f2f5'}}>Ministry Group Photo</div>
          </div>
        </div>
      </section>

      {/* --- HOD PROFILE --- */}
      <section className="md-hod">
        <div className="container md-hod-grid">
          <div className="md-hod-image">
             {/* Replace with <img src={require(`../assets/${ministryData.hodImage}`)} /> */}
            <div className="dummy-img-placeholder portrait" style={{backgroundColor: '#e1e5ea'}}>HOD Portrait</div>
          </div>
          <div className="md-hod-content">
            <h2>Message from our HOD</h2>
            <p className="md-hod-quote">{ministryData.hodQuote}</p>
            <h3>{ministryData.hodName}</h3>
            <p className="md-hod-title">{ministryData.hodTitle}</p>
            <p className="md-hod-bio">{ministryData.hodBio}</p>
          </div>
        </div>
      </section>

      {/* --- SERVICE TIMES --- */}
      <section className="md-times container">
        <h2>Service Times & Venues</h2>
        <div className="md-times-grid">
          {ministryData.serviceTimes.map((service, index) => (
            <div className="md-time-card" key={index}>
              <div className="md-time-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div>
                <h4>{service.title}</h4>
                <p className="md-time-schedule">{service.time}</p>
                <p className="md-time-venue">{service.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section className="md-gallery">
        <div className="container">
          <h2>Ministry Gallery</h2>
          <p className="md-gallery-sub">Relive the moments that defined our journey this year.</p>
          
          <div className="md-gallery-filters">
            {ministryData.galleryCategories.map(cat => (
              <button key={cat} className={`filter-btn ${activeGalleryFilter === cat ? 'active' : ''}`} onClick={() => setActiveGalleryFilter(cat)}>
                {cat}
              </button>
            ))}
          </div>

          <div className="md-gallery-grid">
            {filteredGallery.map(item => (
              <div className="md-gallery-item" key={item.id} style={{backgroundColor: item.color}}>
                <span className="md-gallery-tag">{item.category.toUpperCase()}</span>
                {/* Replace with <img src={...} /> when images are ready */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- JOIN FORM --- */}
      <section className="md-join container">
        <h2>Join {ministryData.name}</h2>
        <p>Ready to get involved? Fill out the form below and a member of our team will reach out to you.</p>
        
        <form className="md-form" onSubmit={(e) => e.preventDefault()}>
          <div className="md-form-group">
            <label>Full Name</label>
            <input type="text" placeholder="e.g. Sarah Jenkins" required />
          </div>
          <div className="md-form-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" required />
          </div>
          <div className="md-form-group">
            <label>Area of Interest</label>
            <select required defaultValue="">
              <option value="" disabled>Select an option</option>
              {ministryData.formOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="md-form-group full-width">
            <label>Tell us a bit about your journey</label>
            <textarea rows="4" placeholder="How can we support you in this season?"></textarea>
          </div>
          <button type="submit" className="btn btn-submit-red">Submit Application</button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default MinistryDetail;