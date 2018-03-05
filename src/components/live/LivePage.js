import React from 'react';
import './LivePage.css'


const LivePage = (props) => {
  return (
    <div className="live-page">
      <h1>Watch Live</h1>
      <hr/>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="Live" className="embed-responsive-item" src="https://embed.sermonaudio.com/player/l/saintfieldbaptist/?autoplay=true" allowFullScreen frameBorder="0" scrolling="no"></iframe>
      </div>
    </div>
  )
}

export default LivePage;
