var Navigation = React.createClass({
  render: function() {
    return (
        <div className="container">
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

          <div className="collapse navbar-collapse" id="navigation-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Announcements</a></li>
              <li><a href="#">Watch Live</a></li>
              <li><a href="#">Downloads</a></li>
            </ul>
          </div>
        </div>
    );
  }
});
