// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
// EXPRESS \\
var app = express();
app.use(express.static(__dirname + '/public'));
// BODY PARSER \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// DEPENDENCIES \\
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/images', express.static(__dirname + "/images"));
// ROUTES \\
app.get('/', function(req, res){
  res.sendFile('/html/index.html', {root : './public'})
});
// SERVER \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
});