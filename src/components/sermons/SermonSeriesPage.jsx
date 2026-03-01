import React from 'react';
import {Helmet} from 'react-helmet';
import { useParams } from 'react-router-dom';
import SermonAudioSeries from './SermonAudioSeries'

const SermonSeriesPage = () => {
  const { title: rawTitle } = useParams();
  const title = decodeURIComponent(rawTitle);
  return (
    <div className="sermons-page">
      <Helmet>
        <title>{title} - Saintfield Baptist Church</title>
        <meta name="description" content={`Listen to the sermon series "${title}" from Saintfield Baptist Church.`} />
      </Helmet>
      <h1>{title}</h1>
      <hr/>
      <div>
        <SermonAudioSeries title={title} showHeader={false}/>
      </div>
    </div>
  )
}

export default SermonSeriesPage;
