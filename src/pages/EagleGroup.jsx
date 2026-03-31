// src/pages/EagleGroup.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EagleGroup.css';

const companies = [
  {
    id: 1,
    name: "Eagle Strength",
    tagline: "Digital Media & Bookstore",
    desc: "Access our library of sermons, books, devotionals, and resources from anywhere in the world.",
    type: "internal",
    link: "/eagle-strength",
    svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
  },
  {
    id: 2,
    name: "ISOM",
    tagline: "International School of Ministry",
    desc: "Equipping saints for the work of the ministry through rigorous, faith-based theological training.",
    type: "internal",
    link: "/isom",
    svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
  },
  {
    id: 3,
    name: "Eagle Nest",
    tagline: "Guest House & Hospitality",
    desc: "Experience premium comfort and serene hospitality during your stay in Warri.",
    type: "internal",
    link: "/eagle-nest",
    svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
  },
  {
    id: 4,
    name: "Eagle Health",
    tagline: "Medical Center",
    desc: "Providing compassionate, high-quality healthcare services to our community and beyond.",
    type: "internal",
    link: "/eagle-health",
    svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
  },
  {
    id: 5,
    name: "Eagle Might Int'l School",
    tagline: "Academic Excellence",
    desc: "Raising a generation of intellectually sound, morally upright, and spiritually grounded leaders.",
    type: "external",
    link: "https://www.eaglemightintl.com", // Replace with actual URL
    svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"></path></svg>
  },
  {
    id: 6,
    name: "Eagle Microfinance Bank",
    tagline: "Financial Empowerment",
    desc: "Offering tailored financial solutions, savings, and loans to empower individuals and businesses.",
    type: "external",
    link: "https://www.eaglemicrofinancebank.com", // Replace with actual URL
    svg: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
  }
];

const EagleGroup = () => {
  return (
    <div className="eagle-group-page">
      
      <section className="eg-hero">
        <div className="container">
          <span className="eg-badge">WORD OF LIFE BIBLE CHURCH</span>
          <h1>The Eagle Group</h1>
          <p>Empowering communities, advancing the kingdom, and maintaining global excellence through our specialized arms and institutions.</p>
        </div>
      </section>

      <section className="eg-grid-container container">
        {companies.map(company => (
          <div className="eg-card" key={company.id}>
            <div className="eg-icon-box">
              {company.svg}
            </div>
            <div className="eg-content">
              <h3>{company.name}</h3>
              <p className="eg-tagline">{company.tagline}</p>
              <p className="eg-desc">{company.desc}</p>
              
              {company.type === 'internal' ? (
                <Link to={company.link} className="eg-link">
                  Explore <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Link>
              ) : (
                <a href={company.link} target="_blank" rel="noopener noreferrer" className="eg-link external">
                  Visit Website <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default EagleGroup;