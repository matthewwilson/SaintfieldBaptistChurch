import React from 'react';
import SermonAudioSeries from './SermonAudioSeries'

const SermonSeriesPage = (props) => {
  const title = decodeURIComponent(props.match.params.title)
  return (
    <div className="sermons-page">
      <h1>{title}</h1>
      <hr/>
      <div>
        <SermonAudioSeries title={title} showHeader={false}/>
      </div>
    </div>
  )
}

export default SermonSeriesPage;
