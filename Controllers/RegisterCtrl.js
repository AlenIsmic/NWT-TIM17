'use strict';

app.controller("RegisterCtrl", ['$scope', '$http', 'BookStoreService', 
        function($scope, $http, BookStoreService){
    
    $scope.registerModel = {
        name : "",
        email : "",
        password: ""
    };
    
    $scope.registerMe = function(){
       if($scope.registerModel.email == undefined || $scope.registerModel.password == "" || $scope.registerModel.name == "")
           alert("Morate unijeti sve podatke !");
       else 
       {
           BookStoreService.checkIfUserExists($scope.registerModel.name).then(function(data){
               if(data.status === 200){
                   $scope.registerModel.admin = 0;
                   $scope.registerModel.isVerified = 0;
                   $scope.registerModel.isUserBanned = 0;
                   BookStoreService.createUser($scope.registerModel).then(function(data){
                       
                   });
               }
               else {
                   alert(data.data);
               }
           });
                        
           BookStoreService.sendRegistrationRequest($scope.registerModel).then(function(data)
           {
               if(data.message !== "")
                   alert(data.message);
           });
       }
    };
    
}]);