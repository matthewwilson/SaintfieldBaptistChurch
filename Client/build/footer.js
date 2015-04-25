var Footer = React.createClass({displayName: "Footer",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-md-3"}, 
            React.createElement("img", {src: "img/church_footer.png"})
          ), 
          React.createElement("div", {className: "col-md-3 footer-church-name"}, 
            React.createElement("h3", null, "Follow Us"), 
            React.createElement("p", null, React.createElement("a", {href: "https://twitter.com/SaintfieldBC"}, "Twitter")), 
            React.createElement("p", null, React.createElement("a", {href: "https://www.facebook.com/pages/Saintfield-Baptist-Church/105178506183089?sk=wall"}, "Facebook"))
          ), 
          React.createElement("div", {className: "col-md-3 footer-church-name"}, 
            React.createElement("h3", null, "Find Us"), 
            React.createElement("p", null, "Saintfield Baptist Church"), 
            React.createElement("p", null, "51 Crossgar Road"), 
            React.createElement("p", null, "Saintfield")
          ), 
          React.createElement("div", {className: "col-md-3 footer-church-name"}, 
            React.createElement("h3", null, "Fellowship with us"), 
            React.createElement("p", null, "Sunday School - 10.30am"), 
            React.createElement("p", null, "Morning Meeting - 11.30am"), 
            React.createElement("p", null, "Gospel Meeting - 7.00pm")
          )
        ), 
        React.createElement("p", null), 
        React.createElement("p", {className: "footer-copyright"}, "Saintfield Baptist Church © 2015. All Rights Reserved. ", React.createElement("a", {href: "https://github.com/matthewcodes/SaintfieldBaptistChurch"}, "v1.0.1"))
      )
    );
  }
});

React.render(
  React.createElement(Footer, null),
  document.getElementById('footer')
);
