app.controller("PinViewCtrl", function($routeParams, $rootScope, $scope,$location, PinFactory, BoardFactory){
	$scope.selectedPin = {};
	$scope.newBoard= false;
	$scope.getBoardList = {};


	PinFactory.viewSinglePin($routeParams.id)
	.then((results) => {
		$scope.selectedPin = results.data;
		if ($scope.selectedPin.boardid==="global"){
			$scope.pinIt = true;
		} else {
			$scope.pinIt = false;
		}
	})
	.catch((error) => {
		console.log("error in getSinglePin", error);
	});

	$scope.pinToNewBoard = () => {
		PinFactory.deletePin($routeParams.id).then(()=>{
			$scope.newBoard = true;
		}).catch((error) => {
			console.log("delete Pin error", error);
		});
			
	};

	BoardFactory.getBoardList($rootScope.user.uid)
	.then((results) => {
		$scope.userBoards = results;
	}).catch((error) => {
		console.log("boardList error", error);
	});

	$scope.addToBoard = (boardId) => {
		$scope.selectedPin.boardid = boardId;
		PinFactory.postNewPin($scope.selectedPin).then((results) => {
			$location.url("/pins/list");
		}).catch((error) => {
			console.log("add pin to Board error", error);
		});
	};

	$scope.deletePin = () => {
		PinFactory.deletePin($routeParams.id).then(() => {
			$location.url("/pins/list");
		}).catch((error) => {
			console.log("delete pin error", error);
		});
	};
});