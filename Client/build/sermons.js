var SermonHeaders = React.createClass({displayName: "SermonHeaders",
  render: function() {
    return (
        React.createElement("tr", null, 
          React.createElement("th", null, "Date"), 
          React.createElement("th", null, "Speaker"), 
          React.createElement("th", {className: "hidden-xs"}, "Reading"), 
          React.createElement("th", {className: "hidden-xs"}, "Subject"), 
          React.createElement("th", null, "Options")
        )
    );
  }
});

var SermonTable = React.createClass({displayName: "SermonTable",
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
              React.createElement("tr", {key: sermon.downloadLink+Math.random()}, 
                React.createElement("td", null, sermon.day, " ", sermon.month, " ", sermon.year), 
                React.createElement("td", null, sermon.speaker), 
                React.createElement("td", {className: "hidden-xs"}, sermon.bibleBook, " ", sermon.verses), 
                React.createElement("td", {className: "hidden-xs"}, sermon.subject), 
                React.createElement("td", {className: "audioPlayer"}, React.createElement(AudioPlayer, {url: sermon.downloadLink}))
              )
            );
      });

      return (
        React.createElement("div", {className: "table-responsive"}, 
          React.createElement("table", {className: "table table-striped table-condensed"}, 
            React.createElement("tbody", null, 
              React.createElement(SermonHeaders, null), 
              sermons
            )
          )
        )
      );
    } else if(this.props.url && this.state.initialResponseReceived) {
      return (
        React.createElement("div", {className: "alert alert-danger", role: "alert"}, "Sorry we have no sermons that match your search")
      );
    } else {
      return React.createElement("div", null)
    }
  }
});

var SermonControl = React.createClass({displayName: "SermonControl",
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
    } else if(optionType == 'books') {
      url = 'http://saintfieldbaptist.org.uk/php/GetSermons.php?book='+e.target.value;
    } else if(optionType == 'subjects') {
      url = 'http://saintfieldbaptist.org.uk/php/GetSermons.php?subject='+e.target.value;
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

    var buttons = (React.createElement("div", {className: "btn-group btn-group-justified sermon-buttons", role: "group", "aria-label": "..."}, 
      React.createElement("div", {className: "btn-group", role: "group"}, 
        React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.buttonClicked.bind(this,'dates')}, "Date")
      ), 
      React.createElement("div", {className: "btn-group", role: "group"}, 
        React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.buttonClicked.bind(this,'speakers')}, "Speaker")
      ), 
      React.createElement("div", {className: "btn-group", role: "group"}, 
        React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.buttonClicked.bind(this,'books')}, "Book")
      ), 
      React.createElement("div", {className: "btn-group", role: "group"}, 
        React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.buttonClicked.bind(this,'subjects')}, "Subject")
      )
    ));

    if(this.state.searchOption) {

      var searchOptions;

      if(this.state.searchOption == 'dates')
      {
        var options = this.state.searchData.map(function(date) {
              return (
                React.createElement("option", {key: date.month+' '+date.year, value: date.month+' '+date.year}, date.month, " ", date.year)
              );
        });

        searchOptions = (
            React.createElement("select", {className: "form-control sermon-select", onChange: this.optionSelected.bind(this, 'dates')}, 
            React.createElement("option", {value: ""}, "Please select a date..."), 
                options
            )
        );
      } else if(this.state.searchOption == 'speakers') {
        var options = this.state.searchData.map(function(speaker) {
              return (
                React.createElement("option", {key: speaker.speaker, value: speaker.speaker}, speaker.speaker)
              );
        });

        searchOptions = (
            React.createElement("select", {className: "form-control sermon-select", onChange: this.optionSelected.bind(this, 'speakers')}, 
            React.createElement("option", {value: ""}, "Please select a speaker..."), 
                options
            )
        );
      } else if(this.state.searchOption == 'books') {
        var options = this.state.searchData.map(function(book) {
              return (
                React.createElement("option", {key: book.bibleBook, value: book.bibleBook}, book.bibleBook)
              );
        });

        searchOptions = (
            React.createElement("select", {className: "form-control sermon-select", onChange: this.optionSelected.bind(this, 'books')}, 
            React.createElement("option", {value: ""}, "Please select a book..."), 
                options
            )
        );
      } else if(this.state.searchOption == 'subjects') {
        var options = this.state.searchData.map(function(subject) {
              if(subject.subject) {
                return (
                  React.createElement("option", {key: subject.subject, value: subject.subject}, subject.subject)
                );
              }
        });

        searchOptions = (
            React.createElement("select", {className: "form-control sermon-select", onChange: this.optionSelected.bind(this, 'subjects')}, 
            React.createElement("option", {value: ""}, "Please select a subject..."), 
                options
            )
        );
      }

      return (
        React.createElement("div", null, 
          React.createElement("p", {className: "lead"}, "Select a search option by clicking one of the buttons below"), 
          buttons, 
          searchOptions, 
          React.createElement(SermonTable, {url: this.state.url})
        )
      );

    } else {
      return (
        React.createElement("div", null, 
          React.createElement("p", {className: "lead"}, "Select a search option by clicking one of the buttons below"), 
          buttons
        )
      );
    }


  }
});

React.render(
  React.createElement(SermonControl, null),
  document.getElementById('sermons')
);
