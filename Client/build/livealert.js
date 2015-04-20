var LiveAlert = React.createClass({displayName: "LiveAlert",
  getInitialState: function() {
    return {
      status : 'offline'
    };
  },
  checkLiveFeedState: function() {
    $.ajax({
      url: 'http://saintfieldbaptist.org.uk/php/GetLiveStatus.php',
      dataType: 'json',
      success: function(data) {

        if(this.isMounted()) {
          this.setState({
            status: data.status
          });
        }

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    this.checkLiveFeedState();
    setInterval(this.checkLiveFeedState, 5000);
  },
  render : function() {

    if(this.state.status == 'live') {
      return(
        React.createElement("div", {className: "alert alert-info", role: "alert"}, 
          React.createElement("p", {className: "lead text-center"}, "Our chuch service is currently streaming live, ", React.createElement("a", {href: "live.html"}, "click here to watch"))
        )
      );
    } else {
      return (React.createElement("div", null));
    }
  }
});

React.render(
  React.createElement(LiveAlert, null),
  document.getElementById('live-alert')
);
