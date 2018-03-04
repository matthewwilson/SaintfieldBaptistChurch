import React from 'react';
import {Link} from 'react-router-dom';
import './HomePageText.css';

const HomePageText = (props) => {

  return (
    <div className="row">
      <div className="col homepage-text about">
        <h3>ABOUT</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link to="/about">LEARN MORE <i className="fas fa-chevron-right"></i></Link>
      </div>
      <div className="col homepage-text vision">
        <h3>OUR VISION</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Link to="/about">LEARN MORE <i className="fas fa-chevron-right"></i></Link>
      </div>
    </div>
  );
}

export default HomePageText;
