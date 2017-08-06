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
/*
var passportConfig = require('./travelerConfig/passport');
var authenticationController = require('./controllers/authController');
*/
var adminConfig = require('./admin/adminConfig');
var adminController = require('./admin/adminController');
var programController = require('./programs/programController');
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
app.get('/wtt/', adminController.login);
app.post('/wtt/', adminController.processLogin);
app.post('/wtt/signup', adminController.processSignup);
app.get('/api/programs/getPrograms', programController.getPrograms);
app.use(adminConfig.ensureAuthenticated);
app.get('/admin', function(req, res){
  res.sendFile('/html/admin.html', {root : './public'})
});
app.get('/api/me', function(req, res){
	res.send(req.admin)
});
app.get('/api/programs/getPrograms', programController.getPrograms);
app.post('/api/programs/addProgram', programController.addProgram);
app.delete('/api/programs/deleteProgram/:id', programController.deleteProgram);
app.post('/api/programs/updateProgram', programController.updateProgram);
// admin ROUTE \\
// SERVER \\

var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log('Server running on port ' + port);
});













