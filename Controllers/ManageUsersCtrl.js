'use strict';

app.controller("ManageUsersCtrl", ['$scope', '$http', 'BookStoreService', 
        function($scope, $http, BookStoreService){
    
            $scope.users = [];
            
            BookStoreService.getUsers().then(function (data){
                $scope.users = data.data;                
            });    
            
            $scope.banUser = function(id){
                var userId = $scope.users[id].id;
                BookStoreService.banUser(userId).then(function(){
                    $scope.users[id].isUserBanned = 1;
                });
            };
            $scope.unbanUser = function(id){
                var userId = $scope.users[id].id;
                BookStoreService.unbanUser(userId).then(function(){
                    $scope.users[id].isUserBanned = 0;
                });
            };
            $scope.makeAdmin = function(id){
                var userId = $scope.users[id].id;
                BookStoreService.makeAdmin(userId).then(function(){
                    
                });
            };
}]);