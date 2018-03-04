import React from 'react';
import {Link} from 'react-router-dom';
import './HomePageSlide.css'

const HomePageSlide = ({type, title, imageUrl, subtitle, url}) => {

  const slideStyle = {
    background:"linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url('"+imageUrl+"')"
  }

  const buttonWrapperStyle = {
    textAlign:"center"
  }

  return (
    <div className="image-slide" style={slideStyle}>
      <div className="row image-slide-fullheight-row">
        <div className="col align-self-center">
          <p className="image-slide-type">{type}</p>
          <hr/>
          <p className="image-slide-title">{title}</p>
          <p className="image-slide-sub-title">{subtitle}</p>
          <div style={buttonWrapperStyle}>
            <a role="button" className="btn btn-outline-primary image-slide-button center-block" href={url}>LISTEN AGAIN</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageSlide;
