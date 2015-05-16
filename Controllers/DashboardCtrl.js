
'use strict';
app.controller("DashboardCtrl", ['$scope', 'BookStoreService',
    function($scope, BookStoreService){

       /* BookStoreService.getBooks().then(function (data){
            $scope.books = data.data;
        });*/

         BookStoreService.getBookNumberByGenre().then(function (data){
         var bookNumber = data.data;

         $scope.labels = ["Drama", "Thriller", "Comedy", "Education"];
         $scope.data = [bookNumber.Drama, bookNumber.Thriller, bookNumber.Comedy, bookNumber.Education];
         });
    }]);

