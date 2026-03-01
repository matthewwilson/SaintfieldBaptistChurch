import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SBC.css';

const SBC = (props) => {
    return (
      <div>
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <Header/>
          <main id="main-content">
            {props.children}
          </main>
          <Footer/>
      </div>
    );
}

export default SBC;
