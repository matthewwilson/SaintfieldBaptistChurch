function makeSuffixRegExp(suffix, caseInsensitive) {
  return new RegExp(
      String(suffix).replace(/[$%()*+.?\[\\\]{|}]/g, "\\$&") + "$",
      caseInsensitive ? "i" : "");
}

var ShareButton = React.createClass({displayName: "ShareButton",
  render: function() {
    return (
      React.createElement("button", {type: "button", className: "btn btn-default btn-sm", "data-toggle": "modal", "data-target": "#shareModal"+this.props.id}, 
        React.createElement("span", {className: "glyphicon glyphicon-share-alt", "aria-hidden": "true"}), " Share"
      )
    );
  }
});

var ShareModal = React.createClass({displayName: "ShareModal",

  render: function() {
    return(
      React.createElement("div", {className: "modal fade", id: "shareModal"+this.props.id, tabindex: "-1", role: "dialog", "aria-labelledby": "myModalLabel", "aria-hidden": "true"}, 
        React.createElement("div", {className: "modal-dialog"}, 
          React.createElement("div", {className: "modal-content"}, 
            React.createElement("div", {className: "modal-header"}, 
              React.createElement("button", {type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close"}, React.createElement("span", {"aria-hidden": "true"}, "×")), 
              React.createElement("h4", {className: "modal-title", id: "myModalLabel"}, "Share this sermon")
            ), 
            React.createElement("div", {className: "modal-body"}, 
              React.createElement("p", null, "The link for the sermon you want to share is:"), 
              React.createElement("div", {className: "well"}, React.createElement("a", {href: "http://www.saintfieldbaptist.org.uk/sermons.html#"+this.props.id}, "www.saintfieldbaptist.org.uk/sermons.html#", this.props.id))
            ), 
            React.createElement("div", {className: "modal-footer"}, 
              React.createElement("button", {type: "button", className: "btn btn-default", "data-dismiss": "modal"}, "Close")
            )
          )
        )
      )
    );
  }

});

var AudioPlayer = React.createClass({displayName: "AudioPlayer",
  getInitialState: function() {
    return {
      url : this.props.url,
      play : false,
      downloadOnly : false
    };
  },
  componentDidMount: function() {
    $.ajax({
      url: 'http://saintfieldbaptist.org.uk/php/ExpandSermonLink.php?link='+this.props.url,
      dataType: 'json',
      success: function(data) {

        if(this.isMounted()) {
          var expandedUrl = data.expandedUrl;

          if(!makeSuffixRegExp(".mp3").test(expandedUrl))
          {
            this.setState({url: this.state.url, play : this.state.play, downloadOnly : true});
          }
        }

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  listenClicked : function() {
    this.setState({url: this.state.url, play: true, downloadOnly : this.state.downloadOnly});
  },
  render: function() {

    if(this.state.downloadOnly)
    {
      return (
        React.createElement("div", {className: "btn-group", role: "group"}, 
          React.createElement("a", {href: this.state.url, className: "btn btn-default btn-sm"}, 
            React.createElement("span", {className: "glyphicon glyphicon-download", "aria-hidden": "true"}), " Download"
          ), 
          React.createElement(ShareButton, {id: this.props.id}), 
          React.createElement(ShareModal, {id: this.props.id})
        )
      );
    } else if(this.state.play) {
      return (
        React.createElement("div", null, 
          React.createElement("a", {href: this.state.url, className: "btn btn-default btn-sm"}, 
            React.createElement("span", {className: "glyphicon glyphicon-download", "aria-hidden": "true"}), " Download"
          ), 
          React.createElement(ShareButton, {id: this.props.id}), 
          React.createElement(ShareModal, {id: this.props.id}), 
          React.createElement("audio", {controls: true, className: "audio"}, 
            React.createElement("source", {src: this.state.url, type: "audio/mpeg"}), 
            "Your browser does not support the audio element."
          )
        )
      );
    } else {
      return (
        React.createElement("div", {className: "btn-group", role: "group"}, 
          React.createElement("a", {href: this.state.url, className: "btn btn-default btn-sm"}, 
            React.createElement("span", {className: "glyphicon glyphicon-download", "aria-hidden": "true"}), " Download"
          ), 
          React.createElement("button", {type: "button", className: "btn btn-default btn-sm", onClick: this.listenClicked}, 
            React.createElement("span", {className: "glyphicon glyphicon-headphones", "aria-hidden": "true"}), " Listen"
          ), 
          React.createElement(ShareButton, {id: this.props.id}), 
          React.createElement(ShareModal, {id: this.props.id})
        )
      );
    }

  }
});
