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
    this.updateSermonTable(this.props.url);
  },
  componentWillReceiveProps : function(nextProps) {
    this.updateSermonTable(nextProps.url);
  },
  updateSermonTable : function(url) {

    if(url) {
      $.ajax({
        url: url,
        dataType: 'json',
        success: function(data) {
          this.setState({data: data});
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(url, status, err.toString());
        }.bind(this)
      });
    }
  },
  render: function() {

    var sermons = this.state.data.map(function(sermon) {
          return (
            <tr key={sermon.downloadLink}>
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

var SermonControl = React.createClass({
  getInitialState: function() {
    return {
      url : "",
      searchData : [],
      searchOption : ""
    }
  },
  buttonClicked: function(selectedSearchOption) {
    $.ajax({
      url: "http://saintfieldbaptist.org.uk/php/GetSermons.php?available="+selectedSearchOption,
      dataType: 'json',
      success: function(data) {
        this.setState({
          url : this.state.url,
          searchData : data,
          searchOption : selectedSearchOption
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  optionSelected: function(optionType, e) {
    var url;

    if(optionType == 'dates') {

      var dateParts = e.target.value.split(" ");
      url = 'http://saintfieldbaptist.org.uk/php/GetSermons.php?month='+dateParts[0]+'&year='+dateParts[1];

    } else if(optionType == 'speakers') {
      url = 'http://saintfieldbaptist.org.uk/php/GetSermons.php?speaker='+e.target.value;
    }

    if(url) {
      this.setState({
        url : url,
        searchData : this.state.searchData,
        searchOption : this.state.searchOption
      });
    }

  },
  render: function() {

    var buttons = (<div className="btn-group btn-group-justified" role="group" aria-label="...">
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-default" onClick={this.buttonClicked.bind(this,'dates')}>Date</button>
      </div>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-default" onClick={this.buttonClicked.bind(this,'speakers')}>Speaker</button>
      </div>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-default" onClick={this.buttonClicked}>Book</button>
      </div>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-default" onClick={this.buttonClicked}>Subject</button>
      </div>
    </div>);

    if(this.state.searchOption) {

      var searchOptions;

      if(this.state.searchOption == 'dates')
      {
        var options = this.state.searchData.map(function(date) {
              return (
                <option key={date.month+' '+date.year} value={date.month+' '+date.year}>{date.month} {date.year}</option>
              );
        });

        searchOptions = (
            <select className="form-control" onChange={this.optionSelected.bind(this, 'dates')}>
            <option value="">Please select a date...</option>
                {options}
            </select>
        );
      } else if(this.state.searchOption == 'speakers') {
        var options = this.state.searchData.map(function(speaker) {
              return (
                <option key={speaker.speaker} value={speaker.speaker}>{speaker.speaker}</option>
              );
        });

        searchOptions = (
            <select className="form-control" onChange={this.optionSelected.bind(this, 'speakers')}>
            <option value="">Please select a speaker...</option>
                {options}
            </select>
        );
      }

      return (
        <div>
          <p>Select your search option by clicking one of the buttons below</p>
          {buttons}
          {searchOptions}
          <SermonTable url={this.state.url}/>
        </div>
      );

    } else {
      return (
        <div>
          <p>Select your search option by clicking one of the buttons below</p>
          {buttons}
        </div>
      );
    }


  }
});

React.render(
  <SermonControl/>,
  document.getElementById('sermons')
);
