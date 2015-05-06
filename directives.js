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