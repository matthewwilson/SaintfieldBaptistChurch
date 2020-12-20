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
        <PageBanner backgroundColor="#ff5a34" titleColour="white" title="Back to Church"/>
        <div className="ml-3 mr-3 mt-6 mb-3">
          <h3>In line with the Northern Ireland Executive Covid-19 guidelines, which state, it is mandatory for all those attending a place of worship to wear a face covering, not only for arrival and exit, but also for the entire time they are in the building (ie: throughout the meeting). Therefore, unless medically exempt, we would kindly ask you to adhere to these new guidelines and wear a face covering while in attendance at any of the services in the church building.</h3>
          <h3>If you are feeling unwell or have been in contact with someone who has COVID please do not attend the services and follow government guidelines</h3>
        </div>
        <div className="ml-3 mr-3 mt-3">
          <iframe title="back-to-church" width="100%" height="315" src="https://www.youtube.com/embed/LIpYOqCt374" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="ml-3 mr-3 mt-3">
          <iframe title="walkthrough" width="100%" height="315" src="https://www.youtube.com/embed/KsdmVh7Lzww" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Page>
    )
  }

}

export default Covid19Page;
