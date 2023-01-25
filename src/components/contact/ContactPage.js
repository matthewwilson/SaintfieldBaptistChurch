import React from 'react';
import Page from '../page/Page';
import Map from '../map/Map';
import './ContactPage.css'


const ContactPage = (props) => {
  return (
    <Page>
      <Map fullWidth={true}/>
      <div className="contact-page">
        <br/>
        <p>
          Saintfield Baptist Church<br/>
          51 Crossgar Road<br/>
          Saintfield<br/>
        </p>
        <br/>
        <a href="mailto:secretary@saintfieldbaptist.org.uk"><i className="far fa-envelope"></i> Email Us</a>
      </div>
    </Page>
  )
}

export default ContactPage;
