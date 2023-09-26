import React from 'react';

const WhatsOnSection = (props) => {
  return (
    <div>
      <table class="table">
        <tbody>
          <tr><td>Ladies Fellowship</td><td>Last Tuesday of each month at 8pm</td></tr>
          <tr><td>Searchers Bible Club</td><td>Wednesday at 6:45pm (term-time) -  <a href="/consent">Register here</a></td></tr>
          <tr><td>Bible Study and Prayer Meeting</td><td>Wednesday at 8:00pm</td></tr>
          <tr><td>Tiny Tots</td><td>Thursday at 10:30am (term-time) - <a href="/consent">Register here</a></td></tr>
          <tr><td>Sports for Christ</td><td>Second Saturday of each month at 6:30pm (term-time) - <a href="/consent">Register here</a></td></tr>
        </tbody>
      </table>
      <br />
      <h2>Sunday Services</h2>
      <table class="table">
        <tbody>
          <tr><td>Sunday School and Bible Class</td><td>10.15am (term-time) - <a href="/consent">Register here</a></td></tr>
          <tr><td>Morning Service</td><td>11.30am</td></tr>
          <tr><td>Gospel Service</td><td>6.30pm</td></tr>
          <tr><td>Youth Fellowship</td><td>Alternate Sundays at 8:00pm (term-time) - <a href="/consent">Register here</a></td></tr>
          <tr><td colspan="2">Both the morning and gospel services are preceded by times of prayer</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default WhatsOnSection;
