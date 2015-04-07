'use strict';

app.controller("BooksCtrl", ['$scope', '$http', 'BookStoreService', 
        function($scope, $http, BookStoreService){
    
            BookStoreService.getBooks().then(function (data){
                $scope.books = data.data;
            });
    
}]);