var NavigationHeader = React.createClass({
  render: function() {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navigation-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img alt="SBC" src="img/church_icon.png"></img>
        </a>
      </div>
    );
  }
});

var NavigationItem = React.createClass({
  render: function() {
    if(this.props.active == 'true') {
      return (<li className="active"><a href="#">{this.props.name} <span className="sr-only">(current)</span></a></li>)
    } else {
      return (<li><a href="#">{this.props.name}</a></li>);
    }
  }
});

var NavigationItems = React.createClass({
  render: function() {
    return (
      <div className="collapse navbar-collapse" id="navigation-collapse">
        <ul className="nav navbar-nav">
          <NavigationItem name="Home" active="true"/>
          <NavigationItem name="About"/>
          <NavigationItem name="Announcements"/>
          <NavigationItem name="Watch Live"/>
          <NavigationItem name="Downloads"/>
        </ul>
      </div>
    );
  }
});


var Navigation = React.createClass({
  render: function() {
    return (
        <div className="container">
          <NavigationHeader/>
          <NavigationItems/>
        </div>
    );
  }
});
