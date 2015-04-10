var LiveAlert = React.createClass({
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
        <div className="alert alert-info" role="alert">
          <p className="lead text-center">Our chuch service is currently streaming live, <a href="live.html">click here to watch</a></p>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
});

React.render(
  <LiveAlert/>,
  document.getElementById('live-alert')
);
