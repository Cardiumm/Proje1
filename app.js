var express = require('express');
var app = express();

app.get('/neco', function (req, res) {
  res.send('Hello World!');
});
app.get('/', function (req, res) {
  res.send('Hallo');
});
app.listen(80, function () {
  console.log('Example app listening on port 80!');
});
