import React from 'react';
import './LivePage.css'


const LivePage = (props) => {

  const style = {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '56.25%'
  }

  const iFrameStyle = {
    position: 'absolute',
    left: 0,
    top: 0
  }

   const contents = (
    <div style={style}>
      <iframe
        title="Live"
        tabIndex="-1"
        width="100%"
        height="100%"
        src="https://embed.sermonaudio.com/player/l/saintfieldbaptist/"
        style={iFrameStyle}
        allowFullScreen
        frameborder="0"
        scrolling="no">
      </iframe>
    </div>
  );

  /*const contents = (
     <div>
       <br/>
       <h3 class="text-center">Our services will not be broadcast live today. We are sorry for any inconvenience caused.</h3>
     </div>
   );*/

  return (
    <div className="live-page">
      <h1>Watch Live</h1>
      <hr/>
      <div className="alert alert-warning">
        <p>COVID-19 Update: Please note that SermonAudio is experiencing unprecented users during this global pandemic.</p>
        <p>If your stream <strong>freezes</strong>, please be patient and let the video player load the next segment of video, this can take up-to 30 seconds</p>
        <p>If your stream <strong>stops and says that it is offline</strong>, please refresh this page and try again</p>
      </div>
      <hr/>
      {contents}
    </div>
  )
}

export default LivePage;
