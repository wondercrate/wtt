var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema; 
var adminSchema = mongoose.Schema({
	username	: {type: String},
	password    : {type: String}
});
adminSchema.pre('save', function(next) {
	if(!this.isModified('password')) return next();
	var admin = this;
	bcrypt.genSalt(10, function(err, salt) {
		if(err) return next(err);
		bcrypt.hash(admin.password, salt, function(err, hash) {
			if(err) return next(err);
			admin.password = hash;
			return next();
		});
	});
});
adminSchema.methods.comparePassword = function(candidatePassword, next) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if(err) return next(err);
		return next(null, isMatch);
	});
};
var Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;











