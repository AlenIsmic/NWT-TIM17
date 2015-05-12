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

            $scope.showReviews = function(ind){
                $scope.bookReviews = null;
                $scope.selectedBook = $scope.books[ind];

                //ReviewType = 2 represents Book Review Type -- TODO: SWITCH TO ENUM
                $scope.$reviewType = 2;

                BookStoreService.getReviews($scope.selectedBook.id, $scope.$reviewType ).then(function (data){
                    $scope.bookReviews = data.data;
                });

                $("#showReviewsModal").modal('show');
            };

            $scope.addReview = function(){

                //TODO after login implementation grab userID from session
                $scope.addReviewModel.user = 1;
                $scope.addReviewModel.reference = $scope.selectedBook.id;
                //ReviewType = 2 represents Book Review Type -- TODO: SWITCH TO ENUM
                $scope.addReviewModel.type = 2;

                BookStoreService.addReview($scope.addReviewModel);

                $scope.bookReviews.push($scope.addReviewModel);
                $scope.addReviewModel = null;
            };