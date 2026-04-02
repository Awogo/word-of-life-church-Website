// src/pages/Ministries.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import papaAyo from '../assets/papa-ayo.jpg';
import '../styles/Ministries.css';

const ministriesList = [
  {
    name: "Men Alive Fellowship",
    category: "Adults",
    desc: "Building men of integrity and spiritual authority.",
    slug: "men-alive",
    svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy-blue)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  },
  {
    name: "Daughters of Sarah Fellowship",
    category: "Adults",
    desc: "Raising women of grace, prayer, and profound impact.",
    slug: "daughters-of-sarah",
    svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy-blue)" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
  },
  {
    name: "Action Youth For Christ Fellowship",
    category: "Youth",
    desc: "Empowering the next generation with Holy Ghost fire.",
    slug: "action-youth",
    svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy-blue)" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  },
  {
    name: "Action Teens For Christ Fellowship",
    category: "Youth",
    desc: "Grounding teenagers in the Word and navigating by grace.",
    slug: "action-teens",
    svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy-blue)" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
  },
  {
    name: "Children Evangelical Ministry",
    category: "Children",
    desc: "Laying a solid biblical foundation for the little ones.",
    slug: "children-evangelical",
    svg: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy-blue)" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
  }
];

const Ministries = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Adults", "Youth", "Children"];

  const filteredMinistries = activeFilter === "All" 
    ? ministriesList 
    : ministriesList.filter(m => m.category === activeFilter);

  return (
    <div className="ministries-page">
      
      {/* --- HERO SESSION --- */}
      <section className="ministries-hero">
        <div className="container">
          <h1>Welcome to Our Fellowships</h1>
          <p className="scripture">"Building and Equipping the People that builds a Nation."</p>
          <span className="scripture-ref">— Mark 16:15</span>
        </div>
      </section>

      {/* --- PAPA AYO BIOGRAPHY SESSION --- */}
      <section className="papa-ayo-section container">
        <div className="papa-ayo-image">
          <img src={papaAyo} alt="Papa Ayo" />
        </div>
        <div className="papa-ayo-content">
          <h2>Under the Leadership of Papa Ayo</h2>
          <p>
            Word of Life Bible Church is guided by the profound apostolic vision of our General Overseer, 
            Papa Ayo Oritsejafor. With decades of steadfast ministry, he has built an institution rooted 
            in the undiluted Word of God, aggressive evangelism, and a deep commitment to community impact. 
            Every ministry in this church functions under his spiritual covering and mandate to raise 
            a people of power, purpose, and excellence.
          </p>
        </div>
      </section>

      {/* --- FILTER BAR --- */}
      <div className="filters-container container">
        {filters.map(filter => (
          <button 
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter === "All" ? "All Fellowships" : filter}
          </button>
        ))}
      </div>

      {/* --- 5-COLUMN GRID SESSION --- */}
      <div className="ministries-cards-container container">
        {filteredMinistries.map(ministry => (
          <Link 
            to={`/ministries/${ministry.slug}`} 
            className="ministry-detail-card" 
            key={ministry.slug}
          >
            <div className="card-image-placeholder">
              {ministry.svg}
            </div>
            <div className="card-content">
              <span className="category-tag">{ministry.category.toUpperCase()}</span>
              <h3>{ministry.name}</h3>
              <p>{ministry.desc}</p>
              <div className="learn-more-link">
                LEARN MORE 
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Ministries;