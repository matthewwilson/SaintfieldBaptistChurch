import React from 'react'

const BibleVerse = ({reference, text}) => {

  const url = "https://www.bible.com/en-GB/bible/1/"+reference+".KJV"

  return (
    <a href={url} target="_blank">{text}</a>
  )

}

export default BibleVerse
