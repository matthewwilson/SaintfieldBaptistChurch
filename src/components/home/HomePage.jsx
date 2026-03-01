import React from 'react';
import {Helmet} from 'react-helmet';
import HomePageSlider from './HomePageSlider';
import HomePageIntro from './HomePageIntro';
import HomePageText from './HomePageText';
import HomePageMeetingTimes from './HomePageMeetingTimes';
import './HomePage.css'

const HomePage = (props) => {
  return (
    <div className="home-page">
      <Helmet>
        <title>Saintfield Baptist Church</title>
        <meta name="description" content="Welcome to Saintfield Baptist Church – Sunday services at 11.30am and 6.30pm." />
        <link rel="canonical" href="https://www.saintfieldbaptist.org.uk/" />
      </Helmet>
      <HomePageSlider/>
      <HomePageIntro/>
      <HomePageText/>
      <HomePageMeetingTimes/>
    </div>
  )
}

export default HomePage;
