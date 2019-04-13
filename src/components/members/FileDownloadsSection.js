import React from 'react';
import axios from 'axios';
import Auth from '../auth/Auth';
import FileDownloadRow from './FileDownloadRow';

class FileDownloadsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    }
  }

  componentDidMount() {
    const accessToken = new Auth().getAccessToken()
    const headers = { 'Authorization': `Bearer ${accessToken}`}

    axios.get('https://api.saintfieldbaptist.org.uk/api/v1/members/files', { headers })
    .then((response) => {
      // handle success
      console.log(response);

      this.setState({
        files: response.data.map(file => file.key)
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Downloads</h2>
        <table className="table">
          <tbody>
          { this.state.files.map((file, index) => <FileDownloadRow key={`file-download-${index}`} file={file}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default FileDownloadsSection;
