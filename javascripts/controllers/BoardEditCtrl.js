app.controller("BoardEditCtrl", function($location, $routeParams, $scope, BoardFactory) {

console.log("in BoardEditCtrl");

	$scope.newBoard = {};

	BoardFactory.getSingleBoard($routeParams.id)
	.then((results) => {
		$scope.newBoard = results.data;
	})
	.catch((error) => {
		console.log("error on getSingleBoard", error);
	});


	$scope.addNewBoard = () => {
		BoardFactory.editBoard($scope.newBoard)
		.then((resultz) => {
		// .then(() => {
			$location.url('/boards/list');
		})
		.catch((error) => {
			console.log("error on addNewBoard", error);
		});
	};

});