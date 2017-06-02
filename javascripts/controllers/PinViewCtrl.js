app.controller("PinViewCtrl", function($routeParams, $location, $scope, PinFactory){
	$scope.selectedPin = {};
	console.log($location.url());
	console.log($routeParams.id);
	PinFactory.viewSinglePin($routeParams.id)
	.then((results) => {
		$scope.selectedPin = results.data;
	})
	.catch((error) => {
		console.log("error in getSinglePin", error);
	});
});