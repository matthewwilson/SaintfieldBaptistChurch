var Footer = React.createClass({
  render: function() {
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <img src="img/church_footer.png"></img>
          </div>
          <div className="col-md-3 footer-church-name">
            <h3>Follow Us</h3>
            <p><a href="https://twitter.com/SaintfieldBC">Twitter</a></p>
            <p><a href="https://www.facebook.com/pages/Saintfield-Baptist-Church/105178506183089?sk=wall">Facebook</a></p>
          </div>
          <div className="col-md-3 footer-church-name">
            <h3>Find Us</h3>
            <p>Saintfield Baptist Church</p>
            <p>51 Crossgar Road</p>
            <p>Saintfield</p>
          </div>
          <div className="col-md-3 footer-church-name">
            <h3>Fellowship with us</h3>
            <p>Sunday School - 10.30am</p>
            <p>Morning Meeting - 11.30am</p>
            <p>Gospel Meeting - 7.00pm</p>
          </div>
        </div>
        <p></p>
        <p className="footer-copyright">Saintfield Baptist Church © 2015. All Rights Reserved. <a href="https://github.com/matthewcodes/SaintfieldBaptistChurch">v1.0.0</a></p>
      </div>
    );
  }
});

React.render(
  <Footer/>,
  document.getElementById('footer')
);
