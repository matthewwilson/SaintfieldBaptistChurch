var path = require('path')
var compression = require('compression');
var express = require('express');
var app = express();
var mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(compression());

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname,'web')));

app.get('/', function(req,res) {
  res.render('index', {
    "title": 'Saintfield Baptist Church',
    "slides": [
      {
        "type":"GOSPEL SERIES",
        "title":"SAVIOUR'S SHADOW",
        "subtitle":"Christ in Isaiah 53",
        "url":"#",
        "imageUrl":"img/slides/isaiah.jpg"
      },
      {
        "type":"CURRENT BIBLE STUDY",
        "title":"A FAITH THAT WORKS",
        "subtitle":"A study of James' Epistle",
        "url":"#",
        "imageUrl":"img/slides/james.jpg"
      },
      {
        "type":"SUNDAY SERIES",
        "title":"JOURNEYING<br>WITH JOSEPH",
        "url":"#",
        "imageUrl":"img/slides/joseph.jpg"
      }
    ],
    "aboutText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "visionText":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  });
});

app.listen(app.get('port'), function () {
  console.log('SBC started on port: '+app.get('port'));
});
