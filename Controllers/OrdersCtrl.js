'use strict';
app.controller("OrdersCtrl", ['$scope', '$rootScope', 'BookStoreService',
    function($scope, $rootScope, BookStoreService){

        BookStoreService.getMyOrders().then(function (data){
            var currentUser = $rootScope.cookieUser.currentUser;
            var currentUserId = 1;
            BookStoreService.getUsers().then(function(data){
                for(var i = 0; i < data.data.length; i++)
                    if(data.data[i].name === currentUser.username)
                        currentUserId = data.data[i].id;
            });
            for(var i = 0; i < data.data.length; i++)
                if(data.data[i].user === currentUserId)
                    $scope.orders.push(data.data[i]);
        });

}]);

