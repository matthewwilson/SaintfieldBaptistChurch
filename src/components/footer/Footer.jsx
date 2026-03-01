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
            <p>Saintfield Baptist Church<br/><a href="https://maps.app.goo.gl/cCK2hDGhzcyUX23M9" target="_blank" rel="noopener noreferrer">51 Crossgar Road, Saintfield</a><br/>{currentYear} &copy; Saintfield Baptist Church</p>
          </div>
          <div className="col-sm">
            <p className="footer-social-title">STAY CONNECTED</p>
            <div className="footer-social-links">
              <a href="https://www.facebook.com/Saintfield-Baptist-Church-105178506183089/" target="_blank" rel="noopener noreferrer" aria-label="Saintfield Baptist Church Facebook page"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com/SaintfieldBC" target="_blank" rel="noopener noreferrer" aria-label="Saintfield Baptist Church on Twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://www.youtube.com/@saintfieldbaptistchurch6743/streams" target="_blank" rel="noopener noreferrer" aria-label="Saintfield Baptist Church YouTube channel"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="col-sm d-none d-sm-none d-md-none d-lg-block footer-logo-col">
            <img alt="Saintfield Baptist Church" srcSet="img/logo_footer@2x.png 2x" className="footer-logo" src="img/logo_footer.png" loading="lazy"/>
          </div>
        </div>
      </div>
    )
};

export default Footer;
