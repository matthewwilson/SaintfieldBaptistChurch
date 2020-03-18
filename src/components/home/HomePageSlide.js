import React from 'react';
import {Link} from 'react-router-dom';
import './HomePageSlide.css'

const HomePageSlide = ({
  type,
  title,
  imageUrl,
  subtitle,
  url,
  subsubtitle,
  buttonText="LISTEN AGAIN",
  target="_self",
  internalLink=false,
  textColour="text-white",
  fullHeightLink=false,
  backgroundPosition="left",
  backgroundColor
}) => {

  let slideStyle = {
    background:"url("+imageUrl+")",
    backgroundPosition: backgroundPosition
  }

  if(backgroundColor) {
    slideStyle = {
      background: backgroundColor,
      backgroundPosition: backgroundPosition
    }
  }

  const buttonWrapperStyle = {
    textAlign:"center"
  }

  let hrStyle = {
    color: "white",
    borderColor: "white",
    backgroundColor: "white"
  }

  if(textColour === "text-dark") {
    hrStyle = {
      color: "black",
      borderColor: "black",
      backgroundColor: "black"
    }
  }

  let lowerSection;

  if(url && internalLink && !fullHeightLink) {
    lowerSection = (
      <div style={buttonWrapperStyle}>
        <Link to={url} role="button" className={`btn btn-outline-primary image-slide-button center-block ${textColour}`}>
          {buttonText}
        </Link>
      </div>
    )
  } else if(url && !fullHeightLink) {
    lowerSection = (
      <div style={buttonWrapperStyle}>
        <a role="button" target={target} className={`btn btn-outline-primary image-slide-button center-block ${textColour}`} href={url}>{buttonText}</a>
      </div>
    )
  } else {
    lowerSection = (
      <div>
        <hr style={hrStyle}/>
        <p className={`image-slide-sub-subtitle ${textColour}`}>{subsubtitle}</p>
      </div>
    )
  }

  const slideContents = (
    <div className="image-slide" style={slideStyle}>
      <div className="row image-slide-fullheight-row">
        <div className="col align-self-center image-slide-content">
          <p className={`image-slide-type ${textColour}`}>{type}</p>
          <hr style={hrStyle}/>
          <p className={`image-slide-title ${textColour}`}>{title}</p>
          <p className={`image-slide-sub-title ${textColour}`}>{subtitle}</p>
          {lowerSection}
        </div>
      </div>
    </div>
  );

  if(fullHeightLink) {
    return (
      <a href={url} className="image-slide-link">
        {slideContents}
      </a>
    )
  } else {
    return slideContents;
  }

}

export default HomePageSlide;
