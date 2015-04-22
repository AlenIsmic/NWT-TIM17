'use strict';

app.controller("AuthorsCtrl", ['$scope', '$http', 'BookStoreService', 
        function($scope, $http, BookStoreService){
    
            BookStoreService.getAuthors().then(function (data){
                $scope.authors = data.data;
            });
    
}]);