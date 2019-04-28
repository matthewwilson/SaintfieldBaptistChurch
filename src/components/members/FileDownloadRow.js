import React from 'react';
import './FileDownloadRow.css'

const FileDownloadRow = ({file}) => {

  const downloadFile = () => {
    window.open(`https://api.saintfieldbaptist.org.uk/api/v1/members/files/${file}`)
  }

  const fileName = () => {
    var fileName = file

    let fileNameParts = file.split('.')
    if(fileNameParts.length > 0) {
      fileName = fileNameParts[0]
    }
    return fileName
  }

  return (
    <tr>
      <td>{fileName()}</td>
      <td>
        <button className="btn btn-link file-download-btn" onClick={downloadFile}>Download</button>
      </td>
    </tr>
  )
}

export default FileDownloadRow
