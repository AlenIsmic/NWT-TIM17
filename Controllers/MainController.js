'use strict';

app.controller('mainController', ['$scope', '$cookieStore', '$location', '$rootScope', 'BookStoreService', 
    function($scope, $cookieStore, $location, $rootScope, BookStoreService){
        $scope.user = {username: "", password: ""};
        
        $rootScope.cookieUser = $cookieStore.get('BookStore') || {};
        if ($rootScope.cookieUser.currentUser) {
            $rootScope.isAuthenticated = true;
        }
        else
            $rootScope.isAuthenticated = false;
        
        $scope.loginMe = function()
        {
            var username = $scope.loginModel.loginUsername;
            var password = $scope.loginModel.loginPsw;
            
            BookStoreService.login(username, password)
                    .success(function () {
                        alert('Successfully logged in!');
                        $rootScope.isAuthenticated = true;
                        $rootScope.userData = {
                            currentUser: {
                                username: username
                            }
                        };                        
                        $cookieStore.put('BookStore', $rootScope.userData);
                        $location.path('/index.html');
                    })
                    .error(function(){
                        alert('Login failed!');
                        $scope.loginModel.loginPsw = '';
                        $scope.loginModel.loginUsername = '';
                    });
        };
        
        $scope.Logout = function(){
            $rootScope.cookieKey = {};
            $cookieStore.remove('BookStore');
            $rootScope.isAuthenticated = false;
        };        
}]);