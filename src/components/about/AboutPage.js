import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import PageSidebar from '../page/PageSidebar';
import WelcomeSection from './WelcomeSection';
import HistorySection from './HistorySection';
import WhatWeBelieveSection from './WhatWeBelieveSection';
import FAQSection from './FAQSection';
import './AboutPage.css'

class AboutPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialPage(props)
  }

  getInitialPage = (props) => {
    return {
      currentBannerImage: "/img/about_us.jpg",
      title:"ABOUT US",
      currentSection:0
    }
  }

  handleSectionChange = (bannerImage, title) => {
    this.setState({
      currentBannerImage: bannerImage,
      title:title
    })
  }

  render() {
    return (
      <Page>
        <PageBanner title={this.state.title} imageUrl={this.state.currentBannerImage} titleColour="white"/>
        <PageSidebar onSectionChange={this.handleSectionChange} currentSection={this.state.currentSection}>
          <WelcomeSection linkTitle="About Us" bannerImageUrl="/img/about_us.jpg"/>
          <HistorySection linkTitle="History" bannerTitle="HOW IT ALL BEGAN" bannerImageUrl="/img/history.jpg"/>
          <WhatWeBelieveSection linkTitle="What We Believe" bannerImageUrl="/img/what_we_believe.png"/>
          <FAQSection linkTitle="FAQ" bannerImageUrl="/img/about_us.jpg"/>
        </PageSidebar>
      </Page>
    )
  }

}

export default AboutPage;
