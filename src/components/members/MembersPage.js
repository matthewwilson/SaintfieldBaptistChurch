import React from 'react';
import Page from '../page/Page';
import FileDownloadsSection from './FileDownloadsSection'
import './MembersPage.css'

const MembersPage = (props) => {
    return (
      <Page>
        <div className="members-page-section">
          <h1>Members</h1>
          <hr/>
          <FileDownloadsSection/>
        </div>
      </Page>
    )
}

export default MembersPage;
