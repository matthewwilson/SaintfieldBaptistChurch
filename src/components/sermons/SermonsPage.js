import React from 'react';
import './SermonsPage.css'


const SermonsPage = (props) => {
  return (
    <div className="sermons-page">
      <h1>Sermons</h1>
      <hr/>
      <div className="embed-responsive embed-responsive-1by1">
        <iframe title="Sermons" className="embed-responsive-item" src="https://embed.sermonaudio.com/browser/broadcaster/saintfieldbaptist/?sort=newest&page_size=25" frameBorder="0" scrolling="no"></iframe>
      </div>
    </div>
  )
}

export default SermonsPage;
