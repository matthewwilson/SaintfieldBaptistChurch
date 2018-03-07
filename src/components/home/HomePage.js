import React from 'react';
import HomePageSlider from './HomePageSlider';
import HomePageIntro from './HomePageIntro';
import HomePageText from './HomePageText';
import HomePageMeetingTimes from './HomePageMeetingTimes';
import Map from '../map/Map';
import './HomePage.css'

const HomePage = (props) => {
  return (
    <div className="home-page">
      <HomePageSlider/>
      <HomePageIntro/>
      <HomePageText/>
      <HomePageMeetingTimes/>
      <Map/>
    </div>
  )
}

export default HomePage;
