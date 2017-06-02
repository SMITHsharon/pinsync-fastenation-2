app.controller("EditUserCtrl", function($location, $rootScope, $routeParams, $scope, AuthFactory, UserFactory) {
	$scope.userUpdate = {};
	let getUserInfo = () => {
		var userInfo = firebase.auth().currentUser;
			if (userInfo) {
			  $scope.userUpdate.email = userInfo.email;
			} else {
			  // No user is signed in.
			}

   	UserFactory.getUser($rootScope.user.uid).then((user) => {
      // $rootScope.user = user;
      $scope.userUpdate.name = user.name;
      $scope.userUpdate.imageURL = user.imageURL;

    }).catch();
  };

    getUserInfo();
    console.log("button click object: ", $scope.userUpdate);
    
    $scope.updateUser = () => {
    	UserFactory.editEmail($scope.userUpdate.email);
		UserFactory.editUser($rootScope.user, $scope.userUpdate).then((results) => {
		}).catch((error) => {
			console.log("update user error: ", error);
		});
    };

});