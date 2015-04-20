var VideoPlayer = React.createClass({displayName: "VideoPlayer",
  getInitialState: function() {
    return {
      status : 'offline',
      broadcastId : null
    };
  },
  checkLiveFeedState: function() {
    $.ajax({
      url: 'http://saintfieldbaptist.org.uk/php/GetLiveStatus.php',
      dataType: 'json',
      success: function(data) {

        if(this.isMounted()) {
          this.setState({
            status: data.status,
            broadcastId: data.broadcastId
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
  render: function() {
    if(this.state.status == 'live') {
      return(
        React.createElement("div", {className: "embed-responsive embed-responsive-4by3"}, 
          React.createElement("iframe", {className: "embed-responsive-item", src: "https://www.youtube.com/embed/"+this.state.broadcastId+"?modestbranding=1&amp;rel=0", allowFullScreen: true})
        )
      );
    } else {
      return(React.createElement("h2", {className: "lead"}, "Our live broadcast is offline"));
    }
  }
});


React.render(
  React.createElement(VideoPlayer, null),
  document.getElementById('sbc-live-player')
);
