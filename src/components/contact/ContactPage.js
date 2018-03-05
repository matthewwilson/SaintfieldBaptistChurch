import React from 'react';
import Map from '../map/Map';
import './ContactPage.css'


const ContactPage = (props) => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <hr/>
      <Map/>
      <div>
        <br/>
        <p>
          Saintfield Baptist Church<br/>
          51 Crossgar Road<br/>
          Saintfield<br/>
        </p>
        <br/>
        <a href="mailto:pastor@saintfieldbaptist.org.uk"><i className="far fa-envelope"></i> Email Us</a>
      </div>
    </div>
  )
}

export default ContactPage;
