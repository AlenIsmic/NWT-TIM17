'use strict';

app.controller('mainController', ['$scope', '$cookieStore', '$location', '$rootScope', 'BookStoreService', 
    function($scope, $cookieStore, $location, $rootScope, BookStoreService){
        $scope.user = {username: "", password: ""};
        $scope.mainAlerts = [];
        
        $rootScope.cookieUser = $cookieStore.get('BookStore') || {};
        if ($rootScope.cookieUser.currentUser) {
            $rootScope.isAuthenticated = true;
            if($rootScope.cookieUser.currentUser.isAdmin)
                $rootScope.isLoggedAdmin = true;
            else 
                $rootScope.isLoggedAdmin = false;
        }
        else
        {
            $rootScope.isAuthenticated = false;
            $rootScope.isAdmin = false;
        }
        
        $scope.loginMe = function()
        {
            if($scope.loginModel == null || $scope.loginModel.loginUsername == "" || $scope.loginModel.loginPsw == "")
                $scope.mainAlerts.push({type:'danger', msg: 'You must enter all fields!'});
            else{
                var username = $scope.loginModel.loginUsername;
            var password = $scope.loginModel.loginPsw;
            
            BookStoreService.login(username, password)
                    .success(function () {
                        //alert('Successfully logged in!');
                        //check if user is also admin
                        BookStoreService.checkIfAdmin(username).then(function(result){
                            if(result.data[0].admin === '1')
                                $rootScope.isLoggedAdmin = true;
                            else
                                $rootScope.isLoggedAdmin = false;
                            
                            $rootScope.isAuthenticated = true;
                            $rootScope.userData = {
                                currentUser: {
                                    username: username,
                                    isAdmin : $rootScope.isLoggedAdmin
                                }
                            }; 
                            var expireDate = new Date();
                            expireDate.setDate(expireDate.getHours() + 12);
                            $cookieStore.put('BookStore', $rootScope.userData, {'expires': expireDate});
                            $location.path('/index.html');
                        });                      
                    })
                    .error(function(data){
                        $scope.mainAlerts.push({type:'danger', msg: 'Login failed. Please try again. ' + data});
                        $scope.loginModel.loginPsw = '';
                        $scope.loginModel.loginUsername = '';
                    });
            }
            
        };
        
        $scope.Logout = function(){
            $rootScope.cookieKey = {};
            $cookieStore.remove('BookStore');
            $rootScope.isAuthenticated = false;
            $rootScope.isLoggedAdmin = false;
        };        
        
        $scope.closeAlert = function(index) {
                $scope.mainAlerts.splice(index, 1);
            };
}]);