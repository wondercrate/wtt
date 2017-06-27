var passport = require('passport');
var Traveler = require('../models/traveler');
var performLogin = function(req, res, next, traveler) {
	req.login(traveler, function(err) {
		if(err) return next(err);
		return res.redirect('/');
	});
};
var authenticationController = { 
	login: function(req, res) {
		res.sendFile('/html/index.html', {root: './public'});
	},
	processLogin: function(req, res, next) {
		var authFunction = passport.authenticate('local', function(err, traveler, info) {
			if(err) return next(err);
			if(!traveler) {
				return res.send({error: 'Error logging in. Please try again.'});
			}
			performLogin(req, res, next, traveler);
		});
		authFunction(req, res, next);
	},
	processSignup: function(req, res, next) {
		var traveler = new Traveler({
			travelerFullName                  : req.body.travelerFullName,
			travelerFirstName                 : req.body.travelerFirstName,
			travelerMiddleName                : req.body.travelerMiddleName,
			travelerLastName                  : req.body.travelerLastName,
			travelerNickName                  : req.body.travelerNickName,
			travelerMobilePhone               : req.body.travelerMobilePhone,
			travelerHomePhone                 : req.body.travelerHomePhone,
			username                          : req.body.username,
			travelerSecondaryEmail            : req.body.travelerSecondaryEmail,
			password                          : req.body.password,
			travelerGender                    : req.body.travelerGender,
			travelerBirthdate                 : req.body.travelerBirthdate,
			travelerMailingAddress            : req.body.travelerMailingAddress,
			travelerState                     : req.body.travelerState,
			travelerCity                      : req.body.travelerCity,
			travelerZipCode					  : req.body.travelerZipCode,
			travelerCountry                   : req.body.travelerCountry,
			travelerNonUsState				  : req.body.travelerNonUsState,
			travelerSchoolOrganization		  : req.body.travelerSchoolOrganization,
			travelerTshirtSize				  : req.body.travelerTshirtSize,
			travelerDiscovery				  : req.body.travelerDiscovery,
			travelerReferralName			  : req.body.travelerReferralName,
			travelerReferralEmail			  : req.body.travelerReferralEmail,
			travelerCanSwim    				  : req.body.travelerCanSwim,
			travelerCanBike					  : req.body.travelerCanBike,
			travelerInterests				  : req.body.travelerInterests,
			guardian1FullName				  : req.body.guardian1FullName,
			guardian1PrimaryPhone			  : req.body.guardian1PrimaryPhone,
			guardian1PrimaryEmail			  : req.body.guardian1PrimaryEmail,
			guardian2FullName				  : req.body.guardian2FullName,
			guardian2PrimaryPhone			  : req.body.guardian2PrimaryPhone,
			guardian2PrimaryEmail			  : req.body.guardian2PrimaryEmail,
			travelerLivingSituation			  : req.body.travelerLivingSituation,
			emergencyContactFullName		  : req.body.emergencyContactFullName,
			emergencyContactPrimaryPhone	  : req.body.emergencyContactPrimaryPhone,
			emergencyContactPrimaryEmail	  : req.body.emergencyContactPrimaryEmail,
			emergencyContactRelationship	  : req.body.emergencyContactRelationship,
			travelerMedicalIssues			  : req.body.travelerMedicalIssues,
			travelerDietaryRequirements		  : req.body.travelerDietaryRequirements,
			travelerPassportFullName		  : req.body.travelerPassportFullName,
			travelerPassportNumber			  : req.body.travelerPassportNumber,
			travelerPassportExirationDate	  : req.body.travelerPassportExirationDate,
			travelerPassportDateOfIssue       : req.body.travelerPassportDateOfIssue,
			travelerPassportCountryOfIssue    : req.body.travelerPassportCountryOfIssue,
			travelerProgramType               : req.body.travelerProgramType,
			travelerTeacherEmail              : req.body.travelerTeacherEmail,
			travelerSchool                    : req.body.travelerSchool,
			travelerProgramDestinationCountry : req.body.travelerProgramDestinationCountry,
			travelerProgramSelection          : req.body.travelerProgramSelection, 
			travelerPromoCode                 : req.body.travelerPromoCode,
			travelerAmountDue                 : req.body.travelerAmountDue
		});
		traveler.save(function(err, traveler) {
			if(err) {
				if(err.code === 11000) {
					return res.send({error: 'This user already exists. Please try again.'})
				}
				else {
					return res.send({error: 'An error occured, please try again.'})
				}
			}
			performLogin(req, res, next, traveler);
		});
	},
};
module.exports = authenticationController;