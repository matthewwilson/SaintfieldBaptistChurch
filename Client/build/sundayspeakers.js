
var SpeakersTable = React.createClass({displayName: "SpeakersTable",
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
              React.createElement("tr", null, React.createElement("td", null, sundayMeeting.date), React.createElement("td", null, sundayMeeting.morning))
            );
          } else {
            return (
              React.createElement("tr", null, React.createElement("td", null, "sundayMeeting.date"), React.createElement("td", null, React.createElement("p", null, "AM:", sundayMeeting.morning), React.createElement("p", null, "PM:", sundayMeeting.evening)))
            );
          }
    });

    return (
      React.createElement("div", null, 
        React.createElement("p", {className: "lead"}, "Upcoming Sunday Speakers"), 
        React.createElement("table", {className: "table"}, 
          React.createElement("tbody", null, 
            rows
          )
        )
      )
    );
  }
});

React.render(
  React.createElement(SpeakersTable, {url: "http://saintfieldbaptist.org.uk/php/GetSundaySpeakers.php"}),
  document.getElementById('sunday-speakers')
);
