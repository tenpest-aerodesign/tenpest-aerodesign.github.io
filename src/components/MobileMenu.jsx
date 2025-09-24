import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';

function MobileMenu({ isOpen, toggleMenu }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={toggleMenu}>
        &times;
      </button>
      <nav className="mobile-nav-links">
        <Link to="/" onClick={toggleMenu}>Início</Link>
        <a href="#about" onClick={toggleMenu}>Sobre</a>
        <Link to="/trajectory" onClick={toggleMenu}>Nossa Trajetória</Link>
        <Link to="/destiny" onClick={toggleMenu}>Parceiros</Link>
        <Link to="/direction" onClick={toggleMenu}>Patrocinadores</Link>
        <Link to="/join" onClick={toggleMenu}>Seja Tenpest</Link>
        <Link to="/contact" onClick={toggleMenu}>Contato</Link>
      </nav>
    </div>
  );
}

export default MobileMenu;