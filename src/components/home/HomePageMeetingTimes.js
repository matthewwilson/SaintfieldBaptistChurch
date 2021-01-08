import React from 'react';
import './HomePageMeetingTimes.css';

const HomePageMeetingTimes = (props) => {

  return (
    <div className="row">
      <div className="offset-md-2 col-md-8">
        <div className="home-page-meeting-times">
          <h2>While our church building is closed, our services are broadcast online on Sundays at 11:30am & 6:30pm, Wednesdays at 8:00pm</h2>
          <br />
          <a role="button" className="btn btn-outline-dark center-block text-black mr-3" href="/live">WATCH LIVE</a>
          <a role="button" className="btn btn-outline-dark center-block text-black" href="/sermons">WATCH AGAIN</a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default HomePageMeetingTimes;
