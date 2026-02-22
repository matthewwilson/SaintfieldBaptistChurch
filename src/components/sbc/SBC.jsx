import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './SBC.css';

const SBC = (props) => {
    return (
      <div>
          <Header/>
          {props.children}
          <Footer/>
      </div>
    );
}

export default SBC;
