import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './Header.css';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed:true
    }
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

  render() {

    let collapsedClass = "collapse";

    if(!this.state.collapsed) {
      collapsedClass = "";
    }

    return (
      <nav className="sbc-navbar navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand" onClick={this.navLinkClick}>
          <img src="img/logo_menu.png" alt="Saintfield Baptist Church"/>
        </Link>
        <button className="navbar-toggler" type="button" onClick={this.navBarToggleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={collapsedClass+" navbar-collapse sbc-navbar-collapse"} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav sbc-navbar-content">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/meetings" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Meetings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bulletin" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Bulletin</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/live" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Watch</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/sermons" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Sermons</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={this.navLinkClick}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
};




export default Header;
