
app.controller("PinListCtrl", function($rootScope, $location, $scope, PinFactory) {
	$scope.title = "What's your FasteNation?";
	$scope.pins = [];
	$scope.addPin=true;
	let boardid = "global";
	let getPins = (boardId) => {
		PinFactory.getPinList(boardid).then((pinz) => {
			$scope.pins = pinz;
		}).catch((error) => {
			console.log("getPinList error", error);
		});
	};
	getPins();

	$scope.viewPin = (id) => {
		$location.url(`/pin/view/${id}`);
	};

});