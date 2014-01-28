var path = require('path');
var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.sendfile( path.join(__dirname, '../index.html') );
});

app.listen(3000);
console.log('Listening on port 3000');
