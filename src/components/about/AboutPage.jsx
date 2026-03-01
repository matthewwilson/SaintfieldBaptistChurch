import { useState } from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import PageSection from '../page/PageSection';
import PageSidebar from '../page/PageSidebar';
import HistorySection from './HistorySection';
import HistorySectionMore from './HistorySectionMore';
import WelcomeSection from './WelcomeSection';
import WhatsOnSection from './WhatsOnSection';
import WhatWeBelieveSection from './WhatWeBelieveSection';
import WhatWeBelieveSectionMore from './WhatWeBelieveSectionMore';
import './AboutPage.css';

const AboutPage = () => {
  const [currentBannerImage, setCurrentBannerImage] = useState();
  const [title, setTitle] = useState();
  const [bannerMobilePosition, setBannerMobilePosition] = useState();
  const [description, setDescription] = useState();

  const handleSectionChange = (bannerImage, newTitle, newBannerMobilePosition, newDescription) => {
    setCurrentBannerImage(bannerImage);
    setTitle(newTitle);
    setBannerMobilePosition(newBannerMobilePosition);
    setDescription(newDescription);
  };

  return (
    <Page>
      <PageBanner
        title={title}
        imageUrl={currentBannerImage}
        bannerMobilePosition={bannerMobilePosition}
        titleColour="white"
        description={description}
      />
      <PageSidebar onSectionChange={handleSectionChange}>
        <PageSection
          linkTitle="About Us"
          bannerImageUrl="/img/about_us.jpg"
          url="/about"
          bannerMobilePosition="right"
          description="Learn about Saintfield Baptist Church – a Bible-believing church on the Crossgar Road, Saintfield."
        >
          <WelcomeSection />
        </PageSection>

        <PageSection
          linkTitle="History"
          bannerTitle="HOW IT ALL BEGAN"
          bannerImageUrl="/img/history.jpg"
          url="/about/history"
          bannerMobilePosition="right"
          description="The history of Saintfield Baptist Church – how it all began."
        >
          <HistorySection />
          <HistorySectionMore />
        </PageSection>

        <PageSection
          linkTitle="What We Believe"
          bannerImageUrl="/img/what_we_believe.png"
          url="/about/what-we-believe"
          bannerMobilePosition="center"
          description="Our statement of faith – what Saintfield Baptist Church believes."
        >
          <WhatWeBelieveSection />
          <WhatWeBelieveSectionMore />
        </PageSection>

        <PageSection
          linkTitle="What's On"
          bannerImageUrl="/img/about_us.jpg"
          url="/about/whats-on"
          bannerMobilePosition="center"
          description="Weekly meetings and activities at Saintfield Baptist Church."
        >
          <WhatsOnSection />
        </PageSection>
      </PageSidebar>
    </Page>
  );
};

export default AboutPage;
