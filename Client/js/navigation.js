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
    if(this.props.currentPage == this.props.name) {
      return (<li className="active"><a href={this.props.link}>{this.props.name} <span className="sr-only">(current)</span></a></li>)
    } else {
      return (<li><a href={this.props.link}>{this.props.name}</a></li>);
    }
  }
});

var NavigationItems = React.createClass({
  render: function() {
    return (
      <div className="collapse navbar-collapse" id="navigation-collapse">
        <ul className="nav navbar-nav">
          <NavigationItem name="Home" currentPage={this.props.currentPage} link="index.html"/>
          <NavigationItem name="About" currentPage={this.props.currentPage} link="index.html"/>
          <NavigationItem name="Announcements" currentPage={this.props.currentPage} link="index.html"/>
          <NavigationItem name="Watch Live" currentPage={this.props.currentPage} link="index.html"/>
          <NavigationItem name="Sermon Downloads" currentPage={this.props.currentPage} link="sermons.html"/>
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
          <NavigationItems currentPage={this.props.currentPage}/>
        </div>
    );
  }
});
