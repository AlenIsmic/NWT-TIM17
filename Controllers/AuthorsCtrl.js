'use strict';

app.controller("AuthorsCtrl", ['$scope', '$http', 'BookStoreService', 
        function($scope, $http, BookStoreService){
    
            $scope.bookStoreService = BookStoreService;
            
            BookStoreService.getAuthors().then(function (data){
                $scope.authors = data.data;                
            });
            
            $scope.addAuthor = function(){
              $("#addAuthorModal").modal('show');  
            };
            
            $scope.addAuthorConfirm = function(){
              //call service and pass createAuthorModel
              var result = BookStoreService.addAuthor($scope.createAuthorModel).then(function(result){
                  if(result.statusText == "OK")
                  {
                      $scope.authors.push($scope.createAuthorModel);
                      $("#addAuthorModal").modal('hide');
                  }
              });
            };
            
            $scope.showAuthorDetail = function(ind){
                $scope.selectedAuthor = $scope.authors[ind];
                $("#showAuthorDetailModal").modal('show');
            };
            
            $scope.showAllAuthorBook = function(ind){
                //call service that will get author's books and redirect to books view and show filtered books
                BookStoreService.filterBooksByAuthor(ind);
            };
            
            $scope.addNewBookForAuthor = function(ind){
              //open up modal for adding new book, allow user to go to filtered books view 
              $scope.addBookAuthorInd = ind;
              $scope.addBookModel = {
                  available: true
              };
              $("#addBookByAuthorModal").modal('show');
            };
            
            $scope.addAuthorsBookConfirm = function(){
                BookStoreService.addBooksByAuthor($scope.addBookModel).then(function(result){
                    if(result.statusText === "OK")
                        $("#addBookByAuthorModal").modal('hida'); 
                });
            };
    
}]);