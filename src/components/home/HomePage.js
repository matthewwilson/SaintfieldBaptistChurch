import React from 'react';
import {Link} from 'react-router-dom';
import HomePageSlider from './HomePageSlider';
import HomePageText from './HomePageText';
import './HomePage.css'

const HomePage = (props) => {
  return (
    <div className="home-page">
      <HomePageSlider/>
      <HomePageText/>
    </div>
  )
}

export default HomePage;
