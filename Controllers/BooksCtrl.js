'use strict';

app.controller("BooksCtrl", ['$scope', 'BookStoreService', 
        function($scope, BookStoreService){
            $scope.bookStoreService = BookStoreService;
            
            var filteredBooks = BookStoreService.getFilteredBooks();
            if(filteredBooks !== null && filteredBooks.length !== undefined && filteredBooks.length !== 0)
                    $scope.books = filteredBooks;     
            else
                BookStoreService.getBooks().then(function (data){
                    $scope.books = data.data;               
                });
    
}]);