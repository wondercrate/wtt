(function() {
	angular.module('wtt', ['ngRoute']);
	angular.module('wtt').controller('mainController', ['$scope', '$http', function($scope, $http) {
		(function() {
			$scope.programsArray = [];
			const getPrograms = function() {
				const data = {};
				$http.get('/api/programs/getPrograms', data).then(function(response) {
					$scope.programsArray = response.data;
				})
			}
			getPrograms();
			const clearForm = function() {
				$scope.program.name = "";
				$scope.program.duration = "";
				$scope.program.country = "";
				$scope.program.price = "";
			}
			$scope.addProgram = function(program) {
				$scope.program = program;
				var data = {
					name: $scope.program.name,
					country: $scope.program.country,
					duration: $scope.program.duration,
					price: $scope.program.price
				}
				$http.post('/api/programs/addProgram', data).then(function(response){
					$scope.program = response.data;
					$scope.programsArray.push($scope.program);
					getPrograms();
					clearForm();
				});
			};
			$scope.pushProgram = function(program) {
				$scope.singleProgramArray = [];
				$scope.program = program;
				$scope.singleProgramArray.push(program);
			};
			$scope.deleteProgram = function(id) {
				$http.delete('/api/programs/deleteProgram/' + id).then(function(response) {
					getPrograms();
					clearForm();
				})
			};
			$scope.updateProgram = function() {
				const data = {
					programId: $scope.program._id,
					name: $scope.program.name,
					country: $scope.program.country,
					duration: $scope.program.duration,
					price: $scope.program.price
				};
				$http.post('/api/programs/updateProgram', data).then(function(){
					getPrograms();
					clearForm();
				});
			};
		}())
	}]);
}());














