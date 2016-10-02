var path = require('path')
var compression = require('compression');
var express = require('express');
var app = express();
app.use(compression());

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname,'web')));

app.listen(app.get('port'), function () {
  console.log('SBC started on port: '+app.get('port'));
});
