app.controller("BoardListCtrl", function($rootScope, $scope, BoardFactory) {
console.log("in BoardListCtrl");
	$scope.boards = [];

	let getBoards = () => {
console.log("in getBoards");
		// calling getUser better than using $rootScope
		BoardFactory.getBoardList($rootScope.user.uid)
		.then((boardz) => {
			$scope.boards = boardz;
		})
		.catch((error) => {
			console.log("error on getBoardList", error);
		});
	};

	getBoards();


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