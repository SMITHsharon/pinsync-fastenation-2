app.controller("PinListCtrl", function($rootScope, $scope, PinFactory) {
	$scope.pins = [];
	let boardid = "global";
	let getPins = (boardId) => {
		PinFactory.getPinList(boardid).then((pinz) => {
			$scope.pins = pinz;
			console.log("pins:", $scope.pins);
		}).catch((error) => {
			console.log("getPinList error", error);
		});
	};
	getPins();
});