'use strict';

app.controller("RegisterCtrl", ['$scope', '$http', 'BookStoreService', 
        function($scope, $http, BookStoreService){
    
    $scope.registerModel = {
        username : "",
        email : "",
        password: ""
    };
    
    $scope.registerMe = function(){
       if($scope.registerModel.email == undefined || $scope.registerModel.password == "" || $scope.registerModel.username == "")
           alert("Morate unijeti sve podatke !");
       else 
       {
           BookStoreService.sendRegistrationRequest($scope.registerModel);
       }
    };
    
}]);