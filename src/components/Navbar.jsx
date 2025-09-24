import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu'; // Importe o novo componente
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <div className="navbar-logo">
            <Link to="/">Tenpest Aerodesign</Link>
          </div>
          <nav className="navbar-links">
            <Link to="/direction">Seja um patrocinador</Link>
            <Link to="/contact">Contato</Link>
            <Link to="/join">Seja Tenpest</Link>
          </nav>
          <button className="hamburger-menu" onClick={toggleMenu}>
            &#9776; {/* Ícone de hambúrguer */}
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
}

export default Navbar;