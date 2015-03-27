function makeSuffixRegExp(suffix, caseInsensitive) {
  return new RegExp(
      String(suffix).replace(/[$%()*+.?\[\\\]{|}]/g, "\\$&") + "$",
      caseInsensitive ? "i" : "");
}

var AudioPlayer = React.createClass({
  getInitialState: function() {
    return {
      url : this.props.url,
      play : false,
      downloadOnly : false
    };
  },
  componentDidMount: function() {
    $.ajax({
      url: 'http://saintfieldbaptist.org.uk/php/ExpandSermonLink.php?link='+this.props.url,
      dataType: 'json',
      success: function(data) {

        if(this.isMounted()) {
          var expandedUrl = data.expandedUrl;

          if(!makeSuffixRegExp(".mp3").test(expandedUrl))
          {
            this.setState({url: this.state.url, play : this.state.play, downloadOnly : true});
          }
        }

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  listenClicked : function() {
    this.setState({url: this.state.url, play: true, downloadOnly : this.state.downloadOnly});
  },
  render: function() {

    if(this.state.downloadOnly)
    {
      return (
        <a href={this.state.url} className="btn btn-default btn-sm">
          <span className="glyphicon glyphicon-download" aria-hidden="true"></span> Download
        </a>
      );
    } else if(this.state.play) {
      return (
        <div>
          <a href={this.state.url} className="btn btn-default btn-sm">
            <span className="glyphicon glyphicon-download" aria-hidden="true"></span> Download
          </a>
          <audio controls className="audio">
            <source src={this.state.url} type="audio/mpeg"></source>
            Your browser does not support the audio element.
          </audio>
        </div>
      );
    } else {
      return (
        <div className="btn-group" role="group">
          <a href={this.state.url} className="btn btn-default btn-sm">
            <span className="glyphicon glyphicon-download" aria-hidden="true"></span> Download
          </a>
          <button type="button" className="btn btn-default btn-sm" onClick={this.listenClicked}>
            <span className="glyphicon glyphicon-headphones" aria-hidden="true"></span> Listen
          </button>
        </div>
      );
    }

  }
});
