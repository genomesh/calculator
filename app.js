
var express = require('express');
var path = require('path');

var app = express();

// app.get('/service/games', function (req, res) {
//    res.send(['game1', 'tim vs joe', 'slimebusters']);
// });

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
  console.log('Running calculator web service on port 3000!');
});
