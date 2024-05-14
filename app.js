const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello Daniel John Baker!!');
});

app.listen(80, function () {
  console.log('App listening on port 80!');
});
