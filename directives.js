angular.module('bookStoreApp')
    .directive('addAuthorData', function () {
        return {
            restrict: 'EA',    
            template:function(elem,attrs) {
                return '<div class="modal-body">' +
                            '<table class="table">' +
                                '<tr>'+
                                    '<th>Name</th>'+
                                    '<td><input type="text" ng-model="createAuthorModel.name" /></td>'+
                                '</tr>'+
                                '<tr>'+
                                    '<th>Biography</th>'+
                                    '<td><input type="textarea" ng-model="createAuthorModel.biography" /></td>'+
                                '</tr>'+
                            '</table>'+
                        '</div>'+
                        '<div class="modal-footer">'+
                            '<button type="button" class="btn btn-success" ng-click="addAuthorConfirm()">Add author</button>'+
                            '<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>'+
                        '</div>'
           },
            link: function ($scope, element, attrs) {
                element.bind('mouseover', function() {
                    element.css('cursor', 'pointer');
                });
            }
    }
});

angular.module('bookStoreApp').directive('addBookData', function () {
    return {
        restrict: 'EA',
        template:function(elem,attrs) {
            return  '<div class="modal-dialog">'+
            '<div class="modal-content">'+
            '<div class="modal-body">'+
            '<table class="table">'+
            '<tr>'+
            '<th>Title</th>'+
            '<td><input type="text" ng-model="addBookModel.title"></td>'+
            '</tr>'+
            '<th>Summary</th>'+
            '<td><textarea ng-model="addBookModel.summary"></textarea></td>'+
            '</tr>'+
            '<tr>'+
            '<th>Genre</th>'+
            '<td>'+
            '<select ng-model="addBookModel.genre">'+
            '<option value="1">Drama</option>'+
            '<option value="2">Thriller</option>'+
            '<option value="3">Comedy</option>'+
            '<option value="4">Education</option>'+
            '</select>'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<th>Price</th>'+
            '<td><input type="text" ng-model="addBookModel.price"></td>'+
            '</tr>'+
            '<tr>'+
            '<th>Available</th>'+
            '<td>'+
            '<input type="radio" ng-value="true"  ng-model="addBookModel.available">Yes'+
            '<input type="radio" ng-value="false" ng-model="addBookModel.available">No'+
            '</td>'+
            '</tr>'+
            '<tr>'+
            '<th>Cover photo</th>'+
            '<td><input type="file" ng-model="addBookModel.cover"></td>'+
            '</tr>'+
            '</table>'+
            '</div>'+
            '<div class="modal-footer">'+
            '<button type="button" class="btn btn-success" ng-click="addBookConfirm()">Add book</button>'+
            '<button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>'+
            '</div>'+
            '</div>'+
            '</div>'
        },
        link: function ($scope, element, attrs) {
            element.bind('mouseover', function() {
                element.css('cursor', 'pointer');
            });
        }
    }
});

angular.module('bookStoreApp')
    .directive('addReviewData', function () {
        return {
            restrict: 'EA',
            template:function(elem,attrs) {
                return '<div class="modal-body">'+
                    '<div>'+
                        '<alert ng-repeat="alert in reviewAlerts" type="{{alert.type}}" close="closeReviewAlert($index)">{{alert.msg}}</alert>'+
                    '</div>'+
                    '<input type="text" ng-model="addReviewModel.content" placeholder="Add comment" style="width: 80%; height: 60px">'+
                    'Rate:  <select ng-model="addReviewModel.rate">'+
                                '<option value="1">1</option>'+
                                '<option value="2">2</option>'+
                                '<option value="3">3</option>'+
                                'option value="4">4</option>'+
                                '<option value="5">5</option>'+
                            '</select>'+
                '</div>'
            },
            link: function ($scope, element, attrs) {
                element.bind('mouseover', function() {
                    element.css('cursor', 'pointer');
                });
            }
        }
    });


angular.module('bookStoreApp')
    .directive('orderBook', function () {
        return {
            restrict: 'EA',
            template:function(elem,attrs) {
                return '<div class="modal-body">'+
                        '<table>'+
                        '<tr><th>Book title </th><td>{{orderBookModel.title}}</td></tr>'+
                        '<tr><th>Price </th><td>{{orderBookModel.price}}</td></tr>'+
                        '</table></div>'+
                        '<div class="modal-footer">'+
                        '<button type="button" class="btn btn-success" ng-click="orderBookConfirm()">Order book</button>'+
                        '<button type="button" class="btn btn-success" data-dismiss="modal">Close</button>'+
                        '</div>';
            }
        };
    });