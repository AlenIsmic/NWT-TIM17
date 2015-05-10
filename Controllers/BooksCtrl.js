'use strict';

app.controller("BooksCtrl", ['$scope', 'BookStoreService', 
        function($scope, BookStoreService){
            
            BookStoreService.getBooks().then(function (data){
                $scope.books = data.data;               
            });

            $scope.addBook = function(){
                $("#addBookModal").modal('show');
            };

            $scope.showBookDetail = function(ind){
                $scope.selectedBook = $scope.books[ind];
                $("#showBookDetailModal").modal('show');
            };

            $scope.addBook = function(){
                $("#addBookModal").modal('show');
            };

            $scope.addBookConfirm = function(){
                 BookStoreService.addBook($scope.addBookModel);
                $("#addBookModal").modal('hide');

                $scope.books.push($scope.addBookModel);
                $scope.addBookModel = null;
            };
}]);