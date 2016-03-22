var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("controller test");

	$http.get('/contactlist').then(function(response) {
		console.log("I got the data i requested");
		$scope.contactlist = response.data;
	});

}]);

