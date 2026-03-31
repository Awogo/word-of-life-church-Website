// src/pages/MenAlive.jsx
import React from 'react';
import '../styles/MinistryDetail.css'; // SHARED CSS FILE

const ActionYouth = () => {
  return (
    <div className="ministry-detail-page">
      {/* Hero */}
      <section className="md-hero">
        <div className="md-hero-overlay"></div>
        <div className="container md-hero-content">
          <span className="md-category-badge">ADULTS</span>
          <h1>Raising men of standard and spiritual authority</h1>
          <p>Building men of integrity, responsibility, and profound impact in their families, the church, and the society.</p>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="md-mission container">
        <div className="md-mission-grid">
          <div className="md-mission-text">
            <h2>About the Ministry</h2>
            <p>Men Alive is dedicated to breaking the stereotype of passive fatherhood and male leadership. We equip men to be spiritual heads of their homes, financial providers, and kingdom ambassadors through rigorous discipleship and accountability groups.</p>
            <div className="md-stat-box">
              <h3>350+</h3>
              <p>ACTIVE BROTHERS</p>
            </div>
          </div>
          <div className="md-mission-image">
            <div className="dummy-img-placeholder tall" style={{backgroundColor: '#f0f2f5'}}>Men Alive Group Photo</div>
          </div>
        </div>
      </section>

      {/* HOD Profile */}
      <section className="md-hod">
        <div className="container md-hod-grid">
          <div className="md-hod-image">
            <div className="dummy-img-placeholder portrait" style={{backgroundColor: '#e1e5ea'}}>HOD Portrait</div>
          </div>
          <div className="md-hod-content">
            <h2>Message from our HOD</h2>
            <p className="md-hod-quote">"A man who does not understand his priesthood in his home will fail in his ministry outside."</p>
            <h3>Elder John Doe</h3>
            <p className="md-hod-title">Head of Department, Men Alive</p>
            <p className="md-hod-bio">Leading the Men Alive for 8 years, Elder John focuses on practical mentorship, equipping men to dominate in their secular careers while maintaining spiritual fire.</p>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="md-times container">
        <h2>Service Times & Venues</h2>
        <div className="md-times-grid">
          <div className="md-time-card">
            <div className="md-time-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div>
              <h4>Men's Fellowship</h4>
              <p className="md-time-schedule">Every 2nd Saturday | 8:00 AM</p>
              <p className="md-time-venue">Church Basement Hall</p>
            </div>
          </div>
          <div className="md-time-card">
            <div className="md-time-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </div>
            <div>
              <h4>Accountability Groups</h4>
              <p className="md-time-schedule">Thursdays | 7:00 PM</p>
              <p className="md-time-venue">Various Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="md-gallery">
        <div className="container">
          <h2>Ministry Gallery</h2>
          <p className="md-gallery-sub">Relive the moments that defined our journey this year.</p>
          <div className="md-gallery-filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Conferences</button>
            <button className="filter-btn">Hangouts</button>
          </div>
          <div className="md-gallery-grid">
            <div className="md-gallery-item" style={{backgroundColor: '#1a3a6e'}}><span className="md-gallery-tag">CONFERENCES</span></div>
            <div className="md-gallery-item" style={{backgroundColor: '#2a4a7e'}}><span className="md-gallery-tag">HANGOUTS</span></div>
            <div className="md-gallery-item" style={{backgroundColor: '#0a2a5e'}}><span className="md-gallery-tag">CONFERENCES</span></div>
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section className="md-join container">
        <h2>Join Men Alive Ministries</h2>
        <p>Ready to get involved? Fill out the form below.</p>
        <form className="md-form" onSubmit={(e) => e.preventDefault()}>
          <div className="md-form-group">
            <label>Full Name</label>
            <input type="text" placeholder="e.g. John Doe" />
          </div>
          <div className="md-form-group">
            <label>Email Address</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className="md-form-group">
            <label>Area of Interest</label>
            <select defaultValue=""><option value="" disabled>Select an option</option><option>Leadership Training</option><option>Mentorship</option></select>
          </div>
          <div className="md-form-group full-width">
            <label>Tell us a bit about yourself</label>
            <textarea rows="4" placeholder="How can we support you?"></textarea>
          </div>
          <button type="submit" className="btn btn-submit-red">Submit Application</button>
        </form>
      </section>
    </div>
  );
};

export default  ActionYouth;