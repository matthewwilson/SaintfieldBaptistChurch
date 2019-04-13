import React from 'react';
import Page from '../page/Page';
import FileDownloadsSection from './FileDownloadsSection'

class MembersPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Page>
        <h1>Members</h1>
        <hr/>
        <FileDownloadsSection/>
      </Page>
    )
  }

}

export default MembersPage;
