var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Traveler = require('../models/traveler');
passport.serializeUser(function(traveler, done) {
	done(null, traveler.id);
});
passport.deserializeUser(function(id, done) {
	Traveler.findById(id, function(err, traveler) {
		done(err, traveler);
	});
}); 
var localStrategy = new LocalStrategy(function(username, password, done) {
	Traveler.findOne({username: username}, function(err, traveler) {
		if(err) return done(err);
		if(!traveler) return done(null, false);
		traveler.comparePassword(password, function(err, isMatch) {
			if(err) return done(err);
			if(isMatch) {
				return done(err, traveler);
			}
			else {
				return done(null, false);
			}
		});
	});
});
passport.use(localStrategy);
module.exports = {
	ensureAuthenticated: function(req, res, next) {
		if(req.isAuthenticated()) {
			return next();
		}
		res.redirect('/welcome/');
	}
};