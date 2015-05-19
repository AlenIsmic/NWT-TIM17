
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

        $scope.topBooks = ["Game Of Thrones", "Book OF RA", "Some Book", "Other"];
        $scope.numOfComments = [300, 500, 40, 10];

        $scope.colours =  [{ // default
            "fillColor": "rgba(224, 108, 112, 1)",
            "strokeColor": "rgba(207,100,103,1)",
            "pointColor": "rgba(220,220,220,1)",
            "pointStrokeColor": "#fff",
            "pointHighlightFill": "#fff",
            "pointHighlightStroke": "rgba(151,187,205,0.8)"
        }];

    }]);

