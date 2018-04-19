import React from 'react';

const SermonAudioSermon = ({
  sermonId,
  title
}) => {

  const style = {
    minWidth:"100%",
    maxWidth:"100%",
    border: "1px solid #ddd",
    boxSizing: "border-box"
  }

  let url = `https://embed.sermonaudio.com/player/a/${sermonId}/`

  return (
    <iframe
      title={title}
      tabindex="-1"
      width="100%"
      height="150"
      src={url}
      style={style}
      frameborder="0"
      scrolling="no">
    </iframe>
  )
}

export default SermonAudioSermon;
