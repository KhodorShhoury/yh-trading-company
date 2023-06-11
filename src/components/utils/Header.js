import React, { useState } from 'react'
import logo from '../../assets/imgs/yh-logo.png';
import '../../scss/components/utils/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
function Header() {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className="header">
        <div className="container">
            <div className="logo">
                <img src= {logo} alt="logo" />
            </div>
            <nav className="main-nav">
                  <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="menu-toggle" onClick={() => setIsOpen(!isOpen)}  />
                <ul className="nav-links">
                    <li className="nav-link"><a href="#">Home</a></li>
                    <li className="nav-link"><a href="#">About</a></li>
                    <li className="nav-link"><a href="#">categories</a></li>
                    <li className="nav-link"><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header