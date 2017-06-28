(function() {
angular.module('wtt', ['ngRoute']);
angular.module('wtt');
angular.module('wtt').controller('mainController', ['$scope', '$http', function($scope, $http) {
		$scope.traveler = {};
		$scope.programs = {};
		$scope.isUSA = function() {
			return $scope.traveler.travelerCountry !== "United States" && $scope.traveler.travelerCountry !== undefined;
		}
		$scope.isReferral = function() {
			return $scope.traveler.travelerDiscovery == "Referral" && $scope.traveler.travelerDiscovery !== undefined;
		}
		$scope.programTypeSelected = function() {
			return $scope.traveler.travelerProgramType !== undefined;
		}
		$scope.destination = {};
		$scope.destinationSelected = function() {
			return $scope.destination.selected !== undefined;
		}
		$scope.isCustom = function() {
			return $scope.traveler.travelerProgramType == "Custom Group Travel";
		}
		$scope.isCustoml = function() {
			return $scope.traveler.travelerProgramType !== "Custom Group Travel" && $scope.traveler.travelerProgramType !== undefined;
		}
		$scope.belizePrograms = [
			{
				name: '2017 Belize 10 Day Marine Conservation Expedition',
				price: '$3,206'
			}
		];
		$scope.belize = function() {
			return $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.canadaPrograms = [
			{
				name: '2017 Canada 10 Day Cultural Journey',
				price: '$2,113'
			}
		];
		$scope.canada = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "China" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.chinaPrograms = [
			{
				name: '2017 China 15 Day Panda Expedition',
				price: '$1,035'
			},
			{
				name: '2017 China 15 Day Cultural Journey: East China',
				price: '$2,572'
			},
			{
				name: '2017 China 15 Day Cultural Journey: Trekking',
				price: '$3,004'
			}
		];
		$scope.china = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.costaRicaPrograms = [
			{
				name: '2017 Costa Rica 10 Day Osa Wildlife Conservation Expedition',
				price: '$1,910'
			},
			{
				name: '2017 Costa Rica 15 Day Sea Turtle Conservation Expedition',
				price: '$2,444'
			},
			{
				name: '2017 Costa Rica 10 Day Surf and Service Program',
				price: '$2,133'
			},
			{
				name: '2017 Costa Rica 10 Day Service Adventure',
				price: '$1,607'
			},
			{
				name: '2017 Costa Rica 15 Day Service Adventure',
				price: '$1,971'
			},
			{
				name: '2017 Costa Rica 21 Day Service Adventure',
				price: '$2,646'
			},
			{
				name: '2017 Costa Rica 30 Day Service Adventure',
				price: ' '
			}
		];
		$scope.costaRica = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.francePrograms = [
			{
				name: '2017 France 10 Day Cultural Journey',
				price: '$2,315'
			},
			{
				name: '2017 France 15 Day Cultural Journey',
				price: '$3,422'
			}
		];
		$scope.france = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.guatemalaPrograms = [
			{
				name: '2017 Guatemala 10 Day Service Adventure',
				price: '$1,715'
			},
			{
				name: '2017 Guatemala 15 Day Service Adventure',
				price: '$2,614'
			},
			{
				name: '2017 Guatemala 21 Day Service Adventure',
				price: '$3,112'
			},
			{
				name: '12-Day Guatemala Environmental Leadership Course',
				price: '$2,761'
			}
		];
		$scope.guatemala = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.peruPrograms = [
			{
				name: '2017 Peru 15 Day Service Adventure',
				price: '$3,794'
			},
			{
				name: '2017 Peru 21 Day Service Adventure',
				price: '$3,814'
			},
			{
				name: '2017 Peru 30 Day Service Adventure',
				price: '$4,307'
			},
						{
				name: '15-Day Amazon to Andes Expedition: Ocelots',
				price: '$UNDEFINED'
			}
		];
		$scope.peru = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.senegalPrograms = [
			{
				name: '2017 Senegal 15 Day Service Adventure ',
				price: '$4,050'
			},
			{
				name: '2017 Senegal 21 Day Service Adventure ',
				price: '$4,226'
			}
		];
		$scope.senegal = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.spainPrograms = [
			{
				name: '2017 Spain North 15 Day Cultural Journey',
				price: '$3,949'
			}
		];
		$scope.spain = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.spainToMoroccoPrograms = [
			{
				name: '2017 Spain/Morocco 15 Day Cultural Journey',
				price: '$4,111'
			}
		];
		$scope.spainToMorocco = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA"&& $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.thailandPrograms = [
			{
				name: '2017 Thailand 15 Day Elephant Expedition',
				price: '$2,876'
			},
			{
				name: '2017 Thailand 21 Day Elephant Expedition',
				price: '$3,746'
			}
		];
		$scope.thailand = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA"&& $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.italyPrograms = [
			{
				name: '2017 Italy 15 Day Culinary Journey',
				price: '$UNDEFINED'
			}
		];
		$scope.italy = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		}
		$scope.ecuadorPrograms = [
			{
				name: '11-Day Galapagos Wildlife Expedition',
				price: '$4,965'
			}
		];
		$scope.ecuador = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.panamaPrograms = [
			{
				name: '15-Day Panama Primate Research Expedition',
				price: '$UNDEFINED'
			}
		];
		$scope.panama = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.southAfricaPrograms = [
			{
				name: '15-Day Leopard Conservation? C4C?',
				price: '$UNDEFINED'
			}
		];
		$scope.southAfrica = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.cubaPrograms = [
			{
				name: 'Viva la Revolucion',
				price: '$UNDEFINED'
			}
		];
		$scope.cuba = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.usaPrograms = [
			{
				name: 'California Coast',
				price: '$UNDEFINED'
			}
		];
		$scope.usa = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.bhutanPrograms = [
			{
				name: 'Land of the Thunder Dragon',
				price: '$8,060'
			}
		];
		$scope.bhutan = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Japan" ;
		};
		$scope.australiaPrograms = [
			{
				name: 'Wildlife of Australia',
				price: ''
			}
		];
		$scope.australia = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Costa Rica" && $scope.destination.selected !== "Japan" ;
		};
		$scope.japanPrograms = [
			{
				name: 'Journey into the Hermit Kingdom',
				price: '$UNDEFINED'
			}
		];
		$scope.japan = function() {
			return $scope.destination.selected !== "Belize" && $scope.destination.selected !== "Canada" && $scope.destination.selected !== "China" && $scope.destination.selected !== "France" && $scope.destination.selected !== "Guatemala" && $scope.destination.selected !== "Peru" && $scope.destination.selected !== "Senegal" && $scope.destination.selected !== "Spain" && $scope.destination.selected !== "Spain to Morocco" && $scope.destination.selected !== "Thailand" && $scope.destination.selected !== "Italy" && $scope.destination.selected !== "Ecuador" && $scope.destination.selected !== "Panama" && $scope.destination.selected !== "South Africa" && $scope.destination.selected !== "Cuba" && $scope.destination.selected !== "USA" && $scope.destination.selected !== "Bhutan" && $scope.destination.selected !== "Australia" && $scope.destination.selected !== "Costa Rica" ;
		};
		
		const getTheProgram = function() {
			var allPrograms = [];
			const belize = function() {
				for(var i = 0; i < $scope.belizePrograms.length; i++) {
					allPrograms.push($scope.belizePrograms[i]);
				}
			}
			belize()
			const canada = function() {
				for(var i = 0; i < $scope.canadaPrograms.length; i++) {
					allPrograms.push($scope.canadaPrograms[i]);
				}
			}
			canada()
			const china = function() {
				for(var i = 0; i < $scope.chinaPrograms.length; i++) {
					allPrograms.push($scope.chinaPrograms[i]);
				}
			}
			china()
			const costaRica = function() {
				for(var i = 0; i < $scope.costaRicaPrograms.length; i++) {
					allPrograms.push($scope.costaRicaPrograms[i]);
				}
			}
			costaRica()
			const france = function() {
				for(var i = 0; i < $scope.francePrograms.length; i++) {
					allPrograms.push($scope.francePrograms[i]);
				}
			}
			france()
			const guatemala = function() {
				for(var i = 0; i < $scope.guatemalaPrograms.length; i++) {
					allPrograms.push($scope.guatemalaPrograms[i]);
				}
			}
			guatemala()
			const peru = function() {
				for(var i = 0; i < $scope.peruPrograms.length; i++) {
					allPrograms.push($scope.peruPrograms[i]);
				}
			}
			peru()
			const senegal = function() {
				for(var i = 0; i < $scope.senegalPrograms.length; i++) {
					allPrograms.push($scope.senegalPrograms[i]);
				}
			}
			senegal()
			const spain = function() {
				for(var i = 0; i < $scope.spainPrograms.length; i++) {
					allPrograms.push($scope.spainPrograms[i]);
				}
			}
			spain()
			const spainToMorocco = function() {
				for(var i = 0; i < $scope.spainToMoroccoPrograms.length; i++) {
					allPrograms.push($scope.spainToMoroccoPrograms[i]);
				}
			}
			spainToMorocco()
			const thailand = function() {
				for(var i = 0; i < $scope.thailandPrograms.length; i++) {
					allPrograms.push($scope.thailandPrograms[i]);
				}
			}
			thailand()
			const italy = function() {
				for(var i = 0; i < $scope.italyPrograms.length; i++) {
					allPrograms.push($scope.italyPrograms[i]);
				}
			}
			italy()
			const ecuador = function() {
				for(var i = 0; i < $scope.ecuadorPrograms.length; i++) {
					allPrograms.push($scope.ecuadorPrograms[i]);
				}
			}
			ecuador()
			const panama = function() {
				for(var i = 0; i < $scope.panamaPrograms.length; i++) {
					allPrograms.push($scope.panamaPrograms[i]);
				}
			}
			panama()
			const southAfrica = function() {
				for(var i = 0; i < $scope.southAfricaPrograms.length; i++) {
					allPrograms.push($scope.southAfricaPrograms[i]);
				}
			}
			southAfrica()
			const cuba = function() {
				for(var i = 0; i < $scope.cubaPrograms.length; i++) {
					allPrograms.push($scope.cubaPrograms[i]);
				}
			}
			cuba()
			const usa = function() {
				for(var i = 0; i < $scope.usaPrograms.length; i++) {
					allPrograms.push($scope.usaPrograms[i]);
				}
			}
			usa()
			const bhutan = function() {
				for(var i = 0; i < $scope.bhutanPrograms.length; i++) {
					allPrograms.push($scope.bhutanPrograms[i]);
				}
			}
			bhutan()
			const australia = function() {
				for(var i = 0; i < $scope.australiaPrograms.length; i++) {
					allPrograms.push($scope.australiaPrograms[i]);
				}
			}
			australia()
			const japan = function() {
				for(var i = 0; i < $scope.japanPrograms.length; i++) {
					allPrograms.push($scope.japanPrograms[i]);
				}
			}
			japan()
			return allPrograms;
		} 
		$scope.isComplete = false;	
		$scope.createTraveler = function() {
			function getCost() {
				for(var i = 0; i < getTheProgram().length; i++) {
					if(getTheProgram()[i].name == $scope.programs.selected) {
						return getTheProgram()[i].price;
					}
				}
			}
			function getProgram() {
				for(var i = 0; i < getTheProgram().length; i++) {
					if(getTheProgram()[i].name == $scope.programs.selected) {
						return getTheProgram()[i];
					}
				}
			}
			$http({
				method: 'POST',
				url: '/signup/',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				data: $.param({
					travelerFullName: $scope.traveler.travelerFullName,
					travelerFirstName: $scope.traveler.travelerFirstName,
					travelerMiddleName: $scope.traveler.travelerMiddleName,
					travelerLastName: $scope.traveler.travelerLastName,
					travelerNickName: $scope.traveler.travelerNickName,
					travelerMobilePhone: $scope.traveler.travelerMobilePhone,
					travelerHomePhone: $scope.traveler.travelerHomePhone,
					username: $scope.traveler.travelerPrimaryEmail,
					travelerSecondaryEmail: $scope.traveler.travelerSecondaryEmail,
					password: $scope.traveler.travelerPassword,
					travelerGender: $scope.traveler.travelerGender,
					travelerBirthdate: $scope.traveler.travelerBirthdate,
					travelerMailingAddress: $scope.traveler.travelerMailingAddress,
					travelerState: $scope.traveler.travelerState,
					travelerCity: $scope.traveler.travelerCity,
					travelerZipCode: $scope.traveler.travelerZipCode,
					travelerCountry: $scope.traveler.travelerCountry,
					travelerNonUsState: $scope.traveler.travelerNonUsState,
					travelerSchoolOrganization: $scope.traveler.travelerSchoolOrganization,
					travelerTshirtSize: $scope.traveler.travelerTshirtSize,
					travelerDiscovery: $scope.traveler.travelerDiscovery,
					travelerReferralName: $scope.traveler.travelerReferralName,
					travelerReferralEmail: $scope.traveler.travelerReferralEmail,
					travelerCanSwim: $scope.traveler.travelerCanSwim,
					travelerCanBike: $scope.traveler.travelerCanBike,
					travelerInterests: $scope.traveler.travelerInterests,
					guardian1FullName: $scope.traveler.guardian1FullName,
					guardian1PrimaryPhone: $scope.traveler.guardian1PrimaryPhone,
					guardian1PrimaryEmail: $scope.traveler.guardian1PrimaryEmail,
					guardian2FullName: $scope.traveler.guardian2FullName,
					guardian2PrimaryPhone: $scope.traveler.guardian2PrimaryPhone,
					guardian2PrimaryEmail: $scope.traveler.guardian2PrimaryEmail,
					travelerLivingSituation: $scope.traveler.travelerLivingSituation,
					emergencyContactFullName: $scope.traveler.emergencyContactFullName,
					emergencyContactPrimaryPhone: $scope.traveler.emergencyContactPrimaryPhone,
					emergencyContactPrimaryEmail: $scope.traveler.emergencyContactPrimaryEmail,
					emergencyContactRelationship: $scope.traveler.emergencyContactRelationship,
					travelerMedicalIssues: $scope.traveler.travelerMedicalIssues,
					travelerDietaryRequirements: $scope.traveler.travelerDietaryRequirements,
					travelerPassportFullName: $scope.traveler.travelerPassportFullName,
					travelerPassportNumber: $scope.traveler.travelerPassportNumber,
					travelerPassportExirationDate: $scope.traveler.travelerPassportExirationDate,
					travelerPassportDateOfIssue: $scope.traveler.travelerPassportDateOfIssue,
					travelerPassportCountryOfIssue: $scope.traveler.travelerPassportCountryOfIssue,
					travelerProgramType: $scope.traveler.travelerProgramType,
					travelerTeacherEmail: $scope.traveler.travelerTeacherEmail,
					travelerSchool: $scope.traveler.travelerSchool,
					travelerProgramDestinationCountry: $scope.destination.selected,
					travelerProgramSelection: getProgram(),
					travelerPromoCode: $scope.traveler.travelerPromoCode,
					travelerAmountDue: getCost()
				})
			}).then(function(response) {

			})
		}
		


}])
angular.module('wtt') 
	.controller('formController', [ '$scope', '$http', function($scope, $http) {
		$(document).ready(function() {
		  var current_fs, next_fs, previous_fs; 
		  var left, opacity, scale; 
		  var animating; 
		  $(".next").click(function() {
		    if (animating) return false;
		    animating = true;
		    current_fs = $(this).parent();
		    next_fs = $(this).parent().next();
		    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
		    next_fs.show();
		    current_fs.animate(
		      { opacity: 0 },
		      {
		        step: function(now, mx) {
		          scale = 1 - (1 - now) * 0.2;
		          left = now * 50 + "%";
		          opacity = 1 - now;
		          current_fs.css({
		            transform: "scale(" + scale + ")",
		            position: "absolute"
		          });
		          next_fs.css({ left: left, opacity: opacity });
		        },
		        duration: 800,
		        complete: function() {
		          current_fs.hide();
		          animating = false;
		        },
		        easing: "easeInOutBack"
		      }
		    );
		  });
		  $(".previous").click(function() {
		    if (animating) return false;
		    animating = true;
		    current_fs = $(this).parent();
		    previous_fs = $(this).parent().prev();
		    $("#progressbar li")
		      .eq($("fieldset").index(current_fs))
		      .removeClass("active");
		    previous_fs.show();
		    current_fs.animate(
		      { opacity: 0 },
		      {
		        step: function(now, mx) {
		          scale = 0.8 + (1 - now) * 0.2;
		          left = (1 - now) * 50 + "%";
		          opacity = 1 - now;
		          current_fs.css({ left: left });
		          previous_fs.css({
		            transform: "scale(" + scale + ")",
		            opacity: opacity,
		          });
		        },
		        duration: 800,
		        complete: function() {
		          current_fs.hide();
		          animating = false;
		          //previous_fs.css({
		          //  position: "relative"
		          //});
		        },
		        easing: "easeInOutBack"
		      }
		    );
		  }); 
		  $(".submit").click(function() {
		    return false;
		  });
		}())	
	}]);
angular.module('wtt')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
		.when('/', {
			templateUrl: '/html/home.html', 
		})
		.when('/home', {
			templateUrl: '/html/home.html', 
		})
		.when('/enroll', {
			templateUrl: '/html/enroll.html',
			controller: 'formController'
		})
		$locationProvider
		.html5Mode(false)
		.hashPrefix('');
	}]);
}())














