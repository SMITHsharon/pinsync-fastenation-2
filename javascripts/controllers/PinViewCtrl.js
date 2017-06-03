app.controller("PinViewCtrl", function($routeParams, $rootScope, $scope,$location, PinFactory, BoardFactory){
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
	}).catch((error) => {
		console.log("boardList error", error)
	})

	$scope.addToBoard = (boardId) => {
		console.log(boardId);
		$scope.selectedPin.boardid = boardId;
		PinFactory.postNewPin($scope.selectedPin).then((results) => {
			$location.url("/pins/list");
		}).catch((error) => {
			console.log("add pin to Board error", error);
		});
	};
});