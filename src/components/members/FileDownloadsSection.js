import React from 'react';
import axios from 'axios';
import Auth from '../auth/Auth';
import FileDownloadRow from './FileDownloadRow';
import loading from '../auth/Loading.svg'

class FileDownloadsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    }
  }

  componentDidMount() {
    const auth = new Auth()
    const accessToken = auth.getAccessToken()
    const headers = { 'Authorization': `Bearer ${accessToken}`}

    axios.get('https://api.saintfieldbaptist.org.uk/api/v1/members/files', { headers })
    .then((response) => {
      // handle success
      console.log(response);

      this.setState({
        files: response.data.map(file => file.key)
      })
    }).catch((error) => {
      if (error.response && error.response.status && error.response.status.toString().indexOf("4") === 0) {
        auth.logout()
      }
      console.error(error)
    })

  }

  render() {

    var content

    if (this.state.files.length === 0) {
      const style = {
        display: 'flex',
        justifyContent: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        height: '50px'
      }

      content = (
        <div style={style}>
          <img src={loading} alt="loading"/>
        </div>
      )
    } else {
      content = (
        <table className="table">
          <tbody>
          { this.state.files.map((file, index) => <FileDownloadRow key={`file-download-${index}`} file={file}/>)}
          </tbody>
        </table>
      )
    }

    return (
      <div>
        <h2>Downloads</h2>
        {content}
      </div>
    )
  }
}

export default FileDownloadsSection;
