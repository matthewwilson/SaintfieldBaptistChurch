import React from 'react';
import HomePageSlider from './HomePageSlider';
import HomePageText from './HomePageText';
import HomePageMeetingTimes from './HomePageMeetingTimes';
import HomePageMap from './HomePageMap';
import './HomePage.css'

const HomePage = (props) => {
  return (
    <div className="home-page">
      <HomePageSlider/>
      <HomePageText/>
      <HomePageMeetingTimes/>
      <HomePageMap/>
    </div>
  )
}

export default HomePage;
