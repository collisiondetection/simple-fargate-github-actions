const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello Daniel John Baker, feature 1 ');
});

app.listen(80, function () {
  console.log('App listening on port 80!');
});
