'use strict';

app.controller("HomeCtrl", ['$scope', '$http', 'BookStoreService', 
        function($scope, $http, BookStoreService){
    
            $scope.bookStoreService = BookStoreService;
    
}]);