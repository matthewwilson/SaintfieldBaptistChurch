import React from 'react';
import {Link} from 'react-router-dom';
import './HomePageSlide.css'

const HomePageSlide = ({type, title, imageUrl, subtitle, url, subsubtitle, buttonText="LISTEN AGAIN", target="_self", internalLink=false}) => {

  const slideStyle = {
    background:"url("+imageUrl+")"
  }

  const buttonWrapperStyle = {
    textAlign:"center"
  }

  let lowerSection;

  if(url && internalLink) {
    lowerSection = (
      <div style={buttonWrapperStyle}>
        <Link to={url} role="button" className="btn btn-outline-primary image-slide-button center-block">
          {buttonText}
        </Link>
      </div>
    )
  } else if(url) {
    lowerSection = (
      <div style={buttonWrapperStyle}>
        <a role="button" target={target} className="btn btn-outline-primary image-slide-button center-block" href={url}>{buttonText}</a>
      </div>
    )
  } else {
    lowerSection = (
      <div>
        <hr/>
        <p className="image-slide-sub-subtitle">{subsubtitle}</p>
      </div>
    )
  }

  return (
    <div className="image-slide" style={slideStyle}>
      <div className="row image-slide-fullheight-row">
        <div className="col align-self-center image-slide-content">
          <p className="image-slide-type">{type}</p>
          <hr/>
          <p className="image-slide-title">{title}</p>
          <p className="image-slide-sub-title">{subtitle}</p>
          {lowerSection}
        </div>
      </div>
    </div>
  );
}

export default HomePageSlide;
