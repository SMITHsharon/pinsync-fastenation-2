app.controller("PinAddCtrl", function($rootScope, $routeParams, $http, $q, $location, FIREBASE_CONFIG, $scope, PinFactory){

	$scope.addNewPin = (boardId) => {
		$scope.newPin.boardid = "global";
		PinFactory.postNewPin($scope.newPin).then((results) => {
			let pinId=results.data.name;
			$location.url(`/pin/view/${pinId}`);
			$scope.newPin = {};
		}).catch((error) => {
			console.log("Add error", error);
		});
	};
});