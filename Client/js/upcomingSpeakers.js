function getMonthFromString(mon){

   var d = Date.parse(mon + "1, 2012");
   if(!isNaN(d)){
      return new Date(d).getMonth() + 1;
   }
   return -1;
 }

var SundayNewsBlockRow = React.createClass({
  getInitialState: function() {

    var dateParts = this.props.date.split(" ");
    var day = dateParts[0].replace(/\D/g,'');
    var month = getMonthFromString(dateParts[1]);

    return {date: day+"."+month+".16"};

  },
  render: function() {

    if(this.props.speaker == this.props.eveningSpeaker) {
      return (
        <div className="row news-block-row">
          <div className="col-md-3"><p>{this.state.date}</p></div>
          <div className="col-md-9"><p className="lead">{this.props.speaker}</p></div>
        </div>
      );
    } else {
      return (
        <div className="row news-block-row">
          <div className="col-md-3"><p>{this.state.date}</p></div>
          <div className="col-md-9"><p className="lead">AM:{this.props.speaker} <br></br> PM:{this.props.eveningSpeaker}</p></div>
        </div>
      );
    }
  }
});

var SundayNewsBlock = React.createClass({
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
            <SundayNewsBlockRow date={sundayMeeting.date} speaker={sundayMeeting.morning} eveningSpeaker={sundayMeeting.evening}/>
          );
    });

    return (
      <div className="news-block">
        <div className="news-block-heading"><h3>Upcoming Speakers</h3></div>
        <div className="news-block-body">
          {speakers}
        </div>
      </div>
    );
  }
});

React.render(
  <SundayNewsBlock url="http://saintfieldbaptist.org.uk/php/GetSundaySpeakers.php"/>,
  document.getElementById('sunday-speakers')
);
