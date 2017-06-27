// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
// EXPRESS \\
var app = express();
app.use(express.static(__dirname + '/public'));
// CONNNECT TO DB \\
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wtt');
// CONTROLLERS \\
var passportConfig = require('./travelerConfig/passport');
var authenticationController = require('./controllers/authController');
// BODY PARSER \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// SESSION SETUP \\
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// DEPENDENCIES \\
app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use('/images', express.static(__dirname + "/images"));
// TRAVELER AUTHENTICATION ROUTES \\
app.get('/welcome/', authenticationController.login);
app.post('/welcome/', authenticationController.processLogin);
app.post('/signup/', authenticationController.processSignup);
// TRAVELER ROUTE \\
app.get('/api/me', function(req, res){
	res.send(req.traveler)
});
// PORTAL ROUTE \\
app.use(passportConfig.ensureAuthenticated);
app.get('/', function(req, res){
  res.sendFile('/html/traveler.html', {root : './public'})
});
// SERVER \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);
});













