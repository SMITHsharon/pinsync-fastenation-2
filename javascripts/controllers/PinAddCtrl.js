app.controller("PinAddCtrl", function($rootScope, $http, $q, $location, FIREBASE_CONFIG, $scope, PinFactory){
	// if($location.path()===)
	//$scope.newPin.boardid = "global";		
		//$scope.newPin.boardId = $routeParams.id;
		//$scope.newPin.uid = $rootScope.user.uid;
		console.log("pin add controller");

	$scope.addNewPin = () => {
		PinFactory.postNewPin($scope.newPin).then(() => {
			$scope.newPin = {};
			$location.url("/pins/list");
		}).catch((error) => {
			console.log("Add error", error);
		});
	};
});