app.controller("PinViewCtrl", function($routeParams, $rootScope, $scope, PinFactory, BoardFactory){
	$scope.selectedPin = {};
	$scope.getBoardList = {}
	PinFactory.viewSinglePin($routeParams.id)
	.then((results) => {
		$scope.selectedPin = results.data;
	})
	.catch((error) => {
		console.log("error in getSinglePin", error);
	});

	BoardFactory.getBoardList($rootScope.user.uid)
	.then((results) => {
		$scope.userBoards = results;
	})
});