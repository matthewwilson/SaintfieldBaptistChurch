import React from 'react';
import {Link} from 'react-router-dom';
import './AboutPage.css'

const AboutPage = (props) => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <hr/>
      <p>Thank you for visiting our web site. Saintfield Baptist Church is a relatively young church currently celebrating it's 30th anniversary.  Our desire is to exalt the Name of our Saviour the Lord Jesus Christ.</p>

      <blockquote className="blockquote">
        <p className="mb-0">And he is the head of the body, the church: who is the beginning, the firstborn from the dead; that in all things he might have the pre-eminence.</p>
        <footer className="blockquote-footer">Col. 1:18</footer>
      </blockquote>

      <p>The main focus in our meetings is the preaching of God’s Word.</p>

      <blockquote className="blockquote">
        <p className="mb-0">Preach the word; be instant in season, out of season; reprove, rebuke, exhort with all longsuffering and doctrine.</p>
        <footer className="blockquote-footer">2 Tim. 4:2</footer>
      </blockquote>

      <p>Crèche facilities and Children’s church operate during our Sunday morning meeting.</p>
      <p>If you are visiting in the area or seeking a place to worship we heartily invite you to come along and enjoy the fellowship of God’s people.  We assure you of a warm welcome at all times.</p>
      <br/>
      <p>To see our weekly meeting times and upcoming speakers <Link to="/meetings">click here</Link></p>
    </div>
  )
}

export default AboutPage;
