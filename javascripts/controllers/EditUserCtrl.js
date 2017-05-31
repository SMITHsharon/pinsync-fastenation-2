app.controller("EditUserCtrl", function($location, $rootScope, $routeParams, $scope, AuthFactory, UserFactory) {
	$rootScope.userUpdate = {};
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
      console.log(user.name);
      console.log(user.imageURL);

    }).catch();
  };

    getUserInfo();


});