app.controller("PinListCtrl", function($rootScope, $scope, PinFactory) {
	$scope.pinz = [];
	boardId = "global";
	let getPins = (boardId) => {
		PinFactory.getPinList(boardId).then((pinz) => {
			$scope.pinz = pinz;
		}).catch((error) => {
			console.log("getPinList error", error);
		});
	};
	getPins();
});