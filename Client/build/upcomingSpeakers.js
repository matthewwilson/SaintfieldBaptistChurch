function getMonthFromString(mon){

   var d = Date.parse(mon + "1, 2012");
   if(!isNaN(d)){
      return new Date(d).getMonth() + 1;
   }
   return -1;
 }

var SundayNewsBlockRow = React.createClass({displayName: "SundayNewsBlockRow",
  getInitialState: function() {

    var dateParts = this.props.date.split(" ");
    var day = dateParts[0].replace(/\D/g,'');
    var month = getMonthFromString(dateParts[1]);

    return {date: day+"."+month+".16"};

  },
  render: function() {

    if(this.props.speaker == this.props.eveningSpeaker) {
      return (
        React.createElement("div", {className: "row news-block-row"}, 
          React.createElement("div", {className: "col-md-3"}, React.createElement("p", null, this.state.date)), 
          React.createElement("div", {className: "col-md-9"}, React.createElement("p", {className: "lead"}, this.props.speaker))
        )
      );
    } else {
      return (
        React.createElement("div", {className: "row news-block-row"}, 
          React.createElement("div", {className: "col-md-3"}, React.createElement("p", null, this.state.date)), 
          React.createElement("div", {className: "col-md-9"}, React.createElement("p", {className: "lead"}, "AM:", this.props.speaker, " ", React.createElement("br", null), " PM:", this.props.eveningSpeaker))
        )
      );
    }
  }
});

var SundayNewsBlock = React.createClass({displayName: "SundayNewsBlock",
  getInitialState: function() {
    return {
      data: []
    };
  },
  componentDidMount: function() {
    if(this.props.url) {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        success: function(data) {
          if(this.isMounted()) {
            this.setState({data: data});
          }
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(url, status, err.toString());
        }.bind(this)
      });
    }
  },
  render: function() {

    var speakers = this.state.data.map(function(sundayMeeting) {
          return (
            React.createElement(SundayNewsBlockRow, {date: sundayMeeting.date, speaker: sundayMeeting.morning, eveningSpeaker: sundayMeeting.evening})
          );
    });

    return (
      React.createElement("div", {className: "news-block"}, 
        React.createElement("div", {className: "news-block-heading"}, React.createElement("h3", null, "Upcoming Speakers")), 
        React.createElement("div", {className: "news-block-body"}, 
          speakers
        )
      )
    );
  }
});

React.render(
  React.createElement(SundayNewsBlock, {url: "http://saintfieldbaptist.org.uk/php/GetSundaySpeakers.php"}),
  document.getElementById('sunday-speakers')
);
