'use strict';

app.controller("BooksCtrl", ['$scope', '$http', 'BookStoreService', 
        function($scope, $http, BookStoreService){
    
    //TODO: Remove hardcoded values once service implementation is finished
    $scope.books = [
        {
            title: 'Book1',
            genre: 'genre1',
            author: 'author1'
        },
        {
            title: 'Book2',
            genre: 'genre2',
            author: 'author2'
        }];
    //TODO: uncomment this once service is implemented
    //$scope.books = BookStoreService.getBooks();   
    
}]);