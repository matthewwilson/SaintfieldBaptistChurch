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

  let className = "page-banner-mobile-center";

  if(props.bannerMobilePosition === "right") {
    className = "page-banner-mobile-right"
  }

  return (
    <div className={"page-banner "+className} style={style}>
      <Helmet>
        <title>{(props.title || '') + ' - Saintfield Baptist Church'}</title>
        {props.description && <meta name="description" content={props.description} />}
        {props.description && <meta property="og:description" content={props.description} />}
        <meta property="og:image" content={`https://www.saintfieldbaptist.org.uk${props.imageUrl}`}/>
        <meta itemprop="thumbnailUrl" content={`https://www.saintfieldbaptist.org.uk${props.imageUrl}`}/>
        <link rel="image_src" href={`https://www.saintfieldbaptist.org.uk${props.imageUrl}`} />
        <meta itemprop="image" content={`https://www.saintfieldbaptist.org.uk${props.imageUrl}`}/>
        <meta name="twitter:image" content={`https://www.saintfieldbaptist.org.uk${props.imageUrl}`}/>
        <meta property="og:title" content={props.title}/>
        <meta name="twitter:title" content={props.title}/>
        <link rel="canonical" href={`https://www.saintfieldbaptist.org.uk${window.location.pathname}`} />
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
