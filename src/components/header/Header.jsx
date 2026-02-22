import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      numberOfClicks: 0
    };
  }

  navBarToggleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  navLinkClick = () => {
    this.setState({
      collapsed: true
    });
  }

  navLinkLogoClick = () => {
    const numberOfClicks = this.state.numberOfClicks + 1;
    this.setState({
      numberOfClicks,
      collapsed: true
    });

    if (numberOfClicks >= 5) {
      this.setState({
        collapsed: true,
        numberOfClicks: 0
      });

      window.location.href = 'https://forms.gle/k7UjoYDYywCTLmSX6';
    }
  }

  render() {
    const collapsedClass = this.state.collapsed ? 'collapse' : '';
    const navClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

    return (
      <nav className="sbc-navbar navbar fixed-top navbar-expand-xl navbar-light">
        <Link to="/" className="navbar-brand" onClick={this.navLinkLogoClick}>
          <img className="sbc-navbar-logo" src="/img/logo_menu.png" srcSet="/img/logo_menu@2x.png 2x" alt="Saintfield Baptist Church" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={this.navBarToggleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${collapsedClass} navbar-collapse sbc-navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav sbc-navbar-content">
            <li className="nav-item">
              <NavLink to="/about" className={navClass} onClick={this.navLinkClick}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sermons" className={navClass} onClick={this.navLinkClick}>Sermons</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={navClass} onClick={this.navLinkClick}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/live" className={navClass} onClick={this.navLinkClick}>Watch Live</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/giving" className={navClass} onClick={this.navLinkClick}>Giving</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
