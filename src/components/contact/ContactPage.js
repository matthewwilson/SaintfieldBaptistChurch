import React from 'react';
import Page from '../page/Page';
import './ContactPage.css'


const ContactPage = (props) => {
  return (
    <Page>
      <div className="contact-page">
        <br/>
        <p>
          Saintfield Baptist Church<br/>
          51 Crossgar Road<br/>
          Saintfield<br/>
        </p>
        <br/>
        <a href="https://maps.app.goo.gl/cCK2hDGhzcyUX23M9" target="_blank" rel="noopener noreferrer">Google Maps</a>
        <br/>
        <a href="mailto:secretary@saintfieldbaptist.org.uk"><i className="far fa-envelope"></i> Email Us</a>
      </div>
    </Page>
  )
}

export default ContactPage;
