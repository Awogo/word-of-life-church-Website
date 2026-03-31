import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from Router
import logo from '../assets/church-logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Church Logo" />
          <span className="logo-text">Word of Life Bible Church</span>
        </Link>

        <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--navy-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </div>


        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/ministries" onClick={closeMenu}>Ministries</Link></li>
           <li><Link to="/events" onClick={closeMenu}>Events</Link></li>
          <li><Link to="/eagle-group" onClick={closeMenu}>Eagle Group</Link></li>
          <li><Link to="/isom" onClick={closeMenu}>ISOM</Link></li>
          <li className="nav-join-btn">
            <Link to="/join" className="btn btn-join" onClick={closeMenu}>Join Us</Link>
          </li>
           
             </ul>
      </div>
    </nav>
  );
};

export default Navbar;