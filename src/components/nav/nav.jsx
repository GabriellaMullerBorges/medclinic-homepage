import React, { useState } from 'react';
import logo from '../../assets/icons/logo.png';
import { NavEstilo } from './navstyle';

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <NavEstilo>
      <nav>
        <div className={`navbar ${isExpanded ? 'expanded' : ''}`}>
          <img src={logo} alt="MedClinic logo" className="logo" />
          <button
            className={`navbar-toggler ${isExpanded ? 'collapsed' : ''}`}
            type="button"
            onClick={toggleMenu}
            aria-expanded={isExpanded}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        <ul className={`navbar-nav ${isExpanded ? 'expanded' : ''}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </NavEstilo>
  );
};

export default Nav;
