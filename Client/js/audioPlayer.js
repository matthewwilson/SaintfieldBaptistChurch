function makeSuffixRegExp(suffix, caseInsensitive) {
  return new RegExp(
      String(suffix).replace(/[$%()*+.?\[\\\]{|}]/g, "\\$&") + "$",
      caseInsensitive ? "i" : "");
}

var ShareButton = React.createClass({
  render: function() {
    return (
      <button type="button" className="btn btn-default btn-sm" data-toggle="modal" data-target={"#shareModal"+this.props.id}>
        <span className="glyphicon glyphicon-share-alt" aria-hidden="true"></span> Share
      </button>
    );
  }
});

var ShareModal = React.createClass({

  render: function() {
    return(
      <div className="modal fade" id={"shareModal"+this.props.id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Share this sermon</h4>
            </div>
            <div className="modal-body">
              <p>The link for the sermon you want to share is:</p>
              <div className="well"><a href={"http://www.saintfieldbaptist.org.uk/sermons.html#"+this.props.id}>www.saintfieldbaptist.org.uk/sermons.html#{this.props.id}</a></div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

});

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
        <div className="btn-group" role="group">
          <a href={this.state.url} className="btn btn-default btn-sm">
            <span className="glyphicon glyphicon-download" aria-hidden="true"></span> Download
          </a>
          <ShareButton id={this.props.id}/>
          <ShareModal id={this.props.id}/>
        </div>
      );
    } else if(this.state.play) {
      return (
        <div>
          <a href={this.state.url} className="btn btn-default btn-sm">
            <span className="glyphicon glyphicon-download" aria-hidden="true"></span> Download
          </a>
          <ShareButton id={this.props.id}/>
          <ShareModal id={this.props.id}/>
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
          <ShareButton id={this.props.id}/>
          <ShareModal id={this.props.id}/>
        </div>
      );
    }

  }
});
