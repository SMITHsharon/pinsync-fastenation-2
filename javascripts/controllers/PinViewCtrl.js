app.controller("PinViewCtrl", function($routeParams, $rootScope, $scope, PinFactory, BoardFactory){
	$scope.selectedPin = {};
	$scope.getBoardList = {}
	$scope.pinIt= false;
	PinFactory.viewSinglePin($routeParams.id)
	.then((results) => {
		$scope.selectedPin = results.data;
	})
	.catch((error) => {
		console.log("error in getSinglePin", error);
	});

	$scope.pinToBoard = () => {
		$scope.pinIt= true;
	}

	BoardFactory.getBoardList($rootScope.user.uid)
	.then((results) => {
		$scope.userBoards = results;
		console.log($scope.userBoards);
	})

	$scope.addToBoard = (boardId) => {
		console.log(boardId);
	}
});