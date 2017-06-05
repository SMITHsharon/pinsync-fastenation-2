app.controller("myPinsCtrl", function($rootScope, $location, $scope, PinFactory) {
	$scope.title = `What's new, ${$rootScope.user.username}?`;
	$scope.pins = [];
	$scope.addPin=true;
	let boardid = "global";
	let getPins = (boardId) => {
		PinFactory.getPinList(boardid).then((pinz) => {
			pinz.forEach((pin) => {
				if(pin.uid===$rootScope.user.uid){
					$scope.pins.push(pin);
				}
			});
		}).catch((error) => {
			console.log("getPinList error", error);
		});
	};
	getPins();

	$scope.viewPin = (id) => {
		$location.url(`/pin/view/${id}`);
	};

});