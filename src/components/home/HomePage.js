import React from 'react';
import {Link} from 'react-router-dom';
import HomePageSlider from './HomePageSlider';
import './HomePage.css'

const HomePage = (props) => {
  return (
    <div className="home-page">
      <HomePageSlider/>
    </div>
  )
}

export default HomePage;
