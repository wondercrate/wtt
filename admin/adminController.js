var passport = require('passport');
var Admin = require('./adminModel');
var performLogin = function(req, res, next, admin) {
	req.login(admin, function(err) {
		if(err) return next(err);
		return res.redirect('/admin');
	});
};
var adminController = { 
	login: function(req, res) {
		res.sendFile('/html/wtt.html', {root: './public'});
	},
	processLogin: function(req, res, next) {
		var authFunction = passport.authenticate('local', function(err, admin, info) {
			if(err) return next(err);
			if(!admin) {
				return res.send({error: 'Error logging in. Please try again.'});
			}
			performLogin(req, res, next, admin);
		});
		authFunction(req, res, next);
	},
	processSignup: function(req, res, next) {
		var admin = new Admin({
			username : req.body.username,
			password : req.body.password	
		});
		admin.save(function(err, admin) {
			if(err) {
				if(err.code === 11000) {
					return res.send({error: 'This user already exists. Please try again.'})
				}
				else {
					return res.send({error: 'An error occured, please try again.'})
				}
			}
			performLogin(req, res, next, admin);
		});
	},
};
module.exports = adminController;
























