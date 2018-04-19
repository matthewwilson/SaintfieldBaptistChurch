import React from 'react';
import SermonAudioSeries from './SermonAudioSeries'

const SermonSeriesPage = (props) => {

  return (
    <div className="sermons-page">
      <h1>{props.match.params.title}</h1>
      <hr/>
      <div>
        <SermonAudioSeries title={props.match.params.title} showHeader={false}/>
      </div>
    </div>
  )
}

export default SermonSeriesPage;
