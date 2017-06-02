app.controller("PinAddCtrl", function($rootScope, $location, $scope, PinFactory){
	// if($location.path()===)
	$scope.newPin.boardid = "global";
	$scope.addNewPin = () => {
		PinFactory.postNewItem($scope.newPin).then(() => {
			$scope.newPin = {};
			$location.url("/pins/list");
		}).catch((error) => {
			console.log("Add error", error);
		});
	};
});