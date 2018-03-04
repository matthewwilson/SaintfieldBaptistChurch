import React from 'react';
import Header from '../header/Header';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const SBC = (props) => {
    return (
      <div className="container-fluid">
          <Header/>
          {props.children}
      </div>
    );
}

export default SBC;
