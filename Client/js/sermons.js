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

var SermonTable = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      initialResponseReceived:false
    };
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
          if(this.isMounted()) {
            this.setState({data: data, initialResponseReceived:true});
          }
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(url, status, err.toString());
        }.bind(this)
      });
    }
  },
  render: function() {

    if(this.state.data.length > 0) {
      var sermons = this.state.data.map(function(sermon) {
            return (
              <tr key={sermon.downloadLink+Math.random()}>
                <td>{sermon.day} {sermon.month} {sermon.year}</td>
                <td>{sermon.speaker}</td>
                <td className="hidden-xs">{sermon.bibleBook} {sermon.verses}</td>
                <td className="hidden-xs">{sermon.subject}</td>
                <td className="audioPlayer"><AudioPlayer url={sermon.downloadLink} id={sermon.id}/></td>
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
    } else if(this.props.url && this.state.initialResponseReceived) {
      return (
        <div className="alert alert-danger" role="alert">Sorry we have no sermons that match your search</div>
      );
    } else {
      return <div></div>
    }
  }
});

var SermonControl = React.createClass({
  getInitialState: function() {

    if(window.location.hash) {
      var hash = window.location.hash.substring(1);
      var idUrl = "http://saintfieldbaptist.org.uk/php/GetSermons.php?id="+hash;

      return {
        url : idUrl,
        searchData : [],
        searchOption : "",
        specificSermon : true
      }

    } else {
      return {
        url : "",
        searchData : [],
        searchOption : "",
        specificSermon : false
      }
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
          searchOption : selectedSearchOption,
          specificSermon : false
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
    } else if(optionType == 'books') {
      url = 'http://saintfieldbaptist.org.uk/php/GetSermons.php?book='+e.target.value;
    } else if(optionType == 'subjects') {
      url = 'http://saintfieldbaptist.org.uk/php/GetSermons.php?subject='+e.target.value;
    }

    if(url) {
      this.setState({
        url : url,
        searchData : this.state.searchData,
        searchOption : this.state.searchOption,
        specificSermon : false
      });
    }

  },
  render: function() {

    var buttons = (<div className="btn-group btn-group-justified sermon-buttons" role="group" aria-label="...">
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-default" onClick={this.buttonClicked.bind(this,'dates')}>Date</button>
      </div>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-default" onClick={this.buttonClicked.bind(this,'speakers')}>Speaker</button>
      </div>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-default" onClick={this.buttonClicked.bind(this,'books')}>Book</button>
      </div>
    </div>);

    if(this.state.specificSermon) {
      return (<div>
        <p className="lead">Select a search option by clicking one of the buttons below</p>
        {buttons}
        {searchOptions}
        <SermonTable url={this.state.url}/>
      </div>);
    } else if(this.state.searchOption) {

      var searchOptions;

      if(this.state.searchOption == 'dates')
      {
        var options = this.state.searchData.map(function(date) {
              return (
                <option key={date.month+' '+date.year} value={date.month+' '+date.year}>{date.month} {date.year}</option>
              );
        });

        searchOptions = (
            <select className="form-control sermon-select" onChange={this.optionSelected.bind(this, 'dates')}>
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
            <select className="form-control sermon-select" onChange={this.optionSelected.bind(this, 'speakers')}>
            <option value="">Please select a speaker...</option>
                {options}
            </select>
        );
      } else if(this.state.searchOption == 'books') {
        var options = this.state.searchData.map(function(book) {
              return (
                <option key={book.bibleBook} value={book.bibleBook}>{book.bibleBook}</option>
              );
        });

        searchOptions = (
            <select className="form-control sermon-select" onChange={this.optionSelected.bind(this, 'books')}>
            <option value="">Please select a book...</option>
                {options}
            </select>
        );
      } else if(this.state.searchOption == 'subjects') {
        var options = this.state.searchData.map(function(subject) {
              if(subject.subject) {
                return (
                  <option key={subject.subject} value={subject.subject}>{subject.subject}</option>
                );
              }
        });

        searchOptions = (
            <select className="form-control sermon-select" onChange={this.optionSelected.bind(this, 'subjects')}>
            <option value="">Please select a subject...</option>
                {options}
            </select>
        );
      }

      return (
        <div>
          <p className="lead">Select a search option by clicking one of the buttons below</p>
          {buttons}
          {searchOptions}
          <SermonTable url={this.state.url}/>
        </div>
      );

    } else {
      return (
        <div>
          <p className="lead">Select a search option by clicking one of the buttons below</p>
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
