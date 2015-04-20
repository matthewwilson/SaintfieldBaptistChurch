function makeSuffixRegExp(suffix, caseInsensitive) {
  return new RegExp(
      String(suffix).replace(/[$%()*+.?\[\\\]{|}]/g, "\\$&") + "$",
      caseInsensitive ? "i" : "");
}

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
        React.createElement("a", {href: this.state.url, className: "btn btn-default btn-sm"}, 
          React.createElement("span", {className: "glyphicon glyphicon-download", "aria-hidden": "true"}), " Download"
        )
      );
    } else if(this.state.play) {
      return (
        React.createElement("div", null, 
          React.createElement("a", {href: this.state.url, className: "btn btn-default btn-sm"}, 
            React.createElement("span", {className: "glyphicon glyphicon-download", "aria-hidden": "true"}), " Download"
          ), 
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
          )
        )
      );
    }

  }
});
