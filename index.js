var compression = require('compression');
var express = require('express');
var app = express();
app.use(compression());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
