import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import PageSidebar from '../page/PageSidebar';
import PageSection from '../page/PageSection';
import OurBurdenBearer from './OurBurdenBearer';
import WhereIsGod from './WhereIsGod';
import TheComfortingCareOfGod from './TheComfortingCareOfGod';
import './WordForTheWeek.css'

class WordForTheWeekPage extends React.Component {

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
            linkTitle="The Comforting Care of God"
            bannerImageUrl="/img/word-for-the-week/comfort.jpg"
            url="/word-for-the-week/the-comforting-care-of-god"
            bannerMobilePosition="center">
            <TheComfortingCareOfGod/>
          </PageSection>

          <PageSection
            linkTitle="Where is God?"
            bannerImageUrl="/img/word-for-the-week/where.jpg"
            url="/word-for-the-week/where-is-god"
            bannerMobilePosition="center">
            <WhereIsGod/>
          </PageSection>

          <PageSection
            linkTitle="Our Burden Bearer"
            bannerImageUrl="/img/word-for-the-week/burden.jpg"
            url="/word-for-the-week/our-burden-bearer"
            bannerMobilePosition="center">
            <OurBurdenBearer/>
          </PageSection>

        </PageSidebar>
      </Page>
    )
  }

}

export default WordForTheWeekPage;
