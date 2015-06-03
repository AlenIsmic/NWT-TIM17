'use strict';

app.controller("ManageUsersCtrl", ['$scope', '$http', 'BookStoreService', 
        function($scope, $http, BookStoreService){
    
            $scope.users = [];
            
            BookStoreService.getUsers().then(function (data){
                $scope.users = data.data;                
            });    
            
            function banUser(id){
                var userId = $scope.users[id].id;
              BookStoreService.banUser(userId).then(function(){
                  
              });
            };
            function unbanUser(id){
                var userId = $scope.users[id].id;
              BookStoreService.unbanUser(userId).then(function(){
                  
              });
            };
            function makeAdmin(id){
                var userId = $scope.users[id].id;
              BookStoreService.makeAdmin(userId).then(function(){
                  
              });
            };
}]);