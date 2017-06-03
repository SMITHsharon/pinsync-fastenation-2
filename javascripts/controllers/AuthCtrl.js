app.controller("AuthCtrl", function($location, $rootScope, $routeParams, $scope, AuthFactory, UserFactory) {

    $scope.alerts = [];
    $scope.auth = {
        email: "b@b.com",
        password: "111111",
    };

    if ($location.path() === '/logout') {
        AuthFactory.logout();
        $rootScope.user = {};
        $location.url('/auth');
    }


    let logMeIn = () => {
        AuthFactory.authenticate($scope.auth).then((userCreds) => {
            return UserFactory.getUser(userCreds.uid);
        }, (error) => {
            $scope.alerts.push({ msg: error.message });
            console.log("authenticate error", error);
        }).then((user) => {
            $rootScope.user = user;
            $location.url('/pins/list');
        }).catch();
    };

    $scope.registerUser = () => {
        AuthFactory.registerWithEmail($scope.auth).then((registeredUser) => {
            $scope.auth.uid = registeredUser.uid;
            console.log("console from registerUser", registeredUser);
            return UserFactory.addUser($scope.auth);
        }, (error) => {
            $scope.alerts.push({ msg: error.message });
            console.log("getUser error", error);
        }).then((registerComplete) => {
            logMeIn();
        }).catch(() => {
            console.log("addUser error", error);
        });
    };

    $scope.loginUser = () => {
        logMeIn();
    };

    $scope.loginGoogle = () => {
        AuthFactory.authenticateGoogle($scope.auth).then((userCreds) => {
            $rootScope.user = userCreds;
            console.log("user", userCreds);
            $location.url('/pins/list');
        }).catch();
    };


});
