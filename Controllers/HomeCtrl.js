'use strict';

app.controller("HomeCtrl", ['$scope', '$http', 'BookStoreService',
    function($scope, $http, BookStoreService){
        
        $scope.selectedBooks = [];
        $scope.booksToSelect = [];
        
        BookStoreService.getBooksHomepage().then(function (data){
                $scope.selectedBooks = data.data;  
            });
        
        $scope.makeHomepageBook = function(bookId){
          BookStoreService.setHomepageBook(bookId);
        };
        
        $scope.openChangeHomepage = function(bookToChangeID)
        {
            BookStoreService.getBooks().then(function(data){
                $scope.booksToSelect = [];
               for(var i = 0; i < data.data.length; i++)
                   if(data.data[i].isOnHomepage !== "1")
                       $scope.booksToSelect.push(data.data[i]);
            });
            $scope.bookToChange = bookToChangeID;
            $("#showOtherBooks").modal('show');
        };
        
        $scope.changeHomepageConfirm = function(selectedBookId)
        {
            BookStoreService.updateHomepage($scope.bookToChange, selectedBookId).then(function(){
                BookStoreService.getBooksHomepage().then(function(data)
                {
                    $scope.selectedBooks = data.data;
                    $("#showOtherBooks").modal('hide');
                });
            });
        };    
        
        $scope.showBookDetail = function(ind){
            $scope.selectedBook = $scope.selectedBooks[ind];
                $("#showHomepageBookDetailModal").modal('show');
            };
}]);