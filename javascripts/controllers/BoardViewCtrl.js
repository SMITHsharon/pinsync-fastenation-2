app.controller("BoardViewCtrl", function($routeParams, $scope, BoardFactory, PinFactory) {

	$scope.pins = [];

	let getPins = (boardId) => {
		PinFactory.getPinList($routeParams.id)
		.then((pinz) => {
			$scope.pins = pinz;
		})
		.catch((error) => {
			console.log("error on getPins", error);
		});
	};

	getPins();

});