import React from 'react'
import './BibleVerse.css'

const BibleVerse = ({reference, text}) => {

  const url = "https://www.bible.com/en-GB/bible/1/"+reference+".KJV"

  return (
    <a class="bible-verse" href={url} target="_blank">{text}</a>
  )

}

export default BibleVerse
