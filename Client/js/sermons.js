var SermonHeaders = React.createClass({
  render: function() {
    return (
        <tr>
          <th>Date</th>
          <th>Speaker</th>
          <th>Reading</th>
          <th>Subject</th>
          <th>Type</th>
          <th>Download Link</th>
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
          <span className="glyphicon glyphicon-headphones" aria-hidden="true"></span> Download
        </a>
      );
    } else if(this.state.play) {
      return (
        <audio controls>
          <source src={this.state.url} type="audio/mpeg"></source>
          Your browser does not support the audio element.
        </audio>
      );
    } else {
      return (
        <button type="button" className="btn btn-default btn-sm" onClick={this.listenClicked}>
          <span className="glyphicon glyphicon-headphones" aria-hidden="true"></span> Listen
        </button>
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
              <td>{sermon.bibleBook} {sermon.verses}</td>
              <td>{sermon.subject}</td>
              <td>{sermon.type}</td>
              <td><AudioPlayer url={sermon.downloadLink}/></td>
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
