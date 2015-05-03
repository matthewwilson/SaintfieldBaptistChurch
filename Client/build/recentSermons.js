function getMonthFromString(mon){

   var d = Date.parse(mon + "1, 2012");
   if(!isNaN(d)){
      return new Date(d).getMonth() + 1;
   }
   return -1;
 }

var NewsBlockRow = React.createClass({displayName: "NewsBlockRow",
  getInitialState: function() {

    var dateParts = this.props.date.split(" ");
    var day = dateParts[0].replace(/\D/g,'');
    var month = getMonthFromString(dateParts[1]);
    var year = dateParts[2].substring(2,4);

    return {date: day+"."+month+"."+year};

  },
  render: function() {
    return (
      React.createElement("div", {className: "row news-block-row"}, 
        React.createElement("div", {className: "col-md-2"}, React.createElement("p", null, this.state.date)), 
        React.createElement("div", {className: "col-md-5"}, React.createElement("p", {className: "lead"}, this.props.speaker)), 
        React.createElement("div", {className: "col-md-5"}, 
          React.createElement(AudioPlayer, {url: this.props.downloadLink, id: this.props.sermonId})
        )
      )
    );
  }
});

var NewsBlock = React.createClass({displayName: "NewsBlock",
  getInitialState: function() {
    return {
      url: this.props.url,
      data: []
    };
  },
  getSermons: function(count) {

    var sermonUrl = this.state.url + '?count=' +count;

    $.ajax({
      url: sermonUrl,
      dataType: 'json',
      success: function(data) {
        if(this.isMounted()) {
          this.setState({url: this.state.url, data: data});
        }
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount: function() {
    if(this.props.url) {
      $.ajax({
        url: "http://saintfieldbaptist.org.uk/php/GetSundaySpeakers.php",
        dataType: 'json',
        success: function(data) {
          if(this.isMounted()) {
            this.getSermons(data.length);
          }
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
            React.createElement(NewsBlockRow, {date: sermon.day + " " +sermon.month + " " + sermon.year, speaker: sermon.speaker, downloadLink: sermon.downloadLink, key: sermon.downloadLink, sermonId: sermon.id})
          );
    });

    return (
      React.createElement("div", {className: "news-block"}, 
        React.createElement("div", {className: "news-block-heading"}, React.createElement("h3", null, "Recent Sermons")), 
        React.createElement("div", {className: "news-block-body"}, 
          sermons
        )
      )
    );
  }
});

React.render(
  React.createElement(NewsBlock, {url: "http://saintfieldbaptist.org.uk/php/GetMostRecentSermons.php"}),
  document.getElementById('recent-sermons')
);
