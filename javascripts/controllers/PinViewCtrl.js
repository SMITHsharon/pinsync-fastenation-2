app.controller("PinViewCtrl", function($routeParams, $rootScope, $scope,$location, PinFactory, BoardFactory){
	$scope.selectedPin = {};
	$scope.newBoard= false;
	$scope.getBoardList = {};

	let pinView = () => {
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
	};
	pinView();

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
		$scope.selectedPin.likes = 0;
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

	$scope.likePin = () => {
		$scope.selectedPin.likes = $scope.selectedPin.likes +1;
		PinFactory.editLikes($scope.selectedPin, $routeParams.id).then((results) => {
		}).catch((error) => {
			console.log("edit likes error", error);
		});
	};
});