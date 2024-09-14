import React from 'react';
import HomePageSlider from './HomePageSlider';
import HomePageIntro from './HomePageIntro';
import HomePageText from './HomePageText';
import HomePageMeetingTimes from './HomePageMeetingTimes';
import './HomePage.css'

const HomePage = (props) => {
  return (
    <div className="home-page">
      <HomePageSlider/>
      <HomePageIntro/>
      <HomePageText/>
      <HomePageMeetingTimes/>
    </div>
  )
}

export default HomePage;
