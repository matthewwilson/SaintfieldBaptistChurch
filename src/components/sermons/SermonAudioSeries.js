import React from 'react';

const SermonAudioSeries = ({
  title,
  sort="newest",
  pageSize=25,
  showBackground=true,
  showSermonBorders=true,
  showExternalBorders=true,
  showHeader=true
}) => {

  const style = {
    minHeight:"700px",
    minWidth:"100%",
    maxWidth:"100%",
    border: "1px solid #ddd",
    boxSizing: "border-box"
  }

  let url = "https://embed.sermonaudio.com/browser/broadcaster/saintfieldbaptist/series/"

  url += encodeURIComponent(title) + "/";
  url += `?sort=${sort}&`
  url += `page_size=${pageSize}&`
  url += `background=${showBackground}&`
  url += `sermon_borders=${showSermonBorders}&`
  url += `external_borders=${showExternalBorders}&`
  url += `header=${showHeader}`

  return (
    <iframe
      title={title}
      tabindex="-1"
      width="1"
      height="700"
      src={url}
      style={style}
      frameborder="0"
      scrolling="no">
    </iframe>
  )
}

export default SermonAudioSeries;
