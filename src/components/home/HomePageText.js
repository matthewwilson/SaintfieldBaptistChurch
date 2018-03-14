import React from 'react';
import './HomePageText.css';

const HomePageText = (props) => {

  return (
    <div className="row">
      <div className="col-md homepage-text about">
        <h3>BREAKING OF BREAD</h3>
        <hr/>
        <p>In the upper room, on the night Jesus was betrayed, after breaking bread and taking a cup of wine, He commanded the disciples &quot;this do in remembrance of me.&quot; <span>(Luke 22, 1 Corinthians 11)</span>  So, following the pattern of the disicples and the early church, <span>(Acts 2:42, Acts 20:7)</span> we break bread on the first day of the week as the climax of our morning worship. We do this &quot;till He come&quot;.</p>
      </div>
      <div className="col-md homepage-text vision">
        <h3>BELIEVER'S BAPTISM</h3>
        <hr/>
        <p>In keeping with the Lord’s command <span>(Matthew 28:18-20)</span> and following the Lord’s example <span>(Matthew 3:13-17)</span> we believe that all born again Christians, upon profession of faith in Christ as their Saviour, should be baptised by immersion. This was the practice of the early church <span>(Acts 2:41, 8:12,)</span> as a public demonstration of a personal transformation.</p>
      </div>
    </div>
  );
}

export default HomePageText;
