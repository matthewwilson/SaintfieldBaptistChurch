import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import PageSidebar from '../page/PageSidebar';
import PageSection from '../page/PageSection';
import WelcomeSection from './WelcomeSection';
import HistorySection from './HistorySection';
import HistorySectionMore from './HistorySectionMore';
import WhatWeBelieveSection from './WhatWeBelieveSection';
import WhatWeBelieveSectionMore from './WhatWeBelieveSectionMore';
import WhatsOnSection from './WhatsOnSection';
import './AboutPage.css'

class AboutPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSectionChange = (bannerImage, title, bannerMobilePosition) => {
    this.setState({
      currentBannerImage: bannerImage,
      title:title,
      bannerMobilePosition:bannerMobilePosition
    })
  }

  render() {
    return (
      <Page>
        <PageBanner title={this.state.title} imageUrl={this.state.currentBannerImage} bannerMobilePosition={this.state.bannerMobilePosition} titleColour="white"/>
        <PageSidebar onSectionChange={this.handleSectionChange} currentSection={this.state.currentSection}>

          <PageSection
            linkTitle="About Us"
            bannerImageUrl="/img/about_us.jpg"
            url="/about"
            bannerMobilePosition="right">
            <WelcomeSection/>
          </PageSection>

          <PageSection
            linkTitle="History"
            bannerTitle="HOW IT ALL BEGAN"
            bannerImageUrl="/img/history.jpg"
            url="/about/history"
            bannerMobilePosition="right">
            <HistorySection/>
            <HistorySectionMore/>
          </PageSection>

          <PageSection
            linkTitle="What We Believe"
            bannerImageUrl="/img/what_we_believe.png"
            url="/about/what-we-believe"
            bannerMobilePosition="center">
            <WhatWeBelieveSection />
            <WhatWeBelieveSectionMore />
          </PageSection>

          <PageSection
            linkTitle="What's On"
            bannerImageUrl="/img/about_us.jpg"
            url="/about/whats-on"
            bannerMobilePosition="center">
            <WhatsOnSection/>
          </PageSection>

        </PageSidebar>
      </Page>
    )
  }

}

export default AboutPage;
