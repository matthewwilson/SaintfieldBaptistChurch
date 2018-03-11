import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import PageSidebar from '../page/PageSidebar';
import WelcomeSection from './WelcomeSection';
import HistorySection from './HistorySection';
import WhatWeBelieveSection from './WhatWeBelieveSection';
import ConstitutionSection from './ConstitutionSection';
import LeadershipSection from './LeadershipSection';
import FAQSection from './FAQSection';

const AboutPage = (props) => {
  return (
    <Page>
      <PageBanner title="ABOUT US" imageUrl="img/about_us.jpg" titleColour="white"/>
      <PageSidebar>
        <WelcomeSection linkTitle="About Us"/>
        <HistorySection linkTitle="History"/>
        <WhatWeBelieveSection linkTitle="What We Believe"/>
        <ConstitutionSection linkTitle="Constitution"/>
        <LeadershipSection linkTitle="Leadership"/>
        <FAQSection linkTitle="FAQ"/>
      </PageSidebar>
    </Page>
  )
}

export default AboutPage;
