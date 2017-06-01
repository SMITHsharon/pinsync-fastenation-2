app.controller("BoardViewCtrl", function($routeParams, $scope, BoardFactory, PinFactory) {

	$scope.pins = [];

	console.log("$routeParams", $routeParams);

	let getPins = (boardId) => {
		PinFactory.getPinList($routeParams.id)
		.then((pinz) => {
			console.log("pinz", pinz);
			$scope.pins = pinz.data;
		})
		.catch((error) => {
			console.log("error on getPins", error);
		});
	};

	getPins();

});