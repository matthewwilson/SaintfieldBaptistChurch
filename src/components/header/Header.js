import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import Auth from '../auth/Auth.js'
import './Header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed:true
    }
    this.auth = new Auth();
  }

  navBarToggleClick = (event) => {
    this.setState({
      collapsed:this.state.collapsed ? false : true
    });
  }

  navLinkClick = (event) => {
    this.setState({
      collapsed:true
    });
  }

  login = (event) => {
    this.auth.login();
  }

  render() {

    let collapsedClass = "collapse";

    if(!this.state.collapsed) {
      collapsedClass = "";
    }

    var loginNavItem = (<button className="btn btn-link nav-link login-btn" onClick={this.login}>Login</button>)

    if(this.auth.isAuthenticated()) {
      loginNavItem = (<NavLink to="/members" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Members</NavLink>)
    }

    return (
      <nav className="sbc-navbar navbar fixed-top navbar-expand-xl navbar-light">
        <Link to="/" className="navbar-brand" onClick={this.navLinkClick}>
          <img className="sbc-navbar-logo" src="/img/logo_menu.png" srcSet="/img/logo_menu@2x.png 2x" alt="Saintfield Baptist Church"/>
        </Link>
        <button className="navbar-toggler" type="button" onClick={this.navBarToggleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={collapsedClass+" navbar-collapse sbc-navbar-collapse"} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav sbc-navbar-content">
            <li className="nav-item">
              <NavLink to="/covid19" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>COVID-19</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>About</NavLink>
            </li>
            <li className="nav-item">
              <a href="bulletin/bulletin.pdf" target="_blank" className="nav-link" onClick={this.navLinkClick}>Bulletin</a>
            </li>
            <li className="nav-item">
              <NavLink to="/sermons" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Sermons</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/live" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Watch Live</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/giving" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Giving</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/word-for-the-week" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Word for the Week</NavLink>
            </li>
            <li className="nav-item">
              {loginNavItem}
            </li>
          </ul>
        </div>
      </nav>
    )
  }
};




export default Header;
