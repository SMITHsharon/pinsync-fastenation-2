app.controller("PinAddCtrl", function($rootScope, $location, $scope, PinFactory){
	if($location.path()==='/pin/new'){
		$scope.newPin.boardid = "global";
	} else {
		$scope.newPin.boardid = boardId;
	}
	$scope.addNewPin = () => {
		PinFactory.postNewItem($scope.newPin).then(() => {
			$scope.newPin = {};
			$location.url("/pins/list");
		}).catch((error) => {
			console.log("Add error", error);
		});
	};
});