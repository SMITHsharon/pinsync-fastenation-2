app.controller("BoardListCtrl", function($rootScope, $scope, BoardFactory, PinFactory) {

	$scope.boards = [];
	$scope.pins = [];


	let getBoards = () => {

		BoardFactory.getBoardList($rootScope.user.uid)
		.then((boardz) => {
			$scope.boards = boardz;
			for (let i=0; i<$scope.boards.length; i++) {
				getPins($scope.boards[i].id);
			}

		})

		.catch((error) => {
			console.log("error on getBoardList", error);
		});
	};


	let getPins = (boardId) => {
		PinFactory.getPinList(boardId)
		.then((pinz) => {
			pinz.forEach((pin) => {
				$scope.pins.push(pin);
			});
			console.log("$scope.pins", $scope.pins);
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
