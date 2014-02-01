var path = require('path');
var jade = require('jade');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
  res.sendfile( path.join(__dirname, '../public/html/index.html'));
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
