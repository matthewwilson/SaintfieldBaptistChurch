var SermonHeaders = React.createClass({
  render: function() {
    return (
        <tr>
          <th>Date</th>
          <th>Speaker</th>
          <th>Book</th>
          <th>Verses</th>
          <th>Subject</th>
          <th>Type</th>
          <th>Download Link</th>
        </tr>
    );
  }
});


var SermonTable = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {

    var sermons = this.state.data.map(function(sermon) {
          return (
            <tr>
              <td>{sermon.day} {sermon.month} {sermon.year}</td>
              <td>{sermon.speaker}</td>
              <td>{sermon.bibleBook}</td>
              <td>{sermon.verses}</td>
              <td>{sermon.subject}</td>
              <td>{sermon.type}</td>
              <td><a href={sermon.downloadLink}>Download</a></td>
            </tr>
          );
    });

    return (
      <table className="table table-striped">
        <tbody>
          <SermonHeaders/>
          {sermons}
        </tbody>
      </table>
    );
  }
});

React.render(
  <SermonTable url="http://saintfieldbaptist.org.uk/php/GetSermons.php"/>,
  document.getElementById('sermons')
);
