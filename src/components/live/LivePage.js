import React from 'react';
import './LivePage.css'


const LivePage = (props) => {
  // const contents = (
  //   <div className="embed-responsive embed-responsive-16by9">
  //     <iframe title="Live" className="embed-responsive-item" src="https://embed.sermonaudio.com/player/l/saintfieldbaptist/?autoplay=true" allowFullScreen frameBorder="0" scrolling="no"></iframe>
  //   </div>
  // );

  const contents = (
    <div>
      <br/>
      <h3 class="text-center">Tonight&#39;s service will not be broadcast live. We are sorry for any inconvenience caused. Please tune in next Sunday morning at 11.30am</h3>
    </div>
  );

  return (
    <div className="live-page">
      <h1>Watch Live</h1>
      <hr/>
      {contents}
    </div>
  )
}

export default LivePage;
