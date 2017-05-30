app.controller("ItemEditCtrl", function($location, $routeParams, $scope, BoardFactory) {

	$scope.newBoard = {};

	BoardFactory.getSingleBoard($routeParams.id)
	.then((results) => {
		console.log("results.data", results.data);
		$scope.newBoard = results.data;
	})
	.catch((error) => {
		console.log("error on getSingleBoard", error);
	});


	$scope.addNewBoard = () => {
		BoardFactory.editBoard($scope.newBoard)
		.then(() => {
			$location.url('/boards/list');
		})
		.catch((error) => {
			console.log("error on addNewBoard", error);
		});
	};

});