var SermonHeaders = React.createClass({
  render: function() {
    return (
        <tr>
          <th>Date</th>
          <th>Speaker</th>
          <th className="hidden-xs">Reading</th>
          <th className="hidden-xs">Subject</th>
          <th>Options</th>
        </tr>
    );
  }
});

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
        var expandedUrl = data.expandedUrl;

        if(!makeSuffixRegExp(".mp3").test(expandedUrl))
        {
          this.setState({url: this.state.url, play : this.state.play, downloadOnly : true});
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
              <td className="hidden-xs">{sermon.bibleBook} {sermon.verses}</td>
              <td className="hidden-xs">{sermon.subject}</td>
              <td className="audioPlayer"><AudioPlayer url={sermon.downloadLink}/></td>
            </tr>
          );
    });

    return (
      <div className="table-responsive">
        <table className="table table-striped table-condensed">
          <tbody>
            <SermonHeaders/>
            {sermons}
          </tbody>
        </table>
      </div>
    );
  }
});

React.render(
  <SermonTable url="http://saintfieldbaptist.org.uk/php/GetSermons.php"/>,
  document.getElementById('sermons')
);
