
var SpeakersTable = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function() {
    if(this.props.url) {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        success: function(data) {
          if(this.isMounted()) {
            this.setState({data: data});
          }
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(url, status, err.toString());
        }.bind(this)
      });
    }
  },
  render: function() {

    var rows = this.state.data.map(function(sundayMeeting) {

          if(sundayMeeting.morning == sundayMeeting.evening) {
            return (
              <tr><td>{sundayMeeting.date}</td><td>{sundayMeeting.morning}</td></tr>
            );
          } else {
            return (
              <tr><td>sundayMeeting.date</td><td><p>AM:{sundayMeeting.morning}</p><p>PM:{sundayMeeting.evening}</p></td></tr>
            );
          }
    });

    return (
      <div>
        <p className="lead">Upcoming Sunday Speakers</p>
        <table className="table">
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
});

React.render(
  <SpeakersTable url="http://saintfieldbaptist.org.uk/php/GetSundaySpeakers.php"/>,
  document.getElementById('sunday-speakers')
);
