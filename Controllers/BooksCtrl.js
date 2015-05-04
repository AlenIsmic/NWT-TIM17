'use strict';

app.controller("BooksCtrl", ['$scope', 'BookStoreService', 
        function($scope, BookStoreService){
            
            BookStoreService.getBooks().then(function (data){
                $scope.books = data.data;               
            });
    
}]);