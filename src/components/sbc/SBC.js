import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SBC = (props) => {
    return (
      <div className="container-fluid">
          <Header/>
          {props.children}
          <Footer/>
      </div>
    );
}

export default SBC;
