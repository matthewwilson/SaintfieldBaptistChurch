import React from 'react';
import {Helmet} from 'react-helmet';
import { useParams } from 'react-router-dom';
import SermonAudioSermon from './SermonAudioSermon'

const SermonPage = () => {
  const { sermonId, title } = useParams();

  return (
    <div className="sermons-page">
      <Helmet>
        <title>{title} - Saintfield Baptist Church</title>
        <meta name="description" content={`Listen to "${title}" from Saintfield Baptist Church.`} />
      </Helmet>
      <h1>{title}</h1>
      <hr/>
      <div>
        <SermonAudioSermon title={title} sermonId={sermonId}/>
      </div>
    </div>
  )
}

export default SermonPage;
