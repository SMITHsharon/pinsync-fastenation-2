app.controller("BoardListCtrl", function($rootScope, $scope, BoardFactory, PinFactory) {

	$scope.boards = [];
	$scope.pins = [];

	let getBoards = () => {

		BoardFactory.getBoardList($rootScope.user.uid)
		.then((boardz) => {
			$scope.boards = boardz;
		})
		.catch((error) => {
			console.log("error on getBoardList", error);
		});
	};

	let getPins = (boardId) => {
		PinFactory.getPinList($routeParams.id)
		.then((pinz) => {
			$scope.pins = pinz;
		})
		.catch((error) => {
			console.log("error on getPins", error);
		});
	};

	// let getBoards = () => {

	// 	BoardFactory.getBoardList($rootScope.user.uid)
	// 	.then((boardz) => {
	// 		$scope.boards = boardz;
	// 	}).then((PinFactory.getPinList($routeParams.id) => {
	// 		.then((pinz) => {
	// 			$scope.pins = pinz;
	// 		})
	// 		.catch((error) => {
	// 			console.log("error in getPinList", error);
	// 		})
	// 	})
	// 	.catch((error) => {
	// 		console.log("error on getBoardList", error);
	// 	});
	// };

	getBoards();
	getPins();


	$scope.deleteBoard = (boardId) => {

		BoardFactory.deletzBoard(boardId)
		.then(() => {
			getBoards();
		})
		.catch((error) => {
			console.log("error on deleteBoard", error);
		});
	};

});