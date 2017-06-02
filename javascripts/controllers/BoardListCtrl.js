app.controller("BoardListCtrl", function($rootScope, $scope, BoardFactory, PinFactory) {

	$scope.boards = [];
	$scope.pins = [];

	let getBoards = () => {

		BoardFactory.getBoardList($rootScope.user.uid)
		.then((boardz) => {
			$scope.boards = boardz;
			getPins();
		})
		.catch((error) => {
			console.log("error on getBoardList", error);
		});
	};


	let getPins = () => {

		let boardId = "global";
		PinFactory.getPinList(boardId)
		.then((pinz) => {
			$scope.pins = pinz;
		})
		.catch((error) => {
			console.log("error on getPins", error);
		});
	};

	$scope.hoverIn = function(){
	    this.hoverOver = true;
	};

	$scope.hoverOut = function(){
	    this.hoverOver = false;
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
