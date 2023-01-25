import React from 'react';

const WhatsOnSection = (props) => {
  return (
    <div>
      <h2>Midweek Meetings</h2>
      <table className="table">
        <tbody>
        <tr><td>Womens Meeting</td><td>Last Tuesday of each month at 8pm</td></tr>
        <tr><td>Searchers</td><td>Wednesday night at 6:45pm</td></tr>
        <tr><td>Bible study and prayer meeting</td><td>Wednesday night at 8pm</td></tr>
        <tr><td>Tiny Tots</td><td>Thursday at 10:30am (During term time). <a href="/consent">Register here</a></td></tr>
        </tbody>
      </table>
      <br/>

      <h2>Sunday Meetings</h2>
      <table className="table">
        <tbody>
        <tr><td>Sunday school</td><td>10.30am. <a href="/consent">Register here</a></td></tr>
        <tr><td>Morning meeting</td><td>11.30am</td></tr>
        <tr><td>Gospel service</td><td>6.30pm</td></tr>
        <tr><td>Youth fellowship</td><td>Every other Sunday at 8:30pm. <a href="/consent">Register here</a></td></tr>
        <tr><td colSpan="2">Both the morning and gospel services are preceded by times of prayer</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default WhatsOnSection;
