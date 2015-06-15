'use strict';

app.controller("AuthorsCtrl", ['$scope', '$http', 'BookStoreService', 
        function($scope, $http, BookStoreService){
    
            $scope.bookStoreService = BookStoreService;
            $scope.authorsAlerts = [];
            
            $scope.closeAlert = function(index) {
                $scope.authorsAlerts.splice(index, 1);
            };
            
            BookStoreService.getAuthors().then(function (data){
                $scope.authors = data.data;                
            });
            
            $scope.addAuthor = function(){
              $("#addAuthorModal").modal('show');  
            };
            
            $scope.addAuthorConfirm = function(){
              //call service and pass createAuthorModel
              var result = BookStoreService.addAuthor($scope.createAuthorModel, $scope.authorsAlerts).then(function(result){
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
                var authorId = $scope.authors[ind].id;
                $scope.authorsBooksCon = [];
                BookStoreService.getBooksAndAuthors(authorId).then(function(data){
                    $scope.authorsBooksCon = data.data;
                    $scope.selectedAuthorName = $scope.authors[ind].name;
//                
                    if($scope.authorsBooksCon.length !== 0)
                    {
                        $("#showAuthorBooksModal").modal("show");
                    }
                    else
                        alert("Cannot find books matching the selected author !");
                });
            };
            
            $scope.addNewBookForAuthor = function(ind){
              $scope.addBookAuthorInd = ind;
              $scope.addBookModel = {
                  available: true,
                  isOnHomepage: "0",
                  author: $scope.authors[ind].id
              };
              $("#addBookByAuthorModal").modal('show');
            };
            
            $scope.addAuthorsBookConfirm = function(){
                BookStoreService.addBooksByAuthor($scope.addBookModel).then(function(result){
                    if(result.statusText === "OK")
                        $("#addBookByAuthorModal").modal('hide'); 
                });
            };
    
}]);