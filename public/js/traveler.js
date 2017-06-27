(function() {
angular.module('wtt', ['ngRoute']);
angular.module('wtt');
angular.module('wtt').controller('mainController', ['$scope', '$http', function($scope, $http) {
	$http.get('/api/me').then(function(response) {
		$scope.traveler = response.data;
		console.log($scope.traveler)
	})
}])
angular.module('wtt')
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
		/*
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
		*/
		$locationProvider
		.html5Mode(false)
		.hashPrefix('');
	}]);
}())














