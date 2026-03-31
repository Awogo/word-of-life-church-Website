// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/church-logo.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1 */}
          <div className="footer-col">
            <img src={logo} alt="Church Logo" className="footer-logo" />
            <p className="footer-tagline">Building and Equipping the <br></br> People Who Build a Nation.</p>
          </div>

  {/* Column 2 */}
  <div className="footer-col">
    <h4>Navigation</h4>
    <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Our Church</a></li>
              <li><a href="/isom">ISOM</a></li>
              <li><a href="/ministries">Ministries</a></li>
              <li><a href="/events">Events</a></li>
                <li><a href="/eagle-group">The Eagle Group</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="/sermons">Sermon Archive</a></li>
              <li><a href="/isom">ISOM School</a></li>
              <li><a href="/giving">Give Online</a></li>
              <li><a href="/dashboard">Member Portal</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="contact-list">
              <li>
                {/* Location SVG Icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Ajamimogha Road, Warri, Delta State, Nigeria</span>
              </li>
              <li>
                {/* Phone SVG Icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+234 800 000 0000</span>
              </li>
              <li>
                {/* Email SVG Icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>info@wordoflife.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Word of Life Bible Church Warri. All Rights Reserved.</p>
          <a href="/giving" className="btn btn-give">Give Online</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;