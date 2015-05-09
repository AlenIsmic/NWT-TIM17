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
                        '</div>;'
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
            '<option value="drama">Drama</option>'+
            '<option value="thriler">Thriler</option>'+
            '<option value="comedy">Comedy</option>'+
            '<option value="education">Education</option>'+
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
            '<button type="button" class="btn btn-success" ng-click="addAuthorsBookConfirm()">Add book</button>'+
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