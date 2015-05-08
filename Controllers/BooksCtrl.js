'use strict';

app.controller("BooksCtrl", ['$scope', 'BookStoreService', 
        function($scope, BookStoreService){
            
            BookStoreService.getBooks().then(function (data){
                $scope.books = data.data;               
            });

            $scope.addBook = function(){
                $("#addBookModal").modal('show');
            };

            $scope.addBookConfirm = function(){
                //call service and pass createBookModel
                var result = BookStoreService.addBook($scope.createBookModel).then(function(result){
                    if(result.statusText == "OK")
                    {
                        $scope.authors.push($scope.createBookModel);
                        $("#addBookModal").modal('hide');
                    }
                });
            };
}]);