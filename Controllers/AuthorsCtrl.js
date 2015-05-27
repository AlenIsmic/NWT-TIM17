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
                BookStoreService.getBooksAndAuthors().then(function(data){
                    for(var i = 0; i < data.data.length; i++)
                        if(data.data[i].author === authorId)
                            $scope.authorsBooksCon.push(data.data[i]);
                
                    if($scope.authorsBooksCon.length !== 0)
                    {
                        $scope.detailedAuthorBooks = {};
                        $scope.detailedAuthorBooks.name = $scope.authors[ind].name;
                        $scope.detailedAuthorBooks.books = [];
                        for(var j = 0; j < $scope.authorsBooksCon.length; j++)
                        {
                            BookStoreService.getBookById($scope.authorsBooksCon[j].book).then(function(another_data){
                                $scope.detailedAuthorBooks.books.push(another_data.data); 
                            });
                        }

                        $("#showAuthorBooksModal").modal("show");
                    }
                    else
                        alert("Cannot find books matching the selected author !");
                });
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
                        $("#addBookByAuthorModal").modal('hide'); 
                });
            };
    
}]);