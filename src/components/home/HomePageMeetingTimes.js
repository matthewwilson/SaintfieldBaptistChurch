import React from 'react';
import {Link} from 'react-router-dom';
import './HomePageMeetingTimes.css';

const HomePageMeetingTimes = (props) => {

  var buttonWrapperStyle = {
    textAlign:"center"
  }

  return (
    <div className="row">
      <div className="offset-md-2 col-md-8">
        <div className="home-page-meeting-times">
          <h2>AS A CHURCH WE GATHER ON SUNDAYS AT 11.30AM &amp; 7.00PM</h2>
          <br />
          <h3>All are welcome and we would love to see you</h3>
          <br />
          <div style={buttonWrapperStyle}>
            <button type="button" className="btn btn-outline-primary what-to-expect-button">WHAT TO EXPECT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageMeetingTimes;
