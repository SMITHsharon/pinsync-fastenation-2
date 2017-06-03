

app.controller("PinAddCtrl", function($rootScope, $http, $q, $location, FIREBASE_CONFIG, $scope, PinFactory){
	// if($location.path()===)
	//$scope.newPin.boardid = "global";		
		//$scope.newPin.boardId = $routeParams.id;
		//$scope.newPin.uid = $rootScope.user.uid;
		console.log("pin add controller");

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