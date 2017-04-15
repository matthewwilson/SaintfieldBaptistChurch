var NavigationHeader = React.createClass({displayName: "NavigationHeader",
  render: function() {
    return (
      React.createElement("div", {className: "navbar-header"},
        React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navigation-collapse"},
          React.createElement("span", {className: "sr-only"}, "Toggle navigation"),
          React.createElement("span", {className: "icon-bar"}),
          React.createElement("span", {className: "icon-bar"}),
          React.createElement("span", {className: "icon-bar"})
        ),
        React.createElement("a", {className: "navbar-brand", href: "index.html"},
          React.createElement("img", {alt: "SBC", src: "img/church_icon.png"})
        )
      )
    );
  }
});

var NavigationItem = React.createClass({displayName: "NavigationItem",
  render: function() {
    if(this.props.currentPage == this.props.name) {
      return (React.createElement("li", {className: "active"}, React.createElement("a", {href: this.props.link}, this.props.name, " ", React.createElement("span", {className: "sr-only"}, "(current)"))))
    } else if(this.props.target){
      return (React.createElement("li", null, React.createElement("a", {href: this.props.link, target: this.props.target}, this.props.name)));
    } else {
      return (React.createElement("li", null, React.createElement("a", {href: this.props.link}, this.props.name)));
    }
  }
});

var NavigationItems = React.createClass({displayName: "NavigationItems",
  render: function() {
    return (
      React.createElement("div", {className: "collapse navbar-collapse", id: "navigation-collapse"},
        React.createElement("ul", {className: "nav navbar-nav"},
          React.createElement(NavigationItem, {name: "Home", currentPage: this.props.currentPage, link: "index.html"}),
          React.createElement(NavigationItem, {name: "About", currentPage: this.props.currentPage, link: "about.html"}),
          React.createElement(NavigationItem, {name: "Weekly Meetings", currentPage: this.props.currentPage, link: "meetings.html"}),
          React.createElement(NavigationItem, {name: "Church Bulletin", currentPage: this.props.currentPage, link: "bulletin/bulletin.pdf", target: "_blank"}),
          React.createElement(NavigationItem, {name: "Watch Live", currentPage: this.props.currentPage, link: "live.html"}),
          React.createElement(NavigationItem, {name: "Sermon Downloads", currentPage: this.props.currentPage, link: "sermons.html"}),
          React.createElement(NavigationItem, {name: "Sports 4 Christ", currentPage: this.props.currentPage, link: "sportsweek.html"}), 
          React.createElement(NavigationItem, {name: "Contact Us", currentPage: this.props.currentPage, link: "contact.html"})
        )
      )
    );
  }
});

var Navigation = React.createClass({displayName: "Navigation",
  render: function() {
    return (
        React.createElement("div", {className: "container"},
          React.createElement(NavigationHeader, null),
          React.createElement(NavigationItems, {currentPage: this.props.currentPage})
        )
    );
  }
});
