import React, { useState, useEffect } from 'react';
import logo from '../../assets/imgs/yh-logo.png';
import '../../scss/components/utils/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import SearchProductsHook from '../../customHooks/search-products-hook';

function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [onSearchWordChange, searchWord] = SearchProductsHook();

  function handleScroll() {
    const isTop = window.scrollY < 72;
    setIsHeaderFixed(!isTop);
    setIsOpen(false);
  }

  function handleSectionScroll() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 2) {
        currentSection = section.id;
      }
    });
    setActiveSection(currentSection);
  }

  useEffect(() => {
    handleSectionScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionScroll);
    };
  }, []);
  return (
    <div className={`header ${isHeaderFixed ? 'fixed' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="input-search">
          <input
            placeholder="Search products"
            className="products-search-input"
            aria-label="Search"
            type="search"
            onChange={onSearchWordChange}
            value={searchWord}
          />
        </div>

        <nav className="main-nav">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
          />
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li className={activeSection === 'home' ? 'active' : ''}>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className={activeSection === 'categories' ? 'active' : ''}>
              <NavLink to="/categories" onClick={() => setIsOpen(false)}>
                Categories
              </NavLink>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <Link to="/#about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <Link to="/#contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
