app.controller("PinAddCtrl", function($location, $rootScope, $scope, PinFactory){

	$scope.addNewPin = () => {
		$scope.newPin.boardid = "global";
		$scope.newPin.uid = $rootScope.user.uid;
		PinFactory.postNewPin($scope.newPin).then((results) => {
			let pinId=results.data.name;
			$location.url(`/pin/view/${pinId}`);
			$scope.newPin = {};
		}).catch((error) => {
			console.log("Add error", error);
		});
	};
});