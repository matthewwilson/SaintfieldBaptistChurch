import React from 'react';
import {Helmet} from 'react-helmet';
import './PageBanner.css'

const PageBanner = (props) => {

  let style = {
    background:"url("+props.imageUrl+")",
    color:props.titleColour
  }

  if (props.backgroundColor) {
    style = {
      background: props.backgroundColor,
      color: props.titleColour
    }
  }

  var className = "page-banner-mobile-center";

  if(props.bannerMobilePosition === "right") {
    className = "page-banner-mobile-right"
  }

  return (
    <div className={"page-banner "+className} style={style}>
      <Helmet>
        <meta property="og:image" content={`http://saintfieldbaptist.org.uk${props.imageUrl}`}/>
        <meta itemprop="thumbnailUrl" content={`http://saintfieldbaptist.org.uk${props.imageUrl}`}/>
        <link rel="image_src" href={`http://saintfieldbaptist.org.uk${props.imageUrl}`} />
        <meta itemprop="image" content={`http://saintfieldbaptist.org.uk${props.imageUrl}`}/>
        <meta name="twitter:image" content={`http://saintfieldbaptist.org.uk${props.imageUrl}`}/>
        <meta property="og:title" content={props.title}/>
        <meta name="twitter:title" content={props.title}/>
      </Helmet>
      <div className="row">
        <div className="col align-self-center">
          <h1>{props.title}</h1>
        </div>
      </div>
    </div>
  )
}

export default PageBanner;
