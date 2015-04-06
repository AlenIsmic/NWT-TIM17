'use strict';

app.controller("mainController", ['$scope', '$http', function($scope, $http){
    //$rootscope.isAuthenticated = false;
    
    $scope.loginMe = function() {
        alert("login!");
    };
    
    $scope.registerMe = function(){
        alert($scope.email);
    };
        
}]);