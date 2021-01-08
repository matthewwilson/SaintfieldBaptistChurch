import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import './Covid19Page.css'

class Covid19Page extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Page>
        <PageBanner backgroundColor="#ff5a34" titleColour="white" title="In-building services suspended"/>
        <div className="ml-3 mr-3 mt-6 mb-3">
          <h3>As a result of the current regulations and public health messages, as elders we have decided to suspend all activities in our church buildings. Whilst regrettable, we have taken this decision to protect our church family and the wider community.</h3>
          <h3>Our church services will continue on-line and we encourage you to join us via the church website or through SermonAudio.</h3>
        </div>
      </Page>
    )
  }

}

export default Covid19Page;
