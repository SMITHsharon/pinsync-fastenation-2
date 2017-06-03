app.controller("PinAddCtrl", function($rootScope, $routeParams, $http, $q, $location, FIREBASE_CONFIG, $scope, PinFactory){
	// if($location.path()===)
	//$scope.newPin.boardid = "global";		
		$scope.newPin.boardid = $routeParams.id;
		$scope.newPin.uid = $rootScope.user.uid;
		console.log("pin add controller");

	$scope.addNewPin = () => {
		PinFactory.postNewPin($scope.newPin).then(() => {
			$scope.newPin = {};
			$location.url("/pins/view/:id");
		}).catch((error) => {
			console.log("Add error", error);
		});
	};
});