import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const navBarToggleClick = () => {
    setCollapsed(!collapsed);
  }

  const navLinkClick = () => {
    setCollapsed(true);
  }

  const navLinkLogoClick = () => {
    const newCount = numberOfClicks + 1;
    setNumberOfClicks(newCount);
    setCollapsed(true);

    if (newCount >= 5) {
      setNumberOfClicks(0);
      window.location.href = 'https://forms.gle/k7UjoYDYywCTLmSX6';
    }
  }

  const collapsedClass = collapsed ? 'collapse' : '';
  const navClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

  return (
    <nav className="sbc-navbar navbar fixed-top navbar-expand-xl navbar-light">
      <Link to="/" className="navbar-brand" onClick={navLinkLogoClick}>
        <img className="sbc-navbar-logo" src="/img/logo_menu.png" srcSet="/img/logo_menu@2x.png 2x" alt="Saintfield Baptist Church" />
      </Link>
      <button className="navbar-toggler" type="button" onClick={navBarToggleClick}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`${collapsedClass} navbar-collapse sbc-navbar-collapse`} id="navbarSupportedContent">
        <ul className="navbar-nav sbc-navbar-content ms-auto">
          <li className="nav-item">
            <NavLink to="/about" className={navClass} onClick={navLinkClick}>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/sermons" className={navClass} onClick={navLinkClick}>Sermons</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={navClass} onClick={navLinkClick}>Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/live" className={navClass} onClick={navLinkClick}>Watch Live</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/giving" className={navClass} onClick={navLinkClick}>Giving</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
