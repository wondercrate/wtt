var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema; 
var travelerSchema = mongoose.Schema({
	travelerFullName                     : {type: String},
	travelerFirstName                    : {type: String},
	travelerMiddleName                   : {type: String},
	travelerLastName                     : {type: String},
	travelerNickName                     : {type: String},
	travelerMobilePhone                  : {type: String},
	travelerHomePhone                    : {type: String},
	username                             : {type: String},
	travelerSecondaryEmail               : {type: String},
	password                             : {type: String},
	travelerGender                       : {type: String},
	travelerBirthdate                    : {type: String},
	travelerMailingAddress               : {type: String},
	travelerState                        : {type: String},
	travelerCity                         : {type: String},
	travelerZipCode                      : {type: String},
	travelerCountry                      : {type: String},
	travelerNonUsState                   : {type: String},
	travelerSchoolOrganization           : {type: String},
	travelerTshirtSize                   : {type: String},
	travelerDiscovery                    : {type: String},
	travelerReferralName                 : {type: String},
	travelerReferralEmail                : {type: String},
	travelerCanSwim                      : {type: String},
	travelerCanBike                      : {type: String},
	travelerInterests                    : {type: String},
	guardian1FullName                    : {type: String},
	guardian1PrimaryPhone                : {type: String},
	guardian1PrimaryEmail                : {type: String},
	guardian2FullName                    : {type: String}, 
	guardian2PrimaryPhone                : {type: String},
	guardian2PrimaryEmail                : {type: String},
	travelerLivingSituation              : {type: String},
	emergencyContactFullName             : {type: String},
	emergencyContactPrimaryPhone         : {type: String},
	emergencyContactPrimaryEmail         : {type: String},
	emergencyContactRelationship         : {type: String},
	travelerMedicalIssues                : {type: String},
	travelerDietaryRequirements          : {type: String},
	travelerPassportFullName             : {type: String},
	travelerPassportNumber               : {type: String},
	travelerPassportExirationDate        : {type: String},
	travelerPassportDateOfIssue          : {type: String},
	travelerPassportCountryOfIssue       : {type: String},
	travelerProgramType                  : {type: String},
	travelerTeacherEmail                 : {type: String},
	travelerSchool                       : {type: String},
	travelerProgramDestinationCountry    : {type: String},
	travelerProgramSelection             : [{
		name  : {type: String},
		price : {type: String}
	}],
	travelerPromoCode                    : {type: String}, 
	travelerAmountDue                    : {type: String}

});
travelerSchema.pre('save', function(next) {
	if(!this.isModified('password')) return next();
	var traveler = this;
	bcrypt.genSalt(10, function(err, salt) {
		if(err) return next(err);
		bcrypt.hash(traveler.password, salt, function(err, hash) {
			if(err) return next(err);
			traveler.password = hash;
			return next();
		});
	});
});
travelerSchema.methods.comparePassword = function(candidatePassword, next) {
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
		if(err) return next(err);
		return next(null, isMatch);
	});
};
var Traveler = mongoose.model('traveler', travelerSchema);
module.exports = Traveler;











