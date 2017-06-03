app.controller("BoardViewCtrl", function($routeParams, $scope, $location, BoardFactory, PinFactory) {

	$scope.pins = [];
	$scope.title = "";
	$scope.addPin=false;
	let getPins = () => {
		PinFactory.getPinList($routeParams.id)
		.then((pinz) => {
			$scope.pins = pinz;
		})
		.catch((error) => {
			console.log("error on getPins", error);
		});
		BoardFactory.getSingleBoard($routeParams.id)
		.then((board) => {
			console.log(board);
			$scope.title = board.data.title;
			console.log($scope.title);
		})
		.catch((error) => {
			console.log("error in getSingleBoard", error);
		});
	};
	$scope.viewPin = (id) => {
		$location.url(`/pin/view/${id}`);
	};

	getPins();

});