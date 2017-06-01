app.controller("BoardAddCtrl", function($http, $location, $q, $rootScope, $scope, FIREBASE_CONFIG, BoardFactory) {

	$scope.addNewBoard = () => {
		// calling getuser() better than using $rootScope ...
		$scope.newBoard.uid = $rootScope.user.uid;
		BoardFactory.postNewBoard($scope.newBoard)
		.then((response) => {
			$scope.newBoard = {};
			$location.url("/boards/list");
		})
		.catch((error) => {
			console.log("error on addNewBoard", error);
		});
	};

});