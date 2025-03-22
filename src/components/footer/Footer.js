import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

const Footer = (props) => {
  const currentYear = new Date().getFullYear();
  return (
      <div className="footer">
        <div className="footer-links">
          <Link to="/about">About</Link><span className="footer-link-slash">/</span>
          <Link to="/sermons">Sermons</Link><span className="footer-link-slash">/</span>
          <Link to="/contact">Contact</Link><span className="footer-link-slash">/</span>
          <Link to="/live">Watch Live</Link>
        </div>
        <div className="row">
          <div className="col-sm">
            <p>Saintfield Baptist Church<br/><a href="https://maps.app.goo.gl/cCK2hDGhzcyUX23M9">51 Crossgar Road, Saintfield</a><br/>{currentYear} &copy; Saintfield Baptist Church</p>
          </div>
          <div className="col-sm">
            <p className="footer-social-title">STAY CONNECTED</p>
            <div className="footer-social-links">
              <a href="https://www.facebook.com/Saintfield-Baptist-Church-105178506183089/"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/SaintfieldBC"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
          <div className="col-sm d-none d-sm-none d-md-none d-lg-block">
            <img alt="footer-logo" srcSet="img/logo_footer@2x.png 2x" className="footer-logo float-right" src="img/logo_footer.png"/>
          </div>
        </div>
      </div>
    )
};

export default Footer;
