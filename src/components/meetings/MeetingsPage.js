import React from 'react';
import './MeetingsPage.css'

const MeetingsPage = (props) => {
  return (
    <div className="meeting-page">
      <h1>Weekly Meetings</h1>
      <hr/>
      <p className="lead">Midweek Meetings</p>
      <table className="table">
        <tbody>
        <tr><td>Womens Meeting</td><td>Last Tuesday of each month at 8pm</td></tr>
        <tr><td>Searchers</td><td>Every Wednesday night at 6:45pm</td></tr>
        <tr><td>Bible study and prayer meeting</td><td>Every Wednesday night at 8pm</td></tr>
        <tr><td>Friendly hour</td><td>First Thursday of each month at 10:45am</td></tr>
        <tr><td>Sports 4 Christ</td><td>Ages 6-10 : 6.30-7.45<br/>Ages 11-15 : 8.00-9.30</td></tr>
        </tbody>
      </table>
      <br/>

      <p className="lead">Sunday Meetings</p>
      <table className="table">
        <tbody>
        <tr><td>Sunday school</td><td>10.30am</td></tr>
        <tr><td>Morning meeting</td><td>11.30am</td></tr>
        <tr><td>Gospel service</td><td>7.00pm</td></tr>
        <tr><td>Youth fellowship</td><td>Every other Sunday at 8:30pm</td></tr>
        <tr><td colSpan="2">Both the morning and gospel services are preceded by times of prayer</td></tr>
        </tbody>
      </table>
      <br/>

      <p>For more details including upcoming meetings please view our bulletin <a href="bulletin/bulletin.pdf" target="_blank">here</a></p>
    </div>
  )
}

export default MeetingsPage;
