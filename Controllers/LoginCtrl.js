'use strict';

app.controller("LoginCtrl", ['$scope', '$http', '$rootScope', 'BookStoreService', '$location',
    function($scope, $http, $rootScope, BookStoreService, $location){
    
    $scope.loginModel = {
      loginUsername : "",
      loginPsw : ""
    };
    
    $scope.loginMe = function(){
        
        if($scope.loginModel == null || $scope.loginModel.loginPsw == "" || $scope.loginModel.loginUsername == "")
            alert("Morate unijeti sve podatke !");
        else
        {
            BookStoreService.login($scope.loginModel.loginUsername, $scope.loginModel.loginPsw)
                    .then(function (data)
            {
                if(data != null)
                    $rootScope.isAuthenticated = true;
                    $location.path('/index.html')
            });
        }
    };
        
}]);