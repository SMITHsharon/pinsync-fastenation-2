app.controller("BoardListCtrl", function($rootScope, $scope, BoardFactory) {

	$scope.boards = [];

	let getBoards = () => {

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