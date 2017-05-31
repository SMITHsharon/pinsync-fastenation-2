app.controller("BoardViewCtrl", function($routeParams, $scope, BoardFactory) {

	$scope.selectedBoard = {};

	console.log("$routeParams", $routeParams);

	PinFactory.getPinList($routeParams.id)
	// BoardFactory.getSingleBoard($routeParams.id)
	.then((results) => {
		console.log("results.data", results.data);
		$scope.selectedBoard = results.data;
	})
	.catch((error) => {
		console.log("error on getSingleBoard", error);
	});

});