import React from 'react';
import './PageBanner.css'

const PageBanner = (props) => {

  const style = {
    background:"url("+props.imageUrl+")",
    color:props.titleColour
  }

  return (
    <div className="page-banner" style={style}>
      <div className="row">
        <div className="col align-self-center">
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  )
}

export default PageBanner;
