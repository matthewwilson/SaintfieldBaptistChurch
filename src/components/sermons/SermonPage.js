import React from 'react';
import SermonAudioSermon from './SermonAudioSermon'

const SermonPage = (props) => {

  return (
    <div className="sermons-page">
      <h1>{props.match.params.title}</h1>
      <hr/>
      <div>
        <SermonAudioSermon title={props.match.params.title} sermonId={props.match.params.sermonId}/>
      </div>
    </div>
  )
}

export default SermonPage;
