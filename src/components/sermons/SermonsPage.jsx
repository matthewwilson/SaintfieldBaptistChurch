import React from 'react';
import {Helmet} from 'react-helmet';
import './SermonsPage.css'


const SermonsPage = (props) => {

  const style = {
    minHeight:"700px",
    minWidth:"100%",
    maxWidth:"100%",
    border: "1px solid #ddd",
    boxSizing: "border-box"
  }

  return (
    <div className="sermons-page">
      <Helmet>
        <title>Sermons - Saintfield Baptist Church</title>
        <meta name="description" content="Listen to sermons from Saintfield Baptist Church." />
        <link rel="canonical" href="https://www.saintfieldbaptist.org.uk/sermons" />
      </Helmet>
      <h1>Sermons</h1>
      <hr/>
      <div>
        <iframe style={style} height="700" title="Sermons" src="https://embed.sermonaudio.com/browser/broadcaster/saintfieldbaptist/?sort=newest&page_size=25"></iframe>
      </div>
    </div>
  )
}

export default SermonsPage;
