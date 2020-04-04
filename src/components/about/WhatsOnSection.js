import React from 'react';

const WhatsOnSection = (props) => {
  return (
    <div>
      <div className="alert alert-warning">
        <p>After much prayer, research and deliberation the oversight have decided to suspend all of our scheduled church gatherings for the foreseeable future.</p>
        <a href="/covid19">Read more</a>
      </div>
      <h2>Midweek Meetings</h2>
      <table className="table">
        <tbody>
        <tr><td>Womens Meeting</td><td>Last Tuesday of each month at 8pm</td></tr>
        <tr><td>Searchers</td><td>Every Wednesday night at 6:45pm</td></tr>
        <tr><td>Bible study and prayer meeting</td><td>Every Wednesday night at 8pm</td></tr>
        <tr><td>Friendly hour</td><td>First Thursday of each month at 10:45am</td></tr>
        <tr><td>Tumble Tots</td><td>Friday at 10am (During term time)</td></tr>
        <tr><td>Sports 4 Christ</td><td>Ages 6-10 : 6.30-7.45<br/>Ages 11-15 : 8.00-9.30</td></tr>
        </tbody>
      </table>
      <br/>

      <h2>Sunday Meetings</h2>
      <table className="table">
        <tbody>
        <tr><td>Sunday school</td><td>10.30am</td></tr>
        <tr><td>Morning meeting</td><td>11.30am</td></tr>
        <tr><td>Gospel service</td><td>6.30pm</td></tr>
        <tr><td>Youth fellowship</td><td>Every other Sunday at 8:30pm</td></tr>
        <tr><td colSpan="2">Both the morning and gospel services are preceded by times of prayer</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default WhatsOnSection;
