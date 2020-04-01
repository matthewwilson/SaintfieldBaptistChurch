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
        src="https://embed.sermonaudio.com/player/l/saintfieldbaptist/?autoplay=true"
        style={iFrameStyle}
        allowFullScreen
        frameborder="0"
        scrolling="no"
        allow="autoplay">
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
        <h5>COVID-19 Update: Please note that SermonAudio is experiencing unprecented users during this global pandemic.</h5>
        <hr/>
        <p>Although the stream is advertised to start at our usual meeting times, there can sometimes be a <strong>delay of a few minutes</strong> while sermon audio processes the video stream.</p>
        <p>If, during playback, your stream <strong>freezes</strong>, please be patient and let the video player load the next segment of video, this can take up-to 30 seconds</p>
        <p>If, during playback, your stream <strong>stops and says that it is offline</strong>, please refresh this page and try again</p>
        <p>If you are still having issues, <a href="https://www.saintfieldbaptist.org.uk/live">click here to refresh</a> and try again.</p>
      </div>
      <hr/>
      {contents}
    </div>
  )
}

export default LivePage;
