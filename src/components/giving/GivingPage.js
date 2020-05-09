import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import './GivingPage.css'

class GivingPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Page>
        <PageBanner imageUrl="/img/giving.jpeg" titleColour="white" title="GIVING"/>
        <div className="ml-3 mr-3 pt-4 pb-4">
          <p>
            <strong>Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.</strong>
            <br/>
            <span className="page-bible-reference">2 Corinthians 9:7</span>
          </p>
          <p>A number of people have been asking about how they can continue to support the Lord’s work financially while the normal weekly meetings are suspended.</p>
          <p>You can give via a bank transfer: Sort Code: 95-04-34, Account Number: 61041002</p>
          <p>If you are a tax payer and do not already give by Gift Aid, we would encourage you to do so. You can fill in the form online <a href="https://forms.gle/yaRkusVi7LDHJkdQ7" target="_blank" rel="noopener noreferrer">here</a>. Alternatively you can download the gift aid form at the bottom of this page. Please print, complete, scan and return to the treasurer via email.</p>
          <br/>
          <a href="https://forms.gle/yaRkusVi7LDHJkdQ7" target="_blank" rel="noopener noreferrer">Gift Aid Form (Online)</a>
          <br/>
          <a href="media/gift-aid.doc">Gift Aid Form (Word Document)</a>
          <br/>
          <a href="media/gift-aid.pdf">Gift Aid Form (PDF)</a>
          <br/>
          <br/>
          <p>For other ways to give please contact our treasurer, Gary McNeill, at <a href="mailto:treasurer@saintfieldbaptist.org.uk">treasurer@saintfieldbaptist.org.uk</a></p>
        </div>
      </Page>
    )
  }

}

export default GivingPage;
