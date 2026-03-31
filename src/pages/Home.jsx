import React, { useState, useEffect } from 'react';
import churchAuditorium from '../assets/church-auditorium.jpg';
import papaAyo from '../assets/papa-ayo.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Floating Give Online Button */}
      <a href="/giving" className="floating-give-btn">
        GIVE ONLINE
      </a>

      {/* --- HERO SECTION --- */}
      <section className="hero" style={{ backgroundImage: `url(${churchAuditorium})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1>Experience God's Word in Its Power</h1>
          <p className="hero-subtitle">
            Welcome to Word of Life Bible Church Warri. A place of spiritual growth, 
            community, and excellence. Join us as we bring the light of the Gospel to the world.
          </p>
          <div className="hero-buttons">
            {/* Changed colors to match screenshot 184 exactly */}
            <a href="/events" className="btn btn-hero-orange">JOIN US THIS SUNDAY</a>
            <a href="/about" className="btn btn-hero-gray">LEARN MORE</a>
          </div>
        </div>
      </section>

      {/* --- SERVICE TIMES SECTION --- */}
      <section className="services-section container">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3>Sunday Services</h3>
            <div className="time-block">
              <p><strong>First Service:</strong> 7:00 AM</p>
              <p><strong>Main Service:</strong> 10:00 AM</p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3>Our Location</h3>
            <div className="time-block">
              <p>Ajamimogha Road,</p>
              <p>Warri, Delta State, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
      {/* --- MINISTRIES OVERVIEW SECTION --- */}
      <section className="ministries-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Ministries</h2>
            <p>Discover a community tailored for your spiritual growth and stage of life.</p>
          </div>
          <div className="ministries-grid">
            
            {/* 1. Action Youth */}
            <div className="ministry-card">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy-blue)" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <h3>Action Youth For Christ</h3>
              <p>Empowering the next generation with the fire of the Holy Ghost and biblical truth.</p>
            </div>

            {/* 2. Action Teens */}
            <div className="ministry-card">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy-blue)" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              <h3>Action Teens For Christ</h3>
              <p>Raising focused teenagers grounded in the Word and navigating life by God's grace.</p>
            </div>

            {/* 3. Children Evangelical */}
            <div className="ministry-card">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy-blue)" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <h3>Children Evangelical</h3>
              <p>Laying a solid biblical foundation for our little ones in a fun, engaging environment.</p>
            </div>

            {/* 4. Men Alive */}
            <div className="ministry-card">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy-blue)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <h3>Men Alive Ministries</h3>
              <p>Building men of integrity, responsibility, and spiritual authority in the home and society.</p>
            </div>

            {/* 5. Daughters of Sarah */}
            <div className="ministry-card">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy-blue)" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              <h3>Daughters of Sarah</h3>
              <p>Raising women of grace, prayer, and profound impact in their homes and the church.</p>
            </div>

          </div>
          <div className="section-cta">
            <a href="/ministries" className="btn btn-secondary">View All Ministries</a>
          </div>
        </div>
      </section>

      {/* --- LATEST SERMON SECTION --- */}
      <section className="sermon-section">
        <div className="container sermon-grid">
          <div className="sermon-image-placeholder">
            {/* Added Papa Ayo Image as thumbnail background */}
            <img src={papaAyo} alt="Latest Sermon Speaker" className="sermon-thumbnail" />
            <span className="new-release-badge">NEW RELEASE</span>
            <div className="play-btn">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="var(--gold)" stroke="none">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
          <div className="sermon-content">
            <h2>The Power of Unshakable Faith</h2>
            <p className="sermon-date">Sunday, October 15th | Pastor [Name]</p>
            <p className="sermon-desc">
              In times of uncertainty, our faith must be anchored in the unchanging word of God. 
              Discover how to build a faith that withstands every storm and moves every mountain.
            </p>
            <div className="sermon-buttons">
              <a href="/sermons" className="btn btn-primary">WATCH NOW</a>
              <a href="/sermons" className="btn btn-outline-light">See Archive</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- UPCOMING EVENTS SECTION --- */}
      <section className="events-section container">
        <div className="section-header">
          <h2>Upcoming Events</h2>
          <p>Don't miss out on what God is doing in our midst.</p>
        </div>
        <div className="events-grid">
          <div className="event-card">
            <div className="event-date-box">
              <span className="event-month">OCT</span>
              <span className="event-day">24</span>
            </div>
            <div className="event-details">
              <h3>Kingdom Advancement Summit</h3>
              <p>A 2-day intensive conference for spiritual growth and empowerment.</p>
              <a href="/events" className="event-link">DETAILS →</a>
            </div>
          </div>
          <div className="event-card">
            <div className="event-date-box">
              <span className="event-month">NOV</span>
              <span className="event-day">12</span>
            </div>
            <div className="event-details">
              <h3>Night of Praise & Victory</h3>
              <p>An evening of intense worship, declarations, and supernatural encounters.</p>
              <a href="/events" className="event-link">DETAILS →</a>
            </div>
          </div>
          <div className="event-card">
            <div className="event-date-box">
              <span className="event-month">DEC</span>
              <span className="event-day">05</span>
            </div>
            <div className="event-details">
              <h3>Warri Outreach Festival</h3>
              <p>Taking the love of Christ to the streets and communities of Warri.</p>
              <a href="/events" className="event-link">DETAILS →</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;